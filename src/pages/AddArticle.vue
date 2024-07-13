<template>
    <div class="add-article-container">
        <img :class="{ active: isActive }" class="loader-gif" src="../assets/loader.gif" alt="">
        <h4>Создание новой статьи</h4>
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input id="author" type="text" class="validate" v-model="formData.author">
                        <label for="author">Автор статьи</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="title" type="text" class="validate" v-model="formData.title">
                        <label for="title">Заголовок статьи</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <textarea id="textarea" class="materialize-textarea validate"
                                  v-model="formData.text"></textarea>
                        <label for="textarea">Текст статьи</label>
                    </div>
                </div>
            </form>
        </div>
        <div class="manage-buttons">
            <a :class="{ disabled: isInProgress }" class="green darken-1 btn" @click="acceptAddArticle">Создать</a>
            <a :class="{ disabled: isInProgress }" class="deep-orange darken-1 btn"
               @click="rejectAddArticle">Отменить</a>
        </div>
    </div>
</template>

<script>
    import userRequest from "../functions/requests";
    import Swal from 'sweetalert2'

    export default {
        name: "AddArticle",
        props: {
            blogs: {
                type: Array,
            }
        },
        data() {
            return {
                idCount: this.blogs.length + 1,
                formData: {
                    title: '',
                    text: '',
                    author: ''
                },
                isInProgress: false,
                isActive: false
            }
        },
        methods: {
            async acceptAddArticle() {
                let finalResponse = null;
                let objectBody = {id: this.idCount, ...this.formData,};

                if (objectBody.title.trim() === '' ||
                    objectBody.text.trim() === '' ||
                    objectBody.author.trim() === '') {
                    Swal.fire({
                        icon: "warning",
                        title: "Заполните все поля!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    this.isInProgress = false;
                    return;
                }

                this.isInProgress = true;
                this.isActive = true;
                finalResponse = userRequest.postRequest(objectBody);
                await finalResponse.then(resp => this.returnNewData(resp));

                this.isActive = false;

                this.formData = {
                    title: '',
                    text: '',
                    author: ''
                };
                this.isInProgress = false;

                await Swal.fire({
                    title: "Статья добавлена!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });

                await this.$router.push({name: 'blogs'});
            },

            returnNewData(data) {
                this.$emit('newBlogs', data);
            },

            rejectAddArticle() {
                this.formData = {
                    title: '',
                    text: '',
                    author: ''
                };
                this.$router.push({name: 'blogs'});
            }
        }
    }
</script>

<style scoped>
    .add-article-container {
        width: 80%;
        position: relative;
    }

    .loader-gif{
        position: absolute;
        right: 10px;
        top: 10px;
        display: none;
    }

    .active{
        display: block;
    }

    h4 {
        text-shadow: 3px 3px 3px rgba(51, 153, 138, 0.4);
    }

    .manage-buttons {
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        margin: 0 auto;
    }
</style>