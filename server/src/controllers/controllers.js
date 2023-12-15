require('dotenv').config();
const axios = require('axios')
const FormData = require('form-data');

const controllers = {
    creates: {
        async create_acces_token(req, res) {
            const group = 'e7acd937-7769-4262-a44d-26b7e65d688e';
            const idreport = 'bbd0381c-6a75-47b3-8c5a-09a9316abee2'
            const authorityHostUrl = process.env.authorityHostUrl;
            const tenant = process.env.tenant;
            const authorityUrl = process.env.authorityUrl;
            const resource = process.env.resource;
            const clientID = process.env.clientID;
            const clientSecret = process.env.valor;
            const apiUrl = 'https://login.microsoftonline.com/6a7bb61a-f0a6-4f0c-bbc4-f375582c213f/oauth2/v2.0/token';
            const formData = new FormData();
            formData.append('grant_type', 'client_credentials');
            formData.append('client_secret', clientSecret);
            formData.append('client_id', clientID);
            formData.append('scope', 'https://analysis.windows.net/powerbi/api/.default');
            const axiosConfig = {
                headers: {
                  ...formData.getHeaders(),
                  'Authorization': 'Bearer tuTokenDeAutorizacion',
                },
              };

            axios.post(apiUrl, formData, axiosConfig)
              .then(response => {

                const apiUrl = `https://app.powerbi.com/groups/${group}/reports/${idreport}`;

     const axiosConfig = {
        headers: {
          'Authorization': `Bearer ${this.access_token}`,
          'Content-Type': 'application/json',
        },
      };

     

   console.log(response.data.access_token);



                res.json({status:true, acces_token:response.data.access_token })
             
              })
              .catch(error => {
                res.json({status:false})
                console.error('Error:', error.message);
              });
        }

    }
}

module.exports = {
    controllers
}