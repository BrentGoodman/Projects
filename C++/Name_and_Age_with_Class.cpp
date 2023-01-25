#include <bits/stdc++.h> 
#include<iostream>

using namespace std;

class Person {

    private:
        string name;
        int age;

    public:
        void SetValue(string s, int a) {
            name = s;
            age = a;
        }

        void GetValue() {
            cout << "The name of the person is " << name << " and the age is " << age << "." << endl;
        }

};

int main() {

    string name_i;
    int age_i;

    cin >> name_i;
    cin >> age_i;

    Person p1;
    p1.SetValue(name_i, age_i);
    p1.GetValue();

    return 0;
}

/*
Example:

Input = 
John
25

Output =
The name of the person is John and the age is 25.


*/