<?php
include('../../dbconnection.php');

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $query = "INSERT INTO userTable (username, password) VALUES ('$username','$password')";

    if(mysqli_query($conn, $query)){
        echo "Registeration sucdessful! <a href='login.php'>Login here</a>";
    }
    else
    {
        echo "Error: " . $query . "<br>" . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>