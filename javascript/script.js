const counters = document.querySelectorAll(".count");
const speed = 82;

// The code to start the animation is now wrapped in a function
const startCounters = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = parseInt(+counter.getAttribute("data-target"));
      const count = parseInt(+counter.innerText);
      const increment = Math.trunc(target / speed);
      if (count < target) {
        setTimeout(function() {counter.innerText = count + increment}, 30);
        
        setTimeout(updateCount, 1);
      } else {
        count.innerText = target;
      }
    };
    updateCount();
  });
}

window.addEventListener('scroll', startCounters, {
    once: true
  });


$(document).ready(function(){
    $("skills_section").onscroll(function(){
        $("#skill_row1").fadeIn();
        $("#skill_row2").fadeIn("slow");
        $("#skill_row3").fadeIn(3000);
    });
});