const odds = evens.map(v => v + 1);
const nums = evens.map((v, i) => v + i);

nums.forEach(v => {
    if (v % 5 === 0)
        fives.push(v);
})

const bob = {
    _name: `Bob`,
    _friends: [],
    printFriends() {
        this._friends.forEach(f =>
            console.log(`${this._name} knows ${f}`));
    }
};
