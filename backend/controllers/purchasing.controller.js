import Purchasing from '../models/Purchasing.js';

export const getPurchases = async (req, res) => {
  try {
    const purchases = await Purchasing.findAll();
    res.status(200).json(purchases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPurchaseById = async (req, res) => {
  const { id } = req.params;
  try {
    const purchase = await Purchasing.findByPk(id);
    if (!purchase) return res.status(404).json({ message: 'Purchase not found' });
    res.status(200).json(purchase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPurchase = async (req, res) => {
  const { item, quantity, price } = req.body;
  try {
    const newPurchase = await Purchasing.create({ item, quantity, price });
    res.status(201).json(newPurchase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePurchase = async (req, res) => {
  const { id } = req.params;
  const { item, quantity, price } = req.body;
  try {
    const purchase = await Purchasing.findByPk(id);
    if (!purchase) return res.status(404).json({ message: 'Purchase not found' });
    purchase.item = item;
    purchase.quantity = quantity;
    purchase.price = price;
    await purchase.save();
    res.status(200).json(purchase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePurchase = async (req, res) => {
  const { id } = req.params;
  try {
    const purchase = await Purchasing.findByPk(id);
    if (!purchase) return res.status(404).json({ message: 'Purchase not found' });
    await purchase.destroy();
    res.status(200).json({ message: 'Purchase deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
