public class LargestNumber {
    public static void main(String[] args) {
//    	Initialize an array
    	int [] numbers = new int [] { 2, 52, 68, 112, 542, 5, 1280, 54, 65, 98, 1540 };
//    	Initialize largest number as first element
    	int largest = numbers[0];
//    	Loop through array.
    	for (int i = 0; i < numbers.length; i++) {
//    		If number in array is larger than largest, swap them
    		if (numbers[i] > largest) {
    			largest = numbers[i];
    		}
    	}
    	System.out.println("Largest number in an array: " +largest);
    }
}
