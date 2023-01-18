let words = document.querySelectorAll("span");

let getXPercentage = x => {
  return x / window.innerWidth;
};

let updateFontWeight = x => {
  // Font weight based on cursor position
  let xPercentage = getXPercentage(x);
  let fontWeight = 800 * xPercentage + 100;

  // Stagger styling using setTimeout & the index value
  words.forEach((letter, i) => {
    setTimeout(function() {
      letter.style.fontVariationSettings = "'wght' " + fontWeight;
    }, 120 * (i * 0.6));
  });
};

// The event-listener
document.body.addEventListener("mousemove", e => {
  let X = e.clientX;
  updateFontWeight(X);
});
