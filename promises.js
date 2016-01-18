'use strict';
const keystone = require('keystone');
const async = require('async')
const chalk = require('chalk');
const Event = keystone.list('Event');
const User = keystone.list('User');
const RateCard = keystone.list('RateCard');

module.exports = function(req,res) {
    return Event.model.findOne()
    .where({
        user: req.user.id,
        isComplete: false
    })
    .populate('rateCard')
    .exec()
    .then(currentEvent => {
        if (!currentEvent) throw new Error(404, 'no currentEvent found');

        return RateCard.model.findOne({
            centre: currentEvent.centre
        })
        .exec()
        .then(rateCard => ({ rateCard, currentEvent }))
    })
    .then(({rateCard, currentEvent}) => {
        if (!rateCard) throw new Error(404, 'no rateCard found');

        const { startedAt } = currentEvent;
        const sessionCost = ratecard.calculate(startedAt, Date.now());

        return res.json({
            activeEvent: true,
            currentEvent : { startedAt, sessionCost }
        });
    })
    .then(null, e => res.sendError(e))
}
