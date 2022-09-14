import Vue from 'vue';
import App from './App.vue';
import * as firebase from 'firebase';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { firestorePlugin } from 'vuefire'


Vue.config.productionTip = false;

Vue.use(firestorePlugin);

const configOptions = {
  apiKey: "AIzaSyAy4Wk5U74bK3_xHXmET1Z07KSZ-OiYdGM",
  authDomain: "projetocrudnodejs.firebaseapp.com",
  projectId: "projetocrudnodejs",
  storageBucket: "projetocrudnodejs.appspot.com",
  messagingSenderId: "396323468370",
  appId: "1:396323468370:web:0b53c0c0da39c6532a5b8b",
  measurementId: "G-NRCPQQG607"
};

firebase.initializeApp(configOptions);

let app;

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('auth/fetchUser', user);
  if(!app) {
    new Vue({
      store,
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app');
  }
});
