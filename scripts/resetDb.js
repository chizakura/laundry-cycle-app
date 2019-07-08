const {db} = require('../models/index');

const resetDb = async () => {
    try {
        await db.sync({
            force: true
        })
        console.log("Database Synched");
    } catch (err) {
        console.log("Database Sync Error", err.message);
    } finally {
        process.exit();
    }
}

resetDb();