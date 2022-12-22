require('dotenv').config();

const mongoose = require("mongoose");
const app = require('./app');
const DB_HOST="mongodb+srv://user:qwerty_123@cluster0.amig90u.mongodb.net/db-contacts?retryWrites=true&w=majority";
const {PORT = 3000} = process.env;
(async () => {
    await mongoose.connect(DB_HOST)
        .then(() => console.log('Database connection successful'))
        .catch(e => {
            console.log(e.message);
            process.exit(1);
        });

    app.listen(PORT, () => {
        console.log(`Server running. Use our API on port: ${PORT}`);
    });
})();
