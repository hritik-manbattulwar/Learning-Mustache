function renderHello() {
  fetch("template.mustache")
    .then((response) => response.text())
    .then((template) => {
      const rendered = Mustache.render(template, { name: "Luke" });
      document.getElementById("target").innerHTML = rendered;
    });
}
