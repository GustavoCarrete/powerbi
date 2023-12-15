const mutations = {
    SET_PARAMS_CREATE_ALL: (state, payload) => {
        state.paramsCreateAll = payload
    },

    SET_KEYWORDS_AD: (state, payload) => {
        state.keywords = payload
    },

    SET_CHART: (state, payload) => {
        state.chart = payload
    },

    SET_RESOURCEFORONECHART: (state, payload) => {
        state.resourceForOneChart = payload
    },

    SET_IS_LOADING: (state, payload) => {
        state.isLoading = payload
    },

    UPDATE_KEYWORD: (state, payload) => {
        const index = state.keywords.findIndex( p => p.id === payload.criterion_id );
        Object.assign(state.keywords[index], { keyword: payload.text, id: payload.criterion_id });
    },

    REMOVE_KEYWORD: (state, payload) => {
        const index = state.keywords.findIndex( p => p.id === payload );
        state.keywords.splice(index, 1);
    },

    SET_BASE_DIALOG: (state, payload) => {
        state.baseDialog = payload
    },
}

export default mutations