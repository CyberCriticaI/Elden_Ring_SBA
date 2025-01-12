document.getElementById('creation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const characterClass = document.getElementById('class').value;
    const background = document.getElementById('background').value;
    
//  alert and pop up
    alert(`Character Created!\nName: ${name}\nClass: ${characterClass}\nBackground: ${background}`);
});

// Example lore insights
const loreContent = `
    <h3>Welcome to the Lands Between</h3>
    <p>The storyteller folds her slender hands - both pairs - and speaks. “It happened an age ago. But when I recall, I see it true.” So begins the tale of the Shattering, a devastating war between the children of Marika, Demigods of the Lands Between. One grim night in the depths of winter, a flock of unknown assassins stole across the Lands Between. In a coetaneous attack, this foul covenant snuffed out the lives of many of the God-Queen’s kin throughout the empire, too numerous and too scattered for her godly protection to save. The assassins’ targets were multifold, but none was as devastating a loss to the Eternal Queen as that of Godwyn the Golden. After his death, the Elden Ring was somehow shattered, and the order of the world broke with it. Out of this chaos came war. Open, bitter war, pitting blood against blood and kin against kin. The conflict broke a vast and prosperous empire into brittle fragments. No single side could find enough purchase to maintain a decisive victory, even when fueled by the power of a Great Rune. The battle of General Radahn against Malenia the Severed illustrated that neither strength nor skill alone would be enough to take control of the entirety of the lands Marika had united. And so, the Lands Between are no longer gripped by open war, but caught in an uneasy stalemate that seems impossible to resolve. “Unless of course,” the storyteller says, a coy smile on both her lips, “thou shouldst take the crown?” Take a deeper dive into the carefully crafted mythology of George R.R. Martin – author of The New York Times best-selling fantasy series, A Song of Ice and Fire – and the world created by FromSoftware based on his work in this new trailer available here. Transported to ages long ago, you will relive the Shattering, a war that brought darkness to the Lands Between, initiated by demigods’ hunger for power. You’ll fight alongside General Radahn and Malenia the Severed, but even these two undefeatable warriors couldn’t reunite a world so badly broken. There is only one hope left: the hope that a new Elden Lord will rise and lift the veil of shadows that has fallen over Marika’s domain. The wait is almost over. Soon you’ll venture into the Lands Between and strive to become its Elden Lord. Stand ready, Tarnished, and prepare to claim what fate has promised you.</p>
`;

document.getElementById('lore-content').innerHTML = loreContent;

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('youtube-video');
});