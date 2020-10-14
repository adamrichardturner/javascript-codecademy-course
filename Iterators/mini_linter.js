let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Split the string into words using space a delimiter (' ') and store this in an array
// called storyWords.
const storyWords = story.split(' ');

// Assign to betterWords a filtered array containing only values that do not include 
// words found within the unnecessaryWords array.
// Filter iterates through storyWords (using word as the iterator) and runs a boolean
// argument. In summary this filters out unnecessaryWords in the new array.
const betterWords = storyWords.filter(word => {
  return !unnecessaryWords.includes(word);
}
);

// howManyOverused is a new array that accepts each instance
// that overusedWords array members are found in storyWords.
// Logging the length of this new array determines how many overused words
// are present in the story.
const howManyOverused = storyWords.filter(word => {
  return overusedWords.includes(word);
})
// howManySentences uses filter on storyWords, iterating through each word
// and filtering out words in the array that include the char '.' OR '!' (denoating the end of a sentence)
// Logging howManySentences to the console will display the num of sentences in the story. 
const howManySentences = storyWords.filter(word => {
  if (word.includes('.') || word.includes('!')) {
    return word;
  }
})

// Word Count
console.log('Word count is: ' + storyWords.length);
// Sentence Count
console.log('Sentence count is: ' + howManySentences.length);
// Num of overused wowrds
console.log('Number of overused words: ' + howManyOverused.length);
// Better words as a single string
console.log(betterWords.join(' '));

