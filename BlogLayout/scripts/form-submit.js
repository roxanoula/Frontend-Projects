dataCollectionForm = document.getElementsByClassName("info-collector")
console.log(dataCollectionForm)

dataCollectionForm[0].addEventListener("submit", event => {
    event.preventDefault();
    let formData = new FormData(event.target)
    let userName = formData.get("formName")
    let userEmail = formData.get("formEmail")

    console.log(userName)
    console.log(userEmail)
    
    window.location.href='main.html';
})