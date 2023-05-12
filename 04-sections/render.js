function renderHello() {
  let data = {
    stooges: [{ name: "Moe" }, { name: "Larry" }, { name: "Curly" }],
  };
  var template = document.getElementById("template").innerHTML;
  var rendered = Mustache.render(template, data);
  document.getElementById("target").innerHTML = rendered;
}
