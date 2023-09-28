<template>
  <a-layout>
    <SideBar ref="sidebar"/>
    <a-layout>
      <a-layout-header style="background: #fff;height: 32px;line-height: 32px;padding: 0 10px">
        <!--        <menu-unfold-outlined-->
        <!--            v-if="collapsed"-->
        <!--            class="trigger"-->
        <!--            @click="showSider"-->
        <!--        />-->
        <menu-fold-outlined class="trigger" @click="showSide"/>
      </a-layout-header>
      <a-layout-content>
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import {
  // MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue';
import SideBar from "@/components/SideBar.vue";
import {ref} from "vue";

const sidebar = ref<any>(null)
const showSide = () => {
  sidebar.value.collapsed = !sidebar.value.collapsed
}


</script>

<style lang="scss" scoped>
section {
  height: 100%;
}


#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 32px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}


</style>
