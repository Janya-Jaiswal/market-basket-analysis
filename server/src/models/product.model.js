export const createProductModel = ({
  name,
  description,
  price,
  category,
  image,
  stock,
  createdBy,
}) => {
  return {
    name,
    description,
    price,
    category,
    image,
    stock,
    createdBy,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};
