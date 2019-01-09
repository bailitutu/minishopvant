<template>
    <div class="page bg-f4">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item class="img_list" :style="{  height: imgHeight }">
                <img src="../../assets/logo.png" alt="">
            </van-swipe-item>
            <van-swipe-item class="img_list" :style="{  height: imgHeight }">
                <img src="../../assets/logo.png" alt="">
            </van-swipe-item>
            <van-swipe-item class="img_list" :style="{  height: imgHeight }">
                <img src="../../assets/logo.png" alt="">
            </van-swipe-item>
            <van-swipe-item class="img_list" :style="{  height: imgHeight }">
                <img src="../../assets/logo.png" alt="">
            </van-swipe-item>
        </van-swipe>
        <div class="good_info">
            <div class="fs-14 c-28 two_row good_name">花花公子男鞋冬季加绒新款气垫跑步鞋男士运动潮鞋休闲 韩版鞋子男</div>
            <div class="ovh">
                <p class="mt-10 c-money fs-16 fl">¥478.00</p>
                <van-button size="small" class="vip_btn fr"><i></i>成为会员</van-button>
            </div>
        </div>
        <van-cell-group class="mt-10">
            <van-cell title="规格参数"  is-link></van-cell>
        </van-cell-group>
        <van-goods-action>
            <van-goods-action-mini-btn
                    :icon="require('@/assets/person_icon.png')"
                    text=""
                    @click="onClickMiniBtn"
            />
            <van-goods-action-big-btn style="background: #FFCF0B;border:none"
                    primary
                    text="立即购买"
                    @click="onClickBigBtn"
            />
        </van-goods-action>

    </div>
</template>

<script>
    import { Swipe, SwipeItem,CellGroup,Cell ,Button} from 'vant';
    export default {
        name: "good-detail",
        components:{
            Swipe, SwipeItem,CellGroup,Cell,Button
        },
        data(){
            return {
                imgHeight:''
            }
        },
        created(){
            this.imgHeight = window.innerWidth;


        }
    }
</script>

<style lang="less" scoped>
    .img_list{
        width: 100%;
        background: #fff;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .good_info{
        background: #fff;
        padding:12px;
        .good_name{
            min-height:60px;
        }
        .vip_btn{
            background: #FFCF0B;
            height:32px;
            color: #ffffff;
            position: relative;
            padding-left:30px;
            i{
                width:14px;
                height: 14px;
                position: absolute;
                background: url("../../assets/vip_icon.png") no-repeat center ;
                background-size:cover;
                left:8px;
                top:50%;
                margin-top:-7px;
                z-index: 2;
            }
        }
    }
</style>
