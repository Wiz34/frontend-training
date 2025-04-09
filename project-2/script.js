function convertToBTC() {
    const usd = document.getElementById('usd-input'). value;
    const btcPrice = 80000;
    const btc = usd / btcPrice;
    document.getElementById('btc-result').textContent = `BTC: ${btc.toFixed(8)}`;
    console.log('usd')

}
