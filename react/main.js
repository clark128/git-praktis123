const person1 = {
  firstName : "Spongebob",
  lastName : "Sqaurepants",
  age : 30,
  job : "Employed"
}

const person2 = {
  firstName : "Patrick",
  lastName : "Star",
  age : 34,
}

const {firstName,lastName,age, job = "Unemployed"}  = person2

console.log(job)