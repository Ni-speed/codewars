function minMinMax(array) {
    let largest = Math.max.apply(null, array);
    let smallest = Math.min.apply(null, array);
    let minimumAbsent
    for (let i = smallest; i<=largest; i++) {
        if (!array.includes(i)) {
            minimumAbsent = i; break
        }
    }
    return [smallest, minimumAbsent, largest]
}
