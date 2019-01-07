import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test'
import personCenter from '@/pages/share/personCenter.vue'
import agentRegister from '@/pages/share/agentRegister.vue'
import registerSuccess from '@/pages/share/registerSuccess.vue'
import sharePaySuccess from '@/pages/share/paySuccess.vue'
import shareAddressSelect from '@/pages/share/addressSelect.vue'
import shareAddressEdit from '@/pages/share/addressEdit.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'test',
            component: test
        },
        {
            path: '/sharePersonCenter',
            name: '个人中心',
            component: personCenter
        },
        {
            path: '/shareAgentRegister',
            name: '代理注册',
            component: agentRegister
        },
        {
            path: '/sharePaySuccess',
            name: '支付成功',
            component: sharePaySuccess
        },
        {
            path: '/shareRegisterSuccess',
            name: '注册成功',
            component: registerSuccess
        },
        {
            path: '/shareAddressSelect',
            name: '地址选择',
            component: shareAddressSelect
        },
        {
            path: '/shareAddressEdit',
            name: '新增地址',
            component: shareAddressEdit
        }
    ]
})
