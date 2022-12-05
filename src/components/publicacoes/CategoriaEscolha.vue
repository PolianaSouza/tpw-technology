<template>
  <div class="row items-center justify-center">
    <h4 class="text-center">Escolha uma categoria</h4>
  </div>
  <div class="flex flex-center q-mb-lg">
    <q-card class="my-card" flat>
      <q-list v-for="categoria in categorias" :key="categoria.id" class="">
        <q-item clickable v-ripple @click="acessar(`${categoria.id}`)">
          <q-item-section avatar>
            <q-icon :name="categoria.icone" color="orange-9" size="2em" />
          </q-item-section>

          <q-item-section> {{ categoria.nome }} </q-item-section>
        </q-item>
        <q-separator color="purple-1" />
      </q-list>
    </q-card>
  </div>
</template>

<script setup>
import { api } from "../../boot/axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const categorias = ref([]);
const router = useRouter();

async function listarCategorias() {
  const { data } = await api.get("/categorias_destaques");
  categorias.value = data;
  console.log(data);
}

function acessar(categoria) {
  router.push(`publicacoes/${categoria}`);
  console.log("aqui", categoria);
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