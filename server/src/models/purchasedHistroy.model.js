export const createPurchaseHistoryModel = ({
  userId, // The UID of the buyer ("q8Rk6hgOyhTLnBozQerhgZVFluo2")
  items = [], // Array of detailed snapshots: [{ productId, name, price, quantity }]
  totalAmount, // Final amount paid
  paymentDetails, // E.g., { paymentMethod: "stripe", transactionId: "ch_3Mv..." }
  shippingAddress, // Snapshot of where it was sent
}) => {
  return {
    userId,
    items,
    totalAmount,
    paymentDetails,
    shippingAddress,
    status: 'processing', // default status: processing, shipped, delivered, cancelled
    purchasedAt: new Date(),
  };
};
