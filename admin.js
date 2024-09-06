document.getElementById('mcq-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const question = document.getElementById('question').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;
    const correctOption = document.getElementById('correct-option').value;

    // Create a new MCQ object
    const mcq = {
        question,
        options: [option1, option2, option3, option4],
        correctOption: parseInt(correctOption)
    };

    // Save MCQ to localStorage
    let mcqs = JSON.parse(localStorage.getItem('mcqs')) || [];
    mcqs.push(mcq);
    localStorage.setItem('mcqs', JSON.stringify(mcqs));

    document.getElementById('message').innerText = 'MCQ Uploaded Successfully!';
    document.getElementById('mcq-form').reset();
});
