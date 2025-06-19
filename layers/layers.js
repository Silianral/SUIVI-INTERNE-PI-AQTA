ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-331109.347147, 6033758.938234, -331018.393321, 6033817.528570]);
var wms_layers = [];


        var lyr_SatelitegoogleMap_0 = new ol.layer.Tile({
            'title': 'Satelite googleMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.com/maps/vt?lyrs=s@180&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Profil9_Locmariaquer_1 = new ol.format.GeoJSON();
var features_Profil9_Locmariaquer_1 = format_Profil9_Locmariaquer_1.readFeatures(json_Profil9_Locmariaquer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil9_Locmariaquer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil9_Locmariaquer_1.addFeatures(features_Profil9_Locmariaquer_1);
var lyr_Profil9_Locmariaquer_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil9_Locmariaquer_1, 
                style: style_Profil9_Locmariaquer_1,
                popuplayertitle: 'Profil 9_Locmariaquer',
                interactive: true,
                title: '<img src="styles/legend/Profil9_Locmariaquer_1.png" /> Profil 9_Locmariaquer'
            });
var format_Profil7_Locmariaquer_2 = new ol.format.GeoJSON();
var features_Profil7_Locmariaquer_2 = format_Profil7_Locmariaquer_2.readFeatures(json_Profil7_Locmariaquer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil7_Locmariaquer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil7_Locmariaquer_2.addFeatures(features_Profil7_Locmariaquer_2);
var lyr_Profil7_Locmariaquer_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil7_Locmariaquer_2, 
                style: style_Profil7_Locmariaquer_2,
                popuplayertitle: 'Profil 7_Locmariaquer',
                interactive: true,
                title: '<img src="styles/legend/Profil7_Locmariaquer_2.png" /> Profil 7_Locmariaquer'
            });
var format_Profil8_Locmariaquer_3 = new ol.format.GeoJSON();
var features_Profil8_Locmariaquer_3 = format_Profil8_Locmariaquer_3.readFeatures(json_Profil8_Locmariaquer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil8_Locmariaquer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil8_Locmariaquer_3.addFeatures(features_Profil8_Locmariaquer_3);
var lyr_Profil8_Locmariaquer_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil8_Locmariaquer_3, 
                style: style_Profil8_Locmariaquer_3,
                popuplayertitle: 'Profil 8_Locmariaquer',
                interactive: true,
                title: '<img src="styles/legend/Profil8_Locmariaquer_3.png" /> Profil 8_Locmariaquer'
            });
var format_Profil6_Locmariaquer_4 = new ol.format.GeoJSON();
var features_Profil6_Locmariaquer_4 = format_Profil6_Locmariaquer_4.readFeatures(json_Profil6_Locmariaquer_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil6_Locmariaquer_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil6_Locmariaquer_4.addFeatures(features_Profil6_Locmariaquer_4);
var lyr_Profil6_Locmariaquer_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil6_Locmariaquer_4, 
                style: style_Profil6_Locmariaquer_4,
                popuplayertitle: 'Profil 6_Locmariaquer',
                interactive: true,
                title: '<img src="styles/legend/Profil6_Locmariaquer_4.png" /> Profil 6_Locmariaquer'
            });
var format_Profil5_Locmariaquer_5 = new ol.format.GeoJSON();
var features_Profil5_Locmariaquer_5 = format_Profil5_Locmariaquer_5.readFeatures(json_Profil5_Locmariaquer_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil5_Locmariaquer_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil5_Locmariaquer_5.addFeatures(features_Profil5_Locmariaquer_5);
var lyr_Profil5_Locmariaquer_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil5_Locmariaquer_5, 
                style: style_Profil5_Locmariaquer_5,
                popuplayertitle: 'Profil 5_Locmariaquer',
                interactive: true,
                title: '<img src="styles/legend/Profil5_Locmariaquer_5.png" /> Profil 5_Locmariaquer'
            });
