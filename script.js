// Sample ribbon data (replace with actual data)
const ribbonData = [
    { name: "Medal 1", imageUrl: "medal1.png" },
    { name: "Medal 2", imageUrl: "medal2.png" },
    // Add more ribbon data as needed
];

// Function to render ribbon options
function renderRibbonOptions() {
    const ribbonOptionsContainer = document.getElementById("ribbon-options");

    ribbonData.forEach((ribbon, index) => {
        const ribbonOption = document.createElement("div");
        ribbonOption.className = "ribbon-option";
        ribbonOption.draggable = true;
        ribbonOption.dataset.index = index;

        // Set background image or other styling based on ribbon data
        ribbonOption.style.backgroundImage = `url(${ribbon.imageUrl})`;

        ribbonOption.addEventListener("dragstart", (event) => {
            event.dataTransfer.setData("text/plain", index);
        });

        ribbonOptionsContainer.appendChild(ribbonOption);
    });
}

// Function to handle dropping ribbons onto the rack
function handleDrop(event) {
    event.preventDefault();
    const ribbonIndex = event.dataTransfer.getData("text/plain");
    
    // Add logic to handle the dropped ribbon index and update the ribbon rack
}

// Event listeners
document.addEventListener("DOMContentLoaded", renderRibbonOptions);

const ribbonRack = document.getElementById("ribbon-rack");
ribbonRack.addEventListener("dragover", (event) => event.preventDefault());
ribbonRack.addEventListener("drop", handleDrop);
