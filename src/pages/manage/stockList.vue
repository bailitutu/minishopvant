<template>
    <div class="page hasNav hasFoo bg-f4">
        <div class="nav_bar bg-white">
            <van-button size="small" class="nav_left">
                <van-icon name="arrow-left" class="" />
            </van-button>
            <van-search slot="right" class="bg-white nav_search"
                        v-model="value"
                        placeholder="请输入搜索关键词"
                        show-action
                        @search="onSearch"
                        @cancel="onCancel"
            />
        </div>




    </div>
</template>

<script>
    export default {
        name: "stock-list"
    }
</script>

<style lang="less" scoped>
    .nav_bar{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9999;
        height:52px;
        width: 100%;
        .nav_left{
            width: 30px;
            height: 100%;
            border:none;
        }
    }
</style>
