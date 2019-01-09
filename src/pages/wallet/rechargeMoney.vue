<template>
    <div class="page hasNav bg-f4">
        <van-nav-bar
                fixed
                title="充值"
                left-arrow
                @click-left="backPage"
        />

        <van-cell-group>
            <van-cell :border="false" title="充值金额"></van-cell>
            <van-field
                    v-model="cardName"
                    type="number"
                    input-align="left"
                    clearable
                    label="￥"
                    placeholder="请填写充值金额"
            />
        </van-cell-group>

        <van-cell class="no_bg" :border="false">
            <p class="c-b0">特别提醒：代理升级充值请前往 我的—>代理升级通道充值 动延期)</p>
        </van-cell>

        <van-cell class="no_bg" :border="false">
            <van-button size="large" class="main_btn" round>确定充值</van-button>
        </van-cell>


    </div>
</template>

<script>
    import {Button,CellGroup, Cell, NavBar, Field } from 'vant';

    export default {
        name: "recharge-money",
        components: {
            Button,CellGroup, Cell, NavBar, Field
        },
    }
</script>

<style scoped>

</style>
