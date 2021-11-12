let input = [
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
];

function openOrSenior(data) {
  let resp = [];
  for (let i = 0; i < data.length; i++) {
    let result = "";
    data[i][0] >= 55 && data[i][1] > 7
      ? (result = "Senior")
      : (result = "Open");
    resp.push(result);
  }
  return resp;
}

console.log(openOrSenior(input));

