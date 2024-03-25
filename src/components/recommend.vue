<template>
    <div class="list">
        <div class="list-title">
            <div class="title-icon">
                <i class="el-icon-price-tag"></i>
            </div>
            <div class="title-text">常用推荐</div>
        </div>
        <div class="list-con">
            <div v-for="(item, index) in often" :key="index" class="list-item" @click="toLink(item)">
                <div class="item-img">
                    <img :src="item.imgUrl">
                </div>
                <div class="item-text">
                    <div class="item-name" :title="item.name">{{ item.name }}</div>
                    <div class="item-into" :title="item.introduction">{{ item.introduction }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import recommend from '@/components/recommend.vue'
export default {
    props: {
    },
    data() {
        return {
            often: [],
        }
    },
    mounted() {
        this.oftenData();
    },
    methods: {
        oftenData() {
            const oftenData = JSON.parse(localStorage.getItem('oftenData'));
            if(oftenData) {
                this.often = oftenData;
            }
        },
        toLink(data) {
            localStorage.setItem("detailData", JSON.stringify(data))
            let toDetail = this.$router.resolve({
                name: 'detail'
            });
            window.open(toDetail.href, '_blank');
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-title {
    display: flex;
    justify-content: flex-start;
}
.title-icon {
    font-size: 24px;
    transform: rotate(90deg);
    line-height: 70px;
}
.title-text {
    font-size: 20px;
    line-height: 70px;
    margin-left: 10px;
}
.list-con {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.list-item {
    display: flex;
    justify-content: flex-start;
    width: 200px;
    height: 70px;
    margin: 10px 10px;
    border: 1px solid #e4ecf3;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0;
    transition: all 0.2s ease-out;
    transform: translate(0, 0);
    box-shadow: 0 0;
}
.list-item:hover {
    transform: translate(0, -5px);
    box-shadow: 0 30px 20px -20px rgba(154, 154, 154, 0.15);
}
.item-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    line-height: 70px;
    margin: 10px;
    border-radius: 50%;
    overflow: hidden;
}
.item-img img {
    display: block;
    width: 100%;
    line-height: 50px;
}
.item-name {
    width: 120px;
    margin-top: 10px;
    font-size: 14px;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.item-into {
    width: 120px;
    margin-top: 5px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
  