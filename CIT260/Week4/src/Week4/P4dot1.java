package Week4;

import java.util.Scanner;

public class P4dot1 {

    public static void main(String[] args) {
        System.out.println("This program converts a hexadecimal digit into a four digit binary number\n");
        System.out.print("Please, enter a hexadecimal number: ");
        Scanner hexa = new Scanner(System.in);
        String input1 = hexa.next();
        System.out.println();   // for adding blank line

        /*It ends the program when someone types more than 2 Characters.
         * It also prevents typing below 0 and beyond 9.*/
        if (input1.length() > 1) {
            System.out.println("Please enter a single Hexadecimal Character.");
            itsNotBinary();
        }


        switch (input1) {
            case "0":
                System.out.println("The binary value is 0000.\n");
                break;
            case "1":
                System.out.println("The binary value is 0001.\n");
                break;
            case "2":
                System.out.println("The binary value is 0010.\n");
                break;
            case "3":
                System.out.println("The binary value is 0011.\n");
                break;
            case "4":
                System.out.println("The binary value is 0100.\n");
                break;
            case "5":
                System.out.println("The binary value is 0101.\n");
                break;
            case "6":
                System.out.println("The binary value is 0110.\n");
                break;
            case "7":
                System.out.println("The binary value is 0111.\n");
                break;
            case "8":
                System.out.println("The binary value is 1000.\n");
                break;
            case "9":
                System.out.println("The binary value is 1001.\n");
                break;
            case "A":
                System.out.println("The binary value is 1010.\n");
                break;
            case "B":
                System.out.println("The binary value is 1011.\n");
                break;
            case "C":
                System.out.println("The binary value is 1100.\n");
                break;
            case "D":
                System.out.println("The binary value is 1101.\n");
                break;
            case "E":
                System.out.println("The binary value is 1110.\n");
                break;
            case "F":
                System.out.println("The binary value is 1111.\n");
                break;
                //It prevents from typing hexadecimal other than A to F.
            default:
                System.out.println(input1 + " is not a valid hexadecimal digit. \n");
                itsNotBinary();
        }
        itsBinary();
    }

    private static void itsBinary() {
        System.out.print("Well done, come again.");
        System.exit(0);
    }

    private static void itsNotBinary() {
        System.out.print("Don't give up, try again.");
        System.exit(0);
    }
}