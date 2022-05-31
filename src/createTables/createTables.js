const fs = require('fs');
const path = require('path');
const connection = require('../DB/db');

const createTable = ()=>{
    
    connection.query(`
    CREATE TABLE IF NOT EXISTS Profiles(
        profile_id INT  PRIMARY KEY AUTO_INCREMENT         
    );
    `,(err,result)=>{
        if (err) throw err;
        console.log('table created successfully...');
    });
}

const addColumn = ()=>{
    connection.query(`
    ALTER TABLE Profiles
    ADD COLUMN IF NOT EXISTS profile_image BLOB;

    ALTER TABLE Profiles
    ADD COLUMN IF NOT EXISTS createdAt DATETIME;

    ALTER TABLE Profiles
    ADD COLUMN IF NOT EXISTS updatedAt DATETIME;
    `,
    (err,result)=>{
        if (err) throw err;
        console.log('Columns added successfully...');
    });
}


module.exports = {
    createTable,
    addColumn
};

    