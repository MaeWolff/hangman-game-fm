<script setup>
const categoriesName = getCategoriesName();
</script>

<template>
  <header
    class="flex w-full flex-row items-center justify-between lg:grid lg:grid-cols-[auto_auto_auto]"
  >
    <ButtonRound size="small" @click="$router.back()">
      <img src="~assets/svg/icons/icon-back.svg" class="w-6 md:w-8" />
    </ButtonRound>

    <h1
      class="bg-gradient-to-b from-[#67B6FF] to-white bg-clip-text text-5xl text-transparent md:text-8xl lg:text-9xl"
    >
      Pick a category
    </h1>
  </header>

  <main class="min-h-[70vh] w-full">
    <section
      class="flex w-full flex-wrap justify-center gap-4 md:gap-8 lg:gap-12"
    >
      <NuxtLink
        v-for="categoryName in categoriesName"
        :key="categoryName"
        class="button-game-default flex w-full items-center justify-center rounded-2xl bg-game-blue px-4 py-5 text-xl uppercase hover:bg-[#5B8AFF] md:h-[140px] md:w-[300px] md:rounded-3xl md:text-5xl"
        :to="'/game?category=' + categoryName"
      >
        {{ categoryName }}
      </NuxtLink>
    </section>
  </main>
</template>
