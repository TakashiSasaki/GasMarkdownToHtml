function doGet(){
  var htmlTemplate = HtmlService.createTemplateFromFile("sample");
  var htmlOutput = htmlTemplate.evaluate().setTitle("Markdown to HTML sample");
  return htmlOutput;
}

function getHtmlFromString(markdownString) {
  var html = marked(markdownString);
  return html;
}

function getHtmlFromUrl(url){
  if(url === undefined) url = "https://raw.githubusercontent.com/chjj/marked/master/README.md";
  try {
    var httpResponse = UrlFetchApp.fetch(url);
    var markdownText = httpResponse.getContentText();
    var html = marked(markdownText);
    return html;
  } catch(e) {
    Logger.log(e);
    return "Failed to fetch " + url;
  }
}
