export default class Interface {
  constructor() {
    this.header = document.querySelector(".app_header");

    this.index = document.getElementById("index");
    this.indexButton = document.getElementById("index-button");
    this.indexList = document.querySelector(".index_list");
    this.indexSublist = document.querySelector(".index_sublist");
    this.isIndexOpen = false;

    this.footer = document.querySelector(".app_footer");

    this.bibliography = document.getElementById("bibliography-button");
    this.isBibliographyOpen = false;

    this.init();
  }

  init() {
    console.log("Interface initialized");
    this.indexButton.addEventListener("click", () => {
      this.isIndexOpen = !this.isIndexOpen;
      if (this.isIndexOpen) {
        this.indexOpen();
      } else {
        this.indexClose();
      }
    });

    this.bibliography.addEventListener("click", () => {
      this.isBibliographyOpen = !this.isBibliographyOpen;
      if (this.isBibliographyOpen) {
        this.bibliographyOpen();
      } else {
        this.bibliographyClose();
      }
    });
  }

  indexOpen() {
    this.index.style.left = "0";
    this.indexList.style.display = "block";
    this.indexSublist.style.display = "block";
  }

  indexClose() {
    this.index.style.left = "-50vw";
  }

  bibliographyOpen() {
    const headerHeight = this.header.offsetHeight;
    this.footer.style.height = `calc(100vh - ${headerHeight}px)`;
  }

  bibliographyClose() {
    this.footer.style.height = "35px";
  }
}
