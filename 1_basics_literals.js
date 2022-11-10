// literales

// const s1 = "hello";
// console.log(typeof s1)

// const s2 = new String("hello")
// console.log(typeof s2)

// console.log(window)
// alert("hi")
// console.log(navigator.appVersion)
const book1 = {
    title:"mein kampf",
    author: "hitler",
    year: "1922" ,
    getbookinfo: function(){
        return `${book1.title} was written by ${book1.author} in ${book1.year}`
    }
}
const book2 = {
    title:"my battle",
    author: "kamal ghrabla",
    year: "2022" ,
    getbookinfo: function(){
        return `${book2.title} was written by ${book2.author} in ${book2.year}`
    }
}

// console.log(book1.getbookinfo()) 
// console.log(Object.values(book2)) 
// console.log(Object.keys(book2)) 