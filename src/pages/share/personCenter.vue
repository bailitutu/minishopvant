<template>
    <div class="bg-f0 page pt-10">
        <div class="header_item">
            <img src="../../assets/Bitmap.png" alt="">
        </div>

        <van-cell-group>
            <van-cell title="我的订单" is-link value="查看全部订单" ></van-cell>
            <van-row class="c-28">
                <van-col class="orderCell" span="6">
                    <img src="../../assets/order-cell-one.png" alt="">
                    <span>待发货</span>
                </van-col>
                <van-col class="orderCell" span="6">
                    <img src="../../assets/order-cell-two.png" alt="">
                    <span>待发货</span>
                </van-col>
                <van-col class="orderCell" span="6">
                    <img src="../../assets/order-cell-three.png" alt="">
                    <span>待发货</span>
                </van-col>
                <van-col class="orderCell" span="6">
                    <img src="../../assets/order-cell-four.png" alt="">
                    <span>待发货</span>
                </van-col>

            </van-row>
        </van-cell-group>
        <van-cell-group class="mt-10">
            <van-cell title="地址管理" is-link ></van-cell>
        </van-cell-group>

    </div>
</template>

<script>
    import { Cell,CellGroup,Row,Col  } from 'vant'

    export default {
        name: "person-center",
        compontents:{
            Cell,
            CellGroup,
            Row,
            Col
        }
    }
</script>

<style lang="less" scoped>

    .header_item{

        overflow: hidden;
        margin: 0 10px ;
        height:124px;
        width:auto;
        background: url("../../assets/bg_pc.png") no-repeat center;
        background-size: cover;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        text-align: center;
        img{
            width:50px;
            height: 50px;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
            margin-top:35px;
            display: inline-block;
        }
    }
    .orderCell{
        height:80px;
        text-align: center;
        padding:10px;
        img{
            width: auto;
            height: auto;
        }
        span{
            display: block;
            font-size:14px;
            line-height: 24px;
            margin-top: 10px;
        }
    }


</style>
