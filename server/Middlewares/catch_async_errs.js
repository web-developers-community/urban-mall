const CatchAsyncErr = (callback) => (req, res, next) => {
  Promise.resolve(callback(req, res)).catch((err) => next(err));
};

module.exports = CatchAsyncErr;
