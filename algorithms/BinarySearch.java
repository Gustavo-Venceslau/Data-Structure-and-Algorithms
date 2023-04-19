package algorithms;

public class BinarySearch {
    public static int execute(int[] list, int numberToFind){
        int firstElement = 0;
        int lastElement = list.length - 1;

        while (firstElement <= lastElement){
            int middleElement = (firstElement + lastElement) / 2;
            int kick = list[middleElement];

            if(kick == numberToFind){
                return middleElement;
            }
            if(kick > numberToFind){
                lastElement = middleElement - 1;
            }
            else{
                firstElement = middleElement + 1;
            }
        }
        return -1;
    }

}
