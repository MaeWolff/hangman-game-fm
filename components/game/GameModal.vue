<script setup lang="ts">
type GameModalProps = {
  isGameFinished: boolean;
  gameState: "win" | "lose";
};

const props = defineProps<GameModalProps>();
</script>

<template>
  <Dialog :open="props.isGameFinished">
    <template #title>
      <img
        v-if="props.gameState === 'win'"
        src="~assets/svg/title-you-win.svg"
        class="mx-auto w-2/3 md:w-1/2"
      />
      <img
        v-if="props.gameState === 'lose'"
        src="~assets/svg/title-you-lose.svg"
        class="mx-auto w-2/3 md:w-1/2"
      />
    </template>
    <template #content>
      <div class="flex flex-col gap-4 md:gap-8">
        <Button @click="" variant="primary">Continue</Button>
        <Button
          @click="$router.push('/game/choose-category')"
          variant="primary"
        >
          New category
        </Button>
        <Button @click="$router.push('/')" variant="secondary">
          Quit game
        </Button>
      </div>
    </template>
  </Dialog>
</template>
