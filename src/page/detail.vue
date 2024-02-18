<template>
    <div>detail</div>
</template>
  
<script>
export default {
    props: {
    },
    data() {
        return {
            detailData: {}
        }
    },
    mounted() {
        this.detailData = this.$route.params;
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
    width: 20%;
    background-color: #2b2b2b;
    height: 100vh;
}
.right {
    width: 80%;
    background-color: blue;
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
  