<template>
    <div class="page bg-f4">
        <ul class="address_list">
           <li >
               <p class="c-28 fs-14">张天爱  <span class="c-hui">15198700989</span> <van-tag type="danger">默认</van-tag></p>
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
    import { Button } from 'vant'
    export default {
        name: "address-select",
        components:{
            Button
        },
        data(){
            return {
                list: [
                    {
                        id: '1',
                        name: '张三',
                        tel: '13000000000',
                        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                    },
                    {
                        id: '2',
                        name: '李四',
                        tel: '1310000000',
                        address: '浙江省杭州市拱墅区莫干山路 50 号'
                    }
                ],
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
