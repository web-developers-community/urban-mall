const CatchAsyncErr = (callback) => (req, res, next) => {
  Promise.resolve(callback(err, res)).catch((err) => next(err));
};

module.exports = CatchAsyncErr;
