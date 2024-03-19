<script setup lang="ts">
import APP_PATHS from "~/utils/appPaths";
import type { GameState } from "../../stores/useGameStore";

type GameModalProps = {
  selectedWord: string;
  gameState: GameState;
  continue(): void;
  reset(): void;
};

const props = defineProps<GameModalProps>();
const router = useRouter();
const { reset } = useGameStore();

function handleNewCategory() {
  router.push(`${APP_PATHS.chooseCategory()}`);
  reset();
}

function handleQuitGame() {
  router.push(`${APP_PATHS.home()}`);
  reset();
}

const isGameFinished = computed(() => props.gameState !== "starting");
</script>

<template>
  <Dialog :open="isGameFinished">
    <template #title>
      <img
        v-if="props.gameState === 'win'"
        src="~assets/svg/title-you-win.svg"
        class="mx-auto w-2/3 md:w-1/2"
        alt="You win"
      />
      <img
        v-if="props.gameState === 'lose'"
        src="~assets/svg/title-you-lose.svg"
        class="mx-auto w-2/3 md:w-1/2"
        alt="You lose"
      />
    </template>
    <template #content>
      <p class="mb-8 text-center text-xl md:text-2xl">
        The selected word is:
        <span class="uppercase">{{ props.selectedWord }}</span>
      </p>
      <div class="flex flex-col gap-4 md:gap-8">
        <Button @click="props.continue" variant="primary">Continue</Button>
        <Button @click="handleNewCategory" variant="primary">
          New category
        </Button>
        <Button @click="handleQuitGame" variant="secondary"> Quit game </Button>
      </div>
    </template>
  </Dialog>
</template>
