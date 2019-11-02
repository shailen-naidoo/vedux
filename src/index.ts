export { Vedux } from "./plugin";
export { Store } from "./store";

if (window) {
  // @ts-ignore
  window.VeduxPlugin = Vedux
  // @ts-ignore
  window.Store = Store
}