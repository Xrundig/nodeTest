let fortunes = [
  "You will get a surprise",
  "Something exciting is waiting for you",
  "Hi",
];

exports.getFortune = function(){
  let numberFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[numberFortune];
}
