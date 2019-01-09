<template>
    <div class="page hasNav bg-f4">
        <van-nav-bar
                fixed
                title="添加银行卡"
                left-arrow
                @click-left="backPage"
        />
        <van-cell-group>
            <van-field
                    v-model="cardName"
                    input-align="right"
                    clearable
                    label="真实姓名"
                    placeholder="请填写您的真实姓名"
            />
            <van-field
                    v-model="cardName"
                    input-align="right"
                    clearable
                    label="银行卡号"
                    placeholder="请输入银行卡号"
            />
            <van-field
                    v-model="cardName"
                    input-align="right"
                    clearable
                    label="开户银行"
                    placeholder="请填写正确的开户行信息"
            />
        </van-cell-group>

        <van-cell class="no_bg" :border="false">
            <p class="c-b0">注：银行卡审核需要1~2个工作日(周末和节假日自动延期)</p>
        </van-cell>

        <van-cell class="no_bg" :border="false">
            <van-button size="large" class="main_btn" round>绑定银行卡</van-button>
        </van-cell>

    </div>
</template>

<script>
    import {Button,CellGroup, Cell, NavBar, Field } from 'vant';

    export default {
        name: "bind-card",
        components: {
            Button,CellGroup, Cell, NavBar, Field
        },
        data(){
            return{
                cardName:'',

            }
        }
    }
</script>

<style scoped>

</style>
