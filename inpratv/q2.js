function QuotaRestante(X, N, usos) {
    let quotaRestante = X;

    for (let i = 0; i < N; i++) {
        quotaRestante += (X - usos[i]);
    }

    return quotaRestante;
}

console.log(QuotaRestante(100, 2, [50, 120]));
console.log(QuotaRestante(10, 3, [4, 6, 2]));
console.log(QuotaRestante(100, 2, [100, 100]));