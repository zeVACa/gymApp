export let timeInSeconds = 0;

export let incTimeInSeconds = () => {
  timeInSeconds += 1;
};

export let getTimeInSeconds = () => {
  return timeInSeconds;
};
