<template>
    <div class="page bg-f0">
        <div class="top_item bg-white">
            <img class="circle" src="../../assets/success_icon.png" alt="">
            <p class="c-33 fs-20">支付成功</p>
            <p class="top_tips">支付方式： <span>余额支付</span></p>
            <p class="top_tips">支付金额： <span>￥100.00</span></p>
            <van-row class="btn_item">
                <van-col span="12" class="tac">
                    <van-button size="normal" class="check_btn">查看订单</van-button>
                </van-col>
                <van-col span="12" class="tac">
                    <van-button size="normal" class="back_btn">回到首页</van-button>
                </van-col>
            </van-row>
        </div>

        <div class="tips_item c-b0">
            <div class="fs-14"><i class="icon_help"></i> 温馨提示</div>
            <p class="fs-12">本公司不会以订单异常、系统升级为由要求您点击任何网址链接进 行退款操作。</p>
        </div>
    </div>
</template>

<script>
    import { Button,Row,Col} from 'vant'

    export default {
        name: "pay-success",
        components:{
            Button,Row,Col
        }
    }
</script>

<style  lang="less" scoped>
    .top_item{
        padding:30px 0 35px;
        text-align: center;
        background: #FFFFFF;
        img{
            width:65px;
            height: 65px;
        }
        p{
            margin-top: 17px;
        }
        .top_tips{
            margin-top: 4px;
            line-height: 24px;
            font-size:14px;
            color: #888888;
            span{
                color: #DF0000;
            }
        }

    }
    .btn_item{
        margin-top: 30px;
        button{
            width: 127px;
        }
        .check_btn{
            background: #ffffff;
            color: #333333;
        }
        .back_btn{
            background: #FFCF0B;
            color: #fff;
        }
    }
    .tips_item{
        padding:12px 0;
        .icon_help{
            width:18px;
            height:18px;
            margin:0 6px 0px 12px;
            background: url("../../assets/help_icon.png") no-repeat center;
            display: inline-block;
            vertical-align: text-top;
        }
        p{
            margin-top:12px;
            padding:0 12px;
            line-height: 24px;
        }
    }
</style>
