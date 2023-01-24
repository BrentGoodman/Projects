#include <bits/stdc++.h> 
#include <iostream>

using namespace std;

int countBits(int x){
    int c = 0;
    while(x != 0) {
        if(x & 1) { 
            c++;
        }  
    x=x>>1;
    }
  return c;
}

int main() {
    int n;
    cin >> n;
    cout<<countBits(n);
    return 0;
}

/*
Example:

Input = 
27
42

Output =
4
3

*/