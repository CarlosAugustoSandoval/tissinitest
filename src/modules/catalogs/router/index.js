export default {
    path: '/',
    redirect: { name: 'Catalogs' },
    component: () => import('@/layouts/default/Default'),
    children: [
        {
            name: 'Catalogs',
            path: 'catalogo/:id',
            component: () => import('../views/Catalogs'),
            props: true
        }
    ]
}