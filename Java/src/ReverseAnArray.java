public class ReverseAnArray {
    public static void main(String[] args) {
//      Initialize an array
        int [] numbers = new int [] {25,45, 850, 221, 5, 15, 1280, 545};

//      Print an original array
        System.out.println("Original array: ");
        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");
        }

//      Print a reversed array
        System.out.println("\nReversed array: ");
        for (int i = numbers.length - 1; i >= 0; i--) {
            System.out.print(numbers[i] + " ");
        }
    }
}
