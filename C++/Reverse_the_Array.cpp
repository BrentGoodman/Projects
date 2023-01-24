#include <bits/stdc++.h>
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];

    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    for (int i = n - 1; i >= 0; i--) {
        cout << arr[i] << " ";
    }
    return 0;    
}

/*
Example:

Input = 
10      <= Array Size
11 4 37 80 3 32 24 1 23 81      <= Array Value

Output =
81 23 1 24 32 3 80 37 4 11      <= Flipped Array

*/