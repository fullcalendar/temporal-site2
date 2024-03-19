<script lang="ts" setup>
/*
ORIGINAL:
https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPNavBarTranslations.vue

MODS:
- compensate for thick padding with negative margins
*/

import VPFlyout from 'vitepress/dist/client/theme-default/components/VPFlyout.vue'
import VPMenuLink from 'vitepress/dist/client/theme-default/components/VPMenuLink.vue'
import { useData } from 'vitepress/dist/client/theme-default/composables/data'
import { useLangs } from 'vitepress/dist/client/theme-default/composables/langs'

const { theme } = useData()
const { localeLinks, currentLang } = useLangs({ correspondingLink: true })
</script>

<template>
  <VPFlyout
    v-if="localeLinks.length && currentLang.label"
    class="VPNavBarTranslations"
    icon="vpi-languages"
    :label="theme.langMenuLabel || 'Change language'"
    up
  >
    <div class="items">
      <p class="title">{{ currentLang.label }}</p>

      <template v-for="locale in localeLinks" :key="locale.link">
        <VPMenuLink :item="locale" />
      </template>
    </div>
  </VPFlyout>
</template>

<style scoped>
.VPNavBarTranslations {
  display: none;
}

@media (min-width: 1280px) {
  .VPNavBarTranslations {
    display: flex;
    align-items: center;
    margin-right: -12px;
    margin-left: -12px;
  }
}

.title {
  padding: 0 24px 0 12px;
  line-height: 32px;
  font-size: 14px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
</style>
