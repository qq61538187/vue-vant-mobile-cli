/**
 * 基础路由
 * @type { *[] }
 */

export const constantRouterMap = [
  {
    path: '/',
    redirect: '/tabs'
  },
  {
    name: 'tabs',
    path: '/tabs',
    component: () => import('@/views/tabs/index.vue'),
    redirect: '/tabs/components',
    meta: { keepAlive: true },
    children: [
      { name: 'tab_components', path: 'components', component: () => import('@/views/tabs/TabComponents.vue'), meta: { keepAlive: true }},
      { name: 'tab_api', path: 'api', component: () => import('@/views/tabs/TabApi.vue'), meta: { keepAlive: true }},
      { name: 'tab_template', path: 'template', component: () => import('@/views/tabs/TabTemplate.vue'), meta: { keepAlive: true }}
    ]
  },
  {
    name: 'components_list',
    path: '/components/list',
    component: () => import('@/views/components/list/index.vue')
    // meta: { keepAlive: true }
  },{
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    hidden: true,
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true,
  }
]
