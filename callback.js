function makeUpperCase(value){
    console.log(value.toUpperCase())

}

function reverseString(value){
    console.log(value.split('').reverse().join(''))
}

function handleName(name,cb){
    const fullName=`${name} anand`
    cb(fullName)
}

handleName('ayush',makeUpperCase)
handleName('ayush',reverseString)

