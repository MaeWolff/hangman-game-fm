<script setup lang="ts">
useSeoMeta({
  title: "Hangman Game | Frontendmentor",
});
</script>

<template>
  <main class="flex w-full items-center justify-center">
    <div
      class="shadow-game relative flex h-fit w-full max-w-[560px] flex-col items-center gap-14 rounded-[48px] bg-gradient-to-t from-[#344ABA] to-[#00147983] px-9 py-24"
    >
      <h1 class="absolute -top-24">
        <NuxtImg src="assets/logo.svg" alt="logo hangman-game" />
      </h1>

      <ButtonRound size="large" @click="$router.push('/game/choose-category')">
        <img src="~assets/svg/icons/icon-play.svg" alt="play icon" />
      </ButtonRound>

      <button
        @click="$router.push('/how-to-play')"
        class="button-game-default rounded-full bg-game-blue px-16 py-4 text-2xl uppercase transition-all duration-300 hover:bg-[#5B8AFF]"
      >
        How to play?
      </button>
    </div>
  </main>
</template>
