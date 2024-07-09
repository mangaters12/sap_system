import Finance from '../models/Finance.js';

export const getFinances = async (req, res) => {
  try {
    const finances = await Finance.findAll();
    res.status(200).json(finances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFinanceById = async (req, res) => {
  const { id } = req.params;
  try {
    const finance = await Finance.findByPk(id);
    if (!finance) return res.status(404).json({ message: 'Finance record not found' });
    res.status(200).json(finance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createFinance = async (req, res) => {
  const { budget, expenditure, department } = req.body;
  try {
    const newFinance = await Finance.create({ budget, expenditure, department });
    res.status(201).json(newFinance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateFinance = async (req, res) => {
  const { id } = req.params;
  const { budget, expenditure, department } = req.body;
  try {
    const finance = await Finance.findByPk(id);
    if (!finance) return res.status(404).json({ message: 'Finance record not found' });
    finance.budget = budget;
    finance.expenditure = expenditure;
    finance.department = department;
    await finance.save();
    res.status(200).json(finance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteFinance = async (req, res) => {
  const { id } = req.params;
  try {
    const finance = await Finance.findByPk(id);
    if (!finance) return res.status(404).json({ message: 'Finance record not found' });
    await finance.destroy();
    res.status(200).json({ message: 'Finance record deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
