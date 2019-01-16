function theBeatlesPlay(musicians, instruments) {
  var stuff = [];

  for (var i = 0; i < musicians.length; i++) {
    stuff.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return stuff;
}

// function johnLennonFacts(facts) {
//   var i = 0;
//   while (i < facts.length) {
//     facts.push(facts[i] + "!!!");
//   }
//   return facts;
// }
