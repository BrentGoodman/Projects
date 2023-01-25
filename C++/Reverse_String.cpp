#include <iostream> 

using namespace std;

string reverseStringWordWise(string input) {
    string result;
    int i = 0;
    int n = input.size();
    while (i < n) {
        while (i < n && input[i] == ' ')
            i++;
        if (i >= n)
            break;
        int j = i + 1;
        while (j < n && input[j] != ' ')
            j++;
        string sub = input.substr(i, j - i);
        if (result.size() == 0)
            result = sub;
        else
            result = sub + " " + result;
        i = j + 1;
    }
    return result;
}

int main() {
    string s;
    getline(cin, s);
    string ans = reverseStringWordWise(s);
    cout << ans << endl;
}