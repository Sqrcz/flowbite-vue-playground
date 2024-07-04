<template>
  <div class="flex items-stretch w-full">
    <component-wrapper
      label="DatePicker (local)"
      class="w-1/2"
    >
      <div class="flex flex-col items-center justify-center gap-3 w-full">
        <pre>pickerDate: {{ pickerDate.toLocaleString() }}</pre>
        <local-datepicker v-model="pickerDate" />
      </div>
    </component-wrapper>

    <component-wrapper
      label="V-Model test"
      class="w-1/2"
    >
      <div class="flex flex-col items-center justify-center gap-3 w-full">
        <pre>modelTest: {{ modelTestValue }}</pre>
        <model-test v-model="modelTestValue" />
      </div>
    </component-wrapper>
  </div>
<!--
  <component-wrapper label="DatePicker">
    <div class="flex justify-center gap-3 w-full">
      <fwb-datepicker v-model="model" />
      <fwb-datepicker
        v-model="model"
        format="DD dd MM yyyy"
        clear-btn
        today-btn
        button-class="text-red-500"
        :today-btn-mode="0"
        title="Example datepicker"
        :week-start="1"
        label="Select date"
      />
    </div>
  </component-wrapper>

  <component-wrapper label="Tooltip">
    <div class="flex justify-center gap-3 w-full">
      <fwb-tooltip>
        <template #trigger>
          <fwb-button>
            Default Tooltip
          </fwb-button>
        </template>
        <template #content>
          Tooltip content
        </template>
      </fwb-tooltip>
    </div>
  </component-wrapper>

  <component-wrapper label="Accordion">
    <div class="flex justify-center gap-3 w-full">
      <fwb-dropdown text="Bottom">
        <div class="w-52">
          <p class="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </fwb-dropdown>
      <fwb-dropdown
        placement="top"
        text="Top"
      >
        <div class="w-52">
          <p class="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </fwb-dropdown>
      <fwb-dropdown
        placement="right"
        text="Right"
      >
        <div class="w-52">
          <p class="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </fwb-dropdown>
      <fwb-dropdown
        placement="left"
        text="Left"
      >
        <div class="w-52">
          <p class="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </fwb-dropdown>
    </div>
  </component-wrapper>
  <component-wrapper label="Accordion [align-to-end]">
    <div class="flex justify-center gap-3 w-full">
      <fwb-dropdown
        text="Bottom"
        align-to-end
      >
        <div class="w-52">
          <p class="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </fwb-dropdown>
      <fwb-dropdown
        placement="top"
        text="Top"
        align-to-end
      >
        <div class="w-52">
          <p class="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </fwb-dropdown>
      <fwb-dropdown
        placement="right"
        text="Right"
        align-to-end
      >
        <div class="w-52">
          <p class="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </fwb-dropdown>
      <fwb-dropdown
        placement="left"
        text="Left"
        align-to-end
      >
        <div class="w-52">
          <p class="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </fwb-dropdown>
    </div>
  </component-wrapper>
  <component-wrapper label="File input">
    <fwb-file-input
      v-model="file"
      label="Upload file"
    />
  </component-wrapper> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ComponentWrapper from '@/components/ComponentWrapper.vue'
import LocalDatepicker from '@/components/local/LocalDatepicker.vue'
import ModelTest from '@/components/local/ModelTest.vue'

// const file = ref(null)
// const model = defineModel<string | Date | null>({ default: new Date() })

const modelTestValue = ref('')
const pickerDate = ref('')

// const pickerDate = defineModel<Date | string >('pickerDate', { default: new Date(), required: true })
</script>
