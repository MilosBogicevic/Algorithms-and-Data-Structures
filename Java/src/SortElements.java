public class SortElements {
    public static void main(String[] args) {

//      Initialize array
        int [] numbers = new int [] { 15, 8, 2, 6, 5, 12, 3, 18, 16, 25, 22, 85, 43, 56 };
        int temp = 0;

//      Print original array
        System.out.println("Original array: ");
        for (int i = 0; i < numbers.length; i++){
            System.out.print(numbers[i] + " ");
        }
    }
}
