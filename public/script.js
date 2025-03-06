const API_URL = "http://localhost:8787"; //Local dev

async function logExercise() {
    const data = {
        ExerciseName: document.getElementById("exerciseName").value,
        Weight: parseFloat(document.getElementById("weight").value),
        Sets: parseInt(document.getElementById("sets").value, 10),
        Reps: parseInt(document.getElementById("reps").value, 10) || 0
    };

    const response = await fetch(`${API_URL}/exercise`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    document.getElementById("response").innerText = await response.text();
}

async function getExerciseHistory() {
    const exerciseName = document.getElementById("historyName").value;

    const response = await fetch(`${API_URL}/exercise/history/${exerciseName}`, {
        method: "GET"
    });

    document.getElementById("response").innerText = await response.text();
}
