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
        class="flex rounded-xl bg-game-blue px-4 py-2 text-white lg:px-8"
      >
        {{ letter }}
      </p>

      <div
        v-else-if="letter === ' '"
        key="space"
        class="flex items-center justify-center"
        style="width: 3rem"
      >
        &nbsp;
      </div>

      <div
        v-else
        class="h-[90px] w-[90px] rounded-xl bg-game-blue text-transparent opacity-35"
      />
    </template>
  </section>
</template>
