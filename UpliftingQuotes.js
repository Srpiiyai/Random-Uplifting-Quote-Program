const quotes = {
  'Optimistic Quote': ['Keep your face to the sunshine and you cannot see the shadows - Hellen Keller', 'If you want the rainbow, you got put up with the rain - Dolly Parton', 'A positive attitude causes a chain reaction of positive thoughts, events and outcomes - Wade Boggs'],
  'Action Oriented Quote': ['The greatest pleasure in life is doing what people say you cannot do - Walter Bagehot', 'The secret of getting ahead is getting started - Mark Twain', 'Action is the foundational key to all success - Pablo Picasso'],
  'Resilience Quote': ['Success is not final, failure is not fatal: it is courage to continue that counts - Winston Churchill', 'Our greatest glory is not in never falling, but in rising every time we fall - Confucius', 'I can be changed by what happens to me. But I refuse to be reduced by it - Maya Angelou'],
  'Self-Belief Quote': ["You're braver than you believe, stronger than you seem, and smarter than you think - A.A. Milne", 'Love yourself first and everything else falls into line - Lucille Ball', 'You were born to be real, not to be perfect - Unknown', 'The future belongs to those who believe in the beauty of their dreams - Eleanor Roosevelt'],
  'Leadership Quote': ['If you want to lift yourself up, lift up someone else - Booker T. Washington', 'As we look ahead into the next century, leaders will be those who empower others - Bill Gates', 'Leadership is action, not position - Margaret Wheatley'],
  'Overcoming Fear Quote': ["Everything you've ever wanted is sitting on the other side of fear - Les Brown", 'He who is not everyday conquering some fear has not learned the secret of life - Ralph Waldo Emerson', 'Do not fear mistakes. You will know failure. Continue to reach out - Benjamin Franklin', 'Do the thing you fear to do and keep on doing it… that is the quickest and surest way ever yet discovered to conquer a fear - Dale Carnegie', 'When you come out of a storm you won’t be the same person that walked in. That’s what the storm is all about - Haruki Murakami']
}

function getRandomQuote(obj) {
  const categories = Object.keys(obj);

  const randomCategoryIndex = Math.floor(Math.random() * categories.length);
  const categoryName = categories[randomCategoryIndex];
  const quotesArray = obj[categoryName];

  const randomQuoteIndex = Math.floor(Math.random() * quotesArray.length);
  const finalQuote = quotesArray[randomQuoteIndex];

  return `${categoryName}:\n  ${finalQuote}`;
}

const randomQuote = getRandomQuote(quotes);

console.log(randomQuote)