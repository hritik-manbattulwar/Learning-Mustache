function renderHello() {
  var template = document.getElementById("template").innerHTML;
  var rendered = Mustache.render(template, { name: "Hritik" });
  document.getElementById("target").innerHTML = rendered;
}
