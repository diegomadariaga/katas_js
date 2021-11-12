function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0&& a + b + c <= 180) {
    return true;
  } else {  
    return false; 
  }
}