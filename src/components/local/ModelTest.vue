<template>
  <input
    v-model="test"
    type="text"
  >
  <!-- @input="emitUpdate()" -->
  <!-- @input="emit('update:modelValue', $event.target?.value)" -->
  <pre>{{ test }}</pre>
</template>

<script setup lang="ts">
// import { ref } from 'vue'

const test = defineModel<string>()

// export interface Props {
//   modelValue: Date | string
// }

// withDefaults(defineProps<Props>(), {
//   modelValue: '',
// })

// const emit = defineEmits(['update:modelValue'])

// const emit = defineEmits<{(e: 'update', value: 'string'): void}>()

// const emitUpdate = (aaa: any) => {
//   console.log(aaa)
// }

</script>
