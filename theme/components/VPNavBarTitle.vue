<script setup lang="ts">
/*
ORIGINAL:
https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPNavBarTitle.vue

MODS:
- remove bottom border
- force height of .title
*/

import { computed } from 'vue'
import { useData } from 'vitepress/dist/client/theme-default/composables/data'
import { useLangs } from 'vitepress/dist/client/theme-default/composables/langs'
import { useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar'
import { normalizeLink } from 'vitepress/dist/client/theme-default/support/utils'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'

const { site, theme } = useData()
const { hasSidebar } = useSidebar()
const { currentLang } = useLangs()

const link = computed(() =>
  typeof theme.value.logoLink === 'string'
    ? theme.value.logoLink
    : theme.value.logoLink?.link
)

const rel = computed(() =>
  typeof theme.value.logoLink === 'string'
    ? undefined
    : theme.value.logoLink?.rel
)

const target = computed(() =>
  typeof theme.value.logoLink === 'string'
    ? undefined
    : theme.value.logoLink?.target
)
</script>

<template>
  <div class="VPNavBarTitle" :class="{ 'has-sidebar': hasSidebar }">
    <a
      class="title"
      :href="link ?? normalizeLink(currentLang.link)"
      :rel="rel"
      :target="target"
    >
      <slot name="nav-bar-title-before" />
      <VPImage v-if="theme.logo" class="logo" :image="theme.logo" />
      <template v-if="theme.siteTitle"><span>{{ theme.siteTitle }}</span></template>
      <template v-else-if="theme.siteTitle === undefined"><span>{{ site.title }}</span></template>
      <slot name="nav-bar-title-after" />
    </a>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  transition: opacity 0.25s;
}

@media (min-width: 960px) {
  .title {
    flex-shrink: 0;
  }
}

:deep(.logo) {
  margin-right: 8px;
  height: var(--vp-nav-logo-height);
}
</style>