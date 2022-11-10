// object of protos
const bookProtos = {
    getbookinfo : function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    },
    getage : function(){
        const years = new Date().getFullYear() - this.year;
        return `the book ${this.title} have ${years} years old`
    }
}

// create object
// const book1 = Object.create(bookProtos);
// book1.title = 'book one ';
// book1.author = 'john doe ';
// book1.title = '2013';
const book1 = Object.create(bookProtos,{
    title : {value: 'book one '},
    author : {value:'kamal ghrabla'},
    year: {value: '2002'}
});
 

console.log(book1);