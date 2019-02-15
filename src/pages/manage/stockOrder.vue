<template>
    <div class="page hasNav hasFoo bg-f4 h-f ovh">
        <van-nav-bar
                fixed
                title="进货单"
                left-arrow
                @click-left="backPage"
        />
        <ul class="order_list">
            <vue-scroll
                    ref="vs"
                    :ops="ops"
                    @refresh-start="handleRS"
                    @load-before-deactivate="handleLBD"
                    @refresh-before-deactivate="handleRBD"
                    @load-start="handleLoadStart"
            >
                <li v-for="(item,index) in list" :key="index">
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

                <div class="slot-load" slot="load-start">jjiadfasd</div>

            </vue-scroll>


         <!--&lt;!&ndash;&ndash;&gt;-->
            <!--&lt;!&ndash;<li>&ndash;&gt;-->
                <!--&lt;!&ndash;<van-checkbox checked-color="#FFCF0B" class="order_cell" @change.self="selectItem " v-model="selectAll" ></van-checkbox>&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="good_cell">&ndash;&gt;-->
                    <!--&lt;!&ndash;<img src="../../assets/logo.png" class="good_img" alt="">&ndash;&gt;-->
                    <!--&lt;!&ndash;<div  class="good_info">&ndash;&gt;-->
                        <!--&lt;!&ndash;<div class="fs-14 c-28 two_row good_name">欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>&ndash;&gt;-->
                        <!--&lt;!&ndash;<p class="fs-14 c-hui one_raw">规格参数</p>&ndash;&gt;-->
                        <!--&lt;!&ndash;<div class="ovh ">&ndash;&gt;-->
                            <!--&lt;!&ndash;<p class="c-money fs-16 fl">¥378</p>&ndash;&gt;-->
                            <!--&lt;!&ndash;<van-stepper class="fr" v-model="value" @plus.stop="addNumber"/>&ndash;&gt;-->
                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;</li>&ndash;&gt;-->
            <!--&lt;!&ndash;<li>&ndash;&gt;-->
                <!--&lt;!&ndash;<van-checkbox checked-color="#FFCF0B" class="order_cell" @change.self="selectItem " v-model="selectAll" ></van-checkbox>&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="good_cell">&ndash;&gt;-->
                    <!--&lt;!&ndash;<img src="../../assets/logo.png" class="good_img" alt="">&ndash;&gt;-->
                    <!--&lt;!&ndash;<div  class="good_info">&ndash;&gt;-->
                        <!--&lt;!&ndash;<div class="fs-14 c-28 two_row good_name">欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>&ndash;&gt;-->
                        <!--&lt;!&ndash;<p class="fs-14 c-hui one_raw">规格参数</p>&ndash;&gt;-->
                        <!--&lt;!&ndash;<div class="ovh ">&ndash;&gt;-->
                            <!--&lt;!&ndash;<p class="c-money fs-16 fl">¥378</p>&ndash;&gt;-->
                            <!--&lt;!&ndash;<van-stepper class="fr" v-model="value" @plus.stop="addNumber"/>&ndash;&gt;-->
                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;</li>&ndash;&gt;-->
            <!--&lt;!&ndash;<li>&ndash;&gt;-->
                <!--&lt;!&ndash;<van-checkbox checked-color="#FFCF0B" class="order_cell" @change.self="selectItem " v-model="selectAll" ></van-checkbox>&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="good_cell">&ndash;&gt;-->
                    <!--&lt;!&ndash;<img src="../../assets/logo.png" class="good_img" alt="">&ndash;&gt;-->
                    <!--&lt;!&ndash;<div  class="good_info">&ndash;&gt;-->
                        <!--&lt;!&ndash;<div class="fs-14 c-28 two_row good_name">欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>&ndash;&gt;-->
                        <!--&lt;!&ndash;<p class="fs-14 c-hui one_raw">规格参数</p>&ndash;&gt;-->
                        <!--&lt;!&ndash;<div class="ovh ">&ndash;&gt;-->
                            <!--&lt;!&ndash;<p class="c-money fs-16 fl">¥378</p>&ndash;&gt;-->
                            <!--&lt;!&ndash;<van-stepper class="fr" v-model="value" @plus.stop="addNumber"/>&ndash;&gt;-->
                        <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;</li>&ndash;&gt;-->
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
                ops:{
                    vuescroll: {
                        mode: 'slide',
                        pullRefresh: {
                            enable: true,
                            tips: {
                                deactive: '下拉刷新',
                                active: '释放刷新',
                                start: '刷新中...',
                                beforeDeactive: '刷新成功!'
                            }
                        },
                        pushLoad: {
                            enable: true,
                            auto: false,
                            autoLoadDistance: 10,
                            tips:{
                                deactive: '上拉加载',
                                active: '释放加载',
                                start: '加载中...',
                                beforeDeactive: '加载成功!'
                            }
                        },
                        bar:{
                            background: '#c1c1c1',
                        }
                    }
                },
                itemAmount: 3,
                refresh: 1,
                noData: false,
                triggerType: 'load',


                selectAll:true,
                list:[1,2,3,4,5,6,7,8],
            };
        },
        methods:{
            selectItem(){
                console.log(32324)
            },
            addNumber(){
                console.log(3333)
            },
            handleRS(vsInstance, refreshDom, done) {
                const vm = this;
                setTimeout(() => {
                    this.refresh++;
                    done();
                }, 1500);
            },
            handleLoadStart(vm, dom, done) {
                setTimeout(() => {
                    const random = Math.floor(Math.random() * 2) + 1;
                    if (random == 1) {
                        this.noData = true;
                    } else {
                        this.noData = false;
                    }
                    done();
                }, 600);
            },
            handleLBD(vm, loadDom, done) {
                setTimeout(() => {
                    if (!this.noData) {
                        this.itemAmount += 2;
                    }
                    done();
                }, 500);
            },
            handleRBD(vm, loadDom, done) {
                setTimeout(() => {
                    done();
                }, 500);
            },

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
        height: 100%;
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
