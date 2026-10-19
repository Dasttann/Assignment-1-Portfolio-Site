module.exports = function createCrudController(Model, label) {
  return {
    getAll: async (_req, res, next) => { try { res.json(await Model.find().sort({ createdAt: -1 })); } catch (e) { next(e); } },
    getById: async (req, res, next) => { try { const item = await Model.findById(req.params.id); if (!item) return res.status(404).json({ message: `${label} not found` }); res.json(item); } catch (e) { next(e); } },
    create: async (req, res, next) => { try { res.status(201).json(await Model.create(req.body)); } catch (e) { next(e); } },
    update: async (req, res, next) => { try { const item = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }); if (!item) return res.status(404).json({ message: `${label} not found` }); res.json(item); } catch (e) { next(e); } },
    remove: async (req, res, next) => { try { const item = await Model.findByIdAndDelete(req.params.id); if (!item) return res.status(404).json({ message: `${label} not found` }); res.json({ message: `${label} deleted successfully` }); } catch (e) { next(e); } },
    removeAll: async (_req, res, next) => { try { const result = await Model.deleteMany({}); res.json({ message: `All ${label.toLowerCase()} records deleted`, deletedCount: result.deletedCount }); } catch (e) { next(e); } }
  };
};
