export const state = () => ({
  destination: undefined,
  t: undefined
});

export const mutations = {
  setData(state, { destination, translation }) {
    state.destination = destination
    state.t = translation
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { req }) {
    const { host } = req.headers
    const lookup = {
      'localhost:3000': 'dk',
      '127.0.0.1:3000': 'sv',
    }
    const destination = lookup[host]
    const translation = (await import(`@/static/config/${destination}/lang.json`)).default;
    if (destination) {
      commit('setData', { destination, translation })
    }
  }
}