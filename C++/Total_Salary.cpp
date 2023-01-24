#include <bits/stdc++.h> 
#include <iostream>
#include <regex>

using namespace std;


int mainTotalSalary() {

    float totalSalary;
    int basic;
    char let;
    cin >> basic >> let;

    float hra = (basic * 0.20);
    float da = (basic * 0.50);
    float pf = (basic * 0.11);
    float allow;

    if (let == 'A') {
        allow = 1700;
    } else if (let == 'B') {
        allow = 1500;
    } else {
        allow = 1300;
    }
    
    totalSalary = basic + hra + da + allow - pf;

    cout << (int)round(totalSalary);

    return 0;
}

/*
Example input =  
10000 A
4567 B

and output = 
17600
8762

Explanation: 
We have been given the basic salary of Rs. 4567. We need to calculate the hra, da, and pf. 
Now when we calculate each of the, it turns out to be:
hra =  20% of Rs. 4567 = Rs. 913.4
da = 50% od Rs. 4567 = Rs. 2283.5
pf = 11% of Rs. 4567 = Rs. 502.37

Since the grade is 'B', we take allowance as Rs. 1500.
On substituting these values to the formula of total salary, we get Rs. 8761.53 and now 
rounding it off will result in Rs. 8762 and hence the Answer.

*/