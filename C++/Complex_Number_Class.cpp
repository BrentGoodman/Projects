#include <bits/stdc++.h> 
#include<iostream>

using namespace std;

class ComplexNumbers {
    
    private:
        int real = 0, img = 0;

    public:
        ComplexNumbers(int r, int i) {
            real = r;
            img = i;
        }
        
        void plus(ComplexNumbers c2) {
            real += c2.real;
            img += c2.img;
        }

        void multiply(ComplexNumbers c2) {
            int temp = real;
            real = real * (c2.real) - (img * (c2.img));
            img = (temp * c2.img) + (c2.real * img);
        }

        void print() {
            cout << real << ' ' << "+" << ' ' << "i" << img << endl;
        }

};

int main() {
    int real1, imaginary1, real2, imaginary2;

    cin >> real1 >> imaginary1;
    cin >> real2 >> imaginary2;

    ComplexNumbers c1(real1, imaginary1);
    ComplexNumbers c2(real2, imaginary2);

    int choice;
    cin >> choice;

    if (choice == 1) {
        c1.plus(c2);
        c1.print();
    } else if (choice == 2) {
        c1.multiply(c2);
        c1.print();
    } else {
        return 0;
    }

}

/*
Example:

Input = 
10 15   <= Real Number (real1) and Imaginary Number (imaginary1) of 1st Complex Number (c1)
12 40   <= Real Number (real2) and Imaginary Number (imaginary2) of 2nd Complex Number (c2)
1       <= Choices (1 or 2); 1 means plus function will be called, 2 means multiply fuction will be called

Output = 
22 + i55    <= Complex number in format a + ib


Input 2 =
4 5
5 4
2

Output 2 = 
0 + i41

Input 3 = 
27 42
27 42
2

Output 3 = 
-1035 + i2268



*/