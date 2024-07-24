import { createRouter, createWebHistory } from 'vue-router';
import HostComponent from '@/components/HostComponent.vue';
import UserComponent from '@/components/UserComponent.vue';


const routes = [
    {
        path: '/host',
        name: 'parent',
        component: HostComponent,
    },
    {
        path: '/user', 
        name: 'child',
        component: UserComponent,

    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;