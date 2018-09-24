module.exports = function makeExchange(currency) {

    let result = {};
    let H, Q, D, N, P;

    if(currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else if(currency <= 0) {
        return {};
    }

    H = Math.floor(currency / 50);  if(H >= 1) result.H = H;
    Q = Math.floor((currency - H * 50) / 25);  if(Q >= 1) result.Q = Q;
    D = Math.floor((currency - Q * 25 - H * 50) / 10);  if(D >= 1) result.D = D;
    N = Math.floor((currency - D * 10 - Q * 25 - H * 50) / 5);  if(N >= 1) result.N = N;
    P = Math.floor(currency % 5);  if(P >= 1) result.P = P;

    return result;
}
