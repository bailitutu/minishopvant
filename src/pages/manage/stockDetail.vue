<template>
    <div class="page hasNav bg-f4">
        <van-nav-bar
                fixed
                title="进出货明细"
                left-arrow
                @click-left="backPage"
        >
            <van-cell slot="right" style="right:-15px;" value-class="c-b0" is-link arrow-direction="down" :value="dataType" @click="selectHandler"></van-cell>
        </van-nav-bar>

        <van-list v-model="loading" :finished="finished" finished-text="没有更多了"  @load="onLoad" >
            <div class="bb">
                <van-cell class="h-44" title="已出仓" value="2018-10-09" :border="false"> </van-cell>
                <van-cell class="h-44"  value="发起出货订单" :border="false"> </van-cell>
                <van-cell class="h-44"  value="1" :border="false">
                    <div class="one_raw c-b0" style="width:300px;" slot="title">欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>
                </van-cell>
            </div>
            <div class="bb">
                <van-cell class="h-44" title="已出仓" value="2018-10-09" :border="false"> </van-cell>
                <van-cell class="h-44"  value="发起出货订单" :border="false"> </van-cell>
                <van-cell class="h-44"  value="1" :border="false">
                    <div class="one_raw c-b0" style="width:300px;" slot="title">欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>
                </van-cell>
            </div>
            <div class="bb">
                <van-cell class="h-44" title="已出仓" value="2018-10-09" :border="false"> </van-cell>
                <van-cell class="h-44"  value="发起出货订单" :border="false"> </van-cell>
                <van-cell class="h-44"  value="1" :border="false">
                    <div class="one_raw c-b0" style="width:300px;" slot="title">欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>
                </van-cell>
            </div>
            <div class="bb">
                <van-cell class="h-44" title="已出仓" value="2018-10-09" :border="false"> </van-cell>
                <van-cell class="h-44"  value="发起出货订单" :border="false"> </van-cell>
                <van-cell class="h-44"  value="1" :border="false">
                    <div class="one_raw c-b0" style="width:300px;" slot="title">欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>
                </van-cell>
            </div>
            <div class="bb">
                <van-cell class="h-44" title="已出仓" value="2018-10-09" :border="false"> </van-cell>
                <van-cell class="h-44"  value="发起出货订单" :border="false"> </van-cell>
                <van-cell class="h-44"  value="1" :border="false">
                    <div class="one_raw c-b0" style="width:300px;" slot="title">欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>
                </van-cell>
            </div>
            <div class="bb">
                <van-cell class="h-44" title="已出仓" value="2018-10-09" :border="false"> </van-cell>
                <van-cell class="h-44"  value="发起出货订单" :border="false"> </van-cell>
                <van-cell class="h-44"  value="1" :border="false">
                    <div class="one_raw c-b0" style="width:300px;" slot="title">欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>
                </van-cell>
            </div>
            <div class="bb">
                <van-cell class="h-44" title="已出仓" value="2018-10-09" :border="false"> </van-cell>
                <van-cell class="h-44"  value="发起出货订单" :border="false"> </van-cell>
                <van-cell class="h-44"  value="1" :border="false">
                    <div class="one_raw c-b0" style="width:300px;" slot="title">欧舒丹甜蜜樱花沐浴啫喱/身体乳套装欧舒丹甜蜜樱花沐浴啫喱/身体乳套装</div>
                </van-cell>
            </div>
        </van-list>




        <van-actionsheet
                v-model="showSelect"
                :actions="actions"
                cancel-text="取消"
                @select="onSelect"
        />
    </div>
</template>

<script>
    export default {
        name: "stock-detail",
        data(){
            return {
                loading:false,
                finished:false,
                dataType:'全部',
                showSelect:false,
                actions:[  {
                    name: '全部',
                    id:1
                },  {
                    name: '出仓',
                    id:2
                },  {
                    name: '入仓',
                    id:3
                }]
            }
        },
        methods:{
            //加载
            onLoad(){
                setTimeout(()=>{
                    this.loading = false
                    this.finished = true
                },1000)

            },

            //展开筛选
            selectHandler(){
                this.showSelect = true;
            },
            //监听选择
            onSelect(item){
                this.showSelect = false;
                this.dataType = item.name;
                Toast(item.id);
            }
        }
    }
</script>

<style lang="less" scoped>
    .h-44{
        padding:8px 15px;
    }
</style>
