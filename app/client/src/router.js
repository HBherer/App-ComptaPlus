import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import BankAccount from "./views/BankAccount.vue";
import Configuration from "./views/Configuration.vue";
import Connexion from "./views/Connexion.vue";
import Contact from "./views/Contact.vue";
import Dashboard from "./views/Dashboard.vue";
import History from "./views/History.vue";
import Invoice from "./views/Invoice.vue";
import Profil from "./views/Profil.vue";
import Setting from "./views/Setting.vue";
import Statistic from "./views/Statistic.vue";
import Subscribe from "./views/Subscribe.vue";
import Transaction from "./views/Transaction.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/teste",
      name: "teste",
      component: () => import("./components/HelloWorld.vue")
    },
    {
      path: "/bank-account",
      name: "BankAccount",
      component: BankAccount
    },
    {
      path: "/configuration",
      name: "configuration",
      component: Configuration
    },
    {
      path: "/connexion",
      name: "connexion",
      component: Connexion
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/history",
      name: "history",
      component: History
    },
    {
      path: "/invoice",
      name: "invoice",
      component: Invoice
    },
    {
      path: "/profil",
      name: "profil",
      component: Profil
    },
    {
      path: "/setting",
      name: "setting",
      component: Setting
    },
    {
      path: "/statistic",
      name: "statistic",
      component: Statistic
    },
    {
      path: "/subscribe",
      name: "subscribe",
      component: Subscribe
    },
    {
      path: "/transaction",
      name: "transaction",
      component: Transaction
    },
  ]
});
