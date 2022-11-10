// constructor
function Book(title,author,year){
    // console.log('book init ...')
    this.title = title;
    this.author = author;
    this.year = year;
    this.getbookinfo = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}  

// instatiate an object
// we can do that M times by one function
const book3 = new Book("all things js","YTB AJZ","2022");
const book4 = new Book("good moments","alicia keys","2011");
 console.log(book3.getbookinfo())  
 console.log(book4.getbookinfo())  