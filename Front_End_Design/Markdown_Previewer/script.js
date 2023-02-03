class MarkdownPreviewer extends React.Component {
    render() {
      return (
        <div className='markdown-previewer'>
          <h4>&#9883; Markdown previewer</h4>
          <div dangerouslySetInnerHTML={this.props.markup}></div>
        </div>
      );
    }
  }
  
  class MarkdownEditor extends React.Component {
    render() {
      return (
        <div className='markdown-editor'>
          <h4>&#9997; Markdown editor</h4>
          <textarea onChange={this.props.onChange} value={this.props.value}></textarea>
        </div>
      );
    }
  }
  
  class MarkdownContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {text: "# Brent Goodman\n## Contract Specialist Manager\n### Aspiring Full Stack Web Developer ###\n---\nManagement-level __contract specialist manager__ with ~~thirteen~~ **13+ years'** experience performing `commercial contract management` and *project management*. :\n* Contract Management\n* Drafting Legal Documents\n* People Management\n* Learn more about me at [BrentGoodman.github.io](https://BrentGoodman.github.io)\n\nMy skills are the following:\n1. Microsoft Excel, Project, SharePoint, Teams, Word\n2. Salesforce\n3. Asana\n4. JIRA (Atlassian)\n5. Adobe Software\n- Acrobat\n- Premiere Pro\n- InDesign\n- Illustrator\n6. Google Suite\n- Docs\n- Sheets\n- Cloud\n- Drive\n- App Script\n7. Programming\n+ Python\n+ HTML\n+ CSS\n+JavaScript\n+ CPP \n\nI look forward to talking with you soon! &#10004;"};
      this.handleChange = this.handleChange.bind(this);
    }
    createMarkup() {
      var options = {sanitize: true};
      return {__html: marked(this.state.text, options)};
    }
  
    handleChange(e) {
      this.setState({
        text: e.target.value
      });
    }
  
    render() {
      return (
        <div>
          <MarkdownEditor onChange={this.handleChange} value={this.state.text}/>
          <MarkdownPreviewer markup={this.createMarkup()} />
        </div>
      );
    }
  }
  
  class App extends React.Component {
    render() {
      return (
        <MarkdownContainer />
      );
    }
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );