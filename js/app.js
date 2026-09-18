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
