const apiUrl = "https://api.thecatapi.com/v1/images/search";

export const getRandomCatURL = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(
        `Error request by ${apiUrl}, status: ${response.status}`
      );
    }
    const responseJSON = await response.json();
    return responseJSON[0].url;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
