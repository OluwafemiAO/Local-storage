const userNameInput = document.querySelector<HTMLInputElement>("#userName")
const ageInput= document.querySelector<HTMLInputElement>("#age")

//store user data in the localStorage
function store() {
    var userName = document.querySelector<HTMLInputElement>("#userName")?.value
    var age = document.querySelector<HTMLInputElement>("#age")?.value;
    var key = document.querySelector<HTMLInputElement>("#key")?.value;
    const user = {
      userName,
      age,
    };
    console.log("user", userName);
    
    if(!key) return;
    console.log("key")
    //convert user object to string and save it
  localStorage.setItem(key, JSON.stringify(user));
}

//retrieve user data from localStorage
function retrieveUserData() {
    let key = document.querySelector<HTMLInputElement>("#retrieveKey")?.value;
    console.log("retrive records");

if(!key) return
console.log("key")

    let userData = JSON.parse(localStorage.getItem(key)!); //searches for the key in localStorage
  

if(!userData) return
console.log(userData)
  if(userNameInput){
    userNameInput.value = userData.userName
  }

  if(ageInput){
    ageInput.value = userData.age
  }
}
  //delete user data from localStorage
function removeUserData() {
    var removeKey = document.querySelector<HTMLInputElement>("#removeKey")?.value;
if(!removeKey) return
console.log(removeKey)

    localStorage.removeItem(removeKey);
  }

  //delete all user data from localStorage
function deleteAllUserData() {
    localStorage.clear();
  }
  
  //ensures the page is fully loaded before functions can be executed.
  window.onload = function () {
  const userForm =  document.getElementById("userForm");
  const clearButton = document.getElementById("clearButton");
  const removeButton =   document.getElementById("removeButton");
  const retrieveButton =   document.getElementById("retrieveButton")

if(userForm) {
    console.log("register submit event");
    
    userForm.onsubmit = store
}

if(clearButton) {
    console.log("register deleteAllUserData");

    clearButton.onclick = deleteAllUserData
}

if(removeButton) {
    console.log("register removeUserData");

    removeButton.onclick = removeUserData
}

if(retrieveButton) {
console.log("register retrieveUserData")

    retrieveButton.onclick = retrieveUserData
}

  };