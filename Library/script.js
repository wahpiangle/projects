//Library array
let myLibrary = [];

//Book function to create objects
function Book(Title, Author, Pages, Read){ 
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
}


//function to push to array
function addBookToLibrary(Title, Author, Pages, Read) {
  let book = new Book(Title, Author, Pages, Read);
  myLibrary.push(book);
}


//iteration over myLibrary array to append cards
function displayBooks(){
  let index = 0; //use of index to give label to the card

  const books = document.querySelector(".books");
  //to remove each divs in the page before adding new as adding new would produce everything in the array
  const removeDivs = document.querySelectorAll(".card");
  for (let i = 0; i <removeDivs.length; i++){
    removeDivs[i].remove();
  }

  myLibrary.forEach(myLibrarys =>{ //for each item in the original array
    const card = document.createElement("div");
    card.classList.add("card"); //add card class to each div created to contain book
    books.appendChild(card);

    const removeBookBtn = document.createElement("button");
    removeBookBtn.classList.add("remove-book-button");
    removeBookBtn.textContent = "Remove";
    removeBookBtn.dataset.linkedArray = index; //add a dataset linkedArray equals to the index
    
    //card formatting for read and pages
    for(let key in myLibrarys){
      if(`${key}` === "Read"){
        const para = document.createElement("p");
        para.classList.add("read-status");
        para.dataset.linkedArray = index;
        para.textContent = (`${myLibrarys[key]}`);
        card.appendChild(para);
        //to have the different classes for the read status
        if(para.textContent === "Not Read"){
          para.setAttribute("id","status-notread");
        }
        else if(para.textContent === "Read"){
          para.setAttribute("id","status-read");
        }
      }

      else if(`${key}` === "Pages"){
        const para = document.createElement("p");
        para.textContent = (`${myLibrarys[key]}` + " pages");
        card.appendChild(para);
      }
      else{
      const para = document.createElement("p");
      para.textContent = (`${key} : ${myLibrarys[key]}`);
      card.appendChild(para);}
      
    }
    index ++;

    card.appendChild(removeBookBtn); //putting remove button at the bottom
    //remove button onclick
    removeBookBtn.addEventListener("click", removeBook);
    function removeBook(){
      let bookToRemove = removeBookBtn.dataset.linkedArray;
      myLibrary.splice(parseInt(bookToRemove), 1);
      card.remove();
      displayBooks();
    }    
    
    const readStatus = card.querySelectorAll(".read-status");
    readStatus.forEach(item => {item.addEventListener("click", function(){
        toggleReadStatus(item);
      });
    });

    //to change the height to fill all the cards when there are more than 3 cards
    const container = document.querySelector(".contents")
    if(index >3){
    container.style.height = "max-content";
    }
  })
}

function toggleReadStatus(readStatus){
  if(readStatus.id === "status-read"){
    readStatus.textContent = "Not Read";
    readStatus.setAttribute("id", "status-notread");
  } else if(readStatus.id === "status-notread"){
    readStatus.textContent = "Read"
    readStatus.setAttribute("id", "status-read");
  }
}

//for the new book button to display the form
const addButton = document.querySelector(".addbtn");
addButton.addEventListener("click", displayForm);

function displayForm(){
  const form = document.querySelector(".popup");
  form.style.display = "block";
  form.style.opacity = 1;
}
//to close form
const closeForm = document.querySelector(".cancel");
closeForm.addEventListener("click", () =>{
  const form = document.querySelector(".popup");
  document.getElementById("form").reset(); //clear form upon closing
  form.style.display = "none";
  form.style.opacity = 0;
})

//for the submit button to submit and add to the page
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click",submitBook);

function submitBook(){
  const checked = "Read";
  const unchecked = "Not Read";
  const Title = document.getElementById("input-title").value;
  const Author = document.getElementById("input-author").value; 
  const Pages = document.getElementById("input-pages").value;
  const checkbox = document.getElementById("input-read");
  let Read = checkbox.value;
  if(checkbox.checked === true){
    Read = checked;
  }
  else{
    Read = unchecked;
  }
  
  //return if any of the form inputs are blank
  if ((Title === "") || (Author === "") || (Pages === "")){
    return;
  }

  addBookToLibrary(Title, Author, Pages, Read);
  displayBooks();
  document.getElementById("form").reset(); //to clear the form upon submission
  const form = document.querySelector(".popup").style.display ="none";
}