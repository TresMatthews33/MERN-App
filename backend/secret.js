const secrets= {
    //The URL that we use to connect to the MongoDB Atlas cluster
    dbUri: 'mongodb+srv://TresMatthews:<1939574685>@cluster0-yg9gp.mongodb.net/test?retryWrites=true&w=majority'
};

const getSecret = key => secrets[key];

module.exports = getSecret;