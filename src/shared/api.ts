const BASE_URL = `https://disney_api.nomadcoders.workers.dev/characters`;

const fetchErrorCharacterDetailData = {
  id: 139,
  films: ['The Lion King', 'The Lion King (2019 film)'],
  name: 'Ahadi',
  imageUrl:
    'https://static.wikia.nocookie.net/disney/images/b/b3/Ahadihead.png',
  sourceUrl: 'https://disney.fandom.com/wiki/Ahadi',
};

export const fetchCharacters = async () => {
  try {
    const response = await fetch(`${BASE_URL}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Fetch characters error:', error);
    throw error;
  }
};

export const fetchCharacterDetail = async (characterId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${characterId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Fetch character detail error:', error);
    return fetchErrorCharacterDetailData;
  }
};
