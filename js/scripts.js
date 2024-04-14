const studentP = document.querySelector(".studentId");
const book = document.querySelector(".book");
const button = document.querySelector(".button");

//dynamically create a p element and append it to the studentId section in the body of index.html
function displayStudentId(){
    const studentId = document.createElement("p");
    studentId.textContent = 1228048;
    studentP.appendChild(studentId);
}
//full url to search for meditations by Marcus Aurelius, specifically the one published by Modern Library because the cover looks nice.
url = "https://openlibrary.org/search.json?q=meditations&author=marcus+aurelius&publisher=modern+library&fields=title,author_name,publisher,isbn"

//fetch the json file
fetch(url).then(respond => respond.json()).then(json => display(json));
function display(json){
    const myBook = json.docs;

    //create the elements that will hold the values retireved from the json file
    const title = document.createElement("h1");
    const author = document.createElement("h2");
    const publisher = document.createElement("h3");
    const cover = document.createElement("img");
    const displayIsbn = document.createElement("h3");
    title.textContent = myBook[1].title;
    author.textContent = myBook[1].author_name;
    publisher.textContent = myBook[1].publisher;

    const isbn = myBook[1].isbn[2]; // specifically grabbing this isbn because not all of them have cover images 
    displayIsbn.textContent = `ISBN: ${isbn}`;
    //The json file dopesnt have the link for the image of the book cover so instead they have this link to search for the book cover with the ISBN (see second link at the bottom)
    cover.setAttribute("src", `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`);
    //append everything to the book section in the body of index.html
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(publisher);
    book.appendChild(cover);
    book.appendChild(displayIsbn)

}
//event listener for student Id button
button.addEventListener("click",displayStudentId);
//docs for api
//https://openlibrary.org/dev/docs/api/search
//https://openlibrary.org/dev/docs/api/covers
