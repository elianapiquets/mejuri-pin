const all =
  "http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/shop_all.json";

const bracelets =
  "http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/bracelets.json";

const earrings =
  "http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com/earrings.json";

const fetchAll = async () => {
  const response = await fetch(all);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const fetchBracelets = async () => {
  const response = await fetch(bracelets);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const fetchEarrings = async () => {
  const response = await fetch(earrings);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchAll, fetchBracelets, fetchEarrings };
