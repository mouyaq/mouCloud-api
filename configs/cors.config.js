const originsAllowed = process.env.CORS_ORIGINS || [
    'https://mean.moulab.es'
];

module.exports = {
    origin: function (origin, cb) {
        const allowed = originsAllowed.indexOf(origin) !== -1;
        cb(null, allowed);
    },
    credentials: true
}