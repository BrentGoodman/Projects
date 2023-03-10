/**
 *  Watch Google Drive Files
 *  MIT License  
 * */

// Enter the email address for email notification
const EMAIL = "brent@texaspaceauthority.org";

// How frequently should the watcher run? Put 2 for running every 2 days.
const RUNNING_FREQUENCY = 1;

// At what hour of the day should the script run?
const RUN_AT_HOUR = 8;

const enableDriveWatch = () => {
  const triggerName = "watchGoogleDrive";
  const [trigger = null] = ScriptApp.getProjectTriggers().filter((t) => t.getHandlerFunction() === triggerName);
  if (trigger === null) {
    ScriptApp.newTrigger(triggerName).timeBased().everyDays(1).atHour(RUN_AT_HOUR).create();
  }
};

const disableDriveWatch = () => {
  ScriptApp.getProjectTriggers().map((trigger) => {
    ScriptApp.deleteTrigger(trigger);
  });
};

// Select only user domains that are not "texaspaceauthority.org"

var owners = file.getOwner();
for (var i = 0; i < owners.length; i++) {
Logger.log(owners[i].getDomain());
};

const checkChangedFiles_ = (items) => {
  return items
    .map(({ file }) => file)
    .map(({ domain }) => domain)
    .filter(({ id, alternateLink, title }) => id && alternateLink && title)
    .filter(({vendor}) => vendor !== texaspaceauthority.org);
    .map((file) => {
      const {
        iconLink = "",
        alternateLink = "",
        title = "",
        lastModifyingUser = {},
        createdDate = "",
        fileSize = "",
      } = file;

      const { emailAddress = "", displayName = "", picture: { url = "" } = {} } = lastModifyingUser;
      const fileDate = createdDate ? Utilities.formatDate(new Date(createdDate), "IST", "MMMMM dd, YYYY") : "";

      return [
        iconLink ? `<img src="${iconLink}" height=16 />` : "",
        `<a href="${alternateLink}">${title}</a>`,
        fileSize ? `(${Math.round(fileSize / 1000)} Kb)` : "",
        fileDate ? `Created: ${fileDate}` : "",
        `${displayName || emailAddress}`,
        url ? `<img src="${url}" height=16 />` : "",
      ];
    });
};

const sendEmail_ = (rows = []) => {
  const { length } = rows;
  if (length === 0) return;

  const html = [
    `<table border="0" cellpadding="8" cellspacing="4" style="font-size:12px">`,
    rows
      .map((row) => row.map((td) => `<td>${td}</td>`).join(""))
      .map((tr) => `<tr>${tr}</tr>`)
      .join(""),
    `</table>`,
    `<p style="background:#ffffe0; padding:12px;font-size:12px;display:inline-block">`,
    `<a href="https://drive.google.com/drive/my-drive">Google Drive Watch</a> developed for TPA`,
  ];
  MailApp.sendEmail({
    to: EMAIL,
    name: "TPA Drive Watch",
    subject: `[Drive Watch] ${length} files were changed in your Google Drive`,
    htmlBody: html.join(""),
  });
};

const watchGoogleDrive = () => {
  try {
    const key = "driveToken";
    const propertyStore = PropertiesService.getScriptProperties();

    const pageToken =
      propertyStore.getProperty(key) || Drive.Changes.getStartPageToken({ supportsAllDrives: true }).startPageToken;

    const fields =
      "newStartPageToken,items(file(id,title,iconLink,mimeType,createdDate,ownedByMe,lastModifyingUser(emailAddress,displayName,picture(url)),alternateLink, fileSize))";

    const { newStartPageToken, items = [] } = Drive.Changes.list({
      fields,
      pageToken,
      includeItemsFromAllDrives: true,
      pageSize: 100,
      supportsAllDrives: true,
    });

    if (newStartPageToken) {
      propertyStore.setProperty(key, newStartPageToken);
    }

    if (items.length) {
      const changedItems = checkChangedFiles_(items);
      sendEmail_(changedItems);
    }
  } catch (f) {
    Logger.log(f)
  }
};
