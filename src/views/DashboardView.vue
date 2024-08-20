<template>
  <div>
    <p class="text-center m-0">
      Dashboard
    </p>
    <fwb-sidebar>
      <fwb-sidebar-item>
        Dashboard
      </fwb-sidebar-item>
      <fwb-sidebar-item :link="{name: 'DashboardChild'}">
        Dashboard Child
      </fwb-sidebar-item>
      <fwb-sidebar-item link="/playground">
        Kanban
      </fwb-sidebar-item>
    </fwb-sidebar>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import {
  FwbSidebar,
  // FwbSidebarDropdownItem,
  FwbSidebarItem,
} from 'flowbite-vue'
// } from '../../../flowbite-vue/'
// 'flowbite-vue'
</script>
