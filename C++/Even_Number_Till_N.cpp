#include <bits/stdc++.h> 
#include <iostream>
#include <regex>

using namespace std;

int main() {
    int n;
    int i = 1;
    int sum = 0;
    cin >> n;

    while (i <= n) {
        if (i % 2 == 0) {
            sum += i;
        }
        i++;
    }

    cout << sum;

    return 0;
}

/*
Example input = 6 and output = 12
The even numbers from 1 to 6 are: 2, 4, 6, So adding these 3 numbers give a sum of 12.
*/