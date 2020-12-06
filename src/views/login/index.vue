<template>
    <div id="login-box">
        <h1>Login</h1>
        <div class="form">
            <div class="item">
                <i></i>
                <input type="text" placeholder="username">
            </div>
            <div class="item">
                <i></i>
                <input type="text" placeholder="password">
            </div>
        </div>
        <button>Login</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    
})
</script>

<style lang="scss" scoped>
#login-box{
    width: 300px;
    height: 300px;
    border: 1px solid #f40;
    margin: 0 auto;
    margin-top: 15%;
    text-align: center;
    background: #00000050;
    padding: 20px 50px;
    .form{
        margin-top: 50px;
    }
    .item{
        margin-top: 15px;
        input{
            width: 200px;
            font-size: 16px;
            border: 0;
            border-bottom: 2px solid #fff;
            padding: 5px 10px;
            background: #ffffff00;
            color: #fff;
        }
        input:focus{
            outline: none;
        }
    }
    button{
        margin-top: 30px;
        width: 200px;
        height: 35px;
    }
}
</style>