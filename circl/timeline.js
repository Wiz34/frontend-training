const susuData = JSON.parse(localStorage.getItem("susuData")) || {
    contribution: 50,
    frequency: "Weekly",
    payoutOrder: 3,
    trustScore: 4.2,
    members: ["Anna", "Daniel", "Mark", "Sophia"]
};

const timelineList = document.getElementById("timeline-list");
susuData.members.forEach((member, index) => {
    const week = index + 1;
    const isYou = week === susuData.payoutOrder;
    const li = document.createElement("li");
    li.textContent = `Week ${week}: ${member}`;
    if (isYou) {
        li.classList.add("you");
        li.textContent += " (You)";
    }
    timelineList.appendChild(li);
});