let toggleAnswer = (id) => {
    let answer = document.getElementById(id);

    if(answer.style.display == "none") 
    {
        answer.style.display = "block"; 
    }
    else 
    {
        answer.style.display = "none"; 
    }
}