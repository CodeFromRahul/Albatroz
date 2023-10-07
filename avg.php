<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$database = "albertroz";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT rate FROM rating";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $total = 0;
    $count = 0;

    // Output data of each row
    while($row = $result->fetch_assoc()) {
        // Calculate total and count of numbers
        $total += $row["rate"];
        $count++;
    }

    // Calculate average
    $average = $total / $count;

    echo "Average: " . $average;

    // Save the average in a new table with a reference to a phone
    $phone = "123456"; // Replace with the actual phone value
    $insertSql = "INSERT INTO average_rating (phone, average) VALUES ('$phone', $average)";
    if ($conn->query($insertSql) === TRUE) {
        echo "Average saved successfully!";
    } else {
        echo "Error saving average: " . $conn->error;
    }
} else {
    echo "0 results found in the database.";
}

// Close connection
$conn->close();
?>