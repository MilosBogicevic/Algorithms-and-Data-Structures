
public class FindDuplicates {
	public static void main(String[] args) {
        int [] numbers = new int [] { 1, 2, 3, 4, 5, 2, 6, 5, 7, 8, 8, 4 };

        System.out.println("Duplicate elements: ");

        for(int i = 0; i < numbers.length; i++) {
            for (int j = i + 1; j < numbers.length; j++) {
                if (numbers[i] == numbers[j]) {
                    System.out.println(numbers[j]);
                }
            }

        }
    }
}
