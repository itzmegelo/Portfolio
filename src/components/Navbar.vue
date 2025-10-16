<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
const open = ref(false)
const dropdownButtonRef = ref<HTMLButtonElement | null>(null)

const toggleNavbar = () => {
  open.value = !open.value
}

const navLinkItems = ref([
  { text: 'Home', href: '/' },
  { text: 'About', href: '#about' },
  { text: 'Skills', href: '#skills' },
  { text: 'Experience', href: '#experience' },
  { text: 'Projects', href: '#projects' },
  { text: 'Contact', href: '#contact' },
])

// Close menu when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownButtonRef.value && !dropdownButtonRef.value.contains(event.target as Node)) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <header :class="$attrs.class">
    <div class="container">
      <div class="relative -mx-4 flex items-center justify-between">
        <!-- Logo -->
        <div class="w-60 max-w-full px-4 gap-2 ms-4">
          <a href="/" class="w-full flex items-center justify-center text-center py-5 gap-2">
             <h2 class="font-bold text-3xl font-sans text-orange-400 dark:text-orange-400">itzme<span class="text-[#6366f1]">gelo</span></h2>
          </a>
        </div>

        <!-- Menu + Buttons -->
        <div class="flex w-full items-center justify-between px-4">
          <div>
            <!-- Mobile Toggler -->
            <button
              @click="toggleNavbar"
              ref="dropdownButtonRef"
              class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-[#6366f1] focus:ring-2 lg:hidden"
            >
              <span class="my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              <span class="my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              <span class="my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
            </button>

            <!-- Nav Links -->
          </div>
         
        </div>
         <nav
              :class="{ hidden: !open }"
              class="absolute right-4 top-full w-full max-w-[250px] rounded-lg px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent"
            >
              <ul class="block lg:flex">
                <li v-for="(item, index) in navLinkItems" :key="index">
                  <a
                    :href="item.href"
                    class="flex py-2 text-base font-medium text-[#6366f1] hover:text-orange-500 dark:text-white dark:hover:text-[#6366f1] lg:ml-12 lg:inline-flex"
                  >
                    {{ item.text }}
                  </a>
                </li>
              </ul>
            </nav>
      </div>
    </div>
  </header>
</template>
