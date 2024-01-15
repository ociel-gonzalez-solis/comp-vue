import { createStore } from "vuex";
import {v4 as uuidv4} from 'uuid';

export default createStore({
  state: {
    todos: [
      { id: "1", text: "Recolectar las gemas del infinito", completed: false },
      { id: "2", text: "Piedra del alma", completed: true },
      { id: "3", text: "Piedra del poder", completed: true },
      { id: "4", text: "Piedra de la realidad", completed: false },
      { id: "5", text: "Conseguir nuevos secuaces", completed: false },
    ],
  },
  getters: {
    pendingTodos(state, getters, rootState) {
      return state.todos.filter((todos) => !todos.completed);
    },
    allTodos: (state, getters, rootState) => {
      return state.todos;
    },
    completedTodos: (state, getters, rootState) => {
      return state.todos.filter((todos) => todos.completed);
    },
    getTodosByTab: (_, getters) => (tab) => {
      switch (tab) {
        case "all":
          return getters.allTodos;
          break;

        case "pending":
          return getters.pendingTodos;
          break;

        case "completed":
          return getters.completedTodos;
          break;

        default:
          break;
      }
    },
  },
  mutations: {
    toggleTodo(state, id){
      const todoIdx = state.todos.findIndex((todo) => todo.id === id);
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed;
    },
    createTodo(state, text){
      if(text.length < 0) return;

      state.todos.push({
        id       : uuidv4(),
        completed: false,
        text
      })
    }

  },
  actions: {},
  modules: {},
});
