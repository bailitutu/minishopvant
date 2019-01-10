<template>
    <div class="page hasNav hasFoo bg-f4">
        <van-nav-bar
                fixed
                title="我的微仓"
                left-arrow
                @click-left="backPage"
        />

        <div class="top_btn_item bg-white" >
            <van-button size="normal" type="danger" class="" > 进货</van-button>
            <van-button size="normal" class="bg-yellow no_border c-white"> 出货</van-button>
        </div>

        <div class="bb mt-10">
            <van-cell title="微仓库存" :border="false"></van-cell>
        </div>
        <van-list  v-model="loading"
                   :finished="finished"
                   finished-text="没有更多了~"
                   @load="onLoad"
                   class="stock_list" >
                <van-cell >
                    <div class="stock_inner">
                        <img src="../../assets/logo.png" class="stock_img" alt="">
                        <div class="stock_info">
                            <div class="two_row c-28 fs-16">欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>
                            <div class="stock_detail c-b0 fs-12">
                                <p >规格参数</p>
                                <span>x90</span>
                            </div>
                        </div>
                    </div>
                </van-cell>
            <van-cell >
                <div class="stock_inner">
                    <img src="../../assets/logo.png" class="stock_img" alt="">
                    <div class="stock_info">
                        <div class="two_row c-28 fs-16">欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>
                        <div class="stock_detail c-b0 fs-12">
                            <p >规格参数</p>
                            <span>x90</span>
                        </div>
                    </div>
                </div>
            </van-cell>
            <van-cell >
                <div class="stock_inner">
                    <img src="../../assets/logo.png" class="stock_img" alt="">
                    <div class="stock_info">
                        <div class="two_row c-28 fs-16">欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>
                        <div class="stock_detail c-b0 fs-12">
                            <p >规格参数</p>
                            <span>x90</span>
                        </div>
                    </div>
                </div>
            </van-cell>
            <van-cell >
                <div class="stock_inner">
                    <img src="../../assets/logo.png" class="stock_img" alt="">
                    <div class="stock_info">
                        <div class="two_row c-28 fs-16">欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>
                        <div class="stock_detail c-b0 fs-12">
                            <p >规格参数</p>
                            <span>x90</span>
                        </div>
                    </div>
                </div>
            </van-cell>
            <van-cell >
                <div class="stock_inner">
                    <img src="../../assets/logo.png" class="stock_img" alt="">
                    <div class="stock_info">
                        <div class="two_row c-28 fs-16">欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>
                        <div class="stock_detail c-b0 fs-12">
                            <p >规格参数</p>
                            <span>x90</span>
                        </div>
                    </div>
                </div>
            </van-cell>
            <van-cell >
                <div class="stock_inner">
                    <img src="../../assets/logo.png" class="stock_img" alt="">
                    <div class="stock_info">
                        <div class="two_row c-28 fs-16">欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>
                        <div class="stock_detail c-b0 fs-12">
                            <p >规格参数</p>
                            <span>x90</span>
                        </div>
                    </div>
                </div>
            </van-cell>
            <van-cell >
                <div class="stock_inner">
                    <img src="../../assets/logo.png" class="stock_img" alt="">
                    <div class="stock_info">
                        <div class="two_row c-28 fs-16">欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>
                        <div class="stock_detail c-b0 fs-12">
                            <p >规格参数</p>
                            <span>x90</span>
                        </div>
                    </div>
                </div>
            </van-cell>
        </van-list>
        <van-button size="large" class="footer_btn" >进出仓明细</van-button>
    </div>
</template>

<script>
    export default {
        name: "micro-warehouse",
        data(){
            return {
                loading:false,
                finished:false,

            }
        }
    }
</script>

<style lang="less" scoped>
    .top_btn_item{
        padding: 10px 12px;
        display: flex;
        justify-content: space-around;
        button{
            width: 150px;
        }
    }
    .stock_inner{
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        align-content: center;
        >img{
            width:100px;
            height: 100px;
            margin-right: 10px;
        }
        .stock_info{
            height: 100px;
            display: flex;
            flex-direction:column;
            justify-content: space-between;
            align-items: flex-start;
            align-content: stretch;
            .stock_detail{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
    }


</style>
