const search = document.querySelector('#search');
const caption = document.getAttribute('data-caption');
const searchPhoto = event => {
    search.addEventListener('keyup', searchPhoto);
    const searchTerm = event.target.value.toLowerCase();
    
}



// function searchPhotos() {
//     let input = document.getElementById('searchbar').value;
//     input = input.toLowerCase();
//     let caption = getElementsByClassName("photo");
//     caption = getAttribute('data-caption');
//     caption = caption.toLowerCase();

//     for (i = 0; i < caption.length; i++) {
//         if (!caption[i].innerHTML.toLowerCase().include(input)) {
//             caption[i].style.display= "none";
//         }  else {
//             caption[i].style.display = "data-caption";
//         }
//     }
// }
