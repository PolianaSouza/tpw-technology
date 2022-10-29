<template>
  <q-layout view="hHh lpR fff">
    <q-header bordered class="bg-primary text-white" height-hint="98">
      <div class="row q-ml-md">
        <q-toolbar class="col-md-7">
          <q-toolbar-title>
            <q-avatar>
              <q-icon name="code" size="30px" />
            </q-avatar>
            TPW Technology
          </q-toolbar-title>
        </q-toolbar>
        <search class="col-md-4" />
        <div class="col q-mt-sm">
          <q-icon name="account_circle" size="50px" color="white" />
        </div>
      </div>
      <q-tabs align="center">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/categorias" label="Categorias" />
        <q-route-tab to="/publicacoes" label="Publicações" />
        <q-route-tab to="/sobre" label="Sobre nós" />
        <q-route-tab to="/contato" label="Contate-nos" />
      </q-tabs>
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
