class MarkdownPreviewer extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "preview" }, 
      React.createElement("h4", null, "\u2705 Markdown previewer"), 
      React.createElement("div", { dangerouslySetInnerHTML: this.props.markup })));


  }}


class MarkdownEditor extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "editor" }, 
      React.createElement("h4", null, "\u270E Markdown editor"), 
      React.createElement("textarea", { onChange: this.props.onChange, value: this.props.value })));


  }}


class MarkdownContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "# Brent Goodman\n## Contract Specialist Manager\n### Aspiring Full Stack Web Developer ###\n---\nManagement-level __contract specialist manager__ with ~~thirteen~~ **13+ years'** experience performing `commercial contract management` and *project management*. :\n* Contract Management\n* Drafting Legal Documents\n* People Management\n* Learn more about me at [BrentGoodman.github.io](https://BrentGoodman.github.io)\n\nMy skills are the following:\n1. Microsoft\n - Microsoft Excel\n - Microsoft Project\n - Microsoft SharePoint\n - Microsoft Teams\n - Microsoft Word\n2. Salesforce\n3. Asana\n4. JIRA (Atlassian)\n5. Adobe Software\n - Acrobat\n - Premiere Pro\n - InDesign\n - Illustrator\n6. Google Suite\n - Google Docs\n - Google Sheets\n - Google Cloud\n - Google Drive\n - Google App Script\n7. Programming\n + Python\n + HTML\n + CSS\n +JavaScript\n + CPP \n\nI look forward to talking with you soon! &#10004; \n\n ![Brent Goodman Logo](https://github.com/BrentGoodman/brentgoodman.github.io/blob/9052f2623ae8abf44a24ed86af6071a20ba086b6/assets/img/logos/BrentGoodmanLogoWhite.webp)"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  createMarkup() {
    var options = { sanitize: true };
    return { __html: marked(this.state.text, options) };
  }

  handleChange(e) {
    this.setState({
      text: e.target.value });

  }

  render() {
    return (
      React.createElement("div", null, 
      React.createElement(MarkdownEditor, { onChange: this.handleChange, value: this.state.text }), 
      React.createElement(MarkdownPreviewer, { markup: this.createMarkup() })));


  }}


class App extends React.Component {
  render() {
    return (
      React.createElement(MarkdownContainer, null));

  }}


ReactDOM.render( 
React.createElement(App, null),
document.getElementById('app'));