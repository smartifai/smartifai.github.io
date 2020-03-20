function include(filename, onload) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';
    script.onload = script.onreadystatechange = function() {
        if (script.readyState) {
            if (script.readyState === 'complete' || script.readyState === 'loaded') {
                script.onreadystatechange = null;                                                  
                onload();
            }
        } 
        else {
            onload();          
        }
    };
    head.appendChild(script);
}


function changeCollapsible() {
    var elem = document.getElementsByClassName('img-collapsible-cont');
    if(elem[0].id === 'closed'){
        console.log('ITS NOW OPENED');
        elem[0].id = 'open';
        jQuery(function ($) {
            $(".img-collapsible-cont").slideToggle(500);
        });
    } else if (elem[0].id === 'open'){
        elem[0].id = 'closed';
        console.log('ITS NOW CLOSED');
        jQuery(function ($) {
            $(".img-collapsible-cont").slideToggle(500);
        });   
    }
}

function getSimilarImagesResponseFromAPI(img_url){

    var url = "http://api.simplifailabs.com/detect_similar_images_api/";

    include("http://api.simplifailabs.com/static/node_modules/png-js/zlib.js", function(){

        include("http://api.simplifailabs.com/static/js/blockhash.js", function(){

            var blockhash = blockhashjs.blockhash;


            function callback(err, results) {

                var img_hash = results

                console.log("img_hash = " + img_hash)
                console.log("img_url = " + img_url)

                 jQuery.ajax({
                     type: "POST",
                     url: url,
                     crossDomain: true,
                     data : {"img_hash": img_hash, "img_url": img_url},
                     dataType: 'json',
                     success: function(responseData, textStatus, jqXHR) {
                         var output = responseData.output;
                         console.log(output)
                     },
                     error: function (responseData, textStatus, errorThrown) {
                         console.log("POST failed.");
                         console.log(errorThrown)
                     }
                  });

                return results

            }

            var img_hash = blockhash(img_url, 16, 2, callback)

        });

    });
}

function updateProductMetrics_ClickEvent(prod_url){

    var url = "http://api.simplifailabs.com/click_product/";
    console.log("Updating click metrics of product with URL: " + prod_url)

      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {

                var json = JSON.parse(xhr.responseText);
                console.log(json.output)

            }
        };
        var data = JSON.stringify({"prod_url": String(prod_url)});
        console.log(data)
        xhr.send(data);
        
      }
      catch(err) {
        console.log("Fail")
      } 
 
}

function updateProductMetrics_ViewEvent(prod_url){

    var url = "http://api.simplifailabs.com/view_product/";
    console.log("Updating view metrics of product with URL: " + String(prod_url))

    try {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {

              var json = JSON.parse(xhr.responseText);
              console.log(json.output)

          }
      };
      var data = JSON.stringify({"prod_url": String(prod_url)});
      console.log(data)
      xhr.send(data);
      
    }
    catch(err) {
      console.log("Fail")
    } 
}



