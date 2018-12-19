export const getElementValueFromResponse = (response, element, elementNumb) => {
  const xmlDoc = new DOMParser().parseFromString(response.data, 'text/xml');
  return xmlDoc.getElementsByTagName(element)[elementNumb].textContent;
};

export const getAllElementsValuesFromResponse = (response, element) => {
  const xmlDoc = new DOMParser().parseFromString(response.data, 'text/xml');
  const elementsArray = Array.from(xmlDoc.getElementsByTagName(element));
  return elementsArray.map(el => el.innerHTML);
};
