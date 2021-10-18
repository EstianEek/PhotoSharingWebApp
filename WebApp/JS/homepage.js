var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

let picturesTitle = ["Picture1", "Picture2", "Picture3", "Picture4", "Picture5",
    "Picture6", "Picture7", "Picture8"
]

const popoversImg = Array.from(document.getElementsByClassName("popover-image"));
const popovers = Array.from(document.getElementsByClassName("pop-over"));

/*popoversImg.forEach(popoverImg => {
    const number = popoverImg.dataset['number'];
    popoverImg.['title'] = popovers[number];
});
*/

setImageNames = () => {
    popovers.forEach(popover => {
        const number = popover.dataset['number'];
        //popover.setAttribute("title", picturesTitle[number - 1]);
        popover.setAttribute("title", picturesTitle[number - 1]);
    });
    
};

setImageNames();


console.log(popovers);