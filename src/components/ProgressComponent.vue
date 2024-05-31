<template>
    <h1>Progress:</h1>
    <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
             :aria-valuenow="currentValue"
             aria-valuemin="0" aria-valuemax="100" :style="{ width: currentValue + '%' }"><span>{{currentValue}}%</span>
        </div>
    </div>
    <div class="buttons">
        <button type="button" :class="{ disabled: isInProgress }" class="btn btn-success" @click="getFullProgress">
            Заполнить шкалу загрузки
        </button>
    </div>
</template>

<script>
    export default {
        name: "ProgressComponent",
        props: {
            percentage: {
                type: Number,
                required: true,
                default: 0
            }
        },
        data() {
            return {
                currentValue: this.percentage,
                isInProgress: false
            }
        },
        methods: {
            getFullProgress() {
                setInterval(() => {
                    if (this.currentValue >= 100) {
                        this.isInProgress = false;
                        return
                    }
                    this.isInProgress = true;
                    this.currentValue += 1;
                }, 50)
            }
        }
    }
</script>

<style scoped>
    .progress {
        width: 85%;
        margin: 10px auto;
        box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
        height: 20px;
    }

    span {
        padding-top: 2px;
    }

    .buttons {
        width: 85%;
        margin: 30px auto 10px auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .btn:first-child {
        margin-right: 10px;
    }
</style>