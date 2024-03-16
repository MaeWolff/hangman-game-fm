export type GameState = "starting" | "win" | "lose";

type State = {
  gameState: GameState;
  selectedWord: Word;
  usedLetters: string[];
  correctLetters: string[];
};

const useGameStore = defineStore("game", {
  state: (): State => ({
    gameState: "starting",
    selectedWord: { name: "", selected: false },
    usedLetters: [],
    correctLetters: [],
  }),
  actions: {
    initializationWithCategory(categoryName: string) {
      const randomWord = getRandomWordByCategory(categoryName);

      this.gameState = "starting";
      this.selectedWord = randomWord;
      this.correctLetters = [randomWord.name[0]];
      this.usedLetters = [randomWord.name[0]];
    },

    setGameState(state: GameState) {
      this.gameState = state;
    },
    setSelectedWord(word: Word) {
      this.selectedWord = word;
    },
    updateUsedLetters(letter: string) {
      this.usedLetters.push(letter);
    },
    updateCorrectLetters(letter: string) {
      this.correctLetters.push(letter);
    },

    reset() {
      this.gameState = "starting";
      this.selectedWord = { name: "", selected: false };
      this.usedLetters = [];
      this.correctLetters = [];
    },
  },
});

export default useGameStore;
