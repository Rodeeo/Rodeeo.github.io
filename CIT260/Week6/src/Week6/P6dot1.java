package Week6;

import java.util.Scanner;

public class P6dot1 {
    public static double futureValue(double investmentAmount, double monthlyInterestRate, int years){
        int startTime = 1;
        int months = 12;
        return investmentAmount * Math.pow(1 + monthlyInterestRate, years * 12);
    }

    public static void main(String[] args) {
        System.out.println("\nGiven an investment amount and an annual interest rate, we will");
        System.out.println("calculate the future value of an investment for the next 10 years.\n");

        System.out.print("Enter a positive, non-zero monetary value for the investment: ");
        Scanner input = new Scanner (System.in);
        double investmentAmount = input.nextDouble();

        System.out.print("Enter an annual interest rate, between 0 and 100: ");
        System.out.print("\nbut seriously,i  the average rate is about .08, so dont go crazy: ");
        double annualInterest = input.nextDouble();
        int zero = 0;
        int hundred = 100;
        int years = 10;
        int startTime = 1;
        int months = 12;

        if(investmentAmount <= zero){
            System.out.println("Error! $$$ Any $dollar$ amount > 0 $$$, try again");
            System.exit(0); }

        if(annualInterest < zero || annualInterest>= hundred){
            System.out.println("Error! please enter an annualInterest between 0 and 100");
            System.exit(0); }

        //Gets the monthly interest rate
        double monthlyInterestRate = (annualInterest / months) / hundred;

        System.out.println();
        System.out.println("Years       Future Value");

        for(int futValue = startTime; futValue <= years; futValue++){
            System.out.format("%2d %10s%.2f%n", futValue, "$", futureValue(investmentAmount, monthlyInterestRate, futValue));
        }
        System.out.println();
        System.out.println("Goodbye ...");
    }
}

