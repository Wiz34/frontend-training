const susuData = JSON.parse(localStorage.getItem("susuData")) || {
    contribution: 50,
    frequency: "Weekly",
    payoutOrder: 3,
    trustScore: 4.2,
    members: ["Anna", "Daniel", "Mark", "Sophie"]
};

// Track total contributions in escrow (mocked)
let escrowData = JSON.parse(localStorage.getItem("escrowData")) || {
   totalHeld: 0,
   contribution: [] // Array to store who contributed how much
};




document.getElementById("escrow-total").textContent = `Funds in Escrow: $${escrowData.totalHeld}`;
document.getElementById('contribute-btn').addEventListener('click',function() {
    const result = document.getElementById('contribute-result');
    const amount = susuData.contribution;// Use the contribution amount from susuData
    escrowData.totalHeld += amount;
    escrowData.contributions.push({
        member: "You",
        amount: amount,
        date: new Date().toLocaleDateString()
    });
    localStorage.setItem("escrowData", JSON.stringify(escrowData));
    console.log("Escrow updated:", escrowData);

    document.getElementById("escrow-total").textContent = `Funds in Escrow: $${escrowData.totalHeld}`;
    result.textContent = `Contrubution submitted! $${amount} added to escrow`;
    result.style.color = 'green';
    result.style.opacity = '0';
    setTimeout(() => {
        result.style.opacity = '1';
    }, 100);

});