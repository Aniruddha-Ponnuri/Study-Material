import java.util.Scanner;

//Fining unique digit in the given number
public class uniquedigits {
    public static void main(String[] args) {
        int n; int a[] = new int[10];
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        for (int i = 0; i < 10; i++) {
            a[i] = 0;
        }
        while (n > 0) {
            int d = n%10;
            a[d]=a[d]+1;
            n=n/10;
        }
        for (int i = 0; i < 10; i++) {
            if(a[i]==1){
                System.out.println(i);
            }
        }
    }
}
