<template>
  <nav class="bg-gray-800">
    <div class="mx-auto px-5">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-stretch justify-start">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <router-link
              to="/"
              class="link rounded-md px-3 py-2 text-sm font-medium"
            >
              Dashboard
            </router-link>
            <router-link
              to="/playground"
              class="link rounded-md px-3 py-2 text-sm font-medium "
            >
              Playground
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.link-active {
  @apply bg-gray-900 text-white
}
.link:not(.link-active) {
  @apply text-gray-300 hover:bg-gray-700 hover:text-white
}
</style>
