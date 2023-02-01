const allPanels = document.querySelectorAll('.panel') //seslecting all the class of panel


//looping through each of the panel using the forEach method
// allPanels.forEach((newPanel) => {
//    newPanel.addEventListener('click', () => {
//     removeActiveClasses()
//     newPanel.classList.add('active')  //all the images are active on click, without returning back to their original shape.
//    })
// })

// function removeActiveClasses(){
//     allPanels.forEach((newPanel) => {
//         newPanel.classList.remove('active')
//     })
// }

//alternatively using the for-let method to iterate through each image
for(let newPanel of  allPanels)
newPanel.addEventListener('click', () => {
    removeAllActiveClass()
    newPanel.classList.add('active')
})

function removeAllActiveClass(){
    for(let newPanel of allPanels)
    newPanel.classList.remove('active')
}
