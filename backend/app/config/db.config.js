const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    DB_HOST,
    MONGODB_DOCKER_PORT,
    MONGODB_DATABASE,
    MONGODB_LOCAL_PORT
} = process.env;

// const localMongoDbUrl = `mongodb://${DB_HOST}:${MONGODB_LOCAL_PORT}/${MONGODB_DATABASE}`;
const dockerMongoDbUrl = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${DB_HOST}:${MONGODB_DOCKER_PORT}/${MONGODB_DATABASE}?authSource=admin`;

module.exports = {
    url: dockerMongoDbUrl
};
