//Sum of second last digit of given numbers
public class sumdigit {
    public static void main(String[] args) {
        int a[] ={123,467,589};
        int sum=0;
        for (int i=0;i<a.length;i++){
            sum = sum + ((a[i]/10)%10);
        }
        System.out.println(sum);
    }
}
