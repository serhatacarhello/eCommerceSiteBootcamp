export const combineBaseUrl = (path) => {
  const url = import.meta.env.VITE_BASE_URL + path;
  return url;
};
