<template>
  <q-layout view="hHh lpR fff">
    <q-header bordered reveal class="bg-primary text-white">
      <q-toolbar class="text-center text-h5 flex justify-center items-center">
        <q-avatar class="q-mr-md">
          <q-icon name="code" size="40px" />
        </q-avatar>
        TPW Technology
      </q-toolbar>
      <div class="row justify-between q-mx-sm">
        <q-tabs
          class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
          inline-label
          mobile-arrows
          outside-arrows
        >
          <q-route-tab to="/" label="Home" />
          <q-route-tab to="/categorias" label="Categorias" />
          <q-route-tab to="/publicacoes" label="Publicações" />
          <!-- <q-route-tab to="/sobre" label="Sobre nós" />
          <q-route-tab to="/contato" label="Contate-nos" /> -->
        </q-tabs>
        <search class="col-xs-12 col-sm-6 col-md-5 col-lg-4" />
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary text-white">
      <footer-informacoes />
      <q-toolbar>
        <q-toolbar-title class="row flex justify-center q-gutter-md">
          <div class="text-footer">Developed by TPW Technology @2022</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import Search from "../components/Search/Search.vue";
import FooterInformacoes from "../components/Footer/FooterInformacoes.vue";
</script>
<style scoped>
.text-footer {
  font-size: 0.6em;
}
</style>
