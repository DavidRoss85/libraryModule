# libraryModule
Nucamp Excercise:

What You'll Do
In this exercise, you will be creating a simple library system that manages books. 
You will use objects, constructors, properties, methods, a try/catch block, and JSON data to accomplish the task. 
You'll test and run your code using Node.
The library system will allow users to view available books, add new books, and check out books.



What You'll Learn
The main goals of this exercise are to:

Understand and apply concepts related to objects, constructors, and methods.
Practice working with JSON data.
Utilize error handling with a try/catch block.
Combine various elements of the week's learning to solve a realistic problem.

Instructions

Task 1: Define the Book Constructor
Set up your file: Open your course folder in VS Code, and create a new file called library.js. You'll write your code into this file.
Create a class and a constructor for Books: In your library.js file, define a class called Book and add a constructor method that takes in three parameters: title, author, and available.
Set a default parameter: Give the available parameter a default value of true.  
Set Properties: Inside the constructor, set these parameters as properties of the object

Task 2: Create Methods to Manage Books
Create a Library Object: This object should contain an array of books, called books, and methods to manage them.
Add Method: Create an addBook method to add a new book to the library when a patron donates a book.
Check Out Method: When a library patron requests a specific book by its title, check to see if it's available, and if so, check it out by marking it as unavailable. Create a checkOutBook method with a title parameter to do this.
Available Books Method: Create a getAvailableBooks method to list all available books on the library shelves.


Task 3: Use JSON Data to Add Books to the Library
JSON Data: Create a JSON string called newBooks to store data about a set of books that the library recently ordered and will be receiving from the warehouse.
Receive Books: Create a new function receiveBooks that parses the JSON data and then uses the library.addBook() method that you created in the last task to add each book to the library's shelves.