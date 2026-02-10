const books = [
   {
       title: "The Great Gatsby",
       author: "F. Scott Fitzgerald",
       yearPublished: 1925,
       genre: "Fiction"
   }, {
       title: "To Kill a Mockingbird",
       author: "Harper Lee",
       yearPublished: 1960,
       genre: "Fiction"
   }, {
       title: "1984",
       author: "George Orwell",
       yearPublished: 1949,
       genre: "Dystopian Fiction"
   }, {
       title: "Pride and Prejudice",
       author: "Jane Austen",
       yearPublished: 1813,
       genre: "Classic Romance"
   }, {
       title: "The Catcher in the Rye",
       author: "J.D. Salinger",
       yearPublished: 1951,
       genre: "Literary Fiction"
   }, {
       title: "The Lord of the Rings",
       author: "J.R.R. Tolkien",
       yearPublished: 1954,
       genre: "Fantasy"
   }, {
       title: "Harry Potter and the Sorcerer's Stone",
       author: "J.K. Rowling",
       yearPublished: 1997,
       genre: "Fantasy"
   }, {
       title: "The Hitchhiker's Guide to the Galaxy",
       author: "Douglas Adams",
       yearPublished: 1979,
       genre: "Science Fiction Comedy"
   }, {
       title: "Brave New World",
       author: "Aldous Huxley",
       yearPublished: 1932,
       genre: "Dystopian Fiction"
   }
];


const input = process.argv[2];
const year = Number(input); //convert to Number first to avoid coercion issues when checking isNan


if (isNaN(year)) { //checks if the input is not a number
    console.log("Please provide a valid year");
    process.exit(1); //stop running code if input is not valid
} 

const result = books.filter((book) => book.yearPublished > year);

if (result.length == 0) {
    console.log("No books found published after the given year");
} else {
    result.forEach((element) => console.log(`Books published after ${year} : ${element.title}, ${element.yearPublished}`));
}

