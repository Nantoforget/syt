const routes = [
  {
    path: "/home",
    component: () => import("@/pages/Home/index.vue"),
    name: "home"
  },
  {
    path: "/hospitalDetail",
    component: () => import("@/pages/hospitalDetail/index.vue"),
    name: "hospitalDetail"
  },
  { path: "/", redirect: "/home" }
];
export default routes;
