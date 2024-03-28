const apiKey = '4cca266bd9c5479eb97b59276c6dba20';

async function getRandomRecipies() {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`
  );
  const data = await res.json();

  console.log(data);
}

getRandomRecipies();