var format_Profil4_Locmariaquer_6 = new ol.format.GeoJSON();
var features_Profil4_Locmariaquer_6 = format_Profil4_Locmariaquer_6.readFeatures(json_Profil4_Locmariaquer_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil4_Locmariaquer_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil4_Locmariaquer_6.addFeatures(features_Profil4_Locmariaquer_6);
var lyr_Profil4_Locmariaquer_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil4_Locmariaquer_6, 
                style: style_Profil4_Locmariaquer_6,
                popuplayertitle: 'Profil 4_Locmariaquer',
                interactive: true,
                title: '<img src="styles/legend/Profil4_Locmariaquer_6.png" /> Profil 4_Locmariaquer'
            });
var format_Profil3_Locmariaquer_7 = new ol.format.GeoJSON();
var features_Profil3_Locmariaquer_7 = format_Profil3_Locmariaquer_7.readFeatures(json_Profil3_Locmariaquer_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil3_Locmariaquer_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil3_Locmariaquer_7.addFeatures(features_Profil3_Locmariaquer_7);
var lyr_Profil3_Locmariaquer_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil3_Locmariaquer_7, 
                style: style_Profil3_Locmariaquer_7,
                popuplayertitle: 'Profil 3_Locmariaquer',
                interactive: true,
                title: '<img src="styles/legend/Profil3_Locmariaquer_7.png" /> Profil 3_Locmariaquer'
            });
var format_Profil2_Locmariaquer_8 = new ol.format.GeoJSON();
var features_Profil2_Locmariaquer_8 = format_Profil2_Locmariaquer_8.readFeatures(json_Profil2_Locmariaquer_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil2_Locmariaquer_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil2_Locmariaquer_8.addFeatures(features_Profil2_Locmariaquer_8);
var lyr_Profil2_Locmariaquer_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil2_Locmariaquer_8, 
                style: style_Profil2_Locmariaquer_8,
                popuplayertitle: 'Profil 2_Locmariaquer',
                interactive: true,
                title: '<img src="styles/legend/Profil2_Locmariaquer_8.png" /> Profil 2_Locmariaquer'
            });
var format_Profil1_Locmariaquer_9 = new ol.format.GeoJSON();
var features_Profil1_Locmariaquer_9 = format_Profil1_Locmariaquer_9.readFeatures(json_Profil1_Locmariaquer_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil1_Locmariaquer_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil1_Locmariaquer_9.addFeatures(features_Profil1_Locmariaquer_9);
var lyr_Profil1_Locmariaquer_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil1_Locmariaquer_9, 
                style: style_Profil1_Locmariaquer_9,
                popuplayertitle: 'Profil 1_Locmariaquer',
                interactive: true,
                title: '<img src="styles/legend/Profil1_Locmariaquer_9.png" /> Profil 1_Locmariaquer'
            });
var format_ProfilE_MenErBellec_10 = new ol.format.GeoJSON();
var features_ProfilE_MenErBellec_10 = format_ProfilE_MenErBellec_10.readFeatures(json_ProfilE_MenErBellec_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProfilE_MenErBellec_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProfilE_MenErBellec_10.addFeatures(features_ProfilE_MenErBellec_10);
var lyr_ProfilE_MenErBellec_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProfilE_MenErBellec_10, 
                style: style_ProfilE_MenErBellec_10,
                popuplayertitle: 'Profil E_MenErBellec',
                interactive: true,
                title: '<img src="styles/legend/ProfilE_MenErBellec_10.png" /> Profil E_MenErBellec'
            });
var format_ProfilD_MenErBellec_11 = new ol.format.GeoJSON();
var features_ProfilD_MenErBellec_11 = format_ProfilD_MenErBellec_11.readFeatures(json_ProfilD_MenErBellec_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProfilD_MenErBellec_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProfilD_MenErBellec_11.addFeatures(features_ProfilD_MenErBellec_11);
var lyr_ProfilD_MenErBellec_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProfilD_MenErBellec_11, 
                style: style_ProfilD_MenErBellec_11,
                popuplayertitle: 'Profil D_MenErBellec',
                interactive: true,
                title: '<img src="styles/legend/ProfilD_MenErBellec_11.png" /> Profil D_MenErBellec'
            });
