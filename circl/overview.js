const susuData = {
    contribution: 50,
    frequency: 'Weekly',
    payoutOder: 3,
    trustScore: 4.2,
    memebers: ["Anna", "Daniel", "Mark", "Sophie"]
};
document.getElementById("contribution-display").textContent = `$${susuData.contribution} ${susuData.frequency}`;
document.getElementById("next-payout").textContent = `Next Payout: You (Week ${susuData.payoutOrder})`;
document.getElementById("trust-score").textContent = `TrustScore: ${susuData.trustScore}`;

const membersList = document.getElemnetById('members-list');
membersList.innerHtml = '';
susuData.members.forearch(member => {
    const li = document.createElement('li');
    li.textContent = membersList;
    membersList.appendChild(li);
});

const payoutText = document.getElementById("next-payout");
payoutText.innerHTML = `Next Payout: <span class="highlight">You</span> (Week ${susuData.payoutOrder})`;


document.getElementById("last-updated").textContent = `Last updated: ${new Date().toLocaleTimeString()}`;
