const {shuffleArray} = require('./utils')

let testData=[1,2,3,4,5,6,7]

describe('shuffleArray testing', () => {
    // CODE HERE
    test("check that shuffleArray returns an object data where arrays belong to", ()=>{
        let returnedArray=shuffleArray(testData)
        expect(typeof returnedArray).toBe('object')
    })

    test("check that it returns an array of the same length as the argument sent in", ()=>{
        let returnedArray=shuffleArray(testData)
        expect(returnedArray.length).toBe(testData.length)
    })
    test("ckeck if returned array contains number 7", ()=>{
        let returnedArray=shuffleArray(testData)
        expect(returnedArray).toContain(7)
    })

})