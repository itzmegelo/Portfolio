<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// Props
defineProps<{
  modelValue: boolean;       // for open/close
  title: string;             // modal title
  message?: string;          // modal body message
}>();

// Emit update for v-model
const emit = defineEmits(["update:modelValue"]);

// close function
const close = () => {
  emit("update:modelValue", false);
};

// close modal on escape key
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape") close();
};

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});
onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <!-- Overlay -->
  <div
    class="fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 z-50"
    :class="{ hidden: !modelValue, block: modelValue }"
  >
    <!-- Modal -->
    <div
      class="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
    >
      <!-- Title -->
      <h3 class="pb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl">
        {{ title }}
      </h3>
      <span class="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary"></span>

      <!-- Message -->
      <p v-if="message" class="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
        {{ message }}
      </p>

      <!-- Slot for custom content (buttons, forms, etc.) -->
      <div class="-mx-3 flex flex-wrap">
        <slot />
      </div>
    </div>
  </div>
</template>
