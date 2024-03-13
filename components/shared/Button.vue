<script lang="ts" setup>
type ButtonProps = {
  variant: "primary" | "secondary";
};

const props = defineProps<ButtonProps>();
</script>

<template>
  <button
    class="rounded-full px-16 py-4 text-2xl uppercase transition-all duration-300"
    :class="{
      'button-game-default bg-game-blue hover:bg-[#5B8AFF] ':
        props.variant === 'primary',
      'button-game-secondary bg-[#DD7AFF] hover:bg-[#cc48f8]':
        props.variant === 'secondary',
    }"
  >
    <slot />
  </button>
</template>
