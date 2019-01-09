<template>
    <div class="page hasNav bg-f4">
        <van-nav-bar
                fixed
                title="地址编辑"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-cell-group class="pt-10 bg-f4">
            <van-field v-model="people" label="收货人" placeholder="请输入用户名" />
            <van-field v-model="phone" label="手机号码" placeholder="请输入手机号码" />
            <van-field v-model="areaText" label="所在地区" readonly="readonly" @click.native="selectArea" placeholder="请选择所在省/市/区" />
            <van-field v-model="addressDetail" type="textarea" label="详细地址" placeholder="街道、楼牌号等" />
        </van-cell-group>
        <van-cell-group class="mt-10">
            <van-switch-cell v-model="isDefault" title="设置默认地址"  active-color="#FFCF0B"/>
        </van-cell-group>
        <p class="mt-10 fs-12 plr-12 c-b0">注：选中后每次下单时会默认选中该地址</p>
        <van-popup v-model="showAreaList" position="bottom" :overlay="false">
            <van-area :area-list="areaList"  @confirm="submitArea" @cancel="cancelArea"/>
        </van-popup>
        <van-cell class="bg-f4 ">
            <van-button size="large" :round="true" class="main_btn" >保存</van-button>
        </van-cell>
    </div>
</template>

<script>
    import { Button ,CellGroup,Cell,Field,SwitchCell,NavBar } from 'vant';
    export default {
        name: "address-edit",
        components:{
            Button ,CellGroup,Cell,Field,SwitchCell,NavBar
        },
        data(){
            return {
                showAreaList:false,
                people:'',
                phone:'',
                areaText:'',
                addressDetail:'',
                isDefault:false,
                areaList:areaList
            }
        },
        methods:{
            onClickLeft(){

            },
            // 选择地区
            selectArea(){
                this.showAreaList = true;
            },
            // 确认选择
            submitArea(val){
                let areaText = '';
                if(val && val.length > 0){
                    val.map(item =>{
                        areaText += item.name
                    })
                }
                this.areaText = areaText;
                this.showAreaList = false;
            },
            // 取消选择地区
            cancelArea(){
                this.showAreaList = false;
            }
        }
    }
</script>

<style lang="less" scoped>
</style>
