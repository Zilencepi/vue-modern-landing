<template>
  <section class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

      <!-- Left content -->
      <div>
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ content.title }}
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mb-8">{{ content.subtitle }}</p>
        <div class="space-y-4 text-gray-700 dark:text-gray-300">
          <p>{{ content.info.description }}</p>
          <p><strong>Email:</strong> {{ content.info.email }}</p>
          <p><strong>Phone:</strong> {{ content.info.phone }}</p>
          <p><strong>Address:</strong> {{ content.info.address }}</p>
        </div>
      </div>

      <!-- Form -->
      <form class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6" @submit.prevent>
        <div>
          <label for="name" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            {{ content.form.nameLabel }}
          </label>
          <input
            id="name"
            type="text"
            autocomplete="name"
            :placeholder="content.form.namePlaceholder"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
                   bg-transparent text-gray-900 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            {{ content.form.emailLabel }}
          </label>
          <input
            id="email"
            type="email"
            autocomplete="email"
            :placeholder="content.form.emailPlaceholder"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
                   bg-transparent text-gray-900 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label for="message" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            {{ content.form.messageLabel }}
          </label>
          <textarea
            id="message"
            autocomplete="message"
            rows="4"
            :placeholder="content.form.messagePlaceholder"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700
                   bg-transparent text-gray-900 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        <button type="submit" class="w-full py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition">
          {{ content.form.submitText }}
        </button>
      </form>

    </div>
  </section>
</template>

<script setup>
import { contactContent as content } from '@/data/contact'
</script>
