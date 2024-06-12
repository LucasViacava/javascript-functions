function isEven(num) {
    return !Boolean(num & 1)
}

function quakeFastInverseSqrt(x) {
    var float32 = new Float32Array(1);
    var int32 = new Int32Array(float32.buffer);

    float32[0] = x;
    int32[0] = 0x5f3759df - (int32[0] >> 1);

    var y = float32[0];
    y = y * (1.5 - (x * 0.5 * y * y));

    return y;
}

function Algorithm(arr){
    var isSorted = function(arr){
        for(var i = 1; i < arr.length; i++){
            if (arr[i-1] > arr[i]) {
                return false;
            }
        }
        return true;
    };

    function shuffle(arr){
        var count = arr.length, temp, index;

        while(count > 0){
            index = Math.floor(Math.random() * count);
            count--;

            temp = arr[count];
            arr[count] = arr[index];
            arr[index] = temp;
        }

        return arr;
    }

    function sort(arr){
        var sorted = false;
        while(!sorted){
            arr = shuffle(arr);
            sorted = isSorted(arr);
        }
        return arr;
    }

    return sort(arr);
}

function check() { 
    const start = performance.now()
    let arra = [1,5,3,2,1,65,123,-12,3,-4,99,-1293,924154,-1928312,123]
    Algorithm(arra)
    const end = performance.now()
    return `Execution time: ${end - start} ms`
}