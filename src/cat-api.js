const API_KEY = 'live_Ce2S2pheTV7R2gnBlFRtklY5u9wKNMGaZgC51R7aoncwhzexcyw2fMTeLQfLMzLm';

export async function fetchBreeds() {
  const response = await fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch breeds');
  }

  const breeds = await response.json();
  return breeds;
}

export async function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  const response = await fetch(url, {
    headers: {
      'x-api-key': API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch cat');
  }

  const cats = await response.json();
  return cats[0];
}
