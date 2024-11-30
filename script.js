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
        const totalVotes = Object.values(votes).reduce((acc, vote) => acc + vote, 0);
        
        console.log("Total Votes: ", totalVotes);

        if (totalVotes > 0) {
            resultJavaScript.textContent = `JavaScript: ${(votes.JavaScript / totalVotes * 100).toFixed(1)}%`;
            resultPython.textContent = `Python: ${(votes.Python / totalVotes * 100).toFixed(1)}%`;
            resultJava.textContent = `Java: ${(votes.Java / totalVotes * 100).toFixed(1)}%`;
            resultCSharp.textContent = `C#: ${(votes.CSharp / totalVotes * 100).toFixed(1)}%`;
        } else {
            resultJavaScript.textContent = `JavaScript: 0%`;
            resultPython.textContent = `Python: 0%`;
            resultJava.textContent = `Java: 0%`;
            resultCSharp.textContent = `C#: 0%`;
        }
    }

    pollForm.addEventListener('submit', function (e) {
        e.preventDefault();  

        const selectedOption = document.querySelector('input[name="option"]:checked');  
        
        if (selectedOption) {
            const voteValue = selectedOption.value;
            console.log("Vote Casted: ", voteValue); 
            
            votes[voteValue] += 1;  
            
            console.log("Updated Votes: ", votes); 
            
            updateResults(); 
        } else {
            alert('Please select an option before submitting.');  
        }
    });
});
