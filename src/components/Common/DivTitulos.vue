<template>
  <div class="row items-center justify-center q-mb-sm">
    <h4 class="text-center">{{ titulo }}</h4>
  </div>
</template>

<script setup>
const props = defineProps({
  titulo: {
    type: String,
    default: "Titulo",
  },
});
</script>

<style scoped>
h4 {
  color: #0b021f;
  border-bottom: 0.05em solid #b0afb3;
  width: 100%;
  max-width: 380px;
  margin-bottom: 10px;
}
</style>