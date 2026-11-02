function divide(arr, n) {
    n = Number(n);
    let result = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        
        if (currentSubarray.length === 0 || currentSum + num <= n) {
            currentSubarray.push(num);
            currentSum += num;
        } else {
            result.push(currentSubarray);
            currentSubarray = [num];
            currentSum = num;
        }
    }

    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
}

const arr = prompt("Enter arr: ").split(",").map(Number);
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));