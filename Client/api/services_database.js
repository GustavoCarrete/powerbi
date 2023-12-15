import Api from './api';


export default {
    async update_to_active(datas) {
        try{
            const data = await Api().put('/updatetoactive',datas)
            return data;
        } catch ( err ){
            if (err.response) {
                // The client was given an error response (5xx, 4xx)
                console.log(err.response)
            } else if (err.request) {
                // The client never received a response, and the request was never left
                console.log(err.request)
            } else {
                // Anything else
                console.log('Anything else')
            }
        }

    },
    async create_ad(datas) {
        try {
            const data = await Api().post('/createad',datas)
            return data
        } catch (error) {
            if (error.response) {
                // The client was given an error response (5xx, 4xx)
                console.log(error.response)
            } else if (error.request) {
                // The client never received a response, and the request was never left
                console.log(error.request)
            } else {
                // Anything else
                console.log('Anything else')
            }
        }


    }
}