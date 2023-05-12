function renderHello() {
  let data = {
    name: "Tater",
    bold: function () {
      return function (text, render) {
        console.log("function");
        return "<b>" + render(text) + "</b>";
      };
    },
  };
  var template = document.getElementById("template").innerHTML;
  var rendered = Mustache.render(template, data);
  document.getElementById("target").innerHTML = rendered;
}
