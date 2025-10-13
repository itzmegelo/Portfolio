<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Modal from "./Modals.vue";

const modalOpen = ref(false);

const openModal = () => {
  modalOpen.value = true;
};
import { Book, Power , User, Info } from 'lucide-vue-next'
const open = ref(false)
const dropdownButtonRef = ref<HTMLButtonElement | null>(null)

const toggleNavbar = () => {
  open.value = !open.value
}

const navLinkItems = ref([
  { text: 'Home', href: '/' },
  { text: 'About', href: '#about' },
  { text: 'Experience', href: '#about' },
  { text: 'Skills', href: '#skills' },
  { text: 'Projects', href: '#projects' }
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
             <h2 class="font-bold text-3xl font-sans text-primary dark:text-gray-2">Portfolio</h2>
          </a>
        </div>

        <!-- Menu + Buttons -->
        <div class="flex w-full items-center justify-between px-4">
          <div>
            <!-- Mobile Toggler -->
            <button
              @click="toggleNavbar"
              ref="dropdownButtonRef"
              class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
            >
              <span class="my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              <span class="my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              <span class="my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
            </button>

            <!-- Nav Links -->
            <nav
              :class="{ hidden: !open }"
              class="absolute right-4 top-full w-full max-w-[250px] rounded-lg px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent"
            >
              <ul class="block lg:flex">
                <li v-for="(item, index) in navLinkItems" :key="index">
                  <a
                    :href="item.href"
                    class="flex py-2 text-base font-medium text-white hover:text-orange-500 dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
                  >
                    {{ item.text }}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
     <Modal
      v-model="modalOpen"
      title="Your Message Sent Successfully"
      message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
    >
      <!-- Custom action buttons -->
      <div class="w-1/2 px-3">
        <button
          @click="modalOpen = false"
          class="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-white"
        >
          Cancel
        </button>
      </div>
      <div class="w-1/2 px-3">
        <a
          href="/"
          class="block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-blue-dark"
        >
          View Details
        </a>
      </div>
    </Modal>
</template>
