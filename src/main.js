function getPrimeCountWithJS()
{
    var resultsEl = document.querySelector('#results')

    var start = +document.querySelector('#start-num').value
    var end = +document.querySelector('#end-num').value

    if (!start || !end) {
        resultsEl.innerHTML = "Must provide start and end numbers."
    }

    var startTime = new Date().getTime()
    var primeCount = getPrimeCount(start, end)
    var duration = new Date().getTime() - startTime

    resultsEl.innerHTML = '';
    resultsEl.innerHTML += "Generated with JS\n\n";
    resultsEl.innerHTML += "It took " + duration + " milliseconds.\n\n"
    resultsEl.innerHTML += "Primes Found: " + primeCount
}

function getPrimeCountWithWASM()
{
    var resultsEl = document.querySelector('#results')

    var start = +document.querySelector('#start-num').value
    var end = +document.querySelector('#end-num').value

    if (!start || !end) {
        resultsEl.innerHTML = "Must provide start and end numbers."
    }

    var startTime = new Date().getTime()
    var primeCount = _getPrimeCount(start, end)
    var duration = new Date().getTime() - startTime

    resultsEl.innerHTML = '';
    resultsEl.innerHTML += "Generated with WASM\n\n";
    resultsEl.innerHTML += "It took " + duration + " milliseconds.\n\n"
    resultsEl.innerHTML += "Primes Found: " + primeCount
}