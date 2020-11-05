const guest = ({ store, redirect }) => {
  console.log(store.state.auth.loggedIn);
  if (store.state.auth.loggedIn) {
    return redirect("/organisation/dashboard");
  }
};

export default guest;
