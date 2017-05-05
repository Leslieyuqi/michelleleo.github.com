/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-05 10:00:27
 * @version $Id$
 */

var map = new BMap.Map("myMap");
var point = new BMap.Point(120.141375,30.257806);
map.centerAndZoom(point,15);

var marker = new BMap.Marker(point);   
map.addOverlay(marker);
marker.enableDragging();    
marker.addEventListener("dragend", function(e){    
 alert("当前位置：" + e.point.lng + ", " + e.point.lat);    
})

map.enableScrollWheelZoom();
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl()); 

var local = new BMap.LocalSearch(map, {
  renderOptions: {
    map: map,
    panel: "result",
    autoViewport: true
  }
});
local.searchNearby("宾馆", "西湖");

var transit = new BMap.TransitRoute(map, {
  renderOptions: {
    map: map,
    panel: "result"
  }
});
transit.search("杭州师范大学仓前新校区", "宾馆");

var opts = {
  width: 300, 
  height: 200,    
  title: "<span style='color:#FF0000'>"+"地址：",
}

var school_info=[
  [120.016976,30.295394,"博文苑2号楼超市",'../img/supermarket.jpg'],
  [120.015413,30.295005,"博文苑4号楼",'../img/bwy4.jpg'],
  [120.017012,30.295566,"博文苑5号楼",'../img/bwy5.jpg'],
  [120.017924,30.29573, "恕园7号楼食堂",'../img/shitang.jpg'],
  [120.019406,30.295297,"恕园7号楼彩色玻璃房",'../img/blf.jpg'],
  [120.019127,30.296423,"恕园13号楼一鸣",'../img/yiming.jpg']
];

for(var i = 0;i < school_info.length;i++){
	var point= new BMap.Marker(new BMap.Point(school_info[i][0],school_info[i][1]));
	var address = school_info[i][2];
	map.addOverlay(point);
	var div=document.createElement("div");
	div.style.width='200px';
	div.style.height='140px';
	var img=document.createElement('img');
	img.setAttribute('src',school_info[i][3]);
	img.style.width='200px';
	img.style.height='160px';
	div.append(address);
	div.append(img);
	OnClick(div,point);
}

function OnClick(div,point){
	point.addEventListener("click",function(e){
	var p = e.target;
	var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
	var infoWindow = new BMap.InfoWindow(div,opts);
	map.openInfoWindow(infoWindow,point);
	});
}