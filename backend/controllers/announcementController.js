const Announcement = require('../models/announcements');

// Get all announcements
exports.getAllAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.findAll();
        res.json(announcements);
    } catch (error) {
        console.error('Error fetching announcements:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Create a new announcement
exports.createAnnouncement = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required' });
        }
        const newAnnouncement = await Announcement.create({ title, content });
        res.status(201).json(newAnnouncement);
    } catch (error) {
        console.error('Error creating announcement:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Update an announcement
exports.updateAnnouncement = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const [updated] = await Announcement.update({ title, content }, { where: { id } });
        if (updated) {
            const updatedAnnouncement = await Announcement.findByPk(id);
            res.status(200).json(updatedAnnouncement);
        } else {
            res.status(404).json({ error: 'Announcement not found' });
        }
    } catch (error) {
        console.error('Error updating announcement:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete an announcement
exports.deleteAnnouncement = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Announcement.destroy({ where: { id } });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Announcement not found' });
        }
    } catch (error) {
        console.error('Error deleting announcement:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
