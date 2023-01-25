#include <bits/stdc++.h>
#include <iostream>
#include <algorithm>

using namespace std;

class Fraction {

public:
    int num; // Numerator
    int deno; // Denominator

    Fraction(int num, int deno) {
        this->num = num;
        this->deno = deno;
    }

    void simplify(int &num, int &deno) {
        int div = __gcd(num, deno);
        num = num / div;
        deno = deno / div;
    }

    void print(int num1, int deno1) {
        cout << num1 << "/" << deno1 << endl;
    }

    void add(int snum1, int sdeno1) {
        num = num * sdeno1 + deno * snum1;
        deno = deno * sdeno1;
        simplify(num, deno);
        print(num, deno);
    }

    void multiply(int snum1, int sdeno1) {
        num = num * snum1;
        deno = deno * sdeno1;
        simplify(num, deno);
        print(num, deno);
    }
};

int main() {
    int num1, deno1;
    cin >> num1 >> deno1;
    Fraction f(num1, deno1);

    int n;
    cin >> n;

    while (n--) {
        int q, snum1, sdeno1;
        cin >> q >> snum1 >> sdeno1;
        if (q == 1) {
            f.add(snum1, sdeno1);
        }

        else if (q == 2) {
            f.multiply(snum1, sdeno1);
        }
    }
    return 0;
}

/*
Example: 

Input =
60 70   <= Initial Fraction
1       <= Number of queries
1 56 32 <= Choice (1 = Addition or 2 = Multiplication); 2nd Fraction Top, and Bottom 

Output = 
73/28   <= Fraction Solution

*/