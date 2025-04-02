 <script>
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const sliderContainer = document.getElementById("slider-container");

    function openSlider(index) {
      slideIndex = index;
      sliderContainer.style.display = "flex";
      updateSlide();
    }

    function closeSlider() {
      sliderContainer.style.display = "none";
    }

    function changeSlide(step) {
      slideIndex += step;
      if (slideIndex < 0) slideIndex = slides.length - 1;
      if (slideIndex >= slides.length) slideIndex = 0;
      updateSlide();
    }

    function updateSlide() {
      slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? "block" : "none";
      });
    }

  </script>
