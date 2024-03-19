<script lang="ts" setup>
/*
ORIGINAL:
https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPFlyout.vue

MODS:
- up prop (for flyout position and icon)
*/

import { ref } from 'vue'
import { useFlyout } from 'vitepress/dist/client/theme-default/composables/flyout'
import VPMenu from 'vitepress/dist/client/theme-default/components/VPMenu.vue'

defineProps<{
  icon?: string
  button?: string
  label?: string
  items?: any[]
  up?: boolean
}>()

const open = ref(false)
const el = ref<HTMLElement>()

useFlyout({ el, onBlur })

function onBlur() {
  open.value = false
}
</script>

<template>
  <div
    class="VPFlyout"
    ref="el"
    @mouseenter="open = true"
    @mouseleave="open = false"
  >
    <button
      type="button"
      class="button"
      aria-haspopup="true"
      :aria-expanded="open"
      :aria-label="label"
      @click="open = !open"
    >
      <span v-if="button || icon" class="text">
        <span v-if="icon" :class="[icon, 'option-icon']" />
        <span v-if="button" v-html="button"></span>
        <span class="text-icon" :class="{
          'vpi-chevron-up': up,
          'vpi-chevron-down': !up,
        }" />
      </span>

      <span v-else class="vpi-more-horizontal icon" />
    </button>

    <div class="menu" :class="{
      'menu-up': up,
      'menu-down': !up,
    }">
      <VPMenu :items="items">
        <slot />
      </VPMenu>
    </div>
  </div>
</template>

<style scoped>
.VPFlyout {
  position: relative;
}

.VPFlyout:hover {
  color: var(--vp-c-brand-1);
  transition: color 0.25s;
}

.VPFlyout:hover .text {
  color: var(--vp-c-text-2);
}

.VPFlyout:hover .icon {
  fill: var(--vp-c-text-2);
}

.VPFlyout.active .text {
  color: var(--vp-c-brand-1);
}

.VPFlyout.active:hover .text {
  color: var(--vp-c-brand-2);
}

.VPFlyout:hover .menu,
.button[aria-expanded="true"] + .menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.button[aria-expanded="false"] + .menu {
  opacity: 0;
  visibility: hidden;
  transform: translateY(0);
}

.button {
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: var(--vp-nav-height);
  color: var(--vp-c-text-1);
  transition: color 0.5s;
}

.text {
  display: flex;
  align-items: center;
  line-height: var(--vp-nav-height);
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.option-icon {
  margin-right: 0px;
  font-size: 16px;
}

.text-icon {
  margin-left: 4px;
  font-size: 14px;
}

.icon {
  font-size: 20px;
  transition: fill 0.25s;
}

.menu {
  position: absolute;
  right: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s, visibility 0.25s, transform 0.25s;
}

.menu-down {
  top: calc(var(--vp-nav-height) / 2 + 20px);
}

.menu-up {
  bottom: 100%;
}

</style>
