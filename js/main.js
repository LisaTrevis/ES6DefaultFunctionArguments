// ----- Default Function Arguments ------

// In ES5, if we want to do a logic check, we need to include the code within the function block:
// function makeAjaxRequest(url, method) {
// 	if (!method) {
// 		method = "GET";
// 	}
// 	// logic to make the request
// }

// function makeAjaxRequest(url, method = 'GET') {
// 	// logic to make the request
// }

// // These will now both return without error, one with 'GET' and one with 'POST'
// makeAjaxRequest(google.com)
// makeAjaxRequest(google.com, 'POST')
// // If for some reason we WANT method to be undefined, use null. It's how we as developers indicate that we want it there purposely, rather than undefined which is usually the result of an error in logic. If we pass in undefined, it WILL be reassigned to GET
// makeAjaxRequest(google.com, null)


// Let's say we're working on a web app, and we need to create a user object:
// function user(id) {
// 	this.id = id;
// }

// That has a unique user id
// function generateId() {
// 	return Math.random() * 9999999;
// }

// And we can make them an Admin
// function createAdminUser() {
// 	user.admin = true;
// 	return user;
// }

// To make this work, we would need a bit of an ugly nested call, like this:
// createAdminUser(new user(generateId()));


// Instead, we can move that argument into our createAdminUser argument, like this:
// function newUser(id) {
// 	this.id = id;
// }

// function generateId() {
// 	return Math.ceil(Math.random() * 9999999);
// }

// function createAdminUser(user = new newUser(generateId())) {
// 	user.admin = true;
// 	return user;
// }

// // Then we just have to call createAdminUser and a new Id is generated automatically
// // createAdminUser();

// // If we have an existing user that we've already created, we can make an admin out of them, like this:
// const user123 = new newUser(generateId());
// createAdminUser(user123);


// Refactor the code to use default function arguments:
// function sum(a, b) {
//   if (a === undefined) {
//     a = 0; 
//   }
  
//   if (b === undefined) {
//     b = 0; 
//   }
  
//   return a + b;
// }

// function sum(a = 0, b = 0) {
// 	return a + b;
// }


// function addOffset(style) {
//   if (!style) {
//     style = {}; 
//   }
  
//   style.offset = '10px';
  
//   return style;
// }

// function addOffset(style = {}) {
// 	style.offset = "10px";
// 	return style;
// }




