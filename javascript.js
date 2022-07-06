/*var reloadon
var enteredpage

reloadon = parseInt(localStorage.getItem("reloadon"))

if (reloadon == 1) {
    document.getElementById("reloadbutton").style.background="green"

} else {
    document.getElementById("reloadbutton").style.background="red"

}
function reloadonchange() {
    if (reloadon == 1) {
        localStorage.setItem("reloadon", 0)
        reloadon = 0
        document.getElementById("reloadbutton").style.background="red"
    } else {
        reloadon = 1
        localStorage.setItem("reloadon", 1)
        document.getElementById("reloadbutton").style.background="green"

    }
}
setInterval(()=> {reload()}, "1000")
function reload() {

    if (reloadon == true) {
        console.log("reloading")
        location.reload()
    }
<div class="progressrows">
                        <a target="_blank" href="https://www.reflexmath.com/"><img
                                        src="https://www.reflexmath.com/images/reflex-facebook.png" class="projectsimage"
                                        alt="REFLEX"></a>
                        <p>My interest in coding started around the 4th grade. We practiced our math skills
                                using a game
                                site called REFLEX. Eventually, we were given free time on the computers after
                                completing our typing courses. Sometime around then I found out about the
                                Scratch
                                website and decided to recreate one of the REFLEX game. </p>
                </div>

}
*/
//Three D stuff
var shown = false
function opennav() {
    button = document.querySelectorAll(".navbuttons")
    button.forEach(button => {
        if (!shown) {
                button.style.animation = 'fade-in 1s linear';
                button.style.opacity = '1';
        } else {
            button.style.animation = 'fade-out 1s linear';
            button.style.opacity = '0';
        }

      });
      if (!shown) {
        shown=true
      } else {
        shown=false
      }
}

function nav(id) {
    if (shown) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      });}
      }