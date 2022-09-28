"use strict";
const userNameInput = document.querySelector("#userName");
const ageInput = document.querySelector("#age");
//store user data in the localStorage
function store() {
    var _a, _b, _c;
    var userName = (_a = document.querySelector("#userName")) === null || _a === void 0 ? void 0 : _a.value;
    var age = (_b = document.querySelector("#age")) === null || _b === void 0 ? void 0 : _b.value;
    var key = (_c = document.querySelector("#key")) === null || _c === void 0 ? void 0 : _c.value;
    const user = {
        userName,
        age,
    };
    console.log("user", userName);
    if (!key)
        return;
    console.log("key");
    //convert user object to string and save it
    localStorage.setItem(key, JSON.stringify(user));
}
//retrieve user data from localStorage
function retrieveUserData() {
    var _a;
    let key = (_a = document.querySelector("#retrieveKey")) === null || _a === void 0 ? void 0 : _a.value;
    console.log("retrive records");
    if (!key)
        return;
    console.log("key");
    let userData = JSON.parse(localStorage.getItem(key)); //searches for the key in localStorage
    if (!userData)
        return;
    console.log(userData);
    if (userNameInput) {
        userNameInput.value = userData.userName;
    }
    if (ageInput) {
        ageInput.value = userData.age;
    }
}
//delete user data from localStorage
function removeUserData() {
    var _a;
    var removeKey = (_a = document.querySelector("#removeKey")) === null || _a === void 0 ? void 0 : _a.value;
    if (!removeKey)
        return;
    console.log(removeKey);
    localStorage.removeItem(removeKey);
}
//delete all user data from localStorage
function deleteAllUserData() {
    localStorage.clear();
}
//ensures the page is fully loaded before functions can be executed.
window.onload = function () {
    const userForm = document.getElementById("userForm");
    const clearButton = document.getElementById("clearButton");
    const removeButton = document.getElementById("removeButton");
    const retrieveButton = document.getElementById("retrieveButton");
    if (userForm) {
        console.log("register submit event");
        userForm.onsubmit = store;
    }
    if (clearButton) {
        console.log("register deleteAllUserData");
        clearButton.onclick = deleteAllUserData;
    }
    if (removeButton) {
        console.log("register removeUserData");
        removeButton.onclick = removeUserData;
    }
    if (retrieveButton) {
        console.log("register retrieveUserData");
        retrieveButton.onclick = retrieveUserData;
    }
};
