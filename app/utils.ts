export const RANDOM_IMAGES = [
  "air-balloon-holiday-tourism-2-svgrepo-com",
  "air-balloon-holiday-tourism-svgrepo-com",
  "bag-holiday-tourism-2-svgrepo-com",
  "bus-holiday-tourism-2-svgrepo-com",
  "bus-holiday-tourism-svgrepo-com",
  "calendar-holiday-tourism-svgrepo-com",
  "car-holiday-tourism-svgrepo-com",
  "coconut-holiday-tourism-svgrepo-com",
  "holiday-island-tourism-svgrepo-com",
  "holiday-map-tourism-2-svgrepo-com",
  "holiday-meal-tourism-svgrepo-com",
  "holiday-plane-tourism-svgrepo-com",
  "holiday-ship-tourism-2-svgrepo-com",
  "holiday-ship-tourism-svgrepo-com",
  "holiday-submarine-tourism-svgrepo-com",
  "holiday-swimming-goggles-tourism-svgrepo-com",
  "holiday-tourism-train-svgrepo-com",
  "holiday-tourism-travel-svgrepo-com",
]

export function getRandomImageKey() {
  return Math.floor(Math.random() * RANDOM_IMAGES.length);
}

export function getRandomImage(imageKey: number) {
  const index = imageKey % RANDOM_IMAGES.length;
  return RANDOM_IMAGES[index];
}

interface getAnimateInCodeParams {
  animateFrom: string,
  animateTo: string,
  delay?: number,
  duration?: number,
  ease: string
}

export function getAnimateInCode({animateFrom, animateTo, delay, duration, ease}: getAnimateInCodeParams) {


  return `<AnimateIn 
  from="${animateFrom}" 
  to="${animateTo}"${delay ? `
  delay=${delay}
  ` : ''}${duration ? `
  duration={${duration}}` : ''}${ease === "ease-in-out" ? "" : `
  style={{transitionTimingFunction:"${ease}"}}`}
>
  Animate In!
</AnimateIn>`
}