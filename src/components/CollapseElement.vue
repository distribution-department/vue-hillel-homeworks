<template>
    <div class="mb-3">
        <p>
            <a class="btn btn-primary"
               data-bs-toggle="collapse"
               href="#" role="button"
               aria-expanded="false"
               @click.prevent="showHide"
            >Link with href
            </a>
        </p>
        <div class="collapsed" v-show="isOpen">
            <div class="card card-body">{{text}}</div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "CollapseElement",
        props: {
            text: {
                type: String,
                required: true,
                default: 'Prop -text- doesn`t exist!'
            },
            opened: {
                type: Boolean,
                required: true,
                default: true
            },
        },
        data() {
            return {
                isOpen: this.opened,
            }
        },
        methods: {
            showHide() {
                this.isOpen = !this.isOpen;
            }
        }
    }
</script>

<style scoped>
    .collapsed {
        max-width: 90%;
        margin: 0 auto;
        transition-duration: 500ms;
    }
</style>