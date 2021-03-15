const one = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const ten = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function convert_ten(num) {
    if (num < 10) {
      return one[num];
    }
    else if (num >= 10 && num < 20) {
      return teen[num - 10];
    } 
    else {
      if(num % 10 != 0){
          return ten[Math.floor(num / 10)] + ' ' + one[num % 10];
        } else {
          return ten[Math.floor(num / 10)];
        }
    }
}
function convert_hundred(num) {
  if (num > 99) {
    if(num % 100 != 0){
        return one[Math.floor(num / 100)] + ' hundred ' + convert_ten(num % 100);
      } else {
        return one[Math.floor(num / 100)] + ' hundred';
      }
  } else {
    return convert_ten(num);
  }
}
function finish_convert(num) {
  if (num == 0) return 'zero';
  else return convert_hundred(num);
}

module.exports = function toReadable (number) {
  return finish_convert(number);   
}
