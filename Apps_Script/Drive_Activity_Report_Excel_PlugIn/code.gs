function driveActivityReport() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();

  // Get the spreadsheet time zone

  var timezone = ss.getSpreadsheetTimeZone();

  // Find files modified in the last 24 hours

  var today = new Date();
  var oneDayAgo = new Date(today.getTime() - 1 * 24 * 60 * 60 * 1000);
  var startTime = oneDayAgo.toISOString();

  // The magic search expression
  var search = '(trashed = true or trashed = false) and (modifiedDate > "' + startTime + '")';
  var files = DriveApp.searchFiles(search);

  // Loop through all the files in the search results
  while (files.hasNext()) {
    var file = files.next();

    var fileName = file.getName();
    var fileURL = file.getUrl();
    var userName = file.getName
    var dateCreated = Utilities.formatDate(file.getDateCreated(), timezone, 'yyyy-MM-dd HH:mm');

    sheet.appendRow([dateCreated, fileName, fileURL]);
  }
}