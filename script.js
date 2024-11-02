// Login Logic
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simulate login and redirect
  if (username && password) {
    localStorage.setItem("user", username);
    window.location.href = "wallets.html";
  } else {
    alert("Please fill out all fields");
  }
});

// Wallet Management
function addWallet() {
  const walletInput = document.getElementById("wallet-input").value;
  const walletList = document.getElementById("wallets-list");

  if (walletInput) {
    const walletElement = document.createElement("div");
    walletElement.innerText = `Wallet: ${walletInput}`;
    walletList.appendChild(walletElement);
  } else {
    alert("Enter a wallet address");
  }
}

// Redirect to Premium Page
function goToPremium() {
  window.location.href = "premium.html";
}

// Premium Page Trend Generation
function generateTrend() {
  const trendDisplay = document.getElementById("trend-display");
  const trends = ["Buy", "Sell", "Hold"];
  const randomTrend = trends[Math.floor(Math.random() * trends.length)];
  trendDisplay.innerText = `Current Trend: ${randomTrend}`;
}
