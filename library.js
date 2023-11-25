class Book {
    constructor(title, author = "Unknown Author", available = true){
        this.title = title;
        this.author = author;
        this.available = available;
    }
}
class Library {
    constructor(isOpen = true){
        this.isOpen = isOpen;
        this.books = []; //Each array item is a "Book" object {"title":"","author":"","available":true}.
    }
    addBook(bookInfo){
            
        if (bookInfo === null || bookInfo ==="") return "Please enter a title when adding a book.";
        if (typeof bookInfo !=="object"){
            let tempString = `${bookInfo}`;
            let tempBook = new Book(tempString);
            this.books.push(tempBook);
            return `Added "${tempBook.title}" to the library`;
        }
        if (Array.isArray(bookInfo)){
            this.books = this.books.concat(bookInfo);
        } else {
            this.books.push(bookInfo);
            return `Added "${bookInfo.title}" to the library`;
        }
    }

    checkOutBook(title){
        if (title === null || title ==="") return "Please enter a title when checking out a book.";
        
        //Create a better search function
        for (const book of this.books){
            if (book.title === title){
                if (book.available){
                    book.available = false;
                    console.log(`${title} is now checked out.`);
                    return true;
                }
                console.log(`Sorry ${title} has already been checked out.`);
                return false;
            }
        }
        console.log(`${title} was not found in our Library.`);
        return false;
    }

    //Cycles through the "this.books" array and returns an array with the title of each object.
    getAvailableBooks(){
        let titleArray = [];
        for (let book of this.books){
            if (book.available === true) titleArray.push(book);
        }
        return titleArray;
    }
    getLibraryList(){
        //let titleArray = [];
        //for (let book of this.books){
        //    titleArray.push(book);
        // }
        //This is the same as above with an O(1):
        let titleArray = this.books.map(book => book);
        return titleArray;
    }
    get totalBooks(){
        return this.books.length
    }
    recieveBookShipment(jsonFile){
        let bookList;
        console.log (`Attempting to receive shipment...\n`);
        try{
            bookList = JSON.parse(jsonFile);
        }catch(e) {
            console.log(`Error while recieving shipment list.\n - Unable to parse Booklist\nDetails:\n${e}`);
            return "Error";
        }
        try{
            let booksAdded = bookList.books.map(book => book)
            this.addBook(booksAdded);
            console.log(`***\nShipment successful\n`)
            return booksAdded;
        } catch (e){
            console.log(`Error while recieving shipment list.\n - Unable to Add books to list\nDetails:\n${e}`);
            return;

        }
    }
}

//************************************************************************************ */
const THE_JSON_CATALOGUE = `
{"books":
    [
        {
            "title": "Eloquent JavaScript",
            "author": "Marijn Haverbeke",
            "available": true
        },
        {
            "title": "Grokking the Coding Interview",
            "author": "Author Title",
            "available": true
        },
        {
            "title": "Catcher in the Rye",
            "author": "J.D. Salinger",
            "available": true
        },
        {
            "title": "How to create a successful coding bootcamp",
            "author": "Ludo Fourrage",
            "available": true
        }
    ]
}`
const myLibrary = new Library(true);


function listAvailableBooks(bookLibrary = new Library){
    const bookArray = bookLibrary.getAvailableBooks()
    let bookList = `* * * * * * * * *\nList of available books:\n\n`;
    for (let book of bookArray){
        bookList += `"${book.title}" - ${book.author}\n`
    }
    console.log(bookList + "(END OF LIST)\n\n\n\n")
}

function listAllBooks(bookLibrary = new Library){
    const bookArray = bookLibrary.getLibraryList()
    let bookList = "* * * * * * * * *\nList of all books:\n\n"
    for (let book of bookArray){
        let checkText = () => {
            if (book.available) return "[Available]";
            return "[Checked Out]";
        };
        
        bookList += `"${book.title}" - ${book.author} ${checkText()}\n`
    }
    console.log(bookList + "(END OF LIST)\n\n\n\n")

}


// Tests
//Precursor text:
const preText = `\n*****************************
*****************************************
The following code will 
1-Receive a set of books into a library,
2-List the entire library catalogue
3-Check out 1 book
4-List all books that are available
5-Re-List the entire library catalogue\n
**********************************************\n\n\n
`
console.log(preText);
console.log(myLibrary.recieveBookShipment(THE_JSON_CATALOGUE));
console.log(`There are currently ${myLibrary.books.length} books in the library's database.\n\n\n`);
listAllBooks(myLibrary);

myLibrary.checkOutBook("Eloquent JavaScript")

listAvailableBooks(myLibrary);
listAllBooks(myLibrary);