// @ts-ignore
import { defineConfig } from 'umi';
import routes from './route'
export default defineConfig({
  layout:{
    Name: "Ant Design",
    locale:true,
    Layout: "side",
  },

  nodeModulesTransform: {
    type: 'none',
  },
  antd:{
    dark:false  //开启暗黑色主题
  },
  routes,
  fastRefresh: {},
});

