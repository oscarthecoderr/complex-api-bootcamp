document.querySelector('button').addEventListener('click',runIt)

function runIt(){
let choice = document.querySelector('input').value
console.log(choice)
let url = `https://superheroapi.com/api.php/10217557089079430/search/${choice}`
fetch(url)
.then (res => res.json())
.then((data) => {
  console.log(data)

  document.querySelector('h2').innerText = data.results[0].biography.publisher
  document.querySelector('h3').innerText= data.results[0].powerstats.speed
  document.querySelector('img').src = data.results[0].image.url



let word = data.results[0].biography.publisher
fetch(`http://www.omdapi.com/?apikey=74289840&t=${word}`)
.then(res => res.json)
.then((genre) => {
  console.log(genre)
  document.querySelector('p').innerText = data.genre
})


})

}


/// work on it with simeon. really fun