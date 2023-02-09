import java.util.* ;
import java.io.*;

class Solution {
	
	public static void main(String args[]) {
		
        Scanner sc = new Scanner(System.in);

        int p = sc.nextInt();
        double ints = sc.nextDouble();
        int t = sc.nextInt();

        int r = (int)(p * ints * t / 100);
        
        System.out.print(r);
		
	}
}

/*

Sample Input 1:
2000
5.6
2

Sample Output 1:
224

Sample Input 2:
400500
6.22
2

Sample Output 2:
49822

*/
