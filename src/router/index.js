import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test'
import addressList from '@/pages/manage/addressList.vue'
import addressEdit from '@/pages/manage/addressEdit.vue'
import personCenter from '@/pages/share/personCenter.vue'
import shareGoodDetail from '@/pages/share/goodDetail.vue'
import shareOrderList from '@/pages/share/orderList.vue'
import agentRegister from '@/pages/share/agentRegister.vue'
import registerSuccess from '@/pages/share/registerSuccess.vue'
import sharePaySuccess from '@/pages/share/paySuccess.vue'
import shareAddressSelect from '@/pages/share/addressSelect.vue'
import shareAddressEdit from '@/pages/share/addressEdit.vue'
import shareOrderSubmit from '@/pages/share/orderSubmit.vue'
import sharePerfectInfo from '@/pages/share/perfectInfo.vue'
import shareApplyReject from '@/pages/share/applyReject.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'test',
            component: test
        },
    
        {
            path: '/addressList',
            name: '地址管理',
            component: addressList
        },
    
        {
            path: '/addressEdit',
            name: '地址编辑',
            component: addressEdit
        },
        
        {
            path: '/sharePersonCenter',
            name: '个人中心',
            component: personCenter
        },
        {
            path: '/shareGoodDetail',
            name: '商品详情',
            component: shareGoodDetail
        },
        {
            path: '/shareOrderList',
            name: '我的订单',
            component: shareOrderList
        },
        {
            path: '/shareApplyReject',
            name: '申请售后',
            component: shareApplyReject
        },
        {
            path: '/shareOrderSubmit',
            name: '支付',
            component: shareOrderSubmit
        },
        {
            path: '/shareAgentRegister',
            name: '代理注册',
            component: agentRegister
        },
        {
            path: '/sharePerfectInfo',
            name: '完善信息',
            component: sharePerfectInfo
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
        },
        
    ]
})
