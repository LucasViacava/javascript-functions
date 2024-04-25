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
