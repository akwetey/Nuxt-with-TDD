const redirect = ({ route, redirect }) => {
  if (route.path === "/") {
    return redirect("/organisation");
  }
};

export default redirect;
