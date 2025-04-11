function convertToBTC() {
    const usd = document.getElementById('usd-input'). value;
    const result = document.getElementById('btc-result')
    if  ( usd ==="" || usd <= 0) {
        result.textContent = "Please enter a valid USD amount."; 
        result.style.color = 'red';
        return;
    }
   
    const btcPrice = 80000;
    const btc = usd / btcPrice;
   result.textContent = `BTC: ${btc.toFixed(8)}`;
   result.style.color = "#f7931a"
    console.log('usd')
    //Timestamp
    const now = new Date().toLocaleTimeString();
    document.getElementById('last-updated').textContent = `Last updated: ${now}`;

}

function clearConverter() {
    document.getElementById('usd-input').value = ''
    document.getElementById("btc-result").textContent = 'BTC: 0';
    const now = new Date().toLocaleTimeString();
    document.getElementById('last-updated').textContent = `Last updated: ${now}`;
    console.log('clear')
}