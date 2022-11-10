// subclasses
class Book{
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getbookinfo(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

// magazine subclass
class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year,month);
        this.month = month;
    }
}

const mag1 = new Magazine('Book one ', 'john doe','2013',"feb")

console.log(mag1.getbookinfo())
