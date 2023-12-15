<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "";


$conn = mysql_connect($servername,$database, $username, $password);
if($conn){
    header("Location:index.php");
}
else
{
    echo "error";
    die("Error" . mysql_connect_error());
    header("Location:login.php");
}
?>