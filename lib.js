let myLibrary=[];
const bookCollection=document.querySelector('.bookShelf');
const form=document.querySelector('.newBookForm');
let removeBooks='';
let readStatus='';
let placeholderObject={book:'',author:'',pages:'',readStatus:'not read'};

/*const harry=new Book('harry potter','jk',265,'read');
const john=new Book('mikey','jojo',250,'read');
const harr=new Book('alchemist','paolo',135,'not read');
const joh=new Book('lord of the rings','tolkein',150,'read');
const hary=new Book('welcome to the jungle','gnr',300,'read');
*/


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
clearMyBookSelf(bookCollection);
displayMyBooks(myLibrary);
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
    readStatus.textContent=myLibrary[i].readStatus;
    if(myLibrary[i].readStatus==='read')
    {
        readStatus.classList.add('read'); 
    }
    else
    {
        readStatus.classList.add('notread'); 
    }

    readStatus.setAttribute('id',`${i}`);
    readStatus.classList.add('readStatus');
    mybook.appendChild(readStatus);
    
    const removeBook=document.createElement('button');
    removeBook.textContent='remove book';
    removeBook.setAttribute('id',`${i}`);
    removeBook.classList.add('removeBook');
    mybook.appendChild(removeBook);

        
    bookCollection.appendChild(mybook);

  }
    readStatus='';
    readStatus=document.querySelectorAll('.readStatus');
    readStatus.forEach(read=>read.addEventListener('click',()=>{
    if(read.textContent==='read') 
    {
        read.classList.remove('read');
        read.classList.add('notread'); 
        read.textContent='not read';
       
    }
    else
    {
        read.classList.remove('notread');
        read.classList.add('read'); 
        read.textContent='read';
      
    }


    }));
    
    removeBooks='';
    removeBooks=document.querySelectorAll('.removeBook')
    removeBooks.forEach(removeBook=>removeBook.addEventListener('click',()=>{
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




const addNewButton=document.querySelector('.addNewBook');

const submittNewBook=document.querySelector('#submittNewBook');



addNewButton.addEventListener('click',()=>{
    form.removeAttribute('hidden');
    document.getElementById('book_name').value='';
    document.getElementById('author_name').value='';
    document.getElementById('page_number').value='';
    document.getElementById('').value='not read';
});

submittNewBook.addEventListener('click',()=>{new Book(placeholderObject.book,placeholderObject.author, placeholderObject.pages,placeholderObject.readStatus);
form.setAttribute('hidden','true');}
);

let Inputs=document.querySelectorAll('input');
Inputs.forEach(input=>input.addEventListener('blur',()=>sortInputValue(input)));

function sortInputValue(input)
{
  switch(input.name)
  {
    case 'book_name':
        placeholderObject.book=input.value;
    break;
    case 'author_name':
        placeholderObject.author=input.value;
    break;
    case 'page_number':
        placeholderObject.pages=input.value;
    break;
    case 'status':
        placeholderObject.readStatus=input.value;
    break;
}

}

