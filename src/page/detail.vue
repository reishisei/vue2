<template>
    <div class="page">
        <div class="detail">
            <div class="detail-top">
                <div class="detail-logo">
                    <div class="detail-img">
                        <img :src="detailData.imgUrl">
                    </div>
                </div>
                <div class="detail-text">
                    <div class="detail-name">{{ detailData.name }}</div>
                    <div class="detail-intro">{{ detailData.introduction }}</div>
                    <div class="detail-link"><a :href="detailData.link">链接直达</a></div>
                    <div class="detail-copy">
                        <div class="copy-text" @click="copyTool">点击复制账户</div>
                        <div class="copy-text">点击复制密码</div>
                    </div>
                </div>
            </div>
            <div class="detail-bottom"></div>
        </div>
    </div>
</template>
  
<script>
import Clipboard from "clipboard"
export default {
    props: {
    },
    data() {
        return {
            detailData: {
                imgUrl: "https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG55TuUok74aGR5j448WXX6SqfxRNNWdkvZC-TeajfaosZ2OaChzPuUz-wfl0hs1NHfcnTgz-_sx5QhvSZ3Y0Z3S8_4zRd0M3nxRQ80BldPUd_7RxJ47D5zod15sB6aWZJZLbxvc8YMmtrVfzcUrB2wWoVHHfZSaeWgyhcDCRO8kHrtvQGdN0sJvM-MC0TacXuA2Ycm_Zx_TOBZLXvYlpOYV-rdmS-JDkd7d-jpzP83NdPF8bRWDZ1UMWSxxdnQHOkf6p5sY0IKi8eEUyNeG6cgTMzGvqAqbEugzE43uuIEUk5LYB1rrzi_b5xzBvSBIqZRTQQbzQ0p4caWkyaSELo94=/sp-e1bb3a770694fb971849dde8732115a3-eef4d125d3127caef9d4393a6885598b.png",
                name: "グローバルベイス株式会社",
                introduction: "グローバルベイス株式会社GlobalBase",
                mack: "外国籍可,租赁公司",
                link: "https://agency.globalbase.jp/login.php"
            }
        }
    },
    mounted() {
        this.detailData = this.$route.params;
        console.log('detailData', this.$route.params)
    },
    methods: {
        copyTool() {
            this.$copyText('要复制的内容').then(function (e) {
                console.log('【复制成功】', e)
            }, function (e) {
                console.log('【复制失败】', e)
            })
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
    height: 100vh;
    background-color: #f9f9f9;
    padding: 40px;
}

.detail {
    padding: 40px;
    background-color: #fff;
    border-radius: 5px;
}

.detail-top {
    width: 100%;
    display: flex;
    justify-content: flex-start;
}

.detail-logo {
    width: 25%;
    position: relative;
    padding-top: 25%;
    background-color: #f1f5f8;
    box-shadow: 0 30px 20px -20px rgba(0, 0, 0, .15);
}

.detail-logo::before {
    content: "";
    display: block;
    padding-top: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.detail-img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: block;
    animation: rotate 5s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
}

.detail-logo img {
    width: 50%;
    border-radius: 50%;
}

.detail-text {
    margin-left: 20px;
}

.detail-name {
    font-size: 24px;
    font-weight: bold;
    line-height: 50px;
}

.detail-intro {
    color: #878888;
    font-size: 15px;
    line-height: 1.8;
}

.detail-link {
    width: 100px;
    height: 35px;
    background-color: #eee;
    border-radius: 5px;
    text-align: center;
    line-height: 35px;
    margin-top: 15px;
}

.detail-link:hover {
    background-color: #000;
}

.detail-link a {
    color: #282828;
    text-decoration: none;
}

.detail-link:hover a {
    color: #fff;
}

.detail-copy {
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
}

.copy-text {
    width: 130px;
    height: 30px;
    border-radius: 5px;
    margin-right: 10px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    background-color: #eeeeee;
}

.copy-text:hover {
    background-color: #000;
}</style>
  