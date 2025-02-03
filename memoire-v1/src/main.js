import App from "./app.js";
import ScrollManager from "./scroll.js";
document.addEventListener("DOMContentLoaded", () => {
  console.log("Le DOM est complètement chargé");

  const app = new App();
  const scroll = new ScrollManager();
});
