<template>
    <div class="page hasNav hasFoo bg-f4">
        <van-nav-bar
                fixed
                title="支付"
                left-arrow
                @click-left="backPage"
        />

        <!--<van-cell is-link title="选择地址" :border="false" center>-->
        <!--</van-cell>-->
        <van-cell is-link class="address_select"  :border="false" center>
            <p class="fs-14 c-28">阿手动 <span class="c-hui">15198700989</span></p>
            <div  class="two_row c-hui fs-14">浙江省杭州市拱墅区祥园路88号智慧信息产业园 88号</div>
        </van-cell>

        <van-cell-group class="mt-10">
            <van-cell :border="false" style="height:44px;" title="请选择支付方式" ></van-cell>
            <van-cell  >
                <img src="../../assets/pay_icon1.png" slot="icon" alt="">
                <p class="tal ml-10" slot="title" >余额支付 <span class="c-b0 ml-10">可用余额：￥8899.00</span></p>
                <img src="../../assets/selected_icon.png" class="select_icon" slot="right-icon" alt="">
            </van-cell>
        </van-cell-group>



        <div class="good_list">
            <p class="title"> 订单信息</p>
            <div class="good_cell">
                <img src="../../assets/logo.png" class="good_img" alt="">
                <div  class="good_info">
                    <div class="fs-14 c-28 two_row good_name">欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>
                    <p class="fs-14 c-hui one_raw">规格参数</p>
                    <div class="ovh ">
                        <p class="c-money fs-16 fl">¥378</p>
                    </div>
                </div>
            </div>
            <van-cell class="number_item" :border="false" title="购买数量">
                <van-stepper v-model="value"  />
            </van-cell>
            <div class="total_item fs-14">小计：<span class="c-money">¥8899.00</span></div>

        </div>


        <van-cell-group class="mt-10 mb-10">
            <van-cell title="商品总额" value="¥778.00"></van-cell>
            <van-cell title="订单总计">
                <p class="tar fs-16 c-money">¥778.00</p>
            </van-cell>
            <van-cell title="实付金额">
                <p class="tar fs-16 c-money">¥778.00</p>
            </van-cell>
        </van-cell-group>


        <div class="submit_item">
            <p class="fs-14 c-money">合计：¥148.00</p>
            <van-button size="normal" square class="cancel_btn" >取消订单</van-button>
            <van-button size="normal" square class="pay_btn" >付款</van-button>
        </div>
    </div>
</template>

<script>
    import {Cell,Stepper ,CellGroup,SubmitBar ,NavBar } from 'vant'

    export default {
        name: "stock-pay",
        components:{
            Cell,Stepper,CellGroup,SubmitBar,NavBar
        }
    }
</script>

<style lang="less" scoped>
    .address_select{
        height:auto;
        background: #ffffff;
        padding:10px 12px;
        >p{
            line-height: 32px;
        }
        >div{
            height:48px;
            line-height: 24px;
        }
    }

    .good_list{
        background: #ffffff;
        margin-top: 10px;
        .title{
            height:44px;
            line-height: 44px;
            padding: 0 12px;
            border-bottom: 1px solid #F0F2F5;
        }
        .good_cell{
            padding:10px 12px 10px 120px;
            border-bottom: 1px solid #F0F2F5;
            overflow: hidden;
            position: relative;
            .good_img{
                width:100px;
                height: 100px;
                position: absolute;
                left:12px;
                top:10px;
                z-index: 1;
            }
            .good_info{
                overflow: hidden;
                .good_name{
                    height: 44px;
                    line-height: 22px;
                }
                >p{
                    margin-bottom: 10px;
                    margin-top: 10px;
                }
            }
        }
        .total_item{
            height:52px;
            line-height: 52px;
            text-align: right;
            padding:0 12px;
            border-top: 1px solid #F0F2F5;
        }

    }

    .submit_item{
        position: fixed;
        bottom:0;
        left:0;
        right:0;
        z-index: 1000;
        height:52px;
        line-height: 52px;
        padding:0;
        text-align: right;
        background: #ffffff;
        overflow: hidden;
        font-size:0;
        p{
            height: 100%;
            padding:0 12px;
            display: inline-block;
            float: left;
        }
        button{
            margin:0 ;
            width:90px;
            height:100%;
            border:none;
            color: #ffffff;
        }
        .cancel_btn{
            background: #4E6260;
        }
        .pay_btn{
            background: #FFCF0B;
        }
    }
    .select_icon{
        width: 20px;
        height: 20px;
    }

</style>

