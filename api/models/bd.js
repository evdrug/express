const mongoose = require('mongoose');
const config = require('../../config.json');


mongoose.Promise = global.Promise;

mongoose
    .connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`,
             {useMongoClient: true})
    .catch(e => {
        console.error(e);
        throw e;
    });

mongoose
    .connection
        .on('connected', function (){
            console.log(`Mongoose connection ${config.db.host}:${config.db.port}/${config.db.name} success`);
        })

mongoose
    .connection
        .on('error', function (err){
            console.log(`Mongoose connection  ${config.db.host}:${config.db.port}/${config.db.name} error ${err}`);
        })

mongoose
    .connection
        .on('disconnected', function (){
            console.log(`Mongoose disconnected  ${config.db.host}:${config.db.port}/${config.db.name}`);
        })

process.on('SININT', function () {

    mongoose
        .connection
            .close(function() {
                console.log(`Mongoose connection close  ${config.db.host}:${config.db.port}/${config.db.name}`);
                var process = NodeJS.Process;
                process.exit(0);
            })
})


require('./blog');
require('./skill');
require('./slider');
require('./user');