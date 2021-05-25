import routes from './src/config/routes';
import { defineConfig } from 'umi';

export default defineConfig({
  routes: routes,
  fastRefresh: {},
  // layout: {
  //     "navTheme": "dark",
  //     "primaryColor": "#1890ff",
  //     "layout": "side",
  //     "contentWidth": "Fluid",
  //     "fixedHeader": true,
  //     "fixSiderbar": true,
  //     "title": "Ant Design Pro",
  //     "pwa": false,
  //     "iconfontUrl": "",
  //     "menu": {
  //       "locale": true
  //     },
  //     "headerHeight": 48
  // }
});
