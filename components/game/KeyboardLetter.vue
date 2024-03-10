<script setup lang="ts">
type KeyboardLetterProps = {
  letter: string;
};

const props = defineProps<KeyboardLetterProps>();
</script>

<template>
  <button
    @click="$emit('clickKeyboardLetter', props.letter)"
    class="rounded-lg bg-white p-6 text-2xl uppercase text-game-dark-navy hover:bg-slate-300 disabled:cursor-default disabled:opacity-25 md:px-8 md:text-4xl lg:px-12"
  >
    {{ props.letter }}
  </button>
</template>
