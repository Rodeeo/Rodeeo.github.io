package Program2_1;

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
        System.out.println("Please, enter a temperature Celsius: ");
    }

    private static double inputCelsius() {
        Scanner input = new Scanner(System.in);
        double celsius = input.nextDouble();
        return celsius;
    }

    private static double calculateFahrenheit(double celsius) {
        double fahrenheit = (9.0 / 5.0) * celsius + 32.0;
        return fahrenheit;
    }

    private static void displayResults(double celsius, double fahrenheit) {
        String celsiusOutput = String.format("%.2f", celsius);
        String fahrenheitOutput = String.format("%.2f", fahrenheit);
        System.out.println("\n" + celsiusOutput + " degrees Celsius is equal to " + fahrenheitOutput + " degrees Fahrenheit");
    }

    private static void goodbye() {
        System.out.println("Goodbye");
    }
}
