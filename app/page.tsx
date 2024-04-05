'use client';
import Image from "next/image";
import styles from "./page.module.css";




const oceanAnimals = {
  dolphin: {
    image: 'https://cdn.creatureandcoagency.com/uploads/2014/06/Bottlenose-dolphin-facts-3.jpg',
    facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
  },
  lobster: {
    image: 'https://www.insidescience.org/sites/default/files/2021-09/lobster-aging.jpg',
    facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
  },
  starfish: {
    image: 'https://hips.hearstapps.com/hmg-prod/images/colorful-starfish-and-coral-reef-underwater-royalty-free-image-1698698257.jpg',
    facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
  }
}
;




const title = '';
//const background = <img className="background" alt="ocean" src="https://t3.ftcdn.net/jpg/01/23/88/82/240_F_123888205_Aynx9JqtCFUw5dKDJcheiAy472WlXLsY.jpg"/>
const oceanImages =[];

for(let animal in oceanAnimals){
  let image = (
   <img 
   onClick={displayFact}
   key={animal}
   className="animal"
   alt={animal}
   src={oceanAnimals[animal].image}
   aria-label={animal}
   role="button"
   />
  );
   oceanImages.push(image);
 }

 function displayFact(e){
  const animal =  e.target.alt;
   const index = Math.floor(Math.random() * oceanAnimals[animal].facts.length);
   const funFact = oceanAnimals[animal].facts[index];
   const p = document.getElementById("fact");
   p.innerHTML = funFact;
 }
 

//Jungle Animals
 const jungleAnimals = {
  jaguar:{
    image: 'https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2023/11/wildlife-3193850_1280-1024x682.jpg',
    facts:['Jaguars have the strongest bit of any cat on the planet.', 'Jaguars can grow up to 170cm long, not including their impressive tails which can be up to 80cm. ', 'Jaguars have black dots in the middle of some of their rosettes, whereas leopards don’t.', 'Jaguars are confident swimmers, known to cross large rivers.']
  },
  monkey:{
    image:'https://cff2.earth.com/uploads/2023/04/24134721/Smart-monkey-scaled.jpg',
    facts:['Monnkey fact 1', 'Monkey fact 2','Monkey fact 3', 'Monkey fact 4']
  },
  tucan: {
    image:'https://static.vecteezy.com/system/resources/previews/033/206/598/large_2x/colorful-tucan-bird-on-a-branch-with-red-berries-toucan-bird-on-a-branch-with-red-berries-in-the-forest-ai-generated-free-photo.jpg',
    facts:['Tucan fact 1', 'Tucan fact 2', 'Tucan fact 3']
  }
}
;
const jungleImages = [];

for(let animal in jungleAnimals){
  let image = (
   <img 
   onClick={displayJFact}
   key={animal}
   className="animal"
   alt={animal}
   src={jungleAnimals[animal].image}
   aria-label={animal}
   role="button"
   />
  );
   jungleImages.push(image);
 }

 function displayJFact(e){
  const animal =  e.target.alt;
   const index = Math.floor(Math.random() * jungleAnimals[animal].facts.length);
   const funFact = jungleAnimals[animal].facts[index];
   const p = document.getElementById("j-fact");
   p.innerHTML = funFact;
 }
 

 //Desert animals

 const desertAnimals = {
  rattlesnake:{
    image: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_90275963.jpg?crop=0%2C245%2C4000%2C2200&wid=4000&hei=2200&scl=1.0',
    facts:['snake 1','snake2','snake3']
  },
  owl:{
    image:'https://i.etsystatic.com/5391654/r/il/b853e5/1861485268/il_fullxfull.1861485268_qh1v.jpg',
    facts:['owl fact 1', 'owl fact 2','owl fact 3', 'owl fact 4']
  },
  lizard: {
    image:'https://cdn.theatlantic.com/thumbor/uW_N9v-A84RYJ7BTf399aJHUDLU=/0x0:1600x900/1600x900/media/img/mt/2016/11/Thorny_Christopher_Watson/original.jpg',
    facts:['lizard fact 1', 'lizard fact 2', 'lizard fact 3']
  }
}
;
const desertImages = [];

for(let animal in desertAnimals){
  let image = (
   <img 
   onClick={displayDFact}
   key={animal}
   className="animal"
   alt={animal}
   src={desertAnimals[animal].image}
   aria-label={animal}
   role="button"
   />
  );
   desertImages.push(image);
 }

 function displayDFact(e){
  const animal =  e.target.alt;
   const index = Math.floor(Math.random() * desertAnimals[animal].facts.length);
   const funFact = desertAnimals[animal].facts[index];
   const p = document.getElementById("d-fact");
   p.innerHTML = funFact;
 }
 


//rendering function 


export default function Home() {
  return (
    <main className={styles.main}>
      <h1>{title || "Click on an animal for a super fun fact!"}</h1>
      <div className="ocean-section">
        <h2>OCEAN ANIMALS</h2>
        <div className="animal-images">
           {oceanImages}
        </div>
        <p id="fact"></p>
      </div>
      <div className="jungle-section">
        <h2>JUNGLE ANIMALS</h2>
        <div className="animal-images">
           {jungleImages}
        </div>
        <p id="j-fact"></p>
      </div> 
      <div className="desert-section">
        <h2>DESERT ANIMALS</h2>
        <div className="animal-images">
           {desertImages}
        </div>
        <p id="d-fact"></p>
      </div> 
    </main>
  );
}
