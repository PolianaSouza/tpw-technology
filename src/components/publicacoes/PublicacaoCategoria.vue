<template>
  <div-titulos titulo="Categoria < Front-End />" />
  <div class="row items-center justify-center q-mb-sm">
    <h5 class="text-center">Dicas para iniciantes</h5>
  </div>
  <div class="card flex flex-center items-center">
    <div class="card-items q-ma-md">
      <q-list class="row">
        <q-item
          class="col-3 items-center"
          clickable
          v-ripple
          v-for="dica in dicas_iniciante"
          :key="dica.id"
        >
          <q-item-section class="flex items-center justify-center item-click">
            <q-card class="my-card">
              <q-img :src="dica.imagem" alt="iniciando com front" />
            </q-card>
            <q-item-label class="text q-mt-md text-center">{{
              dica.titulo
            }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script setup>
import DivTitulos from "../Common/DivTitulos.vue";
import { onMounted, ref } from "vue";
import { api } from "../../boot/axios";

onMounted(() => {
  buscarPublicacoes();
});

const dicas_iniciante = ref([]);
async function buscarPublicacoes() {
  const { data } = await api.get("/dicas_para_iniciantes");
  dicas_iniciante.value = data;
  console.log("dicas", data);
}
// dicas_para_iniciantes
</script>

<style scoped>
h5 {
  color: #0b021f;
  border-bottom: 0.1em solid #0b021f;
  min-width: 200px;
  max-width: 250px;
  margin-bottom: 10px;
  font-weight: bold;
}
.card-items {
  width: 100%;
  max-width: 900px;
}
.my-card {
  width: 100%;
  max-width: 150px;
}
.text {
  font-size: 1.3em;
  font-weight: 500;
  max-width: 180px;
}
.q-img {
  width: 100%;
  max-width: 150px;
  height: 150px;
}
.item-click:hover {
  color: red;
}
</style>
