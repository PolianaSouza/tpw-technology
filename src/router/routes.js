const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "categorias",
        component: () => import("pages/Categorias/Categorias.vue"),
      },
      {
        path: "publicacoes",
        component: () => import("pages/Publicacoes/Publicacoes.vue"),
      },
      { path: "sobre", component: () => import("pages/SobreNos/SobreNos.vue") },
      {
        path: "contato",
        component: () => import("pages/Contato/Contato.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
