#include <bits/stdc++.h>
#include <iostream>

using namespace std;

int search(int arr[], int n, int x) {
    int i;
    for (i = 0; i < n; i++)
        if (arr[i] == x)
            return i;
    return -1;
}

int main() {
    int n;
    cin >> n;
    int arr[n];

    for (int i = 0; i < n; i++) {
        cin >> arr [i];
    }

    int x;
    cin >> x;
    int result = search(arr, n, x);
    if (result == -1)
        cout << -1;
    else
        cout << result;
    return 0;
        
}

/*
Example: 

Input = 
15      <= Array Size
10 41 33 85 3 32 24 10 23 85 10 11 33 3 43  <= Array Input
43      <= Array value to search for index of

Output =
14      <= Index of input value in array

*/