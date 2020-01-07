var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var i;
for (i = 0; i < 15; i++) {
    if (arr[i] % 2 == 0) {
        document.writeln(arr[i] + ' is even.' + '<br\>');
    } else {
        document.writeln(arr[i] + ' is odd.' + '<br\>');
    }
}