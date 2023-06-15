const card = document.querySelector(".container");

async function getData() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  return data.results;
  //   console.log(data.results);
}
getData();
render();
async function render() {
  const pers = await getData();
  console.log(pers);

  card.innerHTML = "";
  pers.forEach((item) => {
    console.log(item, "dsfs");
    card.innerHTML += `
     <div class="card">
     
        <div class="card-image">
          <img src="${item.image}" alt="" />
        </div>
        <div class="card-description">
          <p class="text-title">${item.name}</p>
          <p class="text-body"></p>
        </div>
      </div>
      `;
  });
  //   console.log(pers);
}
render();
