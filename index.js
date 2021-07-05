const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener("click", () => {
        let answer = question.nextElementSibling;
        
        if(answer.style.display == "none") 
        {
            question.style['font-weight'] = "bold";
            answer.style.display = "block"; 
        }
        else 
        {
            question.style['font-weight'] = "normal";
            answer.style.display = "none"; 
        }
    });
});