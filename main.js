console.log('holi')

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};


document.addEventListener('DOMContentLoaded', () => {
  const radom = getRandomInt(1,201)
  fetchData(radom)
})

const fetchData = async(id) => {
  try {
    const res = await fetch (`https://rickandmortyapi.com/api/character/${id}`)
    const data = await res.json()
    cardView(data)
  } catch (error) {
    console.log(error)
  }
}

const cardView = (character) => {
  console.log(character)
  const flex = document.querySelector('.flex');
  const template = document.querySelector('#template-card').content;
  const clone = template.cloneNode(true);
  const fragment = document.createDocumentFragment();

  clone.querySelector('.card-body-img').setAttribute('src' , character.image)

  fragment.appendChild(clone)
  flex.appendChild(fragment)
}
