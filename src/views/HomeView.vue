<template>
  <div class="home">
    <h1> Reactive vs Rfc</h1>
    <h3>{{ironman}}</h3>
    <h3>{{hulk}}</h3>


  <button @click="changeIronman">Cambiar IronMan</button>
  <button @click="changeHulk">Cambiar HUlk</button>

  <h3>IronMan {{ironmanIsAlive}}</h3>
  <h3>Hulk {{hulkIsAlive}}</h3>


  <button @click="changeStatus">Cambiar Status</button>
  <!-- <button @click="hulkIsAlive">Cambiar HUlk</button> -->
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'HomeView',
  components: {
  },
  setup() {
    const ironman        = ref({name: 'Tony', age: 50});
    const hulk           = reactive({name: 'Bruce', age: 50});
    const ironmanIsAlive = reactive(false);
    const hulkIsAlive    = ref(true);

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value;
      // ironmanIsAlive    = !ironmanIsAlive;
    }

    return {
      ironman,
      hulk,

      ironmanIsAlive,
      hulkIsAlive,

      changeStatus,

      changeIronman: () => {
        ironman.value.name = 'Tony Stark';
      },
      changeHulk: () => {
        hulk.name = 'Bruce Banner';
      }
    }
  }
}
</script>
