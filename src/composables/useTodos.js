import { computed, ref } from "vue";
import { useStore } from "vuex";

const useTodos = () => {
  const store      = useStore();
  const currentTab = ref("all");

  return {
    currentTab,

    all          : computed(() => store.getters["allTodos"]),
    completed    : computed(() => store.getters["completedTodos"]),
    getTodosByTab: computed(() =>
      store.getters["getTodosByTab"](currentTab.value)
    ),
    pending   : computed(() => store.getters["pendingTodos"]),
    toggleTodo: (id) => store.commit("toggleTodo", id),
    createTodo: (text) => store.commit("createTodo", text),
  };
};

export default useTodos;