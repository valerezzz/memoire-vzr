import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default class ScrollManager {
  constructor() {
    this.init();
  }

  init() {
    console.log("ScrollManager initialized");
    const part1 = document.querySelector("#part-1");
    const appContent = document.querySelector(".app_content");

    if (part1 && appContent) {
      appContent.addEventListener("scroll", () => {
        const containerHeight = appContent.clientHeight;

        let scrollPercentage =
          (appContent.scrollTop / (appContent.scrollHeight - containerHeight)) *
          100;
        scrollPercentage = Math.min(Math.max(scrollPercentage, 0), 100);

        console.log(
          `Pourcentage de défilement: ${scrollPercentage.toFixed(2)}%`
        );
      });
    }
  }
}
