let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    // console.log(`${book.title} by ${book.author}`)
    return {
        summary:`${book.title} by ${book.author}`,
        pageCountSummary:`${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)
console.log(bookSummary.pageCountSummary)


let temp = 6
console.log(temp)
temp += 3
console.log(temp)