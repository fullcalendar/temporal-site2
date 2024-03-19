<script lang="ts" setup>
/*
ORIGINAL:
https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPSidebar.vue

MODS:
- removed VPSidebar top/bottom padding
- .nav-main flexbox and liquid-height
- rework curtain
- add site-title, search, appearance switcher, social
*/

import { useScrollLock } from '@vueuse/core'
import { inBrowser } from 'vitepress'
import { ref, watch } from 'vue'
import { useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar'
import VPSidebarItem from 'vitepress/dist/client/theme-default/components/VPSidebarItem.vue'
import VPNavBarTitle from 'vitepress/dist/client/theme-default/components/VPNavBarTitle.vue'
import VPNavBarSearch from 'vitepress/dist/client/theme-default/components/VPNavBarSearch.vue'
import VPNavBarAppearance from 'vitepress/dist/client/theme-default/components/VPNavBarAppearance.vue'
import VPNavBarSocialLinks from 'vitepress/dist/client/theme-default/components/VPNavBarSocialLinks.vue'
import VPNavBarTranslations from 'vitepress/dist/client/theme-default/components/VPNavBarTranslations.vue'

const { sidebarGroups, hasSidebar } = useSidebar()

const props = defineProps<{
  open: boolean
}>()

// a11y: focus Nav element when menu has opened
const navEl = ref<HTMLElement | null>(null)
const isLocked = useScrollLock(inBrowser ? document.body : null)

watch(
  [props, navEl],
  () => {
    if (props.open) {
      isLocked.value = true
      navEl.value?.focus()
    } else isLocked.value = false
  },
  { immediate: true, flush: 'post' }
)
</script>

<template>
  <aside
    v-if="hasSidebar"
    class="VPSidebar"
    :class="{ open }"
    ref="navEl"
    @click.stop
  >
    <nav class="nav" id="VPSidebarNav" aria-labelledby="sidebar-aria-label" tabindex="-1">
      <span class="visually-hidden" id="sidebar-aria-label">
        Sidebar Navigation
      </span>

      <div class="nav-head">
        <VPNavBarTitle />
        <VPNavBarSearch />
        <div class="curtain"></div>
      </div>

      <div class="nav-main">
        <slot name="sidebar-nav-before" />

        <div v-for="item in sidebarGroups" :key="item.text" class="group">
          <VPSidebarItem :item="item" :depth="0" />
        </div>

        <slot name="sidebar-nav-after" />
      </div>

      <div class="nav-foot">
        <VPNavBarAppearance />
        <VPNavBarSocialLinks />
        <VPNavBarTranslations />
      </div>
    </nav>
  </aside>
</template>

<style scoped>
.VPSidebar {
  position: fixed;
  top: var(--vp-layout-top-height, 0px);
  bottom: 0;
  left: 0;
  z-index: var(--vp-z-index-sidebar);
  padding: 0 32px;
  width: calc(100vw - 64px);
  max-width: 320px;
  background-color: var(--vp-sidebar-bg-color);
  opacity: 0;
  box-shadow: var(--vp-c-shadow-3);
  overflow-x: hidden;
  overflow-y: auto;
  transform: translateX(-100%);
  transition: opacity 0.5s, transform 0.25s ease;
  overscroll-behavior: contain;
  display: flex;
  flex-direction: column;
}

.VPSidebar.open {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
  transition: opacity 0.25s,
    transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.dark .VPSidebar {
  box-shadow: var(--vp-shadow-1);
}

@media (min-width: 960px) {
  .VPSidebar {
    width: var(--vp-sidebar-width);
    max-width: 100%;
    background-color: var(--vp-sidebar-bg-color);
    opacity: 1;
    visibility: visible;
    box-shadow: none;
    transform: translateX(0);
  }
}

@media (min-width: 1440px) {
  .VPSidebar {
    padding-left: max(32px, calc((100% - (var(--vp-layout-max-width) - 64px)) / 2));
    width: calc((100% - (var(--vp-layout-max-width) - 64px)) / 2 + var(--vp-sidebar-width) - 32px);
  }
}

.nav {
  outline: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.nav-head {
  position: sticky;
  top: 0;
  z-index: 1;
  background: var(--vp-sidebar-bg-color);
  margin-bottom: 6px;
}

.nav-head .curtain {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 24px;
  background: linear-gradient(var(--vp-sidebar-bg-color), transparent);
  pointer-events: none;
}

.nav-main {
  flex-grow: 1;
}

.nav-foot {
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
}

/* HACK */
.VPNavBarSearch {
  padding: 0;
  margin: 4px 0 4px -4px;
  flex-direction: column;
  align-items: stretch;
}

.group + .group {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 10px;
}

.nav-head,
.nav-foot,
.group {
  padding-top: 10px;
}

@media (min-width: 960px) {
  .nav-head,
  .nav-foot,
  .group {
    width: calc(var(--vp-sidebar-width) - 64px);
  }
}
</style>
