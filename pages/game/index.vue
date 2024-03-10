<script setup>
const categoryName = useQueryParam("category");
const selectedWord = ref({ name: "", selected: false });
const usedLetters = ref([]);
const correctLetters = ref([""]);

const alphabet = generateAlphabet();

function gameInitialization() {
  const randomWord = getRandomWordByCategory(categoryName);
  selectedWord.value = randomWord;

  correctLetters.value.push(randomWord.name[0]);
  usedLetters.value.push(randomWord.name[0]);
}

onMounted(() => gameInitialization());

function handleClickKeyboardLetter(letter) {
  if (selectedWord.value.name.includes(letter)) {
    correctLetters.value.push(letter);
  }

  usedLetters.value.push(letter);
}
</script>

<template>
  <header class="flex w-full flex-row items-center justify-between">
    <div class="flex flex-row items-center gap-10 lg:gap-24">
      <ButtonRound size="small" @click="$router.back()">
        <img src="~assets/svg/icons/icon-back.svg" />
      </ButtonRound>

      <h1
        class="bg-gradient-to-b from-[#67B6FF] to-white bg-clip-text text-5xl text-transparent md:text-8xl"
      >
        {{ categoryName }}
      </h1>
    </div>

    <div class="flex flex-row items-center gap-10">
      <div class="h-[8px] w-[140px] bg-white"></div>
      <img src="~assets/svg/icons/icon-heart.svg" />
    </div>
  </header>

  <main class="flex min-h-[70vh] w-full flex-col items-center gap-12 lg:gap-24">
    <Word :word="selectedWord.name" :correctLetters="correctLetters" />

    <section class="flex h-fit flex-wrap gap-4 md:max-w-[75%]">
      <KeyboardLetter
        v-for="letter in alphabet"
        @clickKeyboardLetter="handleClickKeyboardLetter"
        :letter="letter"
        :disabled="usedLetters.includes(letter)"
      />
    </section>
  </main>

  <GradientBackground />
</template>
