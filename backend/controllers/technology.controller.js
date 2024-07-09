import Technology from '../models/Technology.js';

export const getTechnologies = async (req, res) => {
  try {
    const technologies = await Technology.findAll();
    res.status(200).json(technologies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTechnologyById = async (req, res) => {
  const { id } = req.params;
  try {
    const technology = await Technology.findByPk(id);
    if (!technology) return res.status(404).json({ message: 'Technology not found' });
    res.status(200).json(technology);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTechnology = async (req, res) => {
  const { tool, version, description } = req.body;
  try {
    const newTechnology = await Technology.create({ tool, version, description });
    res.status(201).json(newTechnology);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTechnology = async (req, res) => {
  const { id } = req.params;
  const { tool, version, description } = req.body;
  try {
    const technology = await Technology.findByPk(id);
    if (!technology) return res.status(404).json({ message: 'Technology not found' });
    technology.tool = tool;
    technology.version = version;
    technology.description = description;
    await technology.save();
    res.status(200).json(technology);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTechnology = async (req, res) => {
  const { id } = req.params;
  try {
    const technology = await Technology.findByPk(id);
    if (!technology) return res.status(404).json({ message: 'Technology not found' });
    await technology.destroy();
    res.status(200).json({ message: 'Technology deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
