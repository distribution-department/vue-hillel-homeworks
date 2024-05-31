<template>
    <h1>Alert:</h1>
    <button type="button" class="btn btn-primary" @click="getAlert">{{ btnAction }}</button>
    <div class="alert" :style="{ display: isActiveAlert}" :class="currentAlertType" role="alert">{{text}}</div>
</template>

<script>
    export default {
        name: "AlertComponent",
        props: {
            type: {
                type: String,
                required: true,
                default: 'Alert`s type doesn`t exist!'
            },
            text: {
                type: String,
                required: true,
                default: 'Alert`s text doesn`t exist!'
            }
        },
        data() {
            return {
                currentAlertType: `alert-${this.type}`,
                isActiveAlert: 'none',
                btnAction: 'Показать алерт'
            }
        },
        methods: {
            getAlert() {
                if (this.isActiveAlert == 'none') {
                    this.isActiveAlert = 'block';
                    this.btnAction = 'Скрыть алерт';
                } else if (this.isActiveAlert == 'block') {
                    this.isActiveAlert = 'none';
                    this.btnAction = 'Показать алерт';
                }
            }
        }
    }
</script>

<style scoped>
    .alert {
        max-width: 80%;
        margin: 20px auto;
        display: none;
    }
</style>