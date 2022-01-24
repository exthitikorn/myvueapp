import Vue from 'vue';
import Router from 'vue-router';
//OLT
import Olts from './views/Olts.vue';
import NewOlt from './views/NewOlt.vue';
import ShowOlt from './views/ShowOlt.vue';
import EditOlt from './views/EditOlt.vue';
//ofccc
import Ofccc from './views/Ofccc.vue';
import NewOfccc from './views/NewOfccc.vue';
import ShowOfccc from './views/ShowOfccc.vue';
import EditOfccc from './views/EditOfccc.vue';
//SDP
import Sdp from './views/Sdp.vue';
import NewSdp from './views/NewSdp.vue';
import ShowSdp from './views/ShowSdp.vue';
import EditSdp from './views/EditSdp.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/olts'
    },
    {
      path: '/olts',
      name: 'olts',
      component: Olts
    },
    {
      path: '/olts/new',
      name: 'new-olt',
      component: NewOlt
    },
    {
      path: '/olts/:id',
      name: 'show-olt',
      component: ShowOlt
    },
    {
      path: '/olts/:id/edit',
      name: 'edit-olt',
      component: EditOlt
    },
    {
      path: '/ofccc',
      name: 'ofccc',
      component: Ofccc
    },
    {
      path: '/ofccc/new',
      name: 'new-ofccc',
      component: NewOfccc
    },
    {
      path: '/ofccc/:id',
      name: 'show-ofccc',
      component: ShowOfccc
    },
    {
      path: '/ofccc/:id/edit',
      name: 'edit-ofccc',
      component: EditOfccc
    },
    {
      path: '/sdp',
      name: 'sdp',
      component: Sdp
    },
    {
      path: '/sdp/new',
      name: 'new-sdp',
      component: NewSdp
    },
    {
      path: '/sdp/:id',
      name: 'show-sdp',
      component: ShowSdp
    },
    {
      path: '/sdp/:id/edit',
      name: 'edit-sdp',
      component: EditSdp
    }
   
  ]
});