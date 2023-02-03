class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "" };

    this.displayQuote = this.displayQuote.bind(this);
  }

  componentDidMount() {
    this.displayQuote();
  }

  async fetchQuote() {
    let url =
    "./quotes.json";
    try {
      let res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }

  async displayQuote() {
    let res = await this.fetchQuote();
    let randomNum = Math.floor(Math.random() * res.quotes.length);
    this.setState({
      quote: res.quotes[randomNum].quote,
      author: res.quotes[randomNum].author });

  }

  render() {
    let twitterURL = `https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(
    this.state.quote + "\n- " + this.state.author)
    }`;
    return /*#__PURE__*/(
      React.createElement("div", { className: "quote-wrapper" }, /*#__PURE__*/
      React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
      React.createElement("blockquote", { className: "quote", id: "text" }, /*#__PURE__*/
      React.createElement("i", { className: "fas fa-quote-left" }), " ", this.state.quote + " ", /*#__PURE__*/
      React.createElement("i", { className: "fas fa-quote-right" }), /*#__PURE__*/
      React.createElement("p", { id: "author" }, this.state.author)), /*#__PURE__*/


      React.createElement("div", { className: "card-bottom" }, /*#__PURE__*/
      React.createElement("a", { href: twitterURL, target: "_blank", id: "tweet-quote" }, /*#__PURE__*/
      React.createElement("div", { id: "icon", title: "Tweet this quote!" }, /*#__PURE__*/
      React.createElement("i", { className: "fab fa-twitter" }))), /*#__PURE__*/


      React.createElement("div", { className: "btn" }, /*#__PURE__*/
      React.createElement("button", { id: "new-quote", onClick: this.displayQuote }, "New Quote"))))));







  }}


ReactDOM.render( /*#__PURE__*/React.createElement(AppComponent, null), document.getElementById("root"));