// prototypes
function Book(title,author,year){
    // console.log('book init ...')
    this.title = title;
    this.author = author;
    this.year = year;
    
}  
//  getinfo with prototype 
Book.prototype.getbookinfo = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
}
//  getage with prototype 
Book.prototype.getage = function(){
    const years = new Date().getFullYear() - this.year;
    return `the book ${this.title} have ${years} years old`
}
// revise / change year
Book.prototype.revise = function(newYear){
   this.year = newYear;
   this.revised = true;
}
// instatiate an object
// we can do that M times by one function
const book3 = new Book("all things js","YTB AJZ","2022");
const book4 = new Book("good moments","alicia keys","2011");
//  console.log(book3.getbookinfo())  
//  console.log(book4.getage()) 
// first values
console.log(book3); 
// change year value
book3.revise("2018")
// changed
console.log(book3); 