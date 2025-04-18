document.getElementById("susu-form").addEventListener("submit", function(event) {
    console.log("Form submitted!");
    event.preventDefault();
    const contribution = document.getElementById("contribution").value;
    const frequency = document.getElementById("frequency").value;
    const payoutOrder = document.getElementById("payout-order").value;
    const result = document.getElementById("form-result");

    if 
        (contribution === "" || payoutOrder === "" || contribution <= 0 || payoutOrder <= 0) {
            result.textContent = "Please fill out all fields with valid values.";
            result.style.color = "red";
            result.style.opacity = "0";
            setTimeout(() => {
                result.style.opacity = "1";
            }, 100);
            return
        } 

        console.log("Inputs:", contribution, frequency, payoutOrder)

            const susuData = {
              contribution: Number(contribution),
             frequency,
              payoutOrder: Number(payoutOrder),
             trustScore: 4.2,
             members:["Anna", "Daniel", "Mark", "Sophie"]
              };
             localStorage.setItem("susuData", JSON.stringify(susuData));
           //Debug: Confirm save
            console.log("Saved to localStorage:", localStorage.getItem("susuData"));


        // Display the result

    
        result.textContent = `Susu created! $${contribution} ${frequency}, payout in week ${payoutOrder}.`;
        result.style.color = 'green';
        result.style.opacity = "0";
        setTimeout(() => {
            result.style.opacity = "1";
        }, 100);
    });

   