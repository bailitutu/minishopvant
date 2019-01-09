<template>
    <div class="page hasNav bg-f4">
        <van-nav-bar
                fixed
                title="充值"
                left-arrow
                @click-left="backPage"
        />
        <van-cell-group >
            <van-cell :border="false">
                <p class="tac">付款给XXXXX </p>
            </van-cell>
            <van-cell :border="false">
                <p class="tac fs-13">￥ <span class="fs-20 c-money" >8888.00</span> </p>
            </van-cell >
            <van-cell title="商品名称" value="充值"></van-cell>
            <van-cell title="商品编号" value="12348788998789"></van-cell>
        </van-cell-group>

        <van-cell-group class="mt-10">
            <van-field
                    v-model="cardName"
                    type="number"
                    input-align="left"
                    clearable
                    label="卡号"
                    placeholder="请输入银行卡号"
            />
        </van-cell-group>

        <van-cell class="no_bg" :border="false">
            <van-button size="large" class="main_btn" round>确定充值</van-button>
        </van-cell>

    </div>
</template>

<script>
    import {Button, List, Cell, NavBar, Panel} from 'vant';

    export default {
        name: " recharge-card",
        components:
            {
                Button, List, Cell, NavBar, Panel
            }
        ,
        data() {
            return {
                loading: false,
                finished: false,
            }
        }
        ,
        methods: {
            onLoad(){
                setTimeout(()=>{
                    this.loading = false;
                    this.finished = true;
                },3000)
            }

        }

    }
</script>

<style  lang="less" scoped >
    .list_cell{
       height:32px;
       line-height: 32px;
       overflow: hidden;
    }
</style>
