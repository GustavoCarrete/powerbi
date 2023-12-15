import services from '@/api/services';

import { Message } from 'element-ui';

const actions = {
    loadCampaigns: async ({ commit }, payload) => {
        commit('global/SET_IS_LOADING', true, { root: true } );
        const { data } = await services.getAllCampaigns();
        if(data.status === true){
            commit('SET_CAMPAIGNS', data.data );
            Message.success({ message: `Campañas cargadas.`, type: 'success' });
        }else{
            Message.error({ message: `Error. No se pudieron cargar las campañas. ${data.data.errors[0].message}`, type: 'error' });
        }
        commit('global/SET_IS_LOADING', false, { root: true } );
    },
    loadAdGroups: async ({ commit }, payload) => {
        commit('global/SET_IS_LOADING', true, { root: true } );
        const { data } = await services.getAllAdGroups();
        if(data.status === true){
            commit('SET_AD_GROUPS', data.data );
            Message.success({ message: `Grupos de anuncios cargados.`, type: 'success' });
        }else{
            Message.error({ message: `Error. No se pudieron cargar los grupos de anuncios. ${data.data.errors[0].message}`, type: 'error' });
        }
        commit('global/SET_IS_LOADING', false, { root: true } );
    },
    loadKeywords: async ({ commit }, payload) => {
        commit('global/SET_IS_LOADING', true, { root: true } );
        try {
            const { data } = await services.getAllKeywords();
            if(data.status === true){
                data.data.sort((a, b) => a.ad_group_criterion.keyword.text.localeCompare(b.ad_group_criterion.keyword.text));
                commit('SET_ALL_KEYWORDS', data.data );
                Message.success({ message: `Keywords cargadas.`, type: 'success' });
            }else{
                Message.error({ message: `Error. No se pudieron cargar las keywords. ${data.data.errors[0].message}`, type: 'error' });
            }
        } catch (e) {
            Message.error({ message: `Ocurrió un error en la la App`, type: 'error' });
            console.log(e);
        }
        commit('global/SET_IS_LOADING', false, { root: true } );
    },
}

export default actions;