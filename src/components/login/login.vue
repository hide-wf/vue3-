<template>
  <div cc style="height: 100vh">
    <el-card m-a>
      <div class="w-160 h100" flex>
        <!-- 1 -->
        <div flex-1 relative>
          <h2 text-center class="title">后台管理系统</h2>
          <!--  -->
          <div w-25 mt-4 flex justify-between relative>
            <span @click="phone" class="phone active-color">手机号</span>
            <el-divider direction="vertical" border-style="dashed" />
            <span @click="eMail" class="eMail">邮箱</span>
            <div class="active-unline"></div>
          </div>
          <!--  -->
          <div mt-6 pr-5>
            <el-input
              v-model="phoneValue"
              autofocus
              clearable
              placeholder="请输入手机号码"
              v-on:keyup.enter="goLogin"
              :prefix-icon="PhoneFilled"
              v-if="isPhone"
            ></el-input>
            <!-- phone -->

            <el-input
              v-model="eMailValue"
              autofocus
              clearable
              placeholder="请输入邮箱"
              :prefix-icon="Message"
              v-else
            ></el-input>

            <!-- eMail -->
          </div>
          <!--  -->
          <el-button
            mt-5
            w-75
            type="primary"
            round
            plain
            :disabled="!determine"
            @click="goLogin"
            >下一步
          </el-button>
          <!--  -->
          <div mt-1>
            <el-Checkbox id="clause" v-model="determine"></el-Checkbox>
            <label for="clause" text-1 relative right-4>
              <span>我已阅读并同意</span>
              <span text-blue-4 ml-1>服务条款</span>
              和<span text-blue-4 ml-1> 隐私政策</span>
            </label>
          </div>
          <!--  -->
          <div absolute bottom-0 style="width: 100%" pr-5>
            <el-divider content-position="center">其他登录方式</el-divider>
            <el-button w-75 round :icon="Refresh">账号密码登录</el-button>
          </div>
        </div>

        <!-- 2 -->
        <div flex-1 cc center>
          <img w-70 h-70 src="../../assets/login/Medical.png" alt="" />
        </div>
        <!--  -->
      </div></el-card
    >
  </div>
</template>

<script setup lang="ts">
import { Message, PhoneFilled, Refresh } from "@element-plus/icons-vue";
import { ref } from "vue";

let isPhone = ref<boolean>(true);
let eMailValue = ref<string>("");
let phoneValue = ref<string>("");
let determine = ref<boolean>(false);

const goLogin = () => {
  console.log("----");
};

function phone() {
  isPhone.value = true;
  document.querySelector(".phone")?.setAttribute("class", "phone  active-color");
  document.querySelector(".eMail")?.setAttribute("class", "eMail");
  document.querySelector(".active-unline")?.setAttribute("class", "active-unline");
}

function eMail() {
  isPhone.value = false;
  document.querySelector(".phone")?.setAttribute("class", "phone");
  document.querySelector(".eMail")?.setAttribute("class", "eMail active-color");
  document
    .querySelector(".active-unline")
    ?.setAttribute("class", "active-unline active-postion");
}
</script>

<style scoped>
.title {
  font-weight: 550;
}

.active-unline {
  position: absolute;
  bottom: -0.6rem;
  width: 3rem;
  height: 2px;
  background-color: rgb(76, 150, 254);
  transition: all 0.4s;
}
.active-color {
  font-weight: 550;
  color: rgb(76, 150, 254);
}
.active-postion {
  transform: translateX(3.8rem);
}
</style>
