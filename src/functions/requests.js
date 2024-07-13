import $ from "jquery";

class Requests {
    constructor() {
        this.mainLink = 'https://script.google.com/macros/s/AKfycbwEHYjnqPrM2rJC3c5amnlGTp9W1BgZLBV5UUKRH1KkxT9v98aTZ9b0MQaRCjHy9kyOMg/exec';
        this.allBlogs = null;
        this.responseNewBlogs = null;
    }

     async getRequest() {
         await $.ajax({
            url: this.mainLink,
            type: "GET",
            crossDomain: true,
            dataType: "json",
            success: (response) => {
                this.allBlogs = response;
            },
            error: (error) => {
                this.allBlogs = error;
            }
        });
        return this.allBlogs
    }

    async postRequest(data) {
        await $.ajax({
            url: this.mainLink,
            type: "POST",
            crossDomain: true,
            data: JSON.stringify(data),
            dataType: "json",
            success: (response) => {
                this.responseNewBlogs = response;
            }
            ,
            error: (error) => {
                this.responseNewBlogs = error;
            }
        });
        return this.responseNewBlogs;
    }
}

let userRequest = new Requests();

export default userRequest;