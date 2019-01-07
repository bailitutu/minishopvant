<template>
    <div>
        <van-cell title="单元格" is-link />
        <van-cell title="单元格" is-link arrow-direction="down" value="内容" />
    </div>
</template>

<script>
    import { Button, Cell } from 'vant';
    export default {
        name: "test",
        compontents:{
            Button,
            Cell
        }
    }
</script>

<style scoped>

</style>
