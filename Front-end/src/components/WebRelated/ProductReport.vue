<script setup>
import PopUpLayout from "@/Layouts/PopUpLayout.vue";
import BaseInput from "./BaseInput.vue";
import { defineEmits,defineProps, reactive } from "vue";
import { onMounted } from "vue";
const prop = defineProps(['selectedId'])
import { useReportStore } from "@/stores/WebRelated/productReport";
const emit = defineEmits(["ReportModal","cancleBtn"]);
import ButtonPrimary from "./ButtonPrimary.vue";
import ValidtaionError from "../common/ValidtaionError.vue";

const reportResion =reactive(
  {
    resion: '',
  }
);
const report = useReportStore()


const formHandle = async () => {
const data = {
  resion: reportResion.resion,
  'product_id': prop.selectedId,
}

await report.storeReport(data);

 if(report.isSuccess) 
  emit("ReportModal");
};

const btn = () => {

    emit('cancleBtn')
}
</script>
<template>
  <PopUpLayout>
    <div class="bg-gray-100 rounded-md p-4">
      <button @click="btn"  type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <form @submit.prevent="formHandle">
        <div>
          <BaseInput
          label="Enter Product Problem"
          v-model="reportResion.resion"
        />
        <ValidtaionError field="resion" />
        <ValidtaionError field="product_id" />

        </div>
      
        <ButtonPrimary text="Submit Report" class="my-3"/>
      </form>
    </div>
  </PopUpLayout>
</template>
