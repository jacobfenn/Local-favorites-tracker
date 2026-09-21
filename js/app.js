const myFavorite = {
  name: 'Starbucks on University Drive',
  category: 'coffee',
  rating: 5,
  notes: 'Great study spot with fast WiFi',
  dateAdded: 'May 2026'
};

console.log(myFavorite);
console.log(myFavorite.name);
console.log(myFavorite.rating);



const displayText = myFavorite.name + ' - Rating: ' + myFavorite.rating + '/5';
console.log(displayText);



console.log(typeof myFavorite.name);
console.log(typeof myFavorite.category);
console.log(typeof myFavorite.rating);
console.log(typeof myFavorite.notes);
console.log(typeof myFavorite.dateAdded);


const placeName = 'Starbucks';
const rating = 5;
console.log(placeName + ' - ' + rating + '/5');
console.log('⭐'.repeat(rating) + ' ' + placeName);


function greetFavorite(placeName, rating) {
    console.log(placeName + ' has ' + rating + ' stars!');
}


greetFavorite('Starbucks', 5);

const nameInput = document.getElementById('name');
console.log(nameInput.value);  // what the user typed





const practiceForm = document.getElementById('add-favorite-form');

function handleSubmit(event) {
    event.preventDefault();  // stopped page reloud
    console.log('You typed: ' + nameInput.value);
}

practiceForm.addEventListener('submit', handleSubmit);
