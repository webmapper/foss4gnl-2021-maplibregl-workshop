var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_earthquakes_1 = new ol.format.GeoJSON();
var features_earthquakes_1 = format_earthquakes_1.readFeatures(json_earthquakes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_earthquakes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_earthquakes_1.addFeatures(features_earthquakes_1);
var lyr_earthquakes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_earthquakes_1, 
                style: style_earthquakes_1,
                interactive: true,
                title: '<img src="styles/legend/earthquakes_1.png" /> earthquakes'
            });

lyr_OSMStandard_0.setVisible(true);lyr_earthquakes_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_earthquakes_1];
lyr_earthquakes_1.set('fieldAliases', {'fid': 'fid', 'DD_MM_YYY': 'DD_MM_YYY', 'LOCATION': 'LOCATION', 'MAGNITUDE': 'MAGNITUDE', 'ID': 'ID', });
lyr_earthquakes_1.set('fieldImages', {'fid': '', 'DD_MM_YYY': '', 'LOCATION': '', 'MAGNITUDE': '', 'ID': '', });
lyr_earthquakes_1.set('fieldLabels', {'fid': 'no label', 'DD_MM_YYY': 'no label', 'LOCATION': 'no label', 'MAGNITUDE': 'no label', 'ID': 'no label', });
lyr_earthquakes_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});