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
//User
import User from './views/User.vue';
import NewUser from './views/NewUser.vue';
import ShowUser from './views/ShowUser.vue';
import EditUser from './views/EditUser.vue';

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
    //OLT Routes
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
    //ofccc Routes
    {
      path: '/ofcccs',
      name: 'ofccc',
      component: Ofccc
    },
    {
      path: '/ofcccs/new',
      name: 'new-ofccc',
      component: NewOfccc
    },
    {
      path: '/ofcccs/:id',
      name: 'show-ofccc',
      component: ShowOfccc
    },
    {
      path: '/ofcccs/:id/edit',
      name: 'edit-ofccc',
      component: EditOfccc
    },
    //SDP Routes
    {
      path: '/sdps',
      name: 'sdp',
      component: Sdp
    },
    {
      path: '/sdps/new',
      name: 'new-sdp',
      component: NewSdp
    },
    {
      path: '/sdps/:id',
      name: 'show-sdp',
      component: ShowSdp
    },
    {
      path: '/sdps/:id/edit',
      name: 'edit-sdp',
      component: EditSdp
    },
    //User Routes
    {
      path: '/users',
      name: 'user',
      component: User
    },
    {
      path: '/users/new',
      name: 'new-user',
      component: NewUser
    },
    {
      path: '/users/:id',
      name: 'show-user',
      component: ShowUser
    },
    {
      path: '/users/:id/edit',
      name: 'edit-user',
      component: EditUser
    }
   
  ]
});