function MoedasCapitao(A, N) {
    let moedasMarinheiros = A / (N + 1);
    let moedasCapitao = moedasMarinheiros * 2;
    return moedasCapitao;
}

let A = 221;
let N = 11;

console.log(MoedasCapitao(A, N).toFixed(0));