<template>
  <div class="row items-center justify-center q-mb-sm">
    <h4 class="text-center">Categorias mais visitadas</h4>
  </div>
  <div class="q-pa-md flex flex-center">
    <q-card class="my-card">
      <q-list v-for="categoria in categorias" :key="categoria.id">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon :name="categoria.icone" color="orange-9" />
          </q-item-section>
          <q-item-section> {{ categoria.nome }} </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </div>
</template>

<script setup>
import { api } from "../../boot/axios";
import { onMounted, ref } from "vue";

const categorias = ref([]);

async function listarCategorias() {
  const { data } = await api.get("/categorias_destaques");
  categorias.value = data;
  console.log(data);
}

onMounted(() => {
  listarCategorias();
});
</script>

<style scoped>
h4 {
  color: #0b021f;
  border-bottom: 0.1em solid #0b021f;
}
.my-card {
  width: 100%;
  max-width: 720px;
}
</style>