import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/http/Axios";
export const useReportStore = defineStore("report", () => {
  const reports = ref([]);
  const report = ref(null);
  const isSuccess = ref(false)
  const validationError = ref(null);

  async function indexReport() {
    try {
      const response = await axios.get(`/api/report`);
      reports.value = response.data;
    } catch (error) {
      validationError.value = error.response;
    } 
  }

  async function storeReport(data) {
    try {
      const response = await axios.post(`/api/report`,data);
      report.value = response.data;
     isSuccess.value = true
    } catch (error) {
      isSuccess.value = false
      validationError.value = error.response;
    } 
  }

  return {
    reports,
    isSuccess,
    indexReport,
    storeReport,
    report,
    validationError,
  }
});
