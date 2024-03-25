<template>
    <div class="page-right">
        <recommend id="recommend"></recommend>
        <div v-for="(item, index) in list" :key="index" class="list">
            <div class="list-title">
                <div class="title-icon">
                    <i class="el-icon-price-tag"></i>
                </div>
                <div class="title-text">{{ item.name }}</div>
            </div>
            <div class="list-con">
                <div v-for="(j, j_index) in item.data" :key="j_index" class="list-item" @click="toLink(j)">
                    <div class="item-img">
                        <img :src="j.imgUrl">
                    </div>
                    <div class="item-text">
                        <div class="item-name" :title="j.name">{{ j.name }}</div>
                        <div class="item-into" :title="j.introduction">{{ j.introduction }}</div>
                    </div>
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
            list: {
                a: {
                    name: '外国籍可',
                    data: []
                },
                b: {
                    name: '未成年可',
                    data: []
                },
                c: {
                    name: '海外审查可',
                    data: []
                },
                d: {
                    name: '留学生可',
                    data: []
                },
                e: {
                    name: '租赁公司',
                    data: []
                },
                f: {
                    name: '其他',
                    data: []
                },
            }
        }
    },
    components: {
        recommend
    },
    mounted() {
        const data = require('../utils/data.json');
        this.dataChenge(data);
    },
    methods: {
        dataChenge(data) {
            let that = this;
            data.forEach(item => {
                item.mack.split(',').forEach(i => {
                    if(i === '外国籍可') that.list.a.data.push(item);
                    if(i === '未成年可') that.list.b.data.push(item);
                    if(i === '海外审查可') that.list.c.data.push(item);
                    if(i === '留学生可') that.list.d.data.push(item);
                    if(i === '租赁公司') that.list.e.data.push(item);
                    if(i === '其他') that.list.f.data.push(item);
                    if(i === 'often') that.often.push(item);

                });
            });
            console.log('that.often', that.often)
            localStorage.setItem("oftenData", JSON.stringify(that.often))
        },
        toLink(data) {
            console.log('data', data)
            // localStorage.removeItem('detailData');
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
.page-right {
    padding: 40px;
}
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
  