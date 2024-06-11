<template>
    <div class="btn-group" role="group">
        <button type="button"
                :disabled="isActiveButton === 'left'"
                class="btn btn-secondary left"
                @click="setActiveButton('left')">Left
        </button>

        <button type="button"
                :disabled="isActiveButton === 'right'"
                class="btn btn-secondary right"
                @click="setActiveButton('right')">Right
        </button>
    </div>
</template>

<script>
    export default {
        name: "BtnGroup",
        data() {
            return {
                isActiveButton: null
            }
        },
        methods: {
            setActiveButton(button) {
                this.isActiveButton = button;
            }
        }
    }
</script>

<style scoped>

</style>