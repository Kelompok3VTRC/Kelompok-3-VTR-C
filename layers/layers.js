var wms_layers = [];

var format_KecNgawen_Blora_0 = new ol.format.GeoJSON();
var features_KecNgawen_Blora_0 = format_KecNgawen_Blora_0.readFeatures(json_KecNgawen_Blora_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecNgawen_Blora_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecNgawen_Blora_0.addFeatures(features_KecNgawen_Blora_0);
var lyr_KecNgawen_Blora_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecNgawen_Blora_0, 
                style: style_KecNgawen_Blora_0,
                popuplayertitle: 'Kec.Ngawen_Blora',
                interactive: true,
                title: '<img src="styles/legend/KecNgawen_Blora_0.png" /> Kec.Ngawen_Blora'
            });
var format_Bangunan_1 = new ol.format.GeoJSON();
var features_Bangunan_1 = format_Bangunan_1.readFeatures(json_Bangunan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_1.addFeatures(features_Bangunan_1);
var lyr_Bangunan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_1, 
                style: style_Bangunan_1,
                popuplayertitle: 'Bangunan',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_1.png" /> Bangunan'
            });
var format_JALAN_2 = new ol.format.GeoJSON();
var features_JALAN_2 = format_JALAN_2.readFeatures(json_JALAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_2.addFeatures(features_JALAN_2);
var lyr_JALAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_2, 
                style: style_JALAN_2,
                popuplayertitle: 'JALAN',
                interactive: true,
                title: '<img src="styles/legend/JALAN_2.png" /> JALAN'
            });

lyr_KecNgawen_Blora_0.setVisible(true);lyr_Bangunan_1.setVisible(true);lyr_JALAN_2.setVisible(true);
var layersList = [lyr_KecNgawen_Blora_0,lyr_Bangunan_1,lyr_JALAN_2];
lyr_KecNgawen_Blora_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'Luas': 'Luas', 'Ket': 'Ket', });
lyr_Bangunan_1.set('fieldAliases', {'LANDUSE': 'LANDUSE', });
lyr_JALAN_2.set('fieldAliases', {'Id': 'Id', 'LEBAR': 'LEBAR', 'SET_LEBAR': 'SET_LEBAR', });
lyr_KecNgawen_Blora_0.set('fieldImages', {'WADMKC': 'TextEdit', 'Luas': 'TextEdit', 'Ket': 'TextEdit', });
lyr_Bangunan_1.set('fieldImages', {'LANDUSE': 'TextEdit', });
lyr_JALAN_2.set('fieldImages', {'Id': 'Range', 'LEBAR': 'TextEdit', 'SET_LEBAR': 'TextEdit', });
lyr_KecNgawen_Blora_0.set('fieldLabels', {'WADMKC': 'no label', 'Luas': 'no label', 'Ket': 'no label', });
lyr_Bangunan_1.set('fieldLabels', {'LANDUSE': 'no label', });
lyr_JALAN_2.set('fieldLabels', {'Id': 'no label', 'LEBAR': 'no label', 'SET_LEBAR': 'no label', });
lyr_JALAN_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});