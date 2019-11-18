module.exports = class Service {
    constructor(model) {
        this.model = model;
    }

    async findAll() {
        return this.model.find();
    }

    async add(item) {
        return this.model.create(item);
    }

    async del(itemId) {
        return this.model.remove({ _id: itemId });
    }

    async find(itemId = 1) {
        const allItems = await this.findAll();
        return allItems.find(p => p.id == itemId)[0];
    }

    async saveAll(items) {
        return this.model.findById(itemId);
    }
};
