const quicksort = (arr) => {
    quicksortStep(arr, 0, arr.length - 1);
};

const quicksortStep = (arr, left, right) => {
    if (left >= right) {
        return;
    }

    const pivot = Math.floor((left + right) / 2);
    const index = partition(arr, left, right, arr[pivot]);
    quicksortStep(arr, left, index - 1);
    quicksortStep(arr, index, right);
};

const partition = (arr, left, right, pivot) => {
    while (left <= right) {
        while (arr[left] < pivot) {
            left = left + 1;
        }

        while (pivot < arr[right]) {
            right = right - 1;
        }

        if (left <= right) {
            swap(arr, left, right);
            left = left + 1;
            right = right - 1;
        }
    }

    return left;
};

const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const arr1 = [3, 4, 5, 7, 3, 1, 3, 4, 6, 8, 3, 1, 1, 4, 7, 9, 3];
quicksort(arr1);
console.log(arr1);

const arr2 = [];
quicksort(arr2);
console.log(arr2);

const arr3 = [3];
quicksort(arr3);
console.log(arr3);

const arr4 = [4, 3];
quicksort(arr4);
console.log(arr4);

const arr5 = [5, 4, 3];
quicksort(arr5);
console.log(arr5);
