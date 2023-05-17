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

    const character = {
      img: data.image,
      name: data.name,
      status:data.status,
      gender: data.gender,
      origin: data.origin.name,
      species: data.species,
     }

    cardView(character)
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

  clone.querySelector('.card-body-img').setAttribute('src' , character.img);
  clone.querySelector('.card-body-title').innerHTML = `${character.name}`;
  clone.querySelector('.card-body-text').textContent = character.origin;
  clone.querySelectorAll('.card-footer-social h3')[0].textContent = character.species;
  clone.querySelectorAll('.card-footer-social h3')[1].textContent = character.gender;
  clone.querySelectorAll('.card-footer-social h3')[2].textContent = character.status;


  fragment.appendChild(clone)
  flex.appendChild(fragment)
}
