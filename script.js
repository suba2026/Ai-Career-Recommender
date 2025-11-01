// script.js - robust version

document.addEventListener('DOMContentLoaded', () => {
  // Get references once DOM is ready
  const skillsInput = document.getElementById('skills');
  const interestSelect = document.getElementById('interest');
  const result = document.getElementById('result');
  const recommendBtn = document.getElementById('recommendBtn'); // we'll use an id for button

  // Debugging: log if any element is missing
  if (!skillsInput) console.error("Missing element: #skills (check id in index.html)");
  if (!interestSelect) console.error("Missing element: #interest (check id in index.html)");
  if (!result) console.error("Missing element: #result (check id in index.html)");
  if (!recommendBtn) console.error("Missing element: #recommendBtn (check button id)");

  function recommendCareer() {
    if (!skillsInput || !interestSelect || !result) {
      result && (result.innerHTML = "Internal error: required fields missing. Check Console.");
      console.error("recommendCareer aborted because required elements are missing.");
      return;
    }

    const skills = skillsInput.value.trim().toLowerCase();
    const interest = interestSelect.value.trim();

    if (!interest) {
      result.innerHTML = "Please choose an interest first ⛔";
      return;
    }

    if (interest.toLowerCase().includes("ai")) {
      result.innerHTML = "Career Suggestion: 🤖 <strong>Machine Learning Engineer</strong><br>Learn: Python, NumPy, Pandas, ML models";
    } else if (interest.toLowerCase().includes("web")) {
      result.innerHTML = "Career Suggestion: 🌐 <strong>Full-Stack Web Developer</strong><br>Learn: HTML, CSS, JS, React, Node.js";
    } else if (interest.toLowerCase().includes("cyber")) {
      result.innerHTML = "Career Suggestion: 🛡 <strong>Cybersecurity Analyst</strong><br>Learn: Networking, Linux, Kali, Python";
    } else if (interest.toLowerCase().includes("cloud")) {
      result.innerHTML = "Career Suggestion: ☁ <strong>Cloud / DevOps Engineer</strong><br>Learn: AWS/Azure, Docker, Linux, CI/CD";
    } else if (interest.toLowerCase().includes("mobile")) {
      result.innerHTML = "Career Suggestion: 📱 <strong>Mobile App Developer</strong><br>Learn: Flutter / React Native, Firebase";
    } else {
      result.innerHTML = "No clear match — try adding skills like 'Python' or choose an interest.";
    }
  }

  // Attach click handler
  if (recommendBtn) {
    recommendBtn.addEventListener('click', recommendCareer);
  } else {
    // fallback: if button id isn't present but there's an inline onclick, leave it
    console.warn("Button with id 'recommendBtn' not found. If you're using inline onclick, ensure function name is available globally.");
    // Make function available globally in case HTML uses onclick attribute:
    window.recommendCareer = recommendCareer;
  }
});
