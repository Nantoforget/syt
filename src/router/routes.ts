const routes = [
  {
    path: "/home",
    component: () => import("@/pages/Home/index.vue"),
    name: "Home"
  },
  {
    path: "/hospital",
    component: () => import("@/pages/Hospital/index.vue"),
    name: "Hospital",
    redirect: "/hospital/:hoscode",
    children: [
      {
        path: "/hospital/:hoscode",
        component: () => import("@/pages/HospitalReserve/index.vue"),
        name: "Reserve"
      },
      {
        path: "/hospital/detail/:hoscode",
        component: () => import("@/pages/HospitalDetail/index.vue"),
        name: "Detail"
      },
      {
        path: "/hospital/notice/:hoscode",
        component: () => import("@/pages/HospitalNotice/index.vue"),
        name: "Notice"
      }
    ]
  },
  { path: "/", redirect: "/home" }
];
export default routes;
