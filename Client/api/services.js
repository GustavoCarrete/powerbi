import Api from './api';

export default {
    async create_acces_tpken(params) {
        try{
            const data = await Api().post('/create_acces_token',params)
            return data;
        } catch ( err ){
            if (err.response) {
                console.log(err.response)
            } else if (err.request) {
                
                console.log(err.request)
            } else {
                console.log('Anything else')
            }    
        }
    }
}