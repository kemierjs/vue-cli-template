let obj = {
    "0-a": 123,
    "0-b": 123,
    "0-c": 123,
    "0-d": 123,
    "1-a": 123,
    "1-b": 123,
    "1-c": 123
};

function run(obj){
    let result = [];
    let map = new Map();
    Object.keys(obj).forEach((key) => {
        let [l1, l2] = key.split("-");
        map.set({ [ l2 ]: obj[ key ] }, l1);
    });
    map.forEach((v, k) => result[ v ] = result[ v ] ? { ...result[ v ], ...k } : k);
    return result;
}

console.log(run(obj));
