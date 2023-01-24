#include <bits/stdc++.h>  
#include <iostream> 

using namespace std;

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
}

void reverseArray(int arr[], int low, int high) {
    while (low < high) {
        swap(arr[low], arr[high]);
        low++;
        high--;
    }
}

void rotateArray(int arr[], int k, int n) {
    reverseArray(arr, 0, k - 1);
    reverseArray(arr, k, n - 1);
    reverseArray(arr, 0, n - 1);
}

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    int k;
    cin >> k;
    rotateArray(arr, k, n);
    printArray(arr, n);
    return 0;
}

/*
Example:

Input = 
6       <= Array Size
1 3 6 11 12 17      <= Array value input
4       <= # of places to rotate to the right

Output =
12 17 1 3 6 11      <= Rotated Array


*/