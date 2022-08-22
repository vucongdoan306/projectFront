
import {createRouter, createWebHistory} from "vue-router";

import EmployeeList from "../components/pages/EmployeeList.vue";
import TestVue from "../components/pages/TestRouter.vue";

const routers = [
    {path: "/employees", component: EmployeeList},
    {path: "/test1", component: TestVue},
    {path: "/test2", component: TestVue},
    {path: "/test3", component: TestVue},
    {path: "/test4", component: TestVue},
    {path: "/test5", component: TestVue},
    {path: "/test6", component: TestVue},
    {path: "/test7", component: TestVue},
    {path: "/test8", component: TestVue},
    {path: "/test9", component: TestVue},
    {path: "/test10", component: TestVue},
    {path: "/test11", component: TestVue},
    {path: "/test12", component: TestVue},
    {path: "/test13", component: TestVue},
    {path: "/test14", component: TestVue},
]



const router = createRouter({
    history: createWebHistory(),
    routes: routers,
})

export default router;