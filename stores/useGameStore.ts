export const MAX_LIFE = 8;

export type GameState = "starting" | "win" | "lose";

type State = {
  gameState: GameState;
  selectedWord: Word;
  usedLetters: string[];
  correctLetters: string[];
  life: number;
};

const useGameStore = defineStore("game", {
  state: (): State => ({
    gameState: "starting",
    selectedWord: { name: "", selected: false },
    usedLetters: [],
    correctLetters: [],
    life: MAX_LIFE,
  }),
  actions: {
    initializationWithCategory(categoryName: string) {
      const randomWord = getRandomWordByCategory(categoryName);

      this.gameState = "starting";
      this.life = MAX_LIFE;
      this.selectedWord = randomWord;
      this.correctLetters = [randomWord.name[0]];
      this.usedLetters = [randomWord.name[0]];
    },

    setGameState(state: GameState) {
      this.gameState = state;
    },
    updateUsedLetters(letter: string) {
      this.usedLetters.push(letter);
    },
    updateCorrectLetters(letter: string) {
      this.correctLetters.push(letter);
    },

    loseLife() {
      this.life--;
      if (this.life === 0) this.gameState = "lose";
    },

    reset() {
      this.gameState = "starting";
      this.selectedWord = { name: "", selected: false };
      this.usedLetters = [];
      this.correctLetters = [];
      this.life = MAX_LIFE;
    },
  },
});

export default useGameStore;
