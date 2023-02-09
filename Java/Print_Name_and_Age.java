import java.util.Scanner;

class Solution {
	
	public static void main(String args[]) {
		
		// Write code here
		Scanner sc = new Scanner(System.in);

		String name = sc.nextLine();
		int age = sc.nextInt();

		System.out.println("The name of the person is " + name + " and the age is " + age + ".");
		
	}
}

/* 

Sampe Input 1:
John
25

Sample Output 1:
The name of the person is John and the age is 25.

Sample Input 2:
Mary
30

Sample Output 2:
The name of the person is Mary and the age is 30.

*/