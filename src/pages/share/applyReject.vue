<template>
    <div class="page">
        <van-cell title='退货原因'  :border="false"></van-cell>
        <van-cell-group class="border">
            <van-field type="text" placeholder="请选择退货原因"></van-field>
        </van-cell-group>
        <van-cell title='问提描述' :border="false"></van-cell>
        <van-cell-group class="border">
            <van-field type="textarea" class="edit_detail" placeholder="请输入退货问题描述"></van-field>
        </van-cell-group>

        <van-cell title='上传凭证(最多3张)' :border="false"></van-cell>

        <van-row class="upload_item">
            <van-col class="upload_cell" span="8">
                <div class="img_item tac">
                    <img src="../../assets/bg_pc.png" alt="">
                </div>
            </van-col>
            <van-col class="upload_cell" span="8">
                <div class="img_item tac">
                    <img src="../../assets/logo.png" alt="">
                </div>
            </van-col>
            <van-col class="upload_cell" span="8">
                <div class="img_item tac">
                    <van-uploader class="upload_icon" :after-read="onRead">
                        <img src="../../assets/upload_icon.png" alt="">
                    </van-uploader>
                </div>
            </van-col>
        </van-row>
        <van-cell title='退货原因'  :border="false"></van-cell>
        <van-cell-group class="border">
            <van-field label="联系人" type="text" placeholder="请输入联系人"></van-field>
        </van-cell-group>
        <van-cell-group class="border mt-10">
            <van-field label="联系电话" type="number" placeholder="请输入联系电话"></van-field>
        </van-cell-group>

        <van-cell style="padding:0;margin-top: 20px;">
            <van-button  size="large" class="bg-yellow c-white">提交</van-button>
        </van-cell>
        <div class="tips_item c-b0">
            <div class="fs-14"><i class="icon_help"></i> 温馨提示</div>
            <p class="fs-12 ">商品寄回地址将在审核通过后以短信形式告知，或在申请记录 中查询。</p>
            <p class="fs-12 ">提交服务单后，售后专员可能与您电话沟通，请保持手机畅通。</p>
            <p class="fs-12 ">退货处理成功后退款金额将原路返回到您的支持账户。</p>
        </div>

    </div>
</template>

<script>
    import { Cell,CellGroup ,Field ,Uploader,Row,Col} from 'vant'

    export default {
        name: "apply-reject",
        components:{
            Cell,CellGroup,Field,Uploader,Row,Col
        },

    }
</script>

<style lang="less" scoped>
    .page{
        padding:0 12px;
        .border{
            border:1px solid #F0F2F5;
        }
        .edit_detail{
            height:100px;
        }
        .upload_cell{
            padding:4px;
            .img_item{
                position: relative;
                width: 100%;
                height: 0px;
                padding-top: 100%;
                >img{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                .upload_icon{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    >img{
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        margin-left:-25px;
                        margin-top:-25px;
                        width: 50px;
                        height: 50px;
                    }
                }
            }
        }

        .tips_item{
            padding:12px 0;
            .icon_help{
                width:18px;
                height:18px;
                margin:0 6px 0px 0;
                background: url("../../assets/help_icon.png") no-repeat center;
                display: inline-block;
                vertical-align: text-top;
            }
            p{
                margin-top:12px;
                padding:0 0 0 14px;
                line-height: 24px;
                position: relative;
                &:after{
                    content:'';
                    top:9px;
                    left:0px;
                    position: absolute;
                    z-index: 1;
                    width: 8px;
                    height: 8px;
                    background: #b0b0b0;
                    -webkit-border-radius: 50%;
                    -moz-border-radius: 50%;
                    border-radius: 50%;
                }
            }
        }
    }
</style>
