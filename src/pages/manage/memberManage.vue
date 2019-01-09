<template>
    <div class="page hasNav hasFoo bg-f4">
        <van-nav-bar
                fixed
                title="会员管理"
                left-arrow
                @click-left="backPage"
        />
        <div class="user_info">
            <img src="../../assets/member_bg.png" class="bg" alt="">
            <div class="user_detail">
                <p>张三芬</p>
                <p></p>
            </div>
        </div>
        <van-cell :border="false" class="bb">
            <p class="tac fs-16">已邀请人</p>
        </van-cell>

        <van-row class="table_list bb bg-white">
            <van-col span="6"  >
                <h4 class="c-28 tac fs-16">ID</h4>
            </van-col>
            <van-col span="6" class="c-28">
                <h4 class="c-28 tac fs-16">姓名</h4>
            </van-col>
            <van-col span="6" class="c-28">
                <h4 class="c-28 tac fs-16">邀请人数(人)</h4>
            </van-col>
            <van-col span="6" class="c-28">
                <h4 class="c-28 tac fs-16">加入时间</h4>
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
                    <p class="c-28 tac fs-14">张三(初级代理)</p>
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
                    <p class="c-28 tac fs-14">张三(初级代理)</p>
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
                    <p class="c-28 tac fs-14">张三(初级代理)</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">34</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">2018.09.09</p>
                </van-col>
            </van-row>
            <van-row class="table_list bg-white">
                <van-col span="6"  >
                    <p class="c-28 tac fs-14">23453</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">张三(初级代理)</p>
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
                    <p class="c-28 tac fs-14">张三(初级代理)</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">34</p>
                </van-col>
                <van-col span="6" class="c-28">
                    <p class="c-28 tac fs-14">2018.09.09</p>
                </van-col>
            </van-row>

        </van-list>


        <van-button size="large" class="footer_btn">邀请好友加入代理</van-button>

    </div>
</template>

<script>
    export default {
        name: "member-manage"
    }
</script>

<style lang="less" scoped>
    .user_info{
        position: relative;
        background: #fff;
        padding:10px 12px 0;
        img.bg{
            width: 100%;
            height:auto;
        }
        .user_detail{
            height:50px;
            padding:0 40px;
            position: absolute;
            color: #ffffff;
            top:50%;
            left: 0;
            margin-top: -25px;
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
