#include <bits/stdc++.h> 
#include <iostream>
using namespace std;

int main() {
    int principal, time;
    float rate;
    cin >> principal;
    cin >> rate;
    cin >> time;
    int interest = principal * rate * time / 100;
    cout << interest;
}

/*
Example input =  
2000    <= Amount
2.2     <= Interest
4       <= # of Years

and output = 
176     <= Simple Interest

*/