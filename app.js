const fadeObserver = new IntersectionObserver(
   (elsToFade) => {
      elsToFade.forEach((el) => {
         if (el.isIntersecting) {
            el.target.classList.add('faded');
         }
      })
   }
)

const fadeEls = [
   ...document.querySelectorAll('.fade-up'),
   ...document.querySelectorAll('.fade-down'),
   ...document.querySelectorAll('.fade-right'),
   ...document.querySelectorAll('.fade-left'),
];

fadeEls.forEach((el) => {
   fadeObserver.observe(el);
})