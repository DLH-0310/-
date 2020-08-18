<template>
  <div class="login">
      <!-- 组件 -->
      <el-card class="login-card">
          <div class="title">
              <img src="../../assets/img/logo_index.png" alt="">
          </div>
          <!-- 表单 -->
          <el-form style="margin-top:20px">
            <el-form-item>
                <el-input placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input style="width:200px" placeholder="请输入验证码"></el-input>
              <el-button style="float:right">发送验证码</el-button>
            </el-form-item>
          <!-- 选框 -->
           <el-form-item>
                <el-checkbox>我已阅读并同意你列举的霸王条款</el-checkbox>
           </el-form-item>
          <!--登录-->
           <el-form-item>
                <el-button type="primary" style="width:300px; margin-left:30px">登录</el-button>
           </el-form-item>
          </el-form>
      </el-card>
  </div>
</template>

<script>
export default {

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
