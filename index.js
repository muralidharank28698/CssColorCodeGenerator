function ColorGenerate() {
  var RandomColor = Math.floor(Math.random() * 16777216).toString(16);
  document.body.style.backgroundColor = "#" + RandomColor;
  var val = document.getElementById("inner");
  val.innerHTML = "#" + RandomColor;
}
