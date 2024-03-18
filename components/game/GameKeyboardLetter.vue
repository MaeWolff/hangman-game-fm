<script setup lang="ts">
type GameKeyboardLetterProps = {
  letter: string;
};

const props = defineProps<GameKeyboardLetterProps>();
const emit = defineEmits(["clickKeyboardLetter"]);
const { play } = useAudio("pop-bubble");

function onClick() {
  play();
  emit("clickKeyboardLetter", props.letter);
}
</script>

<template>
  <button
    @click="onClick"
    class="rounded-lg bg-white p-6 text-2xl uppercase text-game-dark-navy hover:bg-slate-300 disabled:cursor-default disabled:opacity-25 md:px-8 md:text-4xl lg:px-12"
  >
    {{ props.letter }}
  </button>
</template>
