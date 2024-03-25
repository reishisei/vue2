<template>
    <div class="page">
        <div class="page-con">
            <div class="login-title">登陆</div>
            <div class="login">
                <el-form ref="ruleForm" :model="form" label-width="80px" label-position="top">
                    <el-form-item label="用户名">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.pass"></el-input>
                    </el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
                </el-form>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'HelloWorld',
    props: {
    },
    data() {
        return {
            form: {
                name: '',
                pass: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入账户', trigger: 'blur' }
                ],
                pass: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    mounted() {
    },
    methods: {
        submitForm(formName) {
            let that = this;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    const root = require('../utils/root.json');
                    root.forEach(item => {
                        if(that.form.name === item.name || that.form.pass === item.pass) {
                            localStorage.setItem('username', that.form.name);
                            this.$router.push(
                                { path: '/'}
                            )
                        }
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>
<style scoped>
.page {
    height: 100vh;
    background-color: #f9f9f9;
    padding: 40px;
}

.page-con {
    padding: 40px;
    background-color: #fff;
    border-radius: 5px;
}

.login-title {
    font-size: 30px;
    font-weight: bold;
    color: #000;
    line-height: 80px;
}
</style>
  