export default class ScrollManager {
  constructor() {
    this.currentPart = 1;
    this.isScrollingHorizontally = false;

    this.part1 = document.getElementById("part-1");
    this.part2 = document.getElementById("part-2");
    this.part3 = document.getElementById("part-3");

    this.appContent = document.querySelector(".app_content");
    this.appMain = document.querySelector(".app_main");

    this.translatePercentage = 0;
    this.scrollSpeed = 0.01;

    this.init();
  }

  init() {
    console.log("ScrollManager initialized");

    window.addEventListener("wheel", (event) => {
      console.log("Direction Y:", event.deltaY);

      this.translatePercentage += event.deltaY * this.scrollSpeed;

      switch (this.currentPart) {
        case 1:
          this.part1.style.overflowY = "auto";
          this.part2.style.overflowY = "auto";
          this.part3.style.overflowY = "hidden";

          if (this.isScrollingHorizontally) {
            this.appMain.style.transform = `translateX(-${this.translatePercentage}%)`;

            if (this.translatePercentage > 33) {
              this.isScrollingHorizontally = false;
              this.appMain.style.transform = `translateX(-33.3%)`;
              this.part2.style.overflow = "auto";
              //   this.currentPart = 2;
            }

            console.log(this.translatePercentage);
          }

          this.part1.addEventListener("scroll", () => {
            const containerHeight = this.part1.clientHeight;
            const scrollPercentage =
              (this.part1.scrollTop /
                (this.part1.scrollHeight - containerHeight)) *
              100;

            console.log(scrollPercentage);

            if (
              scrollPercentage > 99.9 &&
              this.isScrollingHorizontally === false
            ) {
              this.isScrollingHorizontally = true;
              this.translatePercentage = scrollPercentage - 100;

              console.log(this.translatePercentage);
            }
          });

          break;
        case 2:
          this.part2.style.overflowY = "auto";
          this.part1.style.overflowY = "hidden";
          this.part3.style.overflowY = "hidden";

          if (this.isScrollingHorizontally) {
            this.appMain.style.transform = `translateX(-${this.translatePercentage}%)`;

            if (this.translatePercentage > 66) {
              this.isScrollingHorizontally = false;
              this.appMain.style.transform = `translateX(-66.6%)`;
              this.part2.style.overflow = "auto";

              this.currentPart = 3;
            }

            console.log(this.translatePercentage);
          }

          this.part2.addEventListener("scroll", () => {
            const containerHeight = this.part1.clientHeight;
            const scrollPercentage =
              (this.part2.scrollTop /
                (this.part2.scrollHeight - containerHeight)) *
              100;

            console.log(scrollPercentage);

            if (
              scrollPercentage > 99.9 &&
              this.isScrollingHorizontally === false
            ) {
              this.isScrollingHorizontally = true;
              this.translatePercentage = scrollPercentage - 100 + 33.3;

              console.log(this.translatePercentage);
            }
          });

          break;
        case 3:
          this.part3.style.overflowY = "auto";
          this.part1.style.overflowY = "hidden";
          this.part2.style.overflowY = "hidden";
          break;
      }
    });
  }
}
