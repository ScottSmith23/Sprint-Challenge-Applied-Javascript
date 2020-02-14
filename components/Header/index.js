// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    //creating elements
    const headerDiv = document.createElement('div');
    const dateS = document.createElement('span');
    const headH = document.createElement('h1');
    const tempS = document.createElement('span');
    
    headerDiv.classList.add('header');
    dateS.classList.add('date');
    tempS.classList.add('temp');

    dateS.textContent = 'SMARCH 28, 2019';
    headH.textContent = 'Lambda Times';
    tempS.textContent = '98°';
    
    headerDiv.appendChild(dateS);
    headerDiv.appendChild(headH);
    headerDiv.appendChild(tempS);
    
    return headerDiv;
    }

    const headCont = document.querySelector('.header-container')


    headCont.appendChild(Header());