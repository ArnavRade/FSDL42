// Initial resource counts
let gold = 100;
let wood = 50;

// Building levels
let barracksLevel = 0;
let goldMineLevel = 0;

// Collect resources every few seconds
function collectResources() {
    gold += 10;
    wood += 5;
    updateResources();
}

// Update the resource counts on the page
function updateResources() {
    document.getElementById("gold").innerText = gold;
    document.getElementById("wood").innerText = wood;
}

// Build a barracks if the user has enough resources
function buildBarracks() {
    if (gold >= 50 && wood >= 30) {
        gold -= 50;
        wood -= 30;
        barracksLevel++;
        document.getElementById("barracks-level").innerText = barracksLevel;
        updateResources();
        alert("Barracks built! Current Level: " + barracksLevel);
    } else {
        alert("Not enough resources to build Barracks!");
    }
}

// Build a gold mine if the user has enough resources
function buildGoldMine() {
    if (gold >= 100 && wood >= 50) {
        gold -= 100;
        wood -= 50;
        goldMineLevel++;
        document.getElementById("gold-mine-level").innerText = goldMineLevel;
        updateResources();
        alert("Gold Mine built! Current Level: " + goldMineLevel);
    } else {
        alert("Not enough resources to build Gold Mine!");
    }
}

// Call the resources collection every 5 seconds (simulate gold production)
setInterval(collectResources, 5000);
