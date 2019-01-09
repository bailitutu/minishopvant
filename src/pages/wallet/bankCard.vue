<template>
    <div class="page hasNav bg-f4">
        <van-nav-bar
                fixed
                title="我的银行卡"
                left-arrow
                right-text="添加银行卡"
                @click-left="backPage"
                @click-right="bindCard"
        />

        <div class="no_card tac bg-white" v-if="false">
            暂无绑定银行卡
        </div>

        <ul class="card_list">
            <li>
                <van-cell class="card_cell">
                    <div class="fl">
                        <img src="../../assets/logo.png" alt="" class="card_logo fl">
                        <div class="fl c-white card_bank">
                            <p class="fs-16">招商银行</p>
                            <p class="fs-12">CHINA MERCHANTS BANK</p>
                        </div>
                    </div>
                    <div class="fr">
                        <van-button size="mini" plain class="bind_btn" > 解绑</van-button>
                    </div>
                    <div class="card_number fl c-white">
                        6234 **** **** 1324
                    </div>
                </van-cell>

            </li>
            <li>
                <van-cell class="card_cell">
                    <div class="fl">
                        <img src="../../assets/logo.png" alt="" class="card_logo fl">
                        <div class="fl c-white card_bank">
                            <p class="fs-16">招商银行</p>
                            <p class="fs-12">CHINA MERCHANTS BANK</p>
                        </div>
                    </div>
                    <div class="fr">
                        <van-button size="mini" plain class="bind_btn" > 解绑</van-button>
                    </div>
                    <div class="card_number fl c-white">
                        6234 **** **** 1324
                    </div>
                </van-cell>
            </li>
            <li>
                <van-cell class="card_cell">
                    <div class="fl">
                        <img src="../../assets/logo.png" alt="" class="card_logo fl">
                        <div class="fl c-white card_bank">
                            <p class="fs-16">招商银行</p>
                            <p class="fs-12">CHINA MERCHANTS BANK</p>
                        </div>
                    </div>
                    <div class="fr">
                        <van-button size="mini" plain class="bind_btn" > 解绑</van-button>
                    </div>
                    <div class="card_number fl c-white">
                        6234 **** **** 1324
                    </div>
                </van-cell>

            </li>

        </ul>




    </div>
</template>

<script>
    import { Button ,CellGroup,Cell,NavBar } from 'vant';
    export default {
        name: "mine-card",
        components:{
            Button ,CellGroup,Cell,NavBar
        },
        methods:{
            backPage(){

            },
            bindCard(){

            }
        }

    }

</script>

<style lang="less" scoped>
    .card_list{
        width: 100%;
        padding:47px 12px 10px;
        overflow: hidden;
        li{
            height:140px;
            width:100%;
            -webkit-border-radius: 8px;
            -moz-border-radius: 8px;
            border-radius: 8px;
            position: relative;
            margin-top: -37px;
            .card_cell{
                background: transparent;
                .card_logo{
                    width: 25px;
                    height: 25px;
                }
                .card_bank{
                    margin-left: 10px;
                }
                .card_number{
                    margin-top: 14px;
                    font-size:20px;
                    letter-spacing:4px;
                }
                .bind_btn{
                    border:1px solid  #ffffff;
                    background: transparent;
                    color: #ffffff;
                }
            }
        }

        li:nth-child(3n+1){
            background: url('../../assets/card_bg1.png') no-repeat center ;
            background-size:cover;
        }
        li:nth-child(3n+2){
            background: url('../../assets/card_bg2.png') no-repeat center ;
            background-size:cover;
        }
        li:nth-child(3n){
            background: url('../../assets/card_bg3.png') no-repeat center ;
            background-size:cover;
        }
    }

    .no_card{
        height: 264px;
        line-height: 264px;
    }
</style>
