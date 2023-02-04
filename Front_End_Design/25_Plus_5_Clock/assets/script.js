const initialState = {
    sessionTime: 25,
    breakTime: 5,
    showSettings: false };
  
  
  const audioUrl = "https://freesound.org/data/previews/66/66951_634166-lq.mp3";
  
  function App() {
    // Hooks
    const [status, setStatus] = React.useState("default");
    const [pomodoroTimer, setPomodoroTimer] = React.useState();
    const [sessionTime, setSessionTime] = React.useState(
    initialState.sessionTime);
  
    const [breakTime, setBreakTime] = React.useState(initialState.breakTime);
    const [timeLeft, setTimeLeft] = React.useState(sessionTime * 60);
    const [showSettings, setShowSettings] = React.useState(
    initialState.showSettings);
  
    const [minuteScaleWidth, setWidth] = React.useState(0);
  
    // References
    const container = React.useRef(null);
    const sound = React.useRef(null);
  
    // Constants
    const units = [
    50,
    55,
    0,
    5,
    10,
    15,
    20,
    25,
    30,
    35,
    40,
    45,
    50,
    55,
    0,
    5,
    10];
  
    const scaleStyle = {
      transform: `translateX(${-(
      minuteScaleWidth / 60 *
      Math.floor(timeLeft))
      }px)` };
  
    const formatedTime =
    ("0" + Math.floor(timeLeft / 60)).slice(-2) +
    ":" +
    ("0" + timeLeft % 60).slice(-2);
    const isRunning = status === "session" || status === "break";
    const statusStyle = status;
  
    // Material-Ui icons
    const iReset = React.createElement("i", { className: "material-icons" }, "autorenew");
    const iSettings = React.createElement("i", { className: "material-icons" }, "settings");
    const iArrowUp = React.createElement("i", { className: "material-icons" }, "arrow_upward");
    const iArrowDown = React.createElement("i", { className: "material-icons" }, "arrow_downward");
    const iCheck = React.createElement("i", { className: "material-icons" }, "check");
    const iPlay = React.createElement("i", { className: "material-icons" }, "play_arrow");
    const iPause = React.createElement("i", { className: "material-icons" }, "pause");
    const iAdd = React.createElement("i", { className: "material-icons" }, "add");
    const iSubstract = React.createElement("i", { className: "material-icons" }, "remove");
  
    // UseEffect
    React.useEffect(() => {
      setWidth(container.current.offsetWidth / 20);
    }, [container]);
  
    React.useEffect(() => setTimeLeft(sessionTime * 60), [sessionTime]);
  
    React.useEffect(() => {
      if (pomodoroTimer && !isRunning) {
        setPomodoroTimer();
        clearInterval(pomodoroTimer);
      } else if (!pomodoroTimer && isRunning) {
        setPomodoroTimer(
        setInterval(() => {
          setTimeLeft(timeLeft => {
            return timeLeft - 1;
          });
        }, 1000));
  
      }
    }, [isRunning, pomodoroTimer]);
  
    React.useEffect(() => {
      if (timeLeft <= 0 && isRunning) {
        sound.current.play();
        setStatus(status === "session" ? "break" : "session");
        setTimeLeft(status === "session" ? breakTime * 60 : sessionTime * 60);
      }
    }, [timeLeft, isRunning, pomodoroTimer, sessionTime, breakTime, status]);
  
    // Functions
    const handleStartStop = () => {
      if (status === "default") setStatus("session");
      if (status === "session") setStatus("session-pause");
      if (status === "session-pause") setStatus("session");
      if (status === "break") setStatus("break-pause");
      if (status === "break-pause") setStatus("break");
    };
  
    const handleReset = () => {
      sound.current.pause();
      sound.current.currentTime = 0;
      setStatus("default");
      setSessionTime(initialState.sessionTime);
      setBreakTime(initialState.breakTime);
      setTimeLeft(sessionTime * 60);
    };
  
    const handleSettingsReset = () => {
      setSessionTime(initialState.sessionTime);
      setBreakTime(initialState.breakTime);
      setTimeLeft(sessionTime * 60);
    };
  
    const handleFlip = () => {
      setShowSettings(!showSettings);
    };
  
    return (
      React.createElement("div", { className: "App" }, 
  
      React.createElement("header", { className: "header" }, 
      React.createElement("div", { className: "header-container" }, 
      React.createElement("div", { className: "header-logo" }, 
      React.createElement("span", { className: "logo-text-first" }, "5 ", 
  
      React.createElement("strong", { className: "plus" }, 
      React.createElement("span", { className: "bx bx-plus bx-burst" }, "")), " 25 "), " CLOCK"))), 
  
  
  
  
  
  
  
  
  
  
  

      React.createElement("main", { className: "App-main", ref: container }, 
  
      React.createElement("div", {
        className: `main-side main-front ${status} ${
        showSettings ? "hide" : ""
        } ` }, 
  
      React.createElement("div", { className: "main-header" }, 
      React.createElement("button", { className: "reset-btn", id: "reset", onClick: handleReset },
      iReset), 
  
      React.createElement("div", { className: "main-header-content" }, 
      React.createElement("div", { id: "session-label", className: "session-label" }, 
      React.createElement("span", null, "Session"), " ", React.createElement("span", null, sessionTime, " min")), 
  
      React.createElement("div", { id: "break-label", className: "session-label" }, 
      React.createElement("span", null, "Break"), " ", React.createElement("span", null, breakTime, " min"))), 
  
  
      React.createElement("button", {
        className: "settings-btn",
        onClick: handleFlip,
        disabled: status !== "default" },
  
      iSettings)), 
  
  
  
      React.createElement("div", { className: "main-body" }, 
      React.createElement("div", { className: "timer-display" }, 
      React.createElement("div", { className: "timer-label", id: "timer-label" },
      status !== "default" ?
      status.toUpperCase() :
      "Click Button To Start"), 
  
      React.createElement("div", { className: "timer-time-left", id: "time-left" },
      formatedTime), 
  
      React.createElement("audio", { id: "beep", src: audioUrl, ref: sound })), 
  
      React.createElement("div", { className: "timer-scale-display" }, 
      React.createElement("div", { className: `time-scale-display-shadow  ${status}-shadow` }), 
      React.createElement("div", { className: "timer-scale-arrow" }, "\u25BC"), 
      React.createElement("div", { className: "timer-scale-container", style: scaleStyle },
      units.map((unit, i) => 
      React.createElement("div", { key: i, className: "timer-scale-unit" }, 
      React.createElement("div", { className: "timer-scale-strokes" }, 
      React.createElement("div", null), 
      React.createElement("div", null), 
      React.createElement("div", null), 
      React.createElement("div", null), 
      React.createElement("div", null)), 
  
      React.createElement("div", {
        className: "timer-scale-label",
        style: {
          transform:
          unit < 10 ? "translateX(-3px)" : "translateX(-8px)" } },
  
  
      unit)))))), 
  
  
  
  
  
  
      React.createElement("div", { className: "main-footer" }, 
      React.createElement("button", {
        className: "timer-btn",
        id: "start_stop",
        onClick: handleStartStop },
  
      !isRunning ? iPlay : iPause))),
  
  
      " ", 
  
  
      React.createElement("div", { className: `main-side main-back ${!showSettings ? "hide" : ""}` }, 
      React.createElement("div", { className: "main-header" }, 
      React.createElement("button", {
        className: "reset-btn",
        onClick: handleSettingsReset,
        disabled:
        sessionTime === initialState.sessionTime &&
        breakTime === initialState.breakTime },
  
  
      iReset), 
  
      React.createElement("div", { className: "main-header-content" }, "Settings"), 
      React.createElement("button", { onClick: handleFlip, className: "big" },
      iCheck)), 
  
  
  
      React.createElement("div", { className: "main-body" }, 
      React.createElement("div", { className: "settings" }, 
      React.createElement("div", { className: "settings-label" }, "Work"), 
      React.createElement("div", { className: "settings-action" }, 
      React.createElement("button", {
        className: "settings-button",
        id: "session-increment",
        onClick: () =>
        sessionTime < 60 && setSessionTime(sessionTime + 1) },
  
  
      iAdd), 
  
      React.createElement("input", {
        className: "settings-input",
        id: "session-length",
        type: "number",
        value: sessionTime,
        onChange: (e) =>
        e.target.value > 0 &&
        e.target.value < 60 &&
        setSessionTime(Number(e.target.value)) }), 
  
  
      React.createElement("button", {
        className: "settings-button",
        id: "session-decrement",
        onClick: () =>
        sessionTime > 1 && setSessionTime(sessionTime - 1) },
  
  
      iSubstract))), 
  
  
  
  
      React.createElement("div", { className: "settings" }, 
      React.createElement("div", { className: "settings-label" }, "Break"), 
      React.createElement("div", { className: "settings-action" }, 
      React.createElement("button", {
        className: "settings-button",
        id: "break-increment",
        onClick: () => breakTime < 60 && setBreakTime(breakTime + 1) },
  
      iAdd), 
  
      React.createElement("input", {
        className: "settings-input",
        id: "break-length",
        type: "number",
        value: breakTime,
        onChange: (e) =>
        e.target.value >= 0 &&
        e.target.value < 60 &&
        setBreakTime(Number(e.target.value)) }), 
  
  
      React.createElement("button", {
        className: "settings-button",
        id: "break-decrement",
        onClick: () => breakTime > 1 && setBreakTime(breakTime - 1) },
  
      iSubstract))))),
  
  
  
  
      " ")));
  
  
  
  
  }
  
  ReactDOM.render( 
  React.createElement(React.StrictMode, null, 
  React.createElement(App, null)),
  
  document.getElementById("root"));