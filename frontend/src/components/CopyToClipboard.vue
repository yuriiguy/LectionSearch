<template>
  <div class="relative">
    <input :value="text" type="text" class="bg-gray-50 border border-gray-300 text-xs rounded-lg text-gray-400 pl-2.5 pr-9 pl-5" autocomplete="off" readonly>
    <div class="absolute inset-y-1 right-1 flex items-center">
      <button class="transition !p-2" :class="{ 'text-green-700': isTextCopied, 'text-gray-500': !isTextCopied }" :disabled="isTextCopied" @click="copy">
        <svg v-if="isTextCopied" xmlns="http://www.w3.org/2000/svg" class="d-inline-block w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>

        <svg v-else xmlns="http://www.w3.org/2000/svg" class="d-inline-block w-4 translate-x-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: null
  }
})

const isTextCopied = ref(false);

function copy() {
  if (isTextCopied.value) {
    return;
  }

  navigator.clipboard
    .writeText(props.text)
    .then(() => {
      isTextCopied.value = true;
      setTimeout(() => isTextCopied.value = false, 3000);
    })
    .catch(() => {
      /* do nothing */
    });
}
</script>
