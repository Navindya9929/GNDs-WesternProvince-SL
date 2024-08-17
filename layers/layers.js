var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WP_GNDs_1 = new ol.format.GeoJSON();
var features_WP_GNDs_1 = format_WP_GNDs_1.readFeatures(json_WP_GNDs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WP_GNDs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WP_GNDs_1.addFeatures(features_WP_GNDs_1);
var lyr_WP_GNDs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WP_GNDs_1, 
                style: style_WP_GNDs_1,
                popuplayertitle: "WP_GNDs",
                interactive: true,
                title: '<img src="styles/legend/WP_GNDs_1.png" /> WP_GNDs'
            });

lyr_OSMStandard_0.setVisible(true);lyr_WP_GNDs_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_WP_GNDs_1];
lyr_WP_GNDs_1.set('fieldAliases', {'fid': 'fid', 'CODE': 'CODE', 'PROVINCE_N': 'PROVINCE_N', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_N': 'DISTRICT_N', 'DISTRICT_C': 'DISTRICT_C', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_C': 'GND_C', 'MC_UC_PS_N': 'MC_UC_PS_N', 'MC_UC_PS_C': 'MC_UC_PS_C', 'POLLI_DV_N': 'POLLI_DV_N', 'POLLI_DV_C': 'POLLI_DV_C', 'AREA': 'AREA', 'DSD_CODE': 'DSD_CODE', 'PROVINCE_1': 'PROVINCE_1', 'PROVINCE_2': 'PROVINCE_2', 'DISTRICT_1': 'DISTRICT_1', 'DISTRICT_2': 'DISTRICT_2', 'DSD_N_1': 'DSD_N_1', 'DSD_C_1': 'DSD_C_1', 'GND_N_1': 'GND_N_1', 'GND_C_1': 'GND_C_1', 'MC_UC_PS_1': 'MC_UC_PS_1', 'MC_UC_PS_2': 'MC_UC_PS_2', 'POLLI_DV_1': 'POLLI_DV_1', 'POLLI_DV_2': 'POLLI_DV_2', 'AREA_1': 'AREA_1', });
lyr_WP_GNDs_1.set('fieldImages', {'fid': '', 'CODE': '', 'PROVINCE_N': '', 'PROVINCE_C': '', 'DISTRICT_N': '', 'DISTRICT_C': '', 'DSD_N': '', 'DSD_C': '', 'GND_N': '', 'GND_C': '', 'MC_UC_PS_N': '', 'MC_UC_PS_C': '', 'POLLI_DV_N': '', 'POLLI_DV_C': '', 'AREA': '', 'DSD_CODE': '', 'PROVINCE_1': '', 'PROVINCE_2': '', 'DISTRICT_1': '', 'DISTRICT_2': '', 'DSD_N_1': '', 'DSD_C_1': '', 'GND_N_1': '', 'GND_C_1': '', 'MC_UC_PS_1': '', 'MC_UC_PS_2': '', 'POLLI_DV_1': '', 'POLLI_DV_2': '', 'AREA_1': '', });
lyr_WP_GNDs_1.set('fieldLabels', {'fid': 'no label', 'CODE': 'no label', 'PROVINCE_N': 'no label', 'PROVINCE_C': 'no label', 'DISTRICT_N': 'no label', 'DISTRICT_C': 'no label', 'DSD_N': 'no label', 'DSD_C': 'no label', 'GND_N': 'no label', 'GND_C': 'no label', 'MC_UC_PS_N': 'no label', 'MC_UC_PS_C': 'no label', 'POLLI_DV_N': 'no label', 'POLLI_DV_C': 'no label', 'AREA': 'no label', 'DSD_CODE': 'no label', 'PROVINCE_1': 'no label', 'PROVINCE_2': 'no label', 'DISTRICT_1': 'no label', 'DISTRICT_2': 'no label', 'DSD_N_1': 'no label', 'DSD_C_1': 'no label', 'GND_N_1': 'no label', 'GND_C_1': 'no label', 'MC_UC_PS_1': 'no label', 'MC_UC_PS_2': 'no label', 'POLLI_DV_1': 'no label', 'POLLI_DV_2': 'no label', 'AREA_1': 'no label', });
lyr_WP_GNDs_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});