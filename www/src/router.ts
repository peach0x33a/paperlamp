import { createRouter, createWebHistory } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    /** Full-height tool page: header, no footer. */
    app?: boolean;
    /** Chromeless page rendered inside the /create preview iframe. */
    bare?: boolean;
  }
}

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
        { path: "components", component: () => import("./pages/ComponentsIndexPage.vue") },
        { path: "components/:slug", component: () => import("./pages/ComponentPage.vue"), props: true },
      ],
    },
    { path: "/create", component: () => import("./pages/CreatePage.vue"), meta: { app: true } },
    { path: "/create/preview", component: () => import("./pages/PreviewPage.vue"), meta: { bare: true } },
    { path: "/:pathMatch(.*)*", component: () => import("./pages/NotFound.vue") },
  ],
});
