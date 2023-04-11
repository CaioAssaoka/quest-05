function inverterString(str) {
    var stringTeste = "";
    for (var i = str.length - 1; i >= 0; i--) {
        stringTeste += str[i];
    }
    return stringTeste;
}
console.log (inverterString('teste'))

