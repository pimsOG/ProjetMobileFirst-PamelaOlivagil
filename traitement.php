<?php
if( isset($_POST) && count($_POST) > 0 ){

    $TO = "p.olivagil@gmail.com";

    $h = "From: " . $TO;

    $msgs = "";

    foreach ($_POST as $key => $val) {

        $msgs .= "$key : $val\n";

    }
    $subject = "batizado mestre torneiro 2016";

    extract( $_POST );

    mail($TO, $subject, $msgs);

}

Header("Location: index.html");
