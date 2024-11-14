function fib(n) 
{
    var result = [0];
    if (n === 0)
    {
        return result;
    }
    result = [0, 1];
    if (n === 1)
    {
        return result;
    }

    function calcFib(i)
    {
        if (i >= n)
        {
        return;
        }

        result[i] = result[i - 1] + result[i - 2];

        calcFib(i + 1);
    }

    calcFib(2);
    return result;
}