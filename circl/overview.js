const susuData = JSON.parse(localStorage.getItem("susuData")) || {
    contribution: 50,
    frequency: 'Weekly',
    payoutOrder: 3,
    trustScore: 4.2,
    members: ["Anna", "Daniel", "Mark", "Sophie"]
};
console.log("Loaded from localStorage:", susuData);

const escrowData = JSON.parse(localStorage.getItem("escrowData")) || {
    totalHeld:0,
    contributions: []
};

//Mock Ai : Increase TrustScore if user has contributed regularly
const userContributions = escrowData.contributions.filter(c =>c.member === "You").length;
const aiAdjustedScore = Math.min(5, susuData.trustScore + (userContributions * 0.1));
console.log("AI Adjusted TrustScore:", aiAdjustedScore);

document.getElementById('trust-score').textContent = `TrustScore: ${aiAdjustedScore.toFixed(1)}`;



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

document.getElementById("log-contribution").addEv
entListener("click", function() {
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

document.getElementById("ai-reminder").addEventListener("click", function() {
    const user = JSON.parse(localStorage.getItem("user")) || { username: "Guest" };
    const reminderMessage = `Hey ${user.username}, AI predicts you're most active now! Your $${susuData.contribution} ${susuData.frequency} contribution is due soon.`;
    console.log("AI Reminder:", reminderMessage);
    alert(reminderMessage);
});

document.getElementById("dispute-assistant").addEventListener("click", function() {
    const escrowData = JSON.parse(localStorage.getItem("escrowData")) || { totalHeld: 0, contributions: [] };
    const userContributions = escrowData.contributions.filter(c => c.member === "You").length;
    const totalContributions = escrowData.contributions.length;
    const aiSuggestion = userContributions >= totalContributions / 2
        ? "AI Suggestion: You've contributed enough to request a partial refund."
        : "AI Suggestion: Contribute more to strengthen your dispute case.";
    console.log("Dispute Analysis:", aiSuggestion);
    alert(aiSuggestion);
});