import services from '@/api/services';

import { Message } from 'element-ui';

const actions = {
    loadParamsCreateAll: async ({ commit }, payload) => {
        commit('SET_PARAMS_CREATE_ALL', payload)
    },
    loadKeywordsByAd: async ({ commit }, payload) => {
        commit('SET_IS_LOADING', true )
        const { data } = await services.getKeywords(payload)
        if(data.status === true){
            const keywords = data.data.map((item) => ({ keyword: item.ad_group_criterion.keyword.text, id: item.ad_group_criterion.criterion_id }));
            keywords.sort((a, b) => a.keyword.toLowerCase().localeCompare(b.keyword.toLowerCase()));
            commit('SET_KEYWORDS_AD', keywords);
            Message.success({ message: `Keywords cargadas.`, type: 'success' });
        }else{
            Message.error({ message: `Error. No se pudo acceder a las Keywords de este anuncio. ${data.data.errors[0].message}`, type: 'error' });
        }
        commit('SET_IS_LOADING', false )
    },
    updateKeyword: async ({ commit, dispatch }, payload) => {
        commit('SET_IS_LOADING', true )
        const { data } = await services.updateKeyword(payload.edit_keyword)
        if(data.status === true){
            // commit('UPDATE_KEYWORD', payload )
            Message.success({ message: `Keyword actualizada con éxito y la lista de keywords se ha actualizado`, type: 'success' });
            dispatch('loadKeywordsByAd', payload.idGroupAd );
        } else {
            Message.error({ message: `Error. La keyword no se actualizó. ${data.data.errors[0].message}`, type: 'error' });
        }
        commit('SET_IS_LOADING', false )
    },
    removeKeyword: async ({ commit, dispatch }, payload) => {
        commit('SET_IS_LOADING', true )
        const { data } = await services.deleteKeyword({ resource_name: payload.resource_name})
        if(data.status === true){
            // commit('REMOVE_KEYWORD', payload.criterion_id )
            Message.success({ message: `Keyword eliminada con éxito`, type: 'success' });
            dispatch('loadKeywordsByAd', payload.idGroupAd );
        } else {
            Message.error({ message: `Error. La keyword no se eliminó. ${data.data.errors[0].message}`,type: 'error' });
        }
        commit('SET_IS_LOADING', false )
    },
    loadResourceOneChart: ({ commit }, payload) => {
        commit('SET_IS_LOADING', true )
        commit('SET_RESOURCEFORONECHART', payload)
        commit('SET_IS_LOADING', false )
    },
    changeIsLoading: ({ commit }, payload) => {
        commit('SET_IS_LOADING', payload )
    },
    createKeywords: async ({ commit, dispatch }, payload) => {
        commit('SET_IS_LOADING', true )
        const { data } = await services.createKeywords(payload)
        if(data.status === true){
            Message.success({ message: `Keywords añadidas correctamente`, type: 'success' });
            if(!!payload.idGroupAd){
                dispatch('loadKeywordsByAd', payload.idGroupAd ); // Carga Lista de Keywords por Grupo de Ads
            }else{
                dispatch('dashboard/loadKeywords', _ , { root: true } ); // Carga todas las Keywords en la tabla Keywords
            }
        } else {
            Message.error({ message: `Error. No se pudieron añadir las keywords. ${data.data.errors[0].message}`,type: 'error' });
        }
        commit('SET_BASE_DIALOG', false );
        commit('SET_IS_LOADING', false );
    },
   
}

export default actions;