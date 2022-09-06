const API = async (URL, method = 'GET', body) => {
  try {
    const response = await fetch(URL, {
      method,
      headers: {
        'X-RapidAPI-Key': '473c6c45a9msh7d7a1c6e7e83247p11b3fbjsndb18d5346b6e',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
      },
      body: JSON.stringify(body),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export default API;
