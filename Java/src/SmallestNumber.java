public class SmallestNumber {
    public static void main(String[] args) {
//      Initialize an array
        int [] numbers = new int [] { 52, 68, 112, 542, 5, 1280, 54, 65, 98, 1540 };
//    	Initialize smallest number as first element
        int smallest = numbers[0];
//      Loop through array.
        for (int i = 0; i < numbers.length; i++) {
//          If number in array is smaller than smallest, swap them
            if (numbers[i] < smallest) {
                smallest = numbers[i];
            }
        }
        System.out.println("Smallest number in an array: " + smallest);
    }
}
