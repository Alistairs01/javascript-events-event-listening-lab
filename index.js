function addingEventListener() {
    let myButton = document.querySelector('#button')
    myButton.addEventListener('click', alertMe);
   function alertMe() {
    return alert('Hi i was clicked')
   }
}
