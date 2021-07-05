const groups = document.querySelectorAll('.questionGroup');

groups.forEach(group => {
    group.addEventListener("click", () => {
        group.classList.toggle("active");
    });
});



/*let toggleAnswer = (id) => {
    let answer = document.getElementById(id);

    if(answer.style.display == "none") 
    {
        answer.style.display = "block"; 
        
    }
    else 
    {
        answer.style.display = "none"; 
    }
}*/