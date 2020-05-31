var lettercasePermutation = function (S) {
  var res = [S];

  S = S.split('');

  var dfs = (idx) => {
    for (var i = idx; i < S.length; i++) {
      if (S[i] == +S[i]) continue;
      dfs(i + 1);

      S[i] =
        S[i] == S[i].toLowerCase() ? S[i].toUpperCase() : S[i].toLowerCase();

      res.push(S.join(''));
    }
  };

  dfs(0);

  return res;
};
