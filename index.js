const barsBtn = document.getElementById("bars")

barsBtn.addEventListener("click",()=>{
    barsBtn.classList.toggle("active-bars")
    document.getElementById("list").classList.toggle("active-list")
})