export const updateURL = (searchParams: URLSearchParams) => {
  const queryString = searchParams.toString().replace(/\+/g, "%20").trim();
  const newUrl = `${window.location.pathname}?${queryString}`;
  window.history.pushState({ path: newUrl }, "", newUrl);
};
