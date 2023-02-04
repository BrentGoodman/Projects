/*Sound sources:
    Kick/Hat/Snare: https://freesound.org/people/Hard3eat/
    Lastic: https://freesound.org/people/deleted_user_2195044/
    Clap: https://freesound.org/people/gmortizwavs/sounds/417170/
    Warble: https://freesound.org/people/VisionSpace/sounds/322856/
*/
const sounds = {
    Q: { source: 'https://freesound.org/data/previews/243/243158_2195044-lq.mp3',
      key: 81,
      name: 'High Tome' },
    W: { source: 'https://freesound.org/data/previews/243/243159_2195044-lq.mp3',
      key: 87,
      name: 'Mid Tone' },
    E: { source: 'https://freesound.org/data/previews/243/243147_2195044-lq.mp3',
      key: 69,
      name: 'Low Tone' },
    A: { source: 'https://freesound.org/data/previews/322/322856_4455510-lq.mp3',
      key: 65,
      name: 'Warble' },
    S: { source: 'https://freesound.org/data/previews/336/336656_2278554-lq.mp3',
      key: 83,
      name: 'Heavy Kick' },
    D: { source: 'https://freesound.org/data/previews/417/417170_6603437-lq.mp3',
      key: 68,
      name: 'Clap' },
    Z: { source: 'https://freesound.org/data/previews/387/387347_2278554-lq.mp3',
      key: 90,
      name: 'High Hat' },
    X: { source: 'https://freesound.org/data/previews/387/387346_2278554-lq.mp3',
      key: 88,
      name: 'Kick' },
    C: { source: 'https://freesound.org/data/previews/387/387345_2278554-lq.mp3',
      key: 67,
      name: 'Snare' } };
  
  
  //Functions
  function buttonPress(id, src) {
  
  }
  
  //React
  class Button extends React.Component {
    constructor(props) {
      super(props);
      this.playSound = this.playSound.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
  
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
  
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }
  
    playSound() {
      this.props.updateDisplay(sounds[this.props.letter].name);
      var ID = 'button ' + this.props.letter;
  
      //Update CSS for button
      if (!document.getElementById(ID).classList.contains('activate')) {
        document.getElementById(ID).classList.add('activate');
        document.getElementById('display').classList.add('display-active');
      };
  
      //Play Sound assosiated with button
      const sound = document.getElementById(this.props.letter);
      sound.currentTime = 0;
      sound.play();
  
      //Return style to normal:
      setTimeout(function () {
        if (document.getElementById(ID).classList.contains('activate')) {
          document.getElementById(ID).classList.remove('activate');
          document.getElementById('display').classList.remove('display-active');
        }
      }, 200);
    }
  
    handleKeyPress(event) {
      if (event.keyCode == sounds[this.props.letter].key) {
        this.playSound();
      }
    }
  
    render() {
      var ID = 'button ' + this.props.letter;
      return (
        React.createElement("button", {
          className: this.props.classes.join(' '),
          id: ID,
          onClick: this.playSound },
        this.props.letter, 
        React.createElement("audio", {
          className: "clip",
          id: this.props.letter,
          src: sounds[this.props.letter].source })));
  
  
    }}
  
  
  class Display extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        React.createElement("div", { id: "display", className: "display" }, this.props.displayMessage));
  
  
    }}
  
  
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        displayMessage: 'Click or press key' };
  
      this.updateDisplay = this.updateDisplay.bind(this);
    }
  
    updateDisplay(newMessage) {
      this.setState({
        displayMessage: newMessage });
  
    }
  
    render() {
      return (
        React.createElement("div", { id: "outer-container" }, 
        React.createElement(Display, { displayMessage: this.state.displayMessage }), 
        React.createElement("div", { id: "pad-wrap" }, 
        React.createElement(Button, { letter: "Q", updateDisplay: this.updateDisplay, classes: ['drum-pad'] }), 
        React.createElement(Button, { letter: "W", updateDisplay: this.updateDisplay, classes: ['drum-pad'] }), 
        React.createElement(Button, { letter: "E", updateDisplay: this.updateDisplay, classes: ['drum-pad'] }), 
        React.createElement(Button, { letter: "A", updateDisplay: this.updateDisplay, classes: ['drum-pad'] }), 
        React.createElement(Button, { letter: "S", updateDisplay: this.updateDisplay, classes: ['drum-pad'] }), 
        React.createElement(Button, { letter: "D", updateDisplay: this.updateDisplay, classes: ['drum-pad'] }), 
        React.createElement(Button, { letter: "Z", updateDisplay: this.updateDisplay, classes: ['drum-pad'] }), 
        React.createElement(Button, { letter: "X", updateDisplay: this.updateDisplay, classes: ['drum-pad'] }), 
        React.createElement(Button, { letter: "C", updateDisplay: this.updateDisplay, classes: ['drum-pad'] }))));
  
  
  
    }}
  ;
  
  ReactDOM.render( React.createElement(App, null), document.getElementById('React-App'));