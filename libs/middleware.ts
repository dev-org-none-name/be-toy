const wrapAsyncController = (asyncFn) => {
  return async (req, res, next) => {
    try {
      return await asyncFn(req, res, next);
    } catch (error) {
      return res.json({
        ok: false,
        error,
      });
    }
  };
};
export default wrapAsyncController;
