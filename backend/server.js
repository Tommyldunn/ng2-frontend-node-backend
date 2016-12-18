'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var _ = require('lodash');
var itemJson = require('./data/items.json');

var app = express();
var allItems = getAllItems();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/items', function (req, res) {
	res.json(allItems);
});

app.get('/api/item/:id', function (req, res) {
	var id = req.params.id * 1;
	var thisItem = _.find(itemJson, { id: id });
	res.json(thisItem);
});

app.listen(8000);
console.log('Listening on localhost:8000');

/**
 * Get all items
 * @returns {array}
 */
function getAllItems() {
	return _.map(itemJson, function (obj) {
		return {
			id: obj.id,
			name: obj.name,
			img: obj.img
		};
	});
}
