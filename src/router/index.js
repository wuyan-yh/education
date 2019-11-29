import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/dashboard.vue"),
    children: [
      {
        path: "/homepage/adv/pc",
        name: "homepage",
        component: () => import("../components/homepage/homepage.vue")
      },
      {
        path: "/order/orderInfo",
        name: "orderInfo",
        component: () => import("../components/orderInfo.vue")
      },
      {
        path: "/homepage/zone/pc",
        name: "homepagezonepc",
        component: () => import("../components/homepage/homepagezonepc.vue")
      },
      {
        path: "/homepage/website/navBar",
        name: "websitenavBar",
        component: () => import("../components/homepage/websitenavBar.vue")
      },
      {
        path: "/homepage/website/websiteNav",
        name: "websiteNav",
        component: () => import("../components/homepage/websiteNav.vue")
      },
      {
        path: "/homepage/website/websiteLink",
        name: "websiteLink",
        component: () => import("../components/homepage/websiteLink.vue")
      },
      {
        path: "/course/course/course",
        name: "course",
        component: () => import("../components/course/course.vue")
      },
      {
        path: "/course/course/audit",
        name: "audit",
        component: () => import("../components/course/audit.vue")
      },
      {
        path: "/course/category/category",
        name: "category",
        component: () => import("../components/course/category.vue")
      },
      {
        path: "/lecturer/lecturer/lecturer",
        name: "lecturer",
        component: () => import("../components/lecturer/lecturer.vue")
      },
      {
        path: "/lecturer/profit/profit",
        name: "profit",
        component: () => import("../components/lecturer/profit.vue")
      },
      {
        path: "/lecturer/lecturer/audit",
        name: "lecturer/audit",
        component: () => import("../components/lecturer/audit.vue")
      },
      {
        path: "/user/ext",
        name: "userext",
        component: () => import("../components/userext.vue")
      },
      {
        path: "/sys/pms/user",
        name: "pmsuser",
        component: () => import("../components/syc/pmsuser.vue")
      },
      {
        path: "/sys/pms/role",
        name: "role",
        component: () => import("../components/syc/role.vue")
      },
      {
        path: "/sys/pms/menu",
        name: "menu",
        component: () => import("../components/syc/menu.vue")
      },
      {
        path: "/sys/website/website",
        name: "website",
        component: () => import("../components/syc/website.vue")
      },
      {
        path: "/sys/website/sys",
        naem: "websitesys",
        component: () => import("../components/syc/websitesys.vue")
      },
      {
        path: "/sys/platform/platform",
        naem: "platform",
        component: () => import("../components/syc/platform.vue")
      },
      {
        path: "/sys/log/sys",
        naem: "logsys",
        component: () => import("../components/syc/logsys.vue")
      },
      {
        path: "/sys/log/orderPay",
        naem: "orderPay",
        component: () => import("../components/syc/orderPay.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
