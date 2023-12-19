<template>
  <div>
        <div ref="embeddedReport" style="height: 99vh; width: 99vw;"  ></div>
     
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
        tokenType: 1,
        permissions:0,
        accessToken: '', // Reemplaza con tu token de acceso
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=b81a8f01-5d06-4665-ae72-9350d784c9b1&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUYtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWUsImRpc2FibGVBbmd1bGFySlNCb290c3RyYXBSZXBvcnRFbWJlZCI6dHJ1ZX19",
        id: '',             // Reemplaza con tu ID de informe
        settings: {
          panes: {
                filters: {
                    visible: false
                },
                pageNavigation: {
                    visible: false
                }
            },
            bars: {
                statusBar: {
                    visible: false
                }
            }
        }
      },

    };
  },
  created() {


  },
  mounted() {
    this.createToken()
  },
  methods: {
    async createToken() {
      const res = await axios.post("http://localhost:3010/create_acces_token")
      .then((resp) => resp.data).catch((error) => { return { status: false } })
      if (res.status) {
        this.config.accessToken = res.embed_token
       this.config.id = res.idreport
       this.embedReport()
      } else {
        console.log("error", res);
      }
     },
   async embedReport() {
      const element = this.$refs.embeddedReport;
      const report = powerbi.embed(element, this.config);
      //report.off('loaded');
     await report.on('loaded',async () => {
        const filter = {
    $schema: "http://powerbi.com/product/schema#basic",
    target: {
        table: "Comisionistas",
        column: "ID"
    },
    operator: "In",
    values: [6809]
};

// Retrieve the page collection and then replace all filters for the active page.
try {
  await report.updateFilters(pbi.models.FiltersOperations.Add, [filter]);
    console.log("Report filter was added.");
}
catch (errors) {
    console.log(errors);
}
        
        console.log('Informe cargado correctamente');
      });

    },

  }
}
</script>