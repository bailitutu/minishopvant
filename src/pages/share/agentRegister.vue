<template>
    <div class="page">
        <div class="head_img">
            <img class="circle" src="../../assets/Bitmap.png" alt="">
        </div>
        <van-cell-group>
            <van-field
                    class="form_cell"
                    v-model="username"
                    clearable
                    :left-icon="require('@/assets/agent_icon.png')"
                    is-link
                    placeholder="选择想要成为的代理级别"
            />
            <van-field
                    class="form_cell"
                    v-model="username"
                    clearable
                    :left-icon="require('@/assets/wechat_icon.png')"
                    placeholder="您的微信号"
            />
            <van-field
                    class="form_cell"
                    v-model="username"
                    clearable
                    :left-icon="require('@/assets/phone_icon.png')"
                    placeholder="您的手机号码"
            />
        </van-cell-group>
        <van-cell class="btn_item">
            <van-button size="large" >下一步</van-button>
        </van-cell>

    </div>
</template>

<script>
    import {Cell, CellGroup, Field,Button} from 'vant'

    export default {
        name: "agent-register",
        components: {
            Cell,
            CellGroup,
            Field,
            Button
        }
    }
</script>

<style lang="less" scoped>
    .head_img {
        padding: 60px 0 80px;
        text-align: center;
        img {
            width: 80px;
            height: 80px;
        }
    }
    .form_cell{
        height:52px;
        line-height: 52px;
    }
    .btn_item{
        margin-top: 34px;
        button{
            background: #FFCF0B;
            color: #f4f4f4;
            font-size:16px;
        }
    }
</style>
