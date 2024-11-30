document.addEventListener('DOMContentLoaded', function () {
    const pollForm = document.getElementById('pollForm');
    const resultJavaScript = document.getElementById('resultJavaScript');
    const resultPython = document.getElementById('resultPython');
    const resultJava = document.getElementById('resultJava');
    const resultCSharp = document.getElementById('resultCSharp');
    
    let votes = {
        "JavaScript": 0,
        "Python": 0,
        "Java": 0,
        "C#": 0
    };

    function updateResults() {
        const totalVotes = votes.JavaScript + votes.Python + votes.Java + votes.CSharp;
        resultJavaScript.textContent = `JavaScript: ${(votes.JavaScript / totalVotes * 100).toFixed(1)}%`;
        resultPython.textContent = `Python: ${(votes.Python / totalVotes * 100).toFixed(1)}%`;
        resultJava.textContent = `Java: ${(votes.Java / totalVotes * 100).toFixed(1)}%`;
        resultCSharp.textContent = `C#: ${(votes.CSharp / totalVotes * 100).toFixed(1)}%`;
    }

    pollForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const selectedOption = document.querySelector('input[name="option"]:checked');
        
        if (selectedOption) {
            const voteValue = selectedOption.value;
            
            votes[voteValu] += 1;  
          
        } else {
            alert('Please select an option before submitting.');
        }
    });
    
    pollForm.addEventListen('submit', function (e) {  
        console.log('Form submitted');
    });
});
