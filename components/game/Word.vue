<script setup lang="ts">
type WordProps = {
  word: string;
  correctLetters: string[];
};

const props = defineProps<WordProps>();

const letters = computed(() => props.word.split(""));
const isLetter = (letter: string) => {
  return letter.trim() !== "";
};
</script>

<template>
  <section
    class="flex flex-wrap justify-center gap-2 text-3xl uppercase lg:text-7xl"
  >
    <template v-for="(letter, i) in letters" :key="i">
      <p
        v-if="props.correctLetters.includes(letter) && isLetter(letter)"
        :key="letter + i"
        class="flex min-w-[60px] items-center justify-center rounded-xl bg-game-blue px-4 py-2 text-white lg:px-8"
      >
        {{ letter }}
      </p>

      <div
        v-else-if="letter === ' '"
        key="space"
        class="flex w-7 items-center justify-center"
      >
        &nbsp;
      </div>

      <div
        v-else
        class="h-[90px] w-[60px] rounded-xl bg-game-blue text-transparent opacity-35 lg:w-[90px]"
      />
    </template>
  </section>
</template>
