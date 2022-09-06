import API from './API';

const challengeServices = {
  getPlayersList: (page) =>
    API(
      `https://free-nba.p.rapidapi.com/players?page=${page}&per_page=10`
    ).then((res) => res),
};
export default challengeServices;