var format_ProfilC_MenErBellec_12 = new ol.format.GeoJSON();
var features_ProfilC_MenErBellec_12 = format_ProfilC_MenErBellec_12.readFeatures(json_ProfilC_MenErBellec_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProfilC_MenErBellec_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProfilC_MenErBellec_12.addFeatures(features_ProfilC_MenErBellec_12);
var lyr_ProfilC_MenErBellec_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProfilC_MenErBellec_12, 
                style: style_ProfilC_MenErBellec_12,
                popuplayertitle: 'Profil C_MenErBellec',
                interactive: true,
                title: '<img src="styles/legend/ProfilC_MenErBellec_12.png" /> Profil C_MenErBellec'
            });
var format_ProfilB_MenErBellec_13 = new ol.format.GeoJSON();
var features_ProfilB_MenErBellec_13 = format_ProfilB_MenErBellec_13.readFeatures(json_ProfilB_MenErBellec_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProfilB_MenErBellec_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProfilB_MenErBellec_13.addFeatures(features_ProfilB_MenErBellec_13);
var lyr_ProfilB_MenErBellec_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProfilB_MenErBellec_13, 
                style: style_ProfilB_MenErBellec_13,
                popuplayertitle: 'Profil B_MenErBellec',
                interactive: true,
                title: '<img src="styles/legend/ProfilB_MenErBellec_13.png" /> Profil B_MenErBellec'
            });
var format_ProfilA_MenErBellec_14 = new ol.format.GeoJSON();
var features_ProfilA_MenErBellec_14 = format_ProfilA_MenErBellec_14.readFeatures(json_ProfilA_MenErBellec_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProfilA_MenErBellec_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProfilA_MenErBellec_14.addFeatures(features_ProfilA_MenErBellec_14);
var lyr_ProfilA_MenErBellec_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProfilA_MenErBellec_14, 
                style: style_ProfilA_MenErBellec_14,
                popuplayertitle: 'Profil A _MenErBellec',
                interactive: true,
                title: '<img src="styles/legend/ProfilA_MenErBellec_14.png" /> Profil A _MenErBellec'
            });
var format_Profil_1_MenErBellec_15 = new ol.format.GeoJSON();
var features_Profil_1_MenErBellec_15 = format_Profil_1_MenErBellec_15.readFeatures(json_Profil_1_MenErBellec_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil_1_MenErBellec_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil_1_MenErBellec_15.addFeatures(features_Profil_1_MenErBellec_15);
var lyr_Profil_1_MenErBellec_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil_1_MenErBellec_15, 
                style: style_Profil_1_MenErBellec_15,
                popuplayertitle: 'Profil_ 1_MenErBellec',
                interactive: true,
                title: '<img src="styles/legend/Profil_1_MenErBellec_15.png" /> Profil_ 1_MenErBellec'
            });
var format_Profil_4_Carnac_EST_16 = new ol.format.GeoJSON();
var features_Profil_4_Carnac_EST_16 = format_Profil_4_Carnac_EST_16.readFeatures(json_Profil_4_Carnac_EST_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil_4_Carnac_EST_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil_4_Carnac_EST_16.addFeatures(features_Profil_4_Carnac_EST_16);
var lyr_Profil_4_Carnac_EST_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil_4_Carnac_EST_16, 
                style: style_Profil_4_Carnac_EST_16,
                popuplayertitle: 'Profil_4_Carnac_EST',
                interactive: true,
                title: '<img src="styles/legend/Profil_4_Carnac_EST_16.png" /> Profil_4_Carnac_EST'
            });
var format_Profil_3_CarnacEST_17 = new ol.format.GeoJSON();
var features_Profil_3_CarnacEST_17 = format_Profil_3_CarnacEST_17.readFeatures(json_Profil_3_CarnacEST_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil_3_CarnacEST_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil_3_CarnacEST_17.addFeatures(features_Profil_3_CarnacEST_17);
var lyr_Profil_3_CarnacEST_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil_3_CarnacEST_17, 
                style: style_Profil_3_CarnacEST_17,
                popuplayertitle: 'Profil_3_Carnac EST',
                interactive: true,
                title: '<img src="styles/legend/Profil_3_CarnacEST_17.png" /> Profil_3_Carnac EST'
            });
