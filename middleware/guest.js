const guest = ({ store, redirect }) => {
  if (store.state.auth.loggedIn) {
    return redirect("/organisation/dashboard");
  }
};

export default guest;
