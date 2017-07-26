(function(andRedEyelikeOptiblank, undefined) {
   var $ = window.jQuery;
   window.optimizely = window.optimizely || [];
   var SL = {};
   var arr = [];
   var Landing = function(hostname,pathname,city,lostor,lastURL,newURL,course,subpath,contact) {
      console.info('%c Landing \u221a', 'background:blue;color:white;');
      this.hostname = hostname || undefined;
      this.pathname = pathname || undefined;
      this.city = city || undefined;
      this.lostor = lostor || undefined;
      this.lastURL = lastURL || undefined;
      this.newURL = newURL || undefined;
      this.course = course || undefined;
      this.subpath = subpath || undefined;
      this.contact = contact || undefined;

   };//Landing const

   SL.andRedEyelikeOptiblank = {
      init: function() { 
         console.info('%c init \u221a', 'background:blue;color:white;');
            this.proto();   

      },//init
      proto: function() {
         setInterval(function(){
            var whatLoaded = Landing.prototype.whatLoaded = function(hostname,pathname,lastURL,city,course) {
               //Landing
               var l1,l2;
               this.lastURL = lastURL;
               this.hostname = hostname;
               this.pathname = pathname;
               if(this.pathname !== '/') {
                  subpath = this.pathname.match(/\//g);
               }
               this.city = city;debugger;
               this.course = course;
               this.contact = '/contact-us/form';
               //remove previous experiment if it exists
               if(document.getElementById('newPremenu')) {
                     var prem = document.getElementById('newPremenu');
                     prem.parentElement.removeChild(prem);
               }     
               

           
            
         var res = ' hosting site is: ' + ' ' + this.hostname;
         res += '\n it has this pathname: ' + this.pathname;
         //this if you came directly to school page
         // this.lostor = this.pathname.slice(1,this.pathname.length);
         // this.lostor = localStorage.setItem(this.pathname,true);
         console.log(res);
         debugger;
         //assign city
         if(subpath.length == 2) {
            //extract everything after /
            this.city = /[^/]*$/.exec(this.lastURL)[0];
            //valid-city
            if(this.lastURL.indexOf(this.city) > -1) {
               arr.push(this.city);
               localStorage.setItem('city-' + this.city, true);
            }//city-archived

         }//if city-slash-length

        
         //assign course
         if(subpath.length == 3) {
               debugger;
               //extract everything after /
               this.course = /[^/]*$/.exec(this.lastURL)[0];
               //valid-course
               if(this.lastURL.indexOf(this.course) > -1) {
                  console.log(this.course);
                  //add-course-localstorage-n-arr
                  localStorage.setItem('course-' + this.course, true);
                  arr.push(this.course);
                  //check-course-matches-a-city
                  checkCity(this.course);
                  //checkContact();
                 
                     
                     //only if paired happened
                     // if(allStorage('contact') !== undefined) {
                     //    optimizely.push(['setDimensionValue','contact_name', this.contact]);
                   
                     // }//city-valid-paired

               }//valid-course

         }//if-course-path

         //contact-cta-eventlistener
         document.querySelector('#section-overview a.btn.btn-primary').
         addEventListener('click',function(e) {
            console.log(e);
            optimizely.push(['setDimensionValue','contact_name', this.contact]);
         });//cta-eventlistener

         function checkCity(course) {
            for(var i=0; i < arr.length; i++) {
               if(arr[i] == course) {
                  course = city;
                  optimizely.push(['setDimensionValue','school-page', course]);
                  optimizely.push(['setDimensionValue','school-page', city]);
                 
               }//if there
            }//forloop

         }//checkCity fn 

 
        function allStorage(runner) {
            runner = runner || undefined;
            var archived = {}, 
                 keys = Object.keys(localStorage),
                 i = keys.length;
            while ( i-- ) {
               if(keys[i].indexOf(runner) > -1) {
                  archived[ keys[i] ] = localStorage.getItem( keys[i] );
                  console.log(archived);
                  //add if course exists
                  console.log('not undefined!: ' + runner);
               }//if
            }//while
         }//allStorage

              
     };//whatLoaded

         
               
          

         var res = new Landing();
         res.whatLoaded(window.location.hostname,window.location.pathname,document.URL);

      },1000);


      }//proto
};

(function _RE() {
      SL.andRedEyelikeOptiblank.init();         
})();//_RE

}.call(window.andRedEyelikeOptiblank || {}));