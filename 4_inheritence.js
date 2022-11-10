// inhertance

// constructor
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

// magazine constructor
function Magazine(title,author,year,month){
    Book.call(this,title,author,year);
    this.month = month;
}
// inherit prototype
Magazine.prototype = Object.create(Book.prototype);

// instantiate magazine object
const mag1 = new Magazine('Mag one', 'john doe', '2018','jan')

// use magazine constructor
Magazine.prototype.constructor = Magazine

console.log(mag1);  
// console.log(mag1.getbookinfo()); 