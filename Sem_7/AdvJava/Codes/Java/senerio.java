import java.util.Scanner;

public class senerio {
    public static void main(String[] args) {
        String s; int sum=0;
        Scanner sc = new Scanner(System.in);
        s= sc.next();
        for (int i=0; i<s.length(); i++){
            sum = sum + s.charAt(i)-'A'+1;
        }
        System.out.println(sum);
    }
}
