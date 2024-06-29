<template>
    <ToDoList
            :tasks="tasks"
            @get-element="getNewElement"
            @delete-element="deleteElement"
    />
</template>

<script>

    import ToDoList from "./components/ToDoList.vue";
    import storage from "./functions/LocalStor.js"

    export default {
        components: {
            ToDoList
        },
        data() {
            return {
                tasks: []
            }
        },
        methods: {
            getNewElement(task) {
                this.tasks.push(storage.addNewTask(task));
            },
            deleteElement(data) {
                storage.deleteTask(data);
                this.tasks.splice(data.ind, 1);
            }
        },
        created() {
            this.tasks = [...storage.getAllData()];

        }
    }
</script>

<style scoped>

</style>