const Events = require('./events-model')

module.exports = {
	validateEvent,
};

function validateEvent(req, res, next){
    const {event_title, event_date, event_description, event_location} = req.body
    if (!event_title) {
		res.status(400).json({ message: 'A title is required.' });
	} else if (!event_date) {
		res.status(400).json({ message: 'A date is required.' });
	} else if (!event_description) {
		res.status(400).json({ message: 'A description is required.' });
	} else if (!event_location) {
		res.status(400).json({ message: 'A location is required.' });
	} else {
		next();
	}
}