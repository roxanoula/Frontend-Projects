let myPages = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")


const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myPages = leadsFromLocalStorage
    render(myPages)
}
tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myPages.push(tabs[0].url)
        localStorage.setItem("my_pages", JSON.stringify(myPages) )
        render(myPages)
    })
})

deleteBtn.addEventListener("click", function() {
    myPages = []
    localStorage.clear()
    render(myPages)
})

inputBtn.addEventListener("click", function() {
    myPages.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("my_pages", JSON.stringify(myPages))
    render(myPages)

    //console.log( localStorage.getItem("my_pages") )
})

function render(pages) {
    let listItems = ""
    for(let i=0; i<pages.length; i++){
       listItems += `
       <li>
            <a target='_blank' href='${pages[i]}'>
                ${pages[i]}
            </a>
        </li>
        `
    }
    
    ulEl.innerHTML = listItems
    
}
