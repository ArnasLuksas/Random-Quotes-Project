const button = document.querySelector('button');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const quoteList = [
  { text: 'Talk is cheap. Show me the code.', author: 'Linus Torvalds' },
  {
    text: 'Be yourself; everyone else is already taken.',
    author: 'Oscar Wilde'
  },
  {
    text:
      'Programs must be written for people to read, and only incidentally for machines to execute',
    author: 'Harold Abelson'
  },
  {
    text:
      'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.',
    author: 'Rick Cook'
  },
  {
    text:
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    author: 'John Woods'
  },
  {
    text: 'A friend is someone who knows all about you and still loves you.',
    author: 'Elbert Hubbard'
  },
  {
    text: 'Always forgive your enemies; nothing annoys them so much',
    author: 'Oscar Wilde'
  },
  {
    text:
      'To live is the rarest thing in the world. Most people exist, that is all.',
    author: 'Oscar Wilde'
  },
  {
    text:
      ' Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi'
  },
  {
    text:
      'It is better to be hated for what you are than to be loved for what you are not.',
    author: 'Andre Gide, Autumn Leaves'
  }
];

button.addEventListener('click', () => {
  const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
  quote.innerHTML = `<span>&#8220;</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${randomQuote.text}`;
  author.innerHTML = randomQuote.author;
  console.log(randomQuote);
});
