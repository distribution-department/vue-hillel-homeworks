class LocalStor {
    constructor() {
        this.idCount = 1;
    }

    getAllData() {
        let fullData = localStorage.getItem('data');
        if (fullData) return JSON.parse(fullData);
        else return [];
    };

    addNewTask(task) {
        let currentTasksArr = this.getAllData();
        let temporaryElement = null;

        if (currentTasksArr.length < 1) {
            temporaryElement = {id: this.idCount, ...task};
        } else {
            let lastElementIndex = currentTasksArr.at(-1).id;
            temporaryElement = {id: ++lastElementIndex, ...task};
        }
        currentTasksArr.push(temporaryElement);
        localStorage.setItem('data', JSON.stringify(currentTasksArr));
        return temporaryElement;
    };

    deleteTask(task) {
        let currentTasksArr = this.getAllData();
        let filteredArr = currentTasksArr.filter(elem => elem.id !== task.del.id);
        localStorage.setItem('data', JSON.stringify(filteredArr));
    }
}

const storage = new LocalStor();
export default storage;