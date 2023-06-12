const requestOptions = {
  headers: {
    'x-api-key':
      'live_LrNQPY5bIN0SHp9Hiy3invtxFBF49wrfEDzln9OiNyaSaBHWj2qbtwIAXTo0ldLb',
  },
};

export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds', requestOptions).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    requestOptions
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
