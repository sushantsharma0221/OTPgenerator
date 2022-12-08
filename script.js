// otp generation:
let generate = () => {
  let p = document.querySelector(".p");
  //   alert("Button Clicked");
  let digits = "0123456789";
  let otp = "";
  for (let i = 0; i < 4; i++) {
    otp = otp + digits[Math.floor(Math.random() * 10)];
  }
  //   return otp;
  p.innerText = `The OTP is ${otp}`;
};
// console.log(generate(4));
// console.log(generate(5));
// console.log(generate(6));
// console.log(generate(6));
// console.log(generate(8));
