<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>

    <?php
    // Ex2-String
    echo "Tomorrow I'll study PHP server-side scripting language.";
    echo "Can you check if this command is correct : del c:\\*.*.";

    // Ex3-Table
    echo "<table><tr><th>Firstname</th><th>Lastname</th><th>Age</th></tr>
    <tr><td>Jill</td><td>Smith</td><td>50</td></tr>
    <tr><td>Eve</td><td>Jackson</td><td>94</td></tr>
    <tr><td>John</td><td>Doe</td><td>80</td></tr></table>";

    // Ex4-Factorial calculation
    function factorial($n)
    {
        $fact = 1;
        for ($i = 1; $i <= $n; $i++) {
            $fact = $fact * $i;
        }
        echo "The factorial of $n is $fact";
    }
    $fnumber = 10;
    $factObj = factorial($fnumber);
    echo "<br>";

    // Ex5-Prime check
    function isPrime($a)
    {
        for ($b = 2; $b <= $a / 2; $b++) {
            if ($a % $b == 0) {
                return false;
            } else {
                return true;
            }
        }
    }
    $pnumber = 7;
    $primeObj = isPrime($pnumber);
    if ($primeObj == false) {
        echo "$pnumber is not a prime number";
    } else {
        echo "$pnumber is a prime number";
    }
    echo "<br>";

    // Ex6-Sorting
    $snumber = array(123, 1, 25, 1, 261, 61, 66, 6, 66112126, 7, 658, 56, 23, 92);
    sort($snumber);
    $arrlength = count($snumber);
    for ($x = 0; $x <= $arrlength; $x++) {
        if ($x < $arrlength - 1) {
            echo "$snumber[$x], ";
        } elseif ($x == $arrlength - 1) {
            echo "$snumber[$x].";
        }
    }
    echo "<br>";

    // Ex7-Reverse string
    $rvstring = "I love WAD";
    for ($i = strlen($rvstring) - 1; $i > -1; $i--) {
        echo $rvstring[$i];
    }
    echo "<br>";
    // or strrev()
    echo strrev($rvstring);
    ?>
</body>

</html>