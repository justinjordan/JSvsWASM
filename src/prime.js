function isPrime(num)
{
    if (num < 2 || (num != 2 && num % 2 == 0)) {
        return false;
    } else {
        for (let i = 3; i * i <= num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
    }

    return true;
}

function getPrimeCount(start, end)
{
    var count = 0;

    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    return count;
}