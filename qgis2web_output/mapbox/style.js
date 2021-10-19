
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "openmaptiles": {
            "type": "vector",
            "url": "https://api.maptiler.com/tiles/v3/tiles.json?key=BrAJoIaS66eahLFykljd"
        },
        "StamenWatercolor_0": {
            "type": "raster",
            "tiles": ["http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"],
            "tileSize": 256
        },
        "ne_10m_airports_1": {
            "type": "geojson",
            "data": json_ne_10m_airports_1
        }
    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "lyr_StamenWatercolor_0_0",
            "type": "raster",
            "source": "StamenWatercolor_0"
        },
        {
            "id": "lyr_ne_10m_airports_1_0",
            "type": "circle",
            "source": "ne_10m_airports_1",
            "layout": {},
            "paint": { 'circle-radius': ['case', ['==', ['get', 'class'], 'Major Airport'], ['/', 14.285714285714285, 2], ['==', ['get', 'class'], 'Mid Airport'], ['/', 10.714285714285714, 2], ['==', ['get', 'class'], 'Small Airport'], ['/', 7.142857142857142, 2], 0], 'circle-color': ['case', ['==', ['get', 'class'], 'Major Airport'], '#7b1be2', ['==', ['get', 'class'], 'Mid Airport'], '#5ddcb6', ['==', ['get', 'class'], 'Small Airport'], '#ffbe3b', '#ffffff'], 'circle-opacity': ['case', ['==', ['get', 'class'], 'Major Airport'], 1.0, ['==', ['get', 'class'], 'Mid Airport'], 1.0, ['==', ['get', 'class'], 'Small Airport'], 1.0, 0], 'circle-stroke-width': ['case', ['==', ['get', 'class'], 'Major Airport'], 1, ['==', ['get', 'class'], 'Mid Airport'], 1, ['==', ['get', 'class'], 'Small Airport'], 1, 0], 'circle-stroke-color': ['case', ['==', ['get', 'class'], 'Major Airport'], '#232323', ['==', ['get', 'class'], 'Mid Airport'], '#232323', ['==', ['get', 'class'], 'Small Airport'], '#232323', '#000000'] }
        }
    ],
}