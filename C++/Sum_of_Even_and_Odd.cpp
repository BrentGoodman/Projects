#include <bits/stdc++.h> 
#include <iostream>
#include <string>

using namespace std;

int main() {
    int n;
    int sumO = 0;
    int sumE = 0;
    cin >> n;

    while (n != 0) {
        int rem = n % 10;
        if (rem % 2 == 0) {
            sumE += rem;
        } else {
            sumO += rem;
        }
        n /= 10;
    }

    cout << sumE << " " << sumO;

    return 0;
}

/* 
Example:
Input = 
430
228900
49901999

Output = 
4 3     <= Sum of Even | Sum of Odd from Input
12 9
4 46


*/