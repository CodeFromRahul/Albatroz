<?php
session_start();
$conn = mysqli_connect("localhost","root","","albertroz");
$name = filter_input(INPUT_POST, 'name');
$phone = filter_input(INPUT_POST, 'phone');
$password = filter_input(INPUT_POST, 'password');
if(!empty($name)){
if (!empty($password)) {
    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "albertroz";
    //connection
    $conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
    if (mysqli_connect_error()) {
        die('Connect Error ('.mysqli_connect_error().') '
        .mysqli_connect_error());
    }
    else{
        $sql = "INsert Into tb_user (name, phone, password)
        value('$name', '$phone', '$password')";
        if ($conn->query($sql)) {
            echo '<script>alert("Register successful"); window.location.href = "login.html";</script>';
        } else {
            echo "Error: ".$sql ."<br>".$conn->error;
        }
        
        $conn->close();
    }
}
else{
    echo "Password should not be empty";
    die();
}
}
else{
    echo "Username should not be empty";
    die();
}
?>