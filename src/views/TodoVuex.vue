<template>
  <h1>Lista de tareas Thanos</h1>

  <hr />
  <!-- <h4>Pendientes {{$store.state.todos.filter(t => !t.completed).length}}</h4> -->
  <h4>Pendientes {{ pending.length }}</h4>
  <!-- <h4>Todos: {{ all.length }}</h4>
  <h4>Completados {{completed.length}}</h4> -->
  <button @click="currentTab = 'all'" :class="{ active: currentTab === 'all' }">
    Todos
  </button>
  <button
    @click="currentTab = 'pending'"
    :class="{ active: currentTab === 'pending' }"
  >
    Pendientes
  </button>
  <button
    @click="currentTab = 'completed'"
    :class="{ active: currentTab === 'completed' }"
  >
    Completados
  </button>

  <div>
    <ul>
      <li
        v-for="todo in getTodosByTab"
        :key="todo.id"
        :class="{ completed: todo.completed }"
        @dblclick="toggleTodo(todo.id)"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>

  <button @click="openModal">Crear todo</button>

  <modal v-if="isOpen" @on:close="closeModal">
    <template v-slot:header>
        <h2>Nueva Tarea</h2>
    </template>

    <template v-slot:body>
      <form @submit.prevent="createTodo(newTodoText); isOpen=false; newTodoText='';">
        <input type="text" placeholder="Nueva tarea" v-model="newTodoText" >
        <br>
        <br>
        <button>Submit</button>
      </form>
    </template>

  </modal>

</template>

<script>
import { ref, defineAsyncComponent } from 'vue';
import useTodos from '@/composables/useTodos';

export default {
  components: {
        Modal: defineAsyncComponent(
      /*webpackChunkName: "Modal*/  () => import('@/components/Modal.vue')
      ),
  },
  setup() {
    const {
      all,
      completed,
      pending,
      getTodosByTab,
      toggleTodo,
      createTodo
    } = useTodos();

    const isOpen      = ref(false);
    const newTodoText = ref('');

    return {
      isOpen,
      openModal : () => isOpen.value = true,
      closeModal: () => isOpen.value = false,
      newTodoText,

      all,
      completed,
      pending,
      getTodosByTab,
      toggleTodo,
      createTodo
    }
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
}

.active {
  background-color: #2c3e50;
  color: white;
}

.completed {
  text-decoration: line-through;
}
</style>
