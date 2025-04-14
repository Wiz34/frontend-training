
const pools = [
    { id: 1, contribution: 50, frequency: "Weekly", members: 4, total: 50 * 4 },
    { id: 2, contribution: 100, frequency: "Monthly", members: 3, total: 100 * 3 },
    { id: 3, contribution: 25, frequency: "Biweekly", members: 5, total: 25 * 5 }
];

// Calculate total saved
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