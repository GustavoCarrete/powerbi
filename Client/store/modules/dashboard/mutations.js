const mutations = {

    SET_CAMPAIGNS: (state, payload) => {
        state.campaigns = payload
    },

    SET_AD_GROUPS: (state, payload) => {
        state.adGroups = payload
    },

    SET_ALL_KEYWORDS: (state, payload) => {
        state.tableKeywords = payload;
    },

}

export default mutations;