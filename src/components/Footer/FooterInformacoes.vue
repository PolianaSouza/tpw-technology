<template>
  <div class="row flex flex-center">
    <h5 class="text-center">Entre em contato conosco</h5>
  </div>
  <div class="row flex flex-center text-white altura-div">
    <p>Sugestões, reclamações e elogios</p>
  </div>
  <div class="flex justify-center q-my-md">
    <q-form @submit="onSubmit" class="stilo-card">
      <!-- <div class="row"> -->
      <div class="row justify-center items-center">
        <div class="col-xs-8 col-sm-5 col-md-4 q-gutter-md q-pa-md">
          <q-input
            v-model="form.nome"
            placeholder="Nome"
            filled
            class="bg-white stilo-input"
            dense
          />
          <q-input
            v-model="form.email"
            placeholder="E-mail"
            filled
            class="bg-white stilo-input"
            dense
          />
          <q-input
            v-model="form.categoria"
            placeholder="Categoria"
            filled
            class="bg-white stilo-input"
            dense
          />
        </div>
        <div class="col-xs-8 col-sm-5 col-md-4 q-gutter-md q-pa-md">
          <q-input
            v-model="form.mensagem"
            filled
            type="textarea"
            placeholder="Digite sua mensagem"
            class="bg-white stilo-input"
          />
        </div>
      </div>
      <div class="flex flex-center q-my-md">
        <q-btn label="enviar" color="orange-9" unelevated class="estilo-btn" />
      </div>
      <!-- </div> -->
    </q-form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  nome: "",
  email: "",
  categoria: "",
  mensagem: "",
});
</script>

<style scoped>
.altura-div {
  margin-top: -35px;
}

.stilo-input {
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
}

.stilo-card {
  width: 100%;
  max-width: 1200px;
  border-radius: 10px;
}

.estilo-btn {
  width: 100%;
  max-width: 250px;
  font-size: 1.2em;
  letter-spacing: 1.5px;
  font-weight: bold;
}
.estilo-btn:hover {
  background-color: #f5cb40fc !important;
  color: #000 !important;
}
</style>
