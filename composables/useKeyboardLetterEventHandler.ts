type Props = {
  onKeydown(letter: string): void;
};

export default function useKeyboardLetterEventHandler({ onKeydown }: Props) {
  watchEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("keydown", (e: KeyboardEvent) => {
      const letter = e.key.toLowerCase();
      const isAlphabetKey = /[a-z]/.test(letter);

      if (!isAlphabetKey) return console.error("Error: use alphabet key.");

      return onKeydown(letter);
    });
  });
}
