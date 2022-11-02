<template>
  <div class="row items-center justify-center q-mb-sm">
    <h4 class="text-center">Destaques</h4>
  </div>
  <div class="row items-center justify-center q-gutter-md">
    <q-card class="my-card text-center" flat>
      <img src="src/assets/ImgDestaques/duvida.png" alt="iniciando com front" />
      <!-- <div class="text">Iniciando com Front-End</div> -->
      <q-item clickable to="#" class="text"> Iniciando com Front-End </q-item>
    </q-card>
    <q-card class="my-card text-center" flat>
      <img src="src/assets/ImgDestaques/setup.png" alt="iniciando com front" />
      <q-item clickable to="#" class="text"> Configurando seu setup </q-item>
    </q-card>
    <q-card class="my-card text-center" flat>
      <img
        src="src/assets/ImgDestaques/cachorro.png"
        alt="iniciando com front"
      />
      <q-item clickable to="#" class="text"> Dúvidas sobre Programação </q-item>
    </q-card>
    <q-card class="my-card text-center" flat>
      <img src="src/assets/ImgDestaques/pc.png" alt="iniciando com front" />
      <q-item clickable to="#" class="text"> Montando seu computador </q-item>
    </q-card>
  </div>
</template>

<script setup>
</script>

<style>
.my-card {
  width: 100%;
  max-width: 150px;
}
.text {
  font-size: 1.3em;
  font-weight: 500;
}
h4 {
  color: #0b021f;
  border-bottom: 0.1em solid #0b021f;
  min-width: 200px;
  max-width: 250px;
  margin-bottom: 10px;
}
</style>