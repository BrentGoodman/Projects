#include <bits/stdc++.h>
#include <iostream>

using namespace std;

int main() {
    int n, key, j = 0;
    cin >> n;
    int arr[n];

    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    cin >> key;

    for (int i = n - 1; i > 0; i--) {
        if (key == arr[i]) {
            j = i;
            break;
        }
    }
    if (j > 0) {
        cout << j;
    } else {
        cout << -1;
    }
    return 0;    
}

/*
Example:

Input = 
10      <= Array Size
1 4 3 8 3 32 24 1 23 8      <=Array Values
8       <= Array value to search for LAST index of

Output =
9       <= Location of LAST index of input value


*/