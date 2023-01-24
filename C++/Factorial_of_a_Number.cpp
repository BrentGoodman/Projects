#include <iostream>
using namespace std;

int main() {
    int num, fac, sum = 1;

    cin >> num;

    if (num == 0) {
        cout << 1;
    } else if (num < 0) {
        cout << "Error";
    } else {
        for (int i = num; i > 0; i--) {
            sum = sum * i;
        }
    cout << sum;
    } 

    return 0;
}

/*
Example: 

Input = 
5
12
10

Output = 
120
479001600
3628800

*/