package Week5;

public class P5dot2 {
    public static void main(String[] args) {
        System.out.println("\nUse a loop to display a table of all numbers");
        System.out.println("from 100 to 1000 divisible by both 5 and 6.");
        System.out.println("Results are separated by 1 space and 10 per line.\n");

        int allNumbers = 100;
        int max1 = 400;
        int max2 = 700;
        int max = 1000;
        int zero = 0;

        for ( ;allNumbers < max; allNumbers++ ){
            for ( ;allNumbers < max1; allNumbers++ ){
                if(allNumbers % 5 == zero && allNumbers % 6 == zero)
                {System.out.print(allNumbers + " "); }
            }
            System.out.println();
            for ( ;allNumbers < max2; allNumbers++ ){
                if(allNumbers % 5 == zero && allNumbers % 6 == zero)
                {System.out.print(allNumbers + " "); }
            }
            System.out.println();
            for ( ;allNumbers < max; allNumbers++ ){
                if(allNumbers % 5 == zero && allNumbers % 6 == zero)
                {System.out.print(allNumbers + " "); }
            }
            System.out.println();
        }
        System.out.println("\nGoodbye.");
    }
}

