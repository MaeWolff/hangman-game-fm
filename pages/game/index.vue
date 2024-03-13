<script setup lang="ts">
import useGameStore from "../../stores/useGameStore";

const categoryName = useQueryParam("category");
const game = useGameStore();

const alphabet = generateAlphabet();

function gameInitialization() {
  const randomWord = getRandomWordByCategory(categoryName as string);
  game.setSelectedWord(randomWord);

  game.updateCorrectLetters(randomWord.name[0]);
  game.updateUsedLetters(randomWord.name[0]);
}

onMounted(() => gameInitialization());

function handleClickKeyboardLetter(letter: string) {
  if (game.selectedWord.name.includes(letter)) {
    game.updateCorrectLetters(letter);
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

const isGameFinished = computed(() => game.gameState !== "starting");
</script>

<template>
  <header class="flex w-full flex-row items-center justify-between">
    <div class="lg:gap-18 flex flex-row items-center gap-10">
      <ButtonRound size="small" @click="$router.back()">
        <img src="~assets/svg/icons/icon-back.svg" />
      </ButtonRound>

      <h1
        class="bg-gradient-to-b from-[#67B6FF] to-white bg-clip-text text-5xl text-transparent md:text-6xl"
      >
        {{ categoryName }}
      </h1>
    </div>

    <div class="flex flex-row items-center gap-10">
      <img src="~assets/svg/icons/icon-heart.svg" />
    </div>
  </header>

  <main class="flex min-h-[70vh] w-full flex-col items-center gap-12 lg:gap-24">
    <Word
      :word="game.selectedWord.name"
      :correctLetters="game.correctLetters"
    />

    <section class="flex h-fit flex-wrap gap-4 md:max-w-[75%]">
      <KeyboardLetter
        v-for="letter in alphabet"
        @clickKeyboardLetter="handleClickKeyboardLetter"
        :letter="letter"
        :disabled="game.usedLetters.includes(letter)"
      />
    </section>
  </main>

  <GameModal :is-game-finished="isGameFinished" :game-state="game.gameState" />

  <GradientBackground />
</template>
../../stores/useGameStore../../store/useGameStore../../stores/useGameStore
