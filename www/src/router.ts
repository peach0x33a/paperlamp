import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (to, _from, saved) => saved ?? (to.hash ? { el: to.hash, top: 80 } : { top: 0 }),
  routes: [
    { path: "/", component: () => import("./pages/HomePage.vue") },
    {
      path: "/docs",
      component: () => import("./layouts/DocsLayout.vue"),
      children: [
        { path: "", component: () => import("./pages/IntroPage.vue") },
        { path: "installation", component: () => import("./pages/InstallationPage.vue") },
        { path: "theming", component: () => import("./pages/ThemingPage.vue") },
        { path: "components/:slug", component: () => import("./pages/ComponentPage.vue"), props: true },
      ],
    },
    { path: "/:pathMatch(.*)*", component: () => import("./pages/NotFound.vue") },
  ],
});
