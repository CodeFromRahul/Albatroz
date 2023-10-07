<?php
    $email = $_POST['email'];
    $password = $_POST['password'];
    //database connection
    $conn = new mysqli("localhost","root","","albertroz");
    if($conn->connect_error){
        die("Failed to conect : ".$con->connect_error);

    }
    else{
        $stmt = $conn->prepare("select * from regi where email=?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt_result = $stmt->get_result();
        if($stmt_result->num_rows > 0){
            $data = $stmt_result->fetch_assoc();
            if($data['password'] === $pass){
                // echo "<h2>Login Successfully</h2>";
                // header('Location: home page.html');
                echo '<script>alert("Login successfully"); window.location.href = "home page.html";</script>';
                
            }
            else{
                echo "<h2>Invalid Email or Password</h2>";
            }
        }else{
            echo "<h2>Invalid Email or password</h2>";
        }
    }

?>