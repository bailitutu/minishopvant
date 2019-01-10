<template>
    <div class="page hasNav bg-f4">
        <van-nav-bar
                fixed
                title="业绩排行榜"
                left-arrow
                @click-left="backPage"
        />
        <van-row class="table_list bb bg-white mt-10">
            <van-col span="6"  >
                <h4 class="c-28 tac fs-16">排名</h4>
            </van-col>
            <van-col span="6" class="c-28">
                <h4 class="c-28 tac fs-16">姓名(级别)</h4>
            </van-col>
            <van-col span="6" class="c-28">
                <h4 class="c-28 tac fs-16">销售额(万)</h4>
            </van-col>
            <van-col span="6" class="c-28">
                <h4 class="c-28 tac fs-16">增长率(%)</h4>
            </van-col>
        </van-row>

        <van-list  v-model="loading"
                   :finished="finished"
                   finished-text="没有更多了~"
                   @load="onLoad"
                   class="detail_list">
            <van-row class="table_list bg-white">
                <van-col span="6"  >
                    <p class="c-28 tac fs-14">23453</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">张三(初级)</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">34</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">32.0</p>
                </van-col>
            </van-row>
            <van-row class="table_list bb bg-white">
                <van-col span="6"  >
                    <p class="c-28 tac fs-14">23453</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">张三(初级)</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">34</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">32.0</p>
                </van-col>
            </van-row>
            <van-row class="table_list bb bg-white">
                <van-col span="6"  >
                    <p class="c-28 tac fs-14">23453</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">张三是(初级)</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">34</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">32.0</p>
                </van-col>
            </van-row>
            <van-row class="table_list bg-white">
                <van-col span="6"  >
                    <p class="c-28 tac fs-14">23453</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">张三(初级)</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">34</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">32.0</p>
                </van-col>
            </van-row>
            <van-row class="table_list bb bg-white">
                <van-col span="6"  >
                    <p class="c-28 tac fs-14">23453</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">张三(初级)</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">34</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">32.0</p>
                </van-col>
            </van-row>

        </van-list>

    </div>
</template>

<script>
    export default {
        name: "achieve-bang",
        data(){
            return {

            }
        },
        methods:{
            backPage(){

            }
        }
    }
</script>

<style lang="less" scoped>
    .table_list{
        height:52px;
        line-height: 52px;
        h4{
            height:52px;
            line-height: 52px;
        }
    }
</style>
