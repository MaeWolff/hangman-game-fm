<template>
  <main class="flex w-full items-center justify-center">
    <div
      class="shadow-game relative flex h-fit w-full max-w-[560px] flex-col items-center gap-14 rounded-[48px] bg-gradient-to-t from-[#344ABA] to-[#00147983] px-9 py-16"
    >
      <h1 class="absolute -top-12">
        <NuxtImg src="assets/logo.svg" alt="logo hangman-game" />
      </h1>

      <button
        @click="$router.push('/game/choose-category')"
        class="button-game-secondary flex h-[145px] w-[145px] items-center justify-center rounded-full bg-gradient-to-b from-[#FE71FE] to-[#7199FF] transition-all duration-300 hover:bg-gradient-to-b hover:from-[#FE95FE] hover:to-[#A9ADFF]"
      >
        <img src="~assets/svg/icons/icon-play.svg" />
      </button>

      <button
        @click="$router.push('/how-to-play')"
        class="button-game-default rounded-full bg-game-blue px-16 py-4 text-2xl uppercase transition-all duration-300 hover:bg-[#5B8AFF]"
      >
        How to play?
      </button>
    </div>
  </main>
</template>
