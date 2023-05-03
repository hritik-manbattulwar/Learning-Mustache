function renderHello() {
  let data = {
    stooges: ["Moe", "Larry", "Curly"],
  };
  var template = document.getElementById("template").innerHTML;
  var rendered = Mustache.render(template, data);
  document.getElementById("target").innerHTML = rendered;
}