var format_Profil_2_CarnacEST_18 = new ol.format.GeoJSON();
var features_Profil_2_CarnacEST_18 = format_Profil_2_CarnacEST_18.readFeatures(json_Profil_2_CarnacEST_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil_2_CarnacEST_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil_2_CarnacEST_18.addFeatures(features_Profil_2_CarnacEST_18);
var lyr_Profil_2_CarnacEST_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil_2_CarnacEST_18, 
                style: style_Profil_2_CarnacEST_18,
                popuplayertitle: 'Profil_2_Carnac EST',
                interactive: true,
                title: '<img src="styles/legend/Profil_2_CarnacEST_18.png" /> Profil_2_Carnac EST'
            });
var format_Profil_1_Carnac_EST_19 = new ol.format.GeoJSON();
var features_Profil_1_Carnac_EST_19 = format_Profil_1_Carnac_EST_19.readFeatures(json_Profil_1_Carnac_EST_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil_1_Carnac_EST_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil_1_Carnac_EST_19.addFeatures(features_Profil_1_Carnac_EST_19);
var lyr_Profil_1_Carnac_EST_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil_1_Carnac_EST_19, 
                style: style_Profil_1_Carnac_EST_19,
                popuplayertitle: 'Profil_1_Carnac_EST',
                interactive: true,
                title: '<img src="styles/legend/Profil_1_Carnac_EST_19.png" /> Profil_1_Carnac_EST'
            });
var format_Profil5_CD_20 = new ol.format.GeoJSON();
var features_Profil5_CD_20 = format_Profil5_CD_20.readFeatures(json_Profil5_CD_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil5_CD_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil5_CD_20.addFeatures(features_Profil5_CD_20);
var lyr_Profil5_CD_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil5_CD_20, 
                style: style_Profil5_CD_20,
                popuplayertitle: 'Profil 5_CD',
                interactive: true,
                title: '<img src="styles/legend/Profil5_CD_20.png" /> Profil 5_CD'
            });
var format_Profil4_CD_21 = new ol.format.GeoJSON();
var features_Profil4_CD_21 = format_Profil4_CD_21.readFeatures(json_Profil4_CD_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil4_CD_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil4_CD_21.addFeatures(features_Profil4_CD_21);
var lyr_Profil4_CD_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil4_CD_21, 
                style: style_Profil4_CD_21,
                popuplayertitle: 'Profil 4_CD',
                interactive: true,
                title: '<img src="styles/legend/Profil4_CD_21.png" /> Profil 4_CD'
            });
var format_Profil3_CD_22 = new ol.format.GeoJSON();
var features_Profil3_CD_22 = format_Profil3_CD_22.readFeatures(json_Profil3_CD_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil3_CD_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil3_CD_22.addFeatures(features_Profil3_CD_22);
var lyr_Profil3_CD_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil3_CD_22, 
                style: style_Profil3_CD_22,
                popuplayertitle: 'Profil 3_CD',
                interactive: true,
                title: '<img src="styles/legend/Profil3_CD_22.png" /> Profil 3_CD'
            });
var format_Profil2_CD_23 = new ol.format.GeoJSON();
var features_Profil2_CD_23 = format_Profil2_CD_23.readFeatures(json_Profil2_CD_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil2_CD_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil2_CD_23.addFeatures(features_Profil2_CD_23);
var lyr_Profil2_CD_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil2_CD_23, 
                style: style_Profil2_CD_23,
                popuplayertitle: 'Profil 2_CD',
                interactive: true,
                title: '<img src="styles/legend/Profil2_CD_23.png" /> Profil 2_CD'
            });
