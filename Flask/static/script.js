document.getElementById('anemiaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.error) {
            document.getElementById('result').textContent = `Error: ${result.error}`;
        } else {
            document.getElementById('result').textContent = `Prediction: ${result.prediction}`;
        }
    })
    .catch(error => {
        document.getElementById('result').textContent = `Error: ${error.message}`;
    });
});
