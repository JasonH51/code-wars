//Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

function isValidIP(str) {
  const valid = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/.test(str);
  return valid;
}

isValidIP('0.0.0.0');
isValidIP('12.255.56.1');
isValidIP('137.255.156.100');
isValidIP('');
isValidIP('abc.def.ghi.jkl');
isValidIP('123.456.789.0');
isValidIP('12.34.56');
isValidIP('01.02.03.04');
isValidIP('256.1.2.3');
isValidIP('1.2.3.4.5');
isValidIP('123,45,67,89');
isValidIP('1e0.1e1.1e2.2e2');
isValidIP(' 1.2.3.4');
isValidIP('1.2.3.4 ');
isValidIP('12.34.56.-7');
isValidIP('1.2.3.4\n');
isValidIP('\n1.2.3.4');
