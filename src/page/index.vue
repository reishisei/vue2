<template>
    <div class="mian">
        <div class="left">
            <div class="logo">
                <img src="./../assets/images/logo.png">
            </div>
            <div class="list">
                <div class="list-user">
                    <div v-for="item in listData" :key="item.text" class="list-con">
                        <!-- <i class="el-icon-edit"></i> -->
                        <div class="list-text">{{ item.text }}</div>
                        <div v-if="item.child" class="arrow-right">
                            <i :class="item.childIcon"></i>
                        </div>
                    </div>
                </div>
                <div class="list-user">
                    <div class="list-con">
                        <div class="list-text">账户</div>
                        <div class="arrow-right">
                            <i class="el-icon-star-on"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
    },
    data() {
        return {
            listData: [
                {
                    icon: 'el-icon-star-on',
                    text: '常用推荐',
                    path: '',
                    child: false,
                },
                {
                    icon: 'el-icon-star-on',
                    text: '社内工具',
                    path: '',
                    child: false,
                },
                {
                    icon: 'el-icon-star-on',
                    text: '常用工具',
                    path: '',
                    child: false,
                },
                {
                    icon: 'el-icon-star-on',
                    text: '租赁公司',
                    path: '',
                    child: true,
                    childIcon: 'el-icon-arrow-right',
                },
                {
                    icon: 'el-icon-star-on',
                    text: '买卖公司',
                    path: '',
                    child: true,
                    childIcon: 'el-icon-arrow-right',
                },
                {
                    icon: 'el-icon-star-on',
                    text: '业者避雷',
                    path: '',
                    child: false,
                },
            ]
        }
    },
    mounted() {
        const username = localStorage.getItem('username');
        if(!username) {
            this.$router.push(
                { path: '/login'}
            )
        } else {
            this.$router.push(
                { path: '/list'}
            )
        }
        console.log('username', username)
    },
    methods: {
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mian {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
}
.left {
    position: fixed;
    top: 0;
    left: 0;
    width: 20%;
    background-color: #2b2b2b;
    height: 100vh;
}
.right {
    margin-left: 20%;
    width: 80%;
}
.logo {
    width: 80%;
    padding: 20px 30px;
}

.logo img {
    display: block;
    width: 100%;
}
.list {
    margin: 0 30px;
}
.list-user {
    color: #979898;
    margin: 20px 0;
}
.list-con {
    display: flex;
    justify-content: space-between;
    padding: 13px 5px;
}
.arrow-right {
    width: 20px;
}
</style>
  