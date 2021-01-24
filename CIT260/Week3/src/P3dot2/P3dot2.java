package P3dot2;
import java.util.Scanner;

public class P3dot2 {
    public static void main(String[] args) {

        System.out.print("Enter a year: ");
        Scanner userValue = new Scanner(System.in);
        int year = userValue.nextInt();

        System.out.print("Enter a month (1 = Jan, 2 = Feb, ... 12 = Dec): ");
        int month = userValue.nextInt();
        System.out.println();

        if(month < 1 || month > 12){
            System.out.format("%d is invalid Please try again ", month);
            theEndBad();
        }

        boolean isLeapYear = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);

        switch (month) {

            case 1:
                System.out.println("January of " + year + " has 31 days in it.");
                break;
            case 2:
                System.out.println("February of " + year + " has" + ((isLeapYear) ? " 29 days" : " 28 days in it."));
                break;
            case 3:
                System.out.println("March of " + year + " has 31 days in it.");
                break;
            case 4:
                System.out.println("April of " + year + " has 30 days in it.");
                break;
            case 5:
                System.out.println("May of " + year + " has 31 days in it. ");
                break;
            case 6:
                System.out.println("June of " + year + " has 30 days in it. ");
                break;
            case 7:
                System.out.println("July of " + year + " has 31 days in it. ");
                break;
            case 8:
                System.out.println("August of " + year + " has 31 days in it. ");
                break;
            case 9:
                System.out.println("September of " + year + " has 30 days in it. ");
                break;
            case 10:
                System.out.println("October of " + year + " has 31 days in it. ");
                break;
            case 11:
                System.out.println("November of " + year + " has 30 days in it. ");
                break;
            case 12:
                System.out.println("December of " + year + " has 31 days in it. ");
                break;
        }

        theEndGood();
    }
    private static void theEndBad() {
        System.out.print("Hasta La Vista. Please try again.");
        System.exit(0);
    }
    private static void theEndGood() {
        System.out.print("Hasta La Vista, Baby.");
        System.exit(0);
    }
}
