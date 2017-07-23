(function(andRedEyelikeOptiblank, undefined) {
   var $ = window.jQuery;
   var SL = {};
   var Landing = function(hostname,pathname,city,lostor,lastURL,newURL) {
      console.info('%c Landing \u221a', 'background:blue;color:white;');
      this.hostname = hostname || undefined;
      this.pathname = pathname || undefined;
      this.city = city || undefined;
      this.lostor = lostor || undefined;
      this.lastURL = lastURL || undefined;
      this.newURL = newURL || undefined;

   };//Landing const

   SL.andRedEyelikeOptiblank = {
      init: function() { 
         console.info('%c init \u221a', 'background:blue;color:white;');
         this.pgCssDesktop();
         this.proto();
                     
      },//init

      pgCssDesktop: function() {
         console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
         var mainCss = '';
         var head = document.getElementsByTagName('head')[0];
         function addcss(css) {
            var s = document.createElement('style');
            s.setAttribute('type', 'text/css');
            s.appendChild(document.createTextNode(css));
            head.appendChild(s);
         }
         addcss(mainCss);
      },//pgCssDesktop

      proto: function() {
         debugger;
         var whatLoaded = Landing.prototype.whatLoaded = function(hostname,pathname,lastURL) {
            //Landing
            this.lastURL = lastURL;
            this.hostname = hostname;
            this.pathname = pathname;
            if(this.hostname == 'www.kaplaninternational.com') {

               switch(this.pathname) {
                  case '/united-states':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     window.addEventListener('hashchange',findCity,false);
                     break;
                  case '/united-states':
                     this.lostor = localStorage.setItem(this.pathname,true);
                     window.addEventListener('hashchange',findCity,false);
                     break;
                  case '/united-states':
                     this.lostor = localStorage.setItem(this.pathname,true);
                     window.addEventListener('hashchange',findCity,false);
                     break;
                  case '/united-states':
                     this.lostor = localStorage.setItem(this.pathname,true);
                     window.addEventListener('hashchange',findCity,false);
                     break;
                  case '/united-states':
                     this.lostor = localStorage.setItem(this.pathname,true);
                     window.addEventListener('hashchange',findCity,false);
                     break;   
                  case '/united-states':
                     this.lostor = localStorage.setItem(this.pathname,true);
                     window.addEventListener('hashchange',findCity,false);
                     break;
                  case '/united-states':
                     this.lostor = localStorage.setItem(this.pathname,true);
                     window.addEventListener('hashchange',findCity,false);
                     break;
                  case '/united-states':
                     this.lostor = localStorage.setItem(this.pathname,true);
                     window.addEventListener('hashchange',findCity,false);
                     break;
                  case '/united-states':
                     this.lostor = localStorage.setItem(this.pathname,true);
                     window.addEventListener('hashchange',findCity,false);
                     break;
                  case '/united-states':
                     this.lostor = localStorage.setItem(this.pathname,true);
                     window.addEventListener('hashchange',findCity,false);
                     break;   

               }//switch-pathname
   
               var res = ' hosting site is: ' + ' ' + this.hostname;
                   res += '\n it has this pathname: ' + this.pathname;
                   
               console.log(res);

            }//if kaplaninternational

            function findCity() {
               this.newURL = document.URL;
               if(lastURL !== newURL) {
                  console.log('are not the same');
               }

            }
              
            
              
         };//whatLoaded

         var res = new Landing();
         res.whatLoaded(window.location.hostname,window.location.pathname,document.URL);



      }//proto


       
      
      

};
//SL.andRedEyelikeOptiblank
(function _RE() {
   //if (window.jQuery !== undefined) {
      //try         {
                     SL.andRedEyelikeOptiblank.init();
                  //} 
      //catch (err) {
                     //console.log('TRY ERROR: '+ err);
                  //}
   //}//if 
   //else { 
            //setTimeout(_RE, 45); 
   //}//else
           
})();//_RE

}.call(window.andRedEyelikeOptiblank || {}));