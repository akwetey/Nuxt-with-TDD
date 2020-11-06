import createPersistedState from "vuex-persistedstate";

const persiststate = ({ store }) => {
  createPersistedState({})(store);
};
export default persiststate;
