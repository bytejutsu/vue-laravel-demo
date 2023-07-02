import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", {
    state: () => ({
        id: 0,
        todoList: [],
    }),
    actions: {
        addTodo(item) {
            this.todoList.push({ item, id: this.id++, completed: false });
        },
        deleteTodo(itemID) {
            this.todoList = this.todoList.filter((object) => {
                return object.id !== itemID;
            });
        },
        toggleCompleted(idToFind) {
            const todo = this.todoList.find((obj) => obj.id === idToFind);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        clearTodos(){
            this.todoList = [];
        },
    },
});
