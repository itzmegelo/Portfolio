<template>
  <Navbar class="sticky top-0 z-50 w-full bg-transparent backdrop-blur-sm transition-colors duration-300"/>
  <main class="p-5 dark:bg-dark-2">
    <section class="dark:bg-dark-2 bg-white py-[7px] mb-4">
      <div>
        <div class="border-primary border-l-[5px] pl-5">
          <h2 class="text-dark mb-2 text-2xl font-semibold dark:text-white">Manage Users Account</h2>
          <p class="text-body-color dark:text-dark-6 text-sm font-medium">
            Welcome to your dashboard! Here you can track key metrics, monitor activity,
            and get insights to help you manage your system effectively.
          </p>
        </div>
      </div>
    </section>
    <section class="dark:bg-dark-2 bg-white py-[7px]">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <!-- Inhouse Reports -->
        <router-link to="/reports" class="block">
          <div
            class="bg-white border p-6 rounded-xl shadow-lg border-b-4 border-yellow-500 w-full dark:bg-gray-800 dark:border-b-4 ">
            <p class="text-sm uppercase font-medium text-gray-600 dark:text-gray-400">Inhouse Reports</p>
            <p class="text-4xl font-bold mt-2 text-yellow-500">200</p>
            <p class="text-sm text-gray-500 mt-1">10 new reports added this month
            </p>
          </div>
        </router-link>

        <!-- Navision Reports -->
        <router-link to="/reports" class="block">
          <div
            class="bg-white border p-6 rounded-xl shadow-lg border-b-4 border-blue-500 w-full dark:bg-gray-800 dark:border-b-4">
            <p class="text-sm uppercase font-medium text-gray-600 dark:text-gray-400">Navision Reports</p>
            <p class="text-4xl font-bold mt-2 text-blue-500">100</p>
            <p class="text-sm text-gray-500 mt-1">20 new reports added this
              month
            </p>
          </div>
        </router-link>
        <!-- Inhouse Navision Reports -->
        <router-link to="/reports" class="block">
          <div
            class="bg-white border p-6 rounded-xl shadow-lg border-b-4 border-green-500 dark:bg-gray-800 dark:border-b-4">
            <p class="text-sm uppercase font-medium text-gray-600 dark:text-gray-400">Inhouse Navision
              Reports
            </p>
            <p class="text-4xl font-bold mt-2 text-green-500">150</p>
            <p class="text-sm text-gray-500 mt-1">25 new reports added
              this
              month</p>
          </div>
        </router-link>
      </div>
    </section>
    <section class="dark:bg-dark-2 bg-white py-[7px] mb-4">
       
            <div class="max-w-full overflow-x-auto">
              <table class="w-full">
                <thead class="text-center bg-white dark:border-dark border text-black dark:bg-dark-2 rounded-l-lg">
                  <tr >
                    <th
                      class="w-1/6 min-w-[160px] py-2 px-3 text-lg font-medium text-black dark:text-gray-2 lg:py-4 lg:px-4">
                      No.
                    </th>
                    <th class="w-1/6 min-w-[160px] py-2 px-3 text-lg font-medium text-black lg:py-2 lg:px-4 dark:text-gray-2">
                      Name
                    </th>
                    <th class="w-1/6 min-w-[160px] py-2 px-3 text-lg font-medium text-black lg:py-2 lg:px-4 dark:text-gray-2">
                      Type
                    </th>
                    <th class="w-1/6 min-w-[160px] py-2 px-3 text-lg font-medium text-black lg:py-2lg:px-4 dark:text-gray-2">
                      System
                    </th>
                    <th class="w-1/6 min-w-[160px] py-2 px-3 text-lg font-medium text-black lg:py-2 g:px-4 dark:text-gray-2">
                      Status
                    </th>
                    <th class="w-1/6 min-w-[160px] py-2 px-3 text-lg font-medium text-black lg:py-2 lg:px-4 dark:text-gray-2">
                      Bu Code
                    </th>
                    <th
                      class="w-1/3 min-w-[400px] py-2 px-3 text-lg font-medium text-black lg:py-2 lg:px-4 rounded-r-xl dark:text-gray-2">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(item, index) in tableData" :key="index">
                    <td :class="getTableCellClass(index, 0)">{{ item.tld }}</td>
                    <td :class="getTableCellClass(index, 1)">{{ item.duration }}</td>
                    <td :class="getTableCellClass(index, 2)">{{ item.registration }}</td>
                    <td :class="getTableCellClass(index, 3)">{{ item.renewal }}</td>
                    <td :class="getTableCellClass(index, 4)">{{ item.transfer }}</td>
                    <td :class="getTableCellClass(index, 4)">{{ item.transfer }}</td>
                    <td :class="getTableCellClass(index, 5)">
                      <div class="flex gap-2">
                      <a :href="item.link"
                        class="inline-block text-xs px-3 py-3 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium">
                        Sign Up
                      </a>
                      <a :href="item.link"
                        class="inline-block px-6 py-2.5 border rounded-md border-primary text-primary hover:bg-primary hover:text-white font-medium">
                        Sign Up
                      </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Navbar from "../../components/Navbar.vue"
const tableData = ref([
  {
    tld: '.com',
    duration: '1 Year',
    registration: '$75.00',
    renewal: '$5.00',
    transfer: '$10.00',
    link: 'javascript:void(0)'
  },
  {
    tld: '.com',
    duration: '1 Year',
    registration: '$75.00',
    renewal: '$5.00',
    transfer: '$10.00',
    link: 'javascript:void(0)'
  },
  {
    tld: '.com',
    duration: '1 Year',
    registration: '$75.00',
    renewal: '$5.00',
    transfer: '$10.00',
    link: 'javascript:void(0)'
  },
   {
    tld: '.com',
    duration: '1 Year',
    registration: '$75.00',
    renewal: '$5.00',
    transfer: '$10.00',
    link: 'javascript:void(0)'
  },
  {
    tld: '.com',
    duration: '1 Year',
    registration: '$75.00',
    renewal: '$5.00',
    transfer: '$10.00',
    link: 'javascript:void(0)'
  },
  {
    tld: '.com',
    duration: '1 Year',
    registration: '$75.00',
    renewal: '$5.00',
    transfer: '$10.00',
    link: 'javascript:void(0)'
  }
])

const getTableCellClass = (index: number, columnIndex: number): string => {
  const isEven = index % 2 === 0
  const bgClass = isEven ? 'bg-[#F3F6FF] dark:bg-dark-2 border' : 'bg-white border dark:bg-dark-2'
  return `text-dark border-b ${columnIndex === 0 ? 'border-l border-r' : ''
    } border-[#E8E8E8] ${bgClass} dark:border-dark dark:text-dark-7 px-7 py-4 text-center text-base font-medium`
}
</script>