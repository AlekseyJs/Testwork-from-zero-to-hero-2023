/*TextAnimation*/
function reveal() {
  let reveals = document.querySelectorAll("._anim-items");
  
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;
  
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("_active");
    } else {
      reveals[i].classList.remove("_active");
    }
  }
}
  
window.addEventListener("scroll", reveal);
reveal();

/*BurgerMenu*/

const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger-menu");
burger.addEventListener("click", () =>{
  burgerMenu.classList.toggle('show');
})