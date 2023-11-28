const voteButton = document.getElementById("voteButton");

voteButton.addEventListener("click", castVote);

async function castVote() {
  try {
    const response = await fetch(`http://worldclockapi.com/api/json/est/now`, {
      method: "GET",
    });

    if (response.ok) {
      const responseData = await response.json();
      const date = new Date(responseData.currentDateTime);
      voteButton.textContent = `Your vote is accepted: ${date.toUTCString()}`;
    } else {
      console.error("Failed to cast vote");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
