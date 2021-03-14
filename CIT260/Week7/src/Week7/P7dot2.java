package Week7;

import java.util.Scanner;

public class P7dot2 {
    /*  The mean Method
     Purpose: Computes the average of 5 numbers
     @param x set as double to store doubles inputs.
     @return average value for an array of doubles */
        public static double mean(double[] x){
            double total = 0;
            for (double i : x) {
                total += i;
            }
            return total / x.length;
        }

        /*  The deviation Method
            Purpose: Computes the standard deviation of 5 numbers
            @param x set as double to store doubles inputs.
            @return  standard deviation. */
        public static double deviation(double[ ] x){
            int number = x.length - 1;
            int power = 2;
            double mean = mean(x);
            double deviation = 0;

            for(double i: x) {
                deviation += Math.pow(i - mean, power);
            }
            return Math.sqrt(deviation / number);
        }


        public static void main(String[] args) {
            System.out.println("\nThis program computes the mean and the standard deviation for a set of numbers.");
            System.out.println("Please enter 5 numbers below:\n");

            Scanner input = new Scanner(System.in);
            final int five = 5 ;
            double[] x = new double[five];

            for (int i = 0; i < x.length; i++) {
                System.out.print("Enter a number: ");
                x[i] = input.nextDouble();
            }
            System.out.format("The mean of this set of numbers is %.2f%n", mean(x));
            System.out.format("The standard deviation is %.2f%n", deviation(x));
            System.out.format("Goodbye ...");
        }
    }
