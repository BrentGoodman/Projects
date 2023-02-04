const keyPadObject = {
  clear: "C",
  negPos: "+/-",
  percentage: "%",
  divide: "/",
  seven: "7",
  eight: "8",
  nine: "9",
  multiply: "*",
  four: "4",
  five: "5",
  six: "6",
  subtract: "-",
  one: "1",
  two: "2",
  three: "3",
  add: "+",
  decimal: ".",
  zero: "0",
  equals: "=" };

let mapKeys = Object.keys(keyPadObject);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "0",
      result: "",
      input: { value: 0, name: "" },
      numbers: [],
      operators: [],
      upcomingIsNegative: false };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.keyboardPress = this.keyboardPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.controller = this.controller.bind(this);
    this.cleanInput = this.cleanInput.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyboardPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyboardPress);
  }

  keyboardPress(e) {
    let value;
    let name;
    let expectedValues = Object.values(keyPadObject);
    let index = expectedValues.findIndex(x => x == e.key);

    if (index >= 0) {
      value = e.key;
      name = mapKeys[index];
    } else {
      let defaults = {
        "Enter": () => {value = "=";name = "equals";},
        ",": () => {value = ".";name = "decimal";},
        "default": () => {value = "C";name = "clear";} };

      defaults[e.key] ? defaults[e.key]() : defaults["default"]();
    }

    let el = document.getElementById(name);
    el.classList.toggle("hover");

    this.controller(value, name);

    setTimeout(function () {
      el.classList.toggle("hover");
    }, 150);
  }

  handleClick(e) {
    let value = e.target.getAttribute("dataId");
    let name = e.target.id;

    this.controller(value, name);
  }

  controller(value, name) {
    let input = { value: value, name: name };
    let output = this.state.output;

    if (input.name == "clear") {
      this.clearDisplay();
      return;
    }

    if (input.value === "0" && output === "0") {
      return;
    }
    if (output === "0") {
      output = input.value;
    } else {
      output += input.value;
    }

    let updatedValues = this.cleanInput(output, input.value);

    if (updatedValues.numbersArr.length > 1) {
      let result = this.calculate(
      updatedValues.numbersArr, updatedValues.operatorsArr);

      this.setState({
        result: result });

    }

    if (input.name == "equals") {
      let result = this.calculate(updatedValues.numbersArr, updatedValues.operatorsArr);
      this.setState({
        output: result,
        numbers: [result],
        result: "",
        operators: [],
        upcomingIsNegative: false });


    } else {
      this.setState({
        output: updatedValues.displayStr,
        numbers: updatedValues.numbersArr,
        operators: updatedValues.operatorsArr,
        upcomingIsNegative: updatedValues.upcomingIsNegative });

    }
  }

  cleanInput(output, input) {
    let numbersArr = [...this.state.numbers];
    let operatorsArr = [...this.state.operators];
    let upcomingIsNegative = this.state.upcomingIsNegative;
    let displayStr = output;
    let prevChar = output[output.length - 2];

    if (!!~input.search(/[0-9]/)) {
      if (upcomingIsNegative) {
        numbersArr.push(`-${input}`);

      } else if (prevChar && !!~prevChar.search(/[0-9, .]/)) {
        numbersArr[numbersArr.length - 1] += input;

      } else {
        numbersArr.push(input);
      }

    } else if (input === ".") {
      let otherDots = numbersArr[numbersArr.length - 1].match(/[.]/g);
      if (!otherDots) {
        numbersArr[numbersArr.length - 1] += input;
      } else {
        removeLastOfDisplayStr(prevChar);
      }

    } else if (prevChar && !!~input.search(/[-, +, *, /]/)) {

      if (!!~prevChar.search(/[-, +, *, /]/)) {
        if (input === "-") {
          upcomingIsNegative = true;

        } else {
          if (upcomingIsNegative) {
            upcomingIsNegative = false;
            removeLastOfDisplayStr(input);
          }
          removeLastOfDisplayStr(input);
          operatorsArr[operatorsArr.length - 1] = input;
        }

      } else if (prevChar.match(/[.]/g)) {
        removeLastOfDisplayStr(input);
        numbersArr[numbersArr.length - 1] = numbersArr[numbersArr.length - 1].slice(0, -1);

      } else {
        operatorsArr.push(input);
      }

    }

    function removeLastOfDisplayStr(replacer) {
      let index = displayStr.length - 2;
      displayStr = displayStr.substr(0, index) + replacer + displayStr.substr(index + 2);
    }

    return { displayStr, numbersArr, operatorsArr, upcomingIsNegative };
  }

  calculate(numbers, operators) {

    let calculation = {
      "+": (x, y) => x + y,
      "-": (x, y) => x - y,
      "/": (x, y) => x / y,
      "*": (x, y) => x * y };


    function reducer(total, value, index, array) {
      let operator = operators[index - 1];
      let calc = calculation[operator](parseFloat(total), parseFloat(value));
      return calc;
    }

    return numbers.reduce(reducer);
  }

  clearDisplay() {
    this.setState({
      output: "0",
      result: "",
      numbers: [],
      operators: [],
      upcomingIsNegative: false });

  }

  render() {
    return(
      React.createElement("div", { id: "generalContainer" },
      React.createElement("div", { id: "title" },
      React.createElement("h5", null, "Javascript Calculator"),
      React.createElement("small", null, "Designed by Brent Goodman")),


      React.createElement("div", { id: "calcContainer" },
      React.createElement("div", { id: "displayContainer" },
      React.createElement("div", { id: "display" }, this.state.output),
      React.createElement("div", { id: "display2" }, this.state.result)),

      React.createElement("div", { id: "padContainer" },

      mapKeys.map(x => {
        let value = keyPadObject[x];
        let classNames = !!~value.search(/[-, +, *, /, %]/) ? "padKey operator" : "padKey";
        return(
          React.createElement("div", { key: "id-" + x, id: x,
            dataId: value,
            className: classNames,
            onClick: this.handleClick }, value));

      }))),


    ));



  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));