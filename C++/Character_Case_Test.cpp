#include <bits/stdc++.h> 
#include <iostream>
#include <regex>

using namespace std;

int main() {

    string input;
    cin >> input;
    regex capletter_expr("[A-Z]");
    regex lowletter_expr("[a-z]");

    if (regex_match(input,capletter_expr)) {
        cout << 1;
    } 
    else if (regex_match(input,lowletter_expr)) {
        cout << 0;
    } else
        cout << -1;

    return 0;
}

/*
Example input =  
V 
a
E
0
1
z

and output = 
1
0
1
-1
-1
0

Explanation:
Uppercase = 1
Lowercase = 0
Not alphabet = -1
a is a lower case alphabet hence the output is 0.


*/