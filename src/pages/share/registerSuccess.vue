<template>
    <div class="page bg-f0">
        <div class="top_item">
            <img class="circle" src="../../assets/success_icon.png" alt="">
            <p class="c-33 fs-20">注册信息提交成功</p>
        </div>

        <van-cell class="btn_item bg-f0">
            <van-button size="large">回到首页</van-button>
        </van-cell>

    </div>
</template>

<script>
    import { Button } from 'vant'
    export default {
        name: "register-success",
        components:{
            Button
        }
    }
</script>

<style lang="less" scoped>
    .top_item{
        padding:30px 0 60px;
        text-align: center;
        background: #FFFFFF;
        img{
            width:65px;
            height: 65px;
        }
        p{
            margin-top: 17px;
        }
    }
    .btn_item{
        margin-top: 30px;
        button{
            background: #108EE9;
            color: #fff;
            font-size:16px;
        }
    }
</style>
