package Week8;

public class P8dot1 {
    static class Rectangle {

        public double height;
        public double width;

        //Constructor and initialization
        Rectangle(double height, double width) {
            this.height = height;
            this.width = width;
        }

        /**
         * The area Method
         * Purpose: Computes area from height and width arguments
         * @return the area of a rectangle
         */
        double getArea() {
            return height * width;
        }

        /**
         * The perimeter Method
         * Purpose: Computes the perimeter from height and width arguments
         * @return the perimeter of a rectangle
         */
        double getPerimeter() {
            return (height + width) * 2;
        }
    }


    public static void main(String[] args){
        System.out.println("\nThis program creates two rectangle Objects and displays their width, height area and perimeter.\n ");

        //The objects use Arguments cause Rectangle accepted parameters in the constructor
        Rectangle rectangle1 = new Rectangle(4, 40);
        Rectangle rectangle2 = new Rectangle(3.5, 5);

        System.out.format("Rectangle 1 %n");
        System.out.format("height = %8.2f  %n" , rectangle1.height);
        System.out.format("width = %9.2f  %n" , rectangle1.width);
        System.out.format("area = %10.2f  %n" , rectangle1.getArea());
        System.out.format("perimeter = %.2f %n\n" , rectangle1.getPerimeter());
        System.out.format("Rectangle 2 %n");
        System.out.format("height = %8.2f  %n", rectangle2.height);
        System.out.format("width = %9.2f  %n", rectangle2.width);
        System.out.format("area = %10.2f  %n", rectangle2.getArea());
        System.out.format("perimeter = %.2f  %n", rectangle2.getPerimeter());

        System.out.format("Goodbye ...");

    }
}
