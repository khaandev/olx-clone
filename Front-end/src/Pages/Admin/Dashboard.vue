<script setup>
import MainLayout from "@/Layouts/MainLayout/MainLayout.vue";
</script>

<template>
  <MainLayout>
    <div class="mx-5">
      <div class="grid grid-cols-3 my-5 gap-5">
        <div class="bg-gradient-to-r from-pink-500 to-gray-500 p-10 rounded">
          <div class="flex gap-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-10 h-10"
            >
              <path
                d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"
              />
            </svg>
            <p class="my-auto text-xl" id="font">1000k</p>
          </div>
        </div>
        <div class="bg-gradient-to-r from-pink-500 to-gray-500 p-10 rounded">
          <div class="flex gap-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-10 h-10"
            >
              <path
                d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
              />
            </svg>

            <p class="my-auto text-xl" id="font">1000k</p>
          </div>
        </div>
        <div class="bg-gradient-to-r from-pink-500 to-gray-500 p-10 rounded">
          <div class="flex gap-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-10 h-10"
            >
              <path
                fill-rule="evenodd"
                d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
                clip-rule="evenodd"
              />
            </svg>

            <p class="my-auto text-xl" id="font">1000k</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col mt-8">
        <div class="overflow-x-auto rounded-lg">
          <div class="align-middle inline-block min-w-full">
            <div class="shadow overflow-hidden sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Transaction
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date & Time
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  <tr>
                    <td
                      class="p-4 whitespace-nowrap text-sm font-normal text-gray-900"
                    >
                      Payment from
                      <span class="font-semibold">Bonnie Green</span>
                    </td>
                    <td
                      class="p-4 whitespace-nowrap text-sm font-normal text-gray-500"
                    >
                      Apr 23 ,2021
                    </td>
                    <td
                      class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900"
                    >
                      $2300
                    </td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td
                      class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left"
                    >
                      Payment refund to
                      <span class="font-semibold">#00910</span>
                    </td>
                    <td
                      class="p-4 whitespace-nowrap text-sm font-normal text-gray-500"
                    >
                      Apr 23 ,2021
                    </td>
                    <td
                      class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900"
                    >
                      -$670
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="p-4 whitespace-nowrap text-sm font-normal text-gray-900"
                    >
                      Payment failed from
                      <span class="font-semibold">#087651</span>
                    </td>
                    <td
                      class="p-4 whitespace-nowrap text-sm font-normal text-gray-500"
                    >
                      Apr 18 ,2021
                    </td>
                    <td
                      class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900"
                    >
                      $234
                    </td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td
                      class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left"
                    >
                      Payment from <span class="font-semibold">Lana Byrd</span>
                    </td>
                    <td
                      class="p-4 whitespace-nowrap text-sm font-normal text-gray-500"
                    >
                      Apr 15 ,2021
                    </td>
                    <td
                      class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900"
                    >
                      $5000
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="p-4 whitespace-nowrap text-sm font-normal text-gray-900"
                    >
                      Payment from <span class="font-semibold">Jese Leos</span>
                    </td>
                    <td
                      class="p-4 whitespace-nowrap text-sm font-normal text-gray-500"
                    >
                      Apr 15 ,2021
                    </td>
                    <td
                      class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900"
                    >
                      $2300
                    </td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td
                      class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left"
                    >
                      Payment from
                      <span class="font-semibold">THEMESBERG LLC</span>
                    </td>
                    <td
                      class="p-4 whitespace-nowrap text-sm font-normal text-gray-500"
                    >
                      Apr 11 ,2021
                    </td>
                    <td
                      class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900"
                    >
                      $560
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<style scoped>
#font {
  font-family: "Inter", sans-serif;
  font-weight: 600;
}
</style>
