<template>
  <div class="row items-center justify-center q-mb-sm">
    <h4 class="text-center">Destaques</h4>
  </div>
  <div class="flex justify-center items-center">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="purple-10"
      navigation
      padding
      arrows
      height="300px"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div
          class="
            row
            fit
            justify-start
            items-center
            q-gutter-xs q-col-gutter
            no-wrap
          "
        >
          <q-card class="my-card text-center" flat>
            <img
              src="src/assets/ImgDestaques/duvida.png"
              alt="iniciando com front"
            />
            <!-- <div class="text">Iniciando com Front-End</div> -->
            <q-item clickable to="#" class="text">
              Iniciando com Front-End
            </q-item>
          </q-card>

          <q-card class="my-card text-center" flat>
            <img
              src="src/assets/ImgDestaques/setup.png"
              alt="iniciando com front"
            />
            <q-item clickable to="#" class="text">
              Configurando seu setup
            </q-item>
          </q-card>
          <q-card class="my-card text-center" flat>
            <img
              src="src/assets/ImgDestaques/cachorro.png"
              alt="iniciando com front"
            />
            <q-item clickable to="#" class="text">
              Dúvidas sobre Programação
            </q-item>
          </q-card>
          <q-card class="my-card text-center" flat>
            <img
              src="src/assets/ImgDestaques/pc.png"
              alt="iniciando com front"
            />
            <q-item clickable to="#" class="text">
              Montando seu computador
            </q-item>
          </q-card>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div
          class="
            row
            fit
            justify-start
            items-center
            q-gutter-xs q-col-gutter
            no-wrap
          "
        >
          <q-card class="my-card text-center" flat>
            <img
              src="src/assets/ImgDestaques/duvida.png"
              alt="iniciando com front"
            />
            <!-- <div class="text">Iniciando com Front-End</div> -->
            <q-item clickable to="#" class="text">
              Iniciando com Front-End
            </q-item>
          </q-card>

          <q-card class="my-card text-center" flat>
            <img
              src="src/assets/ImgDestaques/setup.png"
              alt="iniciando com front"
            />
            <q-item clickable to="#" class="text">
              Configurando seu setup
            </q-item>
          </q-card>
          <q-card class="my-card text-center" flat>
            <img
              src="src/assets/ImgDestaques/cachorro.png"
              alt="iniciando com front"
            />
            <q-item clickable to="#" class="text">
              Dúvidas sobre Programação
            </q-item>
          </q-card>
          <q-card class="my-card text-center" flat>
            <img
              src="src/assets/ImgDestaques/pc.png"
              alt="iniciando com front"
            />
            <q-item clickable to="#" class="text">
              Montando seu computador
            </q-item>
          </q-card>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div
          class="
            row
            fit
            justify-start
            items-center
            q-gutter-xs q-col-gutter
            no-wrap
          "
        >
          <q-card class="my-card text-center" flat>
            <img
              src="src/assets/ImgDestaques/duvida.png"
              alt="iniciando com front"
            />
            <!-- <div class="text">Iniciando com Front-End</div> -->
            <q-item clickable to="#" class="text">
              Iniciando com Front-End
            </q-item>
          </q-card>

          <q-card class="my-card text-center" flat>
            <img
              src="src/assets/ImgDestaques/setup.png"
              alt="iniciando com front"
            />
            <q-item clickable to="#" class="text">
              Configurando seu setup
            </q-item>
          </q-card>
          <q-card class="my-card text-center" flat>
            <img
              src="src/assets/ImgDestaques/cachorro.png"
              alt="iniciando com front"
            />
            <q-item clickable to="#" class="text">
              Dúvidas sobre Programação
            </q-item>
          </q-card>
          <q-card class="my-card text-center" flat>
            <img
              src="src/assets/ImgDestaques/pc.png"
              alt="iniciando com front"
            />
            <q-item clickable to="#" class="text">
              Montando seu computador
            </q-item>
          </q-card>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div
          class="
            row
            fit
            justify-start
            items-center
            q-gutter-xs q-col-gutter
            no-wrap
          "
        >
          <q-card class="my-card text-center" flat>
            <img
              src="src/assets/ImgDestaques/duvida.png"
              alt="iniciando com front"
            />
            <!-- <div class="text">Iniciando com Front-End</div> -->
            <q-item clickable to="#" class="text">
              Iniciando com Front-End
            </q-item>
          </q-card>

          <q-card class="my-card text-center" flat>
            <img
              src="src/assets/ImgDestaques/setup.png"
              alt="iniciando com front"
            />
            <q-item clickable to="#" class="text">
              Configurando seu setup
            </q-item>
          </q-card>
          <q-card class="my-card text-center" flat>
            <img
              src="src/assets/ImgDestaques/cachorro.png"
              alt="iniciando com front"
            />
            <q-item clickable to="#" class="text">
              Dúvidas sobre Programação
            </q-item>
          </q-card>
          <q-card class="my-card text-center" flat>
            <img
              src="src/assets/ImgDestaques/pc.png"
              alt="iniciando com front"
            />
            <q-item clickable to="#" class="text">
              Montando seu computador
            </q-item>
          </q-card>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";
const slide = ref(1);
</script>

<style scoped>
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