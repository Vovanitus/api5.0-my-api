const devConfig = {
    MONGO_URL: 'mongodb://localhost/api5_0-dev',
};
const defaultConfig = {
    PORT: process.env.PORT || 3000,
};

function envConfig() {
    return devConfig;
}

export default {
    ...defaultConfig,
    ...envConfig(process.env.NODE_ENV),
};