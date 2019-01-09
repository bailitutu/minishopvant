<template>
    <div class="page hasNav bg-f4">
        <van-nav-bar
                fixed
                title="地址管理"
                left-arrow
                @click-left="onClickLeft"
        />
        <ul class="address_list">
            <li >
                <p class="c-28 fs-14">张天爱  <span class="c-hui">15198700989</span>  <van-tag  type="danger">默认</van-tag></p>
                <div class="c-hui fs-12 two_row">浙江省杭州市拱墅区祥园路88号智慧信息产业园 88号</div>
            </li>
            <li >
                <p class="c-28 fs-14">张天爱  <span class="c-hui">15198700989</span> <span class="label_default hasBra">默认</span></p>
                <div class="c-hui fs-12 two_row">浙江省杭州市拱墅区祥园路88号智慧信息产业园 88号</div>
            </li>
            <li >
                <p class="c-28 fs-14">张天爱  <span class="c-hui">15198700989</span> <span class="label_default hasBra">默认</span></p>
                <div class="c-hui fs-12 two_row">浙江省杭州市拱墅区祥园路88号智慧信息产业园 88号</div>
            </li>
            <li >
                <p class="c-28 fs-14">张天爱  <span class="c-hui">15198700989</span> <span class="label_default hasBra">默认</span></p>
                <div class="c-hui fs-12 two_row">浙江省杭州市拱墅区祥园路88号智慧信息产业园 88号</div>
            </li>
            <li >
                <p class="c-28 fs-14">张天爱  <span class="c-hui">15198700989</span> <span class="label_default hasBra">默认</span></p>
                <div class="c-hui fs-12 two_row">浙江省杭州市拱墅区祥园路88号智慧信息产业园 88号</div>
            </li>
            <li >
                <p class="c-28 fs-14">张天爱  <span class="c-hui">15198700989</span> <span class="label_default hasBra">默认</span></p>
                <div class="c-hui fs-12 two_row">浙江省杭州市拱墅区祥园路88号智慧信息产业园 88号</div>
            </li>
            <li >
                <p class="c-28 fs-14">张天爱  <span class="c-hui">15198700989</span> <span class="label_default hasBra">默认</span></p>
                <div class="c-hui fs-12 two_row">浙江省杭州市拱墅区祥园路88号智慧信息产业园 88号</div>
            </li>
            <li >
                <p class="c-28 fs-14">张天爱  <span class="c-hui">15198700989</span> <span class="label_default hasBra">默认</span></p>
                <div class="c-hui fs-12 two_row">浙江省杭州市拱墅区祥园路88号智慧信息产业园 88号</div>
            </li>
        </ul>
        <van-button size="large" class="footer_btn">新增地址</van-button>
    </div>


</template>

<script>
    export default {
        name: "address-list",
        methods:{
            onClickLeft(){
                console.log('back click')
            }
        }

    }
</script>

<style lang="less" scoped>
    .address_list{
        padding-bottom:52px;
        padding-top: 10px;
        li{
            padding: 16px 20px 16px 12px;
            background: #fff;
            margin-bottom: 10px;
            p{
                line-height:24px;
            }
            div{
                padding-top:15px;
                width:260px;
            }
        }
    }

</style>

