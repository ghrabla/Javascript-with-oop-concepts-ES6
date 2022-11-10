// classes
class Book{
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getbookinfo(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
    getage(){
        const years = new Date().getFullYear() - this.year;
        return `the book ${this.title} have ${years} years old`
    }
    revise(newYear){
        this.year = newYear;
        this.revised = true;
     }
    // even when i create instance from the class static method does not excute
    static toppeople(){
        return 'baba & mama'
    }
}


// instantiate object
const book1 = new Book('Book one ', 'john doe','2013')

console.log(book1)
book1.revise('2019')

console.log(book1); 

console.log(Book.toppeople());