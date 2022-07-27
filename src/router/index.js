
import {createRouter, createWebHistory} from "vue-router";

import EmployeeList from "../components/pages/EmployeeList.vue";
import TestVue from "../components/pages/TestRouter.vue";

const routers = [
    {path: "/employees", component: EmployeeList},
    {path: "/tests", component: TestVue},

]



const router = createRouter({
    history: createWebHistory(),
    routes: routers,
})

export default router;