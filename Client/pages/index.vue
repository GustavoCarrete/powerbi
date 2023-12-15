<template>
  <div>
    <b-row>
      <b-col class="m-5 text-center">
        <div slot="header" class="clearfix">
          <h1>Miranda</h1>
         
        </div>
        <div ref="embeddedReport" style="height: 600px;"></div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
//import services from '../../api/services';
import * as pbi from 'powerbi-client';
import axios from "axios"
export default {
  data() {
    return {
      config: {
        type: 'report',
        tokenType: pbi.models.TokenType.Embed,
        accessToken: '', // Reemplaza con tu token de acceso
        embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYzAxZTUzMWMtMWQ1ZC00NDk3LWIwNTQtM2QwNzlmYzdkYjgzIiwidCI6IjZhN2JiNjFhLWYwYTYtNGYwYy1iYmM0LWYzNzU1ODJjMjEzZiIsImMiOjl9',       // Reemplaza con tu URL de inserción
        id: 'bbd0381c-6a75-47b3-8c5a-09a9316abee2',             // Reemplaza con tu ID de informe
        permissions: pbi.models.Permissions.All,
      },

    };
  },
  created() {
console.log(powerbi);

  },
  mounted() {
    this.createToken()
    //axios.post("http://localhost:3010/prueba").then((resp) => resp.data).catch((error) => { return { status: false } })
  },
  methods: {
    async createToken() {
      const res = await axios.post("http://localhost:3010/create_acces_token").then((resp) => resp.data).catch((error) => { return { status: false } })
      console.log(res);
      if (res.status) {
        this.config.accessToken = res.acces_token
        const element = this.$refs.embeddedReport;
        const report = powerbi.embed(element, this.config);
        report.off('loaded');
        report.on('loaded', () => {
          console.log('Informe cargado correctamente');
        })

        console.log(this.config);

      } else {
        console.log("error");
      }
    },

  }
}
</script>