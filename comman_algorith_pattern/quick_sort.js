function pivot(arr, start=0, end = arr.length+1) {
    const swap = (arr, i, j ) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    var pivot = arr[start];
    var swapIdx = start;
    for(var i = start+1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr,swapIdx, i);
            // console.log(arr)
        }
    }
    swap(arr,start, swapIdx);
    // console.log(swapIdx,arr)
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length -1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right); //3
        quickSort(arr, left, pivotIndex-1);
        quickSort(pivotIndex+1, right);  
    }

    console.log(arr)
    return arr;
}

quickSort([4,8,2,1,5,7,6,3]);