<template>
    <div class="page hasNav bg-f4">
        <van-nav-bar
                fixed
                title="充值明细"
                left-arrow
                @click-left="backPage"
        />

        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了~"
                @load="onLoad"
        >
            <van-cell>
                <div  class="list_cell fs-16 c-28"> <span class="fl" > 充值单号：232131203000090 </span> <span class="fr">充值成功</span></div>
                <div  class="list_cell fs-14"> <span class="fl c-b0" >2018-09-09 10:00:00 </span> <span class="fr c-money">+390.00</span></div>
            </van-cell>
            <van-cell>
                <div  class="list_cell fs-16 c-28"> <span class="fl" > 充值单号：232131203000090 </span> <span class="fr">充值成功</span></div>
                <div  class="list_cell fs-14"> <span class="fl c-b0" >2018-09-09 10:00:00 </span> <span class="fr c-money">+390.00</span></div>
            </van-cell>
            <van-cell>
                <div  class="list_cell fs-16 c-28"> <span class="fl" > 充值单号：232131203000090 </span> <span class="fr">充值成功</span></div>
                <div  class="list_cell fs-14"> <span class="fl c-b0" >2018-09-09 10:00:00 </span> <span class="fr c-money">+390.00</span></div>
            </van-cell>
            <van-cell>
                <div  class="list_cell fs-16 c-28"> <span class="fl" > 充值单号：232131203000090 </span> <span class="fr">充值成功</span></div>
                <div  class="list_cell fs-14"> <span class="fl c-b0" >2018-09-09 10:00:00 </span> <span class="fr c-money">+390.00</span></div>
            </van-cell>
            <van-cell>
                <div  class="list_cell fs-16 c-28"> <span class="fl" > 充值单号：232131203000090 </span> <span class="fr">充值成功</span></div>
                <div  class="list_cell fs-14"> <span class="fl c-b0" >2018-09-09 10:00:00 </span> <span class="fr c-money">+390.00</span></div>
            </van-cell>
            <van-cell>
                <div  class="list_cell fs-16 c-28"> <span class="fl" > 充值单号：232131203000090 </span> <span class="fr">充值成功</span></div>
                <div  class="list_cell fs-14"> <span class="fl c-b0" >2018-09-09 10:00:00 </span> <span class="fr c-money">+390.00</span></div>
            </van-cell>
            <van-cell>
                <div  class="list_cell fs-16 c-28"> <span class="fl" > 充值单号：232131203000090 </span> <span class="fr">充值成功</span></div>
                <div  class="list_cell fs-14"> <span class="fl c-b0" >2018-09-09 10:00:00 </span> <span class="fr c-money">+390.00</span></div>
            </van-cell>
            <van-cell>
                <div  class="list_cell fs-16 c-28"> <span class="fl" > 充值单号：232131203000090 </span> <span class="fr">充值成功</span></div>
                <div  class="list_cell fs-14"> <span class="fl c-b0" >2018-09-09 10:00:00 </span> <span class="fr c-money">+390.00</span></div>
            </van-cell>
            <van-cell>
                <div  class="list_cell fs-16 c-28"> <span class="fl" > 充值单号：232131203000090 </span> <span class="fr">充值成功</span></div>
                <div  class="list_cell fs-14"> <span class="fl c-b0" >2018-09-09 10:00:00 </span> <span class="fr c-money">+390.00</span></div>
            </van-cell>
            <van-cell>
                <div  class="list_cell fs-16 c-28"> <span class="fl" > 充值单号：232131203000090 </span> <span class="fr">充值成功</span></div>
                <div  class="list_cell fs-14"> <span class="fl c-b0" >2018-09-09 10:00:00 </span> <span class="fr c-money">+390.00</span></div>
            </van-cell>

        </van-list>
    </div>
</template>

<script>
    export default {
        name: "recharge-detail",
        data() {
            return {
                loading: false,
                finished: false,
            }
        }
        ,
        methods: {
            onLoad(){
                setTimeout(()=>{
                    this.loading = false;
                    this.finished = true;
                },3000)
            }

        }

    }
</script>

<style  lang="less" scoped >
    .list_cell{
        height:32px;
        line-height: 32px;
        overflow: hidden;
    }
</style>
