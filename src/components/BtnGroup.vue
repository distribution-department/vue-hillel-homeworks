<template>
    <div class="btn-group" role="group" aria-label="Basic example">
        <button v-for="btn of buttons"
                :key="btn.id"
                :type="btn.type"
                :class="buttons[btn.id].cls"
                @click="getActiveBtn($event)">
            {{btn.text}}
        </button>
    </div>
</template>

<script>
    import $ from "jquery";

    export default {
        name: "BtnGroup",
        data() {
            return {
                buttons: [
                    {id: 0, type: 'button', cls: 'btn btn-primary', text: 'Left'},
                    {id: 1, type: 'button', cls: 'btn btn-primary', text: 'Middle'},
                    {id: 2, type: 'button', cls: 'btn btn-primary', text: 'Right'},
                ]
            }
        },
        methods: {
            getActiveBtn(event) {
                let btns = $('.btn');
                btns.addClass('disabled');
                event.target.classList.remove('disabled');
                event.target.classList.add('active');
            }
        }
    }
</script>

<style scoped>
    .btn-group {
        margin-top: 20px;
    }
</style>