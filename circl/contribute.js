document.getElementById('contribute-btn').addEventListener('click',function() {
    const result = document.getElementById('contribute-result');
    result.textContent = 'Contrubution successful!';
    result.style.color = 'green';
    result.style.opacity = '0';
    sertTimeout(() => {
        result.style.opacity = '1';
    }, 100);

}) 