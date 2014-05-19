var svgOverlayStr = ['<h3>Download/Installation</h3><p>The first connection point the user\'s browser has with your app.</p>',
                     '<h3>Launch phase</h3><p>The initial launch phase, where either the app is loaded in the web browser, or launched on the device.</p>',
                     '<h3>Detecting offline state</h3><p>It is often important to know whether your device is offline or not. <a href="#Detecting_offline_state">Find out how to detect offline state</a>.</p>',
                     '<h3>Handling updates</h3><p>Does your app have file or data updates to download?</p>',
                     '<h3>Server syncing</h3><p>If you app has been working offline and data changes have been made, you\'ll need to periodically sync that data with the server. <a href="#Syncing_with_server_side">More on server-side syncing</a>.</p>',
                     '<h3>App functionality</h3><p>The overall functionality of your app is not particular to ofline issues, and can be read up on throughout the rest of the <a href="https://developer.mozilla.org/en-US/Apps">App Center</a>.</p>',
                     '<h3>Storing data and assets offline</h3><p>This is key to offline apps, and more can be found out in the <a href="#Storing_assets_offline">Storing assets offline</a> and <a href="#Storing_data_offline">Storing data offline</a> sections.</p>'];

var svgOverlay = document.querySelector('.svg-overlay');

svgOverlay.style.display = "none";

var activeAreas = document.querySelectorAll('.active-area');

var CurX;
var CurY;

for(i = 0 ; i <= activeAreas.length-1 ; i++) {
  activeAreas[i].onclick = function() {
    
    var areaId = this.id;
    showSvgOverlay(areaId);
  }
}

function showSvgOverlay(areaId) {
  svgOverlay.style.display = "block";
  svgOverlay.style.top = (CurY - 30) + "px" ;
  svgOverlay.style.left = (CurX + 20) + "px";	
  svgOverlay.innerHTML = svgOverlayStr[areaId];
}

document.onmousemove = getCursorXY;

function getCursorXY(e) {   
    CurX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    CurY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}