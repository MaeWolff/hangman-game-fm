<script setup lang="ts">
type GameLifeBarProps = {
  maxLife: number;
  life: number;
};

const props = defineProps<GameLifeBarProps>();

function getLifePercent() {
  return (props.life / props.maxLife) * 100;
}
</script>

<template>
  <progress
    class="h-4 w-[80px] rounded-full border-[3px] border-white md:w-[140px] [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-game-blue [&::-webkit-progress-value]:transition-all"
    :max="props.maxLife"
    :value="props.life"
    :style="{ width: getLifePercent + '%' }"
  ></progress>
</template>
