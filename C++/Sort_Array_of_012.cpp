#include <bits/stdc++.h> 
#include <iostream>
using namespace std;

void sort012(int arr[], int n) {
    int low = 0;
    int mid = 0;
    int high = n - 1;

    while (mid <= high) {
        if (arr[mid] == 0) {
            swap(arr[mid], arr[low]);
            mid++;
            low++;
        } else if (arr[mid] == 1) {
            mid++;
        } else {
            swap(arr[mid], arr[high]);
            high--;
        }
    }
}

int main() {
    int t;
    cin >> t;

    while (t > 0) {
        int n;
        cin >> n;
        int arr[n];
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        sort012(arr, n);
        for (int i = 0; i < n; i++) {
            cout << arr[i] << " ";
        }
        cout << endl;
        t--;
    }
    return 0;
}

/*
Example:

Input = 
1       <= Number of Tests
6       <= Length of Array
2 1 0 1 2 0     <= Array values

Output = 
0 0 1 1 2 2     <= Sorted Array by Min > Max

Input 2 =
1
11
2 2 1 1 2 1 0 0 1 2 2 

Output 2 = 
0 0 1 1 1 1 2 2 2 2 2 

*/