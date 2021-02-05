package Week4;

import java.util.Scanner;

public class P4dot2 {
    public static void main(String[] args) {
        System.out.println("""
                Enter your name, hours worked, and hourly wage and this program can
                calculate your gross pay, State tax, Federal tax, and your net pay.
                It then displays your final take home.
                """);


        System.out.print("Enter your first and last name: ");
        Scanner input = new Scanner(System.in);
        String lNameFname = input.nextLine();

        final double STATETAX = 9; // Constant for the state withholding tax.
        final double FEDERALTAX = 20; // Constant for the federal withholding tax.

        System.out.print("Enter the hours you worked this week: ");
        double hoursWorked = input.nextDouble();

        System.out.print("Enter your hourly wage: ");
        double hourlyWage = input.nextDouble();

        /*dividing by 100.0 instead of 100 gives me
         * the exact rounding I wanted, 8.78.*/
        double stateTax = (STATETAX * hourlyWage * hoursWorked)/100;     //computes the State tax
        double federalTax = (FEDERALTAX * hourlyWage * hoursWorked)/100; //computes the Federal tax
        double grossPay = hourlyWage * hoursWorked;                        //computes the Gross Pay
        double netPay =  grossPay - stateTax - federalTax;                 //computes the Net Pay

        // This ouputs the program on the screen
        System.out.format("Pay Stub for:\t%s%n", lNameFname);
        System.out.format("Hours Worked:\t%.2fhr%n", hoursWorked);
        System.out.format("Hours Wage: \t%.2f$%n", hourlyWage);
        System.out.format("Gross Pay: \t\t%.2f$%n", grossPay);
        System.out.format("State Tax: \t\t%.2f$%n", stateTax);
        System.out.format("Federal Tax: \t%.2f$%n", federalTax);
        System.out.format("Net Pay: \t\t%.2f$%n", netPay);
                                                         // for adding blank line
        System.out.println("Don't spend it all in one place.");
    }
}

