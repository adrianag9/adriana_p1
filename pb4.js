class CustomList{
    constructor(data) {
        this.list = data;
    }

    insertFirst(data) {
        this.list.unshift(data);
    }

    insertLast(data) {
        this.list.push(data);
    }

    getFirst(){
        return "First: " + this.list[0];
    }

    getLast(){
        return "Last: " + this.list.pop();
    }
}

let colors = new CustomList(["red", "green", "blue"]);

console.log(colors.getFirst());
console.log(colors.getLast());

colors.insertFirst("black");
colors.insertLast("white");

console.log(colors.getFirst());
console.log(colors.getLast());
