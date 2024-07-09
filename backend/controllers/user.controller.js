import User from '../models/User.js';

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const { name, email, password, gender, address, division } = req.body;
  try {
    const newUser = await User.create({ name, email, password, gender, address, division });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, gender, address, division } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    user.name = name;
    user.email = email;
    user.password = password;
    user.gender = gender;
    user.address = address;
    user.division = division;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    await user.destroy();
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
