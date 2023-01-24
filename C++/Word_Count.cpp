#include <bits/stdc++.h>  
#include <iostream> 
#include <cstring> 

using namespace std;

int countWords(string input) {
    int len;
    len = input.length();
    int count = 1;
    for (int i = 0; i < len; i++) {
        if (input[i] == 32) {
            count++;
        }
    }
    return count;
}

int main() {
    string input;
    getline(cin, input);
    int output = countWords(input);
    cout << output << endl;
    return 0;
}