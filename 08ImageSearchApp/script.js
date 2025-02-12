const accesskey = 'FlUDFa0kP8G7uMcnrYdTd6hXGLb33vE2waawTx8fmug';

const formEl = document.querySelector('form');
const searchInputEl = document.getElementById('search-input');
const searchReasulEl = document.querySelector('.search-results');
const showMoreButtonEl = document.getElementById('show-more-button');

let inputData = '';
let page = 1;

// Hide the "Show More" button initially
showMoreButtonEl.style.display = 'none';

async function searchImage() {
  inputData = searchInputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchReasulEl.innerHTML = ""; 
  }

  const results = data.results;
  results.map((result) => {
    const imagewraper = document.createElement('div');
    imagewraper.classList.add('search-result');

    const image = document.createElement('img');
    image.src = result.urls.small;
    image.alt = result.alt_description;

    const imagelink = document.createElement('a');
    imagelink.href = result.links.html;
    imagelink.target = '_blank'; // Fixed typo '_black' -> '_blank'
    imagelink.textContent = result.alt_description;

    imagewraper.appendChild(image);
    imagewraper.appendChild(imagelink);
    searchReasulEl.appendChild(imagewraper);
  });

  page++;

  // Show the "Show More" button only if there are results
  if (results.length > 0) {
    showMoreButtonEl.style.display = 'block';
  } else {
    showMoreButtonEl.style.display = 'none';
  }
}

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  page = 1;
  searchImage();
});

showMoreButtonEl.addEventListener('click', () => {
  searchImage();
});
