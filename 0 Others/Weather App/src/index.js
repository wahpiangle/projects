import './styles.css';
import {updateToday} from './updateDOM.js';
updateToday();

const searchBar = document.getElementById('search');
const searchBtn = document.querySelector('.search-btn');

searchBar.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(searchBar.value);
    updateToday(searchBar.value);
    searchBar.value ='';
})

searchBtn.addEventListener('click',function(e){
    e.preventDefault();
    console.log(searchBar.value);
    updateToday(searchBar.value);
    searchBar.value ='';
})