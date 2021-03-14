package Week5;

public class P5dot1 {
    public static void main(String[] args) {
        System.out.println("\nUse a loop to calculate Pounds per Kilogram \n");
        System.out.println("(1 kilogram = 2.2 pounds)\n  Results Shown Below. \n");

        System.out.format("Kilograms %10s%n", "Pounds");
        System.out.format("--------- %10s%n", "------");
        final double pounds = 2.2;
        int maxKilo = 15;
        for( int kilo = 1; kilo <= maxKilo; kilo++){
            for(; kilo <= 3; kilo++){
                double result = kilo * pounds;
                System.out.format("   %d %13.1f%n", kilo, result);
            }
            for(; kilo <= 9; kilo++){
                double result = kilo * pounds;
                System.out.format("   %d %14.1f%n", kilo, result);
            }
            for(; kilo <= maxKilo; kilo++){
                double result = kilo * pounds;
                System.out.format("   %d %13.1f%n", kilo, result);
            }
        }
        System.out.println("\nGoodbye");
    }
}


