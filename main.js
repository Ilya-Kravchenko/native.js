const number = {
  one: 1,
}

function addition() {
  const ten = 10
  const newNumber = Object.assign({}, number)
  newNumber.one += 1
  newNumber.two -= 10
  return newNumber
}

console.log(number)
addition()
console.log(addition())


const number = {
  one: 1,
}

function addition() {
  const ten = 10
  const newNumber = Object.assign({}, number)
  newNumber.one += 1
  newNumber.two -= 10
  return newNumber
}

console.log(number)
addition()
console.log(addition())
