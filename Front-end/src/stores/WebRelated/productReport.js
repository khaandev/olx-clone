import { defineStore } from "pinia";
import { ref } from "vue";
import { useCommonStore } from "./coman";
const common = useCommonStore()
import axios from "@/http/Axios";
export const useReportStore = defineStore("report", () => {
  const reports = ref([]);
  const myReports = ref([]);

  const report = ref(null);
  const isSuccess = ref(false)
  const validationError = ref(null);

  async function indexReport() {
    try {
      const response = await axios.get(`/api/report`);
      reports.value = response.data;
    } catch (error) {
      common.validationError = error.response.data.errors;
    } 
  }
  async function indexMyReport() {
    try {
      const response = await axios.get(`/api/my/report`)
      myReports.value = response.data;
    } catch (error) {
      common.validationError = error.response.data.errors;
    } 
  }

  async function storeReport(data) {
    try {
      const response = await axios.post(`/api/report`,data);
      report.value = response.data;
      reports.value.push(response.data);
      isSuccess.value = true;
     resetValidationsErrors();
    } catch (error) {
      isSuccess.value = false;
      common.validationError = error.response.data.errors;
    } 
  }

  async function showReport(id) {
    try {
      const response = await axios.get(`/api/report/${id}`);
      report.value = response.data;
    } catch (error) {
      common.validationError = error.response.data.errors;
    } 
  }

  async function deletereporte(id) {
    try {
      const res = await axios.delete(`/api/report/${id}`);
      report.value = res.data;
    } catch(error) {
       if (error.response) {
        common.validationError = error?.response?.data?.errors;
      } else {
        console.log("some thing went Worng");
      }
    }
  }
  function resetValidationsErrors() {
    common.validationError = {};
  }
  return {
    indexMyReport,
    showReport,
    myReports,
    resetValidationsErrors,
    reports,
    isSuccess,
    indexReport,
    storeReport,
    report,
    validationError,
    deletereporte,
  }
});
