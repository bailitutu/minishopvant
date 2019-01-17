<template>
    <div class="page hasNav hasFoo bg-f4">
        <van-nav-bar
                fixed
                title="管理中心"
                left-arrow
                @click-left="backPage"
        />

        <div class="manage_banner">
            <img src="../../assets/member_bg.png" class="h-f w-f" alt="">

        </div>

        <van-cell-group class="mt-10">
            <van-cell title="地址管理" is-link>
                <img src="../../assets/manage_address.png" class="cell_icon" slot="icon" alt="">
            </van-cell>
            <van-cell title="销售管理" is-link>
                <img src="../../assets/manage_sales.png" class="cell_icon" slot="icon" alt="">
            </van-cell>
            <van-cell title="会员管理" is-link>
                <img src="../../assets/manage_member.png" class="cell_icon" slot="icon" alt="">
            </van-cell>
            <van-cell title="我的微仓" is-link>
                <img src="../../assets/manage_ministock.png" class="cell_icon" slot="icon" alt="">
            </van-cell>
        </van-cell-group>

    </div>
</template>

<script>
    export default {
        name: "manage-center"
    }
</script>

<style lang="less" scoped>
    .manage_banner{
        width: 100%;
        height:187px;
    }
    .cell_icon{
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }
</style>
