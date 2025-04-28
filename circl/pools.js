
const pools = [
    { id: 1, contribution: 50, frequency: "Weekly", members: 4, total: 50 * 4 },
    { id: 2, contribution: 100, frequency: "Monthly", members: 3, total: 100 * 3 },
    { id: 3, contribution: 25, frequency: "Biweekly", members: 5, total: 25 * 5 }
];

const susuData = JSON.parse(localStorage.getItem("susuData")) || {
    contribution: 50,
    frequency: 'Weekly',
    payoutOrder: 3,
    trustScore: 4.2,
    members: ["Anna", "Daniel", "Mark", "Sophie"]
};

let recommendedPool = pools[0];
pools.forEach(pool => {
    if (pool.contribution <= susuData.contribution + 25 && pool.contribtution - 25 && pool.frequency === susuData.frequency) {
        recommendedPool = pool;

    }
});
console.log("AI Recommended Pool:", recommendedPool);

const recommendedDiv = document.createElement("div");
recommendedDiv.innerHTML = `<h3>AI Recommended Pool</h3><p>Pool #${recommendedPool.id}: $${recommendedPool.contribution} ${recommendedPool.frequency}, ${recommendedPool.members} members</p>`;
document.querySelector(".container").insertBefore(recommendedDiv, document.getElementById("total-saved"));

const totalSaved = pools.reduce((sum, pool) => sum + pool.total, 0);
document.getElementById("total-saved").textContent = `Total Saved: $${totalSaved}`;

// Display pools
const poolsList = document.getElementById("pools-list");
poolsList.innerHTML = "";
pools.forEach(pool => {
    const li = document.createElement("li");
    li.innerHTML = `Pool #${pool.id}: $${pool.contribution} ${pool.frequency}, ${pool.members} members <span>$${pool.total}</span>`;
    poolsList.appendChild(li);
});