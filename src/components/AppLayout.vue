<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const sidebarOpen = ref(false);
const navbarOpen = ref(false);

const sidebarItems = [
  { text: "Dashboard", href: "/" },
  { text: "Users", href: "/users" },
  { text: "Payments", href: "/payments" },
  { text: "Settings", href: "/settings" },
];

const navItems = [
  { text: "Home", href: "/" },
  { text: "Blog", href: "/blog" },
  { text: "About", href: "/about" },
];

// Toggle functions
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};
const toggleNavbar = () => {
  navbarOpen.value = !navbarOpen.value;
};

// Close sidebar on outside click (mobile)
const handleClickOutside = (event: MouseEvent) => {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("sidebarToggle");
  if (
    sidebar &&
    !sidebar.contains(event.target as Node) &&
    toggleBtn &&
    !toggleBtn.contains(event.target as Node)
  ) {
    sidebarOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="flex h-screen bg-gray-100 dark:bg-dark">
    <!-- Sidebar -->
    <aside
      id="sidebar"
      :class="[
        'fixed top-0 left-0 h-screen w-64 bg-white dark:bg-dark-2 shadow-lg transform transition-transform duration-300 ease-in-out z-50',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
      ]"
    >
      <div class="flex items-center justify-between px-6 py-4 border-b dark:border-dark-3">
        <h2 class="text-lg font-semibold text-dark dark:text-white">MyApp</h2>
        <button @click="toggleSidebar" class="lg:hidden text-dark dark:text-white">✖</button>
      </div>

      <nav class="mt-6">
        <ul>
          <li
            v-for="(item, index) in sidebarItems"
            :key="index"
            class="px-6 py-3 hover:bg-gray-100 dark:hover:bg-dark-3"
          >
            <a :href="item.href" class="block text-dark dark:text-white">{{ item.text }}</a>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Overlay (for mobile sidebar) -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 bg-black/40 z-40 lg:hidden"
      @click="toggleSidebar"
    ></div>

    <!-- Main content wrapper -->
    <div class="flex-1 flex flex-col lg:ml-64 transition-all">
      <!-- Navbar -->
      <header class="flex items-center justify-between bg-white dark:bg-dark-2 px-6 py-4 shadow">
        <div class="flex items-center space-x-4">
          <!-- Sidebar Toggle (mobile only) -->
          <button
            id="sidebarToggle"
            @click="toggleSidebar"
            class="lg:hidden rounded-md bg-primary px-3 py-2 text-white hover:bg-primary/90"
          >
            ☰
          </button>

          <span class="text-xl font-bold text-dark dark:text-white">Dashboard</span>
        </div>

        <!-- Nav links (desktop) -->
        <nav class="hidden lg:flex space-x-6">
          <a
            v-for="(item, i) in navItems"
            :key="i"
            :href="item.href"
            class="text-dark hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {{ item.text }}
          </a>
        </nav>

        <!-- Navbar Toggle (mobile) -->
        <button
          @click="toggleNavbar"
          class="lg:hidden rounded-md border px-3 py-2 text-dark dark:text-white"
        >
          ☰
        </button>

        <!-- Mobile dropdown -->
        <nav
          v-if="navbarOpen"
          class="absolute right-6 top-16 w-48 bg-white dark:bg-dark-2 shadow rounded-lg p-4 space-y-2 lg:hidden"
        >
          <a
            v-for="(item, i) in navItems"
            :key="i"
            :href="item.href"
            class="block text-dark hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {{ item.text }}
          </a>
        </nav>
      </header>

      <!-- Page Content -->
      <main class="flex-1 p-6 overflow-y-auto">
        <slot />
      </main>
    </div>
  </div>
</template>
