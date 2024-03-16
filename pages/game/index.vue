<script setup lang="ts">
import useGameStore, { MAX_LIFE } from "../../stores/useGameStore";

const categoryName = useQueryParam("category");
const game = useGameStore();

const alphabet = generateAlphabet();

onMounted(() => game.initializationWithCategory(categoryName as string));

function handleClickKeyboardLetter(letter: string) {
  const isCorrectLetter = game.selectedWord.name.includes(letter);

  if (isCorrectLetter) {
    game.updateCorrectLetters(letter);
  }

  if (!isCorrectLetter) {
    game.loseLife();
  }

  game.updateUsedLetters(letter);
}

watchEffect(() => {
  if (!game.selectedWord.name) return;

  const isWordEqual = isWordEqualToCorrectLetters({
    selectedWord: game.selectedWord.name,
    correctLetters: game.correctLetters,
  });

  if (isWordEqual) {
    game.setGameState("win");
  }
});
</script>

<template>
  <header class="flex w-full flex-row items-center justify-between">
    <div class="flex flex-row items-center gap-4 md:gap-10">
      <ButtonRound size="small" @click="$router.back()">
        <img src="~assets/svg/icons/icon-back.svg" />
      </ButtonRound>

      <h1
        class="bg-gradient-to-b from-[#67B6FF] to-white bg-clip-text text-5xl text-transparent md:text-6xl"
      >
        {{ categoryName }}
      </h1>
    </div>

    <div class="flex flex-row items-center gap-4 md:gap-10">
      <GameLifeBar :max-life="MAX_LIFE" :life="game.life" />
      <img src="~assets/svg/icons/icon-heart.svg" />
    </div>
  </header>

  <main
    class="flex min-h-[70vh] w-full flex-col items-center gap-12 md:gap-24 lg:gap-48"
  >
    <GameWord
      :word="game.selectedWord.name"
      :correctLetters="game.correctLetters"
    />

    <section class="flex h-fit flex-wrap gap-4 md:max-w-[75%]">
      <GameKeyboardLetter
        v-for="letter in alphabet"
        @clickKeyboardLetter="handleClickKeyboardLetter"
        :letter="letter"
        :disabled="game.usedLetters.includes(letter)"
      />
    </section>
  </main>

  <GameModal
    :selected-word="game.selectedWord.name"
    :game-state="game.gameState"
    :reset="game.reset"
    :continue="() => game.initializationWithCategory(categoryName as string)"
  />

  <GradientBackground />
</template>
