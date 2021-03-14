package Week9;


import java.util.Scanner;


    public class P9dot1 {

        public static void main(String[] args) {


            // 1. Tells the user what the program does.
            System.out.print("\nThis program creates a point at (0,0) and a point at the coordinates\n");
            System.out.print("entered by you. It then computes and displays the distance from (0,0)\n");
            System.out.print("to the point defined by you, using three different methods.\n");

            Scanner keyboard = new Scanner(System.in);

            // 2. Uses the no-arg constructor to create a MyPoint object p1 at (0,0).
            MyPoint p1 = new MyPoint();

            // 3. Prompts the user to enter the x and y coordinates of a point.
            // 4. Saves the users input.
            System.out.print("Enter the x coordinate of a point: ");
            int x = Integer.parseInt(keyboard.next());

            System.out.print("Enter the y coordinate of a point: ");
            int y = Integer.parseInt(keyboard.next());

            MyPoint p2 = new MyPoint(x, y);

            // 5. Uses the first distance method to calculate and display the distance between the MyPoint object p1
            System.out.print("Using method 1, the distance " +
                    "from (" + p1.getX() + "," + p1.getY() + ") " +
                    "to (" + p2.getX() + "," + p2.getY() + ") is " +
                    String.format("%.2f", p1.distance(p2.getX(), p2.getY())) + "\n");

            // 6. Uses the parameterized constructor to create a MyPoint object p2 using the x coordinate and y
            System.out.print("Using method 2, the distance " +
                    "from (" + p1.getX() + "," + p1.getY() + ") " +
                    "to (" + p2.getX() + "," + p2.getY() + ") is " +
                    String.format("%.2f", p1.distance(p2)) + "\n");

            // 7. Uses the second and third distance method to calculate and display the distance between the
            System.out.print("Using method 3, the distance " +
                    "from (" + p1.getX() + "," + p1.getY() + ") " +
                    "to (" + p2.getX() + "," + p2.getY() + ") is " +
                    String.format("%.2f", p1.distance(p1, p2)) + "\n");

            // 8. Displays a goodbye message.
            System.out.print("Goodbye...");
        }

        public static class MyPoint {
            // 1. Two integer data fields x and y, that represent the x-coordinate
            // and the y-coordinate of the point.
            // Declare x and y.
            private int x;
            private int y;

            // 2. Getter and setter methods for x and y.
            // Method to call from outside the class to get private variable x.
            /**
             * The getX Method
             * Purpose: Return the value for the x coordinate
             * @param: The user prompt as a String
             * @return the int value entered by the user
             */

            // Method to call from outside the class to get private variable x.
            public int getX() {
                return x;
            }

            // Method to call from outside the class to change private variable x.
            public void setX(int x) {
                this.x = x;
            }

            // Method to call from outside the class to get private variable y.
            public int getY() {
                return y;
            }

            // Method to call from outside the class to change private variable y.
            public void setY(int y) {
                this.y = y;
            }

            // 3. A no-arg constructor that creates a default point at (0,0).
            MyPoint() {
                this.x = 0;
                this.y = 0;
            }

            // 4. A parameterized constructor that creates a point at the designated x and y coordinate.
            MyPoint(int x, int y) {
                this.x = x;
                this.y = y;
            }

            // 5. A member method named distance that calculates and returns the distance between this
            // MyPoint object and another point that is specified by its x- and y-coordinates. The method
            // header looks like this:  public double distance(int xCoord, int yCoord);
            public double distance(int xCoord, int yCoord) {
                return Math.sqrt(Math.pow(this.x - xCoord,2) + Math.pow(this.y - yCoord,2));
            }

            // 6. A member method named distance that calculates and returns the distance between this
            // MyPoint object and another object of the MyPoint class. The method header looks like
            // this:  public double distance(MyPoint p)
            public double distance(MyPoint p) {
                return Math.sqrt(Math.pow(this.x - p.x,2) + Math.pow(this.y - p.y,2));
            }

            // 7. A static, non-member method named distance that takes two objects of the MyPoint
            // class as parameters, and calculates and returns the distance between the two of
            // them. The method header looks like this:      public static double distance (
            // MyPoint mp1, MyPoint mp2)
            public static double distance (MyPoint mp1, MyPoint mp2) {
                return Math.sqrt(Math.pow(mp1.x - mp2.x,2) + Math.pow(mp1.y - mp2.y,2));
            }
        }
    }
