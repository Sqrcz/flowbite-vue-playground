<template>
  LOCAL DATEPICKER
  <div class="relative max-w-sm">
    <div class="absolute inset-0 flex items-center ps-3.5 pointer-events-none">
      <svg
        class="w-4 h-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
      </svg>
    </div>
    <input
      id="datepicker-custom"
      ref="datepickerRef"
      v-model="selectedDate"
      type="text"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Select date"
      @changeDate="(target: any) => (selectedDate = target.detail.date)"
    >
    <!-- @changeDate="test" -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated, ref } from 'vue'
import { Datepicker } from 'flowbite'
import type {
  // DatepickerInterface,
  DatepickerOptions,
  InstanceOptions,
} from 'flowbite'

type DateInput = Date | string | number

const datepickerRef = ref(null)

// console.log({ Datepicker })

const options: DatepickerOptions = {
  // defaultDatepickerId: null,
  autohide: false,
  format: 'yyyy-mm-dd',
  maxDate: null,
  minDate: null,
  orientation: 'right',
  buttons: true,
  title: 'null',
  language: 'en',
  rangePicker: false,
  // onShow: () => {},
  // onHide: () => {},
}

const instanceOptions: InstanceOptions = {
  id: 'datepicker-custom',
  override: true,
}

const selectedDate = defineModel<DateInput | null>()

let datepickerInstance: Datepicker

const refreshDatepicker = () => {
  if (!selectedDate.value) {
    datepickerInstance.setDate(null)
  } else {
    datepickerInstance.setDate([new Date(selectedDate.value)])
  }
}
onMounted(() => {
  datepickerInstance = new Datepicker(datepickerRef.value, { ...options }, { ...instanceOptions })
  refreshDatepicker()
})

onUpdated(() => {
  refreshDatepicker()
})

onUnmounted(() => {
  if (datepickerInstance) {
    datepickerInstance.destroy()
  }
})

const test = (aaa:any) => {
  console.log(aaa)
}

</script>
