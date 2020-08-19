<template>
  <div class="login">
      <!-- 组件 -->
      <el-card class="login-card">
          <div class="title">
              <img src="../../assets/img/logo_index.png" alt="">
          </div>
          <!-- 表单 -->
          <el-form ref='formObj' style="margin-top:20px" :model="loginForm" :rules='loginRules'>
            <el-form-item prop="mobile">
                <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <!-- 验证码 -->
            <el-form-item prop="code">
              <el-input v-model="loginForm.code" style="width:200px"  placeholder="请输入内容"></el-input>
              <el-button style="float:right">发送验证码</el-button>
            </el-form-item>
          <!-- 选框 -->
           <el-form-item prop="check">
                <el-checkbox v-model="loginForm.check">我已阅读并同意你列举的霸王条款</el-checkbox>
           </el-form-item>
          <!--登录-->
           <el-form-item>
                <el-button type="primary" style="width:300px; margin-left:30px" @click='logIn'>登录</el-button>
           </el-form-item>
          </el-form>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 需要校验的表单数据
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: false // 是否勾选
      },
      // 校验规则
      loginRules: {
      // key 校验的字段名：
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '请输入6位正确验证码' }
        ],
        check: [
          {
            validator: function (rule, value, callback) {
              // rule 当前的规则，value=>checked的值，callback=>回调函数
              if (value) {
                // 选中 通过
                callback() // 直接执行表示直接通过
              } else {
                callback(new Error('您必须同意'))
              }
            }
          }
        ]
      }
    }
  },
  methods: {
    logIn () {
      this.$refs.formObj.validate((isOk) => {
        if (isOk) {
          // 为true 直接调用接口
          this.$axios({
            url: '/authorizations',
            data: this.loginForm,
            method: 'post'
          }).then(res => {
            console.log(res.data)
          })
        }
      })
    }
  }
}
</script>
<style lang='less' scoped>
    .login{
      background-image: url('../../assets/img/login_bg.jpg');
      background-size: cover;
      height:100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      .login-card{
        width:400px;
        height:320px;
        .title{
               text-align: center;
              img{
                  width:200px;
            }
        }
      }
    }
</style>
