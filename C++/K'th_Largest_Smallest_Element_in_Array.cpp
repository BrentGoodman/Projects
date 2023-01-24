#include <iostream>
#include<algorithm>

using namespace std;

void kthSmallestLargest(int arr[], int n, int k) {
  for(int i=0;i<n-1;i++) {         // first we do sorting
       for(int j=i+1;j<n;j++) {
           if(arr[j]<arr[i])
               swap(arr[i],arr[j]);
       }
    }

    int small = -1;
    int large = -1;
    int indx = 0;
    for(int i=0;i<n;i++) {
        if(arr[i] < arr[i+1])
            indx+=1;
        if(indx == k-1) { // indx will be k-1 if it was sorted
            small = i+1;  // here indx will be acc to i
            break;
        }
    }
    
    // For kth largest
    int indxx = 0;
    for(int i= n-1 ;i>=0;i--) { // from reverse side
        if(arr[i]> arr[i-1])
            indxx+=1;
        if(indxx==k-1) { // kth will be k-1 from back if it was sorted
            large=i-1;
            break;
        }
    }
    if(large==-1)
        cout<<"-1"<<" ";
    else
        cout<<arr[large]<<" ";
    if(small==-1)
        cout<<"-1";
    else
        cout<<arr[small];
   cout<<endl; 
}

int main() {
    int t;
    cin >> t;

    while (t > 0) {
        int n, k;
        cin >> n >> k;
        int arr[n];
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        kthSmallestLargest(arr, n, k);
        t--;
    }
    return 0;
}

/*
Example:

Input = 
1       <= Integer denoting the number of test cases
6 1       <= "N" & "K"; N value is the number of positive integers, and "K" is the Index to find the Smallest and larget of
5 5 5 5 5 5     <= The Array

Output = 
5 5     <= 5 is the second largest and second smallest element in an array {5, 5, 5, 5, 5, 5}.

*/