import { lazy } from 'react'

export const paths = {
    home: '/',
    registration: '/registration',
    login: '/login',
}

const routes = [
    {
        path: paths.home,
        lable: 'HomePage',
        exact: true,
        component: lazy(() => import('../pages/HomePage/HomePage') /* webpackChunkName: "home-page" */),
        private: false,
        restricted: true
    },
    {
        path: paths.registration,
        label: 'registration',
        exact: false,
        // component: lazy(() => import('../pages/') /* webpackChunkName: "registration-page" */),
        component: () => <h2>Регистрация (страница в разработке)</h2>, // удалить, когда будет корректный импорт
        private: false,
        restricted: true,
    },
    {
        path: paths.login,
        label: 'login',
        exact: false,
        component: lazy(() => import('../pages/LoginPage/LoginPage') /* webpackChunkName: "login-page" */),
        // component: () => <h1>Вход (страница в разработке)</h1>, // удалить, когда будет корректный импорт
        private: false,
        restricted: true,
    },
]
export default routes