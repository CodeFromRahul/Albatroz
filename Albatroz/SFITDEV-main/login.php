<?php
   
    //database connection
    $conn = new mysqli("localhost","root","","albertroz");
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    if($conn->connect_error){
        die("Failed to conect : ".$con->connect_error);

    }
    else{
        $stmt = $conn->prepare("select * from tb_user where phone=?");
        $stmt->bind_param("s", $phone);
        $stmt->execute();
        $stmt_result = $stmt->get_result();
        if($stmt_result->num_rows > 0){
            $data = $stmt_result->fetch_assoc();
            if($data['password'] === $password){
                // echo "<h2>Login Successfully</h2>";
                // header('Location: home page.html');
                echo '<script>alert("Login successfully"); window.location.href = "index.html";</script>';
                
            }
            else{
                echo "<h2>Invalid phone or Password</h2>";
            }
        }else{
            echo "<h2>Invalid phone or password</h2>";
        }
    }

?>