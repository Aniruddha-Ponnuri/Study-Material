import java.util.Scanner;

public class textpattern {
    public static void main(String[] args) {
        String s;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter text");
        s = sc.next();
        int l = s.length();
        for (int i = l-1; i >= l/2; i--) {
            System.out.print(s.charAt(i));
        }
        for (int i=0;i<l/2;i++){
            System.out.print(s.charAt(i));
        }
    }
}
