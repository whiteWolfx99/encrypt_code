import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
import Main from "@/components/Pages/Home";

import LoginUser from "@/components/Zlogin/LoginUser";
import RegisterUser from "@/components/Zlogin/RegisterUser";
import UserCry from "@/components/Pages/UserCry"


export default new Router({
    routes: [

        {
            path: '/UserCry',
            name: 'UserCry',
            component: UserCry

        },
 
       
        {
            path: "/",
            name: "LoginUser",
            component: LoginUser
        },

   
   
        {
            path: "/RegisterUser",
            name: "RegisterUser",
            component: RegisterUser
        },
       
       
        {
            path: "/Home",
            name: "Main",
            component: Main
        },

      
    ]
});