var format_Profil1_CD_24 = new ol.format.GeoJSON();
var features_Profil1_CD_24 = format_Profil1_CD_24.readFeatures(json_Profil1_CD_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil1_CD_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil1_CD_24.addFeatures(features_Profil1_CD_24);
var lyr_Profil1_CD_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil1_CD_24, 
                style: style_Profil1_CD_24,
                popuplayertitle: 'Profil 1_CD',
                interactive: true,
                title: '<img src="styles/legend/Profil1_CD_24.png" /> Profil 1_CD'
            });
var format_Profil2_Camping_25 = new ol.format.GeoJSON();
var features_Profil2_Camping_25 = format_Profil2_Camping_25.readFeatures(json_Profil2_Camping_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil2_Camping_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil2_Camping_25.addFeatures(features_Profil2_Camping_25);
var lyr_Profil2_Camping_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil2_Camping_25, 
                style: style_Profil2_Camping_25,
                popuplayertitle: 'Profil 2_Camping',
                interactive: true,
                title: '<img src="styles/legend/Profil2_Camping_25.png" /> Profil 2_Camping'
            });
var format_Profil_1_Camping_26 = new ol.format.GeoJSON();
var features_Profil_1_Camping_26 = format_Profil_1_Camping_26.readFeatures(json_Profil_1_Camping_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil_1_Camping_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil_1_Camping_26.addFeatures(features_Profil_1_Camping_26);
var lyr_Profil_1_Camping_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil_1_Camping_26, 
                style: style_Profil_1_Camping_26,
                popuplayertitle: 'Profil_1_Camping',
                interactive: true,
                title: '<img src="styles/legend/Profil_1_Camping_26.png" /> Profil_1_Camping'
            });
var format_Profil6_27 = new ol.format.GeoJSON();
var features_Profil6_27 = format_Profil6_27.readFeatures(json_Profil6_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil6_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil6_27.addFeatures(features_Profil6_27);
var lyr_Profil6_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil6_27, 
                style: style_Profil6_27,
                popuplayertitle: 'Profil 6',
                interactive: true,
                title: '<img src="styles/legend/Profil6_27.png" /> Profil 6'
            });
var format_Profil_5_28 = new ol.format.GeoJSON();
var features_Profil_5_28 = format_Profil_5_28.readFeatures(json_Profil_5_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil_5_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil_5_28.addFeatures(features_Profil_5_28);
var lyr_Profil_5_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil_5_28, 
                style: style_Profil_5_28,
                popuplayertitle: 'Profil_5',
                interactive: true,
                title: '<img src="styles/legend/Profil_5_28.png" /> Profil_5'
            });
var format_Profil4_29 = new ol.format.GeoJSON();
var features_Profil4_29 = format_Profil4_29.readFeatures(json_Profil4_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil4_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil4_29.addFeatures(features_Profil4_29);
var lyr_Profil4_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil4_29, 
                style: style_Profil4_29,
                popuplayertitle: 'Profil 4 ',
                interactive: true,
                title: '<img src="styles/legend/Profil4_29.png" /> Profil 4 '
            });
var format_Profil3_30 = new ol.format.GeoJSON();
var features_Profil3_30 = format_Profil3_30.readFeatures(json_Profil3_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil3_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil3_30.addFeatures(features_Profil3_30);
var lyr_Profil3_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil3_30, 
                style: style_Profil3_30,
                popuplayertitle: 'Profil 3',
                interactive: true,
                title: '<img src="styles/legend/Profil3_30.png" /> Profil 3'
            });
var format_Profil_2_31 = new ol.format.GeoJSON();
var features_Profil_2_31 = format_Profil_2_31.readFeatures(json_Profil_2_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil_2_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil_2_31.addFeatures(features_Profil_2_31);
var lyr_Profil_2_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil_2_31, 
                style: style_Profil_2_31,
                popuplayertitle: 'Profil_2',
                interactive: true,
                title: '<img src="styles/legend/Profil_2_31.png" /> Profil_2'
            });
var format_Profil1_32 = new ol.format.GeoJSON();
var features_Profil1_32 = format_Profil1_32.readFeatures(json_Profil1_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profil1_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profil1_32.addFeatures(features_Profil1_32);
var lyr_Profil1_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profil1_32, 
                style: style_Profil1_32,
                popuplayertitle: 'Profil 1',
                interactive: true,
                title: '<img src="styles/legend/Profil1_32.png" /> Profil 1'
            });
