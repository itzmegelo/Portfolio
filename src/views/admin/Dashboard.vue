<script setup lang="ts">
import Navbar from "../../components/Navbar.vue"
</script>

<template>
  <Navbar class="sticky top-0 z-50 w-full bg-transparent backdrop-blur-sm transition-colors duration-300" />
  <main class="flex flex-col dark:bg-dark-2 h-screen">
    <section class="hero-bg py-20 sm:py-24 lg:py-32 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
          Your Future Starts with the Right <span class="text-accent">OJT</span>
        </h1>
        <p class="text-xl sm:text-2xl mb-8 opacity-90">
          Connect with top companies for hands-on, real-world training experience.
        </p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#find"
            class="bg-secondary text-primary font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-yellow-500 transition duration-300 text-lg transform hover:scale-105">
            Find OJT Opportunities
          </a>
          <a href="#post"
            class="bg-white text-primary font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-gray-100 transition duration-300 text-lg transform hover:scale-105">
            Post an OJT (For Employers)
          </a>
        </div>
      </div>
    </section>
      <!-- Find OJT Section (Search and Featured) -->
    <section id="find" class="py-16 sm:py-20 bg-white">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
                Search & Explore Opportunities
            </h2>
            
            <!-- Search Bar -->
            <div class="bg-white p-4 sm:p-6 rounded-2xl shadow-xl mb-12 border border-gray-100">
                <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <input type="text" placeholder="e.g., Web Development, Marketing, Accounting" 
                           class="flex-grow p-4 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition" />
                    <select class="p-4 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition md:w-1/4">
                        <option>Location (All)</option>
                        <option>Metro Manila</option>
                        <option>Cebu City</option>
                        <option>Davao City</option>
                    </select>
                    <button class="bg-primary text-white font-bold py-4 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300">
                        Search OJT
                    </button>
                </div>
            </div>

            <!-- Featured Listings -->
            <h3 class="text-2xl font-semibold text-gray-700 mb-6 border-b pb-2">
                Top Featured Openings 
            </h3>

            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <!-- Card 1 -->
                <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">
                    <span class="inline-block bg-accent text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">Tech</span>
                    <h4 class="text-xl font-bold text-gray-800 mb-2">Frontend Developer Intern</h4>
                    <p class="text-primary font-medium mb-3">Innovate Solutions Inc.</p>
                    <p class="text-gray-500 text-sm mb-4">Gain experience with React and Tailwind CSS on a flagship project.</p>
                    <div class="flex justify-between items-center text-sm text-gray-600">
                        <span><span class="font-bold">3</span> Months</span>
                        <span>Makati City</span>
                    </div>
                </div>
                
                <!-- Card 2 -->
                <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">
                    <span class="inline-block bg-secondary text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">Marketing</span>
                    <h4 class="text-xl font-bold text-gray-800 mb-2">Digital Media Specialist Trainee</h4>
                    <p class="text-primary font-medium mb-3">Global Brands Co.</p>
                    <p class="text-gray-500 text-sm mb-4">Assist in managing social media campaigns and content creation.</p>
                    <div class="flex justify-between items-center text-sm text-gray-600">
                        <span><span class="font-bold">6</span> Months</span>
                        <span>Cebu City</span>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">
                    <span class="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">Finance</span>
                    <h4 class="text-xl font-bold text-gray-800 mb-2">Accounting & Auditing Associate</h4>
                    <p class="text-primary font-medium mb-3">Prime CPA Firm</p>
                    <p class="text-gray-500 text-sm mb-4">Hands-on exposure to bookkeeping, tax preparation, and audits.</p>
                    <div class="flex justify-between items-center text-sm text-gray-600">
                        <span><span class="font-bold">4</span> Months</span>
                        <span>Pasig City</span>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-10">
                <a href="#" class="inline-block text-primary font-semibold text-lg hover:underline transition">
                    View All 150+ OJT Listings &rarr;
                </a>
            </div>
        </div>
    </section>
  </main>
</template>
<style>
.hero-bg {
  background: linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%);
}
</style>
