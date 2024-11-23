document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quiz-form");
    const resultsContainer = document.getElementById("results");
    const retakeButton = document.getElementById("retake-quiz");
  
    // Correct answers for 25 questions
    const correctAnswers = {
      q1: "C",
      q2: "B",
      q3: "A",
      q4: "B",
      q5: "C",
      q6: "A",
      q7: "A",
      q8: "C",
      q9: "B",
      q10: "A",
      q11: "B",
      q12: "D",
      q13: "C",
      q14: "B",
      q15: "D",
      q16: "C",
      q17: "B",
      q18: "A",
      q19: "A",
      q20: "A",
    };
  
    quizForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form submission
  
      let score = 0;
      const totalQuestions = Object.keys(correctAnswers).length;
  
      // Hide the form and display results
      quizForm.style.display = "none";
      retakeButton.classList.remove("hidden");
  
      // Check answers
      Object.keys(correctAnswers).forEach((key) => {
        const selectedAnswer = quizForm.querySelector(`input[name="${key}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[key]) {
          score++;
        }
      });
  
      // Display results
      resultsContainer.innerHTML = `
        <h2>Your Results</h2>
        <p>You scored <strong>${score} / ${totalQuestions}</strong>.</p>
        ${score === totalQuestions ? "<p>🎉 Perfect! Well done!</p>" : "<p>Keep practicing!</p>"}
      `;
    });
  
    // Retake quiz functionality
    retakeButton.addEventListener("click", () => {
      resultsContainer.innerHTML = "";
      retakeButton.classList.add("hidden");
      quizForm.style.display = "block";
  
      // Reset the form
      quizForm.reset();
    });
  });
  