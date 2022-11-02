<template>
  <q-layout view="hHh lpR fff">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar class="text-center text-h5 flex justify-center items-center">
        <q-avatar class="q-mr-md">
          <q-icon name="code" size="40px" />
        </q-avatar>
        TPW Technology
      </q-toolbar>
      <div class="row">
        <q-tabs
          class="col-sm-8 col-md-8 col-lg-8"
          inline-label
          mobile-arrows
          outside-arrows
        >
          <q-route-tab to="/" label="Home" />
          <q-route-tab to="/categorias" label="Categorias" />
          <q-route-tab to="/publicacoes" label="Publicações" />
          <q-route-tab to="/sobre" label="Sobre nós" />
          <q-route-tab to="/contato" label="Contate-nos" />
        </q-tabs>
        <search class="col-xs-11 col-sm-4 col-md-4 col-lg-4" />
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="row flex justify-center q-gutter-md">
          <div>Developed by TPW Technology @2022</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import Search from "../components/Search/Search.vue";
</script>
