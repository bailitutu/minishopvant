<template>
    <div class="page hasNav bg-f4">
        <van-nav-bar
                fixed
                title="分享记录"
                left-arrow
                @click-left="backPage"
        />

        <van-list   v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad" >
            <van-cell-group class="mt-10">
                <div class="good_cell bb">
                    <img src="../../assets/bg_pc.png" alt="">
                    <div class="good_info">
                        <div class="c-28 fs-16 two_row">
                            时空焕活胶囊精华套装时空焕活胶囊精华套装时空焕活胶囊精华套装时空焕活胶囊精华套装时空焕活胶囊精华套装
                        </div>
                        <p class="fs-14 mt-10 c-money">¥478.00 </p>
                        <p class="fs-14 c-b0 ">分享时间: 2018.09.09 12:23:32</p>
                    </div>
                </div>
                <van-cell >
                    <div class="tar c-b0"> <span>点击量：89 成交次数：9 收益：90</span>   </div>
                </van-cell>

            </van-cell-group>
            <van-cell-group class="mt-10">
                <div class="good_cell bb">
                    <img src="../../assets/bg_pc.png" alt="">
                    <div class="good_info">
                        <div class="c-28 fs-16 two_row">
                            时空焕活胶囊精华套装时空焕活胶囊精华套装时空焕活胶囊精华套装时空焕活胶囊精华套装时空焕活胶囊精华套装
                        </div>
                        <p class="fs-14 mt-10 c-money">¥478.00 </p>
                        <p class="fs-14 c-b0 ">分享时间: 2018.09.09 12:23:32</p>
                    </div>
                </div>
                <van-cell >
                    <div class="tar c-b0"> <span>点击量：89 成交次数：9 收益：90</span>   </div>
                </van-cell>

            </van-cell-group>
            <van-cell-group class="mt-10">
                <div class="good_cell bb">
                    <img src="../../assets/bg_pc.png" alt="">
                    <div class="good_info">
                        <div class="c-28 fs-16 two_row">
                            时空焕活胶囊精华套装时空焕活胶囊精华套装时空焕活胶囊精华套装时空焕活胶囊精华套装时空焕活胶囊精华套装
                        </div>
                        <p class="fs-14 mt-10 c-money">¥478.00 </p>
                        <p class="fs-14 c-b0 ">分享时间: 2018.09.09 12:23:32</p>
                    </div>
                </div>
                <van-cell >
                    <div class="tar c-b0"> <span>点击量：89 成交次数：9 收益：90</span>   </div>
                </van-cell>

            </van-cell-group>

        </van-list>
    </div>
</template>

<script>
    export default {
        name: "share-history",
        data(){
            return {
                loading:false,
                finished:false
            }
        },
        methods:{
            onLoad(){
                setTimeout(()=>{
                    this.loading = false;
                    this.finished = true;
                },3000)
            }
        }
    }
</script>

<style lang="less" scoped>
    .good_cell{
        position: relative;
        padding:10px 12px 10px 110px;
        img{
            width:90px;
            height: 90px;
            position: absolute;
            top:10px;
            left:12px;
            z-index: 1;
        }
        .good_info{
            width: 100%;
            min-height:90px;
        }
    }
</style>
