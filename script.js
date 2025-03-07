function scrollToElemement(elementSelector, instance =0){
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance){
        elements[instance].scrollIntoView({behavior: "smooth"});
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElemement('.container', 1);
})

link2.addEventListener('click', () => {
    scrollToElemement('.container', 2);
})

link3.addEventListener('click', () => {
    scrollToElemement('.header', 0);
})


const contactBtn = document.getElementById('btn');
const contactWindow = document.getElementById('contact-window');

// Add an event listener to the contact button
contactBtn.addEventListener('click', () => {
  // Show the contact window
  contactWindow.style.display = 'block';
  
});

// Add an event listener to the contact window
contactWindow.addEventListener('click', (e) => {
  // If the user clicks outside the contact template, close the window
  if (e.target !== contactWindow) return;
  
  // Hide the contact window
  contactWindow.style.display = 'none';
  
  // Unblur the index.html page
  document.body.style.filter = 'none';
});


