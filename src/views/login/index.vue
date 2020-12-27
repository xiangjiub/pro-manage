<template>
  <div class="des">
    <div class="box">
      <h2>Login</h2>
      <form :v-model="formData" ref="formRef">
        <div class="inputBox">
          <input
            type="text"
            required=""
            v-model="formData.username"
            placeholder="Username"
          />
          <!-- <label>Username</label> -->
        </div>
        <div class="inputBox">
          <input
            type="password"
            required=""
            v-model="formData.password"
            placeholder="password"
          />
          <!-- <label>password</label> -->
        </div>
        <input type="button" value="Submit" @click="login" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, unref } from "vue";
import api from "@/api/index";
import { LoginForm } from "../../api/model/LoginForm";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { message } from "ant-design-vue";

export default defineComponent({
  setup() {
    const formRef = ref<any>(null);
    const router = useRouter();
    const store = useStore();
    const formData = reactive({
      username: "xjb",
      password: "123456",
    });

    const state = reactive({
      loading: false,
      formInline: {
        username: "",
        password: "",
      },
    });

    async function handleLogin() {
      const loginParams: LoginForm = {
        username: formData.username,
        password: formData.password,
      };

      console.log("开始请求");

      const { code, result, message: msg } = await store.dispatch("user/Login", loginParams)
        .finally(() => {
          state.loading = false;
          message.destroy();
        });

       if (code == 200) {
        // const toPath = decodeURIComponent((router.query?.redirect || '/') as string)
        message.success('登录成功！')
        router.push("/about");
      } else {
        message.info(msg || '登录失败')
      }
      // 1.向后台传输数据，并接收返回值
      // api.denglu(loginParams).then((data: any) => {
      //   console.log(data);
      //   // 从后台成功取到数据
      //   if (data.data.code === 200) {
      //     //成功取到数据
      //     localStorage.setItem("token", data.data.token); //存储token
      //     localStorage.setItem("user", data.data.user); //存储用户
      //     store.commit("userStatus", true);
      //     store.commit("LOGIN", {
      //       token: data.data.token,
      //       user: data.data.user,
      //     });
      //     //   this.$router.push("/homes");
      //     router.push("/home");
      //   } else if (data.data.code === 400) {
      //     console.log("密码不对");
      //   } else {
      //     if (data.data.status === 1000) {
      //       // 没有取到数据
      //       // this.$router.push("/");
      //       // this.loginLoadingState = false;
      //       // this.logins = "登陆";
      //     }
      //   }
      // });
    }

    return {
      formRef,
      formData,
      login: handleLogin,
    };
  },
});
</script>

<style lang="scss" scoped>
.des {
  width: 100%;
  height: 100%;
  font-family: sans-serif;
  background-image: linear-gradient(to right, #ffe2e2, #ffb1b1);
  // background-image: linear-gradient(to right, #bde0fe, #a2d2ff);
  //   background: url(../../assets/img.jpg);
  background-size: cover;
  .box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    padding: 60px;
    background: rgba(#fff, 0.5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(rgb(231, 194, 194), 0.4);
    border-radius: 10px;
    h2 {
      margin: 0;
      padding: 0;
      color: #fff;
      text-align: center;
      margin-bottom: 20px;
    }
    .inputBox {
      position: relative;
      input {
        width: 100%;
        padding: 12px 0;
        font-size: 16px;
        margin-bottom: 15px;
        color: #000;
        border: none;
        outline: none;
        background: transparent;
        border-bottom: 1px solid #fff;
      }
      label {
        position: absolute;
        left: 0px;
        top: 2px;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: 0.5s;
      }
      input:focus ~ label,
      input:valid ~ label {
        top: -16px;
        left: 0px;
        color: #03a9f4;
        font-size: 12px;
      }
      input:focus {
        border-bottom: 2px solid #03a9f4;
      }
    }
    input[type="button"] {
      background: transparent;
      border: none;
      outline: none;
      color: #fff;
      background: #03a9f4;
      cursor: pointer;
      width: 100%;
      border-radius: 5px;
      padding: 10px 20px;
      margin-top: 20px;
    }
  }
}
</style>
