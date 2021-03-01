const rider = {
    name: {
        first: 'Valentino',
        last: 'Rossi'
    },
    present() {
        return `My name is ${ this.name.first ?? '' } ${ this.name.last ?? '' }`;
    }
};

console.log(rider?.name?.first);
console.log(rider?.present());
