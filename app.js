function theName() {

let myName = prompt("what is your name?")
document.write("Nice to meet you, " + myName );

let doGundam = prompt("Do you like Coding?")
if (doGundam == "yes") {
    alert("Yay")
    document.write(", I do to! ");
}
else {
    alert("Please try again!")
    document.write(" Wrong Answer! "); }
    
}

function displayImg() {

  let starss = prompt("how many images do you want to see?")
  for (let i = 1; i <= starss; i++){
  var src = "https://p-bandai.com/img/us/p/m/N2604206001001_001.jpg";
  showImages("https://p-bandai.com/img/us/p/m/N2604206001001_001.jpg", 200,200, "Image");
  }
}

function showImages(src, width, height, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;
  document.body.appendChild(img);

}
    
function myFunction() {
  let text;
  if (confirm("Press a button!") == true) {
    text = "You are a WINNER!!!";
  } else {
    text = "Oops";
  }
  document.getElementById("demo").innerHTML = text;
}

//  for(let i = 0; i < 5; i++)  {
//     console.log('Loop' + i);
//     }

//     function babo() {
//         let time = prompt("What is the babo?");

//         if (time > 1 && time <= 18) {
//         document.write("Babo is Babo",);
//         return;
//         }
//     else
//         alert("that is an invalid number,")
//     babo()
//     }

function myShuffle() {
  let myPokemon = ["Pikachu", "Charmander", "Squirtle", "Bulbasaur"];
  document.getElementById("demo").innerHTML = myPokemon[getRandomInt(4)];
}

function pokeLoop() {
  let myPokemon = ["Pikachu", "Charmander", "Squirtle", "Bulbasaur"];
  //    for (let i = 0; i < myPokemon.length; i++) {
  //    document.getElementById("demo").innerHTML = myPokemon[i];
  // }
  let list = document.getElementById("demo");
  myPokemon.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}