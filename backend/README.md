# sample-nodeserver-dinos

A small sample [nodejs](http://nodejs.org) server.

## Setup and Usage

1. Make sure [NodeJS (with npm)](http://nodejs.org) is installed.
2. Clone or download this repository to a directory of your choice.
3. Run the command `npm install` from the project root directory.
4. Executing `npm start` launches the node server on [http://localhost:8000](http://localhost:8000).

## Routes

The following public `GET` requests are currently available:

### `/api/items`

`GET`: returns an array of simple item objects with `id`s and `name`s, ie:

```
...
{
	"id": 5,
	"name": "ITEM FIVE"
},
{
	"id": 6,
	"name": "ITEM SIX"
}
...
```

### `/api/item/:id`

`GET`: returns an object with a item's expanded details, ie:

```
{
	"id": 5,
	"name": "ITEM FIVE",
	"info": "Lorem ipsum dolor sit amet, qui ex scripta adipisci urbanitas.",
	"img": "img/url"
}
```
