const apiUrl = "https://api.thecatapi.com/v1/images/search";

export const getURLRandomCat = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Ошибка запроса по адресу ${apiUrl}, ${apiUrl.status}`);
    }
    const responseJSON = await response.json();
    return responseJSON[0].url;
  } catch (error) {
    throw new Error(error);
  }
};
