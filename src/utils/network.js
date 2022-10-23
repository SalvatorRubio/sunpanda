import axios from "axios";

export const getApiResource = (url) => {
    const res = axios.get(url).then(res => res.data).catch(err => {
        console.log(err)
        return false
    })
    return res;
}