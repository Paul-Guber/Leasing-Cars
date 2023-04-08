try {
  const swiper = new Swiper(".swiper", {
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
}
catch (e) {
  //console.log("no swiper")
}