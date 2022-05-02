export const authMiddleware = (req, res, next) => {
  const id = req.params.id;

  if(id === '626a78eac253cdefa5ca6bea') {
    return next();
  }

  return res.status(401).json({ message: 'Não autorizado.' });
};