<template>
    <div class="page hasNav bg-f4">
        <van-nav-bar
                fixed
                title="提现到银行卡"
                left-arrow
                @click-left="backPage"
        />
        <van-cell-group>
            <van-cell :border="false" title="提现金额"></van-cell>
            <van-field
                    v-model="cardName"
                    input-align="left"
                    clearable
                    label="￥"
                    placeholder="请填写提现金额"
            />
            <van-cell :border="false" >
                <div class="fr c-28" @click="allWithdraw">全部提现</div>
                <p class="tac fr c-b0" style="margin-right: 20px;">可提现余额：¥7889.00 </p>
            </van-cell>

        </van-cell-group>

        <van-cell class="no_bg" :border="false">
            <p class="c-b0">注：提现审核通过后，一般需要1~2个工作日到账(周末和节假日自 动延期)</p>
        </van-cell>

        <van-cell class="no_bg" :border="false">
            <van-button size="large" class="main_btn" round>确定提现</van-button>
        </van-cell>

    </div>
</template>

<script>
    import {Button,CellGroup, Cell, NavBar, Field } from 'vant';

    export default {
        name: "withdraw",
        components: {
            Button,CellGroup, Cell, NavBar, Field
        },
        methods:{
            allWithdraw(){
                console.log(23423423)
            }
        }
    }
</script>

<style scoped>

</style>