var group_DIGUEDELACOLONIEDENTREDEUXMER = new ol.layer.Group({
                                layers: [lyr_Profil6_27,lyr_Profil_5_28,lyr_Profil4_29,lyr_Profil3_30,lyr_Profil_2_31,lyr_Profil1_32,],
                                fold: 'open',
                                title: 'DIGUE DE LA COLONIE D\'ENTRE DEUX MER'});
var group_DIGUEDUCAMPINGMUNICIPALE = new ol.layer.Group({
                                layers: [lyr_Profil2_Camping_25,lyr_Profil_1_Camping_26,],
                                fold: 'open',
                                title: 'DIGUE DU CAMPING MUNICIPALE'});
var group_PLOUHARNELCENTREDESDUNES = new ol.layer.Group({
                                layers: [lyr_Profil5_CD_20,lyr_Profil4_CD_21,lyr_Profil3_CD_22,lyr_Profil2_CD_23,lyr_Profil1_CD_24,],
                                fold: 'open',
                                title: 'PLOUHARNEL CENTRE DES DUNES '});
var group_GRANDEPLAGECARNACEST = new ol.layer.Group({
                                layers: [lyr_Profil_4_Carnac_EST_16,lyr_Profil_3_CarnacEST_17,lyr_Profil_2_CarnacEST_18,lyr_Profil_1_Carnac_EST_19,],
                                fold: 'open',
                                title: 'GRANDE PLAGE CARNAC EST'});
var group_MENERBELLECSTPHILIBERT = new ol.layer.Group({
                                layers: [lyr_ProfilE_MenErBellec_10,lyr_ProfilD_MenErBellec_11,lyr_ProfilC_MenErBellec_12,lyr_ProfilB_MenErBellec_13,lyr_ProfilA_MenErBellec_14,lyr_Profil_1_MenErBellec_15,],
                                fold: 'open',
                                title: 'MEN ER BELLEC ST PHILIBERT'});
var group_ST_PIERRE_LOCMARIAQUER = new ol.layer.Group({
                                layers: [lyr_Profil9_Locmariaquer_1,lyr_Profil7_Locmariaquer_2,lyr_Profil8_Locmariaquer_3,lyr_Profil6_Locmariaquer_4,lyr_Profil5_Locmariaquer_5,lyr_Profil4_Locmariaquer_6,lyr_Profil3_Locmariaquer_7,lyr_Profil2_Locmariaquer_8,lyr_Profil1_Locmariaquer_9,],
                                fold: 'open',
                                title: 'ST_PIERRE_LOCMARIAQUER'});

