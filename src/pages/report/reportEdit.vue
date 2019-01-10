<template>
    <div class="page hasNav  bg-f4">
        <van-nav-bar
                fixed
                title="新增线下报备"
                left-arrow
                @click-left="backPage"
        />

        <van-cell-group>
            <van-cell :border="false" title="报备类型"></van-cell>
            <van-cell :border="false" title="请选择报备类型" title-class="c-b0 fs-14" is-link arrow-direction="down"></van-cell>
        </van-cell-group>
        <van-cell-group>
            <van-cell :border="false" title="报备规模"></van-cell>
            <van-field type="text" placeholder="请输入规模(例：5*8米)"></van-field>
        </van-cell-group>
        <van-cell-group>
            <van-cell :border="false" title="开店时间(最少一年)"></van-cell>
            <van-cell :border="false" title="请选择开店时间" title-class="c-b0 fs-14" is-link arrow-direction="down"></van-cell>
        </van-cell-group>
        <van-cell-group>
            <van-cell :border="false" title="商场联系人"></van-cell>
            <van-field type="text" placeholder="请输入商场联系人"></van-field>
        </van-cell-group>
        <van-cell-group>
            <van-cell :border="false" title="所在城市"></van-cell>
            <van-cell :border="false" title="请选择所在城市" title-class="c-b0 fs-14" is-link arrow-direction="down"></van-cell>
        </van-cell-group>
        <van-cell-group>
            <van-cell :border="false" title="具体地址"></van-cell>
            <van-field type="text" placeholder="请输入具体地址"></van-field>
        </van-cell-group>
        <van-cell-group>
            <van-cell :border="false" title="需要文件(五证等)"></van-cell>
            <van-field type="text" placeholder="请输入需要文件名称"></van-field>
        </van-cell-group>
        <van-cell-group>
            <van-cell :border="false" title="目前经营品类"></van-cell>
            <van-field type="text" placeholder="请输入目前经营的品类名称，如：鞋，衣帽等"></van-field>
        </van-cell-group>
        <van-cell-group class="btn_box bg-f4 tac">
            <van-button class="main_btn" size="large" round >提交</van-button>
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        name: "report-edit"
    }
</script>

<style scoped>
    .btn_box{
        padding: 20px;
    }
    .main_btn{
        margin-top: 7px;
        width: 240px;
    }
</style>
