let add = document.querySelector("#add");
let substract = document.querySelector("#substract");

add.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let resultado = parseInt(output.innerText) + 1;
  output.innerText = resultado;
});

substract.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let resultado = parseInt(output.innerText) - 1;
  output.innerText = resultado;
});