lyr_SatelitegoogleMap_0.setVisible(true);lyr_Profil9_Locmariaquer_1.setVisible(true);lyr_Profil7_Locmariaquer_2.setVisible(true);lyr_Profil8_Locmariaquer_3.setVisible(true);lyr_Profil6_Locmariaquer_4.setVisible(true);lyr_Profil5_Locmariaquer_5.setVisible(true);lyr_Profil4_Locmariaquer_6.setVisible(true);lyr_Profil3_Locmariaquer_7.setVisible(true);lyr_Profil2_Locmariaquer_8.setVisible(true);lyr_Profil1_Locmariaquer_9.setVisible(true);lyr_ProfilE_MenErBellec_10.setVisible(true);lyr_ProfilD_MenErBellec_11.setVisible(true);lyr_ProfilC_MenErBellec_12.setVisible(true);lyr_ProfilB_MenErBellec_13.setVisible(true);lyr_ProfilA_MenErBellec_14.setVisible(true);lyr_Profil_1_MenErBellec_15.setVisible(true);lyr_Profil_4_Carnac_EST_16.setVisible(true);lyr_Profil_3_CarnacEST_17.setVisible(true);lyr_Profil_2_CarnacEST_18.setVisible(true);lyr_Profil_1_Carnac_EST_19.setVisible(true);lyr_Profil5_CD_20.setVisible(true);lyr_Profil4_CD_21.setVisible(true);lyr_Profil3_CD_22.setVisible(true);lyr_Profil2_CD_23.setVisible(true);lyr_Profil1_CD_24.setVisible(true);lyr_Profil2_Camping_25.setVisible(true);lyr_Profil_1_Camping_26.setVisible(true);lyr_Profil6_27.setVisible(true);lyr_Profil_5_28.setVisible(true);lyr_Profil4_29.setVisible(true);lyr_Profil3_30.setVisible(true);lyr_Profil_2_31.setVisible(true);lyr_Profil1_32.setVisible(true);
var layersList = [lyr_SatelitegoogleMap_0,group_ST_PIERRE_LOCMARIAQUER,group_MENERBELLECSTPHILIBERT,group_GRANDEPLAGECARNACEST,group_PLOUHARNELCENTREDESDUNES,group_DIGUEDUCAMPINGMUNICIPALE,group_DIGUEDELACOLONIEDENTREDEUXMER];
lyr_Profil9_Locmariaquer_1.set('fieldAliases', {'id': 'id', });
lyr_Profil7_Locmariaquer_2.set('fieldAliases', {'id': 'id', });
lyr_Profil8_Locmariaquer_3.set('fieldAliases', {'id': 'id', });
lyr_Profil6_Locmariaquer_4.set('fieldAliases', {'id': 'id', });
lyr_Profil5_Locmariaquer_5.set('fieldAliases', {'id': 'id', });
lyr_Profil4_Locmariaquer_6.set('fieldAliases', {'id': 'id', });
lyr_Profil3_Locmariaquer_7.set('fieldAliases', {'id': 'id', });
lyr_Profil2_Locmariaquer_8.set('fieldAliases', {'id': 'id', });
lyr_Profil1_Locmariaquer_9.set('fieldAliases', {'id': 'id', });
lyr_ProfilE_MenErBellec_10.set('fieldAliases', {'id': 'id', });
lyr_ProfilD_MenErBellec_11.set('fieldAliases', {'id': 'id', });
lyr_ProfilC_MenErBellec_12.set('fieldAliases', {'id': 'id', });
lyr_ProfilB_MenErBellec_13.set('fieldAliases', {'id': 'id', });
lyr_ProfilA_MenErBellec_14.set('fieldAliases', {'id': 'id', });
lyr_Profil_1_MenErBellec_15.set('fieldAliases', {'id': 'id', });
lyr_Profil_4_Carnac_EST_16.set('fieldAliases', {'id': 'id', });
lyr_Profil_3_CarnacEST_17.set('fieldAliases', {'id': 'id', });
lyr_Profil_2_CarnacEST_18.set('fieldAliases', {'id': 'id', });
lyr_Profil_1_Carnac_EST_19.set('fieldAliases', {'id': 'id', });
lyr_Profil5_CD_20.set('fieldAliases', {'id': 'id', });
lyr_Profil4_CD_21.set('fieldAliases', {'id': 'id', });
lyr_Profil3_CD_22.set('fieldAliases', {'id': 'id', });
lyr_Profil2_CD_23.set('fieldAliases', {'id': 'id', });
lyr_Profil1_CD_24.set('fieldAliases', {'id': 'id', });
lyr_Profil2_Camping_25.set('fieldAliases', {'id': 'id', });
lyr_Profil_1_Camping_26.set('fieldAliases', {'id': 'id', });
lyr_Profil6_27.set('fieldAliases', {'id': 'id', });
lyr_Profil_5_28.set('fieldAliases', {'id': 'id', });
lyr_Profil4_29.set('fieldAliases', {'id': 'id', });
lyr_Profil3_30.set('fieldAliases', {'id': 'id', });
lyr_Profil_2_31.set('fieldAliases', {'id': 'id', });
lyr_Profil1_32.set('fieldAliases', {'id': 'id', });
lyr_Profil9_Locmariaquer_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil7_Locmariaquer_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil8_Locmariaquer_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil6_Locmariaquer_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil5_Locmariaquer_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil4_Locmariaquer_6.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil3_Locmariaquer_7.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil2_Locmariaquer_8.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil1_Locmariaquer_9.set('fieldImages', {'id': 'TextEdit', });
lyr_ProfilE_MenErBellec_10.set('fieldImages', {'id': 'TextEdit', });
lyr_ProfilD_MenErBellec_11.set('fieldImages', {'id': 'TextEdit', });
lyr_ProfilC_MenErBellec_12.set('fieldImages', {'id': 'TextEdit', });
lyr_ProfilB_MenErBellec_13.set('fieldImages', {'id': 'TextEdit', });
lyr_ProfilA_MenErBellec_14.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil_1_MenErBellec_15.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil_4_Carnac_EST_16.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil_3_CarnacEST_17.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil_2_CarnacEST_18.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil_1_Carnac_EST_19.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil5_CD_20.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil4_CD_21.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil3_CD_22.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil2_CD_23.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil1_CD_24.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil2_Camping_25.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil_1_Camping_26.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil6_27.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil_5_28.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil4_29.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil3_30.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil_2_31.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil1_32.set('fieldImages', {'id': 'TextEdit', });
lyr_Profil9_Locmariaquer_1.set('fieldLabels', {'id': 'no label', });
lyr_Profil7_Locmariaquer_2.set('fieldLabels', {'id': 'no label', });
lyr_Profil8_Locmariaquer_3.set('fieldLabels', {'id': 'no label', });
lyr_Profil6_Locmariaquer_4.set('fieldLabels', {'id': 'no label', });
lyr_Profil5_Locmariaquer_5.set('fieldLabels', {'id': 'no label', });
lyr_Profil4_Locmariaquer_6.set('fieldLabels', {'id': 'no label', });
lyr_Profil3_Locmariaquer_7.set('fieldLabels', {'id': 'no label', });
lyr_Profil2_Locmariaquer_8.set('fieldLabels', {'id': 'no label', });
lyr_Profil1_Locmariaquer_9.set('fieldLabels', {'id': 'no label', });
lyr_ProfilE_MenErBellec_10.set('fieldLabels', {'id': 'no label', });
lyr_ProfilD_MenErBellec_11.set('fieldLabels', {'id': 'no label', });
lyr_ProfilC_MenErBellec_12.set('fieldLabels', {'id': 'no label', });
lyr_ProfilB_MenErBellec_13.set('fieldLabels', {'id': 'no label', });
lyr_ProfilA_MenErBellec_14.set('fieldLabels', {'id': 'no label', });
lyr_Profil_1_MenErBellec_15.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_Profil_4_Carnac_EST_16.set('fieldLabels', {'id': 'no label', });
lyr_Profil_3_CarnacEST_17.set('fieldLabels', {'id': 'no label', });
lyr_Profil_2_CarnacEST_18.set('fieldLabels', {'id': 'no label', });
lyr_Profil_1_Carnac_EST_19.set('fieldLabels', {'id': 'no label', });
lyr_Profil5_CD_20.set('fieldLabels', {'id': 'no label', });
lyr_Profil4_CD_21.set('fieldLabels', {'id': 'no label', });
lyr_Profil3_CD_22.set('fieldLabels', {'id': 'no label', });
lyr_Profil2_CD_23.set('fieldLabels', {'id': 'no label', });
lyr_Profil1_CD_24.set('fieldLabels', {'id': 'no label', });
lyr_Profil2_Camping_25.set('fieldLabels', {'id': 'no label', });
lyr_Profil_1_Camping_26.set('fieldLabels', {'id': 'no label', });
lyr_Profil6_27.set('fieldLabels', {'id': 'no label', });
lyr_Profil_5_28.set('fieldLabels', {'id': 'no label', });
lyr_Profil4_29.set('fieldLabels', {'id': 'no label', });
lyr_Profil3_30.set('fieldLabels', {'id': 'no label', });
lyr_Profil_2_31.set('fieldLabels', {'id': 'no label', });
lyr_Profil1_32.set('fieldLabels', {'id': 'no label', });
lyr_Profil1_32.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});