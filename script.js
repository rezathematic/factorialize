// defining the function - take an input, factorialize it and return the factorials
function factorialize(num) {
    if (num == 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  };
// add the value of the factorialize function to <p> tag
function returnFactorials() {
    let num = document.getElementById("number").value;
    document.getElementById("factorials").innerHTML = factorialize(num);
};