import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'
import ComponentList from '../packages/Component/list.json';

const generateRoute = () => {
  const routes = [];
  for (const item of ComponentList)
  {
    routes.push({
      title: item.compZhName,
      name: item.compName,
      path: `/components/${item.compName}`,
      component: () => import(`./UI/${item.compName}/docs/README.md`)
    })
  }
  return routes;
};


const routes = generateRoute();

const routerConfig = {
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 };
    }
  },
};

const router = createRouter(routerConfig as RouterOptions);

export default router;