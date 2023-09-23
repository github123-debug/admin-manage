<template>
  <div class="login">
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
        </a-form-item>
      </a-form>
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import {reactive, computed, onMounted} from 'vue';
import {UserOutlined, LockOutlined} from '@ant-design/icons-vue';

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


onMounted(() => {
  loadBackground()
})
const onFinish = (values: any) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
const loadBackground = () => {
  let canvas: HTMLCanvasElement = document.querySelector('canvas') as HTMLCanvasElement
  let ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  canvas.width = window.innerWidth // 整个屏幕宽度
  canvas.height = window.innerHeight
  canvas.style.position = 'fixed'
  canvas.style.zIndex = '-1'
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth // 整个屏幕宽度
    canvas.height = window.innerHeight
  })
  let str: string[] = '01010100101111abcdefg'.split('')
  let Arr = Array(Math.ceil(canvas.width / 10)).fill(0) // 向上取整Arr有多少个，并填充0

  const rain = () => {
    ctx.fillStyle = 'rgba(0,0,0,0.05)' // 绘制整个canvas背景为黑色
    ctx.fillRect(0, 0, canvas.width, canvas.height) // 以坐标轴（0，0）左上角 绘制矩形 长宽为canvas长宽
    ctx.fillStyle = '#0f0' // canvas内文字颜色
    Arr.forEach((item, index) => {
      ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, item + 10) // 在指定的(x,y)位置填充指定的文本.
      Arr[index] = item > canvas.height || item > 10000 * Math.random() ? 0 : item + 10 // item从0开始不断+10，直到大于屏幕高度或随机数返回0
    })
  }
  setInterval(rain, 40)
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .box {
    padding: 20px;
    border-radius: 5px;
    background-image: linear-gradient(60deg, #29551a 0%, #37526f 100%);
    background-blend-mode: multiply;
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
