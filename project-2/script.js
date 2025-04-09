function convertToBTC() {
    const usd = document.getElementById('usd-input'). value;
    const btcPrice = 80000;
    const btc = usd / btcPrice;
    document.getElementById('btc-result').textContent = `BTC: ${btc.toFixed(8)}`;
    console.log('usd')
    //Timestamp
    const now = new Date().toLocaleTimeString();
    document.getElementById('last-updated').textContent = `Last updated: ${now}`;

}

function clearConverter() {
    document.getElementById('usd-input').value = ''
    document.getElementById("btc-result").textContent = 'BTC: 0';
    console.log('clear')
}