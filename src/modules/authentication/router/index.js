export default {
    path: '/',
    // redirect: { name: 'Login' },
    component: () => import('@/layouts/blank/Blank'),
    children: [
        {
            name: 'Login',
            path: '',
            component: () => import('../views/Login'),
            meta: {
                requiredAuth: false
            }
        }
    ]
}