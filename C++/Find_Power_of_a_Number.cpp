#include <bits/stdc++.h> 
#include <iostream>
using namespace std;

int main() {
    int num;
    cin >> num;
    int power;
    cin >> power;

    int sum = 1;

    for (int i = 0; i < power; i++ ) {
        sum = sum * num;
    }

    cout << sum;

    return 0;
}

/*
Example:

Input=
0 1     <= (x, y) Number "x" to the power of "y"
4 0
0 0

Output=
0
1
1

*/