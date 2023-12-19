require('dotenv').config();
const axios = require('axios')
const FormData = require('form-data');


const controllers = {
  creates: {
    async create_acces_token(req, res) {
      const group = process.env.group;
      const idreport = process.env.idreport;
      const tenant = process.env.tenant;
      const clientID = process.env.clientID;
      const clientSecret = process.env.valor;
      const apiUrl = `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`;
      const apiUrl1 = 'https://api.powerbi.com/v1.0/myorg/groups/e7acd937-7769-4262-a44d-26b7e65d688e/reports/b81a8f01-5d06-4665-ae72-9350d784c9b1/GenerateToken'
      const formData = new FormData();
      formData.append('grant_type', 'client_credentials');
      formData.append('client_secret', clientSecret);
      formData.append('client_id', clientID);
      formData.append('scope', 'https://analysis.windows.net/powerbi/api/.default');

      const axiosConfig = {
        headers: {
          ...formData.getHeaders(),
          ContentType: "application/xwww-form-urlencoded"
        },
      };
      console.log("1");
      const respAxios = await axios.post(apiUrl, formData, axiosConfig).catch(error => { return { error } });
      if (respAxios.error) { return res.json({ status: false, error: respAxios.error, type: 1 }) }
      console.log("2");

      const formdata1 = { "accessLevel": "View" }


      const respAxios1 = await axios.post(apiUrl1, formdata1, {
        headers:
        {
          'Authorization': `Bearer ${respAxios.data.access_token}`
        }
      }).catch(error => { return { error } });
      if (respAxios1.error) { console.log(respAxios1); return res.json({ status: false, error: respAxios1.error, type: 1 }) }

      console.log(respAxios1);

      res.json({ status: true, acces_token: respAxios.data.access_token, group: group, idreport: idreport, embed_token: respAxios1.data.token })


    }

  }
}

module.exports = {
  controllers
}