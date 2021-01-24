package P3dot1;

import java.util.Scanner;

public class P3dot1 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

            System.out.print(" Please tell me what today is \n(0=Sunday, 3=Tuesday, 6=Friday you get the idea.):  \n");
            int today = input.nextInt();
            if (today > 7) {
            System.out.println("Entry is invalid.  Please enter a number 0-6");
            theEnd(); }
            System.out.print("Lets find out what day of the week it will be in the future \n");
            System.out.print("How many days forward should we go?:  ");
            int daysAway = input.nextInt();

        if (daysAway < 0) {
            System.out.println("Entry is invalid.  Please enter a positive number");
            theEnd(); }


        int futureDay = (today + daysAway) % 7;

            System.out.print("Since Today is ");
            switch (today) {
                case 0:
                    System.out.print("Sunday");
                    break;
                case 1:
                    System.out.print("Monday");
                    break;
                case 2:
                    System.out.print("Tuesday");
                    break;
                case 3:
                    System.out.print("Wednesday");
                    break;
                case 4:
                    System.out.print("Thursday");
                    break;
                case 5:
                    System.out.print("Friday");
                    break;
                case 6:
                    System.out.print("Saturday");
            }

            System.out.print(", in ");
            System.out.print(daysAway);
            System.out.print(" days it will be ");

            switch (futureDay) {
                case 0:
                    System.out.println("Sunday");
                    break;
                case 1:
                    System.out.println("Monday");
                    break;
                case 2:
                    System.out.println("Tuesday");
                    break;
                case 3:
                    System.out.println("Wednesday");
                    break;
                case 4:
                    System.out.println("Thursday");
                    break;
                case 5:
                    System.out.println("Friday");
                    break;
                case 6:
                    System.out.println("Saturday");
            }
        theEnd();
        }



    private static void theEnd() {
        System.out.print("Have a great day.");
        System.exit(0);
    }
    }



