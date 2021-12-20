function reverse_num(n)
{
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(Number(reverse_num(12345)));