// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "typeface-roboto";
import "../src/assets/styles.css";
import AppShell from "./layouts/AppShell";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("AppShell", AppShell);
}
