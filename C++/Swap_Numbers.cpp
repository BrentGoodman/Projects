#include <bits/stdc++.h> 
#include <utility>

using namespace std;

int main() {
    pair < int, int > swap(pair < int, int > swapValues) {
        int a = swapValues.first;
        int b = swapValues.second;
        pair<int, int>p;
            p.first = b;
            p.second = a;
        return p;
    }
}

/*
Example input =  
4       <= This is the number of sequences.
1 2 
3 4
5 6
7 8

and output = 
2 1
4 3
6 5
8 7

*/