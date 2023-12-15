const functions = {

    compare_and_estructured(response, results) {
        const objectTable = []
        response.forEach(element => {
            results.forEach(ele => {
              if (element.resource_anuncio === ele.ad_group_ad.resource_name) {
                const objHeadlines = ele.ad_group_ad.ad.responsive_search_ad.headlines;
                const objDescriptions = ele.ad_group_ad.ad.responsive_search_ad.descriptions;
                const arrayUrls = ele.ad_group_ad.ad.final_urls;
                const arrayHeadlinesText = objHeadlines.map((item) => item.text);
                const arrayDescriptionsText = objDescriptions.map((item) => item.text);
                if(ele.ad_group_ad.policy_summary.review_status==null){
                  ele.ad_group_ad.policy_summary.review_status = 0
                }
                if (ele.campaign.status !== 4) {
                  objectTable.push(
                    {
                      ID: element.ID,
                      id: ele.ad_group_ad.ad.id,
                      name: arrayHeadlinesText,
                      descriptions: arrayDescriptionsText,
                      url: arrayUrls,
                      groupAdsId: ele.ad_group.id,
                      estadoAnuncio: ele.ad_group_ad.status,
                      policyReviewStatus: ele.ad_group_ad.policy_summary.review_status,
                      tipo: ele.ad_group_ad.ad.type,
                      clics: ele.metrics.clicks,
                      imppr: ele.metrics.active_view_impressions,
                      coste: ele.metrics.cost_micros * this.benefits,
                      resource: ele.ad_group_ad.resource_name,
                      color_status: ele.ad_group_ad.status,
                      nombre_anuncio: element.nombre_anuncio,
                      nombre_cliente: element.nombre_cliente,
                      nombre_anunciante: element.nombre_anunciante,
                      ref_externa: element.ref_externa,
                      id_contrato: element.id_contrato,
                      customer_id: ele.customer.id,
                      id_tipo_origen: element.id_tipo_origen,
                      start_date: element.start_date,
                      end_date: element.end_date
      
                    }
                  )
                }
              }
            })
            if (element.status === 5) {
              objectTable.unshift(
                {
                  ID: element.ID,
                  id: null,
                  name: [],
                  descriptions: [],
                  url: [],
                  groupAdsId: null,
                  estadoAnuncio: 5,
                  policyReviewStatus: 0,
                  tipo: 15,
                  clics: 0,
                  imppr: 0,
                  coste: null,
                  resource: "",
                  customer_id: null,
                  color_status: 5,
                  nombre_anuncio: element.nombre_anuncio,
                  nombre_cliente: element.nombre_cliente,
                  nombre_anunciante: element.nombre_anunciante,
                  ref_externa: element.ref_externa,
                  id_contrato: element.id_contrato,
                  id_tipo_origen: element.id_tipo_origen,
                  start_date: element.start_date,
                  end_date: element.end_date
      
                }
              )
            }
          })
        return objectTable
    }
}

module.exports = {
    functions
}