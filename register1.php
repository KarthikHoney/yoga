<?php

header("Content-Type:application/json");
header("Access-control-Allow-Origin: *");
header("Access-control-Allow-Methods: POST");
header("Access-Control-Allow-Headers:Content-Type");

$local='localhost';
$username='root';
$password= '';
$db='yoga';

$conn = mysqli_connect($local,$username,$password,$db);

if($conn->connect_error){
    die(json_encode(array("status" =>"500","message" =>"server error")));
}

$input = json_decode(file_get_contents("php://input"),true);

if (isset($input['sname']) && isset($input['parentname']) && isset($input['gmail']) && isset($input['dob']) && isset($input['password']) && isset($input['number']) && isset($input['wnumber']) && isset($input['grade']) && isset($input['address'])) {

    $sname = $input['sname'];
    $parentname = $input['parentname'];
    $gmail = $input['gmail'];
    $dob = $input['dob'];
    $password = $input['password'];
    $number = $input['number'];
    $wnumber = $input['wnumber'];
    $grade = $input['grade'];
    $address = $input['address'];

    $stmt = $conn->prepare("INSERT INTO indutial_student (sname, parentname, gmail, dob, password, number, wnumber, grade, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssssss", $sname, $parentname, $gmail, $dob, $password, $number, $wnumber, $grade, $address);

    if ($stmt->execute()) {
        echo json_encode(array("status" => 200, "message" => "success"));
    } else {
        echo json_encode(array("status" => 500, "message" => "Failed to execute statement: " . $stmt->error));
    }

    $stmt->close();
} else {
    echo json_encode(array("status" => 400, "message" => "All fields are required."));
}

$conn->close();

?>