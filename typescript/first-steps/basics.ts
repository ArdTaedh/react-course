//Primitives

let age: number = 21

let userName: string = 'user'

let isTrue: boolean = true

//More complex types

let hobbies: string []

hobbies = ['Sports', 'Cooking']

type Person = {
    name: string,
    age: number
}

let person: Person

person = {
    name: 'Justin',
    age: 18
}

// Type inference

let course: string | number = 'React course'

// Function & types

function add(a: number, b: number): number {
    return a + b
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array]
    return newArray
}

const demoArray = [1, 2, 3]

const updatedArray = insertAtBeginning(demoArray, -1)