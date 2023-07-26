import jwt from 'jsonwebtoken';

const JWT_KEY = process.env.JWT_KEY || 'N3V3R G0NN4 G1V3 Y0U UP';

export const generateToken = (data: any) => {
  return jwt.sign(data, JWT_KEY, { expiresIn: '100h' });
};
