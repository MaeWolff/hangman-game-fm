<script lang="ts" setup>
type ButtonRoundProps = {
  size: "small" | "large";
};

const props = defineProps<ButtonRoundProps>();
const $emit = defineEmits(["click"]);

const { play } = useAudio("pop-bubble");

function onClick() {
  play();
  $emit("click");
}
</script>

<template>
  <button
    @click="onClick"
    class="button-game-secondary flex h-[145px] w-[145px] items-center justify-center rounded-full bg-gradient-to-b from-[#FE71FE] to-[#7199FF] transition-all duration-300 hover:bg-gradient-to-b hover:from-[#FE95FE] hover:to-[#A9ADFF]"
    :class="{
      'h-[40px] w-[40px] md:h-[64px] md:w-[64px]': props.size === 'small',
      'h-[145px] w-[145px]': props.size === 'large',
    }"
  >
    <slot />
  </button>
</template>
