setTimeout(function() {
           
  $(document).ready(function () {
    var swiper = new Swiper(".swiper-container", {
      speed: 3000,
      pagination: ".swiper-pagination",
      paginationClickable: true,
      effect: "coverflow",
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: true,
      delay: 3000,
      coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
        slideShadows: false,
      },
   
    });
  });

        }, 7000);
