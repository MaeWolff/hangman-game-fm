const APP_PATHS = {
  home: () => "/",
  howToPlay: () => "/how-to-play",
  chooseCategory: () => "/game/choose-category",
  game: (categoryName: string) => `/game?category=${categoryName}`,
};

export default APP_PATHS;
