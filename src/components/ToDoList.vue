<template>
    <div class="common-layout">
        <el-container class="main-container">
            <el-header><h1>ToDo List</h1></el-header>

            <el-container>
                <el-aside>
                    <span style="margin-right: auto; margin-left: 20px; color: #008fc3">Enter task`s title</span>
                    <el-input v-model="form.title" type="text" style="width: 90%; height: 30px"/>
                    <span style="margin-bottom: 15px; color: red; font-size: 11px; margin-top: 5px">{{ errors.title }}</span>

                    <span style="margin-right: auto; margin-left: 20px; color: #008fc3">Enter task`s description</span>
                    <el-input v-model="form.description" type="textarea" style="width: 90%"/>
                    <span style="margin-bottom: 15px; color: red; font-size: 11px; margin-top: 5px">{{ errors.description }}</span>

                    <span style="margin-right: auto; margin-left: 20px; color: #008fc3">Choose task`s status</span>
                    <el-select v-model="form.status" placeholder="Select" size="large"
                               style="width: 90%; margin-bottom: 15px   ">
                        <el-option
                                v-for="item in options"
                                :key="item.id"
                                :label="item.status"
                                :value="item.value"
                        />
                    </el-select>
                    <el-button type="primary" size="large" style="margin-top: 15px" @click="getNewTask">Save & add
                    </el-button>
                </el-aside>

                <el-main>
                    <h3 class="no-tasks" style="color: rgba(128,128,128,0.7)" v-if="tasks.length === 0">No tasks
                        added...</h3>

                    <el-card v-for="(task, index) of tasks" :key="task.id" style="width: 90%">
                        <template #header>
                            <div class="card-header">
                                <span><b>#{{task.id}} {{task.title}}</b></span>
                                <el-button type="danger" @click="deleteTask(task, index)">Delete</el-button>
                            </div>
                        </template>
                        <p class="text item"><i>{{task.description}}</i></p>
                        <template class="card-footer" #footer>
                            <div style="text-align: center; color: rgba(128,128,128,0.8)">{{task.status}}</div>
                        </template>
                    </el-card>
                </el-main>

            </el-container>

        </el-container>
    </div>
</template>

<script>
    import {
        ElForm,
        ElFormItem,
        ElInput,
        ElButton,
        ElContainer,
        ElHeader,
        ElMain,
        ElRow,
        ElCol,
        ElAside,
        ElCard,
        ElSelect,
        ElOption
    } from 'element-plus'

    import {toRaw} from 'vue'
    import validationSchema from '../functions/validation'

    export default {
        name: "ToDoList",
        props: {
            tasks: {
                type: Array,
                required: true
            }
        },
        components: {
            ElForm,
            ElFormItem,
            ElInput,
            ElButton,
            ElContainer,
            ElHeader,
            ElMain,
            ElRow,
            ElCol,
            ElAside,
            ElCard,
            ElSelect,
            ElOption
        },
        data() {
            return {
                form: {
                    title: '',
                    description: '',
                    status: 'non-complete'
                },
                options: [
                    {id: 1, status: 'Non-Complete', value: 'non-complete'},
                    {id: 2, status: 'Pending', value: 'pending'},
                    {id: 3, status: 'Complete', value: 'complete'}
                ],
                errors: {}
            }
        },
        methods: {
            async validateForm() {
                try {
                    await validationSchema.validate(this.form, {abortEarly: false});
                    this.errors = {};
                    return true;

                } catch (err) {
                    const validationErrors = {}
                    err.inner.forEach(error => {
                        validationErrors[error.path] = error.message;
                        this.errors = validationErrors;
                        return false;
                    });
                }
            },

            async getNewTask() {
                const isValid = await this.validateForm();
                if (isValid) {
                    this.$emit('get-element', {...this.form});
                    this.form.title = '';
                    this.form.description = '';
                    this.form.status = 'non-complete';
                }
            },

            deleteTask(task, index) {
                this.$emit('delete-element', {del: toRaw(task), ind: toRaw(index)});
            }
        }
    }
</script>

<style scoped>
    * {
        font-family: Arial;
    }

    .main-container {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
        overflow: hidden;
        border-radius: 10px;
        min-height: 50vh;
        width: 100%;
    }

    .el-header {
        background-image: linear-gradient(180deg, #008fc3, #0dabf6, #008fc3);
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .el-aside {
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 30%;
        min-width: 200px;
    }

    .el-main {
        background-image: linear-gradient(180deg, #f3f4fa, #e9edff);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        padding: 10px;
        position: relative;
    }

    .no-tasks {
        position: absolute;
        top: calc(50% - 20px);
        left: calc(50% - 77px);
    }

    .card-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>