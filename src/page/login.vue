<template>
  <div class="login">
    <div class="content" id="content">
      <div class="box">
        <a-form
            :model="formState"
            name="normal_login"
            class="login-form"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
        >
          <a-form-item
              label="Username"
              name="username"
              :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input v-model:value="formState.username">
              <template #prefix>
                <UserOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
              label="Password"
              name="password"
              :rules="[{ required: true, message: 'Please input your password!' }]"
          >
            <a-input-password v-model:value="formState.password">
              <template #prefix>
                <LockOutlined class="site-form-item-icon"/>
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item>
            <a-form-item name="remember" no-style>
              <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
            </a-form-item>
            <a class="login-form-forgot" href="">Forgot password</a>
          </a-form-item>
          <a-form-item>
            <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
              Log in
            </a-button>
            Or
            <a href="">register now!</a>
            <SwapOutlined @click="changeBackground" :style="{fontSize:'18px',cursor: 'pointer'}"/>
          </a-form-item>
        </a-form>
      </div>
    </div>
    <!--<canvas id="canvas"></canvas>-->
  </div>
</template>

<script setup lang="ts">
import {reactive, computed, onMounted, onBeforeUnmount} from 'vue';
import {UserOutlined, LockOutlined} from '@ant-design/icons-vue';
import {
  SwapOutlined
} from '@ant-design/icons-vue';
// 代码雨背景，需要打开页面中的canvas注释
// import {rainBackground} from '@/utils/rainBackground.ts';
// 动态粒子背景，不能实现鼠标跟随动画
// import {particleBackground} from '@/utils/particleBackground'
// 动态粒子背景，第三方库引入 https://github.com/hustcc/canvas-nest.js
import CanvasNest from 'canvas-nest.js';

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});
// 粒子动画
let cn: any
onMounted(() => {
  const config = {
    color: '#fff',
    count: 100,
    zIndex: 1
  };
  const element = document.getElementById('content')
// 在 element 地方使用 config 渲染效果
  cn = new CanvasNest(element, config);
})
onBeforeUnmount(() => {
  cn.destroy();
})

// 提交表单
const onFinish = (values: any) => {
  console.log('Success:', values);
};
// 表单校验失败
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
// 切换背景
const changeBackground = () => {
  console.log('切换背景')
}

</script>

<style lang="scss" scoped>

.login {
  height: 100%;
  width: 100%;
  background: url('@/assets/images/loginBg3.jpg') no-repeat fixed ;
  background-size: cover;


  .content {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .box {
      padding: 20px;
      z-index: 2;
      background-blend-mode: multiply;
      background: rgba(255, 255, 255, 0.2);
      -webkit-backdrop-filter: blur(8px);
      backdrop-filter: blur(8px);
      border-radius: 5px;
      box-shadow: inset 0 0 6px rgba(255, 255, 255, -0.2);
    }
  }


}

#components-form-demo-normal-login .login-form {
  max-width: 300px;
}

#components-form-demo-normal-login .login-form-forgot {
  float: right;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}

</style>
