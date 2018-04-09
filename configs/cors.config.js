const originsAllowed = process.env.CORS_ORIGINS || [
    'http://localhost:4200',
    'https://mean.moulab.es',
    'https://mean.moulab.es:4443'
];

module.exports = {
    origin: function (origin, cb) {
        const allowed = originsAllowed.indexOf(origin) !== -1;
        cb(null, allowed);
    },
    credentials: true
}