import java.util.*;

public class freq {
    public static void main(String[] args) {
        int n;
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        int a[] = new int[10];
        for (int i = 0; i < 10; i++) {
            a[i]=0;
        }
        while (n > 0) {
            int d = n%10;
            a[d]++;
            n/=10;
        }
        int big=0;
        for (int i = 0; i < 10; i++) {
            if(a[i]>big){
                big=i;
            }
        }
        System.out.println(big);
    }
}
