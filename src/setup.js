function createTable () {
    const table = [];
    for (let i = 0; i < 5; i++) {
        table.push([]);
        const nums = Array.from(Array(15).keys()).map(el => el + 1 + i * 15);

        for (let j = 0; j < 5; j++) {
            const idx = Math.random() * nums.length;
            table[i].push(nums.splice(idx, 1));
        }
    }

    return table;
}

export default createTable;