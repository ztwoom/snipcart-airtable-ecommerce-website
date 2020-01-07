// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "typeface-roboto";
import "../src/assets/styles.css";
import AppShell from "./layouts/AppShell";
import ProductDetailList from "./components/ProductDetailList";
import ProductDetailItem from "./components/ProductDetailItem";
import AppHover from "./components/AppHover";
import AppModal from "./components/AppModal";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("AppShell", AppShell);
  Vue.component("ProductDetailList", ProductDetailList);
  Vue.component("ProductDetailItem", ProductDetailItem);
  Vue.component("AppHover", AppHover);
  Vue.component("AppModal", AppModal);
}
