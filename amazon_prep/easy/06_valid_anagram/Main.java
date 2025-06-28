import java.util.Arrays;

public class Main {
    public static boolean isAnagram(String str1, String str2) {
        char[] str1Arr = str1.toCharArray();
        char[] str2Arr = str2.toCharArray();
        // this sort implementation is like a mergesort with O=nlogn
        Arrays.sort(str1Arr);
        Arrays.sort(str2Arr);

        return Arrays.equals(str1Arr, str2Arr);
    }

    public static void main(String[] args) {
        String s = "anagram";
        String t = "nagaram";
        System.out.println(isAnagram(s, t)); // Output: true
        s = "rat";
        t = "car";
        System.out.println(isAnagram(s, t)); // Output: false
    }
}
