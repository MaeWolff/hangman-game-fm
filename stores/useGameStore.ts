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
  },
});

export default useGameStore;
