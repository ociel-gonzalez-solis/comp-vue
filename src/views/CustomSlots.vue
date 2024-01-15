<template>
  <h1>Aprendiendo Slots</h1>
  <button @click="openModal">Abrir Modal</button>

  <modal v-if="isOpen" @on:close="closeModal" title="Hola Mundo">
    <!-- <h2>Titulo del Modal</h2>
    <p>Deserunt mollit ipsum aliquip ipsum id sunt esse esse enim in non ipsum enim.</p>
    <button>Salir</button> -->
    <template v-slot:body>
       <p>Deserunt mollit ipsum aliquip ipsum id sunt esse esse enim in non ipsum enim.</p>
    </template>
    <template v-slot:footer>
        <button @click="closeModal">Salir</button>
    </template>
    <template v-slot:header>
        <h2>Titulo del Modal</h2>
    </template>
    <template v-slot:exposed="{newTitle}">
        <h2>{{newTitle}}</h2>
    </template>
  </modal>
</template>

<script>
import { ref, defineAsyncComponent } from 'vue';

export default {
    components: {
        Modal: defineAsyncComponent(
      /*webpackChunkName: "Modal*/  () => import('@/components/Modal.vue')
      )
  },
  setup() {
    const isOpen = ref(false);

    return {
        isOpen,
        openModal : () => isOpen.value = true,
        closeModal: () => isOpen.value = false,
    }
  }
}
</script>

<style>

</style>