let myLibrary=[];
const bookCollection=document.querySelector('.bookShelf');
const form=document.querySelector('.newBookForm');
let removeBooks='';

const harry=new Book('harry potter','jk',265,'read');
const john=new Book('mikey','jojo',250,'read');
const harr=new Book('alchemist','paolo',135,'unread');
const joh=new Book('lord of the rings','tolkein',150,'read');
const hary=new Book('welcome to the jungle','gnr',300,'read');



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
    mybook.setAttribute('id',`book${i}`);
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
  removeBooks='';
  removeBooks=document.querySelectorAll('.removeBook')
  removeBooks.forEach(removeBook=>removeBook.addEventListener('click',()=>{
    console.log(removeBook['id']);
    myLibrary.splice(removeBook['id'],1);
    clearMyBookSelf(bookCollection);
    displayMyBooks(myLibrary);
})
);
}

function clearMyBookSelf(mybookSelf)
{
    while (mybookSelf.firstChild) {
        mybookSelf.removeChild(mybookSelf.lastChild);
    }

}



displayMyBooks(myLibrary);



const addNewButton=document.querySelector('.addNewBook');

const submittNewBook=document.querySelector('#submittNewBook');



addNewButton.addEventListener('click',()=>form.removeAttribute('hidden')
);

submittNewBook.addEventListener('click',()=>console.log(document.getElementById('.author-name')));