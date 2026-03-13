// Story Elements
const storyTitle = document.querySelector("#story-title");
const storyDescription = document.querySelector("#story-description");

function getStoriesFile() {
  const locale = navigator.language || navigator.userLanguage || "";
  const normalizedLocale = locale.toLowerCase();

  return normalizedLocale.startsWith("es") ? "./stories-es.json" : "./stories.json";
}

// Story Data Loading
async function loadStory() {
  const response = await fetch(getStoriesFile());
  const data = await response.json();
  const stories = data.stories;

  const randomNumber = Math.floor(Math.random() * stories.length);
  const story = stories[randomNumber];

  storyTitle.textContent = story.title;
  storyDescription.textContent = story.description;
}

// App Start
loadStory();
