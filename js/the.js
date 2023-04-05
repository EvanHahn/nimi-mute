const crel = (tagName, innerText) => {
  const result = document.createElement(tagName);
  result.innerText = innerText;
  return result;
};

const fragment = document.createDocumentFragment();
words.forEach(({ word, definitions }) => {
  fragment.appendChild(crel("dt", word));
  definitions.forEach((definition) => {
    fragment.appendChild(crel("dd", definition));
  });
});
document.querySelector(".word-list").appendChild(fragment);
