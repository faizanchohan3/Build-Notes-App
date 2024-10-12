const clsscont = document.querySelector(".class-container");
const btn = document.querySelector(".btn");
let nots = document.querySelectorAll(".input-box");

function sho() {
  clsscont.innerHTML = localStorage.getItem("notds");
}

sho();
function updat() {
  localStorage.setItem("notds", clsscont.innerHTML);
  console.log(localStorage.getItem("notds"));
}

btn.addEventListener("click", function (e) {
  let p = document.createElement("p");
  p.className = "input-box";
  p.contentEditable = "true";
  let pimg = document.createElement("img");
  pimg.src = "dlt.png";

  clsscont.appendChild(p).appendChild(pimg);
  let nots = document.querySelectorAll(".input-box");
});

clsscont.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updat();
  } else if (e.target.tagName === "P") {
    nots = document.querySelectorAll(".input-box");
    nots.forEach((nt) => {
      nt.onkeyup = function () {
        updat();
      };
    });
  }
});
