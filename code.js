function fib(n) 
{
    // base case handling EP 4 a new base case
    var result = [0];
    if (n === 0)
    {
        return result;
    }
    // base case handling EP 5 the base case strikes back
    result = [0, 1];
    if (n === 1)
    {
        return result;
    }

    // helper function for calls of n > 1
    function calcFib(i)
    {
        // return once n has been reached
        if (i >= n + 1)
        {
        return;
        }

        // fibonacci calculation
        result[i] = result[i - 1] + result[i - 2];

        // recursive call
        calcFib(i + 1);
    }

    // intial recursive call
    calcFib(2);
    return result;
}