window.onload = function() {

    // $.noConflict();
    var choosenCategory = [];
    var my_response = [
                {
                    "category_boundary":"",
                    "category_image": "https://40e1490782f383866663-4993d07f8a91cc1cfa39bf926012c29e.ssl.cf3.rackcdn.com/CN0676WHITE-BLACK-CN0676-SMAW18190718_01-1200.jpg",
                    "category_name": "Sneaker",
                    "similar_items": [
                        //Similar item
                        {
                            "item_image":"https://40e1490782f383866663-4993d07f8a91cc1cfa39bf926012c29e.ssl.cf3.rackcdn.com/CN0676WHITE-BLACK-CN0676-SMAW18190718_01-1200.jpg",
                            "item_title":"Reebok Lace-Up Sneakers",
                            "store_name":"Centrepoint",
                            "item_price":"AED 162",
                            "store_url":"https://www.centrepointstores.com/ae/en/Men/Sports-Shoes/SHOEMART-Reebok-Lace-Up-Sneakers/p/CN0676WHITE-BLACK"
                        },
                        //Similar item
                        {
                            "item_image":"https://40e1490782f383866663-4993d07f8a91cc1cfa39bf926012c29e.ssl.cf3.rackcdn.com/SGCI0004SWhite-SGCI0004S-SMMWIN18080618_01-1200.jpg",
                            "item_title":"Lee Cooper Textured Lace-Up Sneakers",
                            "store_name":"Centrepoint",
                            "item_price":"AED 111",
                            "store_url":"https://www.centrepointstores.com/ae/en/Men/Casual-Shoes/SHOEMART-Lee-Cooper-Textured-Lace-Up-Sneakers/p/SGCI0004SWhite"
                        },
                        //Similar item
                        {
                            "item_image":"https://40e1490782f383866663-4993d07f8a91cc1cfa39bf926012c29e.ssl.cf3.rackcdn.com/PSSL0040SWHITE-PSSL0040S-SMMWIN18140918_01-1200.jpg",
                            "item_title":"Lee Cooper Lace-Up Sneakers",
                            "store_name":"Centrepoint",
                            "item_price":"AED 179",
                            "store_url":"https://www.centrepointstores.com/ae/en/Men/Casual-Shoes/SHOEMART-Lee-Cooper-Lace-Up-Sneakers/p/PSSL0040SWHITE"
                        },
                        {
                            "item_image":"https://rscdn.elabelz.com/media/catalog/product/cache/1/thumbnail/700x1000/9df78eab33525d08d6e5fb8d27136e95/l/c/lct01-s0001-32spw0136-001-white-36-front_1.jpg",
                            "item_title":"White Lancelle BL 2 Sneakers",
                            "store_name":"ELABELZ",
                            "item_price":"AED 255",
                            "store_url":"https://www.elabelz.com/en_ae/buy-lacoste-white-lancelle-bl-2-sneakers-for-women-low-top-sneakers-317594.html"
                        },
                        {
                            "item_image":"https://rscdn.elabelz.com/media/catalog/product/cache/1/thumbnail/700x1000/9df78eab33525d08d6e5fb8d27136e95/k/w/kws0101-s0001-95353-133-white-36-front.jpg",
                            "item_title":"Clean Court CMF Sneakers",
                            "store_name":"ELABELZ",
                            "item_price":"AED 231",
                            "store_url":"https://www.elabelz.com/en_ae/buy-k-swiss-clean-court-cmf-sneakers-for-women-low-top-sneakers-104942.html"
                        },
                        {
                            "item_image":"https://rscdn.elabelz.com/media/catalog/product/cache/1/thumbnail/700x1000/9df78eab33525d08d6e5fb8d27136e95/k/w/kws0101-s0001-93324-174-white-silver-36-front.jpg",
                            "item_title":"Belmont SO Sneakers",
                            "store_name":"ELABELZ",
                            "item_price":"AED 247",
                            "store_url":"https://www.elabelz.com/en_ae/buy-k-swiss-belmont-so-sneakers-for-women-low-top-sneakers-104921.html"
                        },
                        {
                            "item_image":"https://rscdn.elabelz.com/media/catalog/product/cache/1/thumbnail/700x1000/9df78eab33525d08d6e5fb8d27136e95/k/w/kws0101-s0001-93324-115-white-black-36-front.jpg",
                            "item_title":"Belmont SO Sneakers",
                            "store_name":"ELABELZ",
                            "item_price":"AED 226",
                            "store_url":"https://www.elabelz.com/en_ae/buy-k-swiss-belmont-so-sneakers-for-women-low-top-sneakers-155775.html"
                        },
                        {
                            "item_image":"https://rscdn.elabelz.com/media/catalog/product/cache/1/thumbnail/700x1000/9df78eab33525d08d6e5fb8d27136e95/k/w/kws0101-s0001-95353-115-white-35-front_14.jpg",
                            "item_title":"White Clean Court CMF Sneakers",
                            "store_name":"ELABELZ",
                            "item_price":"AED 230",
                            "store_url":"https://www.elabelz.com/en_ae/buy-k-swiss-white-clean-court-cmf-sneakers-for-women-low-top-sneakers-397063.html"
                        }

                    ]
                },
                {
                    "category_boundary":"",
                    "category_image": "https://770744760e4512666787-e0075ca37ef156ad6af6d25f26069b92.ssl.cf3.rackcdn.com/4820012-4820012-MS6102-SPSP18070518_01-1200.jpg",
                    "category_name": "Sunglasses",
                    "similar_items": [
                        //Similar item
                        {
                            "item_image":"https://770744760e4512666787-e0075ca37ef156ad6af6d25f26069b92.ssl.cf3.rackcdn.com/4820012-4820012-MS6102-SPSP18070518_01-1200.jpg",
                            "item_title":"Polarized Aviator Sunglasses with Full Rim",
                            "store_name":"Centrepoint",
                            "item_price":"AED 30",
                            "store_url":"https://www.centrepointstores.com/ae/en/Men/Regular/Accessories/Sunglasses/SPLASH-Polarized-Aviator-Sunglasses-with-Full-Rim/p/4820012"
                        },
                        //Similar item
                        {
                            "item_image":"https://770744760e4512666787-e0075ca37ef156ad6af6d25f26069b92.ssl.cf3.rackcdn.com/4533440-4533440-FM1708028C1W-SPWIN18250918_01-1200.jpg",
                            "item_title":"Full Rim Sunglasses",
                            "store_name":"Centrepoint",
                            "item_price":"AED 40",
                            "store_url":"https://www.centrepointstores.com/ae/en/Women/Regular/Accessories/Sunglasses/SPLASH-Full-Rim-Sunglasses/p/4533440"
                        },
                        //Similar item
                        {
                            "item_image":"https://770744760e4512666787-e0075ca37ef156ad6af6d25f26069b92.ssl.cf3.rackcdn.com/4533433-4533433-FM1708038Y7-SPWIN18250918_01-1200.jpg",
                            "item_title":"Gradient Full Rim Aviator Sunglasses",
                            "store_name":"Centrepoint",
                            "item_price":"AED 25",
                            "store_url":"https://www.centrepointstores.com/ae/en/Women/Regular/Accessories/Sunglasses/SPLASH-Gradient-Full-Rim-Aviator-Sunglasses/p/4533433"
                        },


                    ]
                },

            ]


    var my_html_imgs = ""


    /* (function($) {
        $(function() {
        
            $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
            });
        
        });
        })(jQuery); */

    //Result card code starts here
    var imgLi = '<div class="simplifai---flex-item">'+
                    '<div class="simplifai-card">'+
                        '<img src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="">'+
                        '<div class="simplifai-card-content">'+
                            '<h3>Ralph RA5250 WomenвЂ™s CatвЂ™s Eye Sunglasses, Black/Grey</h3>'+
                            '<p>John Lewis and Partners</p>'+
                            '<p>ВЈ100.00</p>'+
                        '</div>'+
                        '<div class="simplifai-card-action">'+
                            '<button>'+
                                '<img src="http://api.simplifailabs.com/static/images/shopping-cart.svg">'+
                                'Buy'+
                            '</button>' +
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div> '
    //Result card code ends here

    function cv_embed_main_box($){
        $("head").append("<link>");
        var css = $("head").children(":last");
        css.attr({
              rel:  "stylesheet",
              type: "text/css",
              href: "http://api.simplifailabs.com/static/css/insertLayout.css"
        });

        //Image container wrapper code starts here
        $('.imgs_container').find("img").map(function(){

            var has_ignore =  $(this).hasClass('nodetection') || $(this).parent().closest('div').hasClass('nodetection')
            var img_url = $(this).attr('src')

            if( has_ignore === false){    

                getSimilarImagesResponseFromAPI(img_url)

                $(this).wrap("<div class='embed_container'></div>");
                $('.embed_container').append('<div class="simplifai-image-lable">'+
                                                '<div class="click-icon-wrapper">'+
                                                    '<img src="http://api.simplifailabs.com/static/images/click-icon.svg">'+
                                                '</div>'+
                                                '<p data-translate="label_title"></p>'+
                                            '</div>'+
                                            //Boundary icon code starts here
                                            '<div class="simplifai-boundary-wrapper" style="top:10%;left:60%;">'+
                                                '<div class="simplifai-boundary-animation">'+
                    
                                                '</div>'+
                                                '<div class="simplifai-boundary" >'+
                    
                                                '</div>'+
                                            '</div>'+
                                            //Boundary icon code ends here
                                            //Boundary icon code starts here
                                            '<div class="simplifai-boundary-wrapper" style="top:80%;left:30%;">'+
                                                '<div class="simplifai-boundary-animation">'+
                    
                                                '</div>'+
                                                '<div class="simplifai-boundary" >'+
                    
                                                '</div>'+
                                            '</div>'+
                                            '<div class="simplifai-translate" data-translate="lang_switch" onclick="change_lang()">Arabic</div>'
                                            //Boundary icon code ends here
                                            );
                //Modal window with results starts here
                $("body").append(
                            '<div class="simplifai-modal-wrapper">'+
                                '<div class="simplifai--modal-bg"></div>'+
                                '<div class="simplifai--modal-container">'+
                                    '<div class="simplifai---modal-header">'+
                                        '<p data-translate="shop_the_look">Shop the look</p>'+
                                        '<div class="simplifai-close">'+
                                            '<p data-translate="close_button"></p>'+
                                            '<img src="http://api.simplifailabs.com/static/images/close-cross.png">'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="simplifai---modal-categories">'+
                                    '<div class="demo-container">' +
                                        '<div class="carousel">' +


                                            '<div class="carousel__screen">' +
                                                '<div class="carousel__track">' +
                                                    //Place category items here
                                                    
                                                '</div>' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>'+
                                '</div>'+
                                '<div class="simplifai---modal-results">'+
                                    '<h4 data-translate="similar">Similar items</h4>'+
                                    '<div class="flex-box-wrapper">'+
                                        '<div class="simplifai----flexbox">'+
                                            //Place result cards here
                                            
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'
                    )
            }
        }).get(); 
        //Modal window with results ends here

        //Categories and results module START
        for(var items in my_response){
            console.log(items)
            $('.carousel__track').append('<div class="carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3" data-category-name="'+my_response[items].category_name+'">'+
                '<div class="simplifai--category-item" style="background-image:url('+my_response[items].category_image+')"></div>'+
            '</div>')
        $.each(my_response[items].similar_items, function(b, f) {
            // console.log("KEY is:{"+ b + "} VALUE is:{" + f + "}")
            $(".simplifai----flexbox").append('<div class="simplifai---flex-item simplifai-shadow" data-category-name="'+my_response[items].category_name+'">'+
                                                '<div class="simplifai-card">'+
                                                    '<img src="'+ f.item_image +'" alt="">'+
                                                    '<div class="simplifai-card-content">'+
                                                        '<h3>'+ f.item_title +'</h3>'+
                                                        '<p>'+ f.store_name +'</p>'+
                                                        '<p>'+ f.item_price +'</p>'+
                                                    '</div>'+
                                                    '<div class="simplifai-card-action">'+
                                                        '<a target="_blank" rel="noopener noreferrer" href="'+ f.store_url +'">'+
                                                        '<button>'+
                                                            '<img src="http://api.simplifailabs.com/static/images/shopping-cart.svg">'+
                                                            'Buy'+
                                                        '</button>' +
                                                        '</a>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div> ')
                });
            }

            $('.carousel__item').on('click', function () {
                var nam = $(this).data('category-name');
                $('.simplifai----flexbox > .simplifai---flex-item').hide();
                $('.simplifai----flexbox > .simplifai---flex-item[data-category-name="'+nam+'"]').show();
            
            });

            $(".carousel__track > .carousel__item .simplifai--category-item").click(function() { 
                $('.carousel__track > .carousel__item .simplifai--category-item').attr('id','');
                $(this).attr('id','simplifai_shadow');
              }); 


        //Categories and results module END

        //Modal window reveal and hide animation code starts here
        $(".simplifai-image-lable").on("click",function(){
            $(".simplifai-modal-wrapper ").fadeIn(750);
            $(".simplifai--modal-container ").addClass("simplifai-show");

        });
        $(".simplifai-boundary").on("click",function(){
            $(".simplifai-modal-wrapper ").fadeIn(750);
            $(".simplifai--modal-container ").addClass("simplifai-show");

        });

        $(".simplifai--modal-bg").on("click",function(){
            $(".simplifai-modal-wrapper ").fadeOut(750);
            $(".simplifai--modal-container ").removeClass("simplifai-show");

        });

        $(".simplifai-close").on("click",function(){
            $(".simplifai-modal-wrapper ").fadeOut(750);
            $(".simplifai--modal-container ").removeClass("simplifai-show");

        });
        //Modal window reveal and hide animation code ends here

        var dictionary = {
            'label_title': {
                'ar': 'تسوق الان',
                'en': 'Click to shop',
            },
            'similar': {
                'ar': 'منتجات مماثلة',
                'en': 'Similar items',
            },
            'close_button':{
                'ar': 'أغلق',
                'en': 'Close'
            },
            'lang_switch':{
                'ar': 'English',
                'en': 'ألعربية'
            },
            'shop_the_look':{
                'ar': 'تسوق المظهر',
                'en': 'Shop the look'
            }
        };

        //Language switch module START
        var langs = ['en', 'ar'];
        var current_lang_index = 0;
        var current_lang = langs[current_lang_index];
        
        window.change_lang = function() {
            current_lang_index = ++current_lang_index % 2;
            current_lang = langs[current_lang_index];
            translate();
            $(".simplifai-image-lable").toggleClass("simplifai-image-lable-ar");
            $(".simplifai-translate").toggleClass("simplifai-translate-ar");
            $(".simplifai---modal-header").toggleClass("simplifai---modal-header-ar");
            $(".simplifai---modal-results").toggleClass("simplifai---modal-results-ar");
        }
        
        function translate() {
            $("[data-translate]").each(function(){
                var key = $(this).data('translate');
                $(this).html(dictionary[key][current_lang] || "N/A");
            });

        }

        translate();
        //Language switch module END


        // Recording Metrics:
        $(".simplifai-card-action").on('click', function(event){

            event.stopPropagation();
            event.stopImmediatePropagation();

            console.log("Clicked a Product ! ")


            var prod_url = $(this).find("a")[0]

            updateProductMetrics_ClickEvent(prod_url)
        });



        $(".simplifai-image-lable").on('click', function(event){

            event.stopPropagation();
            event.stopImmediatePropagation();

            console.log("Viewed Products ! ")

            var first = ""

            $(".simplifai-card-action").each(function() {

                var prod_url = $(this).find("a")[0]

                if (first == String(prod_url)){

                    return false;
                }

                if (first==""){
                    first = String(prod_url)
                }

                updateProductMetrics_ViewEvent(prod_url)

            })
        });

        $(".simplifai-boundary").on('click', function(event){


            event.stopPropagation();
            event.stopImmediatePropagation();

            console.log("Viewed Products ! ")

            var first = ""

            $(".simplifai-card-action").each(function() {

                var prod_url = $(this).find("a")[0]

                if (first == String(prod_url)){

                    return false;
                }

                if (first==""){
                    first = String(prod_url)
                }

                updateProductMetrics_ViewEvent(prod_url)

            })
        });

    }

    if (window.jQuery) {  
       jQuery(document).ready(function($){
            cv_embed_main_box($);
       });
    } else {
        include('http://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js', function() {
            $(document).ready(function() {
                cv_embed_main_box($);
            });
        });
    }
}
