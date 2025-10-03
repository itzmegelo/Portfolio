<template>
    <!-- ====== Forms Section Start -->
    <section class="bg-gray-1 dark:bg-dark py-20 lg:py-[120px]">
        <div class="container mx-auto">
            <div class="flex flex-wrap -mx-4">
                <div class="w-full px-4">
                    <div
                        class="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px] dark:bg-dark-2">
                        <div class="mb-10 text-center md:mb-16">
                            <a href="javascript:void(0)" class="mx-auto inline-block max-w-[160px]">
                                <h2 class="font-bold text-3xl font-sans text-primary">Variance</h2>
                            </a>
                        </div>
                        <form>
                            <div class="mb-6 text-left">
                                <label for="" class="mb-[10px] block text-base font-medium text-dark dark:text-white">
                                    Username:
                                </label>
                                <input type="text" placeholder="Email"
                                    class="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color dark:text-white dark:border-dark-3 focus:border-primary focus-visible:shadow-none" />
                            </div>
                            <div class="mb-6 text-left">
                                <label for="" class="mb-[10px] block text-base font-medium text-dark dark:text-white">
                                    Password:
                                </label>
                                <input type="password" placeholder="Password"
                                    class="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color dark:text-white dark:border-dark-3 focus:border-primary focus-visible:shadow-none" />
                            </div>
                            <label class="flex items-center cursor-pointer select-none text-dark dark:text-white mb-4">
                                <div class="relative">
                                    <input type="checkbox" class="sr-only" @change="handleCheckboxChange" />
                                    <div
                                        class="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-dark-3">
                                        <span class="opacity-0">
                                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                                    fill="#3056D3" stroke="#3056D3" strokeWidth="0.4"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                Remember me
                            </label>
                            <div class="mb-10">
                                <input type="button" value="Sign In" @click="gotoDashboard"
                                    class="w-full px-5 py-3 text-base font-medium text-white transition border rounded-md cursor-pointer border-primary bg-primary hover:bg-opacity-90" />
                            </div>
                        </form>
                        <div>
                            <span class="absolute top-1 right-1">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="1.39737" cy="38.6026" r="1.39737"
                                        transform="rotate(-90 1.39737 38.6026)" fill="#3056D3" />
                                    <circle cx="1.39737" cy="1.99122" r="1.39737"
                                        transform="rotate(-90 1.39737 1.99122)" fill="#3056D3" />
                                    <circle cx="13.6943" cy="38.6026" r="1.39737"
                                        transform="rotate(-90 13.6943 38.6026)" fill="#3056D3" />
                                    <circle cx="13.6943" cy="1.99122" r="1.39737"
                                        transform="rotate(-90 13.6943 1.99122)" fill="#3056D3" />
                                    <circle cx="25.9911" cy="38.6026" r="1.39737"
                                        transform="rotate(-90 25.9911 38.6026)" fill="#3056D3" />
                                    <circle cx="25.9911" cy="1.99122" r="1.39737"
                                        transform="rotate(-90 25.9911 1.99122)" fill="#3056D3" />
                                    <circle cx="38.288" cy="38.6026" r="1.39737" transform="rotate(-90 38.288 38.6026)"
                                        fill="#3056D3" />
                                    <circle cx="38.288" cy="1.99122" r="1.39737" transform="rotate(-90 38.288 1.99122)"
                                        fill="#3056D3" />
                                    <circle cx="1.39737" cy="26.3057" r="1.39737"
                                        transform="rotate(-90 1.39737 26.3057)" fill="#3056D3" />
                                    <circle cx="13.6943" cy="26.3057" r="1.39737"
                                        transform="rotate(-90 13.6943 26.3057)" fill="#3056D3" />
                                    <circle cx="25.9911" cy="26.3057" r="1.39737"
                                        transform="rotate(-90 25.9911 26.3057)" fill="#3056D3" />
                                    <circle cx="38.288" cy="26.3057" r="1.39737" transform="rotate(-90 38.288 26.3057)"
                                        fill="#3056D3" />
                                    <circle cx="1.39737" cy="14.0086" r="1.39737"
                                        transform="rotate(-90 1.39737 14.0086)" fill="#3056D3" />
                                    <circle cx="13.6943" cy="14.0086" r="1.39737"
                                        transform="rotate(-90 13.6943 14.0086)" fill="#3056D3" />
                                    <circle cx="25.9911" cy="14.0086" r="1.39737"
                                        transform="rotate(-90 25.9911 14.0086)" fill="#3056D3" />
                                    <circle cx="38.288" cy="14.0086" r="1.39737" transform="rotate(-90 38.288 14.0086)"
                                        fill="#3056D3" />
                                </svg>
                            </span>
                            <span class="absolute left-1 bottom-1">
                                <svg width="29" height="40" viewBox="0 0 29 40" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.288" cy="25.9912" r="1.39737" transform="rotate(-90 2.288 25.9912)"
                                        fill="#3056D3" />
                                    <circle cx="14.5849" cy="25.9911" r="1.39737"
                                        transform="rotate(-90 14.5849 25.9911)" fill="#3056D3" />
                                    <circle cx="26.7216" cy="25.9911" r="1.39737"
                                        transform="rotate(-90 26.7216 25.9911)" fill="#3056D3" />
                                    <circle cx="2.288" cy="13.6944" r="1.39737" transform="rotate(-90 2.288 13.6944)"
                                        fill="#3056D3" />
                                    <circle cx="14.5849" cy="13.6943" r="1.39737"
                                        transform="rotate(-90 14.5849 13.6943)" fill="#3056D3" />
                                    <circle cx="26.7216" cy="13.6943" r="1.39737"
                                        transform="rotate(-90 26.7216 13.6943)" fill="#3056D3" />
                                    <circle cx="2.288" cy="38.0087" r="1.39737" transform="rotate(-90 2.288 38.0087)"
                                        fill="#3056D3" />
                                    <circle cx="2.288" cy="1.39739" r="1.39737" transform="rotate(-90 2.288 1.39739)"
                                        fill="#3056D3" />
                                    <circle cx="14.5849" cy="38.0089" r="1.39737"
                                        transform="rotate(-90 14.5849 38.0089)" fill="#3056D3" />
                                    <circle cx="26.7216" cy="38.0089" r="1.39737"
                                        transform="rotate(-90 26.7216 38.0089)" fill="#3056D3" />
                                    <circle cx="14.5849" cy="1.39761" r="1.39737"
                                        transform="rotate(-90 14.5849 1.39761)" fill="#3056D3" />
                                    <circle cx="26.7216" cy="1.39761" r="1.39737"
                                        transform="rotate(-90 26.7216 1.39761)" fill="#3056D3" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <div
    v-if="showModal"
    class="fixed inset-0 z-50 flex items-center justify-center bg-dark/90"
  >
    <!-- Modal Box -->
    <div
      class="bg-primary dark:bg-dark-2 w-[90%] max-w-lg rounded-xl border border-stroke dark:border-dark-3 shadow-lg p-6 relative"
    >
      <!-- Header -->
      <div class="flex items-center gap-3 mb-4">
        <Cookie class="h-10 w-10 text-white" />
        <h4 class="text-2xl font-semibold text-white">We use cookies</h4>
      </div>

      <!-- Body -->
      <p class="text-white dark:text-dark-6 text-base mb-6">
        Please, accept these sweeties to continue enjoying our site!
      </p>

      <!-- Actions -->
      <div class="flex justify-end gap-3">
        <button
          @click="acceptCookies"
          class="bg-white text-gray-700 hover:bg-blue-600 hover:text-white rounded-md px-6 py-2 font-medium transition"
        >
          Accept
        </button>
        <button
          @click="declineCookies"
          class="bg-gray-200 dark:bg-dark text-gray-700 dark:text-dark-6 hover:bg-primary hover:text-white rounded-md px-6 py-2 font-medium transition"
        >
          Decline
        </button>
      </div>
    </div>
  </div>
    </section>

    <!-- ====== Forms Section End -->
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Cookies from 'js-cookie'
import { Cookie } from 'lucide-vue-next';
const showModal = ref(false)

onMounted(() => {
  if (!Cookies.get('cookie_consent')) {
    showModal.value = true
  }
})

function acceptCookies() {
  Cookies.set('cookie_consent', 'true', { expires: 365 }) // save for 1 year
  showModal.value = false
}

function declineCookies() {
  Cookies.set('cookie_consent', 'false', { expires: 365 })
  showModal.value = false
}
const router = useRouter()

function gotoDashboard() {
    router.push('/dashboard')
}

const isChecked = ref(false)

const handleCheckboxChange = () => {
    isChecked.value = !isChecked.value
}
</script>