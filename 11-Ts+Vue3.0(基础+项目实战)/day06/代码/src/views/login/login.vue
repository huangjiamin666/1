<!--  -->
<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm">
    <el-form-item prop="username">
      <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item prop="pwd">
      <el-input v-model="ruleForm.pwd" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="loginFn()">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref, toRef } from 'vue'
import { adminLoginApi, getAdminInfoApi } from '../../request/api'
import Cookie from 'js-cookie';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const state = reactive({
  ruleForm: {
    username: 'admin',
    pwd: '123456'
  }
});
let { ruleForm } = toRefs(state);
// 获取el-form组件对象
let ruleFormRef = ref();
// 获取项目路由对象
let router = useRouter();
// 获取项目vuex对象
let store = useStore();

const validatePwd = (rule: unknown, value: string | undefined, cb: (msg?: string) => void) => {
  if (!value) {
    cb('密码不能为空');
  } else {
    cb();
  }
}

// 校验规则
const rules = reactive({
  username: [
    { required: true, message: '用户名不能为空！', trigger: 'blur' },
  ],
  pwd: [{ validator: validatePwd, trigger: 'blur' }],
})
// 点击登录按钮触发
const loginFn = () => {
  ruleFormRef.value.validate().then(() => {
    console.log('校验通过');
    adminLoginApi({
      password: ruleForm.value.pwd,
      username: ruleForm.value.username
    }).then(res => {
      if (res.code === 200) {
        // 先存储token
        // js-cookie
        Cookie.set('token', res.data.tokenHead + res.data.token, { expires: 7 });
        // 获取用户信息
        store.dispatch('getAdminInfo').then(res => {
          router.push('/homepage');
        })
        /* getAdminInfoApi().then(res => {
          // res.code
          if (res.code === 200) {
            // 存储到vuex
            // res.data.menus
            store.commit('updateMenus', res.data.menus)
            // 跳转homepage页面
            router.push('/homepage');
          }
        }) */
      }
    })
  }).catch(() => {
    console.log('校验不同通过')
  })
}

</script>
<style lang='less' scoped>
</style>