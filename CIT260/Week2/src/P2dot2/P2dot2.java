package P2dot2;

import java.util.Scanner;

public class P2dot2 {

    public static void main(String[] args) {
        displayIntro();
        double bill = promptUser("Enter the cost of the meal:");
        double tipPercent = promptUser("Tip %: (20% is high, 15% is low)");
        double tipAmount = calculateTip(bill, tipPercent);
        double taxAmount = calculateTax(bill);
        double total = calculateTotal(bill, tipAmount, taxAmount);
        displayExpenses(tipAmount, taxAmount, total);
        sayGoodbye();
    }

    public static void displayIntro(){
        System.out.println("Given the price of a meal and a percentage to use for the tip,");
        System.out.println("this program calculates tip, tax, and the total amount of the bill.");
    }

    public static double promptUser(String message){
        Scanner input = new Scanner(System.in);
        System.out.print(message + " ");
        return input.nextDouble();
    }

    public static double calculateTax(double bill){
        return bill * 0.032;
    }

    public static double calculateTip(double bill, double tip){
        double percent = tip / 100.0;
        return bill * percent;
    }

    public static double calculateTotal(double bill, double tip, double tax){
        return bill + tip + tax;
    }

    public static void displayExpenses(double tip, double tax, double total){
        System.out.println("Tip = $" + String.format("%.2f", tip));
        System.out.println("Tax = $" + String.format("%.2f", tax));
        System.out.println("Total Bill = $" + String.format("%.2f", total));
    }

    public static void sayGoodbye(){
        System.out.println("Goodbye.");
    }
}

