<template>
  <div class="des">
    <div class="box">
      <h2>Login</h2>
      <form>
        <div class="inputBox">
          <input type="text" name="" required="" value="" />
          <label>Username</label>
        </div>
        <div class="inputBox">
          <input type="password" name="" required="" value="" />
          <label>password</label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
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
    input[type="submit"] {
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
