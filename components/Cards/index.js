// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(){
const cardDiv = document.createElement('div');
const headLineDiv = document.createElement('div');
const authorDiv = document.createElement('div');
const imgDiv = document.createElement('div');
const imgN = document.createElement('img');
const authName = document.createElement('span');

cardDiv.classList.add('card');
headLineDiv.classList.add('headline');
authorDiv.classList.add('author');
imgDiv.classList.add('img-container');

imgDiv.appendChild(imgN);
authorDiv.appendChild(imgDiv);
authorDiv.appendChild(authName);
cardDiv.appendChild(headLineDiv);
cardDiv.appendChild(authorDiv);


return cardDiv;
}



axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then (response => {
    // cardDOM.appendChild(createCard(response.data))
    console.log(response.data.articles)
});