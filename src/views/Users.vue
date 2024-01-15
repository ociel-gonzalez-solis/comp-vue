<template>
  <h1 v-if="isLoading">Espere por favor...</h1>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMessage">{{errorMessage}}</h5>

  <div v-if="users.length > 0">
    <user-list :users="users" v-slot="{user}">
        <h5>{{user.first_name}} {{user.last_name}}</h5>
        <span>{{user.email}}</span>
    </user-list>
  </div>

  <button @click="prevPage">Atras</button>
  <button @click="nextPage">Siguiente</button>
  <span>Pagina {{currentPage}}</span>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import useUser from '@/composable/useUser';

export default {
  components: {
        UserList: defineAsyncComponent(
      /*webpackChunkName: "UserList*/  () => import('@/components/UserList.vue')
      ),
  },
    setup() {
        const {
            currentPage,
            errorMessage,
            isLoading,
            nextPage,
            prevPage,
            users,
        } = useUser();

        return {
            currentPage,
            errorMessage,
            isLoading,
            nextPage,
            prevPage,
            users,
        }
    }
}
</script>

<style scoped>
h2 {
    text-align: center;
    width     : 100%;
}
div {
    display: flex;
    justify-content: center;
    text-align: center;
}

ul{
    width: 250px;
}
</style>