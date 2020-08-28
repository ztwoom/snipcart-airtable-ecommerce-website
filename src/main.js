// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "../src/assets/tailwind.css";
import "typeface-roboto";
import AppShell from "./layouts/AppShell";
import ProductDetailList from "./components/ProductDetailList";
import ProductDetailItem from "./components/ProductDetailItem";
import AppHover from "./components/AppHover";
import AppModal from "./components/AppModal";
import Message from "vue-m-message";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  head.style.push({
    type: "text/css",
    cssText: `
    .snipcart-modal__container {
      background-color: #F5F5F5 !important;
      z-index: 30 !important;
    }
    `
  });
  Vue.use(Message);
  Vue.component("AppShell", AppShell);
  Vue.component("ProductDetailList", ProductDetailList);
  Vue.component("ProductDetailItem", ProductDetailItem);
  Vue.component("AppHover", AppHover);
  Vue.component("AppModal", AppModal);
}
