import HR from '../models/HR.js';

export const getHRs = async (req, res) => {
  try {
    const hrs = await HR.findAll();
    res.status(200).json(hrs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getHRById = async (req, res) => {
  const { id } = req.params;
  try {
    const hr = await HR.findByPk(id);
    if (!hr) return res.status(404).json({ message: 'HR record not found' });
    res.status(200).json(hr);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createHR = async (req, res) => {
  const { employeeName, position, salary } = req.body;
  try {
    const newHR = await HR.create({ employeeName, position, salary });
    res.status(201).json(newHR);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateHR = async (req, res) => {
  const { id } = req.params;
  const { employeeName, position, salary } = req.body;
  try {
    const hr = await HR.findByPk(id);
    if (!hr) return res.status(404).json({ message: 'HR record not found' });
    hr.employeeName = employeeName;
    hr.position = position;
    hr.salary = salary;
    await hr.save();
    res.status(200).json(hr);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteHR = async (req, res) => {
  const { id } = req.params;
  try {
    const hr = await HR.findByPk(id);
    if (!hr) return res.status(404).json({ message: 'HR record not found' });
    await hr.destroy();
    res.status(200).json({ message: 'HR record deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
