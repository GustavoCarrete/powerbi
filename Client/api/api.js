import axios from 'axios'

export default () => {

    const instance = axios.create({
        baseURL: `http://localhost:3010`,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    instance.interceptors.request.use( req => {
        req.meta = req.meta || {}
        req.meta.requestStartedAt = new Date().getTime();
        //console.log(req.meta.requestStartedAt)
        return req;
    }, (error) => {
        return Promise.reject(error);
    });


    axios.interceptors.response.use((response) => {
        if(response.status === 401) {
             alert("You are not authorized");
        }
        return response;
    }, (error) => {
        if (error.response && error.response.data) {
            return Promise.reject(error.response.data);
        }
        return Promise.reject(error.message);
    });


    return instance;
}