// NB I got a lot of help on this from the slack Office Hours and
// https://www.w3schools.com/howto/howto_js_filter_lists.asp
// https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/

const searchCap = () => {
    let inputSearch = document.getElementById('search');
    let search = inputSearch.value.toLowerCase();
    let tag = document.getElementsByTagName('a');
    
    for (i = 0; i < tag.length; i++) {
        let dataCap = tag[i].getAttribute('data-caption').toLowerCase();
        if (!dataCap.includes(search)) {
            tag[i].style.display = "none";
        }
        else {
            tag[i].style.display = "flex";
        }       
    }
} 

