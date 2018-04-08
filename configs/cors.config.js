const originsAllowed = process.env.CORS_ORIGINS || [
    '*',
    'http://localhost:3000',
    'http://mean.moulab.es:3000',
    'https://localhost:3443',
    'https://mean.moulab.es:3443',
    'http://localhost:4200',
    'http://mean.moulab.es:4200'
];

module.exports = {
    origin: function (origin, cb) {
        const allowed = originsAllowed.indexOf(origin) !== -1;
        cb(null, allowed);
    },
    credentials: true,
}