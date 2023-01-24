#include <bits/stdc++.h> 
#include <iostream>

using namespace std;

int totalPrime (int a, int b) {
    int i, j, flag, count = 0;
    for (i = a; i <= b; i++) {
        flag = 0;

        for (j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0 && i >= 2) {
          count++;
        }
    }
    return count;
}

int main() {
    int S, E;
    cin >> S >> E;
    cout << totalPrime(S, E);
    return 0;
}

/*
Example:

Input = 
1 100   <= Start Number | End Number
2 27
2 20 

Output =
25      <= Quantity of Prime Numbers
9
8

*/