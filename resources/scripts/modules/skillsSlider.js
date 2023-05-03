import { Splide } from "@splidejs/splide";

export const skillsSlider = {
  init() {
    this.bootstrap();
  },

  bootstrap() {
    var splide = new Splide(".skills__slider", {
      type: "loop",
      padding: "20vw",
    });

    splide.mount();
  },
};
