import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const breedSelect = document.querySelector('.breed-select');
  const loader = document.querySelector('.loader');
  const error = document.querySelector('.error');
  const catInfo = document.querySelector('.cat-info');

  try {
    const breeds = await fetchBreeds();
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });

    new SlimSelect({
      select: breedSelect,
      placeholder: 'Select a breed',
      onChange: async (value) => {
        loader.style.display = 'block';
        catInfo.innerHTML = '';

        try {
          const cat = await fetchCatByBreed(value);
          const image = document.createElement('img');
          image.src = cat.url;

          const breedName = document.createElement('h2');
          breedName.textContent = cat.breeds[0].name;

          const description = document.createElement('p');
          description.textContent = cat.breeds[0].description;

          const temperament = document.createElement('p');
          temperament.textContent = `Temperament: ${cat.breeds[0].temperament}`;

          catInfo.appendChild(image);
          catInfo.appendChild(breedName);
          catInfo.appendChild(description);
          catInfo.appendChild(temperament);
        } catch (error) {
          console.error(error);
          showError();
        }

        loader.style.display = 'none';
      },
    });
  } catch (error) {
    console.error(error);
    showError();
  }

  function showError() {
    error.style.display = 'block';
  }
});
