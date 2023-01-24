#include <bits/stdc++.h> 
#include <iostream>

using namespace std;

void printDivisors (int n) {
    for (int i = 1; i <= n; i++) {
        if (n % i == 0) {
            cout << i << " ";
        }
    }
    
}

int main() {
    int n;
    cin >> n;
    printDivisors(n);
    return 0;
}

/*
Example:

Input = 
13
21
27
42

Output = 
1 13 
1 3 7 21
1 3 9 27
1 2 3 6 7 14 21 42


*/