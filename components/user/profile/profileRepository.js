const db = require('../../../db/index');

exports.changeInfo = async(fullname, phonenumber) => {
    const temp = Object.values(agent);
    await db.connection.execute("UPDATE netcafe.accounts SET FULLNAME = ?, PHONENUMBER = ? WHERE PHONENUMBER = ?;", [fullname, phonenumber, temp[1]]);
    const result = await db.connection.execute("SELECT * FROM netcafe.accounts where PHONENUMBER like ?;", [phonenumber]);
    agent = result[0][0];
}