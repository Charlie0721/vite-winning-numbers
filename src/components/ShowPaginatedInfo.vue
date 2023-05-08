<template>
  <h1>Mostrar data</h1>
  <button
    class="btn btn-dark"
    @click="previous(page, limit, search)"
    v-if="page > 0"
  >
    Anterior
  </button>
  pagina: {{ numberStore.page }}
  <button class="btn btn-dark" @click="next(page, limit, search)">
    Siguiente
  </button>
  <br /><br />
  <div
    class="alert alert-primary"
    role="alert"
    v-for="number in numberStore.numbers"
    :key="number.id"
  >
    Num ganador:{{ number.lotteryWinningNumber }} Opc1:
    {{ number.finalNumber }} Opc2:{{ number.combinationOne }} Opc2:{{
      number.combinationTwo
    }}
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from "vue";
import { useNumberStore } from "../store/NumbersStore";
const numberStore = useNumberStore();
let numbers = reactive([]);

let page = ref(1);
let limit = ref(10);
let search = ref("");
onMounted(async () => {
  await showData(page.value, limit.value, search.value);
});
const showData = async (pages: number, limits: number, searchs: string) => {
  pages = page.value;
  limits = limit.value;
  searchs = search.value;
  numbers = await numberStore.getData(pages, limits, searchs);
};

const previous = async (pages: number, limits: number, searchs: string) => {
  pages = page.value--;
  numberStore.page = pages;
  numberStore.page = pages;
  console.log("pagina previa", numberStore.page);
  await showData(pages, limits, searchs);
};

const next = async (pages: number, limits: number, searchs: string) => {
  pages = page.value++;
  console.log(pages);
  numberStore.page = pages;
  console.log("pagina posterior", numberStore.page);
  await showData(pages, limits, searchs);
};
</script>

