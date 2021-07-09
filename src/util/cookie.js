export const setCookie = (cookieName, value, exdays) => {
  const exDate = new Date();
  exDate.setDate(exDate.getDate() + exdays);
  const cookieValue =
    escape(value) + (exdays == null ? "" : "; expires=" + exDate.toUTCString());
  document.cookie = cookieName + "=" + cookieValue;
};

export const getCookie = (cookieName) => {
  cookieName = cookieName + "=";
  const cookieData = document.cookie;
  const start = cookieData.indexOf(cookieName);
  let cookieValue = "";
  if (start != -1) {
    start += className.length;
    const end = cookieData.indexOf(";", start);
    if (end == -1) end = cookieData.length;
    cookieValue = cookieData.substring(start, end);
  }
  return unescape(cookieValue);
};
