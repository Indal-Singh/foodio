const mongoose = require('mongoose');

const connetDB = async () => {
  try {
    let connectionInstance = await mongoose.connect(`${process.env.DB_URi}`);
    console.log(`Database Connected On Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(`Mongooes Connection Error.`, error)
    process.exit(1);
  }
}

module.exports = connetDB;