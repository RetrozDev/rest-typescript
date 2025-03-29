import database from '../config/database'

class AbstractModel {
    protected table: string;
    protected database: typeof database;

    constructor({ table }: { table: string }) {
        this.table = table;

        this.database = database;
    }
}

export default AbstractModel;