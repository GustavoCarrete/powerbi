require('dotenv').config();
//Id. de aplicación (cliente): 7aa93d63-c2e7-449d-90a7-52e4aca6c8d9
//Identificador de objeto: b0d21f64-f37f-49cc-902b-1614d9688828
//Id. de directorio (inquilino): 6a7bb61a-f0a6-4f0c-bbc4-f375582c213f

const util = require('util');
const adal = require('adal-node');


const controllers = {
    getters: {
        async add_refresh_token(req, res) {


            const authorityHostUrl = process.env.authorityHostUrl;
            const tenant = process.env.tenant;
            const authorityUrl = process.env.authorityUrl;
            const resource = process.env.resource;
            const clientID = process.env.clientID;
            const clientSecret = 'BXf8Q~2Ym1dDMWK2bjv~OQNS6LOBSHfCDm4-Hbf5';
            const context = new adal.AuthenticationContext(authorityUrl);
            console.log(context);
            try {
                const tokenResponse = await util.promisify(context.acquireTokenWithClientCredentials.bind(context))(resource, clientID, clientSecret);

                const accessToken = tokenResponse.accessToken;
                console.log('Token de acceso:', accessToken);
        
            } catch (error) {
                console.log(error);
            }
        }

    }
}

module.exports = {
    controllers
}