const lyrics = 'Tume bondhu kala pakhi ame jeno ki. bosonto kale tomai bolte pari ni . sada sada kala kala';
const searchString = 'pakhi';
const lyricsLowerCase = lyrics.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchString);
console.log(doesExist);