interface Routes {
  [index: string]: { [index: string]: string };
}

const routes: Routes = {
  home: {
    url: "/",
  },
};

export const getURLByRouteName = (routeName: string) => {
  let route = routes[routeName],
    url = route ? route.url : "/";
  return url;
};
