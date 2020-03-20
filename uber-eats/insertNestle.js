
function include(filename, onload) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';
    script.onload = script.onreadystatechange = function () {
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

var my_response

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getSimilarImagesResponseFromAPI(img_url) {

    var url = "https://api.simplifailabs.com/detect_similar_images_api/";

    include("https://api.simplifailabs.com/static/node_modules/png-js/zlib.js", function () {

        include("https://api.simplifailabs.com/static/js/blockhash.js", function () {

            var blockhash = blockhashjs.blockhash;
            var products_output = "null"

            function callback(err, results) {

                var img_hash = results
                
                var timerCounter = 0;
                setTimeout(function() {
  

                        console.log("start")
                        var rnd_num = getRndInteger(0, 9);
                        
                            
                            var dictionary = {
                                'label_title': {
                                    'ar': 'تسوق الان',
                                    'en': 'Click to shop',
                                },
                                'similar': {
                                    'ar': 'منتجات مماثلة',
                                    'en': 'Similar items',
                                },
                                'close_button': {
                                    'ar': 'أغلق',
                                    'en': 'Close'
                                },
                                'lang_switch': {
                                    'ar': 'English',
                                    'en': 'ألعربية'
                                },
                                'shop_the_look': {
                                    'ar': 'تسوق المظهر',
                                    'en': 'Shop the look'
                                }
                            };
                    
                            //Language switch module START
                            var langs = ['en', 'ar'];
                            var current_lang_index = 0;
                            var current_lang = langs[current_lang_index];
                    
                            window.change_lang = function () {
                                current_lang_index = ++current_lang_index % 2;
                                current_lang = langs[current_lang_index];
                                translate();
                                $(".simplifai-image-lable").toggleClass("simplifai-image-lable-ar");
                                $(".simplifai-translate").toggleClass("simplifai-translate-ar");
                                $(".simplifai---modal-header").toggleClass("simplifai---modal-header-ar");
                                $(".simplifai---modal-results").toggleClass("simplifai---modal-results-ar");
                            }
                    
                            function translate() {
                                $("[data-translate]").each(function () {
                                    var key = $(this).data('translate');
                                    $(this).html(dictionary[key][current_lang] || "N/A");
                                });
                    
                            }
                    
                            translate();
    
                            $("body").append(  '<div class="simplifai-info">' +

                            '<h3>Simplif<span>ai</span> Labs<p>AI powered Ads</p></h3>'+
                        
                            '<h4>Simplifai Labs is an artificial intelligence company, we are creating a new shopping experience in the Arab worldby providing an innovative solution for eCommerce and brands by turning any images into a seamless onlineshopping experience using our cutting-edge Artificial Intelligence enabled Visual Discovery Technology.<br /><br />We understand the images and videos like human does to recognize visual content which enables us to provide you adelightful shopping experience. To know more about our solutions for publishers and advertisers, please write tous at <span>info@simplifailabs.com</span></h4>' +
                                                    
                            '<div class="simplifai-info-close-button" onclick="showInfo()">x</div>'+
                        
                          '</div>' +
                        
                          '<div class="simplifai-banner">'+

                            '<div class="expand-button" style="background-image:url(./show-arrow.svg);" onclick="closeBanner()"></div>'+

                            '<div class="banner-ads-label">Shop the look</div>' +
                        
                            '<div class="company-icon" onclick="showInfo()">ai</div>'+
                        
                            '<div class="banner-close-button" onclick="closeBanner()">x</div>'+
                        
                            '<div class="img-wrapper">' +
                        
                              '<div class="ads-banner__img-container" style="background-image: url(cofee.png); transform:rotateZ(30deg)"></div>' +
                        
                              '<div class="ads-banner__img-container" style="background-image: url(cofee.png);"></div>' +
                        
                              '<div class="ads-banner__img-container" style="background-image: url(cofee.png)"></div>' +
                        
                              '<div class="ads-banner__img-container" style="background-image: url(cofee.png)"></div>'+
                        
                            '</div>' +
                        
                            '<div class="background">'+
                        
                            '</div>'+
                        
                          '</div>')
    

                
                        
                    
                    

                  }, 2000)


                return products_output

            }

            var img_hash = blockhash(img_url, 16, 2, callback)

        });

    });
}

function updateProductMetrics_ViewEvent(prod_url) {

    var url = "http://api.simplifailabs.com/view_product/";


    try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {

                var json = JSON.parse(xhr.responseText);


            }
        };
        var data = JSON.stringify({ "prod_url": String(prod_url) });


    }
    catch (err) {

    }
}




window.onload = function () {

    // $.noConflict();
    var choosenCategory = [];

    //Result card code ends here

    function cv_embed_main_box($) {
        $("head").append("<link>");
        var css = $("head").children(":last");
        css.attr({
            rel: "stylesheet",
            type: "text/css",
            href: "http://api.simplifailabs.com/static/css/insertNestle.css"
        });

        //Image container wrapper code starts here
        $('body').find("img").map(function () {

            var has_ignore = $(this).hasClass('nodetection') || $(this).parent().closest('div').hasClass('nodetection')
            var img_url = $(this).attr('src')

            if (has_ignore === false) {


                getSimilarImagesResponseFromAPI(img_url)

                //Modal window with results starts here
                include('http://api.simplifailabs.com/static/js/banner-actions.js')
            }





        }).get();



        //Modal window reveal and hide animation code ends here


        //Language switch module END


        // Recording Metrics:
        $(".simplifai-card-action").on('click', function (event) {

            event.stopPropagation();
            event.stopImmediatePropagation();



            var prod_url = $(this).find("a")[0]

            updateProductMetrics_ClickEvent(prod_url)
        });


    }

    if (window.jQuery) {
        jQuery(document).ready(function ($) {
            cv_embed_main_box($);
        });
    } else {
        include('https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js', function () {
            $(document).ready(function () {
                cv_embed_main_box($);
            });
        });
    }


}


