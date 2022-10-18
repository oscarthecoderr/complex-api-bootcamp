document.querySelector("button").addEventListener("click", runIt);

function runIt() {
  let choice = document.querySelector("input").value;
 // console.log(choice);
  let url = `https://superheroapi.com/api.php/10217557089079430/search/${choice}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("h2").innerText =
        data.results[0].biography.publisher;
      document.querySelector("h3").innerText = data.results[0].powerstats.speed;
      document.querySelector("img").src = data.results[0].image.url;

      let word = data.results[0].biography.publisher;
      console.log(word);
      fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=2fd7d557&t=${word}`)
        .then(res => res.json())
        .then((data) => {
          console.log(data, "test");
          document.querySelector('p').innerText = data.Genre
        })
        .catch((error) => {
          console.log(error);
        });
    });
}

/// work on it with simeon. really fun
