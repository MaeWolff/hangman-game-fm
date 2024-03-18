type AudioChoice = "pop-bubble" | "background";

const MAP_AUDIO_CHOICE_TO_SOUND_PATH: Record<AudioChoice, string> = {
  background: "/assets/sounds/background.mp3",
  "pop-bubble": "/assets/sounds/pop-bubble.mp3",
};

export default function useAudio(choice: AudioChoice) {
  const audio = ref<HTMLAudioElement>();
  const isPlaying = ref<boolean>(false);

  onMounted(
    () => (audio.value = new Audio(MAP_AUDIO_CHOICE_TO_SOUND_PATH[choice])),
  );

  const play = () => {
    if (!audio.value) return;

    audio.value.play();
    isPlaying.value = true;
  };

  const stop = () => {
    if (!audio.value) return;

    audio.value.pause();
    audio.value.currentTime = 0;
    isPlaying.value = false;
  };

  watchEffect(() => {
    if (isPlaying.value) {
      play();
    } else {
      stop();
    }
  });

  return { isPlaying, play, stop };
}
