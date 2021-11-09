function createPhoneNumber(numbers) {
    return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`
}

console.log(createPhoneNumber([3,1,3,8,3,5,4,5,1,2]))