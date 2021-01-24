package P2dot1;

import java.util.Scanner;

    public class P2dot1 {

        public static void main(String[] args) {
            displayPrompt();
            double celsius = inputCelsius();
            double fahrenheit = calculateFahrenheit(celsius);
            displayResults(celsius, fahrenheit);
            goodbye();
        }

        private static void displayPrompt() {
            System.out.println("This program converts Celsius into Fahrenheit");
            System.out.println("Let's Change the temperature!");
            System.out.println("Please, enter a temperature Celsius: ");
        }

        private static double inputCelsius() {
            Scanner input = new Scanner(System.in);
            return input.nextDouble();
        }

        private static double calculateFahrenheit(double celsius) {
            return (9.0 / 5.0) * celsius + 32.0;
        }

        private static void displayResults(double celsius, double fahrenheit) {
            String celsiusOutput = String.format("%.2f", celsius);
            String fahrenheitOutput = String.format("%.2f", fahrenheit);
            System.out.println("\n" + celsiusOutput + " degrees Celsius = " + fahrenheitOutput + " degrees Fahrenheit");
        }

        private static void goodbye() {
            System.out.println("Goodbye");
        }
    }

