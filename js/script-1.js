// const productName = "Droid";
// const pricePerItem  = 2000;

// let productName = "Droid";
// productName = "Repair droid";
// let pricePerItem = 2000;
// pricePerItem = 3500;
// console.log(productName);
// console.log(pricePerItem);

// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// function sayHi() {
//     console.log("Hello, this is my first function!");
// }
// sayHi();

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function add(a, b, c) {
//     return a + b + c;
// }
// let result = add(2, 5, 8);
// console.log(result);
// result = add(15, 27, 10);
// console.log(result);
// result = add(10, 20, 30);
// console.log(result);
// result = add(5, 10, 15);
// console.log(result);

// function makeMessage (name, price) {
//    const message = `You picked ${name}, price per item is ${price} credits`; 
//   return message;
// }
// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;
//   return totalPrice;
// }
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
// const totalPrice = orderedQuantity * pricePerDroid + deliveryFee; 
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// const age = prompt("Введите сколько вам лет:");
// function isAdult(age) {
//   const passed = age >= 18 ;
//   return passed;
// }
// console.log(isAdult(age));

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = SAVED_PASSWORD === password;
//   return isMatch;
// }

// function checkAge(age) {
//   let message;
//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   return message;
// }

// function checkStorage(available, ordered) {
//   let message; 
// if (ordered >= available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }
//   return message;
// }
// console.log(checkStorage(100, 50));

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//     const totalPrice = pricePerDroid * orderedQuantity;
// if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
// } else {
//     const leftAccount = customerCredits - totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${leftAccount} credits left`;
//   }
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   if (password === null) {
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   return message;
// }

// function checkStorage(available, ordered) {
//     let message;    
// if (ordered === 0) {
//     message =  "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   return message;
// }

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <=end;
//   return isInRange;
// }

// function checkIfCanAccessContent(subType) {
//     const canAccessContent = subType === "pro" || subType === "vip";   
//   return canAccessContent;
// }

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;
//   return isNotInRange;
// }

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount; 
//     if (totalSpent < 5000) {
//         discount = BASE_DISCOUNT;
//     } else if (totalSpent >= 5000 && totalSpent < 20000) {
//         discount = BRONZE_DISCOUNT;
//     } else if (totalSpent >= 20000 && totalSpent < 50000) {
//         discount = SILVER_DISCOUNT;
//     } else {
//         discount = GOLD_DISCOUNT;        
//     }
//   return discount;
// }

// function checkStorage(available, ordered) {
//     let message;
//     message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you"; 
//   return message;
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//   return message;
// }

// function getSubscriptionPrice(type) {
//   let price;
//  switch (type) { 
//     case "starter": 
//       price = 0; 
//       break;
//     case "professional": 
//       price = 20; 
//       break;
//     case "organization": 
//       price = 50; 
//       break;
//   }
//   return price;
// }

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     switch (password) {
//         case null:
//             message = "Canceled by user!";
//             break;
//         case ADMIN_PASSWORD:
//             message = "Welcome!";
//             break;
//         default: message = "Access denied, wrong password!";
//     }
//             return message;
//     }

// function getShippingCost(country) {
//     let message;    
//      switch (country) {
//         case "China":
//             message = "Shipping to China will cost 100 credits";
//             break;
//         case "Chile":
//             message = "Shipping to Chile will cost 250 credits";
//             break;
//         case "Australia":
//             message = "Shipping to Australia will cost 170 credits";
//             break;
//         case "Jamaica":
//             message = "Shipping to Jamaica will cost 120 credits";
//             break;
//         default: message = "Sorry, there is no delivery to your country";
//     }
//   return message;
// }

// function getNameLength(name) {
// const lengthName = name.length;
// const message = `Name ${name} is ${lengthName} characters long`;
// return message;
// }

// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// function getSubstring(string, length) {
// const substring = string.slice(0, length);    
// return substring;
// }

// function formatMessage(message, maxLength) {
//     let result;    
//     const messageLength = message.length;
//     if (messageLength <= maxLength) {
//         result = message.slice();
//     } else {
//         result = message.slice(0, maxLength) + "...";
//     }    
//   return result;
// }

// function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase();
//   return normalizedInput;
// }

// function checkForName(fullName, name) {
//  const result = fullName.includes(name);
//   return result;
// }

// function checkForSpam(message) {
// let result;    
// const normalizedInput = message.toLowerCase();
// result = normalizedInput.includes("spam") || normalizedInput.includes("sale");     
// return result;
// }

// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));