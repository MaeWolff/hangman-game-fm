<script setup>
const explanations = [
  {
    number: "01",
    title: "Choose a category",
    description:
      "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
  },
  {
    number: "02",
    title: "Guess letters",
    description:
      "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.",
  },
  {
    number: "03",
    title: "Win or loose",
    description:
      "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
  },
];
</script>

<template>
  <header
    class="flex w-full flex-row items-center justify-between lg:grid lg:grid-cols-[auto_auto_auto]"
  >
    <ButtonRound size="small" @click="$router.back()">
      <img src="~assets/svg/icons/icon-back.svg" alt="back icon" />
    </ButtonRound>

    <h1
      class="bg-gradient-to-b from-[#67B6FF] to-white bg-clip-text text-5xl text-transparent md:text-8xl lg:text-9xl"
    >
      How to play?
    </h1>
  </header>

  <main class="min-h-[70vh] w-full">
    <section class="flex w-full flex-col justify-center gap-6 lg:flex-row">
      <ExplanationCard
        v-for="(explanation, index) in explanations"
        :key="index"
        :number="explanation.number"
        :title="explanation.title"
        :description="explanation.description"
      />
    </section>
  </main>
</template>
