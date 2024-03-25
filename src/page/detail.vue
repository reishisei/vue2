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
            <div class="detail-bottom">
                <recommend></recommend>
            </div>
        </div>
    </div>
</template>
  
<script>
import Clipboard from "clipboard"
import recommend from '@/components/recommend.vue'
export default {
    props: {
    },
    data() {
        return {
            detailData: {
                imgUrl: "",
                name: "",
                introduction: "",
                mack: "",
                link: ""
            }
        }
    },
    components: {
        recommend
    },
    mounted() {
        const detailData = JSON.parse(localStorage.getItem('detailData'));
        
        if(detailData) {
            this.detailData = detailData;
        }
    },
    methods: {
        copyTool() {
            this.$copyText('123456').then(function (e) {
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
}

.detail-bottom {
    margin-top: 50px;
}

</style>
  