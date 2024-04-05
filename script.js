const btnMobile = document.querySelector("#btn-mobile");
const link = document.querySelectorAll("a");
const nav = document.querySelector("nav");
const toggleMenu = (e) => {
  let state = nav.classList.toggle("active");
  if (state) {
    btnMobile.setAttribute("src", "./images/cancel-bar.svg");
  } else {
    btnMobile.setAttribute("src", "./images/menu-bar.svg");
  }
  console.log(e.target.id);
};

btnMobile.addEventListener("click", toggleMenu);
link.forEach((item) => {
  console.log(item);
  const linkDisable = (e) => {
    let idLink = e.target.id;
    switch (idLink) {
      case "#html":
        state = nav.classList.toggle("active");
        btnMobile.setAttribute("src", "./images/menu-bar.svg");
        break;
      case "#css":
        state = nav.classList.toggle("active");
        btnMobile.setAttribute("src", "./images/menu-bar.svg");
        break;
      case "#js":
        state = nav.classList.toggle("active");
        btnMobile.setAttribute("src", "./images/menu-bar.svg");
        break;
      default:
        break;
    }
  };
  item.addEventListener("click", linkDisable);
});
