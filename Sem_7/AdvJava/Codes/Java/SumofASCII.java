import java.util.Scanner;
// Sum of ASCII values of each character in a String
public class SumofASCII {
    public static void main(String[] args) {
        String s; int sum=0;
        Scanner sc = new Scanner(System.in);
        s= sc.next();
        for (int i=0; i<s.length(); i++){
            sum = sum + 'Z' - s.charAt(i)+1;
            System.out.println(sum);
        }
        System.out.println(sum);
    }
}
