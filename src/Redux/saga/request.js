import axios from "axios";
export function getStud() {
    return axios.request({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users",

    });
};
