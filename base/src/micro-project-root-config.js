import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: (location) => location.pathname == "/", // ["/"],
// });

registerApplication({
  name: "@micro-project/vue-first",
  app: () => System.import("@micro-project/vue-first"),
  activeWhen: ["/"], // 以/vue-first开头的就可以匹配的到
  customProps: { propMessage: "兄弟我给你数据了哟！- first" },
});

registerApplication({
  name: "@micro-project/vue-second",
  app: () => System.import("@micro-project/vue-second"),
  activeWhen: ["/vue-second"],
  customProps: { propMessage: "兄弟我给你数据了哟！- second" },
});
// registerApplication({
//   name: "@micro-project/navbar",
//   app: () => System.import("@micro-project/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
