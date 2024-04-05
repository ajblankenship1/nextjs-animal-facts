const animals = {
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
const images =[];

for(let animal in animals){
  let image = (
   <img 
   onClick={() => alert("working")}
   key={animal}
   className="animal"
   alt={animal}
   src={animals[animal].image}
   aria-label={animal}
   role="button"
   />
  );
   images.push(image);
 }

 function displayFact(e){
  const animal =  e.target.alt;
   const index = Math.floor(Math.random() * animals[animal].facts.length);
   const funFact = animals[animal].facts[index];
   const p = document.getElementById("fact");
   p.innerHTML = funFact;
 }
