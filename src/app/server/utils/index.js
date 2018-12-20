export const getElementsValues = (response, element) => {
  const xmlDoc = new DOMParser().parseFromString(response.data, 'text/xml');
  const elementsArray = Array.from(xmlDoc.querySelectorAll(element));
  return elementsArray.map(el => el.innerHTML);
};
