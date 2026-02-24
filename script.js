// const for form because it won't change
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get user inputs
  const adjective = document.getElementById('adjective').value;
  const noun = document.getElementById('noun').value;
  const verb = document.getElementById('verb').value;
  
  // Create the sentence using the user's words
  const sentence = `${verb.charAt(0).toUpperCase() + verb.slice(1)}ing ${adjective} ${noun} is the real test of character. #LifeRules`;
  
  // Display the result
  document.getElementById('result').textContent = sentence;
  
  // Clear the form inputs
  form.reset();
});
