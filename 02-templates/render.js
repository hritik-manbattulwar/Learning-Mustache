function renderHello() {
  var template = document.getElementById("template").innerHTML;
  var rendered = Mustache.render(template, {
    name: "Chris",
    company: "<b>GitHub</b>",
  });
  document.getElementById("target").innerHTML = rendered;
}
