/*

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false

*/
function testGreaterThan(val) {
    if (val > 100) {  
        return "Over 100";
    }

    if (val > 10) {  
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterTha