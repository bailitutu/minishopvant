<template>
    <div class="page hasNav hasFoo bg-f4">
        <van-nav-bar
                fixed
                title="我的上级"
                left-arrow
                @click-left="backPage"
        />
        <van-cell-group class="mt-10">
            <van-cell title="姓名" value="张三"></van-cell>
            <van-cell title="等级" value="初级代理"></van-cell>
            <van-cell title="电话" value="131 0987 0989"></van-cell>
        </van-cell-group>

    </div>
</template>

<script>
    import { CellGroup,Cell} from 'vant'

    export default {
        name: "mine-chief",
        components:{
            Cell,CellGroup
        }
    }
</script>

<style scoped>

</style>
