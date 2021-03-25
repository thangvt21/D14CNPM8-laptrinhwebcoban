
           document.getElementById("icon-search").addEventListener('click',click,true);
            function click(event) {   
                var x = document.getElementById("search-bar");  
                x.style.width = "15%";
                event.preventDefault();
            }
            function handleronblur() {   
                var x = document.getElementById("search-bar");  
                x.style.width = "0%";
            }

            var clockrun = document.getElementById('greeting');
            function time() {
                var d = new Date();
                var s = d.getSeconds();
                var m = d.getMinutes();
                var h = d.getHours();
                if(h >= 0 && h < 12){
                    clockrun.textContent = 
                ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
                } else if (h >= 12 && h <= 23){
                    clockrun.textContent = 
                ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
                }  
            }
            setInterval(time, 1000);
    // ----------------------header && clock js-------------------------------------------------------
            document.getElementById("register").addEventListener('click',clickdropdown,true);
            function clickdropdown(event){
                document.getElementById("header-drop").style.height = "250px";
                event.preventDefault();
            }
            function closedrop(){
                document.getElementById("header-drop").style.height = "0px";
            }
    // ----------------------------------dropdown header---------------------------------------
           
            function showdrop(){
                var drop = document.getElementById("dropdown");
                if(drop.style.visibility === "hidden")
                {
                    drop.style.visibility = "visible";
                } else {
                    drop.style.visibility = "hidden";
                }
            }
  
    // -------------------------------------dropdown------------------------------------------------
            var clicks = 0;
            function heart(){
                clicks += 1;
                document.getElementById("click-heart").innerHTML = clicks;

            }
            var click2 = 0;
            function gift(){
                click2 += 1;
                document.getElementById("click-donate").innerHTML = click2;

            }