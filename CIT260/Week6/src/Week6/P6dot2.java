package Week6;

public class P6dot2 {
    /* The CelsiusToFahrenheit Method
    Purpose = Converts Celsius to fahrenheit  */

    public static double celsiusToFahrenheit(double tempCelsius){

        final double multiply = 9.0 / 5.0;
        final double add = 32;

        return multiply * tempCelsius + add;
    }

    public static double fahrenheitToCelsius(double tempFahrenheit){

        final double multiply = 5.0 / 9.0;
        final double subtract = 32;

        return multiply * (tempFahrenheit - subtract);
    }

    public static void main(String[] args) {
        System.out.println("\nA program that converts Celsius to Fahrenheit");
        System.out.println("and prints in reverse from Fahrenheit to Celsius.\n");

         System.out.format("Celsius %15s %3s", "Fahrenheit", "|");
        System.out.format("%13s %12s%n", "Fahrenheit", "Celsius");
        System.out.println("-----------------------------------------------------");

        double celsius = 40.0;
        double fahrenheit = 120.0;
        int maxLines = 10;

        for(int i=maxLines; i>=1; celsius--, fahrenheit-=maxLines, i--){
            System.out.format("%.1f %13.1f %8s",celsius ,celsiusToFahrenheit(celsius), "|");
            System.out.format("%8.1f %16.2f%n",fahrenheit ,fahrenheitToCelsius(fahrenheit));
        }
        System.out.println("\n a goodbye message");
    }
}

