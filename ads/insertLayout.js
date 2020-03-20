
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

                jQuery.ajax({
                    type: "POST",
                    url: url,
                    crossDomain: true,
                    async: true,
                    data: { "img_hash": img_hash, "img_url": img_url },
                    dataType: 'json',
                    success: function (responseData, textStatus, jqXHR) {
                        var output = responseData.output;
                        products_output = responseData.products;
                        my_response = products_output;
                        console.log(my_response)
                        var rnd_num = getRndInteger(0, 9);
                        if (my_response.length >= 2) {
                            $("body").append(


                                '<div class="simplifai-modal-wrapper">' +
                                '<div class="simplifai--modal-bg"></div>' +
                                '<div class="simplifai--modal-container">' +
                                '<div class="simplifai---modal-header">' +
                                '<p data-translate="shop_the_look">Shop the look</p>' +
                                '<div class="simplifai-close">' +
                                '<p data-translate="close_button"></p>' +
                                '<img src="http://api.simplifailabs.com/static/images/close-cross.png">' +
                                '</div>' +
                                '</div>' +
                                '<div class="simplifai---modal-categories">' +
                                '<div class="demo-container">' +
                                '<div class="carousel">' +


                                '<div class="carousel__screen">' +
                                '<div class="carousel__track">' +
                                //Place category items here

                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '<div class="simplifai---modal-results">' +
                                '<div class="simplifai-translate" data-translate="lang_switch" onclick="change_lang()">Arabic</div>' +
                                '<div class="flex-box-wrapper">' +
                                '<div class="simplifai----flexbox">' +
                                //Place result cards here

                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</div>'
                            )



                            $('.carousel__item').on('click', function () {
                                var nam = $(this).data('category-name');
                                $('.simplifai----flexbox > .simplifai---flex-item').hide();
                                $('.simplifai----flexbox > .simplifai---flex-item[data-category-name="' + nam + '"]').show();

                            });

                            $('.simplifai-boundary-wrapper').on('click', function () {
                                var nam = $(this).data('category-name');
                                $('.simplifai----flexbox > .simplifai---flex-item').hide();
                                $('.simplifai----flexbox > .simplifai---flex-item[data-category-name="' + nam + '"]').show();

                            });

                            $(".carousel__track > .carousel__item .simplifai--category-item").click(function () {
                                $('.carousel__track > .carousel__item .simplifai--category-item').attr('id', '');
                                $(this).attr('id', 'simplifai_shadow');
                            });

                            //Categories and results module END

                            //Modal window reveal and hide animation code starts here
                            $(".simplifai-image-lable").on("click", function () {
                                $(".simplifai-modal-wrapper ").fadeIn(750);
                                $(".simplifai--modal-container ").addClass("simplifai-show");

                            });


                            $(".simplifai--modal-bg").on("click", function () {
                                $(".simplifai-modal-wrapper ").fadeOut(750);
                                $(".simplifai--modal-container ").removeClass("simplifai-show");

                            });

                            $(".simplifai-close").on("click", function () {
                                $(".simplifai-modal-wrapper ").fadeOut(750);
                                $(".simplifai--modal-container ").removeClass("simplifai-show");

                            });
                            
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

                            $("body").append('<div class="simplifai-info">' +
                                '<h3>' +
                                'Simplif<span>ai</span> Labs' +
                                '<p>AI powered Ads</p>' +
                                '</h3>' +

                                '<h4>' +

                                'Simplifai Labs is an artificial intelligence company, we are creating a new shopping experience in the Arab world by providing an innovative solution for eCommerce and brands by turning any images into a seamless online shopping experience using our cutting-edge Artificial Intelligence enabled Visual Discovery Technology. ' +
                                '<br /><br />' +

                                'We understand the images and videos like human does to recognize visual content which enables us to provide you a delightful shopping experience. To know more about our solutions for publishers and advertisers, please write to us at <span>contact@simplifailabs.com</span> ' +

                                '</h4>' +
                                '<div class="simplifai-info-close-button">' +
                                'x' +
                                '</div>' +
                                '</div>' +
                                '<div class="simplifai-banner">' +
                                '<div class="banner-ads-label">' +
                                'Shop the look' +
                                ' </div>' +

                                '<div class="company-icon">' +
                                'ai' +
                                '</div>' +
                                '<div class="banner-close-button">' +
                                'x' +
                                '</div>' +

                                '<div class="img-wrapper">' +

                                '</div>' +
                                '<div class="background">' +

                                '</div>' +

                                '</div>')


                            if (my_response.length === 2) {
                                $('.img-wrapper').append(
                                    '<div class="ads-banner__img-container" style="background-image: url(' + my_response[0].similar_items[rnd_num].item_image.replace(/',[\s\S]*$/g, "").replace(/\['/g, "") + ')" data-category-name="' + my_response[0].category_name + '">' +
                                    '</div>' +
                                    '<div class="ads-banner__img-container" style="background-image: url(' + my_response[1].similar_items[rnd_num].item_image.replace(/',[\s\S]*$/g, "").replace(/\['/g, "") + ')" data-category-name="' + my_response[1].category_name + '">' +
                                    '</div>' +
                                    '<div class="ads-banner__img-container" style="background-image: url(' + my_response[0].similar_items[rnd_num].item_image.replace(/',[\s\S]*$/g, "").replace(/\['/g, "") + ')" data-category-name="' + my_response[0].category_name + '">' +
                                    '</div>' +
                                    '<div class="ads-banner__img-container" style="background-image: url(' + my_response[1].similar_items[rnd_num].item_image.replace(/',[\s\S]*$/g, "").replace(/\['/g, "") + ')" data-category-name="' + my_response[1].category_name + '">' +
                                    '</div>'
                                )
                            } else if (my_response.length === 3) {
                                $('.img-wrapper').append(
                                    '<div class="ads-banner__img-container" style="background-image: url(' + my_response[0].similar_items[rnd_num].item_image.replace(/',[\s\S]*$/g, "").replace(/\['/g, "") + ')" data-category-name="' + my_response[0].category_name + '">' +
                                    '</div>' +
                                    '<div class="ads-banner__img-container" style="background-image: url(' + my_response[1].similar_items[rnd_num].item_image.replace(/',[\s\S]*$/g, "").replace(/\['/g, "") + ')" data-category-name="' + my_response[1].category_name + '">' +
                                    '</div>' +
                                    '<div class="ads-banner__img-container" style="background-image: url(' + my_response[2].similar_items[rnd_num].item_image.replace(/',[\s\S]*$/g, "").replace(/\['/g, "") + ')" data-category-name="' + my_response[2].category_name + '">' +
                                    '</div>' +
                                    '<div class="ads-banner__img-container" style="background-image: url(' + my_response[1].similar_items[rnd_num].item_image.replace(/',[\s\S]*$/g, "").replace(/\['/g, "") + ')" data-category-name="' + my_response[1].category_name + '">' +
                                    '</div>'
                                )

                            } else {
                                $('.img-wrapper').append(
                                    '<div class="ads-banner__img-container" style="background-image: url(' + my_response[0].similar_items[rnd_num].item_image.replace(/',[\s\S]*$/g, "").replace(/\['/g, "") + ')" data-category-name="' + my_response[0].category_name + '">' +
                                    '</div>' +
                                    '<div class="ads-banner__img-container" style="background-image: url(' + my_response[1].similar_items[rnd_num].item_image.replace(/',[\s\S]*$/g, "").replace(/\['/g, "") + ')" data-category-name="' + my_response[1].category_name + '">' +
                                    '</div>' +
                                    '<div class="ads-banner__img-container" style="background-image: url(' + my_response[2].similar_items[rnd_num].item_image.replace(/',[\s\S]*$/g, "").replace(/\['/g, "") + ')" data-category-name="' + my_response[2].category_name + '">' +
                                    '</div>' +
                                    '<div class="ads-banner__img-container" style="background-image: url(' + my_response[3].similar_items[rnd_num].item_image.replace(/',[\s\S]*$/g, "").replace(/\['/g, "") + ')"data-category-name="' + my_response[3].category_name + '">' +
                                    '</div>')
                            }
                            for (var items in my_response) {



                                $('.carousel__track').append('<div class="carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3" data-category-name="' + my_response[items].category_name + '">' +
                                    '<div class="simplifai--category-item" style="background-image:url(' + my_response[items].similar_items[rnd_num].item_image.replace(/',[\s\S]*$/g, "").replace(/\['/g, "") + ')"></div>' +
                                    '</div>')





                                for (i = 0; i < 20; i++) {
                                    console.log(i)
                                    var rnd_retailor = getRndInteger(0, my_response[items].similar_items.length)
                                    if(my_response[items].similar_items[i] != undefined){
                                    $(".simplifai----flexbox").append('<div class="simplifai---flex-item simplifai-shadow" data-category-name="' + my_response[items].category_name + '">' +
                                        '<div class="simplifai-card">' +
                                        '<img src="' + my_response[items].similar_items[rnd_retailor].item_image.replace(/',[\s\S]*$/g, "").replace(/\['/g, "") + '" alt="">' +
                                        '<div class="simplifai-card-content">' +
                                        '<h3>' + my_response[items].similar_items[rnd_retailor].item_title + '</h3>' +
                                        '<p>' + my_response[items].similar_items[rnd_retailor].store_name + '</p>' +
                                        '<p>' + my_response[items].similar_items[rnd_retailor].item_price + '</p>' +
                                        '</div>' +
                                        '<div class="simplifai-card-action">' +
                                        '<a target="_blank" rel="noopener noreferrer" href="' + my_response[items].similar_items[rnd_retailor].store_url + '">' +
                                        '<button>' +
                                        '<img src="http://api.simplifailabs.com/static/images/shopping-cart.svg">' +
                                        'Buy' +
                                        '</button>' +
                                        '</a>' +
                                        '</div>' +
                                        '</div>' +
                                        '</div>')
                                    }else{
                                        console.log("NF")
                                    }
                                }
                            }
                            $('.carousel__item').on('click', function () {
                                var nam = $(this).data('category-name');

                                $('.simplifai----flexbox > .simplifai---flex-item').hide();
                                $('.simplifai----flexbox > .simplifai---flex-item[data-category-name="' + nam + '"]').show();

                            });

                            $('.ads-banner__img-container').on('click', function () {
                                var nam = $(this).data('category-name');
                                $('.simplifai----flexbox > .simplifai---flex-item').hide();
                                $('.simplifai----flexbox > .simplifai---flex-item[data-category-name="' + nam + '"]').show();

                            });

                            $(".carousel__track > .carousel__item .simplifai--category-item").click(function () {

                                $('.carousel__track > .carousel__item .simplifai--category-item').attr('id', '');
                                $(this).attr('id', 'simplifai_shadow');
                            });
                            $(".ads-banner__img-container").click(function () {
                                var nam = $(this).data('category-name');
                                $('.carousel__track > .carousel__item[data-category-name="' + nam + '"] .simplifai--category-item').attr('id', '');
                                $('.carousel__track > .carousel__item[data-category-name="' + nam + '"] .simplifai--category-item').attr('id', 'simplifai_shadow');
                            });
                            $(".ads-banner__img-container").on("click", function () {
                                $(".simplifai-modal-wrapper ").fadeIn(750);
                                $(".simplifai--modal-container ").addClass("simplifai-show");

                            });

                            $(".banner-close-button").on("click", function () {
                                $(".simplifai-banner ").fadeOut(750);
                            });

                            $(".simplifai-info-close-button").on("click", function () {
                                $(".simplifai-info ").removeClass("info-show");
                            });

                            $(".company-icon").on("click", function () {
                                $(".simplifai-info ").addClass("info-show");
                            });
                        } else {

                        }
                    },
                    error: function (responseData, textStatus, errorThrown) {
                        console.log("POST failed.");
                        console.log(errorThrown)
                    }
                });


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


    //Result card code starts here
    var imgLi = '<div class="simplifai---flex-item">' +
        '<div class="simplifai-card">' +
        '<img src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="">' +
        '<div class="simplifai-card-content">' +
        '<h3>Ralph RA5250 WomenвЂ™s CatвЂ™s Eye Sunglasses, Black/Grey</h3>' +
        '<p>John Lewis and Partners</p>' +
        '<p>ВЈ100.00</p>' +
        '</div>' +
        '<div class="simplifai-card-action">' +
        '<button>' +
        '<img src="http://api.simplifailabs.com/static/images/shopping-cart.svg">' +
        'Buy' +
        '</button>' +
        '</a>' +
        '</div>' +
        '</div>' +
        '</div> '
    //Result card code ends here

    function cv_embed_main_box($) {
        $("head").append("<link>");
        var css = $("head").children(":last");
        css.attr({
            rel: "stylesheet",
            type: "text/css",
            href: "http://api.simplifailabs.com/static/css/insertLayout.css"
        });

        //Image container wrapper code starts here
        $('body').find("img").map(function () {

            var has_ignore = $(this).hasClass('nodetection') || $(this).parent().closest('div').hasClass('nodetection')
            var img_url = $(this).attr('src')

            if (has_ignore === false) {


                getSimilarImagesResponseFromAPI(img_url)

                //Modal window with results starts here

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


