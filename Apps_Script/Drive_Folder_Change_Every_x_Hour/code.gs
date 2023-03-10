/*
Check TimeZone in AppsScript Manifest correct when recreating for someone else.
Checks for all folder changes within last xhours and sends email with Username/Email Address
if there are any. Run Trigger Function to have this setup a recurring trigger.
*/



// ************* UPDATE THIS SECTION FOR YOUR GOOGLE DRIVE FOLDER *************

// ID of the Google Drive folder you want notifications for
var folderID = '0B-ZiA-lFMfFCbkQ2VzZVWEhvZ0k';

// How frequently would your like to check for changes? In hours, from: 1, 2, 4, 6, 8, 12
var hours = 12;

// Email address where you would like notifications to be sent
var emailAddress = 'brent@texaspaceauthority.org';

// ************* UPDATE THIS SECTION FOR YOUR GOOGLE DRIVE FOLDER *************



/*
Create a Trigger to run 'emailChanges' Function every x hours
*/
function createTrigger() {

  ScriptApp.newTrigger('emailOnFolderRevisions')
    .timeBased()
    .everyHours(hours)  // run every x hours
    .create();
  Logger.log('New Trigger successfully created');

}


/*
Delete all Triggers
*/
function deleteTriggers() {
  var allTriggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < allTriggers.length; ++i) {
    ScriptApp.deleteTrigger(allTriggers[i]);
  }
  Logger.log('All Triggers were deleted');
}



function emailOnFolderRevisions() {

  // set x hours time period - as we only want updates in the last x hours
  var xHours = (hours * 60) * 60 * 1000;  // convert to milliseconds

  // get current date/time
  var currentDateTime = new Date();

  // create empty array to push any folder changes into later
  var editList = [];


  // get all revisions for Drive folder
  revisions = Drive.Revisions.list(folderID);

  // get all revision items (array returned)
  var revisionItems = revisions.items;

  // check if there are revisions before proceeding - otherwise no changes have been made
  if (revisionItems.length > 0) {

    // yes there are revisions so loop through each one in turn **********************************
    for (var i = 0; i < revisions.items.length; i++) {

      // extract single revision for folder to work with
      var revision = revisionItems[i];

      // date/time last modification was made
      var modifiedDate = new Date(revision.modifiedDate);
      Logger.log('modifiedDate is: ' + modifiedDate);


      // check if modified date within our given time period, otherwise ignore **********************
      if ((currentDateTime - modifiedDate) < xHours) {

        // yes modified date is within our given time period
        Logger.log('Yes within last ' + hours + ' hours');

        // get Username of last modifier
        var lastModifierUsername = revision.lastModifierUsername;

        // get User Email address of last modifier
        var lastModifierEmail = revision.lastModifyingUser.emailAddress;

        // push items into empty array
        editList.push([modifiedDate, lastModifierUsername, lastModifierEmail]);

      }
      else {
        // modified date is older than our given time period
        Logger.log('No more than ' + hours + ' hours');
      }
      // check if modified date within our given time period, otherwise ignore **********************


    }
    // yes there are revisions so loop through each one in turn **********************************


  }
  else {
    Logger.log('No folder revisions found.');
  }


  // create email for sending with latest folder revisions *********************************
  if (editList.length > 0) {

    // there are revisions to be emailed

    // get folder Url for linking in email
    var folderUrl = DriveApp.getFolderById(folderID).getUrl();

    // create Email subject
    var emailSubject = 'Folder changes have been made';

    // START create Email body *************************************
    var body = "Hello," + "\n\n";
    body += "Changes have been made within the last " + hours + " hours." + "\n\n";
    body += "Link to folder: " + folderUrl + "\n\n";

    for (var j = 0; j < editList.length; j++) {
      body += "> " + editList[j] + "\n\n";
    }

    body += "Thank you" + "\n\n";
    body += "TPA Drive Change Notification" + "\n";
    // END create Email body *************************************

    // send the Email
    MailApp.sendEmail(emailAddress, emailSubject, body);

  }
  else {
    Logger.log('No folder revisions found.');   // no revisions exist for emailing
  }
  // create email for sending with latest folder revisions *********************************

}