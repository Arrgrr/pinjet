import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/page/home';
import About from '@/components/page/about';
import Services from '@/components/page/services';
import Contact from '@/components/page/contact';
import Header from '@/components/page/header'
import Footer from '@/components/page/footer';
import Search from '@/components/page/search';

Vue.use(VueRouter);
Vue.component("modal", {
  template: "#modal-template"
});

export default new VueRouter({
  routes: [{
      name: 'modal',
      path: '/search',
      components: {
        default: Search,
        header: Header,
        footer: Footer,
      }
    }, {
      name: 'Home',
      path: '/index',
      components: {
        default: Home,
        header: Header,
        footer: Footer,
      }
    },
    {
      name: 'About',
      path: '/about',
      components: {
        default: About,
        header: Header,
        footer: Footer,
      },

    },
    {
      name: '',
      path: '/services',
      components: {
        default: Services,
        header: Header,
        footer: Footer,
      },
    },

    {
      name: 'Contact',
      path: '/contact',
      components: {
        default: Contact,
        header: Header,
        footer: Footer,
      },

    },
  ]
})
