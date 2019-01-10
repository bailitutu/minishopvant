<template>
    <div class="page hasNav hasFoo bg-f4">
        <van-nav-bar
                fixed
                title="进货单"
                left-arrow
                @click-left="backPage"
        />

        <ul class="order_list">
            <li>
                <van-checkbox checked-color="#FFCF0B" class="order_cell" @change.self="selectItem " v-model="selectAll" ></van-checkbox>
                <div class="good_cell">
                    <img src="../../assets/logo.png" class="good_img" alt="">
                    <div  class="good_info">
                        <div class="fs-14 c-28 two_row good_name">欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>
                        <p class="fs-14 c-hui one_raw">规格参数</p>
                        <div class="ovh ">
                            <p class="c-money fs-16 fl">¥378</p>
                            <van-stepper class="fr" v-model="value" @plus.stop="addNumber"/>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <van-checkbox checked-color="#FFCF0B" class="order_cell" @change.self="selectItem " v-model="selectAll" ></van-checkbox>
                <div class="good_cell">
                    <img src="../../assets/logo.png" class="good_img" alt="">
                    <div  class="good_info">
                        <div class="fs-14 c-28 two_row good_name">欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>
                        <p class="fs-14 c-hui one_raw">规格参数</p>
                        <div class="ovh ">
                            <p class="c-money fs-16 fl">¥378</p>
                            <van-stepper class="fr" v-model="value" @plus.stop="addNumber"/>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <van-checkbox checked-color="#FFCF0B" class="order_cell" @change.self="selectItem " v-model="selectAll" ></van-checkbox>
                <div class="good_cell">
                    <img src="../../assets/logo.png" class="good_img" alt="">
                    <div  class="good_info">
                        <div class="fs-14 c-28 two_row good_name">欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>
                        <p class="fs-14 c-hui one_raw">规格参数</p>
                        <div class="ovh ">
                            <p class="c-money fs-16 fl">¥378</p>
                            <van-stepper class="fr" v-model="value" @plus.stop="addNumber"/>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <van-checkbox checked-color="#FFCF0B" class="order_cell" @change.self="selectItem " v-model="selectAll" ></van-checkbox>
                <div class="good_cell">
                    <img src="../../assets/logo.png" class="good_img" alt="">
                    <div  class="good_info">
                        <div class="fs-14 c-28 two_row good_name">欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>
                        <p class="fs-14 c-hui one_raw">规格参数</p>
                        <div class="ovh ">
                            <p class="c-money fs-16 fl">¥378</p>
                            <van-stepper class="fr" v-model="value" @plus.stop="addNumber"/>
                        </div>
                    </div>
                </div>
            </li>
        </ul>


        <van-goods-action style="z-index: 9900" class="bg-white">
            <van-cell class="footer_cell" :border="false">
                <van-checkbox checked-color="#FFCF0B" v-model="selectAll"  class="fl">全选</van-checkbox>
                <p class="fs-14 c-money fl">合计：¥148.00</p>
            </van-cell>
            <van-goods-action-big-btn   style="height:52px;"
                                      danger
                                      text="删除"
                                      @click="onClickBigBtn"
            />
            <van-goods-action-big-btn style="background: #FFCF0B;border:none;height:52px;"
                                      primary
                                      text="付款"
                                      @click="onClickBigBtn"
            />
        </van-goods-action>



    </div>
</template>

<script>
    export default {
        name: "stock-order",
        data(){
            return {
                selectAll:true,
            }
        },
        methods:{
            selectItem(){
                console.log(32324)
            },
            addNumber(){
                console.log(3333)
            }
        }
    }
</script>

<style lang="less" scoped>
    .footer_cell{
        width: 60%;
        p{
            height: 100%;
            display: inline-block;
            vertical-align: middle;
            margin-left: 20px;
        }
    }
    .order_list{
        padding-bottom: 10px;
        li{
            background: #ffffff;
            margin-top: 10px;
            padding:10px 2px 10px 12px;
            display: flex;
            justify-content: space-between;
            align-content: center;
            align-items: center;
            border-bottom: 1px solid #F0F2F5;
        }
    }

    .good_cell{
        width: 90%;
        padding:10px 12px 10px 110px;
        overflow: hidden;
        position: relative;
        .good_img{
            width:100px;
            height: 100px;
            position: absolute;
            left:0;
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
</style>
