<script setup lang="ts">
import Navbar from "../../components/Navbar.vue"
</script>

<template>
  <Navbar />
  <main class="p-5">
    <section class="dark:bg-dark bg-white py-[7px] mb-4">
      <div>
        <div class="border-primary border-l-[5px] pl-5">
          <h2 class="text-dark mb-2 text-2xl font-semibold dark:text-white">Dashboard Overview</h2>
          <p class="text-body-color dark:text-dark-6 text-sm font-medium">
            Welcome to your dashboard! Here you can track key metrics, monitor activity,
            and get insights to help you manage your system effectively.
          </p>
        </div>
      </div>
    </section>
    <section class="dark:bg-dark bg-white py-[7px]">
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
  </main>
</template>
