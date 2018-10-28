#include <emscripten/emscripten.h>

using namespace std;

extern "C" {
    bool EMSCRIPTEN_KEEPALIVE isPrime(int num)
    {
        if (num < 2 || (num != 2 && num % 2 == 0)) {
            return false;
        } else {
            for (int i = 3; i * i <= num; i++) {
                if (num % i == 0) {
                    return false;
                }
            }
        }

        return true;
    }

    int EMSCRIPTEN_KEEPALIVE getPrimeCount(int start, int end)
    {
        int count = 0;

        for (int i = start; i <= end; i++) {
            if (isPrime(i)) {
                count++;
            }
        }

        return count;
    }
}