// This is the api key I signed up (free plan)
const siteUrl = "https://api.the-odds-api.com";
const apiKey = "8c827ac42fd594c66d49710bb2450e27";

export const sportsUrl = `${siteUrl}/v3/sports/?apiKey=${apiKey}`;
export const getOddsUrl = (sport, region = "us", mkt = "h2h") =>
  `${siteUrl}/v3/odds/?apiKey=${apiKey}&sport=${sport}&region=${region}&mkt=${mkt}`;

/*

  fetch(getOddsUrl(sports))
    .then((response) => response.json())
    .then((json) => setData(json.data))
    .catch(() => setData([]));

    */
