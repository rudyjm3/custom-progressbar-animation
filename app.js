const fadeObserver = new IntersectionObserver(
   (elsToFade) => {
      elsToFade.forEach((el) => {
         console.log(el);
         if (el.isIntersecting) {
            setTimeout(() => {
               el.target.classList.add('faded');
            }, +el.target.getAttribute('data-delay') || 0);
            //stop observering elements after the function has ran for the 1st time
            fadeObserver.unobserve(el.target);
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