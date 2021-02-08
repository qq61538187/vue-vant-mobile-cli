// 按需全局引入 vant组件
import Vue from 'vue'
import { Button, List, CellGroup, Cell, Tabbar, TabbarItem, Lazyload, PullRefresh, NavBar } from 'vant'
Vue.use(Button)
Vue.use(CellGroup)
Vue.use(Cell)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Lazyload)
Vue.use(PullRefresh)
Vue.use(NavBar)

