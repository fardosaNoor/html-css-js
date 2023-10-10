/*function Book(title, author, isbn){

    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
 const books = new Book{
    selectedBooks[
        {
        title = 'Book1',
        author = 'John Doe',
        isbn  = '123466666',
    }
    {
        title = 'Book2';
        author = 'Jane Doe';
        isbn  = '133366666';
    }
    ]
 }*/

 const titleInput = document.getElementById('book-title');
 const authorInput = document.getElementById('book-author');
 const isbnInput = document.getElementById('book-isbn');
 //const deleteInput = document.getElementById('delete-button')

 const heroBtn = document.getElementById('book-sumbit');
 const bookList = document.querySelector('.book-list');

 const alertDiv = document.querySelector('.alert-div');



 /*function bookview(){
     const container = document.createElement('tr')

     const bookTitle = document.createElement('td');
     bookTitle.textContent = titleInput.value;
     const bookAuthor = document.createElement('td');
     bookAuthor.textContent = authorInput.value;
     const bookIsbn = document.createElement('td');
     bookIsbn.textContent =isbnInput.value;
     

container.append(bookTitle, bookAuthor, bookIsbn);
bookList.appendChild(container);
  
 }*/

 function bookview(){
     const container = document.getElementById('list');
     const row = document.createElement('tr');

     const bookTitle = document.createElement('td');
     bookTitle.textContent = titleInput.value;
     const bookAuthor = document.createElement('td');
     bookAuthor.textContent = authorInput.value;
     const bookIsbn = document.createElement('td');
     bookIsbn.textContent =isbnInput.value;
     
     const deleteBtn = document.createElement('button');
     deleteBtn.innerText ='X'
     
     deleteBtn.className = 'delete'

     row.append(bookTitle, bookAuthor, bookIsbn, deleteBtn);

     container.appendChild(row);

     
 }


 heroBtn.addEventListener('click',function(e){
    e.preventDefault();
    if(titleInput.value === '' || authorInput.value === '' || isbnInput.value === ''){
        
        alertDiv.textContent = 'Please fill all the forms!';
    }else{
         bookview();
         alertDiv.textContent= 'book Added!'

         clearFields();

        
    }
})


function clearFields(){
    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
}

//delete-book
document.querySelector('#list').addEventListener('click',(e)=>{
  e.currentTarget
});





