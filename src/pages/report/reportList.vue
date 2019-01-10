<template>
    <div class="page hasNav hasFoo bg-f4">
        <van-nav-bar
                fixed
                title="线下报备"
                left-arrow
                @click-left="backPage"
        />

        <van-list  v-model="loading"  :finished="finished" finished-text="没有更多了~"  @load="onLoad">
            <div class="bg-white bb">
                <van-cell title="良渚永旺梦乐城" size="large" value="审核中" value-class="c-money" :border="false" ></van-cell>
                <van-cell class="h-44" value="已提价审核" value-class="c-b0" :border="false"></van-cell>
                <van-cell class="h-44" value="2018-09-09 19:00:00" value-class="c-b0" :border="false"></van-cell>
            </div>
            <div class="bg-white bb">
                <van-cell title="良渚永旺梦乐城" size="large" value="审核中" value-class="c-money" :border="false" ></van-cell>
                <van-cell class="h-44" value="已提价审核" value-class="c-b0" :border="false"></van-cell>
                <van-cell class="h-44" value="2018-09-09 19:00:00" value-class="c-b0" :border="false"></van-cell>
            </div>
            <div class="bg-white bb">
                <van-cell title="良渚永旺梦乐城" size="large" value="审核中" value-class="c-money" :border="false" ></van-cell>
                <van-cell class="h-44" value="已提价审核" value-class="c-b0" :border="false"></van-cell>
                <van-cell class="h-44" value="2018-09-09 19:00:00" value-class="c-b0" :border="false"></van-cell>
            </div>
            <div class="bg-white bb">
                <van-cell title="良渚永旺梦乐城" size="large" value="审核中" value-class="c-money" :border="false" ></van-cell>
                <van-cell class="h-44" value="已提价审核" value-class="c-b0" :border="false"></van-cell>
                <van-cell class="h-44" value="2018-09-09 19:00:00" value-class="c-b0" :border="false"></van-cell>
            </div>
            <div class="bg-white bb">
                <van-cell title="良渚永旺梦乐城" size="large" value="审核中" value-class="c-money" :border="false" ></van-cell>
                <van-cell class="h-44" value="已提价审核" value-class="c-b0" :border="false"></van-cell>
                <van-cell class="h-44" value="2018-09-09 19:00:00" value-class="c-b0" :border="false"></van-cell>
            </div>

        </van-list>


        <van-button size="large" class="footer_btn" >新增线下报备</van-button>

    </div>
</template>

<script>
    export default {
        name: "report-list"
    }
</script>

<style lang="less" scoped>
    .h-44{
        padding:10px 15px;
    }
</style>
