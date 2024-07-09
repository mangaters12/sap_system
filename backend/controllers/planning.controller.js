import Planning from '../models/Planning.js';

export const getPlans = async (req, res) => {
  try {
    const plans = await Planning.findAll();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPlanById = async (req, res) => {
  const { id } = req.params;
  try {
    const plan = await Planning.findByPk(id);
    if (!plan) return res.status(404).json({ message: 'Plan not found' });
    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPlan = async (req, res) => {
  const { project, timeline, budget } = req.body;
  try {
    const newPlan = await Planning.create({ project, timeline, budget });
    res.status(201).json(newPlan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePlan = async (req, res) => {
  const { id } = req.params;
  const { project, timeline, budget } = req.body;
  try {
    const plan = await Planning.findByPk(id);
    if (!plan) return res.status(404).json({ message: 'Plan not found' });
    plan.project = project;
    plan.timeline = timeline;
    plan.budget = budget;
    await plan.save();
    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePlan = async (req, res) => {
  const { id } = req.params;
  try {
    const plan = await Planning.findByPk(id);
    if (!plan) return res.status(404).json({ message: 'Plan not found' });
    await plan.destroy();
    res.status(200).json({ message: 'Plan deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
