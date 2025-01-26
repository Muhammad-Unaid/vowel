
function checkVowels() {
  const inputText = document.getElementById("inputText").value.trim();
  const vowelDiv = document.getElementById("vowelResult");
  const noVowelDiv = document.getElementById("noVowelResult");

  if (inputText === "") return; // Agar input blank hai to kuch na karay

  if (/[aeiouAEIOU]/.test(inputText)) {
    // Agar input mein vowel ho, to vowel div mein add kare
    vowelDiv.textContent += inputText + ", ";
  } else {
    // Agar vowel na ho, to no vowel div mein add kare
    noVowelDiv.textContent += inputText + ", ";
  }

  document.getElementById("inputText").value = ""; // Input clear karay
}
