<template>
    <div class="page hasNav hasFoo bg-f4">
        <van-nav-bar
                fixed
                title="我的业绩"
                left-arrow
                @click-left="backPage"
        >
            <van-cell slot="right" style="right:-15px;" value-class="c-b0" is-link arrow-direction="down" :value="dataType" @click="selectHandler"></van-cell>
        </van-nav-bar>

        <van-row class="bg-white tac">
            <van-col span="12" class="achieve_cell">
                <p class="fs-20 c-money">234234</p>
                <p class="fs-12 c-b0 mt-10">累计销售额(元)</p>
            </van-col>
            <van-col span="12" class="achieve_cell">
                <p class="fs-20 c-money">234234</p>
                <p class="fs-12 c-b0 mt-10">累计利润(元)</p>
            </van-col>
        </van-row>

        <van-row class="table_list bb bg-white mt-10">
            <van-col span="6"  >
                <p class="c-28 tac fs-14">时间</p>
            </van-col>
            <van-col span="6" class="c-28">
                <p class="c-28 tac fs-14 one_raw">业绩类型</p>
            </van-col>
            <van-col span="6" class="c-28">
                <p class="c-28 tac fs-14 one_raw">销售额（元）</p>
            </van-col>
            <van-col span="6" class="c-28">
                <p class="c-28 tac fs-14 one_raw">利润（元）</p>
            </van-col>
        </van-row>

        <van-list  v-model="loading"
                   :finished="finished"
                   finished-text="没有更多了~"
                   @load="onLoad"
                   class="detail_list">
            <van-row class="table_list bg-white">
                <van-col span="6"  >
                    <p class="c-28 tac fs-14">2018.09.09</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14"> (直销)</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">34</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">23453</p>
                </van-col>
            </van-row>
            <van-row class="table_list bb bg-white">
                <van-col span="6"  >
                    <p class="c-28 tac fs-14">23453</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14"> ( 直销)</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">34</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">2018.09.09</p>
                </van-col>
            </van-row>
            <van-row class="table_list bb bg-white">
                <van-col span="6"  >
                    <p class="c-28 tac fs-14">23453</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14"> ( 直销)</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">34</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">2018.09.09</p>
                </van-col>
            </van-row>
            <van-row class="table_list bb bg-white">
                <van-col span="6"  >
                    <p class="c-28 tac fs-14">23453</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14"> ( 直销)</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">34</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">2018.09.09</p>
                </van-col>
            </van-row>
            <van-row class="table_list bb bg-white">
                <van-col span="6"  >
                    <p class="c-28 tac fs-14">23453</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14"> ( 直销)</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">34</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">2018.09.09</p>
                </van-col>
            </van-row>
            <van-row class="table_list bb bg-white">
                <van-col span="6"  >
                    <p class="c-28 tac fs-14">23453</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14"> ( 直销)</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">34</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">2018.09.09</p>
                </van-col>
            </van-row>
            <van-row class="table_list bb bg-white">
                <van-col span="6"  >
                    <p class="c-28 tac fs-14">23453</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14"> ( 直销)</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">34</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">2018.09.09</p>
                </van-col>
            </van-row>
            <van-row class="table_list bb bg-white">
                <van-col span="6"  >
                    <p class="c-28 tac fs-14">23453</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14"> ( 直销)</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">34</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">2018.09.09</p>
                </van-col>
            </van-row>
            <van-row class="table_list bb bg-white">
                <van-col span="6"  >
                    <p class="c-28 tac fs-14">23453</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14"> ( 直销)</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">34</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">2018.09.09</p>
                </van-col>
            </van-row>

        </van-list>

        <van-button class="footer_btn" size="large" >业绩排行榜</van-button>


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
        name: "mine-achieve",
        data(){
            return {
                dataType:'全部',
                showSelect:false,
                actions:[  {
                    name: '全部',
                    id:1
                },  {
                    name: '选项',
                    id:2
                },  {
                    name: '选项',
                    id:3
                },  {
                    name: '选项',
                    id:4
                },]
            }
        },
        methods:{
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
    .achieve_cell{
        padding:16px 12px;
        &:first-child{
            border-right: 1px solid #f4f4f4;
        }
    }
    .table_list{
        height:52px;
        line-height: 52px;
        h4{
            height:52px;
            line-height: 52px;
        }
    }
</style>
