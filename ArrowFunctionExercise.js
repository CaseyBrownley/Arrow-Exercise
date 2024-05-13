function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

  //to es2015

  const double = arr => arr.map(val => val * 2);


  function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

  //to es2015

  const swuareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => val % 2 ===0);