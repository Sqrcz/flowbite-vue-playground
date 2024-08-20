<template>
  LOCAL DATEPICKER
  <div class="relative max-w-sm">
    <div class="absolute inset-0 flex items-center ps-3.5 pointer-events-none">
      <svg
        aria-hidden="true"
        class="w-4 h-4 text-gray-500 dark:text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
      </svg>
    </div>
    <input
      ref="datepickerRef"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Select date"
      type="text"
      @changeDate="(target: any) => (selectedDate = target.detail.date)"
    >
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { Datepicker } from 'flowbite'
import type { DatepickerOptions } from 'flowbite'

type DateInput = Date | string | number

const datepickerRef = ref(null)
const selectedDate = defineModel<DateInput | null>()

type Props = {
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
})

let datepickerInstance: Datepicker

const options: DatepickerOptions = {
  autohide: false,
  autoSelectToday: undefined, // If set to 1 then it will automatically have today's date preselected.
  buttons: true, // should be withButtons / showButtons, If set to true then the "today" and "clear" action buttons will be shown that lets you select today's date or clear selections.
  format: 'yyyy-mm-dd',
  language: 'en', // currently not supported
  maxDate: null,
  minDate: null,
  orientation: 'right', // Set the orientation of the datepicker component when it's not inline. It can be top, bottom, left, or right.
  rangePicker: false, // currently not supported
  title: props.title,
  onHide: () => {},
  onShow: () => {},
}

onMounted(() => {
  datepickerInstance = new Datepicker(datepickerRef.value, { ...options })
})

onUnmounted(() => {
  if (datepickerInstance) {
    datepickerInstance.destroy()
  }
})
</script>
