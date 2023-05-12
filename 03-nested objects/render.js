// Below commented code is example of how we render internal script
/* function renderHello() {
  let data = {
    name: {
      first: "Michael",
      last: "Jackson",
    },
    age: "RIP",
  };
  var template = document.getElementById("template").innerHTML;
  var rendered = Mustache.render(template, data);
  document.getElementById("target").innerHTML = rendered;
}
 */

function renderHello() {
  let data = {
    name: {
      first: "Michael",
      last: "Jackson",
    },
    age: "RIP",
  };
  fetch("template.mustache")
    .then((response) => response.text())
    .then((template) => {
      const rendered = Mustache.render(template, data);
      document.getElementById("target").innerHTML = rendered;
    });
}
