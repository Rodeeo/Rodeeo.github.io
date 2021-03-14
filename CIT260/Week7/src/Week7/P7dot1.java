package Week7;

import java.util.Scanner;

public class P7dot1 {
    /*  The average Method
        Purpose: Computes Conversions from Celsius to fahrenheit
        @param array set as double to store doubles inputs.
        @return average value for an array of doubles  */
    public static double average(double[] array){
        double total = 0;
        for (double i : array) {
            total += i;
        }
        return total / array.length;
    }

    public static void main(String[] args) {
        System.out.println("\nYou will enter 5 different numbers.");
        System.out.println("We will calculate them and return the average.\n");

        Scanner input = new Scanner (System.in);
        final int five = 5;
        double[] array = new double[five];

        for(int i = 0; i < array.length; i++){
            System.out.print("Please enter a number: ");
            array[i]  = input.nextDouble();
        }
        System.out.format("The average of these five numbers is %.2f%n", average(array));
        System.out.format("Goodbye ... ");
    }
}

