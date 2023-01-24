#include <bits/stdc++.h> 
#include <iostream>
#include <regex>

using namespace std;

int main() {
    int a, b, c;
    
    cin >> a >> b >>c;

    if (a > b && a > c) {
        cout << a;
    } else if (b > a && b > c) {
        cout << b;
    } else {
        cout << c;
    }

    return 0;
}

/*
Example input =  
4 6 1
-32 -23 -76
-4 0 5

and output = 
6
-23
5

*/