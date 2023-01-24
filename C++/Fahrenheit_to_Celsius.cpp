#include <bits/stdc++.h> 
#include <iostream>
using namespace std;

int main() {

    float tempFStart;
    cin >> tempFStart;
    float tempFEnd;
    cin >> tempFEnd;
    float tempInc;
    cin >> tempInc;

    int tempC;

    while (tempFStart <= tempFEnd) {
        tempC = (tempFStart - 32) / 1.8;
        cout << tempFStart << ("\t") << floor(tempC) << endl;
        tempFStart += tempInc;    
    }

    return 0;
}

/*
Example Input =
36  <= Starting Fahrenheit
618 <= End Fahrenheit
78  <= Temp Increase Increments

Output = 
36	2  <= Fahrenheit | Celsius
114	45
192	88
270	132
348	175
426	218
504	262
582	305

Input 2 = 
90      <= Starting Fahrenheit
432     <= End Fahrenheit
31      <= Temp Increase Increments

Output = 
90	32  <= Fahrenheit | Celsius
121	49
152	66
183	83
214	101
245	118
276	135
307	152
338	170
369	187
400	204

*/