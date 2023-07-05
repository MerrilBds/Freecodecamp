/*
1 == 1  // true
1 == 2  // false
1 == '1' // true
"3" == 3  // true
*/

function testEqual(val) {
    if (val == 12) { 
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);