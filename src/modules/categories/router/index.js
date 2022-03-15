export default {
    path: '/',
    redirect: { name: 'Categories' },
    component: () => import('@/layouts/default/Default'),
    children: [
        {
            name: 'Categories',
            path: 'categories',
            component: () => import('../views/Categories'),
            meta: {
                requiredAuth: true
            }
        }
    ]
}