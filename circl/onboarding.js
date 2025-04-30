const user = JSON.parse(localStorage.getItem("user")) || { username: "Guest" };
let onboardingData = JSON.parse(localStorage.getItem("onboardingData")) || {
    kycVerified: false,
    bankLinked: false
};

const kycStatus = document.getElementById("kyc-status");
const bankStatus = document.getElementById("bank-status");

kycStatus.textContent = onboardingData.kycVerified ? "Identity verified!" : "Identity not verified.";
bankStatus.textContent = onboardingData.bankLinked ? "Bank linked!" : "Bank not linked.";

document.getElementById("verify-kyc").addEventListener("click", function() {
    onboardingData.kycVerified = true;
    localStorage.setItem("onboardingData", JSON.stringify(onboardingData));
    kycStatus.textContent = "Identity verified!";
    kycStatus.style.color = "green";
});

document.getElementById("link-bank").addEventListener("click", function() {
    onboardingData.bankLinked = true;
    localStorage.setItem("onboardingData", JSON.stringify(onboardingData));
    bankStatus.textContent = "Bank linked!";
    bankStatus.style.color = "green";
});