import dotenv from 'dotenv';
dotenv.config();

const keys = {
  port: process.env.PORT || 8080,
};

export default keys;
