const eventController = {
    async getListEvent(req, res) {
        try {
            res.send({ 
                success: true, 
                message: 'Success get list of events',
                total: 0
            });
        } catch (error) {
            res.status(404).json({
                success: false, 
                message: error
            });
        }
    }
}

module.exports = eventController;