<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="sendData()">
          <div class="form-group">
            <label for="exampleInputEmail1">Numero 1</label>
            <input
              type="text"
              class="form-control"
              placeholder="Digite el primer numero"
              v-model="numbers.numberOne"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Numero 2</label>
            <input
              type="text"
              class="form-control"
              placeholder="Digite el segundo numero"
              v-model="numbers.numberTwo"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Numero 3</label>
            <input
              type="text"
              class="form-control"
              placeholder="Digite el tercer numero"
              v-model="numbers.numberThree"
            />
          </div>
          <br />
          <button type="submit" class="btn btn-success">Guardar</button>
        </form>
      </div>
    </div>
    <div class="car">
      <div class="card-body">
        <h3>
          {{ numberStore.$state.numberResponse.finalNumber }}
        </h3>
        <h3>
          {{ numberStore.$state.numberResponse.combinationOne }}
        </h3>
        <h3>
          {{ numberStore.$state.numberResponse.combinationTwo }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useNumberStore } from "../store/NumbersStore";
import {INumber}  from "../services/numbers.service";
const numberStore = useNumberStore();

const numbers = reactive<INumber>({
  numberOne: "",
  numberTwo: "",
  numberThree: ""
});

const sendData = async () => {
 await numberStore.sendData(numbers);
 
};
</script>

