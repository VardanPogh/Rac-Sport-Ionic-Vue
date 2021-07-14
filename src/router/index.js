import {createRouter, createWebHistory} from '@ionic/vue-router';
import Init from "../views/Init";
import SignUp from "../views/SignUp";
import Login from "../views/Login";
import Forgot from "../views/Forgot";
import ForgotNewPassword from "../views/ForgotNewPassword";
import PasswordUpdate from "../views/PasswordUpdate";
import Verification from "../views/Verification";
import StatApp from "../views/StatApp/stat_app_2";
import Tabs from "../views/Tabs";

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/init',
        component: Init,
    },
    {
        path: '/signup',
        component: SignUp,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/forgot',
        component: Forgot,
    },
    {
        path: '/forgot_new_pass',
        component: ForgotNewPassword,
    },
    {
        path: '/password_update',
        component: PasswordUpdate,
    },
    {
        path: '/verification',
        component: Verification,
    },
    {
        path: '/stat_app',
        component: StatApp,
    },
    {
        path: '/dashboard/',
        component: Tabs,
        children: [
            {
                path: '',
                redirect: '/dashboard/profile'
            },
            {
                path: 'profile',
                component: () => import('@/views/Dashboard/Profile.vue')
            },
            {
                path: 'chat',
                component: () => import('@/views/Dashboard/Chat.vue'),
            },
            {
                path: '/chat/messages',
                component: () => import('@/views/Dashboard/Messages.vue')
            },
            {
                path: 'ref',
                component: () => import('@/views/Dashboard/Ref.vue'),
            },
            {
                path: 'hub/my_games',
                component: () => import('@/views/Dashboard/Games/MyGames.vue'),
            },
            {
                path: 'hub/all_games',
                component: () => import('@/views/Dashboard/Games/AllGames.vue'),
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
