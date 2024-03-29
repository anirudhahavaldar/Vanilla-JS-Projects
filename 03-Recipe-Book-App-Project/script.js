const apiKey = '4cca266bd9c5479eb97b59276c6dba20';
const cards = document.getElementById('cards');

function getIng(rec) {
  let ele = '';
  rec.extendedIngredients.map((ing) => {
    ele = ele + ing.original;
  });

  return ele;
}

async function getRandomRecipies() {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`
  );
  const data = await res.json();

  data.recipes.map((rec) => {
    console.log(rec);
    cards.innerHTML += `
      <div class="card">
          <img
            src=${rec.image}
            alt=""
          />
          <h2>${rec.title}</h2>
          <p>
            <strong>Ingredients:</strong> ${getIng(rec)}
          </p>
          <a
            href=${rec.spoonacularSourceUrl}
            >View Recipe</a
          >
        </div>
    `;
  });
}

getRandomRecipies();

//
