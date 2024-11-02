import java.io.*;
import java.util.*;

//Sum of even digit in a number
class Main {
    public static void main(String[] args) {
        int n,sum=0;
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        while(n>0) {
            int d= n%10;
            if (d%2==0) {
                sum=sum+d;
            }
            n=n/10;
        }
        System.out.println(sum);
    }
}