#include <bits/stdc++.h>
#include <iostream>
#include <algorithm>
#include <cstring> 

using namespace std;

string reverseEachWord(string input) {      
    int left = 0 , right = 0 ;  
    for(int i = 0 ; i < input.length() ; i++) {      
        if(input[i] == ' ' ){           
            right = i - 1 ;           
            while(left < right){               
                swap(input[left++] , input[right--]);        
            }
            left = i + 1 ;        
        }
    }
    right = input.length() - 1 ;   
    while(left < right) {       
        swap(input[left++] , input[right--]);
    }
    return input;     
}

int main() {
    string str;    
    getline(cin, str);   
    string ans = reverseEachWord(str);   
    cout << ans << endl;    
}

/*
Example: 

Input = 
racecar kayak refer
Welcome to Coding Ninjas
Always indent your code


Output = 
racecar kayak refer
emocleW ot gnidoC sajniN
syawlA tnedni ruoy edoc


*/