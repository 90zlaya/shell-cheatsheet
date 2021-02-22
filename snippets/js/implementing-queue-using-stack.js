let mainStack = []

const enque = (enquedValue) => {
    mainStack.push(enquedValue);
}

const deque = () => {
    const tempStack = [...mainStack.reverse()];
    const dequedValue = tempStack.pop();
    mainStack = [...tempStack.reverse()];
    return dequedValue;
};

enque(1); // mainStack: [1]
enque(2); // mainStack: [1, 2]
enque(3); // mainStack: [1, 2, 3]

console.log('Dequed', deque()); // Dequed 1
console.log('Dequed', deque()); // Dequed 2
console.log('Dequed', deque()); // Dequed 3
