const ASCII_CODE_OF_LETTER_A = 97;

export default function generateAlphabet(): string[] {
  return Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(ASCII_CODE_OF_LETTER_A + i),
  );
}
