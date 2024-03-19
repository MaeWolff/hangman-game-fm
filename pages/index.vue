<script setup lang="ts">
import APP_PATHS from "~/utils/appPaths";

useSeoMeta({
  title: "Hangman Game | Frontendmentor",
});
</script>

<template>
  <BouttonSound />

  <main class="mt-24 flex w-full items-center justify-center md:mt-0">
    <div
      class="shadow-game relative flex h-fit w-full max-w-[560px] flex-col items-center gap-14 rounded-[48px] bg-gradient-to-t from-[#344ABA] to-[#00147983] px-9 py-24"
    >
      <h1 class="absolute -top-14 md:-top-16">
        <NuxtImg
          src="assets/logo.svg"
          alt="logo hangman-game"
          class="w-[16rem]"
          placeholder
        />
      </h1>

      <ButtonRound
        size="large"
        @click="$router.push(`${APP_PATHS.chooseCategory}`)"
      >
        <img src="~assets/svg/icons/icon-play.svg" alt="play icon" />
      </ButtonRound>

      <Button variant="primary" @click="$router.push(`${APP_PATHS.howToPlay}`)">
        How to play?
      </Button>
    </div>
  </main>
</template>
