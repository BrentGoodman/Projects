function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class MarkdownPreviewer extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      rawInput: placeholder });}


  onChange(raw) {
    this.setState({ rawInput: raw });
  }

  render() {
    window.marked.setOptions({
      breaks: true });


    return (
      React.createElement("div", { className: "App" }, 
      React.createElement("header", { className: "sidebar" }, 
      React.createElement("img", {
        src: "https://amr-adel.github.io/fcc-markdown-previewer/static/media/logo.da62a73a.svg",
        alt: "markdown previewer logo",
        className: "logo" }), 

      React.createElement("h1", { className: "brand" }, "Markdown previewer")), 


      React.createElement("div", { className: "container" }, 
      React.createElement("h2", { className: "label" }, "editor"), 
      React.createElement("textarea", {
        name: "editor",
        id: "editor",
        value: this.state.rawInput,
        onChange: e => this.onChange(e.target.value) })), 



      React.createElement("article", { className: "container" }, 
      React.createElement("h2", { className: "label" }, "preview"), 
      React.createElement("div", {
        className: "preview",
        id: "preview",
        dangerouslySetInnerHTML: {
          __html: window.marked(this.state.rawInput) } }))));





  }}


const placeholder = `# Markdown Previewer

# Brent Goodman

## Contract Specialist Manager

### Aspiring Full Stack Web Developer ###
---
Management-level __contract specialist manager__ with ~~thirteen~~ **13+ years'** experience performing "commercial contract management" and *project management*. :
* Contract Management
* Drafting Legal Documents
* People Management
* Learn more about me at [BrentGoodman.github.io](https://BrentGoodman.github.io)

Here are my skills:

1. Microsoft
 - Microsoft Excel
 - Microsoft Project
 - Microsoft SharePoint
 - Microsoft Teams
 - Microsoft Word
2. Salesforce
3. Asana
4. JIRA (Atlassian)
5. Adobe Software
 - Acrobat
 - Premiere Pro
 - InDesign
 - Illustrator
6. Google Suite
 - Google Docs
 - Google Sheets
 - Google Cloud
 - Google Drive
 - Google App Script
7. Programming
 + Python
 + HTML
 + CSS
 +JavaScript
 + CPP 

I look forward to talking with you soon! &#10004; 

![Brent Goodman Logo](https://github.com/BrentGoodman/brentgoodman.github.io/blob/9052f2623ae8abf44a24ed86af6071a20ba086b6/assets/img/logos/BrentGoodmanLogoWhite.webp)"
`;

ReactDOM.render( React.createElement(MarkdownPreviewer, null), document.getElementById("root"));