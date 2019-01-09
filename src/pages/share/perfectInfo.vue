<template>
    <div class="page bg-f4">
        <van-cell class="fs-14 c-28 van-cell " :border="false"><span class="c-money">*</span>基本资料</van-cell>
        <van-cell-group>
            <van-field v-model="userName" label="姓名" placeholder="请输入真实姓名"/>
            <van-field v-model="userName" label="身份证号" placeholder="请输入18位身份证号码"/>
        </van-cell-group>

        <van-cell-group class="mt-10 bg-white">
            <van-cell class="fs-14 c-28" :border="false"><span class="c-money">*</span>上传图片(真实清晰的图片更能通过审核)</van-cell>
            <van-row class="upload_item">
                <van-col class="upload_cell" span="12">
                    <div class="img_item tac">
                        <van-uploader class="upload_img" :after-read="onRead">
                            <img src="../../assets/upload_img.png" alt="">
                        </van-uploader>
                    </div>
                    <p class="tac mt-10">身份证(正面)</p>
                </van-col>
                <van-col class="upload_cell" span="12">
                    <div class="img_item tac">
                        <van-uploader class="upload_img" :after-read="onRead">
                            <img src="../../assets/upload_img.png" alt="">
                        </van-uploader>
                    </div>
                    <p class="tac mt-10">身份证(反面)</p>
                </van-col>
                <van-col class="upload_cell" span="12">
                    <div class="img_item tac">
                        <van-uploader class="upload_img" :after-read="onRead">
                            <img src="../../assets/upload_img.png" alt="">
                        </van-uploader>
                    </div>
                    <p class="tac mt-10">手持本人身份证</p>
                </van-col>
            </van-row>
        </van-cell-group>
        <van-cell :border="false">
            <van-checkbox v-model="checked" shape="square" checked-color="#FFCF0B">提交注册即表示您已同意 <span @click.stop="checkProp"
                    class="c-yellow">《代理协议》</span></van-checkbox>
        </van-cell>
        <van-cell class="mt-10 bg-f4">
            <van-button size="large" class="submit_btn bg-yellow c-white">提交注册</van-button>
        </van-cell>
    </div>
</template>

<script>
    import {CellGroup, Cell, Field, Uploader, Row, Col} from 'vant'

    export default {
        name: "perfect-info",
        components: {
            CellGroup, Cell, Field, Uploader, Row, Col
        },
        data() {
            return {
                userName: '',
                checked:true
            }
        },
        methods:{
            checkProp(){
                console.log(2222)
            }
        }
    }
</script>

<style lang="less" scoped>
    .upload_img {
        height: 5.3125rem;
        width: 8.5rem;
        img {
            width: 100%;
            height: 100%;
        }
    }

    .upload_item {

        .upload_cell {
            padding: 10px 12px;
        }
    }

    .submit_btn {

    }
</style>
