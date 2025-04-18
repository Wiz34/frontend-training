const susuData = JSON.parse(localStorage.getItem("susuData")) || {
    contribution: 50,
    frequency: 'Weekly',
    payoutOder: 3,
    trustScore: 4.2,
    memebers: ["Anna", "Daniel", "Mark", "Sophie"]
};
console.log("Loaded from localStorage:", susuData);




document.getElementById("contribution-display").textContent = `$${susuData.contribution} ${susuData.frequency}`;
document.getElementById("next-payout").textContent = `Next Payout: You (Week ${susuData.payoutOrder})`;
document.getElementById("trust-score").textContent = `TrustScore: ${susuData.trustScore}`;

const membersList = document.getElementById('members-list');
function displayMembers() {
         membersList.innerHTML = '';
        susuData.members.forEach(member => {
            const li = document.createElement('li');
            li.textContent = member;
            membersList.appendChild(li);
        });
}
displayMembers();

document.getElementById("clear-members").addEventListener("click", function() {
    membersList.innerHTML = "";
    console.log("Members cleared");
});

document.getElementById("refresh-members").addEventListener("click", function() {
    displayMembers();
    console.log("Members refreshed:", susuData.members);
});

document.getElementById("log-contribution").addEventListener("click", function() {
    console.log("Contribution:", susuData.contribution, susuData.frequency);
});

document.getElementById("highlight-members").addEventListener("click", function() {
    const members = document.querySelectorAll("#members-list li");
    members.forEach(member => {
        member.style.backgroundColor = "#f7931a"; // Bitcoin orange
        member.style.color = "white";
    });
    console.log("Highlighted members:", members.length);
});