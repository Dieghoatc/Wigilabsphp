<?php

session_start();

$conn = mysqli_connect(
    'us-cdbr-iron-east-05.cleardb.net',
    'b534c4dfed51e9',
    'd9fe7e0c',
    'heroku_92fc27aed77ac9c'
) or die(mysqli_erro($mysqli));

?>
