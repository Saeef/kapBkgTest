(function(andRedEyelikeOptiblank, undefined) {
   var $ = window.jQuery;
   window.optimizely = window.optimizely || [];
   var SL = {};
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
      this.contact = window.location.href;

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
         setInterval(function(){
            var whatLoaded = Landing.prototype.whatLoaded = function(hostname,pathname,lastURL,city,course) {
               //Landing
               var paired,schools,isStored;
               this.lastURL = lastURL;
               this.hostname = hostname;
               this.pathname = pathname;
               if(this.pathname !== '/') {
                  subpath = this.pathname.match(/\//g);
               }

               this.city = city;
               this.course = course;
               //remove previous experiment if it exists
               if(document.getElementById('newPremenu')) {
                     var prem = document.getElementById('newPremenu');
                     prem.parentElement.removeChild(prem);
               }     
               //when previous page is country path
               if(this.hostname == 'www.kaplaninternational.com' && subpath == '/') { 

                  switch(this.pathname) {
                     case '/united-states':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/united-states']);
                        break;
                     case '/united-kingdom':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/united-kingdom']);
                        break;
                     case '/new-zealand':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/new-zealand']);
                        break;
                     case '/australia':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/australia']);
                        break;
                     case '/singapore':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/singapore']);
                        break;   
                     case '/ireland':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/ireland']);
                        break;
                     case '/canada':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/canada']);
                        break;

                     case '/ar/united-states':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/united-states']);
                        break;
                     case '/ar/united-kingdom':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/united-kingdom']);
                        break;
                     case '/ar/new-zealand':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/new-zealand']);
                        break;   
                     case '/ar/australia':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/australia']);
                        break;
                     case '/ar/singapore':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/singapore']);
                        break;
                     case '/ar/ireland':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/ireland']);
                        break;   
                     case '/ar/canada':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/canada']);
                        break;   
                     case '/tr/united-states':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/united-states']);
                        break;
                     case '/tr/united-kingdom':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/united-kingdom']);
                        break;
                     case '/tr/new-zealand':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/new-zealand']);
                        break;   
                     case '/tr/australia':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/australia']);
                        break;   
                     case '/tr/singapore':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/singapore']);
                        break;
                     case '/tr/ireland':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/ireland']);
                        break;
                     case '/tr/canada':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/canada']);
                        break;   
                     case '/mx/united-states':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/united-states']);
                        break;   
                     case '/mx/united-kingdom':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/united-kingdom']);
                        break;   
                     case '/mx/new-zealand':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/new-zealand']);
                        break;   
                     case '/mx/australia':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/australia']);
                        break;   
                     case '/mx/singapore':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/united-states']);
                        break;   
                     case '/mx/ireland':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/ireland']);
                        break;   
                     case '/mx/canada':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/canada']);
                        break;  
                      case '/ru/united-states':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/united-states']);
                        break;   
                     case '/ru/united-kingdom':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/united-kingdom']);
                        break;   
                     case '/ru/united-zealand ':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/united-states']);
                        break;   
                     case '/ru/australia':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/australia']);
                        break;   
                     case '/ru/singapore':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/singapore']);
                        break;   
                     case '/ru/ireland':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/ireland']);
                        break;   
                     case '/ru/canada':
                        this.lostor = this.pathname.slice(1,this.pathname.length);
                        this.lostor = localStorage.setItem('country-' + this.lostor,true);
                        //optimizely.push(['setDimensionValue', 'country_name', '/canada']);
                        break;    
   


               }//switch-pathname


            }//if kaplaninternational-hostname

            
         // var res = ' hosting site is: ' + ' ' + this.hostname;
         // res += '\n it has this pathname: ' + this.pathname;
         // console.log(res);

         
         //assign city
         if(subpath.length == 2) {debugger;
            //city-banana
            this.city = /[^/]*$/.exec(this.lastURL)[0].toLowerCase();
            //valid-city
            if(this.lastURL.indexOf(this.city) > -1) {
               localStorage.setItem('city-' + this.city, true);
               //if-matching-course-add-city
               allCoursesStored();
            }//valid-city

         }//if city-pg


         //assign course
         if(subpath.length == 3) {
            
            //course-banana
            this.course = /[^/]*$/.exec(this.lastURL)[0];
            //valid-course
            if(this.lastURL.indexOf(this.course) > -1) {
               console.log(this.course);
               localStorage.setItem('course-' + this.course, true);
               //if-matching-city-stored-add-course
               paired = this.pathname.toLowerCase();
               paired = paired.split('/')[2];
               allStorage(paired);
            }//valid-course

         }//if course-pg


         //handle city and course foreign
         debugger;
         if(this.pathname.indexOf('tr') > -1 || this.pathname.indexOf('ar') > -1 || this.pathname.indexOf('mx') > -1 || this.pathname.indexOf('ru') > -1 ) {

                        //assign city
                        if(subpath.length == 3) {
                           //city-banana
                           this.city = /[^/]*$/.exec(this.lastURL)[0].toLowerCase();
                           //valid-city
                           if(this.lastURL.indexOf(this.city) > -1) {
                              localStorage.setItem('city-' + this.city, true);
                              //if-matching-course-add-city
                              allCoursesStored();
                           }//valid-city

                        }//if city-pg

                        //assign course
                        if(subpath.length == 4) {
                           
                           //course-banana
                           this.course = /[^/]*$/.exec(this.lastURL)[0];
                           //valid-course
                           if(this.lastURL.indexOf(this.course) > -1) {
                              console.log(this.course);
                              localStorage.setItem('course-' + this.course, true);
                              //if-matching-city-stored-add-course
                              paired = this.pathname.toLowerCase();
                              paired = paired.split('/')[3];
                              allStorage(paired);
                           }//valid-course

                        }//if course-pg




         }//handle city-course foreign

        
         


         function allCoursesStored() {
            //visited-any-of
            isStored = [];
            schools = document.querySelectorAll('#block-views-city-schools-block-1 > div table tr');
            //starts after tr   
            for(var h=1; h< schools.length; h++) {
                isStored.push(schools[h].children[0].innerText);
            
            }//for

            var archived = {}, 
                 keys = Object.keys(localStorage),
                 i = keys.length;
            while ( i-- ) {
               if(keys[i]) {
                  isStored.map(function(it) {
                     paired = ('course-' + it).toLowerCase();
                     debugger;
                     if(keys[i].indexOf(paired)) {
                        console.log('matched city with course');
                        optimizely.push(['setDimensionValue','cita_name', this.city]);
                        //if-then-contact-form
                        if(this.contact == 'https://www.kaplaninternational/contact-us/form') {
                              console.log('enter contact form');
                              optimizely.push(['setDimensionValue','contact_form', this.contact]);
                        }//if-then-form
                        
                     }
                  });
                  
               }//if
               archived[ keys[i] ] = localStorage.getItem( keys[i] );
               
            }//while

            

        }//allStorage
 
        function allStorage(runner) {
            runner = 'city-' + runner;
            var count =0;
            runner = runner || undefined;
            var archived = {}, 
                 keys = Object.keys(localStorage),
                 i = keys.length;
            while ( i-- ) {
               if(keys[i].indexOf(runner) > -1) {
                  archived[ keys[i] ] = localStorage.getItem( keys[i] );
                  console.log('matched course with city');
                   optimizely.push(['setDimensionValue','scuola_name', this.course]);
                   //if-then-contact-form(previously visited course-city)
                   if(this.contact == 'https://www.kaplaninternational/contact-us/form') {
                        console.log('enter contact form');
                        optimizely.push(['setDimensionValue','contact_form', this.contact]);
                   }//if-then-form

                  return true;
               }//if
            }//while

        }//allStorage

        //form-submit-evt
         if(this.contact == 'https://www.kaplaninternational/contact-us/form') {
               //if submit form send api
               document.querySelector('#webform-client-form-501 > div > button').
               addEventListener('submit', function(e) {
                     console.log('fired off submit');
                     optimizely.push(['setDimensionValue','submit_cta', this.contact]);
               });//onsubmit
         
         }//if-contact-pg
        

              
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