var MultiGeometryViewBase = require('./multi-geometry-view-base');
var PolygonView = require('./polygon-view');

var MultiPolygonView = MultiGeometryViewBase.extend({
  GeometryViewClass: PolygonView
});

module.exports = MultiPolygonView;
