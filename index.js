const rating = "★★★★★☆☆☆☆☆";
const total = 5;
const currentRating = 2;

console.log(rating.slice(0, currentRating) + rating.slice(total, 10 - currentRating));
