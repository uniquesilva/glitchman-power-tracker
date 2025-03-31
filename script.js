
const TOTAL_MC = 100000;
const SUPPLY = 99650000;

async function updatePowerBar() {
  try {
    const res = await fetch("/.netlify/functions/gman-price");
    const data = await res.json();
    const price = data.price || 0;
    const mc = price * SUPPLY;
    const progress = Math.min((mc / TOTAL_MC) * 100, 100).toFixed(2);

    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').innerText = `Glitch Power: ${progress}%`;
    document.getElementById('marketCapText').innerText = `Current Market Cap: $${mc.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

    let milestone = '';
    if (progress >= 100) milestone = 'MAX OUTPUT: Glitchman Has Ascended!';
    else if (progress >= 75) milestone = 'Overclock Mode Engaged';
    else if (progress >= 50) milestone = 'Glitch Surge Activated';
    else if (progress >= 25) milestone = 'Low Voltage Achieved';
    document.getElementById('milestone').innerText = milestone;

  } catch (err) {
    console.error("Failed to fetch market cap:", err);
  }
}

updatePowerBar();
setInterval(updatePowerBar, 10000);
