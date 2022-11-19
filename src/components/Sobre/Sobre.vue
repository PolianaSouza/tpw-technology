<template>
  <div class="row items-center justify-center q-mb-sm">
    <h4 class="text-center">Nossa História</h4>
  </div>
  <div class="flex flex-center">
    <q-card class="row my-card" flat>
      <div class="col-sm-6 col-md-5 col-lg-5">
        <q-card-section>
          <q-img
            style="border-radius: 10px"
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </q-card-section>
      </div>
      <div class="col-md-6">
        <q-card-section>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit illum iure neque delectus error facere voluptate
            quisquam doloribus magni corrupti, cupiditate, atque, consectetur
            magnam voluptatum minima. Ipsam, voluptas! Suscipit, veniam?
          </p>
        </q-card-section>
      </div>
      <div class="row">
        <q-card-section>
          <p class="texto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit illum iure neque delectus error facere voluptate
            quisquam doloribus magni corrupti, cupiditate, atque, consectetur
            magnam voluptatum minima. Ipsam, voluptas! Suscipit, veniam?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit illum iure neque delectus error facere voluptate
            quisquam doloribus magni corrupti, cupiditate, atque, consectetur
            magnam voluptatum minima. Ipsam, voluptas! Suscipit, veniam?
          </p>
        </q-card-section>
      </div>
      <!-- </q-card-section>
      </q-card-section> -->
    </q-card>
  </div>
  <div class="container">
    <div class="row items-center justify-center q-mb-sm">
      <h5 class="text-center text-bold">Nossa Equipe</h5>
    </div>
    <div class="row q-gutter-md flex items-center justify-center q-mb-md">
      <q-btn rounded unelevated color="primary" class="q-pa-md">
        <q-icon name="person" class="q-mr-md" />
        Poliana
      </q-btn>
      <q-btn rounded unelevated color="primary" class="q-pa-md">
        <q-icon name="person" class="q-mr-md" />
        Eduarda
      </q-btn>
      <q-btn rounded unelevated color="primary" class="q-pa-md">
        <q-icon name="person" class="q-mr-md" />
        Adriano
      </q-btn>
      <q-btn rounded unelevated color="primary" class="q-pa-md">
        <q-icon name="person" class="q-mr-md" />
        Mallu
      </q-btn>
      <q-btn rounded unelevated color="primary" class="q-pa-md">
        <q-icon name="person" class="q-mr-md" />
        Fábio
      </q-btn>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
h4 {
  color: #0b021f;
  border-bottom: 0.1em solid #0b021f;
}
.my-card {
  width: 100%;
  max-width: 800px;
}
p {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.2em;
  text-align: justify;
  text-indent: 2em;
}
</style>