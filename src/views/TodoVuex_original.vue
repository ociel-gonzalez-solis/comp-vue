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
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const currentTab = ref("all");

    return {
      currentTab,

      all          : computed(() => store.getters["allTodos"]),
      completed    : computed(() => store.getters["completedTodos"]),
      getTodosByTab: computed(()=> store.getters['getTodosByTab'](currentTab.value)),
      pending      : computed(() => store.getters["pendingTodos"]),
      toggleTodo   : (id) => store.commit('toggleTodo', id),
    };
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
