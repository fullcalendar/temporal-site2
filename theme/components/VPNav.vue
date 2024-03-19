<script setup lang="ts">
/*
ORIGINAL:
https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPNav.vue

DISABLED!
*/

import { watchEffect } from 'vue'
import { inBrowser } from 'vitepress'

watchEffect(() => {
  if (inBrowser) {
    document.documentElement.classList.toggle('hide-nav', true)
  }
})
</script>

<template>
  <!--no-nav-->
</template>
