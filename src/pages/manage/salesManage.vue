<template>
    <div class="page hasNav hasFoo bg-f4">
        <van-nav-bar
                fixed
                title="销售管理"
                left-arrow
                @click-left="backPage"
        />


        <van-cell-group class="mt-10">
            <van-cell title="分享记录" is-link>
                <img src="../../assets/sales_fenxiang.png" class="cell_icon" slot="icon" alt="">
            </van-cell>
            <van-cell title="我的团队" is-link>
                <img src="../../assets/sales_tuandui.png" class="cell_icon" slot="icon" alt="">
            </van-cell>
            <van-cell title="我的业绩" is-link>
                <img src="../../assets/sales_yeji.png" class="cell_icon" slot="icon" alt="">
            </van-cell>
            <van-cell title="我的上级" is-link>
                <img src="../../assets/sales_shangji.png" class="cell_icon" slot="icon" alt="">
            </van-cell>
        </van-cell-group>


    </div>
</template>

<script>
    export default {
        name: "sales-manage"
    }
</script>
<style lang="less" scoped>

    .cell_icon{
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }
</style>
