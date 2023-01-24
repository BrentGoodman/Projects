#include <bits/stdc++.h> 
#include <iostream>
using namespace std;

int main() {

    float x, y;

    cin >> x >> y;
    
    if (x > 0 && y > 0) {
        cout << "1st Quadrant";
    } else if (x < 0 && y > 0) {
        cout << "2nd Quadrant";
    } else if (x < 0 && y < 0) {
        cout << "3rd Quadrant";
    } else if (x > 0 && y < 0) {
        cout << "4th Quadrant";
    } else if (y == 0 && x < 0 || x > 0) {
        cout << "x axis";
    } else if (x == 0 && y < 0 || y > 0) {
        cout << "y axis";
    } else {
        cout << "Origin";
    }
    return 0;

}

/*
Example input =  
5 100
0 -80
-2 40

and output = 
1st Quadrant
y axis
2nd Quadrant

Explanation: 
"1st Quadrant": if +x, +y
"2nd Quadrant": if -x, +y
"3rd Quadrant": if -x, -y
"4th Quadrant": if +x, -y
"x axis": if 0, +y
"y axis": if +x, 0
"Origin": if 0, 0

*/