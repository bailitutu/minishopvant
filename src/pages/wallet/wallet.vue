<template>
    <div class="page hasNav bg-f4 hasFoo">
        <van-nav-bar
                fixed
                title="我的钱包"
                left-arrow
                @click-left="backPage"
        />

        <div class="header_item">
            <van-cell class="no_bg" :border="false">
                <p class="tac c-white fs-14 mt-10">余额(元):</p>
            </van-cell>
            <p class="tac c-white h-f" style="font-size:40px;line-height:72px;">4728.00</p>
        </div>
        <van-row class="c-28 bg-white bb">
            <van-col class="item_cell" span="8">
                <p class="c-b0 fs-12">可提现余额</p>
                <span class="fs-16">¥489.00</span>
            </van-col>
            <van-col class="item_cell" span="8">
                <p class="c-b0 fs-12">可提现余额</p>
                <span class="fs-16">¥489.00</span>
            </van-col>
            <van-col class="item_cell" span="8">
                <p class="c-b0 fs-12">可提现余额</p>
                <span class="fs-16">¥489.00</span>
            </van-col>
        </van-row>
        <van-row class="c-28 bg-white ">
            <van-col class="item_cell" span="8">
                <p class="c-b0 fs-12">可提现余额</p>
                <span class="fs-16">¥489.00</span>
            </van-col>
            <van-col class="item_cell" span="8">
                <p class="c-b0 fs-12">可提现余额</p>
                <span class="fs-16">¥489.00</span>
            </van-col>
            <van-col class="item_cell" span="8">
                <p class="c-b0 fs-12">可提现余额</p>
                <span class="fs-16">¥489.00</span>
            </van-col>
        </van-row>

        <van-cell-group class="mt-10 mb-10">
            <van-cell title="充值记录"  is-link to="/rechargeDetail">
                <img slot="icon" class="cell_icon" src="../../assets/wallet_icon1.png"/>
            </van-cell>
            <van-cell title="提现记录"  is-link to="/withdrawDetail">
                <img slot="icon" class="cell_icon" src="../../assets/wallet_icon2.png"/>

            </van-cell>
            <van-cell title="退款记录"  is-link to="/refundDetail">
                <img slot="icon" class="cell_icon" src="../../assets/wallet_icon3.png"/>

            </van-cell>
            <van-cell title="我的银行卡" is-link to="/bankCard">
                <img slot="icon" class="cell_icon"  src="../../assets/wallet_icon4.png"/>
            </van-cell>
        </van-cell-group>

        <van-goods-action class="c-white">
            <van-goods-action-big-btn
                    class="bg-green no_border"
                    text="提现"
                    @click="onClickBigBtn"
            />
            <van-goods-action-big-btn
                    class="bg-yellow no_border"
                    primary
                    text="充值"
                    @click="onClickBigBtn"
            />
        </van-goods-action>

    </div>
</template>

<script>

    import { Cell,CellGroup,Row,Col,NavBar ,GoodsAction,GoodsActionBigBtn } from 'vant'

    export default {
        name: "wallet",
        compontents:{
            Cell,CellGroup, Row, Col,NavBar,GoodsAction,GoodsActionBigBtn
        }
    }
</script>

<style lang="less" scoped>
    .header_item{
        overflow: hidden;
        margin: 0 10px ;
        height:174px;
        width:auto;
        background: url("../../assets/bg_pc.png") no-repeat center;
        background-size: cover;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        text-align: center;
    }
    .item_cell{
        text-align: center;
        line-height: 32px;
        padding:10px;
    }
    .cell_icon{
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }
</style>
