package Week8;

import java.util.Date;

public class P8dot2 {

    public static void main(String[] args) {
        System.out.println("\nThis program uses the Date Class to display a set of dates and times.\n");

        Date date = new Date();

        int ten = 10;
        int fourZeros = 10000;
        long tenZeros = 10000000000L;

        for (long i = fourZeros; i <= tenZeros; i *= ten) {
            date.setTime(i);
            System.out.println(date.toString());
        }
        System.out.format("Goodbye...");
    }
}
