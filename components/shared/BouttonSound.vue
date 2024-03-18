<script setup lang="ts">
const { isPlaying, play, stop } = useAudio("background");
</script>

<template>
  <ButtonRound
    size="small"
    class="absolute left-8 top-8"
    @click="isPlaying ? stop() : play()"
  >
    <img
      v-if="isPlaying"
      src="~assets/svg/icons/icon-volume.svg"
      class="w-7"
      alt="volume icon"
    />

    <img
      v-if="!isPlaying"
      src="~assets/svg/icons/icon-volume-x.svg"
      class="w-7"
      alt="volume icon"
    />
  </ButtonRound>
</template>
