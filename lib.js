let myLibrary=[];
const bookCollection=document.querySelector('.bookShelf');




function Book(title,author,pageNumber,readStatus)
{
    this.title=title;
    this.author=author;
    this.pageNumber=pageNumber;
    this.readStatus=readStatus;
addBookToLibrary(this);
}
function addBookToLibrary(book)
{
myLibrary.push(book);
}

function displayMyBooks(myLibrary)
{
  for(let i=0;i<myLibrary.length;i++)
  {
    const mybook=document.createElement('div');
    mybook.setAttribute('id',`${i}`);
    mybook.classList.add('book');
    const bookName=document.createElement('p');
    bookName.textContent=myLibrary[i].title;
    mybook.appendChild(bookName);
    const authorName=document.createElement('p');
    authorName.textContent=myLibrary[i].author;
    mybook.appendChild(authorName);
    const pageNumber=document.createElement('p');
    pageNumber.textContent=myLibrary[i].pageNumber;
    mybook.appendChild(pageNumber);
    const readStatus=document.createElement('button');
    readStatus.textContent='read status';
    mybook.appendChild(readStatus);
    const removeBook=document.createElement('button');
    removeBook.textContent='remove book';
    removeBook.setAttribute('id',`${i}`);
    removeBook.classList.add('removeBook');
    mybook.appendChild(removeBook);

        
    bookCollection.appendChild(mybook);

  }

}

function clearMyBookSelf(mybookSelf)
{
    while (mybookSelf.firstChild) {
        mybookSelf.removeChild(mybookSelf.lastChild);
    }

}


const harry=new Book('harry potter','jk',265,'read');
const john=new Book('mikey','jojo',250,'read');
const harr=new Book('harry potter','jk',265,'read');
const joh=new Book('mikey','jojo',250,'read');
const hary=new Book('harry potter','jk',265,'read');
const jon=new Book('mikey','jojo',250,'read');
const hrry=new Book('harry potter','jk',265,'read');
const jhn=new Book('mikey','jojo',250,'read');

displayMyBooks(myLibrary);




//const submitButton=document.querySelector('#submitBook');
const removeBooks=document.querySelectorAll('.removeBook');
removeBooks.forEach(removeBook=>removeBook.addEventListener('click',()=>{
    console.log(removeBook['id']);
    myLibrary.splice(removeBook['id'],1);
    console.log(myLibrary);
   clearMyBookSelf(bookCollection);
    displayMyBooks(myLibrary);
})
);

//submitButton.addEventListener('click',console.log("hello"));