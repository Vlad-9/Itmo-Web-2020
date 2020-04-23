// Реализуйте функцию sum
function sum (){
    var result = this.reduce(function(sum, current) {
        return sum + current;
      }, 0);
      return result;
}
console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));
