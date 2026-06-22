export const createCartModel = ({
  userId,
  items = [], // Expecting array of: { productId, quantity }
}) => {
  return {
    userId,
    items,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};
