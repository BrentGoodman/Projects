import java.util.* ;
import java.io.*; 
import javafx.util.Pair;

public class Solution {
    public static Pair < Integer, Integer > swap(Pair < Integer, Integer > swapValues) {
        // Write your code here.

        int a = swapValues.getKey();
        int b = swapValues.getValue();

        Pair < Integer, Integer > p = new Pair <> (b,a);

        return p;

    }
}

/* 

Sample Input 1:
4
1 2
3 4
5 6
7 8

Sample Output 1:
2 1
4 3
6 5
8 7

Sample Input 2:
4
60 70
80 90
100 110
110 120

Sample Output 2:
70 60
90 80
110 100
120 110

*/
