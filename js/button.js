$(document).ready(function(){
	
	$('button').click(function(){
		
		var url =$('#url').val();
		var layer =$('#layer').val();
		var server =$('#server').val();
		
		if(url && layer){
			var wms= new ol.layer.Tile({
				source: new ol.source.TileWMS({
					url:url,
					params:{'LAYERS': layer},
					serverType: server,
					crossOrigin:''
				})
			});
			map.addLayer(wms);
		}
	});
	
});