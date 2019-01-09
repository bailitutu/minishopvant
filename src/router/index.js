import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test'

// 管理中心
import addressList from '@/pages/manage/addressList.vue'
import addressEdit from '@/pages/manage/addressEdit.vue'
import shareHistory from '@/pages/manage/shareHistory.vue'
import mineTeam from '@/pages/manage/mineTeam.vue'
import mineAchieve from '@/pages/manage/mineAchieve.vue'
import achieveBang from '@/pages/manage/achieveBang.vue'
import mineChief from '@/pages/manage/mineChief.vue'
import memberManage from '@/pages/manage/memberManage.vue'
import microWarehouse from '@/pages/manage/microWarehouse.vue'
import stockList from '@/pages/manage/stockList.vue'
import stockOrder from '@/pages/manage/stockOrder.vue'
import stockPay from '@/pages/manage/stockPay.vue'
import stockPaySuccess from '@/pages/manage/stockPaySuccess.vue'

// 钱包
import bankCard from '@/pages/wallet/bankCard.vue'
import bindCard from '@/pages/wallet/bindCard.vue'
import rechargeCard from '@/pages/wallet/rechargeCard.vue'
import rechargeDetail from '@/pages/wallet/rechargeDetail.vue'
import rechargeMoney from '@/pages/wallet/rechargeMoney.vue'
import refundDetail from '@/pages/wallet/refundDetail.vue'
import wallet from '@/pages/wallet/wallet.vue'
import withdraw from '@/pages/wallet/withdraw.vue'
import withdrawDetail from '@/pages/wallet/withdrawDetail.vue'


//分享H5
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
            path: '/bankCard',
            name: '我的银行卡',
            component: bankCard
        },
        {
            path: '/bindCard',
            name: '添加银行卡',
            component: bindCard
        },
        {
            path: '/rechargeCard',
            name: '充值',
            component: rechargeCard
        },
        {
            path: '/rechargeDetail',
            name: '充值明细',
            component: rechargeDetail
        },
        {
            path: '/rechargeMoney',
            name: '充值金额',
            component: rechargeMoney
        },
        {
            path: '/refundDetail',
            name: '退款明细',
            component: refundDetail
        },
        {
            path: '/wallet',
            name: '我的钱包',
            component: wallet
        },
        {
            path: '/withdraw',
            name: '提现',
            component: withdraw
        },
        {
            path: '/shareHistory',
            name: '分享记录',
            component: shareHistory
        },
        {
            path: '/mineTeam',
            name: '我的团队',
            component: mineTeam
        },
        {
            path: '/mineAchieve',
            name: '我的业绩',
            component: mineAchieve
        },
        {
            path: '/achieveBang',
            name: '业绩排行榜',
            component: achieveBang
        },
        {
            path: '/mineChief',
            name: '我的上级',
            component: mineChief
        },
        {
            path: '/memberManage',
            name: '会员管理',
            component: memberManage
        },
        {
            path: '/microWarehouse',
            name: '我的微仓',
            component: microWarehouse
        },
        {
            path: '/stockList',
            name: '进货',
            component: stockList
        },
        {
            path: '/stockOrder',
            name: '进货单',
            component: stockOrder
        },
        {
            path: '/stockPay',
            name: '进货支付',
            component: stockPay
        },
        {
            path: '/stockPaySuccess',
            name: '进货支付成功',
            component: stockPaySuccess
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
