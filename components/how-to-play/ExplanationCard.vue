<script setup lang="ts">
type ExplanationCardProps = {
  number: string;
  title: string;
  description: string;
};

const props = defineProps<ExplanationCardProps>();
</script>

<template>
  <article
    class="flex w-full flex-col gap-4 rounded-2xl bg-white p-8 text-[#887DC0] lg:max-w-[380px] lg:gap-10 lg:px-12 lg:py-16"
  >
    <header
      role="presentation"
      class="flex flex-row gap-4 text-2xl uppercase lg:flex-col lg:items-center lg:gap-10"
    >
      <h3 class="text-game-blue lg:text-7xl">{{ props.number }}</h3>
      <h2 class="text-game-dark-navy lg:text-4xl">{{ props.title }}</h2>
    </header>

    <p class="md:text-xl lg:text-center lg:text-2xl">
      {{ props.description }}
    </p>
  </article>
</template>
