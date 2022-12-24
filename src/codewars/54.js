function check(a, x) {
    const even = (element) => element === x;
    return a.some(even)
}