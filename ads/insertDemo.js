
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

  
                        var my_response = [
                            {
                              "category_image": "http://image.dhgate.com/600x600/f2/albu/g6/M01/CF/25/rBVaR1tUEKWAZ9DVAANk3QkXxbc322.jpg",
                              "similar_items": [
                                
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1368017.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/96/58/0b5642eb-db5c-436d-b145-9e8dda59791c.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E6/FD/9c5a0536-00c4-40ec-a6cb-c7a01b881e67.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/58/63/5db11873-69c7-4283-9e31-afe543814f83.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D6/40/d0e0a082-ea69-4829-a88b-ea1a672ee3b2.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A8/DC/10ef10a7-707a-4528-8e41-9792c3620465.JPG']",
                                  "item_price": "USD 90.76",
                                  "store_name": "Newchic",
                                  "item_title": "Metal Texture Zipper Leather Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1384102.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0E/C4/7c6c404b-de48-450c-938c-a530fab038c1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DF/DB/b693428c-cc94-4948-994a-af0b35697dec.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6D/05/2994530a-a4ad-4d78-98d8-dd359d410bc6.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/53/3D/62885cb9-470f-4be0-b680-c221ce31d1a0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/55/38/419c8b87-8b44-4d25-9d42-8a72a0fc926c.jpg']",
                                  "item_price": "USD 47.78",
                                  "store_name": "Newchic",
                                  "item_title": "Zipper Design Rivet Pointed Toe Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1384553.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7B/D8/0ce9c673-3d08-4904-bbfb-b8faeed39530.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E3/72/e3ffa04f-ecaa-42cd-8f23-778e1cf19839.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/96/F2/3fdf8aca-84a7-43f1-bf9b-1853390d588c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3D/01/9aa46067-899c-4940-b595-6865cfc0675a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F3/D5/1982c603-c897-4074-a336-d55cd1da147a.jpg']",
                                  "item_price": "USD 43.93",
                                  "store_name": "Newchic",
                                  "item_title": "Metal Beads Tassel Block Heel Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1384550.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/93/28/591855c0-c4ad-475f-8c9a-2d952ef73735.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/51/7E/024f02f1-0f2d-44be-9107-565d1e1e66ba.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/39/6A/59a6eb45-f919-4601-b1d3-7097b4515807.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EF/11/4694afbf-e29e-484b-adb1-ec0d5eccb9a4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DE/DA/bec05deb-b363-4e26-8e9c-a36ede98dccc.jpg']",
                                  "item_price": "USD 43.93",
                                  "store_name": "Newchic",
                                  "item_title": "Retro Rivet Belt Chunky Heel Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1387648.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B2/CE/de0d5af7-883d-4b81-816a-db14a1382ad7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/58/29/77f9d286-8521-4cef-b39b-637051557a13.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5F/BD/ae655826-5f31-41ca-9157-5ca1e6be0024.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F2/F1/d828ea8c-0bc9-4d68-9821-8bfa3c53771c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F4/93/a4250a5b-ff0c-4cde-afb7-8c76ca92bdf4.jpg']",
                                  "item_price": "USD 51.24",
                                  "store_name": "Newchic",
                                  "item_title": "Antislip Thick Heel Buckle Strap Casual Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1389022.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DE/DD/9789124a-82f5-4573-8c2d-69a16b1109c5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F1/3A/9c4a815d-5a05-4478-8a58-a979a0ffc4bc.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/03/CE/3989abb9-daab-4fe1-aa58-e21a3979d336.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8D/EF/ec388de4-5fb9-4cf9-8f9c-ac58972fda94.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A7/2B/fbf6d8f9-a672-4c32-a9ad-8a48f73ab766.jpg']",
                                  "item_price": "USD 45.65",
                                  "store_name": "Newchic",
                                  "item_title": "Tattered Buckle Chunky Heel Zipper Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1389511.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/20/95/dda03cb2-7434-4176-890c-44cb1f10f5bc.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C7/65/9d669af0-24cd-460f-ac29-9e7fc5b23867.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AB/1F/e3701753-ecb8-4350-b4bc-6143898ce3de.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D3/11/f6e3d576-840a-4bb4-b11a-26cacdb44910.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/48/82/831ef9e7-7f5d-4fda-ab92-925d34950ac1.jpg']",
                                  "item_price": "USD 28.67",
                                  "store_name": "Newchic",
                                  "item_title": "Western Stylish Warm Lining Sock Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1389509.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DB/9F/ccd9bbd2-bbc5-4de5-a3bb-e8f4ce0284a2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AB/8F/6aaa1bb9-76d9-461a-8168-9ccde5282dc7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/42/4D/e658449c-9a83-491d-a43c-6f194ce3fe7b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/11/26/32429d97-409c-41ef-ab25-41886f73c0e0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CC/46/6e204b07-3dde-4d47-ab38-4bd93fc04a34.jpg']",
                                  "item_price": "USD 29.98",
                                  "store_name": "Newchic",
                                  "item_title": "Block Heel Zipper Sock Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1391404.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2B/E7/0a4a18b7-def4-4498-a376-a2dc1cdad5d3.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B0/C7/b8ee6225-6ea0-4115-a2f1-1bdb851c5934.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A6/B3/17891512-347a-45c2-93e6-f2baedba9f8a.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EF/67/2d8dfba1-9bb6-4045-aa4e-ff06ba1692a4.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CB/08/a5893f87-7bdf-4816-b91f-1dfff73361a3.jpg']",
                                  "item_price": "USD 43.99",
                                  "store_name": "Newchic",
                                  "item_title": "Rhinestone Rivet Belt Buckle Chunky Heel Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1391406.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C2/4D/d8bd366e-ca83-4ab3-b403-63c8f2c34d31.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/16/2C/2700ddc5-45e0-4b9c-bf06-91591461ac69.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BF/5A/8e370b50-fbbd-424d-831a-7b668102ef5b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1C/6B/c4a85e89-7922-46d4-ad01-577c8e35f581.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CB/D3/be10d24b-b9b3-4aaf-aa4a-aa8452dc1355.jpg']",
                                  "item_price": "USD 23.39",
                                  "store_name": "Newchic",
                                  "item_title": "Stylish Block Heel Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1391471.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9E/B1/2651ad91-1db8-4eb3-8d39-1efd4daabe5a.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/72/8A/f237f6ab-cda2-45ee-8354-7d7b15a5b790.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BD/78/ac8b5b54-90bf-4a1a-bc83-1ab8678ea2ec.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CC/7A/61f1de0f-f273-41fc-8c1c-1cd6493796f8.jpg']",
                                  "item_price": "USD 47.05",
                                  "store_name": "Newchic",
                                  "item_title": "Almond Chunky Heel Tassel Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1391402.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/66/A1/7409c672-46a9-475c-9b2e-abfd9eb2d7a8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E4/A3/a10c832b-2bde-4549-9c7f-cce0c482f69f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/48/DC/16cb1a19-6761-4a55-bdd7-45800f8ada8b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/64/72/a759c89b-5195-4092-9165-9e5d41b91b0d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/05/C8/1b6a55e7-eeb6-4ef9-a981-55f656c457e5.jpg']",
                                  "item_price": "USD 29.98",
                                  "store_name": "Newchic",
                                  "item_title": "Stylish Almond Chunky Heel Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1394856.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E6/4E/f8eda7ab-d4ae-4711-a4b9-8c667b098db3.jpeg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CD/AB/1f8a7a8d-5c0e-4478-b704-0b3d7f314ca9.jpeg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/58/D5/f350f550-a518-4f19-bb82-32320294c693.jpeg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C7/A3/e70eb699-bd74-4f46-9d98-f0db13b99149.jpeg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0C/73/6ae77bb9-7684-4c64-8e1c-4630cd29be77.jpg']",
                                  "item_price": "USD 32.2",
                                  "store_name": "Newchic",
                                  "item_title": "Fur Lined Comfortable Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1399462.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/14/30/e3dc7960-bf3a-4e70-b2f0-c927cea27357.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FA/B4/79c846bd-bab3-4197-8933-4891f43bf73b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3A/14/6a8ef2ab-4c88-4822-abe1-a9a24f3e4d80.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A2/CC/48985496-c852-43fa-9cde-526a13a00ae4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D0/1E/2ba3d6d5-f287-479b-b240-581bb3e03c05.jpg']",
                                  "item_price": "USD 55.1",
                                  "store_name": "Newchic",
                                  "item_title": "Color Warm Chunky Heel Snow Winter Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1103958.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BF/CB/e89db867-518c-ea16-a3b3-a790bd11f735.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/74/9A/4e0cfb08-b8d7-4353-99d1-a05e66f2c50f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CD/4D/5f60dc34-c7c7-4eca-9bd0-12bb8e3aa0ef.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/89/A0/0745808a-f517-4e9a-89cc-34fe158fdf4b.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4F/8E/7d298273-7039-4381-80f0-79a79720310f.JPG']",
                                  "item_price": "USD 25.0",
                                  "store_name": "Newchic",
                                  "item_title": "Fashion Rubber Floral Waterproof Ankle Zipper Rainboots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1112079.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/89/F4/c11e2642-ec7d-4166-844d-c8775f9d4dee.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/38/C1/80c8336d-bd7a-48b0-8aa7-f8800ae2a8bb.png', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E7/3F/3bfab3d2-c36c-4e78-a9e6-82de70730a34.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7D/1F/5233aafb-6301-482a-a0fa-57c582bb484c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BA/C7/a28d752e-2ce0-4056-8ec8-4d682bb51015.jpg']",
                                  "item_price": "USD 46.71",
                                  "store_name": "Newchic",
                                  "item_title": "Washable Suede Sewing Retro Classic Lace Up Casual Shoes For Men"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1408719.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/90/87/1756a3d3-c3dc-4811-9263-5a1e5f3ddfd2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/29/7C/e36d2ce8-76c2-4278-839f-745630ceaca9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/00/D4/44449cb5-256f-4078-86bf-849c55ed7928.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A6/F1/4695ea01-9424-49f7-8e98-839106fe0512.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E9/BC/5b1dd235-e7d9-4bd3-b445-431f0ca0f76c.jpg']",
                                  "item_price": "USD 52.45",
                                  "store_name": "Newchic",
                                  "item_title": "Men Hand Stitching Soft Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FCut-Out-Eyelet-Boots-p-614045-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/15/15395692873122964484.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/1539569285724832382_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/15395692861254133295_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/1539569286906707655_thumbnail_405x552.jpg']",
                                  "item_price": "USD 32.0",
                                  "store_name": "Shein",
                                  "item_title": "Cut Out Eyelet Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FLace-Up-Glitter-Hiker-Boots-p-614042-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/15/15395692923670233833.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/15395692901622066110_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/15395692913483067661_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/15395692912926294408_thumbnail_405x552.jpg']",
                                  "item_price": "USD 35.0",
                                  "store_name": "Shein",
                                  "item_title": "Lace-Up Glitter Hiker Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FLace-Up-Glitter-Hiker-Boots-p-614033-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/15/15395692952435951808.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/15395692934176955365_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/15395692932766261120_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/15395692941389336779_thumbnail_405x552.jpg']",
                                  "item_price": "USD 35.0",
                                  "store_name": "Shein",
                                  "item_title": "Lace-Up Glitter Hiker Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1408700.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/65/06/6be0e5bd-d844-429c-bf34-dd1764d6e71c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/10/6F/37073655-e5c6-4847-a21d-c62ee04e9bb1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/63/36/910e3975-d8d1-45a3-823c-0073ee227cb6.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8B/79/9bceb82f-1933-4a7e-8181-191f7267dadc.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/12/1D/2b8016ec-c640-4ee1-b11f-cd319143cac9.jpg']",
                                  "item_price": "USD 47.94",
                                  "store_name": "Newchic",
                                  "item_title": "Men Fabric Leather Non-slip Casual Snow Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1096670.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/banggood/images/02/0C/cdb2e94d-e3b2-44c1-a009-74722bf5fc46.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/banggood/images/02/0C/be18b56e-74a1-4a70-b786-d37ca07bde98.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7D/7C/7dfceeb9-8bdb-4e30-8d58-457ea89d90e0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/62/DE/ec523497-b9a0-7fea-0c81-b16385967c43.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5D/54/9f233d13-2efe-4901-81a1-920a28a8a541.jpg']",
                                  "item_price": "USD 45.94",
                                  "store_name": "Newchic",
                                  "item_title": "Big Size Mesh Crocodile Pattern Pointed Toe Leather Short Boots For Men"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1180472.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/96/4E/29b50e12-b164-45e2-8834-1ea2cbeca54a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/30/1A/54f0a075-df4c-49db-a979-2956bccdef28.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/38/6E/69262982-374c-47f8-b71f-65c2b6beb88b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/81/47/3e0275db-0a2f-4c7f-8af5-1d6ac8672b5f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A4/E5/16a4e389-d6bd-4940-80b2-ddc6461b1a70.jpg']",
                                  "item_price": "USD 37.06",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Vintage Flat Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fm-general-womens-boots-3599%2Fp-1192330.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A7/89/ee5761af-d20f-4178-9ca1-d76774a16986.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/16/AC/679d219f-f580-4052-ac6a-907b2be68dbe.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0B/DE/7daf97ce-a504-4d33-8e71-a634b90511aa.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F4/E3/49b17287-3097-4e64-a208-c68322d38512.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5B/47/41b9de9a-06ec-479a-b0f1-871e8229a421.jpg']",
                                  "item_price": "USD 33.08",
                                  "store_name": "Newchic",
                                  "item_title": "Waterproof Platforms Warm Snow Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fm-general-boots-6416%2Fp-1229813.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/24/AE/abdd6967-5371-4f10-b1b6-19ce71a23aa0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CA/93/df24dba9-50f6-4e45-92e3-bcccb5e7782d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6B/6D/d266e615-a238-40dd-9cc6-c0b76d0c675b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/20/94/9a0e87a1-c574-4130-ba30-8766220d710e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/03/78/bdb0ac13-62ba-4b84-a78b-4607c9219c78.jpg']",
                                  "item_price": "USD 38.04",
                                  "store_name": "Newchic",
                                  "item_title": "M.GENERAL Warm Plush Inside Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1180474.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E8/BE/e6279875-4bea-4483-9cf2-92cc213f9769.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E2/27/49490633-dcfe-4f80-9c66-1b3dc09075b7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9D/B0/561ea1a2-d3d4-4572-a0ae-1ade26cc0a5f.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/57/CF/57632a10-7846-4b53-af04-f3113e9a39b2.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/24/C3/76a87b3a-3abb-46ef-a614-f96838e8276b.JPG']",
                                  "item_price": "USD 48.97",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Vintage Ankle Leather Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-915051.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/69/9C/12779005-2385-1ce4-f1eb-d3c8657ed125.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/69/9C/fa52b437-f5f5-cabe-3310-559521dfe934.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/69/9C/d2d4cfa1-31ee-0c08-f580-c08ee49ee022.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/69/9C/20140103134727701.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/69/9C/3c8dcb7b-d46a-3e63-e28a-b24d9c91e6ae.jpg']",
                                  "item_price": "USD 29.82",
                                  "store_name": "Newchic",
                                  "item_title": "Ankle Black Brown High Casual Short Thick Heel Boots For Men"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FAlmond-Toe-Chunky-Heel-Thigh-High-Boots-p-614520-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/15/15395977374010613972.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/15395977352307218432_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/15395977351262743859_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/15395977361945767531_thumbnail_405x552.jpg']",
                                  "item_price": "USD 44.0",
                                  "store_name": "Shein",
                                  "item_title": "Almond Toe Chunky Heel Thigh High Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FBuckle-Detail-Plain-Boots-p-615356-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/15/153959165484097693.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/15395916531405035033_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/15395916531521425539_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/15395916542078146836_thumbnail_405x552.jpg']",
                                  "item_price": "USD 33.0",
                                  "store_name": "Shein",
                                  "item_title": "Buckle Detail Plain Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FChain-Decor-Ankle-Boots-p-615348-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/15/15395916563617194367.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/15395916553469115627_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/15395916561387272901_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/15395916561505124677_thumbnail_405x552.jpg']",
                                  "item_price": "USD 37.0",
                                  "store_name": "Shein",
                                  "item_title": "Chain Decor Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FLace-Up-Side-Zip-Boots-p-615349-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/15/15395916592348668245.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/15395916572543393161_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/15395916582389968549_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/15395916582059216349_thumbnail_405x552.jpg']",
                                  "item_price": "USD 35.0",
                                  "store_name": "Shein",
                                  "item_title": "Lace Up Side Zip Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1336315.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9B/F8/823cec45-bdfc-46a0-b083-1d8f8b5783f0.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/83/A3/b709aa8e-694b-456a-b544-83214fa209d0.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B4/16/97780a54-25c7-4c2b-b10b-a5c206fd728a.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AC/DD/dcf4f076-0f8e-431d-a232-e02fe62ace93.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C4/3B/8511d1cc-06d7-41e7-a944-cc16ec174f6a.JPG']",
                                  "item_price": "USD 53.68",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Cowgirl Slip On Genuine Leather Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1336358.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/10/16/9acea6be-ccf4-449a-81d5-ea530dd1c594.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3E/E8/4454fbad-1c87-4804-9698-836fcf876289.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FD/81/4e4537b9-e0bc-4400-ac5b-da9847925d5f.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0F/00/05d957af-2a1a-4d32-8425-c111aa52e831.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/48/6F/44b31ade-52e7-4f87-b3da-4a67cacc539e.JPG']",
                                  "item_price": "USD 73.59",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Cowgirl Zipper Genuine Leather Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1338202.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2B/3F/3b63536c-dc26-4fba-96e0-15361debed72.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/99/58/ba38f798-7126-4e7e-9838-9613924891c8.jpeg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/61/69/32ce7889-4fd4-4c38-8a2e-9ab02d0d5864.jpeg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F7/C1/70ea28ac-d487-4ca9-b390-a757466d14aa.jpeg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CB/A4/e3e55753-dc5a-48db-9be0-a13dd338c5cd.JPG']",
                                  "item_price": "USD 73.7",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Cowgirl Zipper Genuine Leather Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1339889.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/39/9F/15ebc3bf-3644-4a9e-bd2e-51ea8e99a3e0.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9F/A9/d437ba18-22a0-4c15-9dbe-4e964af10fd5.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D9/24/b63d9bdf-7c6b-4af9-aab2-c4c10fac00f8.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A9/5E/845fc11e-771c-4a25-9078-e7b32e156b17.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F3/FE/4ce8512a-a688-4029-938b-5e45b09e7413.JPG']",
                                  "item_price": "USD 71.63",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Cowgirl Zipper Genuine Leather Comfortable Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1342620.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AA/9A/9ccc7138-72e1-4fd2-974e-4b77d5c19de0.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/09/1D/a6197c5a-32e4-4bfa-afd5-9eed3afc75eb.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8B/81/91daef5d-255b-4135-a598-61179e99ad43.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C7/E8/deeb3ea3-20bf-46a4-afcd-b9674650e18e.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/13/48/c389e911-6bcc-48f2-b777-4757937add66.JPG']",
                                  "item_price": "USD 71.69",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Cowgirl Retro Weave Pattern Genuine Leather Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1341772.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CF/FA/3411c6b0-81e5-4b49-9b39-dce22110cf38.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/32/69/360bc29e-42ef-48df-bb62-8cf6b7f16556.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/98/AD/9aa6a776-fbd9-4416-8da4-7850547a0bb2.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/97/53/a27240a6-4c39-4781-9635-16389d068281.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/20/D9/c63cd756-f7b6-4fb1-9ae4-2c048f8782d9.JPG']",
                                  "item_price": "USD 72.67",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Cowgirl Zipper Genuine Leather Comfortable Flat Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1343029.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AA/97/859607d6-1cbd-4b52-82ee-5056adcb5b9f.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DE/44/48e2a854-0fed-458e-a9c3-b0118e5b4eb8.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B5/0E/76ec2518-b9a1-48f6-8fca-fc9a5ebb8efb.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C3/E8/e2f21b84-a451-4376-9c83-64aaa37af68d.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E7/93/e9638f93-8a3f-4a6b-b3ef-d1f40f04331d.JPG']",
                                  "item_price": "USD 72.59",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Cowgirl Retro Vine Pattern Genuine Leather Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1343027.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A1/78/8624eb1a-5d83-4ae2-a0a5-0d1898a916db.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/38/A4/8f8b0ced-1250-4b8f-8db9-b34334225d41.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7F/A3/780273ef-58e0-40b8-a090-811cdc99ed85.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F4/46/d3ae9e81-0681-4eed-ba36-d0a49d69c3b0.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D2/36/ad1b0eb7-0f8a-48c0-a551-7e6fbb2ca2d9.JPG']",
                                  "item_price": "USD 81.05",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Cowgirl Zipper Genuine Leather Comfortable Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1343951.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F4/DF/bdfe2458-b9d4-4fad-a660-f96fb4af61ec.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BA/85/8d6f0ed6-6818-437e-b9c5-663574e503c5.jpeg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1C/48/59dac6af-d6c3-416f-95f2-5ad6f5a9232f.jpeg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0A/CD/c831df56-075e-4353-aeaa-88b25931c4e5.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/96/C6/52e41f0d-32ea-4598-b162-bca50360dc31.JPG']",
                                  "item_price": "USD 64.64",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Splicing Retro Genuine Leather Comfortable Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1344767.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/ED/4B/54602d65-e363-4070-ba02-ea53e3811e0b.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3A/7C/0eef292a-5d97-417a-be55-9490c261f95b.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8E/09/924d75b6-1d67-4ea7-ac76-21250b191285.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/74/1A/ccecb9e1-1d03-4c25-b03e-3008fd0efae3.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D4/BE/f3c86cc8-375a-4746-b5c9-4f019e3f62ba.JPG']",
                                  "item_price": "USD 73.71",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Cowgirl Flower Pattern Genuine Leather Knee Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1346804.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AB/2C/cc45bc31-2da9-4683-83f0-f2a34cb4fb31.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/86/01/f4e76797-b834-43f1-93cc-6f1b7ccf46cc.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DF/66/334aedb5-a228-449a-974b-4ea8896a7780.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BC/82/082fe742-6bde-477b-ad6d-aec283a6dfa5.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/82/1D/90e22560-8a75-4057-93ca-6d4659e26630.JPG']",
                                  "item_price": "USD 79.88",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Casual Kaleidoscope Floral Genuine Leather Flat Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1348057.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/33/5B/2ba64e33-8462-4151-b420-5371690d327a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A9/7D/48a0dbd4-1ee9-4e35-8972-5b38f5385bda.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9F/36/07f8102f-e411-4fd6-8963-2ba92cf0fe04.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D6/5E/0d59e9ec-b541-4a4d-86e1-1fc71434886b.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/39/BF/b780d0cd-7467-4fb1-8427-418f20bf2486.JPG']",
                                  "item_price": "USD 42.39",
                                  "store_name": "Newchic",
                                  "item_title": "Warm Lined Hook Loop Snow Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1354020.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E3/95/dbda470d-45af-4d52-aec1-c23ecea891e8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/18/5B/0a1737ec-9734-460f-87bd-906ff5ebc38f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7A/12/0d32af51-8f18-4f4a-8b76-eec6fcbe6bc9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8F/78/3166303c-f288-44ca-b75f-5e5cfcefcba9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5C/33/0db8ed8b-3706-48d3-8e83-d51f9576d229.jpg']",
                                  "item_price": "USD 31.78",
                                  "store_name": "Newchic",
                                  "item_title": "Splicing Pointed Toe Buckle Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2F-menico-mens-boots-3618%2Fp-1373469.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E7/3F/17f618c4-25ee-43d4-aa20-f9bf14e631e3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0E/64/70e6475e-44d6-48ed-9bba-4ede08a557cf.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/03/56/ae98271c-717d-4e88-a80f-8bb97ac99794.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BE/B8/3f82a738-280e-4e6e-891b-bc517d2d3ca0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A4/5F/89da02ba-a961-4fcc-9b8c-bb0fc5883c1d.jpg']",
                                  "item_price": "USD 39.83",
                                  "store_name": "Newchic",
                                  "item_title": "Menico Men Crocodile Pattern Side Zipper Dress Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1380031.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/77/C8/616a452e-cead-4ef7-b561-e1dae785d25b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C5/5E/fb05b620-b9bb-4897-af1e-f91a584a6486.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B5/20/fc062c26-c59e-4131-bf00-a9304833af4d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6C/D0/0daa51c3-b394-4ccb-83cc-c04135aac42b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A7/EC/19a7697a-0efd-4309-a22f-29f65114502e.jpg']",
                                  "item_price": "USD 49.67",
                                  "store_name": "Newchic",
                                  "item_title": "Genuine Leather Wool Lining Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1397737.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/80/81/758c2c9d-9c97-4ad2-98b9-64191245d77b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CC/8F/9d730a02-895c-455a-be91-aa337bfa23a3.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DD/C4/573ccfd4-ccc9-4d96-8426-4d5a4d8856e2.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/31/87/3a03ce26-eb3d-46ae-a7f2-a54bf0aa8739.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C1/27/10852ab8-3ff8-4d95-8d6f-2cfb2fb04bd9.JPG']",
                                  "item_price": "USD 66.63",
                                  "store_name": "Newchic",
                                  "item_title": "Bloom Flower Elastic Band Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1401657.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/98/0C/d6c075b3-b1a2-4b90-a5a7-f915611f8c82.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F5/AC/3d8eb1ca-b195-4420-a3e7-5016d299922b.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/73/1C/d6fbd753-103c-4d70-8ef6-361c069c7318.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A2/6F/e6eb968f-316a-4ec4-9f84-d76f61c1aa33.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/37/92/aeb966be-10fa-44e2-a356-a674beec9f12.JPG']",
                                  "item_price": "USD 58.88",
                                  "store_name": "Newchic",
                                  "item_title": "Bohemia Elastic Band Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FLeopard-Pattern-Boots-p-615354-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/15/15395916523831043624.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/15395916503169992776_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/1539591651616513253_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/15/15395916511435219615_thumbnail_405x552.jpg']",
                                  "item_price": "USD 40.0",
                                  "store_name": "Shein",
                                  "item_title": "Leopard Pattern Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fm-general-boots-6416%2Fp-1205596.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7D/74/d404d7d0-dcc0-44ed-8ac6-6130bf668e7a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/71/78/839074e0-950b-488d-b27f-10fec0e8a3cd.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F8/1B/8cc3a7d5-0815-4db5-a68e-3489ac441a02.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9A/E9/bf82bed9-a068-47be-a15b-bd9ef1ca571c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/26/F5/d99b1fce-d481-498c-8dd8-0ab35ea975be.jpg']",
                                  "item_price": "USD 29.83",
                                  "store_name": "Newchic",
                                  "item_title": "M.GENERAL Camouflage Young Chic Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1103963.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/14/B3/6348d442-0716-2e16-45d1-9687bc9c97eb.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/14/B3/487a84ef-7308-fa8a-4c68-b15ad59c6f18.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/14/B3/d6a9b289-c938-3997-0f8c-f434931e16cd.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/14/B3/d3a5c548-59b3-6af7-160c-d00c7494b540.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/14/B3/1b68b60f-baf4-73da-40e2-3875c1b6cc5b.jpg']",
                                  "item_price": "USD 47.86",
                                  "store_name": "Newchic",
                                  "item_title": "Suede Chunky Heel Over The Knee Lace Boots For Women"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSnakeskin-Pattern-Ankle-Boots-p-616507-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/16/15396805502422423365.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/16/15396805493027806732_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/16/1539680549882667479_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/16/15396805504036847163_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Snakeskin Pattern Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSnakeskin-Pattern-Ankle-Boots-p-616508-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/16/15396805533746238069.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/16/15396805513806423273_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/16/1539680552119460073_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/16/1539680552114283531_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Snakeskin Pattern Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSnakeskin-Pattern-Slingback-Boots-p-616506-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/16/15396805471125931625.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/16/15396805462389885628_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/16/15396805473799247022_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/16/1539680547649739472_thumbnail_405x552.jpg']",
                                  "item_price": "USD 33.0",
                                  "store_name": "Shein",
                                  "item_title": "Snakeskin Pattern Slingback Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FLace-Up-Plain-Boots-p-616500-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/16/1539680555664830557.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/16/153968055448467222_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/16/15396805543684667961_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/16/15396805554161967679_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Lace Up Plain Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1353486.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F3/F5/a1857836-5541-4dde-9689-74314fbb5ffd.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/87/41/4b1acc11-a764-474f-b83a-6b1cac2f5e73.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/45/5B/24701008-c940-42d3-b216-c03ecdcae781.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D8/2E/dfd3e67f-a349-49b8-9bc7-b18dbe48f05c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E8/13/32d31747-5d08-4bac-a1cd-258a4738fb83.jpg']",
                                  "item_price": "USD 36.88",
                                  "store_name": "Newchic",
                                  "item_title": "Buckle Decoration Slip On Square Heel Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-959694.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D6/AD/6c82a046-cd0d-7cf6-7cea-4b6addf0fcdb.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D6/AD/4c37b41d-4289-3b84-ed7c-5fdfbf292ea7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D6/AD/c6704061-890c-2446-d50b-2d54cc010915.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D6/AD/1752da86-6ead-1b4f-0c10-9d0e7d03491c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D6/AD/4387eeda-95e7-54a1-f0d8-1139b2e9f61a.jpg']",
                                  "item_price": "USD 33.97",
                                  "store_name": "Newchic",
                                  "item_title": "Pu Double Buckle Square Heel Zipper Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1401825.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E0/E0/2ceb4ed1-d1d2-4ab0-8365-3a0c1fab26df.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C7/7C/e32d81fd-b9db-4913-a6fb-c433ad3baf00.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5D/A9/4a4e02bf-bef7-411b-b99b-99be92d746e2.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B3/76/3ea32219-8fed-4b74-b3be-287b1edfdab8.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4E/22/99fce723-7076-48fe-a210-ffed38a32ba2.JPG']",
                                  "item_price": "USD 98.66",
                                  "store_name": "Newchic",
                                  "item_title": "Handmade Cow Leather Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1189695.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DE/20/ed093730-77ed-418e-983f-7d7b28890c2b.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2D/34/c7fb6ff3-bfdd-4757-a312-c6cc1bdc5413.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/83/D9/887e9fd9-5311-4ed8-a0eb-d48e3f0c0fe1.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/20/AA/ecd52484-9040-499c-a23d-a394c8f9636a.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7E/78/7af7b9e4-fdad-4daf-9e54-1b7df401f48c.JPG']",
                                  "item_price": "USD 60.49",
                                  "store_name": "Newchic",
                                  "item_title": "Men's Vintage p Lace Up Outdoor Casual Desert Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-999195.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/90/B8/a6d8952a-6d52-4f2c-9d50-d98beaaf3252.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/54/E2/1732b45f-53a5-4549-b5ab-ece48fc08d60.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A6/7C/4bdf429c-380f-417e-9f3b-8ad8ad87cb44.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/ED/3F/0adff7af-7249-4a5a-b89c-cac8adcf177b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DC/7A/42134b41-ea44-49e0-a0cc-3284e0ba46e1.jpg']",
                                  "item_price": "USD 21.26",
                                  "store_name": "Newchic",
                                  "item_title": "Warm Flat Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1233536.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B0/28/8da015d8-f94b-4adc-8c0a-6d3e58361a6e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/72/74/2996d206-a3a9-46cf-bf56-a07f122e8e9f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/22/52/1da920b7-36b8-4935-a3a4-39848378d0a1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1C/5E/e2f08a2c-7778-436f-92f7-f20d1a923c55.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/42/C9/aac032b2-ca70-4bcf-b703-e16d64991f11.jpg']",
                                  "item_price": "USD 87.95",
                                  "store_name": "Newchic",
                                  "item_title": "Men Cow Leather Non-slip Casual Shoes"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1256536.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8F/30/d0c83fcf-9ea4-48ac-bc02-ab6ddef0e0a2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F7/2E/2b223780-b241-46ec-bdeb-30c582f1a977.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F5/5F/b925ec90-4c7d-415d-807d-4b58ec48b0c2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/13/14/3dc4f7c1-9d31-4920-81a1-001c4fd89ed8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B7/2A/9dc78720-bd02-4561-b56a-2cdadcd3e869.jpg']",
                                  "item_price": "USD 56.75",
                                  "store_name": "Newchic",
                                  "item_title": "Bowknot Wedges Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Lace-up-Side-Zipper-Chunky-Boots-p-618497-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/06/15414906513357689432.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/06/15414906493967000912_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/06/15414906503921030153_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/06/15414906502948256698_thumbnail_405x552.jpg']",
                                  "item_price": "USD 37.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Lace-up Side Zipper Chunky Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1116454.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/75/D2/538cac9e-8518-41e4-969c-b5f02bb3a654.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A0/FF/4b01e82f-9b5f-4960-933f-29717c7ebb9c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8E/12/79746771-bb53-482f-b8b8-798a3d18325b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/79/90/a190e815-3024-4da5-8220-31d27988bafe.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/06/E6/cb855452-2610-429b-b656-2452fb4991b1.jpg']",
                                  "item_price": "USD 21.66",
                                  "store_name": "Newchic",
                                  "item_title": "Big Size Suede Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FRhinestone-Decor-Sock-Boots-p-618495-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/24/1540370066772053539.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/24/15403700651568625885_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/24/15403700651648520416_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/24/15403700651986553287_thumbnail_405x552.jpg']",
                                  "item_price": "USD 24.0",
                                  "store_name": "Shein",
                                  "item_title": "Rhinestone Decor Sock Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FZipper-Side-Cap-Toe-Ankle-Boots-p-618493-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/08/15416650913406576408.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/08/15416650901710537563_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/08/15416650902269328273_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/08/15416650912479475336_thumbnail_405x552.jpg']",
                                  "item_price": "USD 17.0",
                                  "store_name": "Shein",
                                  "item_title": "Zipper Side Cap Toe Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1333208.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/87/F1/dc2c5f0b-187a-4dcf-8fdc-e09a626bcbe4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/13/39/3548ad07-8c5a-4276-83ff-44e7c64d5d6c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2A/DB/73f9ae09-19d8-44a8-9ded-9f085d540d1b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/29/1D/242fc427-287a-4257-b5f4-64cb8f9d1cea.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EC/2D/e40b497b-f910-420d-91ad-9a8740c755f7.jpg']",
                                  "item_price": "USD 17.49",
                                  "store_name": "Newchic",
                                  "item_title": "Casual Zipper Low Heel Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1334263.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5E/78/d428bdaa-9fba-48e8-bac2-9154e37c1031.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/44/84/43b69c52-03c2-4e4a-b0c3-c4ef92a5d1b4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7A/AE/8fbce81f-0956-4cce-8ff2-0a1bcb2f208c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DC/D0/63e5769c-44de-4997-b21f-c4a6bcf71e26.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AA/35/62dd82d4-b4a7-4554-8044-6331697a99b3.JPG']",
                                  "item_price": "USD 37.05",
                                  "store_name": "Newchic",
                                  "item_title": "Buckle Strappy Block Heel Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FOver-The-Knee-High-Heel-Boots-p-617738-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/17/15397649133623157234.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/17/15397649112720995415_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/17/15397649123932934842_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/17/1539764912398776464_thumbnail_405x552.jpg']",
                                  "item_price": "USD 39.0",
                                  "store_name": "Shein",
                                  "item_title": "Over The Knee High Heel Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FStudded-Decor-High-Heel-Boots-p-617731-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/17/15397649181000334815.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/17/15397649162287874831_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/17/15397649171489119643_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/17/15397649172517799674_thumbnail_405x552.jpg']",
                                  "item_price": "USD 35.0",
                                  "store_name": "Shein",
                                  "item_title": "Studded Decor High Heel Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1341343.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F1/0F/b24f4932-7f97-4a1a-aa25-f1ec3cddb16a.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F2/52/92bd8531-b365-4ea4-883e-6d0f73a0fb12.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/02/5A/98c1ffa9-11dc-4e3e-b6f1-344042b04175.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3F/D6/d76f6a99-cbbc-4f7b-a97b-3e877dfb5604.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F0/39/3afeb4e4-1d00-4fb1-a65f-324603fa0460.JPG']",
                                  "item_price": "USD 29.45",
                                  "store_name": "Newchic",
                                  "item_title": "Elegant Suede Block Heel Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1342010.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/44/51/db1f4699-9fdb-4a21-9430-5d0f21a319e3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/64/46/de2de14f-673f-425d-9fec-9ed92e9470de.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/18/34/78aead1e-9f49-47d7-95c7-83bdb87272f1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/68/EA/ba11c443-b289-49ea-864c-9a1eba3d1130.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4C/D8/204aab52-184b-4475-98df-51f2aab12ad2.jpg']",
                                  "item_price": "USD 33.14",
                                  "store_name": "Newchic",
                                  "item_title": "Men Leather Fabric Splicing Casual Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1343234.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/06/E8/0d9f6e61-7be2-4448-b72b-4c33fdf6208f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/33/8D/e0238e2b-0447-40f6-9209-27650406f6ef.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EB/86/3e1812cf-c54b-4104-a022-3fedb643272e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FA/54/60a2859d-7466-4025-b61e-5bac347fe3ba.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/79/D7/152b62ac-e525-44e0-a805-e0553acc8109.jpg']",
                                  "item_price": "USD 53.6",
                                  "store_name": "Newchic",
                                  "item_title": "Retro Cross Lace Knee Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1362880.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5E/BE/35a403a7-0470-4a33-b271-32fa9c75976b.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6D/4D/5a0aea62-7111-43ad-b555-1e9c14bd7f09.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DA/E7/dc9cd3c9-5c1f-4d94-9d63-780621698ca1.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4D/6E/c96804ce-49fa-4866-b3df-6f8784bcdb69.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A6/6A/2d0ab17c-acfa-4a23-b15e-14e19422d7b8.jpg']",
                                  "item_price": "USD 88.89",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Leather Lace Up Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1360654.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B2/CB/434549d5-c09d-4b19-8122-26078aedfddd.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B8/32/73ee5bc8-6a0d-4588-a0de-08e9beb871da.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/05/4E/b4bd261d-08bf-47e0-93ff-a183b75ed7c4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/23/DB/5436793d-0b58-4305-8f19-460f1b2ff339.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/60/54/18793158-03b4-490d-98a2-f19d1109be8e.jpg']",
                                  "item_price": "USD 33.5",
                                  "store_name": "Newchic",
                                  "item_title": "Leather Cloth Mixed Color Back Zipper Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FCap-Toe-Side-Zipper-Chunky-Boots-p-618496-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/08/15416650891106161677.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/08/15416650872442345670_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/08/15416650883596902745_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/08/1541665088417974657_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Cap Toe Side Zipper Chunky Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1362997.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B3/66/9ef74617-8d61-4f38-a741-6e2a566fbb68.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/65/1E/eb68edec-0ee2-4af4-82c7-647ca7a62fb2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/07/2B/fb72f078-6249-4267-90cb-0503cc489536.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/76/D0/de3c36a9-5eec-444e-8fb6-f85432e9aedf.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3B/E4/ae5a0559-42f8-4333-ae45-9d346062edf4.jpg']",
                                  "item_price": "USD 43.89",
                                  "store_name": "Newchic",
                                  "item_title": "Men Vintage Side Zipper Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1358044.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B7/C7/2e258905-44d4-4b35-b425-e948667ab233.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BD/1C/34798bb2-5c92-425d-b54a-38a7d08442bb.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/38/4D/1b6b63d0-7bb5-44cf-9da0-968c05220782.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/86/A9/59985696-1dce-4a6d-880a-518450c8567f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/86/4F/18f6d1c0-6f26-4c22-9a97-33836319506f.jpg']",
                                  "item_price": "USD 48.42",
                                  "store_name": "Newchic",
                                  "item_title": "Men Warm Lining Casual Leather Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Lace-up-Zipper-Side-Boots-p-618494-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/06/1541490648683048358.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/06/15414906473376561565_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/06/15414906474234494054_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/06/15414906481001773698_thumbnail_405x552.jpg']",
                                  "item_price": "USD 37.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Lace-up Zipper Side Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1344061.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F9/AF/28d5a8a2-3671-44dd-9e0b-d350c0c5acbb.gif', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/10/A7/aee1e90e-1ff3-4de9-8741-d9d70a4c3472.jpeg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/72/DF/739f9326-e346-45e7-adee-1e059b6539e7.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9D/FA/6c6f2b18-ce35-49db-98ec-a9189b57d022.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/28/8D/382176d7-f583-4013-a991-9c96d24503dc.jpg']",
                                  "item_price": "USD 31.46",
                                  "store_name": "Newchic",
                                  "item_title": "Waterproof Warm Zipper Soft Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1344490.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0F/17/c5708442-87fd-4019-91d6-237cff456229.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F8/CE/e3de78ec-570b-4ce3-9b18-333c357ce830.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0D/F4/d8b3b71f-6799-4f0b-8b7f-b3902bb51f83.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3D/B1/a997a45e-f9c1-4ecc-9c9b-12036efce7a1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C7/85/59e32400-19ab-4fce-bce5-5b87489eb311.jpg']",
                                  "item_price": "USD 62.48",
                                  "store_name": "Newchic",
                                  "item_title": "Men Retro British Style Stitching Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1345260.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/00/9C/8c0241d5-72a0-4e40-be98-874516f02e61.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F8/39/8c9162b5-1fdb-4e25-9e6e-259a48eb4c5a.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CD/1E/2430e6be-2009-4542-88d1-915a6f89ac4e.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/82/D6/2ff1cc3b-96b2-4fbd-b869-f7ec0986e6f9.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4D/D2/e579bb30-b5d6-4702-b5b9-4395ecd0097f.JPG']",
                                  "item_price": "USD 38.4",
                                  "store_name": "Newchic",
                                  "item_title": "Suede Buckle Mid-Calf High Heel Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Almond-Toe-Block-Heeled-Boots-p-618491-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/08/15416650971599625365.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/08/15416650954016127051_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/08/15416650961630897209_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/08/15416650964015809319_thumbnail_405x552.jpg']",
                                  "item_price": "USD 36.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Almond Toe Block Heeled Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1345612.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1F/08/27a58e7b-d61d-4c93-a40a-eb8f96182020.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/02/70/977bcd54-8827-4fb4-a906-6d38aebc73f8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/26/FB/f2e19fa9-1309-4a82-9401-5f69bd5ff60c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B8/D5/be500b0f-64a8-4ded-9f63-8d7fc7d02918.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7D/C4/33f712aa-1046-4254-80c6-9629487a740f.jpg']",
                                  "item_price": "USD 33.41",
                                  "store_name": "Newchic",
                                  "item_title": "Warm Lining Mid-calf Platform Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1347479.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FA/CC/654c4ce6-a88c-4006-801d-87190af4eb66.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DE/2E/1328dc3c-56ba-478c-ab33-59f68028cdca.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/26/DD/a8529668-2c48-48c6-b908-bfc331cbf759.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/62/BF/d4c82212-2b94-4f66-9feb-511aa869c8b9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8A/34/0ef4dfb9-da46-4d33-95a9-59bffa0fc34a.jpg']",
                                  "item_price": "USD 39.37",
                                  "store_name": "Newchic",
                                  "item_title": "lowers Embroidery Chunky Heel Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1347478.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E3/59/237bac9b-f51f-43a8-b106-6b01f5685e64.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/88/BB/1ce33ff9-d006-45c8-94e3-541f96b10edd.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E4/DA/79059a13-cb16-4c0e-9cd6-6641077e0cef.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DF/69/75db638e-0f44-428b-8d9a-ac321697f423.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/08/4F/81120739-ff43-4169-9cdb-5f17c8081f36.JPG']",
                                  "item_price": "USD 26.64",
                                  "store_name": "Newchic",
                                  "item_title": "Warm Lined Buckle Snow Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1347232.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/94/79/da364835-0666-47ad-9089-11a115e135f6.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/05/58/bf57d0e5-d5d7-44c8-b513-eda81fe3fd2c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FE/D3/219b752c-bcf3-4e60-89fc-2eda0c800f7b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A1/64/1361a1e4-3af6-4578-b423-63c6de2e4eb8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FF/1D/b879b197-99ec-44df-bdfb-4f369a0cc5b0.jpg']",
                                  "item_price": "USD 18.4",
                                  "store_name": "Newchic",
                                  "item_title": "Suede Pattern Warm Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1347125.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6A/47/f1fed4fc-e203-4b7f-accd-879eac4ead92.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2F/C7/8653282a-ee4f-40c3-b336-a1b53ab041f2.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D8/32/1e8e48d1-a1f8-4471-91c2-f5b9f5dee2bd.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C2/39/13e1cd07-66fd-4fdd-ae52-04e557b855ca.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4C/36/0238c421-e0df-4ddc-a7ef-85673310604d.JPG']",
                                  "item_price": "USD 51.58",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Mongolia Style Plush Genuine Leather Flat Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1348056.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FE/1B/c236f62c-2a64-4389-854b-d7131ae91273.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/08/ED/fb776f5a-a64a-4842-aeef-861bc40cee5f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/59/CF/17351aab-4651-49da-8dfa-a3e36e42bdfb.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/40/04/ea9df4fc-0f1d-400a-9476-9c369dff0b7d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A5/BF/625a2d7f-70c4-4fcb-8a90-b4d1d92107b4.jpg']",
                                  "item_price": "USD 37.09",
                                  "store_name": "Newchic",
                                  "item_title": "Warm Cloth Pattern Mid Calf Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1347874.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/92/4E/366a8f5e-289b-4f9c-ab5b-d71f7d3a2e09.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/32/3A/bb3bfd55-aac5-49a2-86be-a77f16ba80f6.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/51/83/8bc43a63-73b0-49e0-a429-2c322385f7d8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0D/1E/9c4239a0-ef13-4685-b39d-3b21f1c76c27.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A3/43/6f19bc21-e0c8-4e7a-b43b-3f0d16e55e1e.jpg']",
                                  "item_price": "USD 37.18",
                                  "store_name": "Newchic",
                                  "item_title": "Waterproof Warm Snow Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1348411.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EA/EE/5ce61ebf-28a3-459f-815e-17b603201e07.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/65/12/2932ed73-5116-44c6-b739-cdafbb3bdbd3.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E8/66/1a7b4188-19f8-408a-9ebb-5ea29774d81e.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1E/C7/82c259b1-ce11-405f-85ad-031272c9038c.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/81/1E/06270e6d-7f31-44f2-9372-f8f7388ba085.JPG']",
                                  "item_price": "USD 28.16",
                                  "store_name": "Newchic",
                                  "item_title": "Warm Plush Lined Solid Color Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1348273.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/50/B2/101c8429-ccdb-454f-9795-72167929ba26.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/39/46/5a5a9908-b784-4255-902c-09684a27d803.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/78/8D/6e8da86c-14b5-4f0d-8df4-3745d546c63c.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/29/94/8785f070-4a71-4359-b807-6f3654491f3a.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/46/E0/169d91ec-675b-4457-9399-1c330e8624a5.JPG']",
                                  "item_price": "USD 80.39",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY  Sooo Comfy Genuine Leather Flat Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1348407.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/43/85/dea2593a-218a-4eb9-b6b2-c8e76842e9bc.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DE/DF/4e519def-8738-45d9-b8d4-47eaee155d5b.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/25/7D/22d89d81-f579-4344-8fc2-dcded74c5666.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1C/5F/c94cca4c-1d0b-4c59-94b0-fb9d1d596635.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9A/D3/56b8b762-a643-4690-9803-cacc863d043f.JPG']",
                                  "item_price": "USD 68.4",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Cowgirl Zipper Genuine Leather Comfortable Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1370232.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EA/7E/5a759dbb-c05a-4663-90ea-7d0a7f7d18f7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/43/EF/e632b8f7-ded9-40d0-8742-6bc8efae0add.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3C/87/e64748c1-61b6-48b2-9ca8-ab0e10727c0e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FB/95/47a309c8-1281-48c9-81e6-5a7ec2805922.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2B/75/8e2bca5e-01a0-44c7-8771-0d99759ec723.jpg']",
                                  "item_price": "USD 35.5",
                                  "store_name": "Newchic",
                                  "item_title": "Flower Warm Fur Vintage Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1351887.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AD/CF/6dec2738-7d76-4cd2-972a-106e515fe207.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/53/47/f66da361-47de-412d-87d8-021a27dab913.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/86/57/d5e4bee9-06e5-4aa6-b7bb-30be0c5beab1.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6F/4B/d758d0c2-aa0e-4d76-8c65-5d2c5be25ab6.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AC/1E/6c526428-2f14-4cf3-92a9-d98ec22c2a02.JPG']",
                                  "item_price": "USD 51.39",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Cowgirl Floral Pattern Genuine Leather Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1352435.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8B/36/60503cb1-1fae-4f6e-b3c1-7deeaa63b694.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CA/C1/a59b4ee7-7137-4c8d-a6e4-887dd91a87ed.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E2/97/e66580b3-aedf-4299-8df2-72dfc10fce56.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1A/75/bfb576bb-7829-4c20-ad74-83b33fc2256e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/65/26/9664a158-fcd8-49af-9b8e-88e485eae534.jpg']",
                                  "item_price": "USD 42.39",
                                  "store_name": "Newchic",
                                  "item_title": "Genuine Leather Flowers Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1351889.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A9/A3/0864e8ac-3522-4def-9f0d-8c60f8d3e981.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E5/9F/168365d0-385f-4661-a4a9-166f35d122d2.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2C/20/d754f9e6-e1ac-4dfd-85e0-20f330fa5e3e.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/43/C5/a4e2fe70-98b9-4235-a8c7-902343ac388b.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B8/65/7c6a0005-75a6-4411-943b-cae85f7ba4fb.JPG']",
                                  "item_price": "USD 78.08",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Vintage Genuine Leather Zipper Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2F-menico-mens-boots-3618%2Fp-1352505.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8B/8A/50d1d926-9cc7-457e-8c27-8f8a414d8814.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/78/36/f700e38f-f0f1-407b-8229-82b5b334e409.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0C/FB/2f536f1e-f2fb-4f05-a9bf-770ef7df596c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/74/ED/dc129db4-5744-49bc-9360-216ca67e4fd0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1E/06/72450c19-937a-442a-b49d-1901f1439c09.jpg']",
                                  "item_price": "USD 44.85",
                                  "store_name": "Newchic",
                                  "item_title": "Menico Men Hand Stitching Leather Casual Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1352516.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E8/4A/31c2f842-9f91-47ca-ad8b-a887845355e3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/72/E0/ccaf1027-424f-44a6-a85a-d7bb78c5e6d0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DF/D2/de421da9-905f-425b-8463-6742adee2b1d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DD/62/26bbd595-bfa6-44ae-bb89-2e343a5a29a9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E0/6D/ab65c5c0-14c7-4e0e-810d-fc78c6164443.jpg']",
                                  "item_price": "USD 55.85",
                                  "store_name": "Newchic",
                                  "item_title": "Men Vintage Leather Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1352649.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BD/FB/d5ab2dfe-0048-494e-bdcf-b3d461ac4ba5.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/40/26/c0ab9bed-bf34-450e-984e-00a03070de24.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/40/1A/af89449c-d42a-4528-984d-8580a83efa55.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/01/35/be8527b5-5efd-4a2a-8e8d-1356e79a1af0.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/39/5A/7d1540d5-85e7-4e46-9e01-c0d5e3a5d783.JPG']",
                                  "item_price": "USD 44.82",
                                  "store_name": "Newchic",
                                  "item_title": "Vintage Genuine Leather Zipper Splicing Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1354325.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8B/12/13af613e-9ff4-48cc-ad3b-e25cfe7a87c5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/43/A9/764a9904-4d3a-4df2-837b-e326978c1c24.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1D/80/370515f0-1444-4af6-a110-4f1fe5a082ae.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AD/BC/d1d3cde9-0edb-4135-bec9-f00949ccd6ef.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E4/81/85d5a1dd-010f-42be-a1e9-80e1624a5791.jpg']",
                                  "item_price": "USD 42.19",
                                  "store_name": "Newchic",
                                  "item_title": "Men Genuine Leather Casual Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSnakeskin-Pattern-High-Heel-Boots-p-617752-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/17/1539764907284755804.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/17/15397649053835323408_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/17/15397649061727360047_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/17/15397649071031629781_thumbnail_405x552.jpg']",
                                  "item_price": "USD 24.0",
                                  "store_name": "Shein",
                                  "item_title": "Snakeskin Pattern High Heel Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FOver-The-Knee-High-Heel-Boots-p-617749-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/17/15397649104191876984.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/17/15397649082733360680_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/17/15397649091191400788_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/17/15397649104249158697_thumbnail_405x552.jpg']",
                                  "item_price": "USD 31.0",
                                  "store_name": "Shein",
                                  "item_title": "Over The Knee High Heel Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1354322.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EB/FB/6487ad09-f97f-44c3-a376-53c6b87a76fe.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/70/6C/1d98274a-f8d1-48e4-9b84-4118ff28f2f4.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/09/4C/7b19efdb-e1b4-4c3b-9b7e-2a67e3e022d0.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/76/92/d1bb6c03-8eff-4242-bcd4-6ed2f8b07724.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A1/F7/2a716ebc-aef9-4df7-9994-2327090b52eb.JPG']",
                                  "item_price": "USD 31.37",
                                  "store_name": "Newchic",
                                  "item_title": "Men Fabric Slip Resistant Casual Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1354816.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/15/0B/ede0bec0-d04d-428d-b86d-aa5c9aeb838d.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7F/27/ef391a81-7e41-4b43-b555-eb2df410c319.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E7/68/edf53cb9-3ceb-4230-a1e7-24fcb0464277.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/91/FF/7f68c33b-8b0b-4f6e-be46-ca02d3e80cf6.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B4/F3/294de67b-dcd8-45a2-8500-9590173a90e0.JPG']",
                                  "item_price": "USD 80.38",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Retro Genuine Leather Low Heel Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1355253.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/40/E8/16df22b0-89dd-4541-8302-9ca0b2a4b3a3.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A7/DE/7036145f-6fa7-40d0-ad39-cb67a889d692.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/09/76/0198b3e5-06e3-475c-adfd-e982c77e63a2.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EF/3D/ab1ce2f0-c8b9-4659-af38-8b0dfa73c441.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C4/2D/33aaa3af-4ae9-4e84-a4af-a1d7b6129046.png']",
                                  "item_price": "USD 46.78",
                                  "store_name": "Newchic",
                                  "item_title": "Bandage Detailed Zipper Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FTassel-Detail-Ankle-Boots-p-618500-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/18/15398451643111104731.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/18/15398451622341306957_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/18/15398451633544544294_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/18/15398451632477786075_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Tassel Detail Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1357733.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C3/4F/3ffd3e30-551c-4c67-9a17-806735f26d45.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/67/D4/508ffc90-1013-4cb0-a978-56b7c060ab86.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8A/28/935f600c-5320-4fa0-9d92-33bcb83af9f8.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2A/68/2a0f4ca5-6846-447e-a244-471d6d52be50.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/71/97/c4c5ee37-222b-4c25-aa20-01f087f6f0d3.JPG']",
                                  "item_price": "USD 36.71",
                                  "store_name": "Newchic",
                                  "item_title": "Men Warm Plush Lining Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1357734.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8E/A5/6b931ca2-3fa9-41f5-8050-320520b3c261.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A9/10/e66e180b-b329-45fb-a4f5-adb8f3127efe.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/55/27/99985b11-140b-4e46-b3a6-8f37d4d427ad.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C3/FC/16909364-f47e-4251-a698-413beae07d11.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EF/27/c03e1b72-1059-4863-8c7f-63b767d9e09c.jpg']",
                                  "item_price": "USD 47.72",
                                  "store_name": "Newchic",
                                  "item_title": "Men Brogue Carved Outdoor Leather Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1360502.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F5/4F/7060a6cf-b67d-4213-b10e-10519c360ade.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E3/8E/bc73e6b5-c8ce-4c99-a14b-7f56cd646495.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/65/B7/8d54f03f-ffa1-4e3b-96b7-a6bb6c50be96.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F0/A6/66047c6a-0f87-419a-b964-83824732730d.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CF/E9/48438c9b-7436-4c68-adc3-1b7294ff2c8e.jpg']",
                                  "item_price": "USD 31.79",
                                  "store_name": "Newchic",
                                  "item_title": "Low Heels Clog Footwear Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1360505.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AF/EE/4955e994-2d40-42b7-b7d3-f5310376357b.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E9/C1/430af1c4-b3bf-4663-bc64-544e13e622c4.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7D/57/1b1614be-1c2e-4040-8453-5692c0458d67.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/78/FB/ed321878-8e06-4195-8be2-98e7ab99dfb2.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E9/9C/93b95065-5598-4a44-864b-09c4a5d6f1bf.JPG']",
                                  "item_price": "USD 52.99",
                                  "store_name": "Newchic",
                                  "item_title": "Knee Length Increasing Riding Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1359987.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/45/8C/d2dcd56e-8d2f-4c99-8974-f73dafcec6e5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B2/94/a906a075-3dc5-4243-9dda-ad87bbffb781.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/54/76/08167b11-ae1a-40eb-9660-080ba3fbbafe.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/27/E3/8e3585a8-d5e7-4ac6-af45-417af3a93d27.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D8/5F/f8a0f43c-e1ba-48f3-80d6-e9796bbc53fa.jpg']",
                                  "item_price": "USD 32.37",
                                  "store_name": "Newchic",
                                  "item_title": "Vogue Pointed Toe Block Heel Sock Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1360655.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EF/77/a3f276f5-e07b-4f5b-8e2d-8b74af34b349.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/66/48/699df86d-0635-4114-b8b0-f89538e9d44a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E1/40/c4625bd5-7c00-42e4-96a7-7c0490c81131.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CE/B5/8a39e18d-2892-48e1-81f3-102d9a5966e7.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/13/9B/0314693e-e1a2-4767-8f0f-27e832339cba.JPG']",
                                  "item_price": "USD 45.37",
                                  "store_name": "Newchic",
                                  "item_title": "Round Toe Hollow Zipper Square Heel Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1360657.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1A/8D/69f07e4c-a970-4a43-867e-f382868f3280.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/46/00/a0d7bb7b-5596-49b4-92f7-89afb199b689.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F0/62/0ad64835-172f-445a-9204-0190fd6d4735.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/33/48/a025a3a8-62f2-42df-a8dd-82c70cbd5026.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FA/AB/b182f244-dfa7-4075-b085-19fe34d413ba.JPG']",
                                  "item_price": "USD 33.91",
                                  "store_name": "Newchic",
                                  "item_title": "Solid Color Square Heel Zipper Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FStud-Decorated-Western-Buckle-Boots-p-619020-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/19/1539913749580294145.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/15399137471628820358_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/15399137481995359644_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/1539913748943072830_thumbnail_405x552.jpg']",
                                  "item_price": "USD 41.0",
                                  "store_name": "Shein",
                                  "item_title": "Stud Decorated Western Buckle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FStud-Buckle-Decorated-Boots-p-619018-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/19/1539913751487678030.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/15399137502561501034_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/15399137501020947517_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/153991375158970219_thumbnail_405x552.jpg']",
                                  "item_price": "USD 30.0",
                                  "store_name": "Shein",
                                  "item_title": "Stud & Buckle Decorated Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FOver-The-Knee-Plain-Boots-p-619014-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/19/15399137584000993552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/15399137572871686836_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/15399137571161682948_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/15399137581657305504_thumbnail_405x552.jpg']",
                                  "item_price": "USD 31.0",
                                  "store_name": "Shein",
                                  "item_title": "Over The Knee Plain Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1361180.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/06/49/22932ec2-8064-488e-9f57-6de5df7339ab.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5A/7B/9ac33e44-51f8-49b1-9c11-5f5cdb9bc1cd.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6E/DA/50e703cd-f35b-4d34-81df-1eb9854f8d13.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/45/8D/1fab4c6e-1b0f-4c51-818a-a0b92ccb3fab.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/35/E3/838c9b27-9a00-433b-8938-80699cb5cc7a.JPG']",
                                  "item_price": "USD 43.49",
                                  "store_name": "Newchic",
                                  "item_title": "Retro Buckle Strap Square Heel Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1360885.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E5/CE/ed2b8e0b-95f7-4832-bc47-056a7395294f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EC/CC/964e77cf-61a7-4f2b-8cc8-c3d2d818c33e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/98/79/4b014e97-d3d6-46ae-ad6a-618f81b983f7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/87/6E/9d9bd87a-9528-463a-8a75-0f1a030dca62.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E2/CD/486cc22d-8cb0-41db-83a2-6ff7a789b572.jpg']",
                                  "item_price": "USD 103.7",
                                  "store_name": "Newchic",
                                  "item_title": "Leather Handmade Vintage Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FStud-Seam-Zipper-Boots-p-619011-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/19/15399137533150396524.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/15399137523339370363_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/15399137524122143136_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/15399137532655511684_thumbnail_405x552.jpg']",
                                  "item_price": "USD 38.0",
                                  "store_name": "Shein",
                                  "item_title": "Stud Seam Zipper Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1361925.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/12/5C/bbb8a575-382d-4d25-b774-864aa74c631b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/67/72/aa38eac6-2100-42a7-b75f-7ede675609bf.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8F/92/d7c886a5-0891-43a0-9a6f-1b45ce7f9910.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/10/58/31953b01-3813-4a9f-b6e5-641936c7bd72.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DB/77/33679e9f-38a7-4432-bf6c-d82f2d6d2716.jpg']",
                                  "item_price": "USD 48.47",
                                  "store_name": "Newchic",
                                  "item_title": "Warm Lined Lace Up Splicing Snow Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1361927.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FA/AC/b4998ad5-47de-4e5b-8eee-e68b1be51738.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AF/EC/e98e5e39-a126-4cb9-811b-a3dcb08d3738.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BB/EB/cfb59d2e-3512-48dd-b0e3-504680dfbddb.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/80/05/6c407ae1-b11d-46b4-a56c-e428e992b8be.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/81/52/8e09803f-57e0-45f7-a7c4-ea29947228ab.JPG']",
                                  "item_price": "USD 42.78",
                                  "store_name": "Newchic",
                                  "item_title": "Plush Lined Silp On Belt Buckle Flat Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1362984.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/36/63/bce59f9a-49b7-4b09-98c2-342f610f1269.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/46/15/259ffd11-8042-43fc-ac65-97bb6f5e8a96.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FE/A4/514184d8-74de-49e5-a6f5-e0631a6ab9ca.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C4/28/ae042f8b-9353-4a3d-afd9-d31f7f9fe63a.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9E/18/7d83fcd0-f061-4382-83d3-9998e62659a3.JPG']",
                                  "item_price": "USD 76.43",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Leather V Mouth Zipper Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1361842.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5A/53/94e91960-fda9-414c-821a-59a5c82e5e3e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A1/72/5bc1e1cb-63b0-4e63-a2e3-9a0590de3eff.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1D/C0/9f37b4cb-93a9-44fa-a666-c6423bb9ebaf.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4D/B2/4f0252ef-e36f-4b78-9e92-2dd2eda8dcce.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FE/5E/e4bfd2a1-a132-4656-b385-6c0b539a1734.jpg']",
                                  "item_price": "USD 52.47",
                                  "store_name": "Newchic",
                                  "item_title": "Splicing Crocodile Pattern Chelsea Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1371544.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B4/18/793edfba-7a31-4fad-8f1e-614a8e4ba23f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2F/AC/a243e7fd-4f61-41f5-92be-c42b2a070eb0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9C/DE/f4f09776-33a3-45ff-a40f-0dbb5a4be33d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/41/D2/d8bcb5c1-d4bc-4c02-a7e6-e73179740438.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F7/2C/4ea42b42-add4-4c8f-b4c1-ba87e3836e20.jpg']",
                                  "item_price": "USD 51.78",
                                  "store_name": "Newchic",
                                  "item_title": "Pure Color Warm Lining Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1373746.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/08/BD/83bbb74b-20cd-4911-95a1-86594c26d9c9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2A/F2/0b847483-8b03-4763-a1c0-85768c17d568.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E8/B9/943441d3-1423-4d4a-ba0b-3f6711ff7973.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/98/DC/ecd73b90-45b2-425d-a3a1-8ae64c2a017a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A8/1A/32647e04-d337-45e0-a9bf-152e8cba5ad3.jpg']",
                                  "item_price": "USD 54.28",
                                  "store_name": "Newchic",
                                  "item_title": "Handmade Stitching Leather Women Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1383090.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A9/81/860ce6f5-5308-4ecc-b097-7ec9a142916b.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4E/D8/0b482425-a9f3-43cb-82d0-561304d44617.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/43/3A/281147f8-cf9d-4b17-b400-3446fe81ce13.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F5/66/6726dffb-fa60-4528-9383-deeebd214e98.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A7/37/aa170a32-46dc-43df-a0e5-a6952507275f.JPG']",
                                  "item_price": "USD 36.75",
                                  "store_name": "Newchic",
                                  "item_title": "Cotton Fur Lining Splicing Snow Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1387731.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/38/30/60e3694c-3ca6-4ba8-9949-6ffc5b316409.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/08/90/6eb36672-0e29-4c7c-b4d9-ec69e2208319.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4F/85/a504db3c-1a3e-470e-82a5-2d1e510e54f9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C8/70/d7cda699-e3b1-4b15-bc14-b5cd886a2a6a.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/71/3A/6e1bc7a4-ea90-4f12-93f4-ae8932ac2515.JPG']",
                                  "item_price": "USD 39.99",
                                  "store_name": "Newchic",
                                  "item_title": "Warm Lining Retro Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1388539.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/49/1A/b6fdf498-f674-44c2-9b51-6c1e0d525303.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F4/FE/bdcece75-01da-4862-9e6d-1c82b2f7aad5.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B9/40/5196c025-6fbc-493d-81c4-10c39d820eef.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6A/2D/70f73b82-abe6-4d92-acc7-c7b81c5c2da8.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F8/57/d5e6eb2b-908d-4085-b27b-859c260c3551.JPG']",
                                  "item_price": "USD 31.12",
                                  "store_name": "Newchic",
                                  "item_title": "Side Zipper Comfy Women Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1391296.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7A/8A/9c037385-1589-4fe9-a58f-58d70bdc77d6.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/96/3E/e896da82-ca97-4f7c-8c33-9b7784f11fde.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A8/10/211a6eb4-4d90-40e0-921a-7bc3ebca5cb7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/75/98/eb9df7a6-cef3-41fe-baa3-e973a89f663c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1B/73/d54b04a6-b8d0-421b-bb11-c73230c566d2.jpg']",
                                  "item_price": "USD 32.27",
                                  "store_name": "Newchic",
                                  "item_title": "Large Size Comfy Outdoor Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1399209.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FD/E7/f3d7f5cf-d5b7-4832-8c0e-3e60c70601d9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/20/84/4dae2966-5ab3-4b08-9492-15fe68c22a71.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/11/2E/8791e2bf-94a0-4ae7-944a-163af1813e77.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6D/83/50818e0b-0e44-4e79-849a-6f6b466193d9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/60/19/6ec0ef1d-5571-4eb8-92a4-15566f844b8b.jpg']",
                                  "item_price": "USD 43.25",
                                  "store_name": "Newchic",
                                  "item_title": "Block Heel Zipper Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Flostisy-womens-boots-3599%2Fp-1406250.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/03/D5/679aa71b-60ab-43e4-a51d-af620d1f9222.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EB/03/19ad604d-cc1f-47a3-8948-1c243ad7d338.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BD/43/23e7fbbd-d122-4b40-aa7f-2db74bf2a67f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C5/6C/33d5aa51-ec96-47e2-b666-05969c7f84f5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/43/DE/ce046b58-2122-434d-aeab-3b98a0d3aad9.jpg']",
                                  "item_price": "USD 56.1",
                                  "store_name": "Newchic",
                                  "item_title": "LOSTISY Cowgirl Totem Western Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1406253.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E5/80/5b6e340f-d7f1-443a-bdc8-957a23c8d1a2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/86/32/cfb3b32a-ce53-4af5-acfb-566c557124fd.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E8/08/e69d58b6-b1ba-4c53-b5e7-06bfcb57e2a7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D3/BD/46164220-3616-48fb-8ddc-64b758a5e387.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/95/E3/4d48e17e-43df-44db-b881-bf1bffc2fcf2.jpg']",
                                  "item_price": "USD 42.96",
                                  "store_name": "Newchic",
                                  "item_title": "Round Toe Zipper Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1089267.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/04/AC/7139e718-cdb5-4d42-9ad4-62637ca47194.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/12/CB/85b4f1af-4c08-4da2-bb53-10a98e184ed6.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/68/69/591f40b4-67a5-4e9d-8605-c6b0675850b0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4A/BE/844632ad-9106-4085-9b85-58dbb76ab1e1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/01/F3/61513a46-035e-49f8-89b0-108d55b8e897.jpg']",
                                  "item_price": "USD 21.99",
                                  "store_name": "Newchic",
                                  "item_title": "Suede Pure Color Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1342163.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/90/DB/298d5eca-49b4-438c-ae8e-ab5280add3ab.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/91/47/8ae097ce-088c-4f97-b299-1e84a4beabf9.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/14/23/d1349d2b-73cc-4f21-9685-4e0b310b3fe4.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F5/B4/990b2b04-a5b8-4b73-a9fc-459fc0c582bd.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AE/F0/e57a6ca0-afdb-4e5b-a8ca-33c6d13cd67d.jpg']",
                                  "item_price": "USD 31.64",
                                  "store_name": "Newchic",
                                  "item_title": "Hollow Zipper Footwear Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1357916.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B4/E0/4ad78d22-c62c-49ef-a305-02436c1efcb9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DC/29/18b2e950-4488-422c-94a5-48090f60979e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5D/ED/944a416a-db05-468e-ac11-6d1519f082d0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E5/0B/ee77b76d-aafb-46f9-86e9-98e572eb6d12.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2D/A6/8a36a355-a593-4e2c-ae5b-578522b6e311.jpg']",
                                  "item_price": "USD 38.59",
                                  "store_name": "Newchic",
                                  "item_title": "Large Size Down Cloth Wedges Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1360651.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A9/CF/6616110b-9f05-478e-8afa-6e8da391882a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D3/5B/a0848b05-8f6b-431a-9a06-f047474b701c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/54/CD/da273553-e059-450e-b873-cbbb027ece99.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C0/1F/7cfbf799-b40d-4638-b7c0-6c957f2aaf7b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F0/0E/f6137eb1-1e9f-4e98-af36-4e645ad6f830.jpg']",
                                  "item_price": "USD 39.9",
                                  "store_name": "Newchic",
                                  "item_title": "Suede Pearl Beads Square Heel Over Knee Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1360650.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/05/15/7a1ab513-b647-405c-b5f0-3cd58bc73afc.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F2/08/872720da-922b-4c40-b84b-f33420616ce5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C4/0C/8077ed15-587f-493e-b349-713f27077299.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1B/E4/4d6ffefd-ba7b-457f-b720-f5733f7cef85.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D1/D4/8ce108d3-6398-48ff-b1c0-050adb42efd0.jpg']",
                                  "item_price": "USD 36.62",
                                  "store_name": "Newchic",
                                  "item_title": "Lace Up Platform  Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1357913.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/16/E8/1024ac3a-6589-4526-95a9-4c2cd5eb1dd9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/98/D5/17a58716-c4c7-4e9b-a560-45eac81e4150.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/80/D5/b6dfa556-c52f-4ab3-9891-dd3452b6968f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/10/A3/6ac4915f-1fb9-46fe-bc09-0a545f8e21e3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CE/B2/7089abd6-ae24-44be-bad1-d7e54df8ed32.jpg']",
                                  "item_price": "USD 46.11",
                                  "store_name": "Newchic",
                                  "item_title": "Buckle Mid Calf Warm Casual Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Side-Zip-Boots-p-620002-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/19/15399341183163398951.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/15399341162725256443_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/1539934116163398876_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/15399341174073309716_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Side Zip Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1357960.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/49/38/ab48d39e-b084-4748-863b-90a285c2dd73.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2D/C8/a616bd63-43d0-4e26-8d4a-8a0cbb5bdab3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/19/F1/7a5a3f02-dae5-4b94-a068-ad039df9ed5e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8C/FA/0cd4e718-de5f-47fd-a8f6-1970ed961232.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A9/F7/ea8e6a2a-f766-49ce-803a-ac45d457d90a.jpg']",
                                  "item_price": "USD 49.0",
                                  "store_name": "Newchic",
                                  "item_title": "Buckle Warm Fur Lining Short Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1358307.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4F/0F/b36a30ae-8db8-4545-be47-588753a716bf.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FA/39/b12a3255-2c2e-4264-8b3a-964d10aabbd9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B4/6B/07560ebe-f891-4738-b324-d08b8b83c58f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/39/CC/3a0d47a4-310c-4945-8cca-465bd1da018a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/51/D1/c52aed21-a3b3-401c-9197-d6183864da8c.jpg']",
                                  "item_price": "USD 50.6",
                                  "store_name": "Newchic",
                                  "item_title": "Tassel Zipper Ankle Short Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1365188.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EA/0F/792df078-c5fe-4cbc-94dd-c7562bf2767d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/99/27/90b44880-0fd0-4dee-9f0a-4a05fcf391fe.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7B/72/8f01a988-4c90-4b1d-91d9-6a2fbdb9394d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6A/F8/068c9446-b206-44af-94bb-e828beb58a61.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6B/0C/bd771ce8-dd98-489c-a106-5ae3c5e9901f.JPG']",
                                  "item_price": "USD 50.74",
                                  "store_name": "Newchic",
                                  "item_title": "Hiking Warm Lined Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Side-Zip-PU-Boots-p-620018-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/19/15399341233760950910.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/1539934121947457153_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/15399341211956568600_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/15399341223187684440_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/1539934122951355587_thumbnail_405x552.jpg']",
                                  "item_price": "USD 41.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Side Zip PU Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FStudded-Detail-Thigh-High-Suede-Boots-p-620019-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/19/15399341261907080265.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/1539934124553560240_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/15399341242071856407_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/15399341252255355566_thumbnail_405x552.jpg']",
                                  "item_price": "USD 29.0",
                                  "store_name": "Shein",
                                  "item_title": "Studded Detail Thigh High Suede Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1361844.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/92/E9/ecd7e417-ce3e-43d8-94c3-d1a2ab71aac5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/96/E5/020b5811-9d37-4c8e-8aad-68da70fb17a2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BD/86/a532f8e2-906e-48d1-89a8-6fa1c8e77c07.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EB/B1/791fd6dc-aaa7-4c9e-a7e8-76846430535a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/47/9B/9775fe97-e813-4793-9fd1-7647ffceecdd.jpg']",
                                  "item_price": "USD 45.41",
                                  "store_name": "Newchic",
                                  "item_title": "Pointed Toe Low Heel Buckle Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1344649.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/04/56/1a7d8d11-e5ae-437f-ac33-7596987b62c3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EE/F1/eee9fbbe-b213-4d9e-be56-996d3ea6ebaa.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/05/A7/c6f0f5e3-10ab-48aa-a4d6-adfd9d235b01.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/12/F4/eb7d16c0-6ced-4b67-b2df-632edbe61c72.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DA/BC/4c964314-5462-435b-981e-12c6eb5ee99e.jpg']",
                                  "item_price": "USD 29.56",
                                  "store_name": "Newchic",
                                  "item_title": "Pointed Toe Slip On Stiletto Heel Pumps"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1344971.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1C/25/61bd3816-36a4-4600-815e-97c5dc7e1071.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9E/8F/22b0b6b7-ae49-4a10-9ca7-b97803b8dca0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AB/D9/e1372ac1-20c8-402d-bb13-9d5cdb3506ca.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B0/C4/1666a0c0-34bc-4a6f-8584-3c8064cee326.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/54/7E/cedf1793-1d13-4bed-8da9-3477796f8e1c.jpg']",
                                  "item_price": "USD 36.53",
                                  "store_name": "Newchic",
                                  "item_title": "Men Fold-down Cuff Ankle Canvas Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1344838.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/27/B3/3048ba3e-d879-4b1e-b26d-cb86ceb21b39.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B5/85/3330e705-9c0d-42fc-8c9c-32f954a9d426.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/29/8C/8b0f0d2a-d103-4184-9553-cc0878a37ce0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E3/67/b0665c03-f9f4-40d4-9f9b-cb7c92f8ae04.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/97/64/7a6d71b2-c467-43ee-a2fd-147ab8aeb693.jpg']",
                                  "item_price": "USD 49.99",
                                  "store_name": "Newchic",
                                  "item_title": "Men Leather Slip Resistant Wearable Casual Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1344836.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/60/5B/582a62cb-41d9-403b-9eea-e0939e54a0fb.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B0/68/0ea6d058-3983-4bae-bd52-3753bb75e3af.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4C/39/f9e77bc1-11ce-40e3-a10a-6594102d88a5.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BD/96/3cef5be4-922e-4286-987b-4ce5dedcc319.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/27/4C/cbdad0de-d096-4b8a-b77e-124e091fd108.JPG']",
                                  "item_price": "USD 39.99",
                                  "store_name": "Newchic",
                                  "item_title": "Men Zipper Metal Buckle Casual Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1345439.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8F/F5/849b9ae9-6d17-4fdc-9dba-4c7b790ecd09.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/74/24/9a3bd96d-73e6-4b17-bf95-7de871e74ff3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/37/95/59791dd9-092d-474c-80f1-9bd8c548a9ba.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4D/C2/5d910ee6-dca7-43de-83e0-87b79398cad4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5A/FE/f905d8ef-1931-46ea-a25b-bf511714a26a.jpg']",
                                  "item_price": "USD 30.4",
                                  "store_name": "Newchic",
                                  "item_title": "Luxury Rhinestone Metal Detailed Square Heel Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1345442.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C6/7E/bb8374c4-8317-412c-af95-7ae8750bf3c1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D4/F3/a7fad9d9-e015-408e-8113-fe0ca795e703.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/80/21/5c279f31-31aa-4cbd-a0b7-47290ff459d9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E9/D2/df77a526-1618-476b-ba2c-36d8192e4863.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6A/35/c19da599-fa4a-49f2-9836-7cb82a061626.jpg']",
                                  "item_price": "USD 35.78",
                                  "store_name": "Newchic",
                                  "item_title": "Hot Sale Suede Over Knee Block Heel Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1345749.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B2/57/552565df-5f5a-4658-949b-2b9cbbd213b7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/47/5D/e77539dc-b1d2-47b6-be01-337eca2a3cfc.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/76/50/1a7a3daa-aff2-4da8-bc52-3e13167b0fbe.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/89/69/6f07553e-ffde-43e9-b333-ff5068e29b98.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1E/33/0ade73c5-d9a1-45f4-9a6f-a3e179e08e54.jpg']",
                                  "item_price": "USD 35.43",
                                  "store_name": "Newchic",
                                  "item_title": "Men Leather Zipper Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1345620.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D7/52/1070e9dd-a0c5-4881-880c-5307462a27c7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3C/67/581518f0-5d8b-468c-a1ce-7e2dcde13833.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2F/EF/ce956c5c-68d6-42d3-97d8-c3cedb78d3b8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F1/45/fd653faa-e317-4fe8-bb93-d5cd8db02579.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/40/52/ad779105-0842-42d8-9bbe-ad83bd57088f.jpg']",
                                  "item_price": "USD 33.61",
                                  "store_name": "Newchic",
                                  "item_title": "Round Toe Back Zipper Block Heel Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1345634.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4A/DE/3e7fdbf2-d178-4496-bca5-4f52fbd57304.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/86/88/301dd127-e29e-4d5a-8805-c754d5eb1b96.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/58/54/510d8e18-3fab-4361-9f9f-79d48a574ab8.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/21/98/0c538750-c0c8-40ab-b81b-92e6dc7be6b5.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/91/7F/82700a05-96af-47ea-a7f6-94dd604fb6bd.JPG']",
                                  "item_price": "USD 58.14",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Cowgirl Genuine Leather Comfortable Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FBack-Tie-Thigh-High-Suede-Boots-p-620017-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/19/1539934120772342833.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/15399341193188550811_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/15399341192987721453_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/19/15399341203328367027_thumbnail_405x552.jpg']",
                                  "item_price": "USD 39.0",
                                  "store_name": "Shein",
                                  "item_title": "Back Tie Thigh High Suede Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1346769.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/85/87/0c9a4ab5-7ecc-4ae5-9c50-951b2c9fe144.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/57/10/d74cee68-e5d9-4a44-addb-c3a927cd330f.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/71/2D/ef885838-9cb7-4994-a6af-18c876c09ee4.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5B/90/a63ef3dd-e0d6-4df7-bc44-d135227c8b33.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/15/01/cde3655a-a206-4158-85e4-3f213d75c0c3.jpg']",
                                  "item_price": "USD 34.57",
                                  "store_name": "Newchic",
                                  "item_title": "Tassel Lace Up Long Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1346768.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/99/89/a18af620-3178-47c3-ad18-f428499922ba.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C5/2C/33b8c5b5-ac82-4363-96d8-8a635d17f806.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/51/9A/d07caf6f-767f-4a26-8042-9c3d210384c5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/73/4B/0a68d213-df8b-4ac5-98b7-3933858acb17.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F5/5C/dc475de8-31b5-4261-92ac-eec794d3f77d.jpg']",
                                  "item_price": "USD 47.1",
                                  "store_name": "Newchic",
                                  "item_title": "Tassel Zipper Hidden Height Heel Short Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1346003.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B0/7F/6d4055a3-b811-4962-aae4-bbce36a3168c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E6/BF/f2233069-4c7e-40e5-b708-a7167fc63fc1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EF/26/9ca2561c-635b-45c6-871b-eadbd7c635af.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/56/4B/e4aa9283-1c40-4847-8c64-7c0f50eea412.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/24/8C/d93e91b8-fffa-4f47-95c1-9c7a6c38e919.jpg']",
                                  "item_price": "USD 50.87",
                                  "store_name": "Newchic",
                                  "item_title": "Splice Hook Loop Mid Calf Snow Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1346001.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/91/09/2a2ea9c0-496c-4c1a-89b3-ee242d72a28b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/96/26/5b1748f5-a1cb-4c80-b9f6-9904e204ddd5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/04/7F/70801d2a-443b-4a8f-a560-8b4abf609ba6.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5B/91/4b809f18-27d9-46ce-a325-0eef28a7ed2b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/58/54/466b27d2-582a-433b-8639-f13b9a1c263c.jpg']",
                                  "item_price": "USD 47.56",
                                  "store_name": "Newchic",
                                  "item_title": "Solid Color Stitching Zipper Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1348060.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/94/F4/b44e53cd-446b-44c0-8644-11395e0c99da.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/43/E7/65df8122-b1ed-4696-8570-f8756b8be271.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BA/12/830bd6db-c2d9-4a22-b143-72463c0ec79c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F4/4C/7cc9a0c0-5b18-479b-b48e-22eb6a504bd7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2F/9C/ce199ccc-a805-428e-91d9-273aa1c5ed97.jpg']",
                                  "item_price": "USD 55.37",
                                  "store_name": "Newchic",
                                  "item_title": "Suede Rhinestone Tassel Slip On Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1348061.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/29/97/8fed43f7-b4cc-47dd-a4f2-93d55ff5a87e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B4/08/e09c9d9a-b268-4f54-a501-8497644efea7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3F/8B/d2f2491a-8545-40cc-b703-0eb47f968cf5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/08/DD/d0d8227b-92ce-47cb-8d75-631da7414696.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EA/B3/9f81813b-ef85-4357-82aa-c42dcfa957bc.jpg']",
                                  "item_price": "USD 52.99",
                                  "store_name": "Newchic",
                                  "item_title": "Warm Plush Sequined Cloth Snow Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1348413.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C2/98/7e968290-338d-4e3d-ade9-4b213f092e3b.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/60/FC/ec4e1e8a-f7ec-4b04-9c36-ff05ed40573e.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/77/E5/63851543-e630-46f7-88aa-549b2e84c6ce.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/02/29/b9eefa8a-ae6a-41aa-a6fb-c49188d22acf.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D0/35/75b7bffb-6fa4-4084-a209-5176f47b2725.JPG']",
                                  "item_price": "USD 46.89",
                                  "store_name": "Newchic",
                                  "item_title": "Warm Lined Zipper Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1348380.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/95/5D/0d0cf015-c9d0-49d9-a3df-22c1d7bcf335.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AD/42/f7343413-dc7e-4117-a1fb-6d01ab0f3936.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/96/69/bb185fc3-1e19-45e2-ba03-de257a2e3b98.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6B/65/784a3f2c-382b-4d3f-b6a1-87faf9175d59.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3C/DE/35c6e436-24df-4f91-a66a-dd217f1ece8d.JPG']",
                                  "item_price": "USD 38.33",
                                  "store_name": "Newchic",
                                  "item_title": "Waterproof Warm Lining Platform Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1345872.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/14/9F/0768f83e-aaa9-49d1-bbd9-5996e75061a5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FA/BD/13cfe199-6ac1-44c8-91ec-0b2a7f325661.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6B/0B/594e60f7-901d-4377-b409-88390b1cc672.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AF/63/95b7349e-2cfc-4583-b529-183f9ac86700.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A1/07/7f339e78-11fb-4e96-9b62-8c2756a32a37.jpg']",
                                  "item_price": "USD 31.69",
                                  "store_name": "Newchic",
                                  "item_title": "Men Canvas Splicing Casual Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1349693.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/44/F6/06e2e95d-5146-4732-b832-c86a8d448f53.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7F/8D/14a23d86-2410-49a2-a264-54341ddb8616.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AC/82/8bca90e1-9b39-43d1-87e6-0a43de26ef53.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/ED/93/672b66dc-366a-450f-8afe-d15538a152e8.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A4/1B/de40bc50-c056-4d69-ae59-2b99c501b343.JPG']",
                                  "item_price": "USD 41.83",
                                  "store_name": "Newchic",
                                  "item_title": "Warm Plush Lining Suede Mid Calf Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1350962.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/ED/0C/dc764df0-ca23-4e88-9be1-8c8b6875b67e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CC/0D/c9fe7dec-c35b-4abd-97df-0d42f90265ed.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/17/7C/dcf08853-03d4-49dc-94bd-43bbbd6f29a9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5F/A8/c6a0ace0-4604-4ce5-9fab-8d392d33f1aa.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/37/3A/207bc31e-b25c-4ba9-bd08-013dea52a65d.jpg']",
                                  "item_price": "USD 56.94",
                                  "store_name": "Newchic",
                                  "item_title": "Metallic Mid Calf Platform Plush Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1350175.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9A/85/5aa1dbd1-c8ae-429d-83c4-78f6df820248.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1A/59/f3eebf45-d718-4b4c-b4c8-d3be707da226.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/62/D4/3c3682de-742f-472a-98d6-f432b5beea83.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F3/01/d19eabce-2026-4595-9849-ddf7c88c8772.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DA/0D/7e4b4816-0d41-46c7-ae62-f71c74e4e37c.JPG']",
                                  "item_price": "USD 75.97",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Vintage Pattern Genuine Leather Knee Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1350737.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B7/72/6385b317-21c1-400a-9c18-8268b2771343.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/17/E4/3cffe8e6-8f8b-4fd8-a00c-ce22afb24ba8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/60/59/3c8e8582-28c5-4015-8320-7ca4ba8469f9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E1/09/77062b7a-a08f-4ac4-af60-84f61c7b7028.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F7/F0/25b87d3a-dd21-43ec-9afd-a84e1252cd36.jpg']",
                                  "item_price": "USD 33.2",
                                  "store_name": "Newchic",
                                  "item_title": "Two-Ways-Wear Knitting Wool Sock Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1350151.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E2/D8/ba613d10-5752-47d5-8f63-6d46cfec5f76.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/75/4B/0e57fd84-f620-4330-8072-930bd986903f.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DF/04/4e5d9928-b1b8-4cc3-9269-419c7f1ce959.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DB/DB/a4f7ad58-4aa6-43f2-b2df-fa61bca2807c.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/94/75/67470a94-7a3f-4816-b7d0-ed71b6988522.JPG']",
                                  "item_price": "USD 71.4",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Cowgirl Genuine Leather Comfortable Flat Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1350604.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C0/61/7abe6df4-8ee2-4cde-8fb7-ba29113621cc.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/54/DE/794fde53-4e84-4906-ad52-0203f633e299.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/27/0F/2f3f8199-0274-4f6e-8f20-b6339d5f4cfd.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/99/7A/d111fd38-4c20-4ea2-a5b4-1dfc57ccdc57.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2D/DA/0426709c-9369-4c18-a0d4-185c5c2a4fcf.jpg']",
                                  "item_price": "USD 42.19",
                                  "store_name": "Newchic",
                                  "item_title": "Suede Elastic Block Heel Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1352501.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E7/CB/c7759adb-1fa2-4e99-bd20-7259139b4126.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EF/91/19380b76-fd84-4da9-9e6a-5c0da825bf8b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3B/7B/efb5881f-fd5b-43a7-a6d1-c3ef3737b480.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/17/00/245cb9aa-7aec-4a12-b221-6e7186752780.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F8/48/4af72338-f56e-4ecf-b7bb-80f89bb6db14.jpg']",
                                  "item_price": "USD 42.3",
                                  "store_name": "Newchic",
                                  "item_title": "Men Cow Leather Warm Casual Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1352521.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/27/8A/059591bb-e45f-4854-b759-5a88649083f7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FA/02/739301f4-3cb1-4b76-b509-09bd2e881904.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/14/E3/0f83ce7a-a96c-4a57-aca1-d559a20ea673.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B9/5F/df48675b-13a5-402f-b76e-06bfa63888b8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/28/3F/e1742f36-679d-41f5-bff7-3c8a4334464b.jpg']",
                                  "item_price": "USD 34.36",
                                  "store_name": "Newchic",
                                  "item_title": "Large Size Men Super Soft Slip Resistant Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1352066.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/13/20/3f3f7caf-fb05-4dec-a2a2-61dd2a327968.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4A/90/0d7cdacf-f596-4b07-a958-bdbedd10e2ef.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/47/27/b7fc20e1-4f08-4ac5-821f-faa2f12669bb.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8F/7F/08ec77ed-6a93-4cd9-adc7-69cf845d8ee8.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B4/90/8fb996a7-a376-4f0b-acdc-e6a0a5defc09.JPG']",
                                  "item_price": "USD 34.26",
                                  "store_name": "Newchic",
                                  "item_title": "Men High Top Canvas Mid-calf Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1351874.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/93/C5/8c03e99c-6280-492c-b94a-a19d29a74d02.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BA/6F/4fc28756-1ac0-4607-8419-e3ab236748e4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B5/2C/350c6183-9528-4e73-8274-d59086e90ddd.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B3/83/3ec4a443-94f3-4851-94ab-29ee290121f3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/27/F8/bc541af2-8077-47c6-923a-43eb2db8707d.jpg']",
                                  "item_price": "USD 45.72",
                                  "store_name": "Newchic",
                                  "item_title": "Down Cloth Mid Calf Lightweight Chunky Heel Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1352884.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EA/28/89b77001-0a28-43f6-a438-6799d8c762d9.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6C/A1/627e4245-276d-47d2-acff-e7816dd274f0.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3F/41/bc5815a8-8d30-4768-9f0c-f229a5bb5d54.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B8/A5/4832e44e-6ce4-4f09-95f2-bf90648958c6.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7B/45/38531830-d816-481e-b2f7-11b05c154a36.JPG']",
                                  "item_price": "USD 61.12",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Wild Buckle Genuine Leather Zipper Flat Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1352913.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A2/2A/3b3998e6-0139-44d9-ba3e-3c6dca2a7d6f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DE/92/981cd593-cbbd-4609-98e8-e6a8c814b507.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B3/60/65f1ad11-0510-4d8d-8a2e-709845abdca1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/92/49/64af9d78-a064-4884-955e-f9ab49f0b92c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E2/1D/2be15879-5c1f-43ba-a222-37fe76600997.jpg']",
                                  "item_price": "USD 39.6",
                                  "store_name": "Newchic",
                                  "item_title": "Men Leather Fabric Splicing Casual Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1353493.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/51/61/8090780f-c52e-4945-a13d-7c71426c1fcc.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B4/80/b4e2ba16-d2f0-41f6-b131-a749b0bb9de7.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6B/3D/f82517ba-3434-40a7-aaa1-2601b5fc0826.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/23/D8/0881125e-a49b-4ab3-9cd3-92dca1e08407.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/08/7E/782862d4-9e5f-43be-888f-43a9fc8996d9.JPG']",
                                  "item_price": "USD 75.62",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Floral Vintage Genuine Leather Zipper Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1353559.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/46/8F/a33d3d4a-50ce-469f-8427-5453087eeb98.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DF/4F/b061623c-3d32-445e-9100-ff05920f3f02.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BD/B2/c04fbb2a-d310-456a-9d48-e17c9563838d.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9F/3F/95e40ba3-5270-4339-8c3d-58677224fd74.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/59/96/7b659866-779f-4193-91f7-85a5e23a1f36.JPG']",
                                  "item_price": "USD 36.61",
                                  "store_name": "Newchic",
                                  "item_title": "Terry Platform Warm Winter Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1353571.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/88/22/0eef1dfd-5068-4da2-acb1-4d838fdd983e.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2E/26/4d7ba1e8-1385-4e3e-b9dc-26b476c2d1a8.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D5/10/31dc1ca8-7726-4d71-b118-01a0daf599e0.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/63/F2/43fb040f-ea19-453e-9908-acd69faa96f8.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E2/E1/b02aad3a-6c34-454e-8997-24a1faeaaf59.jpeg']",
                                  "item_price": "USD 72.54",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Genuine Leather Zipper Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1353193.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8C/AE/b5f2f6d3-15e1-4943-96c2-87d314a4d359.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/19/4E/c29f69b5-930e-429b-b22a-99f166c8306c.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AB/98/955bbeba-2f0a-4daa-8a86-c4e832bed65b.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7D/3E/721c5c68-f4f5-4caf-9b5c-f0167aa83840.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D2/29/00682d14-e080-40ad-800c-709820b94559.JPG']",
                                  "item_price": "USD 68.98",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Cowgirl Genuine Leather Zipper Flat Comfy Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1354374.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C9/30/a8950271-31c3-4a8b-a51f-76d38749e45e.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7A/BB/24b877a0-c605-41b3-90bb-09d5e9382480.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2E/E8/bb7d64e3-cb51-4048-9632-3c0f0e6d83b6.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D8/83/6a2759af-f652-4f2b-a993-28b7b2aee825.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DF/B8/1b31ac5c-a29f-42ed-96af-5e5b0557dc13.JPG']",
                                  "item_price": "USD 72.99",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Genuine Leather Zipper Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1355624.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AE/46/70265b8c-ec35-48cd-abfb-7368457da0d0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/46/6F/2e31c892-01d2-437c-b45c-080ecf824f4e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/74/8F/ff11b171-dc70-4372-b3e3-28b6b20c8de7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8B/93/9914ff43-93fb-4764-b812-c5877136dab9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/47/6D/10b791f2-afd5-43eb-8cf7-f1ee8062965a.jpg']",
                                  "item_price": "USD 55.02",
                                  "store_name": "Newchic",
                                  "item_title": "Lace Up Leather Flat Knight Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1355249.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/59/AE/6d1e7ab9-a9cb-4e15-95e2-d5a8653ca0c6.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/99/3E/00db4363-c36e-46b2-85d1-bbf68e8252d1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/67/3F/5f8c0a0b-e578-4beb-a031-10928547edad.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F5/4E/a4bf1991-6d02-41ee-bc75-0866aae7f81d.jpg']",
                                  "item_price": "USD 41.62",
                                  "store_name": "Newchic",
                                  "item_title": "Back Zipper Block Heel Over Knee Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1355254.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9C/9F/174b9986-1878-4d44-9abf-14acf825b0f8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B4/A3/ca965930-2ad1-46c3-a515-961bf1c95aa3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/ED/83/bddf1c5c-a461-4c04-ac44-30a013c8e088.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6F/69/563f560a-41f6-4d03-8fac-a4a49a0b662a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A6/37/cbef2d29-4af3-43e7-a339-8dd412e6f1a3.jpg']",
                                  "item_price": "USD 55.26",
                                  "store_name": "Newchic",
                                  "item_title": "Retro Metal Beading Chelsea Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1355508.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D2/7E/396a4f2c-832b-4ce5-b049-d10ae1159430.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EB/30/2f881f11-7177-40f0-8d47-d27ab6b40846.jpeg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C1/B0/f910207c-8f71-443c-9b1a-c1e4a45df4de.jpeg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4F/8F/48f2018e-f04c-4a5b-8013-ff02c33000b1.jpeg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/87/AB/bd86e613-1293-40d1-9138-69af07f4f750.jpeg']",
                                  "item_price": "USD 27.55",
                                  "store_name": "Newchic",
                                  "item_title": "Denim Cloth Plush Lined Zipper Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1355257.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/59/3A/9edb060e-f6ff-4615-a07c-f19cb5d7f8b1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E6/88/41e97a61-79a6-4b85-a3fb-cc0825b7109f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AA/50/52828304-e074-4314-a0c1-3c0685285fcb.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8F/B7/58d77a85-dc78-4db9-8079-484a1d4bd9d2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4B/45/7dae20f1-8353-47de-94b0-1a7ff4c33867.jpg']",
                                  "item_price": "USD 40.67",
                                  "store_name": "Newchic",
                                  "item_title": "Rivet Strides Rhinestone Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1356592.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/57/49/3a5d36b2-866e-43f1-a23c-36fd53b77c50.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/48/82/c58b6f41-7ecb-4fdc-9ff0-3c7334832feb.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E6/77/9a5412c4-cbe4-49b2-b656-bc888f027fdd.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/73/3C/24bb16c7-d7c6-49cd-8746-0c2eb35d0051.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/40/2E/e1aaad0e-62a8-472f-8ceb-22a4f7bff9bf.jpg']",
                                  "item_price": "USD 40.47",
                                  "store_name": "Newchic",
                                  "item_title": "Block Heel Solid Color Buckle Lace Up Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1356590.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5D/DB/80d9f430-7af1-4920-b73d-57d6eec6ab5d.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AF/0F/7c5a8570-32da-479d-8435-cf5dfb2dae2c.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B4/31/b6fb484c-2815-4920-aa65-0903cb23b2f8.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9B/5E/7a4304d4-9317-4698-bce1-fd26fd0a783d.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A3/0B/c676e0d3-4f9e-4558-a8e7-d31853d6731e.JPG']",
                                  "item_price": "USD 30.81",
                                  "store_name": "Newchic",
                                  "item_title": "Suede Block Heel Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1356587.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/57/8C/44c2ff03-2d3d-4f96-88c6-0ad69f38ac8b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/36/DA/32e5f7d3-e354-405f-8d54-ace9eed636f0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/34/27/ae828261-726a-4753-b254-361f1ea20dbd.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/70/8E/c6bf48dc-8d81-466a-80c1-68619f7c63be.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4F/E3/56caf7f5-7375-4c75-9d98-837650830f01.jpg']",
                                  "item_price": "USD 48.88",
                                  "store_name": "Newchic",
                                  "item_title": "Snakeskin Patent Leather Hollow Square Heel Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1357515.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1E/1E/8a4c1eee-15d7-4186-9c39-9b55b731db99.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6D/31/e5ed9d3e-66a3-4e21-98a2-848edba89c98.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A4/5D/1a22193b-22f0-4b61-a05d-ae7dbbd32a7a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B9/26/6341905d-6c52-484f-b247-12f0dcc9c6a3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/98/82/8a58b65d-848f-481a-b799-928e54c44044.jpg']",
                                  "item_price": "USD 40.89",
                                  "store_name": "Newchic",
                                  "item_title": "Men Brogue Carved Elastic Band Chelsea Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1345870.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7A/79/a3bdb312-64db-4aba-a9fd-44ceebea4139.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7E/B0/c733e85c-9f58-4dc7-b92d-0face4d94afa.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C9/18/9609a62b-70e0-4fd2-965e-1405a2501a5b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7F/C7/84f95879-e9ee-4610-b35f-a6986410183a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E6/4E/ee47e8a9-e815-4818-869e-e3a0675c2bf4.jpg']",
                                  "item_price": "USD 38.61",
                                  "store_name": "Newchic",
                                  "item_title": "Large Size Men Old Peking Style Warm Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1346013.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D5/E1/4d0dd8a8-26b8-4f49-bb81-efd89b365062.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/70/54/cda05097-bc4b-4c52-ae7e-219820712027.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/27/66/c7749e5e-1b22-42d1-9611-5343f8c48de9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/19/2D/9d6103db-0bb2-4598-a1dc-dc7d7f957058.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/07/72/fe1544a0-e016-40f1-89d2-36e7e0b5fe85.jpg']",
                                  "item_price": "USD 39.43",
                                  "store_name": "Newchic",
                                  "item_title": "Low Heel Round Toe Buckle Strap Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1357909.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A4/74/9ee72b6c-5eb2-4672-b8a3-7a62292841a0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/13/DD/9238bf47-b471-4a62-9f17-58f8962ae05e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/08/E2/05747061-c51a-4752-94ca-10bfb79b5e21.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A1/6F/af274d80-3254-420e-9d5b-e53eca3b605d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/54/F4/53f925c2-1eff-4b72-95a8-61c43628966e.jpg']",
                                  "item_price": "USD 46.11",
                                  "store_name": "Newchic",
                                  "item_title": "Stitching Warm Lining Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1352869.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/banggood/images/78/06/b313f22d-6818-45cf-81d9-2537003f1ebe.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/banggood/images/8B/12/5d6c1238-12cc-4903-950a-99e7a6fb1405.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/banggood/images/90/83/798ae4cc-27e9-4d3b-a552-9399893d8d98.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/banggood/images/F3/32/84432db8-6549-4492-a3a9-54d3461dc44d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/banggood/images/DC/BE/4e169983-77b7-4136-a604-0fc03ab027a8.jpg']",
                                  "item_price": "USD 25.08",
                                  "store_name": "Newchic",
                                  "item_title": "Rivet Side Zipper  Boots Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1357912.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AB/E4/10bfdaca-f02e-4653-b4a0-f515ebc061b7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E0/73/b73ffc64-8d0d-467b-9c37-0b6fb52eaed5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/93/C7/90a3e5ab-b1f1-4afe-a202-ea02d5ebf6af.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/ED/46/a1773208-fcf7-4fb5-9d9a-83f7425d2214.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2D/98/dc07e0b6-f862-49b4-bbfb-31feb0eff3fd.jpg']",
                                  "item_price": "USD 40.5",
                                  "store_name": "Newchic",
                                  "item_title": "Laciness Mid Heel Bowknot Short Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1358490.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/37/1B/2476d501-deb7-4221-942c-3a61d65e3f33.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F5/58/c18a734b-5a8c-405b-9bed-5c7847c18914.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/71/AA/29412730-d585-44ba-9ae4-15695c95436b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/13/D7/a46653f3-6220-4c93-b0b3-a1cfa0429a96.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B0/48/389bb8ba-b5a2-42a3-b070-bd9c0d0b65e5.jpg']",
                                  "item_price": "USD 36.68",
                                  "store_name": "Newchic",
                                  "item_title": "Large Size Pure Color Terry Casual Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1358621.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C4/61/eac6bb22-73f7-4f42-9fa3-3c97c943004d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/90/72/282b3b04-4fc5-4c07-b226-3a0c86d416ed.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CA/53/625fcfd2-4020-4718-8ed3-25c934b5abb5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CA/56/90970490-95c2-4c24-8bc3-d21cdf8d5e27.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8D/BA/23f932d8-fb8d-41ad-96ac-23071ec0a37c.jpg']",
                                  "item_price": "USD 29.32",
                                  "store_name": "Newchic",
                                  "item_title": "Plush Warm Lined Microfiber Zipper Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1358619.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/33/2F/b657723e-be47-4f7c-bf66-d65d9b3804c5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/76/B7/e863da30-dde4-411d-a2b8-bd25f661e0cd.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3B/1D/adcb8283-6c36-472e-8195-cbb2c405deb6.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E1/09/02c7fd21-fc7d-42e3-945c-cebdb201705a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/38/67/d9ea0e88-5ccc-4083-8987-a408cf3993e8.jpg']",
                                  "item_price": "USD 30.35",
                                  "store_name": "Newchic",
                                  "item_title": "Leather Warm Lined Zipper Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1358488.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/10/42/3fea404f-bd24-43b1-bc42-051a61baa1cb.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AC/A0/2b46f279-9d36-4be7-b5b8-bc014631619a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/40/6B/de15d830-a535-4b35-b0b2-cbadd22cba8e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6B/DF/e1dbd3e4-fea7-40d6-9136-176f0c1edc36.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/58/5C/3edf3c61-9fb9-4fdb-bc11-5df95f45eda6.jpg']",
                                  "item_price": "USD 45.27",
                                  "store_name": "Newchic",
                                  "item_title": "Large Size Suede Tassel Knee Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1358493.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FF/B6/2d57878b-f5e6-4636-9dc0-abeed2f6e1dc.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/51/9D/586c3640-6153-4a20-ad0c-4334fbc36e46.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CD/38/1abcb97c-9d23-4dc5-9f0b-bec013b10c2e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/78/69/9a5c243f-9d92-441b-8fd3-f10b3c59e43c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/99/6E/15494fb6-1cf1-4540-9d8f-c019b17eb52e.jpg']",
                                  "item_price": "USD 39.99",
                                  "store_name": "Newchic",
                                  "item_title": "Metal Buckle Zipper Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1358726.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E7/9C/7d219e26-dcca-47b7-866d-541c41f677e1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8A/DB/3ca3dec7-c41e-4ee8-833f-6587e7cdcb03.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/55/4C/fb2bde7e-d608-4301-a6dd-610222296ce2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/57/E5/dce87582-2122-4d44-a635-4a0177fc0f83.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AE/5D/bede3459-d6e6-41bf-b5c5-4621dd545aa2.jpg']",
                                  "item_price": "USD 50.55",
                                  "store_name": "Newchic",
                                  "item_title": "Women Warm Ankle Winter Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1356538.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1D/92/a11970ef-b697-4e8f-b58e-40556bf5acba.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/71/8B/e6d5dae2-5c7e-4a86-9ba7-e6f6611a2529.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B3/95/44b58fbe-84a4-474c-9c13-580c6b702be4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A9/DE/29b7d56f-0e24-4b84-a94d-50eba1921ab7.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5D/73/bd50fdc4-cac9-41b3-ae36-a030169fd32c.JPG']",
                                  "item_price": "USD 30.73",
                                  "store_name": "Newchic",
                                  "item_title": "Large Size Chunky Heel Stitching Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1359106.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/56/29/7ff91d7d-7ce4-4955-a522-8fa1c42f5db6.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3A/BB/b272d69d-b2de-4a6d-9971-63bd26b78327.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6B/80/d7322cfe-7f11-4376-aa14-da4bec939c1a.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C2/B8/56ba6db2-f3e2-47de-a11b-47fd277ac597.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B3/05/c2bc8ab4-8150-4991-840f-07e8103c82ff.JPG']",
                                  "item_price": "USD 34.05",
                                  "store_name": "Newchic",
                                  "item_title": "Warm Plush Lined Suede Snow Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1359107.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/18/DB/6fd63615-e139-4df1-900f-25e01f27664f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A6/09/c3498677-3411-4146-99d5-8e8ea22c18b1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B8/58/dae85d19-90bf-494f-b25f-bfce424d2c6c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A0/2B/ece6025a-6595-4eeb-8559-331f49e25c1f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FB/23/d0e95196-08ec-4529-aea6-caca2eaf0c65.jpg']",
                                  "item_price": "USD 20.86",
                                  "store_name": "Newchic",
                                  "item_title": "Butterfly Knot Low Heel Zipper Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1357479.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/banggood/images/EB/2D/71caf00f-22db-4db4-ab42-8d9ca2ec17ac.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/banggood/images/E0/18/5b48a8bf-2c84-465b-af3a-8ee63b5c349c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/banggood/images/F1/8D/600b1669-8798-4b26-bb00-e510db33813a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/banggood/images/35/BD/408cad3e-a26c-413d-8d15-b51385ec222c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/banggood/images/ED/15/67762079-e785-4c7c-99ae-6ea28cae986b.jpg']",
                                  "item_price": "USD 48.27",
                                  "store_name": "Newchic",
                                  "item_title": "Patchwork Round Toe Platform Chelsea Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1359986.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CE/8C/8a7f3012-b98e-4c59-8ad1-ebfd8185c887.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2C/20/a047869c-dbe9-4ca3-b655-2f9e6bdaed35.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/72/95/97c4094a-53dd-4e10-b0b7-1539334e4777.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C9/DA/d071981c-ac60-4728-95f0-780bd3641369.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/25/B2/1964bd0f-52a8-4a95-87b7-0e54b2cb0ec8.jpg']",
                                  "item_price": "USD 39.9",
                                  "store_name": "Newchic",
                                  "item_title": "Lace Up Suede Over Knee Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1360308.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FA/CC/4a70c5e8-5db8-4e5c-900f-19bd44b63acb.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5A/9A/1e7331ed-9d46-4c9f-8732-0193b1e940e6.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AF/CA/8b81b61b-e9dc-46e2-be4f-6dabd4a98e71.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BA/12/051807b4-9e26-484c-85d8-6914d99d5f10.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/01/49/0c6f3b4b-e90a-42d5-a958-62defaeef97e.jpg']",
                                  "item_price": "USD 31.02",
                                  "store_name": "Newchic",
                                  "item_title": "Footwear Hollow Zip Short Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1356537.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/banggood/images/4A/6C/187bd621-ba8b-414b-9b84-52debfb6d40b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/banggood/images/F1/7A/fc8ba5a1-4a7e-49ad-8a98-aa8e44757a34.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/banggood/images/38/FE/50a513b8-23b6-47dc-9ced-2cd7ed297590.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/banggood/images/E4/E9/404ae943-6d3a-4508-bd98-0e8e5d5ed783.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/banggood/images/C1/31/946368bf-bf12-44f4-ad88-f95fc0817f64.jpg']",
                                  "item_price": "USD 46.6",
                                  "store_name": "Newchic",
                                  "item_title": "Round Toe Cloth Leather Slip On Sock Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1360269.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/42/A6/b808a27e-95b3-4746-b818-6e9a6a6951c7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/61/2B/5d8c8e7a-2e49-47cc-a9b6-0141af8e745f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A5/E1/d27447bf-9283-4e98-ba22-c6dddf8c9ae9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/75/7A/d6f1cf50-4fe0-441b-a4e8-77ba988f3b6b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D7/2A/a131f98a-05af-4d9d-aebe-8ea1b67b9881.jpg']",
                                  "item_price": "USD 38.95",
                                  "store_name": "Newchic",
                                  "item_title": "Men Warm Plush Lining Waterproof Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1357478.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/banggood/images/0F/1D/1b13b1a4-cded-43c7-9271-a7d3ce018c79.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/banggood/images/DD/16/3c592f11-1513-4bac-869f-3cb33a48769f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/banggood/images/82/68/aea0749e-e3a0-40e3-94f4-1e2d896969b0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/banggood/images/17/9A/be55fe82-5842-4d4e-934e-8514a7e18cb3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/banggood/images/AB/19/c33e61a9-a51b-4d90-b66e-f510b73df7e9.jpg']",
                                  "item_price": "USD 39.03",
                                  "store_name": "Newchic",
                                  "item_title": "Lace Up Stitching Color Sport Platform Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1357477.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/banggood/images/33/34/8fbb4326-34bd-45fb-b37d-dd83538f2fbb.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/banggood/images/2C/B6/7dffb639-897a-4279-9d35-cc80017bdd5f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/banggood/images/42/52/7c5b0d09-3563-4cae-97ed-368b5f3644af.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/banggood/images/48/26/f4bab6cd-e22c-41f1-a471-507be51b579b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/banggood/images/19/75/90bba406-02fd-43cf-8952-23cd42b3dcd5.jpg']",
                                  "item_price": "USD 40.91",
                                  "store_name": "Newchic",
                                  "item_title": "Round Toe Slip On Platform Chelsea Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1360103.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F5/9B/0adb48d0-e405-426d-86cd-54143a414cb2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6F/8B/a5bb336c-2d8c-4a18-a6b3-28d73efecc7e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FF/D5/b18ac4b6-034e-4ede-9d3e-1b0f39351242.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FF/71/24359d31-60b0-4993-89cb-684d818f8f7f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/11/D9/1d295f4c-376f-4d76-a326-41fcff51be20.jpg']",
                                  "item_price": "USD 38.72",
                                  "store_name": "Newchic",
                                  "item_title": "Camouflage Wool Lined Flat Snow Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1360656.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/45/8E/d25831dd-46a9-4929-b4a9-224d83c5c497.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5C/AB/c63a066d-fc89-48d8-899f-a8a268bf0580.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DC/FE/736156d6-ad9a-466e-b720-6b6cf84f0568.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/84/78/957e9484-6e5b-4a52-9942-516042e18056.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F1/1E/9a5d7071-f6d4-4864-8bca-bda33f2207be.jpg']",
                                  "item_price": "USD 37.16",
                                  "store_name": "Newchic",
                                  "item_title": "Retro Pointed Toe Square Heel Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1361746.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/85/29/3884e54b-42b9-4243-81eb-3fd98d930d0a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D5/E8/4e7d0d57-7ca4-4d2f-8590-1ff43a4705cf.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/46/60/dfb843d6-db89-42c4-8d44-20a9491f59a7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/23/81/2b343ead-0736-4840-9273-45e2ae89e8b4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5B/87/5e46289a-45df-4699-b8af-5f6c8b6da15f.jpg']",
                                  "item_price": "USD 32.27",
                                  "store_name": "Newchic",
                                  "item_title": "Hollow Out V Shape Zipper Short Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1361512.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AE/28/6cd08159-55e4-46d4-b093-a0c6b6ecc0e8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FD/92/44dc4fdc-82cd-4bac-8756-709133195266.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/42/71/41e27bb6-37bd-48fc-8178-36511e8f3427.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B8/DC/645f2643-f982-4214-8af0-23b1a3425ea1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3C/6C/54363e04-9f1f-428a-8d3f-ffc8c5137a75.jpg']",
                                  "item_price": "USD 29.29",
                                  "store_name": "Newchic",
                                  "item_title": "Leather Plush Lined Zipper Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1362447.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/03/7B/311c7435-725a-4eb5-98e8-fee0c80dbb07.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A2/E8/8de06c0d-758e-49dd-bf84-924d4f5041a5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/73/77/60cd4ed6-4ce7-4208-b50e-0da79984c8cc.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F6/85/bc0b2015-2429-44b6-bd6a-8c04ff2f0703.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F7/C1/0c5bfec3-5597-4c03-b3ee-8756a6d09c2b.jpg']",
                                  "item_price": "USD 28.82",
                                  "store_name": "Newchic",
                                  "item_title": "Lace Up Chunky Heel Pure Color Suede Casual Shoes"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1361922.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0A/68/340c0c77-cd34-47a9-b8da-d0089d6c51c3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/86/A6/a4958b4f-0fc0-4e15-9af9-248ad26585c2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F8/E6/5ad2139c-24da-45da-a040-2d8a8c1fce19.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/25/F0/959357c2-33a0-4fef-8ffa-8eefb6513072.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C2/15/a41126b8-5cad-4d96-b8a9-ac88f14e2bef.jpg']",
                                  "item_price": "USD 45.38",
                                  "store_name": "Newchic",
                                  "item_title": "Bowtie Slip On Flat Snow Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1362259.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/99/98/d6460ac7-512d-43c0-97cf-0e29e2de2f48.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/07/CB/84e5b54b-9b3b-4736-83cc-03a05c1596ba.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8C/60/a9801d03-c77a-486f-a4fa-bf7490036fd9.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E8/50/d5c80136-0a45-4c17-bc33-9dfab0e28a59.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BC/0F/4479c766-1b73-47e0-a381-669a320a7ed6.JPG']",
                                  "item_price": "USD 73.87",
                                  "store_name": "Newchic",
                                  "item_title": "SOCOFY Leather Elastic Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1361926.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/05/8E/d5cce228-b223-4741-90f2-24389e15a3c8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/23/D5/701aca7c-9411-4b1d-9895-12272802f56e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/39/E0/11abc2f5-1cc4-4c94-85e1-5e8389f96f83.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/90/7D/fc6d4a4f-9888-4eda-a291-e9f9ccdb97d3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/45/83/45f12735-eecf-433c-b050-3238fac196d6.jpg']",
                                  "item_price": "USD 45.85",
                                  "store_name": "Newchic",
                                  "item_title": "Warm Plush Lined Cross Band Snow Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1362878.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A0/44/23954e9b-ec4c-4e60-ac59-a7301e098dc1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/29/B0/5bf1478a-303e-4565-b256-aacdb9c4ffa5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D7/1F/66cabf70-6c73-4834-b942-d86e707139f8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6F/35/e8f0bedd-9257-40fa-af43-7b0123d65170.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A6/C4/18272724-f3be-4cc0-92c7-24593d570480.jpg']",
                                  "item_price": "USD 28.43",
                                  "store_name": "Newchic",
                                  "item_title": "Metal Printing High Heel Zipper Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1361843.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D0/E0/69058ae5-a07c-4d93-b94e-94778cd10b4b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/22/50/ca030f6a-d242-42e1-a8ea-fa75bb50b004.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9B/34/b6e4112f-371e-47e1-a5f7-fc038e1e09a7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AB/10/fca9c45f-3497-4161-95ab-07ca6d7c5c44.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/45/EC/bdb402b6-54a1-42fb-85cc-638e0a83aa84.jpg']",
                                  "item_price": "USD 45.88",
                                  "store_name": "Newchic",
                                  "item_title": "Suede Wedge Heel Zipper Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1363374.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FF/2B/6168bf05-3889-42b6-bfc0-44efc2546783.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/62/D2/4cf27762-a12c-4e82-b6a6-a56749115b5c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/20/B8/201a98a7-09b0-4370-9cb5-b7b3e7226308.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DB/45/8743fa9e-f8f5-4d65-b7aa-cf534ccd3b29.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/83/7D/e22e5a06-e807-4cb3-912e-9d9a36048175.JPG']",
                                  "item_price": "USD 38.86",
                                  "store_name": "Newchic",
                                  "item_title": "Plush Lined Height Increasing Knee Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1363372.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7B/E0/ba316597-b9dc-4afc-a754-ca724300a310.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/89/30/eed3ba4d-f726-4c87-98e7-1c91655af909.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D7/EE/1644156e-5a36-4f6e-9762-a9576bfd23e0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/13/D1/2e529e60-bde5-4a3a-88ca-fb3ab9d795c8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2D/5E/169542f5-6de7-4dec-a845-c9cae3c21b98.jpg']",
                                  "item_price": "USD 50.7",
                                  "store_name": "Newchic",
                                  "item_title": "Suede Wool Lined Flat Snow Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1364008.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8D/7B/38bb6b29-52c3-4d17-ad55-352e8d35e8ba.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2A/25/a38e185d-0e9b-48cd-8fe3-6676394466d7.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/18/7F/1c68bb60-c211-4616-96f0-f057b3e6a249.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C0/FD/5997bc01-6084-4296-9a1e-30af8e7d79ce.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/36/F7/5bba9b7a-45a3-4899-a4e6-1a8ded9d494c.JPG']",
                                  "item_price": "USD 33.31",
                                  "store_name": "Newchic",
                                  "item_title": "Splicing Metal Detailed Square Heel Zipper Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1363375.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/28/58/c6a612aa-22e7-4f94-9c22-d68815a4b8b7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/44/04/afbecb08-a094-441b-8b6a-b4a787d99f61.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/32/C5/175a6c5c-e55f-4fec-a7a1-f772985062f2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A9/D8/9da96bda-0561-44d6-a2f7-bb87d1f33098.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/52/B9/62935947-80b8-453b-ad06-599f7f9b179e.jpg']",
                                  "item_price": "USD 46.84",
                                  "store_name": "Newchic",
                                  "item_title": "Buckle Strappy Thick Heel Riding Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1365620.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D4/A7/8667869b-d233-4b03-bc84-760852c63980.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/95/96/8c92fcd0-534c-47d6-8fc3-75a8cb9098af.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9A/65/c12f8979-a287-4d22-94cf-6a68d9a4cdc0.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E5/5A/a977587a-40ba-47a9-8c0e-a9c74a8f1b05.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D2/F3/968ba405-13f3-4fb6-b6b9-8d2a8c50328f.JPG']",
                                  "item_price": "USD 73.87",
                                  "store_name": "Newchic",
                                  "item_title": "Zipper Warm Lining Leather Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1374083.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7D/C6/27617331-330d-4c43-b311-f8c6331654ed.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/52/29/e968bf37-44f9-4afd-9fbb-065525c2bd88.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9A/BF/cd60ed18-54fc-4d83-a3ec-846d64aaa84c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/10/08/04797da3-46e0-404f-9c32-59add550d28f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7E/B1/38753364-ee23-488c-b31b-7900a5891300.jpg']",
                                  "item_price": "USD 30.76",
                                  "store_name": "Newchic",
                                  "item_title": "Men Microfiber Leather Plush Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fsocofy-womens-boots-3599%2Fp-1371621.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C1/8C/ac3bfc67-6fc6-4b8d-bed8-42a4e724a750.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7D/01/40d27efd-21a9-47e1-a524-f2b0428afe13.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/56/0F/72a2e646-9fb3-4298-9b55-604bf1483f59.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2D/BB/721f6dc0-bb72-4ba4-8f9b-af5ee80b9dc6.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/81/8D/ea987633-5bf5-4adf-b628-97d595fd0a33.JPG']",
                                  "item_price": "USD 50.72",
                                  "store_name": "Newchic",
                                  "item_title": "Retro Bloom Flowers Zipper Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1385000.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/22/7E/8eb50a6c-5c60-46c7-a244-88b2701cda0a.gif', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5A/C5/6494976c-a68f-4a5a-894a-dc4f75797480.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/76/3F/7cf2e888-ec9f-4812-9a87-affd88628b6a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/21/14/15b48acc-8894-4055-9a2c-a8202ef8924b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3A/B7/197c7015-38ff-48d9-b969-e67b124bb7cd.jpg']",
                                  "item_price": "USD 35.75",
                                  "store_name": "Newchic",
                                  "item_title": "Men Waterproof Warm Snow Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1384742.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/66/10/c6fc97aa-1a4a-45d2-b7dc-f4e50b55d122.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/95/47/17b3c863-da7c-41de-9430-6b9de257cac9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DA/23/4e766966-b914-4bac-9d29-bf9f2dd97dca.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B4/C6/63185fb5-13db-46bb-93dd-2f87f70fe3e0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/86/E4/00be8b69-bd5c-46c8-961e-e2cf0fb98bf9.jpg']",
                                  "item_price": "USD 44.68",
                                  "store_name": "Newchic",
                                  "item_title": "Large Size Furry Knee Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Flostisy-womens-boots-3599%2Fp-1388540.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A3/0A/89c006a9-8b1e-4539-98d2-529b2732a21d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/50/D6/bab58fae-f511-454c-b048-f7bf8ecbedd0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4E/60/a2c6758c-c861-4661-a398-1d7f72da7d90.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/09/A6/4f0e9328-3b01-484d-b93d-71188a054a20.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/96/3D/537f1910-fa02-41fb-8452-9934f4431ae9.jpg']",
                                  "item_price": "USD 46.43",
                                  "store_name": "Newchic",
                                  "item_title": "LOSTISY Hook Loop Suede Outdoor Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1390144.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8F/B3/50e5b999-132d-46cb-979b-52b2b50ab459.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/17/FA/095a692b-bf57-40c5-a763-63748b139c56.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/24/43/c1728568-e221-4a25-bcae-625a2d4c1b51.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/09/5F/f19601b1-79b5-4725-b4d7-c18b74c21d60.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D1/41/9ad9c7de-0c58-44e7-b323-faae5e8968a1.jpg']",
                                  "item_price": "USD 48.37",
                                  "store_name": "Newchic",
                                  "item_title": "Leather Vintage Mid Heel Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1391407.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4C/94/3f97dfa0-b98b-4e68-a216-d4e5cb5baa6a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FB/4E/e25809b7-3a15-4880-b489-eb9b534b755b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/86/7F/9b17a887-444e-449d-8495-d4bf7945b37d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AB/51/09ab9f9b-d02e-40e3-8585-6500e9971284.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DF/87/2f195499-4f03-44b6-a529-60ca97b01622.jpg']",
                                  "item_price": "USD 33.94",
                                  "store_name": "Newchic",
                                  "item_title": "Double Buckle Stiletto Heel Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1394087.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8B/73/c2c37874-ae2c-4256-bdad-277be6b2fb17.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/84/E7/d114ca23-07e0-4724-bf44-b75743d3d037.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/54/A9/29f57997-1cf8-46c4-b61a-fd3d4381a914.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/56/9F/33db3fba-89e7-45f4-86f4-b2349ebc291f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/88/A9/ba0b4264-66cf-41f8-be8c-4521a0e8eca7.jpg']",
                                  "item_price": "USD 81.47",
                                  "store_name": "Newchic",
                                  "item_title": "Handmade Leather Straw Flower Embroidery Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1395483.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0D/E0/c7e09097-1151-4302-8251-7007e20df348.jpeg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D7/3E/138b652d-4e95-425b-a170-bb5e04136ff0.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/69/08/ea1438f4-d18f-407a-bb49-f1255f5c6a16.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/68/01/d54b101f-e908-44b3-933a-0b98ea5f14e3.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/44/F9/e0759d4c-c92f-4ce8-9e71-9f843cdb3ee0.JPG']",
                                  "item_price": "USD 25.76",
                                  "store_name": "Newchic",
                                  "item_title": "Suede V Shape Zip Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1394540.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/41/0F/38b67dd6-fb4c-4470-bdef-bf9dc3731cb7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/00/F2/424f203f-cd27-4108-986c-b19783ba6351.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6E/88/49bd2172-879e-4890-b4ae-537dd6d974b1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/63/6F/89182a02-6e16-4340-9e1b-69360e69332e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/65/E8/b4ba97d8-446d-4af9-82db-8c28f0da16bc.jpg']",
                                  "item_price": "USD 31.32",
                                  "store_name": "Newchic",
                                  "item_title": "Retro Embossed Metal Beads Motorcycle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fwomens-boots-3599%2Fp-1399380.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FA/35/6ad2a3fe-8aa1-49a8-8955-1e3330de7aca.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6F/75/b755d18b-2176-4129-971a-0a703b1533cf.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2D/C7/ac7edab2-2158-490b-96b9-100204bfa1b8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/27/BC/573699b2-f691-4103-b060-eeb1fe73d7f0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9B/BD/b0439fc1-5ed0-439c-98bf-e9a13f680f7a.jpg']",
                                  "item_price": "USD 47.4",
                                  "store_name": "Newchic",
                                  "item_title": "Stitching Hook Loop Hiking Short Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fmens-boots-3618%2Fp-1400344.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/78/B6/02a8f33e-2cd7-457b-aad5-57c4060e4234.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/95/34/fce60eca-7dbd-4f81-9951-c0f97df1b5df.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/92/03/ad2c81e8-de89-4808-a5ad-0a97060d4a37.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EB/1D/5c54a920-72ad-417d-97eb-e29cd45bd53f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B0/38/1261ccb5-032f-4716-9aba-19c3c3d1aae7.jpg']",
                                  "item_price": "USD 86.11",
                                  "store_name": "Newchic",
                                  "item_title": "Men Genuine Leather Casual Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fboots-6416%2Fp-1345911.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A2/88/b09042d1-efa3-417d-ab4e-260bfca5eb59.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BA/C8/eaee0614-fadc-473f-8e12-3a341fcd0c9a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F7/B4/f7dfbef5-6803-4b5e-9683-f489972e1433.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/62/4B/2faf1b1f-3c02-44e0-a4dc-62ea0a6085da.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2A/12/601f6ca0-0740-421f-8b2d-b58a50bf50a3.jpg']",
                                  "item_price": "USD 22.76",
                                  "store_name": "Newchic",
                                  "item_title": "Extra Size Suede Square Heel Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPoint-Toe-Ankle-Boots-p-623499-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/23/15402870831369326497.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/23/15402870812739688971_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/23/15402870823065906096_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/23/15402870822279314069_thumbnail_405x552.jpg']",
                                  "item_price": "USD 33.0",
                                  "store_name": "Shein",
                                  "item_title": "Point Toe Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FCap-Toe-Block-Heeled-Sock-Boots-p-623653-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/13/1542098393892912030.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/13/154209839278187466_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/13/15420983921040415292_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/13/15420983933829102903_thumbnail_405x552.jpg']",
                                  "item_price": "USD 28.0",
                                  "store_name": "Shein",
                                  "item_title": "Cap Toe Block Heeled Sock Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSuede-Chunky-Heeled-Boots-p-623485-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/23/15402870932983422263.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/23/15402870914269204185_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/23/1540287092898407140_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/23/15402870924034123333_thumbnail_405x552.jpg']",
                                  "item_price": "USD 25.0",
                                  "store_name": "Shein",
                                  "item_title": "Suede Chunky Heeled Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPoint-Toe-Sock-Boots-p-622270-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/23/15402601623660190153.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/23/1540260161956863737_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/23/1540260161558848963_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/23/1540260161262469033_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Point Toe Sock Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FLeopard-Print-Point-Toe-Ankle-Boots-p-622269-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/23/15402601601890827548.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/23/15402601581931648110_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/23/15402601591984476773_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/23/15402601592133791203_thumbnail_405x552.jpg']",
                                  "item_price": "USD 23.0",
                                  "store_name": "Shein",
                                  "item_title": "Leopard Print Point Toe Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FStudded-Decor-Chunky-Boots-p-623481-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/23/15402870901809695345.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/23/1540287089160612023_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/23/15402870893273226133_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/23/1540287090398153046_thumbnail_405x552.jpg']",
                                  "item_price": "USD 25.0",
                                  "store_name": "Shein",
                                  "item_title": "Studded Decor Chunky Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FLace-Up-Back-Thigh-High-Boots-p-623483-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/23/15402870881915035869.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/23/15402870872299824297_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/23/15402870872730256838_thumbnail_405x552.jpg']",
                                  "item_price": "USD 41.0",
                                  "store_name": "Shein",
                                  "item_title": "Lace Up Back Thigh High Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FLeopard-Print-Side-Zip-Suede-Boots-p-623498-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/23/15402870861852006599.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/23/1540287084715029469_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/23/15402870852360204745_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/23/15402870854289331047_thumbnail_405x552.jpg']",
                                  "item_price": "USD 17.0",
                                  "store_name": "Shein",
                                  "item_title": "Leopard Print Side Zip Suede Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FFrill-Trim-Detail-Chunky-Boots-p-623654-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/20/15427031742347468523.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/20/154270317274858591_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/20/15427031722131980553_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/20/15427031731053147637_thumbnail_405x552.jpg']",
                                  "item_price": "USD 33.0",
                                  "store_name": "Shein",
                                  "item_title": "Frill Trim Detail Chunky Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSide-Zip-Thigh-High-Boots-p-625520-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/25/15404568141394986574.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/25/15404568133117654688_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/25/15404568132355974055_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/25/15404568142080545703_thumbnail_405x552.jpg']",
                                  "item_price": "USD 39.0",
                                  "store_name": "Shein",
                                  "item_title": "Side Zip Thigh High Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPoint-Toe-Thigh-High-Boots-p-625509-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/25/15404568172604502773.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/25/15404568152968180494_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/25/15404568169091669_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/25/1540456817410420016_thumbnail_405x552.jpg']",
                                  "item_price": "USD 40.0",
                                  "store_name": "Shein",
                                  "item_title": "Point Toe Thigh High Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FStudded-Buckled-Ankle-Boots-p-624542-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/24/15403669072504717923.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/24/1540366905326161724_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/24/15403669062514905392_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/24/15403669062914617074_thumbnail_405x552.jpg']",
                                  "item_price": "USD 31.0",
                                  "store_name": "Shein",
                                  "item_title": "Studded Buckled Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FKnee-Length-Lace-Up-Boots-p-624540-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/24/1540366909969948296.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/24/15403669083888230954_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/24/15403669083651653493_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/24/1540366909272454941_thumbnail_405x552.jpg']",
                                  "item_price": "USD 40.0",
                                  "store_name": "Shein",
                                  "item_title": "Knee Length Lace Up Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSide-Zip-Chunky-Boots-p-624538-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/24/1540366902845019449.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/24/15403669004227392970_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/24/15403669013869320229_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/24/1540366901552187400_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/24/15403669021967997233_thumbnail_405x552.jpg']",
                                  "item_price": "USD 21.0",
                                  "store_name": "Shein",
                                  "item_title": "Side Zip Chunky Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FBuckled-Decor-Platform-Boots-p-624537-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/24/15403669041435491106.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/24/15403669033955189179_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/24/15403669034256859443_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/24/15403669043660627814_thumbnail_405x552.jpg']",
                                  "item_price": "USD 36.0",
                                  "store_name": "Shein",
                                  "item_title": "Buckled Decor Platform Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPoint-Toe-Side-Zip-Stiletto-Heels-p-628629-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/30/15408871404231446679.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/30/15408871383453843622_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/30/1540887139183871259_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/30/15408871391976516389_thumbnail_405x552.jpg']",
                                  "item_price": "USD 27.0",
                                  "store_name": "Shein",
                                  "item_title": "Point Toe Side Zip Stiletto Heels"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSuede-Chunky-Heeled-Boots-p-628637-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/30/1540887137697447613.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/30/15408871363025900689_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/30/15408871363537923573_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/30/15408871372945579973_thumbnail_405x552.jpg']",
                                  "item_price": "USD 29.0",
                                  "store_name": "Shein",
                                  "item_title": "Suede Chunky Heeled Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSnakeskin-Print-Knee-Length-Boots-p-629749-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/01/15410575363674704060.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/01/15410575353875309726_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/01/1541057535926838173_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/01/15410575363975335071_thumbnail_405x552.jpg']",
                                  "item_price": "USD 42.0",
                                  "store_name": "Shein",
                                  "item_title": "Snakeskin Print Knee Length Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPoint-Toe-Chunky-Boots-p-629341-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/31/15409688123080339342.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/31/15409688102997542556_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/31/15409688113273477191_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/31/15409688113976249166_thumbnail_405x552.jpg']",
                                  "item_price": "USD 36.0",
                                  "store_name": "Shein",
                                  "item_title": "Point Toe Chunky Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FLeopard-Pattern-Lace-Up-Boots-p-629342-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/11/15445124371525345966.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/11/15445124341508536931_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/11/15445124351769610036_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/11/15445124363834986440_thumbnail_405x552.jpg']",
                                  "item_price": "USD 35.0",
                                  "store_name": "Shein",
                                  "item_title": "Leopard Pattern Lace Up Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FKeen-Length-PU-Boots-p-629344-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/31/15409687873074966700.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/31/15409687853900651733_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/31/1540968786144560803_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/31/15409687863611387356_thumbnail_405x552.jpg']",
                                  "item_price": "USD 40.0",
                                  "store_name": "Shein",
                                  "item_title": "Keen Length PU Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSnake-Embossed-Side-Zip-Ankle-Boots-p-627840-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/29/15408042153313413122.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/29/15408042133380432505_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/29/15408042141895741525_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/29/1540804215529012630_thumbnail_405x552.jpg']",
                                  "item_price": "USD 31.0",
                                  "store_name": "Shein",
                                  "item_title": "Snake Embossed Side Zip Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FThigh-High-PU-Plain-Boots-p-629348-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/31/1540968793207328135.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/31/15409687913168910682_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/31/15409687922256360133_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/31/15409687923714017377_thumbnail_405x552.jpg']",
                                  "item_price": "USD 30.0",
                                  "store_name": "Shein",
                                  "item_title": "Thigh High PU Plain Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FLace-Up-Velvet-Boots-p-629351-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/31/1540968801364624735.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/31/15409688001038330238_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/31/1540968800658047963_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/31/15409688013916108953_thumbnail_405x552.jpg']",
                                  "item_price": "USD 26.0",
                                  "store_name": "Shein",
                                  "item_title": "Lace Up Velvet Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FTwo-Tone-Striped-Sock-Boots-p-629347-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/10/31/1540968820317648334.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/31/15409688191150671634_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/31/15409688193942176515_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/10/31/1540968820948722078_thumbnail_405x552.jpg']",
                                  "item_price": "USD 27.0",
                                  "store_name": "Shein",
                                  "item_title": "Two Tone Striped Sock Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FHoundstooth-Print-Point-Toe-Ankle-Boots-p-629753-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/01/15410575464207708058.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/01/15410575453989832677_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/01/15410575452766290907_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/01/15410575462220829262_thumbnail_405x552.jpg']",
                                  "item_price": "USD 23.0",
                                  "store_name": "Shein",
                                  "item_title": "Houndstooth Print Point Toe Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSnakeskin-Print-Point-Toe-Ankle-Boots-p-629752-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/01/15410575393085114528.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/01/15410575373830055527_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/01/15410575382102658987_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/01/15410575381993516988_thumbnail_405x552.jpg']",
                                  "item_price": "USD 33.0",
                                  "store_name": "Shein",
                                  "item_title": "Snakeskin Print Point Toe Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSuede-Solid-Buckle-Side-Boots-p-630567-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/02/15411402062431709221.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/02/15411402041501813795_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/02/15411402042313237246_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/02/15411402052721336711_thumbnail_405x552.jpg']",
                                  "item_price": "USD 39.0",
                                  "store_name": "Shein",
                                  "item_title": "Suede Solid Buckle Side Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Point-Toe-Ankle-Boots-p-630570-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/02/1541140217884351685.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/02/15411402162122739714_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/02/15411402161552266250_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/02/15411402173183614244_thumbnail_405x552.jpg']",
                                  "item_price": "USD 33.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid  Point Toe Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSnakeskin-Print-Point-Toe-Ankle-Boots-p-630571-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/02/15411402204040795381.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/02/1541140218283314702_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/02/15411402192187348416_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/02/1541140219115675937_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Snakeskin Print Point Toe Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Point-Toe-Ankle-Boots-p-631592-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/05/15413969524147404089.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/05/1541396950165129177_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/05/1541396950701399090_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/05/15413969513634788095_thumbnail_405x552.jpg']",
                                  "item_price": "USD 31.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Point Toe Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Point-Toe-Ankle-Boots-p-631591-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/05/15413969494111002901.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/05/15413969471729546945_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/05/15413969481306977088_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/05/15413969482093613407_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Point Toe Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Chelsea-Boots-p-631589-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/05/15413969562543564042.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/05/15413969532869253008_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/05/15413969533961619205_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/05/15413969551449311107_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Chelsea Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSnakeskin-Print-Lace-Up-Ankle-Boots-p-631587-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/05/15413969461548602316.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/05/1541396945187219026_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/05/15413969451386952523_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/05/15413969464057407265_thumbnail_405x552.jpg']",
                                  "item_price": "USD 37.0",
                                  "store_name": "Shein",
                                  "item_title": "Snakeskin Print Lace Up Ankle  Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Chelsea-Boots-p-632505-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/06/15414813233607717848.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/06/15414813223718991729_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/06/15414813223518515066_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/06/1541481323823000033_thumbnail_405x552.jpg']",
                                  "item_price": "USD 35.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Chelsea Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FLeopard-Print-Point-Tone-Suede-Boots-p-632503-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/23/15429612941132081298.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/23/15429612924123421823_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/23/15429612933464397948_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/23/15429612943627673875_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Leopard Print Point Tone Suede Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Lace-Up-Boots-p-632504-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/06/1541481325585353639.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/06/15414813243006295623_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/06/154148132492697294_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/06/15414813253771273155_thumbnail_405x552.jpg']",
                                  "item_price": "USD 41.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Lace Up Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Suede-Knee-Length-Boots-p-634021-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/07/15415737864255220725.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/07/15415737841406213165_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/07/15415737854282410110_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/07/15415737852321874630_thumbnail_405x552.jpg']",
                                  "item_price": "USD 32.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Suede Knee Length Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Jewelled-Suede-Boots-p-634020-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/07/15415737883265655915.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/07/1541573787818576075_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/07/15415737873136517093_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/07/15415737883066709722_thumbnail_405x552.jpg']",
                                  "item_price": "USD 17.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Jewelled Suede Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Back-Zipper-Boots-p-634018-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/07/1541573778374723381.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/07/1541573777777744607_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/07/15415737772425957719_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/07/15415737782388596544_thumbnail_405x552.jpg']",
                                  "item_price": "USD 33.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Back Zipper Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Back-Zipper-Suede-Boots-p-634014-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/07/15415737702192400394.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/07/1541573769605527675_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/07/1541573770481925266_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/07/15415737702478795674_thumbnail_405x552.jpg']",
                                  "item_price": "USD 32.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Back Zipper Suede Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FV-Cut-Detail-Ankle-Boots-p-633548-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/08/1541665115161454210.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/08/15416651132524816571_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/08/15416651143637813175_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/08/15416651144043685492_thumbnail_405x552.jpg']",
                                  "item_price": "USD 33.0",
                                  "store_name": "Shein",
                                  "item_title": "V Cut Detail Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FAlmond-Toe-Stacked-Heel-Chelsea-Boots-p-635140-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2019/01/25/15483781873910271753.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/07/1544172618222664877_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/07/15441726191305615048_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/07/1544172621161841471_thumbnail_405x552.jpg']",
                                  "item_price": "USD 30.0",
                                  "store_name": "Shein",
                                  "item_title": "Almond Toe Stacked Heel Chelsea Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Lace-up-Suede-Boots-p-634606-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/08/15416575954228490173.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/08/15416575949136701_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/08/15416575941282785394_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/08/1541657595758028261_thumbnail_405x552.jpg']",
                                  "item_price": "USD 38.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Lace-up Suede Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-knit-Boots-p-634602-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/08/15416575982140796565.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/08/15416575973441759556_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/08/15416575972690207694_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/08/1541657597289436591_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid knit Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Sock-Boots-p-635754-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/09/15417443443689735222.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/09/15417443432698653662_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/09/1541744343466212047_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/09/15417443443777104347_thumbnail_405x552.jpg']",
                                  "item_price": "USD 35.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Sock Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Lace-up-Boots-p-635742-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/09/15417441401894582176.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/09/15417441393171730786_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/09/1541744139611307873_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/09/15417441402216441865_thumbnail_405x552.jpg']",
                                  "item_price": "USD 36.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Lace-up Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Side-Zipper-Boots-p-635739-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/09/1541744143146356020.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/09/15417441411747072812_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/09/1541744142819174379_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/09/15417441421493453979_thumbnail_405x552.jpg']",
                                  "item_price": "USD 33.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Side Zipper Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FLeopard-Print-Boots-p-636773-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/12/15420029781225760961.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/12/1542002977866733624_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/12/15420029774095666137_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/12/15420029781826672726_thumbnail_405x552.jpg']",
                                  "item_price": "USD 25.0",
                                  "store_name": "Shein",
                                  "item_title": "Leopard Print Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FFlower-Embroidery-Lace-up-Boots-p-636772-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/12/15420029474067397838.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/12/15420029453358866282_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/12/15420029452304386452_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/12/15420029463557104774_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/12/15420029464164783314_thumbnail_405x552.jpg']",
                                  "item_price": "USD 37.0",
                                  "store_name": "Shein",
                                  "item_title": "Flower Embroidery Lace-up Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Studded-Decor-Boots-p-636770-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/12/15420029532455021720.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/12/1542002952390691998_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/12/1542002952401763544_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/12/1542002953479598156_thumbnail_405x552.jpg']",
                                  "item_price": "USD 33.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Studded Decor Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSnakeskin-Print-Buckle-Decor-Boots-p-636765-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/12/1542002969502428373.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/12/1542002967836029837_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/12/15420029682993553537_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/12/15420029691390430399_thumbnail_405x552.jpg']",
                                  "item_price": "USD 41.0",
                                  "store_name": "Shein",
                                  "item_title": "Snakeskin Print Buckle Decor Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Back-Zipper-Boots-p-636766-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/12/15420029661204791354.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/12/1542002964441547065_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/12/15420029653765313887_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/12/1542002965664094313_thumbnail_405x552.jpg']",
                                  "item_price": "USD 22.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Back Zipper Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Sock-Boots-p-637671-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/13/15420945853486426529.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/13/1542094583272024968_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/13/1542094584829786483_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/13/15420945851221238883_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Sock Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Studded-Decor-Boots-p-638416-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/14/1542172943337819431.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/14/15421729411313103721_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/14/15421729421750182503_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/14/15421729424220950568_thumbnail_405x552.jpg']",
                                  "item_price": "USD 32.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Studded Decor Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Buckle-Decor-Boots-p-638415-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/14/1542172940941741762.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/14/1542172938562871965_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/14/1542172939976928341_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/14/15421729403705466450_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Buckle Decor Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FBuckle-Studded-Decor-Boots-p-638413-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/14/15421729343764854214.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/14/15421729323364678097_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/14/15421729334260796243_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/14/15421729334164663008_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Buckle & Studded Decor Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSnakeskin-Print-Knee-Length-Boots-p-639415-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/15/15422645681028014468.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/15/15422645672994856688_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/15/15422645672887440477_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/15/15422645684010697540_thumbnail_405x552.jpg']",
                                  "item_price": "USD 42.0",
                                  "store_name": "Shein",
                                  "item_title": "Snakeskin Print Knee Length Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FLace-up-Suede-Ankle-Boots-p-639349-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/19/15426149123540740837.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/19/15426149092443898812_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/19/15426149104084398781_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/19/154261491063289311_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/19/15426149113200101020_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/19/15426149122930512469_thumbnail_405x552.jpg']",
                                  "item_price": "USD 16.0",
                                  "store_name": "Shein",
                                  "item_title": "Lace-up Suede Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FStriped-Hem-Side-Zipper-Boots-p-639417-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/15/1542264575159266127.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/15/15422645733057417442_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/15/1542264573996000991_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/15/15422645743411355237_thumbnail_405x552.jpg']",
                                  "item_price": "USD 42.0",
                                  "store_name": "Shein",
                                  "item_title": "Striped Hem Side Zipper Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Buckle-Decor-Boots-p-639413-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/15/15422645623045535792.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/15/154226456189504278_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/15/15422645614199183212_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/15/15422645622034026498_thumbnail_405x552.jpg']",
                                  "item_price": "USD 22.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Buckle Decor Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Pointed-Toe-Socks-Boots-p-640747-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/20/15427032453149198047.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/20/15427032423528011427_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/20/15427032431189831460_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/20/15427032442736517164_thumbnail_405x552.jpg']",
                                  "item_price": "USD 24.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Pointed Toe Socks Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FZipper-Back-Kitten-Heeled-Ankle-Boots-p-640737-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/16/1542357007191139274.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/16/15423597772169738177_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/16/15423597791324544998_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/16/15423597804162283969_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Zipper Back Kitten Heeled Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FLetter-Detail-Block-Heeled-Boots-p-640738-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/16/1542357008473304416.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/16/15423598401466274387_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/16/15423598422695818489_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/16/1542359844539603848_thumbnail_405x552.jpg']",
                                  "item_price": "USD 29.0",
                                  "store_name": "Shein",
                                  "item_title": "Letter Detail Block Heeled Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FContrast-Faux-Fur-Slingback-Boots-p-640739-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/16/15423570093682994226.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/16/15423598912878097233_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/16/15423598922280416357_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/16/1542359893647640973_thumbnail_405x552.jpg']",
                                  "item_price": "USD 30.0",
                                  "store_name": "Shein",
                                  "item_title": "Contrast Faux Fur Slingback Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Side-Zipper-Block-Heeled-Boots-p-641210-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/19/15426078021651036718.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/19/1542608348231562490_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/19/15426083512138465577_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/19/15426083531922427335_thumbnail_405x552.jpg']",
                                  "item_price": "USD 33.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Side Zipper Block Heeled Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FCut-out-Cap-Toe-Ankle-Boots-p-641801-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882714053647396.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882692978689353_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882702732622079_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882701005707428_thumbnail_405x552.jpg']",
                                  "item_price": "USD 40.0",
                                  "store_name": "Shein",
                                  "item_title": "Cut-out Cap Toe Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Block-Heeled-Ankle-Boots-p-641820-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/23/15429613311073235434.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/23/15429613302311530465_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/23/1542961330462313308_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/23/1542961331325864469_thumbnail_405x552.jpg']",
                                  "item_price": "USD 35.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Block Heeled Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Thigh-High-Block-Heeled-Boots-p-641817-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/23/1542961334280439389.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/23/15429613321289840683_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/23/15429613332334421419_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/23/15429613331566465232_thumbnail_405x552.jpg']",
                                  "item_price": "USD 39.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Thigh High Block Heeled Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FStudded-Detail-Zipper-Back-Boots-p-641823-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882114051517569.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882103575687865_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882103437487573_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882111187770363_thumbnail_405x552.jpg']",
                                  "item_price": "USD 24.0",
                                  "store_name": "Shein",
                                  "item_title": "Studded Detail Zipper Back Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FContrast-Snakeskin-Pattern-Knee-High-Boots-p-641827-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882021440678706.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882013581009267_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882013959961191_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/1542788202331882404_thumbnail_405x552.jpg']",
                                  "item_price": "USD 37.0",
                                  "store_name": "Shein",
                                  "item_title": "Contrast Snakeskin Pattern Knee High Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Block-Heeled-Chelsea-Boots-p-641830-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/21/15427881912220718725.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/1542788189862913567_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427881903136462637_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/1542788190518610851_thumbnail_405x552.jpg']",
                                  "item_price": "USD 37.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Block Heeled Chelsea Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Thigh-High-Cap-Toe-Boots-p-641831-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/21/15427881943149292994.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427881923927327609_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427881924239820588_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427881931501767687_thumbnail_405x552.jpg']",
                                  "item_price": "USD 38.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Thigh High Cap Toe Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FCrocodile-Pattern-Block-Heeled-Ankle-Boots-p-641834-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/21/1542788181870233304.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427881802257782183_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427881802391829551_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427881811675835949_thumbnail_405x552.jpg']",
                                  "item_price": "USD 37.0",
                                  "store_name": "Shein",
                                  "item_title": "Crocodile Pattern Block Heeled Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSnakeskin-Pattern-Side-Zipper-Stiletto-Boots-p-641832-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/21/1542788197707073936.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427881951011395146_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427881953101306079_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427881962024225561_thumbnail_405x552.jpg']",
                                  "item_price": "USD 27.0",
                                  "store_name": "Shein",
                                  "item_title": "Snakeskin Pattern Side Zipper Stiletto Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Back-Zipper-Block-Heeled-Boots-p-641807-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/21/1542788245337376801.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/1542788243149496250_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882441124101614_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882453088529323_thumbnail_405x552.jpg']",
                                  "item_price": "USD 25.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Back Zipper Block Heeled Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Zipper-Side-Block-Heeled-Boots-p-641813-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2019/01/09/15470188343678984770.jpg', 'http://img.ltwebstatic.com/images2_pi/2019/01/09/15470188323643315450_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2019/01/09/15470188332950933983_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2019/01/09/15470188333275883699_thumbnail_405x552.jpg']",
                                  "item_price": "USD 21.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Zipper Side Block Heeled Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Knee-High-Block-Heeled-Boots-p-641814-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882423237745996.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882411892416651_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/1542788241299381869_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882423506904642_thumbnail_405x552.jpg']",
                                  "item_price": "USD 40.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Knee High Block Heeled Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FStudded-Detail-Zipper-Side-Boots-p-641808-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882484024140655.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/1542788246161118384_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882474031539404_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882473438825991_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Studded Detail Zipper Side Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Studded-Detail-Ankle-Boots-p-641809-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882511077871617.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882491004029126_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/1542788250998443284_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882503747221291_thumbnail_405x552.jpg']",
                                  "item_price": "USD 27.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Studded Detail Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Block-Heeled-Ankle-Boots-p-641810-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882532109147463.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882521048825291_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882522065413732_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/1542788253820858919_thumbnail_405x552.jpg']",
                                  "item_price": "USD 27.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Block Heeled Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FOver-The-Knee-Knit-Sneaker-Boots-p-641794-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882771271847058.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/1542788275453698519_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882763884820858_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882762709684437_thumbnail_405x552.jpg']",
                                  "item_price": "USD 43.0",
                                  "store_name": "Shein",
                                  "item_title": "Over The Knee Knit Sneaker Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FLeopard-Pattern-Side-Zipper-Boots-p-641790-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/21/1542788179301481563.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427881773321008932_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/1542788178969169257_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/1542788178181848175_thumbnail_405x552.jpg']",
                                  "item_price": "USD 37.0",
                                  "store_name": "Shein",
                                  "item_title": "Leopard Pattern Side Zipper Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FTassel-Detail-Zipper-Side-Boots-p-641796-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882802207303896.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882782714119696_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882781203805872_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882791087116885_thumbnail_405x552.jpg']",
                                  "item_price": "USD 25.0",
                                  "store_name": "Shein",
                                  "item_title": "Tassel Detail Zipper Side Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FLeopard-Pattern-Thigh-High-Boots-p-641805-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882623311680888.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/154278826129375599_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882611111115477_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882621779377917_thumbnail_405x552.jpg']",
                                  "item_price": "USD 31.0",
                                  "store_name": "Shein",
                                  "item_title": "Leopard Pattern Thigh High Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSnakeskin-Pattern-Block-Heeled-Ankle-Boots-p-641800-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882684276308220.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882662721115149_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882672262500490_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882683137487319_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Snakeskin Pattern Block Heeled Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSnakeskin-Print-Lace-up-Martin-Boots-p-641799-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882651959556192.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882642670178842_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/1542788264666407430_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/154278826531456226_thumbnail_405x552.jpg']",
                                  "item_price": "USD 40.0",
                                  "store_name": "Shein",
                                  "item_title": "Snakeskin Print Lace-up Martin Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FLeopard-Print-Lace-up-Boots-p-641803-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882742404189168.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882722064784080_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/1542788273845343223_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/154278827338928302_thumbnail_405x552.jpg']",
                                  "item_price": "USD 28.0",
                                  "store_name": "Shein",
                                  "item_title": "Leopard Print Lace-up Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FBuckle-Decor-Side-Zipper-Ankle-Boots-p-641798-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882823949700216.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882801504163064_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882812004998371_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882813876316491_thumbnail_405x552.jpg']",
                                  "item_price": "USD 33.0",
                                  "store_name": "Shein",
                                  "item_title": "Buckle Decor Side Zipper Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Cap-Toe-Knee-High-Boots-p-641804-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882594267492163.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/1542788258203916250_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882582992725934_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/21/15427882592849861096_thumbnail_405x552.jpg']",
                                  "item_price": "USD 31.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Cap Toe Knee High Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FBack-Zipper-Stiletto-Heeled-Boots-p-642547-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/07/15441708431716989594.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/07/1544170841155424989_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/07/15441708421939536355_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/07/1544170842240450052_thumbnail_405x552.jpg']",
                                  "item_price": "USD 25.0",
                                  "store_name": "Shein",
                                  "item_title": "Back Zipper Stiletto Heeled Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FGingham-Lace-Up-Chunky-Boots-p-642546-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/07/15441708403180374200.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/07/15441708381079167641_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/07/1544170839297286411_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/07/15441708403000453392_thumbnail_405x552.jpg']",
                                  "item_price": "USD 33.0",
                                  "store_name": "Shein",
                                  "item_title": "Gingham Lace Up Chunky Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FGlitter-Faux-Fur-Lined-Snow-Boots-p-648096-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/11/29/15434751163554496980.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/29/15434751144152207525_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/29/1543475114975870859_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/29/15434751152504099348_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/11/29/1543475115440725677_thumbnail_405x552.jpg']",
                                  "item_price": "USD 23.0",
                                  "store_name": "Shein",
                                  "item_title": "Glitter Faux Fur Lined Snow Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Lace-up-Boots-p-650153-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/04/15439023771232925533.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/04/15439023753575921545_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/04/15439023763468379300_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/04/1543902376357467383_thumbnail_405x552.jpg']",
                                  "item_price": "USD 27.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Lace-up Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FStudded-Decor-Side-Zipper-Boots-p-650154-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/04/15439023743545909411.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/04/15439023722787916435_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/04/1543902373595033215_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/04/1543902374601554239_thumbnail_405x552.jpg']",
                                  "item_price": "USD 36.0",
                                  "store_name": "Shein",
                                  "item_title": "Studded Decor Side Zipper Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlaid-Chunky-Heeled-Boots-p-649390-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/03/15438165771238193751.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/03/15438165752560903025_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/03/15438165764236671379_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/03/15438165763789199941_thumbnail_405x552.jpg']",
                                  "item_price": "USD 19.0",
                                  "store_name": "Shein",
                                  "item_title": "Plaid Chunky Heeled Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Chelsea-Boots-p-649391-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/03/154381656841044253.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/03/15438165672674599897_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/03/15438165671041296611_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/03/1543816568217681732_thumbnail_405x552.jpg']",
                                  "item_price": "USD 23.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Chelsea Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FBuckle-Decor-Side-Zipper-Boots-p-653641-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/07/15441627803663759874.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/07/15441627781755007218_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/07/15441627782607618414_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/07/15441627793317941730_thumbnail_405x552.jpg']",
                                  "item_price": "USD 28.0",
                                  "store_name": "Shein",
                                  "item_title": "Buckle Decor Side Zipper Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Lace-up-Boots-p-652420-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/06/15440757223790581849.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/06/15440757214187839703_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/06/1544075721175650421_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/06/15440757223979197636_thumbnail_405x552.jpg']",
                                  "item_price": "USD 37.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Lace-up Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FTwo-Tone-Side-Zipper-Boots-p-652422-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/06/1544075725148007130.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/06/15440757231909050835_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/06/1544075724821806224_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/06/1544075724485446160_thumbnail_405x552.jpg']",
                                  "item_price": "USD 32.0",
                                  "store_name": "Shein",
                                  "item_title": "Two Tone Side Zipper Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPoint-Toe-Chunky-Heeled-Boots-p-654632-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/07/15441690341197835811.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/07/15441690323212074349_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/07/1544169033164162908_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/07/15441690333360123312_thumbnail_405x552.jpg']",
                                  "item_price": "USD 29.0",
                                  "store_name": "Shein",
                                  "item_title": "Point Toe Chunky Heeled Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Lace-up-Chunky-Boots-p-654813-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/10/15444257562994992249.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/10/15444257553527838891_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/10/15444257553038805050_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/10/15444257563395284458_thumbnail_405x552.jpg']",
                                  "item_price": "USD 26.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Lace-up Chunky Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FLeopard-Print-Back-Zipper-Boots-p-654812-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/10/1544425759450442053.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/10/15444257571618146350_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/10/15444257581601599915_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/10/15444257592432188656_thumbnail_405x552.jpg']",
                                  "item_price": "USD 33.0",
                                  "store_name": "Shein",
                                  "item_title": "Leopard Print Back Zipper Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Lace-up-Boots-p-655525-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/11/15444990691781140248.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/11/1544499068970525280_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/11/1544499068371335479_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/11/15444990694224874750_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Lace-up Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Suede-Knee-Length-Boots-p-655526-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/11/15444990722620189712.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/11/1544499070737899110_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/11/1544499071683377193_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/11/15444990722479677815_thumbnail_405x552.jpg']",
                                  "item_price": "USD 39.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Suede Knee Length Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Lace-up-Suede-Boots-p-656962-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/12/1544596951705321014.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/12/1544596949973693828_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/12/15445969504188446416_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/12/15445969513422009134_thumbnail_405x552.jpg']",
                                  "item_price": "USD 31.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Lace-up Suede Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Knee-Length-Suede-Boots-p-656964-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/12/15445969571445439507.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/12/15445969553008267806_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/12/15445969563846825726_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/12/15445969561099001244_thumbnail_405x552.jpg']",
                                  "item_price": "USD 29.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Knee Length Suede  Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FStudded-Decor-Western-Ankle-Boots-p-658053-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/13/15446824474094408288.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/13/15446824451350610832_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/13/1544682446853897190_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/13/15446824462639509434_thumbnail_405x552.jpg']",
                                  "item_price": "USD 28.0",
                                  "store_name": "Shein",
                                  "item_title": "Studded Decor Western Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FBuckle-Design-Lace-up-Boots-p-658046-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/13/15446824443812625467.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/13/15446824411293946859_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/13/1544682442404397879_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/13/1544682443320586868_thumbnail_405x552.jpg']",
                                  "item_price": "USD 37.0",
                                  "store_name": "Shein",
                                  "item_title": "Buckle Design Lace-up Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSnakeskin-Pattern-Lace-up-Boots-p-658950-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/14/1544757727351220054.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/14/15447577252079692783_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/14/15447577263227255369_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/14/15447577272619745867_thumbnail_405x552.jpg']",
                                  "item_price": "USD 39.0",
                                  "store_name": "Shein",
                                  "item_title": "Snakeskin Pattern Lace-up Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Suede-Chunky-Boots-p-660946-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/18/154511385067781328.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/18/15451138482252424327_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/18/15451138492759846708_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/18/15451138504258424958_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Suede Chunky Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FLace-up-Point-Toe-Boots-p-660952-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/18/15451138403670139625.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/18/15451138381367840397_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/18/1545113839733360324_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/18/15451138393200748613_thumbnail_405x552.jpg']",
                                  "item_price": "USD 37.0",
                                  "store_name": "Shein",
                                  "item_title": "Lace-up Point Toe  Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSnakeskin-Pattern-Side-Zipper-Stiletto-Boots-p-662527-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/19/15452007723584542358.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/19/15452007713879318517_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/19/15452007713429927207_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/19/1545200772419683031_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Snakeskin Pattern Side Zipper Stiletto Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Pointed-Toe-Zipper-Side-Boots-p-664448-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2019/01/23/15482137923161142877.jpg', 'http://img.ltwebstatic.com/images2_pi/2019/01/23/15482138011957446925_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2019/01/23/15482137961497293355_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2019/01/23/15482137992416760032_thumbnail_405x552.jpg']",
                                  "item_price": "USD 33.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Pointed Toe Zipper Side Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlaid-Pattern-Ring-Decor-Boots-p-664430-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/21/15453738433658261774.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/21/15453738422183890339_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/21/15453738424093416349_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/21/1545373843595046095_thumbnail_405x552.jpg']",
                                  "item_price": "USD 23.0",
                                  "store_name": "Shein",
                                  "item_title": "Plaid Pattern Ring Decor Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FLeopard-Pattern-Ankle-Boots-p-664449-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2019/01/23/1548213840513099516.jpg', 'http://img.ltwebstatic.com/images2_pi/2019/01/23/15482138463781990540_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2019/01/23/15482138493298494984_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2019/01/23/15482138512378481703_thumbnail_405x552.jpg']",
                                  "item_price": "USD 31.0",
                                  "store_name": "Shein",
                                  "item_title": "Leopard Pattern Ankle Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Chunky-Boots-p-664720-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/24/15456284663729513159.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/24/1545628464330643244_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/24/15456284652897099768_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/24/15456284663342626621_thumbnail_405x552.jpg']",
                                  "item_price": "USD 35.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Chunky Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Block-Heeled-Suede-Boots-p-666324-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/25/15457216384087640476.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/25/15457216361326577107_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/25/15457216372627261823_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/25/1545721637153358049_thumbnail_405x552.jpg']",
                                  "item_price": "USD 33.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Block Heeled Suede Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FPlain-Front-Zipper-Boots-p-666699-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/26/15458065503798459224.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/26/15458065482089652160_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/26/1545806549446612268_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/26/15458065491344426067_thumbnail_405x552.jpg']",
                                  "item_price": "USD 27.0",
                                  "store_name": "Shein",
                                  "item_title": "Plain Front Zipper Boots"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FSolid-Point-Toe-Boots-p-667711-cat-1748.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/12/27/15458880852474538594.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/27/15458880842827164493_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/27/15458880843099515977_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/12/27/154588808525179353_thumbnail_405x552.jpg']",
                                  "item_price": "USD 34.0",
                                  "store_name": "Shein",
                                  "item_title": "Solid Point Toe Boots"
                                }
                              ],
                              "category_name": "Boots"
                            },
                            {
                              "category_image": "['http://img.ltwebstatic.com/images2_pi/2019/03/13/15524592733597201662.jpg', 'http://img.ltwebstatic.com/images2_pi/2019/03/13/15524615792105408049_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2019/03/13/15524592711927874541_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2019/03/13/1552459272528531546_thumbnail_405x552.jpg']",
                              "similar_items": [
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fjeans-3589%2Fp-1271062.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/43/AE/1299eda2-49db-4911-ae36-8b6cad518db4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/08/B3/e1cb0e3f-afed-4029-9bb9-b0321094f98b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4C/53/0b609307-42f6-44ff-a3cb-dda7dbe2b4cf.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/79/E5/5c9c9d6e-0c33-4937-bfab-65b567dd6bfc.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F8/5A/c657af38-fb34-4cf4-8bba-19d1a37eb715.jpg']",
                                  "item_price": "USD 63.99",
                                  "store_name": "Newchic",
                                  "item_title": "Men Long Hole Jean"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fjeans-3589%2Fp-1270781.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F2/62/3332b88c-b1c3-4e01-ba03-abb9af4be2b6.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/65/37/ea751713-db4b-405e-9571-527092106dfd.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AA/8B/ee0646b2-ac33-42c3-b8ee-6efa560bded6.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F9/4F/9b6ed0d8-ce0d-4ee6-a8e1-867033e90198.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/15/65/72608d8a-07c7-41af-91e5-de95c7502a4b.jpg']",
                                  "item_price": "USD 37.59",
                                  "store_name": "Newchic",
                                  "item_title": "32-38 Printing Elastic Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FFaded-Wash-Ripped-Raw-Hem-Jeans-p-499458-cat-1934.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/06/01/15278473072494656022.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/06/01/15278473051480980473_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/06/01/1527847306330904386_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/06/01/1527847306103828232_thumbnail_405x552.jpg']",
                                  "item_price": "USD 17.0",
                                  "store_name": "Shein",
                                  "item_title": "Faded Wash Ripped Raw Hem Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FBleach-Dye-Ripped-Raw-Hem-Jeans-p-499466-cat-1934.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/06/01/15278473102280435135.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/06/01/15278473082234606874_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/06/01/15278473081981874201_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/06/01/15278473092094508646_thumbnail_405x552.jpg']",
                                  "item_price": "USD 16.0",
                                  "store_name": "Shein",
                                  "item_title": "Bleach-Dye Ripped Raw Hem Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fjeans-3589%2Fp-1218288.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/53/81/193ce40f-e71b-4b1d-b956-5de74038fccf.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/06/AE/b795a4bc-11e9-4064-9a1d-ab31bccf6ade.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/69/E8/a3ebbb7f-c14a-413c-8c43-ba404e6cec04.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/95/21/55da78e1-86a5-4c16-ba7b-d61996983434.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9D/0E/1868a0e2-53c3-4586-9b4d-dc8856225566.jpg']",
                                  "item_price": "USD 38.05",
                                  "store_name": "Newchic",
                                  "item_title": "Winter Business Thicken Fleece Elasticly Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fjeans-3589%2Fp-1268281.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4B/F7/d99d3770-67e6-44f8-a107-5297fcc75515.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/yoins/images/1B/1B/5274beb8-47fc-467c-82be-bcb29b6d76fb.jpeg', 'https://img.chiccdn.com/thumb/view/oaupload/yoins/images/3A/2D/f176d22a-3737-44c8-ab3c-480216670a2d.jpeg', 'https://img.chiccdn.com/thumb/view/oaupload/yoins/images/3E/E3/5015b146-8ab1-4e06-b2de-fbeb7f228f87.jpeg', 'https://img.chiccdn.com/thumb/view/oaupload/yoins/images/AD/07/2b04d27d-5630-415f-ab00-e9edbb3ae087.jpeg']",
                                  "item_price": "USD 27.65",
                                  "store_name": "Newchic",
                                  "item_title": "Men Hole Ripped Jean"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FDark-Wash-Raw-Hem-Jeans-p-499469-cat-1934.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/06/01/15278473132551545355.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/06/01/15278473111903213108_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/06/01/1527847311435735032_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/06/01/1527847312123321316_thumbnail_405x552.jpg']",
                                  "item_price": "USD 15.0",
                                  "store_name": "Shein",
                                  "item_title": "Dark Wash Raw Hem Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FDrawstring-Waist-Ankle-Jeans-p-501298-cat-1934.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/06/04/15281009573512360083.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/06/04/15281009562210084759_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/06/04/1528100956984339368_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/06/04/1528100957760351404_thumbnail_405x552.jpg']",
                                  "item_price": "USD 11.0",
                                  "store_name": "Shein",
                                  "item_title": "Drawstring Waist Ankle Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FRaw-Hem-Wide-Leg-Jeans-p-501299-cat-1934.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/06/04/15281009521630465188.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/06/04/15281009483015878950_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/06/04/15281009484251582429_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/06/04/152810095036892786_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/06/04/152810095118013414_thumbnail_405x552.jpg']",
                                  "item_price": "USD 21.0",
                                  "store_name": "Shein",
                                  "item_title": "Raw Hem Wide Leg Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FStripe-Contrast-Drawstring-Jeans-p-497912-cat-1934.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/05/31/15277319831227756293.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/05/31/15277319811235787240_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/05/31/1527731982499560663_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/05/31/15277319823747587679_thumbnail_405x552.jpg']",
                                  "item_price": "USD 14.0",
                                  "store_name": "Shein",
                                  "item_title": "Stripe Contrast Drawstring Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FRipped-Skinny-Jeans-p-497909-cat-1934.html",
                                  "item_image": "['http://img.ltwebstatic.com/images2_pi/2018/05/31/15277319892174468390.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/05/31/15277319862940628140_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/05/31/15277319871615309611_thumbnail_405x552.jpg', 'http://img.ltwebstatic.com/images2_pi/2018/05/31/1527731988176744088_thumbnail_405x552.jpg']",
                                  "item_price": "USD 13.0",
                                  "store_name": "Shein",
                                  "item_title": "Ripped Skinny Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FRipped-Denim-Slim-Pant-p-234700-cat-1934.html",
                                  "item_image": "['http://img.shein.com/images/shein.com/201509/1443073692917729782.jpg', 'http://img.shein.com/images/shein.com/201509/1443073693805805805.jpg', 'http://img.shein.com/images/shein.com/201509/1443073693281622513.jpg', 'http://img.shein.com/images/shein.com/201509/1443073693068669943.jpg', 'http://img.shein.com/images/shein.com/201509/1443073694583165112.jpg']",
                                  "item_price": "USD 19.0",
                                  "store_name": "Shein",
                                  "item_title": "Destroyed Denim Slim Pant"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FDistressed-Skinny-Ankle-Jeans-Pants-p-270122-cat-1934.html",
                                  "item_image": "['http://img.shein.com/images/shein.com/201604/1459499490501348071.jpg', 'http://img.shein.com/images/shein.com/201604/1459499491967509713.jpg', 'http://img.shein.com/images/shein.com/201604/1459499491598674388.jpg', 'http://img.shein.com/images/shein.com/201604/1459499491147951206.jpg', 'http://img.shein.com/images/shein.com/201604/1459499491228095234.jpg']",
                                  "item_price": "USD 22.0",
                                  "store_name": "Shein",
                                  "item_title": "Distressed Skinny Ankle Jeans Pants"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FHigh-Waist-Denim-Slim-Pant-p-270065-cat-1934.html",
                                  "item_image": "['http://img.shein.com/images/201604/1459994025903156751.jpg', 'http://img.shein.com/images/201604/1459994041231628550.jpg', 'http://img.shein.com/images/shein.com/201604/1459994039175315395.jpg', 'http://img.shein.com/images/shein.com/201604/1459994040550715850.jpg', 'http://img.shein.com/images/shein.com/201604/1459994040999405293.jpg']",
                                  "item_price": "USD 16.0",
                                  "store_name": "Shein",
                                  "item_title": "High Waist Rolled Hem Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FBlue-High-Waist-Denim-Slim-Pant-p-270064-cat-1934.html",
                                  "item_image": "['http://img.shein.com/images/201604/1459994391074050167.jpg', 'http://img.shein.com/images/201604/1459994407720422413.jpg', 'http://img.shein.com/images/shein.com/201604/1459994406084565543.jpg', 'http://img.shein.com/images/shein.com/201604/1459994406932154399.jpg', 'http://img.shein.com/images/shein.com/201604/1459994406227062036.jpg']",
                                  "item_price": "USD 17.0",
                                  "store_name": "Shein",
                                  "item_title": "High Waist Denim Slim Pant"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FDistressed-Boyfriend-Ankle-Jeans-p-277891-cat-1934.html",
                                  "item_image": "['http://img.shein.com/images/201605/1462255083088686292.jpg', 'http://img.shein.com/images/201605/1462255098356401561_thumbnail_405x552.jpg', 'http://img.shein.com/images/201605/1462255099733280979_thumbnail_405x552.jpg', 'http://img.shein.com/images/201605/1462255099901223520_thumbnail_405x552.jpg']",
                                  "item_price": "USD 15.0",
                                  "store_name": "Shein",
                                  "item_title": "Distressed Boyfriend Ankle Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/1kjlqr06u0ad6ac57c19f0af71e07a/?i=5&ulp=http%3A%2F%2Fwww.shein.com%2FBlue-Bleached-Ripped-Pockets-Denim-Pant-p-207888-cat-1934.html",
                                  "item_image": "['http://img.shein.com/images/sheinside.com/201504/1428478901188858551.jpg', 'http://img.shein.com/images/sheinside.com/201504/1428478902641690211.jpg', 'http://img.shein.com/images/sheinside.com/201504/1428478902387336991.jpg', 'http://img.shein.com/images/sheinside.com/201504/1428478902479882043.jpg', 'http://img.shein.com/images/sheinside.com/201504/1428478902829238888.jpg']",
                                  "item_price": "USD 5.0",
                                  "store_name": "Shein",
                                  "item_title": "Bleached Ripped Pockets Denim Pants"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fjeans-3589%2Fp-1136240.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DD/EB/3ad28f0b-d9c1-4ec0-bda0-6e3ecb297986.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/77/3C/1ac072a1-2ac6-4cdb-8743-56f6ab58684a.png', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/91/46/20280968-6d2f-4250-8429-b6b7cb5773f2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EC/87/d3ac5c59-5da4-4bc6-a9d0-1529cf3407dc.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9C/CF/e6269cff-2b01-4e3f-ac2d-05a092e2982a.jpg']",
                                  "item_price": "USD 40.59",
                                  "store_name": "Newchic",
                                  "item_title": "Straight Leg Cotton Breathable Long Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fjeans-3589%2Fp-1104330.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BF/DF/cf6cd3d7-ef65-3818-dfc5-66c81244cb09.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BF/DF/df7a9cbb-0993-4768-88af-58f91d2cb27a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BF/DF/01724b71-fd14-e087-5add-e1c70c31d9ae.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BF/DF/cb074d7e-c61e-0e2b-22ac-e6f45d0311b5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BF/DF/6ae8e18c-b013-36d2-c3c8-33f4265e474e.jpg']",
                                  "item_price": "USD 23.26",
                                  "store_name": "Newchic",
                                  "item_title": "Winter Casual Business Thicken Cotton Slim Denim Straight Leg Mid-Waist Jean for Men"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fjeans-3589%2Fp-1118645.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/49/12/10ac3383-66c7-4ce7-b18d-fec66679a5a2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B8/D5/2814f57e-7f06-40e5-ad4f-d11c8d03d6dc.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/10/9F/1520dc89-a783-4ad0-ad74-3d969657847a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A0/47/e29aa169-17dc-4977-aa53-5106497f0e96.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BC/32/4a124949-00da-4b3d-9966-61fe85f9ff51.jpg']",
                                  "item_price": "USD 36.02",
                                  "store_name": "Newchic",
                                  "item_title": "Vintage Fashion Light Blue Worn Hole Printed Stone Washed Denim Ripped Jeans for Men"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fjeans-3589%2Fp-1119336.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/76/98/a705663f-2b11-4450-8dea-212b819a21e2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2F/EA/ffb6bcfa-62cc-4435-84d4-4cb6e19543db.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E4/2C/1b86f52b-bca9-48e9-b51b-9d60269e56bd.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/51/93/ee8638c2-ba05-4a09-ba9c-f11276c3d377.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4D/9D/d9d540af-b2da-4cc0-b98e-fc7c749b5b07.jpg']",
                                  "item_price": "USD 32.46",
                                  "store_name": "Newchic",
                                  "item_title": "Stone Washed Biker Jeans for Men"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fjeans-3589%2Fp-1067089.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/79/B0/966aadb2-3abe-4a85-b88c-dd1832e72c7e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/79/B0/89abc6a8-3e12-4898-b423-82846a56d680.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/79/B0/c5a9fbc4-83e2-41c5-9ef0-2689926c2d22.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/79/B0/61bfee41-213d-4324-9d85-12055b7c4f02.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/79/B0/d1df1fbb-50bb-4ffe-9cea-62beb5c10a59.jpg']",
                                  "item_price": "USD 32.56",
                                  "store_name": "Newchic",
                                  "item_title": "Plus Size Shorts Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fjeans-3589%2Fp-1083747.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/35/56/b8b90796-1a76-4567-b2be-72e1cd20c817.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0C/AD/0e628801-0559-8e2c-bd4b-51e9188fccab.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0C/AD/1f8932c2-5e2e-8cc1-2e93-1e300c993ec2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0C/AD/ad070e96-913c-fb36-f217-f280ba25fe1a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0C/AD/57cee193-0f5b-1eae-3ab8-293e7ac8b1bf.jpg']",
                                  "item_price": "USD 29.99",
                                  "store_name": "Newchic",
                                  "item_title": "Plus Size Casaul Denim Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fjeans-3589%2Fp-1067541.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7E/7E/c7d18ce0-f09c-429b-86ab-d0e9a9b36846.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7E/7E/a7a829dc-4d72-46cb-a63b-adcf65c904d2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7E/7E/96fff331-6fd0-4b23-971b-101fdb05d715.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7E/7E/c9324a42-c254-4f09-b101-10723c06615f.png', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7E/7E/2fd57027-c255-4cce-bcea-be6974c2d85f.png']",
                                  "item_price": "USD 33.6",
                                  "store_name": "Newchic",
                                  "item_title": "Summer Overknee Stylish Worn Hole Jeans Stone Washed Denim Shorts For Men"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fjeans-3589%2Fp-1040377.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BF/5A/4f203843-9f3b-5a11-1944-f0f1724885f6.png', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BF/5A/0c628ed8-256d-98ba-4f9a-f80965219f34.png', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BF/5A/da75fbb8-e0ac-d13a-4751-d33571ca8519.png', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BF/5A/81353834-e2f0-57bd-40f9-63310287c21f.png', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BF/5A/0474a852-f1a0-de9c-850c-3cb8768ce80c.png']",
                                  "item_price": "USD 36.24",
                                  "store_name": "Newchic",
                                  "item_title": "Washed Biker Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fjeans-3589%2Fp-1067766.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/14/BF/3d365646-6ec1-4448-add1-d09cb72f0072.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/14/BF/b87143df-98b2-47fd-99ad-afc377fd37e1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/14/BF/8f7154a0-d5f9-4ef3-a04f-4433a6f2196a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/14/BF/56781c4e-e9a2-441e-9836-c28d0f8aec76.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/50/F2/927d486a-2435-8283-edb1-5fac744bd60a.jpg']",
                                  "item_price": "USD 46.25",
                                  "store_name": "Newchic",
                                  "item_title": "Big Size Denims Shorts For Men"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fjeans-3589%2Fp-1064276.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/51/F6/3bc9f0c8-3dba-4882-b7be-e55e59899efb.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/51/F6/e5f38a0b-864a-426a-8847-247bf04526b7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/51/F6/d5cb4534-3f29-475a-a16d-f26ca0d6437b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/51/F6/d36f5d30-cfde-4431-aa85-a314f78fd3e2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/51/F6/5334fd2c-7f20-42bd-85f4-f97705a607f4.png']",
                                  "item_price": "USD 48.87",
                                  "store_name": "Newchic",
                                  "item_title": "Thin Loose Straight Leg Multi-Pockets Plus Size Elastic Jean"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/3y6iwoo3oyad6ac57c1964f10e1b76/?i=5&ulp=https%3A%2F%2Fwww.berrylook.com%2Fen%2FProducts%2FEmbroidery-Patch-Pocket-Slim-Leg-Jeans-195694.html",
                                  "item_image": "https://bl.aopcdn.com/goods/A46769B128C2/3108431_1.jpg@!h400-w300",
                                  "item_price": "USD 23.95",
                                  "store_name": "Berrylook",
                                  "item_title": "Embroidery Patch Pocket Slim-Leg Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/75hew036lxad6ac57c193fd583150e/?i=5&ulp=https%3A%2F%2Fwww.tidebuy.com%2Fproduct%2FSlim-Plain-Bead-Pencil-Pants-Womens-Jeans-13553087.html",
                                  "item_image": "https://ss.tidebuy.com/images/product/13/13553/13553087_1_800x800.jpg",
                                  "item_price": "USD 29.99",
                                  "store_name": "Tidebuy",
                                  "item_title": "Slim Plain Bead Pencil Pants Elastic Womens Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/75hew036lxad6ac57c193fd583150e/?i=5&ulp=https%3A%2F%2Fwww.tidebuy.com%2Fproduct%2FSlim-Bead-Hole-Ripped-Washable-Womens-Jeans-13397604.html",
                                  "item_image": "https://ss.tidebuy.com/images/product/13/13397/13397604_1_800x800.jpg",
                                  "item_price": "USD 33.99",
                                  "store_name": "Tidebuy",
                                  "item_title": "Slim Bead Hole Ripped Washable Womens Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/75hew036lxad6ac57c193fd583150e/?i=5&ulp=https%3A%2F%2Fwww.tidebuy.com%2Fproduct%2FPencil-Pants-Plain-Hole-Mid-Waist-Skinny-Womens-Jeans-13757704.html",
                                  "item_image": "https://ss.tidebuy.com/images/product/13/13757/13757704_1_800x800.jpg",
                                  "item_price": "USD 24.99",
                                  "store_name": "Tidebuy",
                                  "item_title": "Pencil Pants Plain Hole Mid-Waist Skinny Womens Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/75hew036lxad6ac57c193fd583150e/?i=5&ulp=https%3A%2F%2Fwww.tidebuy.com%2Fproduct%2FPlain-Pencil-Pants-Pocket-Button-Skinny-Womens-Jeans-13757223.html",
                                  "item_image": "https://ss.tidebuy.com/images/product/13/13757/13757223_1_800x800.jpg",
                                  "item_price": "USD 19.99",
                                  "store_name": "Tidebuy",
                                  "item_title": "Plain Pencil Pants Pocket Button Skinny Womens Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/75hew036lxad6ac57c193fd583150e/?i=5&ulp=https%3A%2F%2Fwww.tidebuy.com%2Fproduct%2FHigh-Wasit-Button-Skinny-Worn-Womens-Jeans-13446418.html",
                                  "item_image": "https://ss.tidebuy.com/images/product/13/13446/13446418_1_800x800.jpg",
                                  "item_price": "USD 27.99",
                                  "store_name": "Tidebuy",
                                  "item_title": "High Wasit Button Skinny Worn Womens Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/75hew036lxad6ac57c193fd583150e/?i=5&ulp=https%3A%2F%2Fwww.tidebuy.com%2Fproduct%2FBig-Size-Skinny-Worn-Hole-Jeans-12931502.html",
                                  "item_image": "https://ss.tidebuy.com/images/product/12/12931/12931502_4_800x800.jpg",
                                  "item_price": "USD 24.99",
                                  "store_name": "Tidebuy",
                                  "item_title": "Big Size Skinny Worn Hole Womens Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/75hew036lxad6ac57c193fd583150e/?i=5&ulp=https%3A%2F%2Fwww.tidebuy.com%2Fproduct%2FPlain-Wide-Legs-Loose-Mid-Waist-Womens-Jeans-13747644.html",
                                  "item_image": "https://ss.tidebuy.com/images/product/13/13747/13747644_1_800x800.jpg",
                                  "item_price": "USD 28.99",
                                  "store_name": "Tidebuy",
                                  "item_title": "Plain Wide Legs Loose Denim Bellbottoms Womens Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/75hew036lxad6ac57c193fd583150e/?i=5&ulp=https%3A%2F%2Fwww.tidebuy.com%2Fproduct%2FPencil-Pants-Plain-Button-High-Waist-Womens-Jeans-13757193.html",
                                  "item_image": "https://ss.tidebuy.com/images/product/13/13757/13757193_1_800x800.jpg",
                                  "item_price": "USD 23.99",
                                  "store_name": "Tidebuy",
                                  "item_title": "Pencil Pants Plain Button High Waist Womens Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/75hew036lxad6ac57c193fd583150e/?i=5&ulp=https%3A%2F%2Fwww.tidebuy.com%2Fproduct%2FBig-Size-Skinny-Plain-Pencil-Pants-Worn-Hole-Jeans-12931483.html",
                                  "item_image": "https://ss.tidebuy.com/images/product/12/12931/12931483_1_800x800.jpg",
                                  "item_price": "USD 22.99",
                                  "store_name": "Tidebuy",
                                  "item_title": "Big Size Skinny Plain Pencil Pants Worn Hole Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/75hew036lxad6ac57c193fd583150e/?i=5&ulp=https%3A%2F%2Fwww.tidebuy.com%2Fproduct%2FPencil-Pants-Hole-Mid-Waist-Zipper-Womens-Jeans-13690990.html",
                                  "item_image": "https://ss.tidebuy.com/images/product/13/13690/13690990_1_800x800.jpg",
                                  "item_price": "USD 27.99",
                                  "store_name": "Tidebuy",
                                  "item_title": "Plus Size Pencil Pants Hole Mid Waist Zipper Womens Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/75hew036lxad6ac57c193fd583150e/?i=5&ulp=https%3A%2F%2Fwww.tidebuy.com%2Fproduct%2FPlain-Slim-Hole-Pencil-Pants-Womens-Jeans-13537081.html",
                                  "item_image": "https://ss.tidebuy.com/images/product/13/13537/13537081_1_800x800.jpg",
                                  "item_price": "USD 21.99",
                                  "store_name": "Tidebuy",
                                  "item_title": "Plain Slim Hole Washable Worn Womens Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/75hew036lxad6ac57c193fd583150e/?i=5&ulp=https%3A%2F%2Fwww.tidebuy.com%2Fproduct%2FHole-Embroidery-Pencil-Pants-Jeans-12904099.html",
                                  "item_image": "https://ss.tidebuy.com/images/product/12/12904/12904099_3_800x800.jpg",
                                  "item_price": "USD 34.99",
                                  "store_name": "Tidebuy",
                                  "item_title": "Hole Embroidery Pencil Pants Womens Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/75hew036lxad6ac57c193fd583150e/?i=5&ulp=https%3A%2F%2Fwww.tidebuy.com%2Fproduct%2FRevers-Pencil-Pants-Plain-Mid-Waist-Slim-Womens-Jeans-13757192.html",
                                  "item_image": "https://ss.tidebuy.com/images/product/13/13757/13757192_1_800x800.jpg",
                                  "item_price": "USD 21.99",
                                  "store_name": "Tidebuy",
                                  "item_title": "Revers Pencil Pants Washable Mid Waist Slim Womens Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/75hew036lxad6ac57c193fd583150e/?i=5&ulp=https%3A%2F%2Fwww.tidebuy.com%2Fproduct%2FWorn-Pencil-Pants-Plain-Slim-Womens-Jeans-13681806.html",
                                  "item_image": "https://ss.tidebuy.com/images/product/13/13681/13681806_1_800x800.jpg",
                                  "item_price": "USD 22.99",
                                  "store_name": "Tidebuy",
                                  "item_title": "Worn Pencil Pants Plain Slim Womens Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/75hew036lxad6ac57c193fd583150e/?i=5&ulp=https%3A%2F%2Fwww.tidebuy.com%2Fproduct%2FPencil-Pants-Plain-Button-High-Waist-Slim-Womens-Jeans-13647254.html",
                                  "item_image": "https://ss.tidebuy.com/images/product/13/13647/13647254_1_800x800.jpg",
                                  "item_price": "USD 21.99",
                                  "store_name": "Tidebuy",
                                  "item_title": "Hole Worn Plain Button Low Waist Slim Womens Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/75hew036lxad6ac57c193fd583150e/?i=5&ulp=https%3A%2F%2Fwww.tidebuy.com%2Fproduct%2FColor-Block-Patchwork-Skinny-Mid-Waist-Pencil-Pants-Womens-Jeans-13487756.html",
                                  "item_image": "https://ss.tidebuy.com/images/product/13/13487/13487756_1_800x800.jpg",
                                  "item_price": "USD 23.99",
                                  "store_name": "Tidebuy",
                                  "item_title": "Washable Skinny Mid-Waist Hole Womens Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/75hew036lxad6ac57c193fd583150e/?i=5&ulp=https%3A%2F%2Fwww.tidebuy.com%2Fproduct%2FBig-Size-Slim-Bellbottoms-Worn-Hole-Jeans-12931481.html",
                                  "item_image": "https://ss.tidebuy.com/images/product/12/12931/12931481_5_800x800.jpg",
                                  "item_price": "USD 24.99",
                                  "store_name": "Tidebuy",
                                  "item_title": "Big Size Slim Bellbottoms Worn Hole Womens Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/75hew036lxad6ac57c193fd583150e/?i=5&ulp=https%3A%2F%2Fwww.tidebuy.com%2Fproduct%2FAnkle-Length-Button-Womens-Jean-13152112.html",
                                  "item_image": "https://ss.tidebuy.com/images/product/13/13152/13152112_7_800x800.jpg",
                                  "item_price": "USD 14.99",
                                  "store_name": "Tidebuy",
                                  "item_title": "Ankle Length Button Hole Worn Womens Jean"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/75hew036lxad6ac57c193fd583150e/?i=5&ulp=https%3A%2F%2Fwww.tidebuy.com%2Fproduct%2FLow-Waist-Washable-Womens-Ripped-Jeans-12579798.html",
                                  "item_image": "https://ss.tidebuy.com/images/product/12/12579/12579798_1_800x800.jpg",
                                  "item_price": "USD 15.99",
                                  "store_name": "Tidebuy",
                                  "item_title": "Low-Waist Washable Ripped Cheap Womens Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/3y6iwoo3oyad6ac57c1964f10e1b76/?i=5&ulp=https%3A%2F%2Fwww.berrylook.com%2Fen%2FProducts%2FDistressed-Embroidery-Raw-Hem-Slim-Leg-Jeans-195971.html",
                                  "item_image": "https://bl.aopcdn.com/goods/8375EE82D01C/3108432_1.jpg@!h400-w300",
                                  "item_price": "USD 24.95",
                                  "store_name": "Berrylook",
                                  "item_title": "Distressed Embroidery Raw-Hem Slim-Leg Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/pzwp2neyhyad6ac57c196a95c12d58/?i=5&ulp=http%3A%2F%2Fwww.dhgate.com%2Fproduct%2F2nnmmdd-r2-eva-store-children-sandals-shoes%2F404893630.html",
                                  "item_image": "http://image.dhgate.com/600x600/f2/albu/g9/M00/F7/3B/rBVaWFwfuvuASSfuAAHFB2U08Pw001.jpg",
                                  "item_price": "USD 145.35",
                                  "store_name": "DHgate",
                                  "item_title": "Eva store AA JJ perfect version"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/pzwp2neyhyad6ac57c196a95c12d58/?i=5&ulp=http%3A%2F%2Fwww.dhgate.com%2Fproduct%2F2eqt-high-version-eva-store-payment-link%2F408598774.html",
                                  "item_image": "http://image.dhgate.com/600x600/f2/albu/g6/M01/09/C7/rBVaSFpTEliAfs6RAAERmY4XxKg367.jpg",
                                  "item_price": "USD 85.0",
                                  "store_name": "DHgate",
                                  "item_title": "Eva Store OxW children"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/pzwp2neyhyad6ac57c196a95c12d58/?i=5&ulp=http%3A%2F%2Fwww.dhgate.com%2Fproduct%2Ftopyeezy-store-payment-link-for-shoe-or-find%2F432339363.html",
                                  "item_image": "http://image.dhgate.com/600x600/f2/albu/g6/M00/DE/2D/rBVaSFvjMi2ANXPbAAM2ptLt6OQ34.jpeg",
                                  "item_price": "USD 167.32",
                                  "store_name": "DHgate",
                                  "item_title": "topyeezy store payment link for shoe , or find product by yourself, or other product."
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/pzwp2neyhyad6ac57c196a95c12d58/?i=5&ulp=http%3A%2F%2Fwww.dhgate.com%2Fproduct%2F2018-uubb-4-0-eva-store-brand-new-high-quality%2F407556639.html",
                                  "item_image": "http://image.dhgate.com/600x600/f2/albu/g8/M01/04/20/rBVaVFwdBFKAX6YjAAFm9mOaW18723.jpg",
                                  "item_price": "USD 88.88",
                                  "store_name": "DHgate",
                                  "item_title": "2018 UUBB 4.0 Eva Store, realboost Brand New high quality, drop shipping"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/pzwp2neyhyad6ac57c196a95c12d58/?i=5&ulp=http%3A%2F%2Fwww.dhgate.com%2Fproduct%2Fnew-2018-fashion-kids-boot-cut-jeans-girls%2F408310241.html",
                                  "item_image": "http://image.dhgate.com/600x600/f2/albu/g6/M00/8B/B7/rBVaR1pF9GCAD72XAAMVUGE9d50273.jpg",
                                  "item_price": "USD 11.6",
                                  "store_name": "DHgate",
                                  "item_title": "New 2018 Fashion Kids Boot Cut Jeans Girls Bell-Bottoms Trousers Baby Girls Blet PU Leather Pants Children PantyhoseTights Long Pants"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/pzwp2neyhyad6ac57c196a95c12d58/?i=5&ulp=http%3A%2F%2Fwww.dhgate.com%2Fproduct%2F85uubb-children-shoes-casual-2017-2%2F401131123.html",
                                  "item_image": "http://image.dhgate.com/600x600/f2/albu/g5/M00/F7/C8/rBVaJFmC7pWALew1AAHwTH8_T9E648.jpg",
                                  "item_price": "USD 159.0",
                                  "store_name": "DHgate",
                                  "item_title": "Eva FW18 Track children kid shoes Casual 2018 Free Shipping 2 or more pairs"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/pzwp2neyhyad6ac57c196a95c12d58/?i=5&ulp=http%3A%2F%2Fwww.dhgate.com%2Fproduct%2F2016-baby-girl-striped-clothing-sets-autumn%2F391402679.html",
                                  "item_image": "http://image.dhgate.com/600x600/f2/albu/g4/M01/FC/CF/rBVaEFf6C1CAP30KAAKRd02XSw0437.jpg",
                                  "item_price": "USD 15.0",
                                  "store_name": "DHgate",
                                  "item_title": "2016 Baby Girl Striped Clothing Sets Autumn & Spring Brand Children Sport Suits Hoodie Pants Cartoon Cat Kids TwinsetsChildren&#039;s clothing"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/pzwp2neyhyad6ac57c196a95c12d58/?i=5&ulp=http%3A%2F%2Fwww.dhgate.com%2Fproduct%2F85eqt-eva-store-children-shoes%2F399229327.html",
                                  "item_image": "http://image.dhgate.com/600x600/f2/albu/g9/M00/37/4D/rBVaVVwPGniAUxVdAACzp4rIc20288.jpg",
                                  "item_price": "USD 155.81",
                                  "store_name": "DHgate",
                                  "item_title": "Eva Store children Jeans 2018"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/pzwp2neyhyad6ac57c196a95c12d58/?i=5&ulp=http%3A%2F%2Fwww.dhgate.com%2Fproduct%2Feva-store-85uubb-2-uncaged-children-kid-shoe%2F409660291.html",
                                  "item_image": "http://image.dhgate.com/600x600/f2/albu/g7/M01/8E/65/rBVaSVqE-vmAdEqZAANbgvQmXrQ672.jpg",
                                  "item_price": "USD 139.43",
                                  "store_name": "DHgate",
                                  "item_title": "Eva Store 85UUBB 2 uncaged children shoe"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/pzwp2neyhyad6ac57c196a95c12d58/?i=5&ulp=http%3A%2F%2Fwww.dhgate.com%2Fproduct%2Feva-store-v2-shoe-2017-free-dhl-ems-aramex%2F411364180.html",
                                  "item_image": "http://image.dhgate.com/600x600/f2/albu/g9/M01/D1/9B/rBVaWFwc_9KAEovOAAD7cPD_FxA233.jpg",
                                  "item_price": "USD 80.0",
                                  "store_name": "DHgate",
                                  "item_title": "Eva Store V2, 2017 free DHL EMS Aramex over 2 pairs"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FDark-Blue-Random-Ripped-Details-Middle-Waisted-Jeans-p-1421643.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F4/30/486578c2-f1c1-4b9d-8c4b-b6ac9f01ee0e.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/DE/C7/de8ad4f6-3b7e-42e7-8b25-c5d792ddff38.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/5D/CC/2f75e94d-52e5-478b-bdfd-ac0ccaab51b1.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/86/91/f02e3ff6-317c-4e85-a4b7-6859c44664eb.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/06/6A/0798c9a7-cf6b-49a7-b2ef-1812378e6ab4.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/49/FB/71450287-9e13-4e41-9757-93622f691f60.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/26/B8/14195c50-32e8-4477-b0dc-c5bcfb0ce4c2.jpg']",
                                  "item_price": "USD 19.95",
                                  "store_name": "Yoins",
                                  "item_title": "Dark Blue Random Ripped Details Middle-Waisted Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FDark-Blue-Ripped-Side-Strip-Drawstring-Waist-Jean-p-1423320.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/43/42/64561ce0-6b62-41e4-9fcf-f5e69a475c9c.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/3F/A9/c2e4f332-0097-42fa-a91f-3a81be1d77fe.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/4C/78/aed95f23-8690-4760-92b9-4d366c039937.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/8F/F9/db5a6602-8753-45ec-954f-0e0b1a045d61.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/38/18/ab3f342f-b73d-49b8-a7ab-ed542c47eadf.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/37/51/1a177a9b-63a9-426a-9dec-e9ce863723d0.jpg']",
                                  "item_price": "USD 19.95",
                                  "store_name": "Yoins",
                                  "item_title": "Dark Blue Ripped Side Strip Drawstring Waist Jean"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlue-Random-Ripped-Details-Bleached-Jeans-p-1396315.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/CA/AC/74ab47ac-2084-4ea2-a306-47b2e9a7487d.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/66/E6/a6e41e34-aa53-4659-b2a1-f9fbf87f4e0b.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/92/FA/177077f9-d295-40fb-aa48-c5445d1fc6f2.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/03/43/00a33ac8-c4fc-483b-b314-c4f5b09674a7.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/1E/BD/0124ce95-d2e5-484c-82b7-0e305ea41bd4.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9C/C7/c3260c31-5e48-4649-b5f6-b40448f2e95e.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/08/68/1ed40f49-a7c5-4bc7-8a0b-d43f9d933c4c.jpeg']",
                                  "item_price": "USD 17.95",
                                  "store_name": "Yoins",
                                  "item_title": "Blue Random Ripped Details Bleached Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlue-Random-Ripped-Details-Classic-Five-Pockets-Denim-Jeans-p-1377475.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BF/05/cbf59406-22f8-44b6-8387-72b77e189a2f.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/2D/D9/0d4bd953-340c-49df-8a3a-8e3fa51b1d9e.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/60/16/e23b7da6-ee70-4b99-94c4-ffb66392ff53.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/69/0F/4b4a1c07-1dd7-468d-8494-7828577c32b0.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/3F/8F/f499ae29-257f-4720-b081-4fe343d16568.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/AB/7B/09a5914f-7739-4a53-9a5a-a5a80352e1f3.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/B4/BA/d716a30f-f356-4c27-bc57-d44644235773.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/65/F4/ca57cb24-39de-455e-9deb-ed3e7e84931f.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/29/6D/c7b85bdc-9513-4a55-a75d-b3a49cbccb6b.jpg']",
                                  "item_price": "USD 15.95",
                                  "store_name": "Yoins",
                                  "item_title": "Blue Random Ripped Details Classic Five Pockets Denim Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FSky-Blue-Plain-Mid-Waist-Bodycon-Jeans-p-1378191.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/76/88/40c2ee6b-6e2e-43aa-ae48-ece6966f7b1f.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/4C/39/38123d54-de17-4918-b69a-7637b862583f.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/5E/7B/bfcbfb62-3e48-4d73-b223-1ef1c0a57a15.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/26/A9/f6dea986-c449-4ba5-9b89-4e4f1056174f.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A9/C7/2cd7e90e-85a4-4f99-99e1-c0d46d1c71f9.jpg']",
                                  "item_price": "USD 17.95",
                                  "store_name": "Yoins",
                                  "item_title": "Sky Blue Plain Mid Waist Bodycon Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Ripped-Details-Middle-waisted-Skinny-Jeans-p-1251307.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/CA/9D/9989d610-3f55-4c64-a744-e070d9473720.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/02/12/48ed132b-815f-4fe6-8eb6-46914e28de64.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/06/B9/3767b698-a154-4059-9c8a-2896a27b0c1f.jpg']",
                                  "item_price": "USD 19.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Ripped Details Middle-waisted Skinny Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlue-Retro-High-rise-Rips-Details-Jeans-p-1206347.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/0F/00/3edb1431-a7ec-4aa3-9566-c1b85547ee30.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/28/BA/27293982-42e8-4adb-b2cd-61c0f74fb7fd.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F1/E7/19c3f181-8081-46cb-9ba5-cfa728f1f512.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/68/B8/2c4f61cf-c05c-4998-8dba-690c9720f87a.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/50/FC/c5db46e0-fea2-4d9f-9eb9-162a565bc688.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/7B/9C/9643df32-5f05-4faa-b952-855141d8cdd3.jpeg']",
                                  "item_price": "USD 20.95",
                                  "store_name": "Yoins",
                                  "item_title": "Blue Retro High-rise Rips Details Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlue-Classic-Random-Ripped-Details-Middle-Waisted-Jeans-p-1421642.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/0D/5C/5d4d8e08-970c-4c18-9ede-b6523807810a.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/49/23/38655d70-2b24-46f9-82db-250224524a1a.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/DE/B6/71073239-aa8e-4b4c-80ce-bc35087a719d.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/40/64/f8431465-7494-4bba-af7d-bf88860c6170.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/B0/A4/527ab408-615e-46fa-b4c9-94e1b46ed2e2.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C2/B6/eca4a719-5b52-499c-9162-717a04c95013.jpg']",
                                  "item_price": "USD 19.95",
                                  "store_name": "Yoins",
                                  "item_title": "Blue Classic Random Ripped Details Middle-Waisted Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlue-Random-Ripped-Details-Skinny-Jean-p-1406821.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/B1/F5/e3a2095c-a285-4840-aaea-cb149bc7bbf1.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/3D/55/8c37a037-806b-47c6-b2f0-80115bb82c61.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/1B/CC/d538c669-ed77-4107-982a-597fae7fbc3c.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/17/86/8f986285-d942-4bb3-912f-f32c71db2752.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/32/90/e8e6265a-121e-48e6-af13-74a25c3e0f03.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/37/65/8bfb748a-3b47-4f23-ae3c-f8760c01c4c4.jpg']",
                                  "item_price": "USD 19.95",
                                  "store_name": "Yoins",
                                  "item_title": "Blue Random Ripped Details Skinny Jean"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Side-Pockets-Fashion-Bodycon-Jeans-p-1385913.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/62/41/b03af909-e592-456c-9cec-76fb6cd93abf.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/24/1F/02072442-eb25-4cd8-bb96-f24a31cccef0.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/45/92/4e59ebf1-0f38-448c-bbb2-dea4660e5eb0.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/2C/F5/b06a636c-c85f-4037-bf23-4de79e6a05cb.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F2/5C/f9b24181-d9f8-48b1-bb9f-0c682e1b0966.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/14/2F/7a6d925b-6aa7-4a34-90cf-4111cfc7d942.jpg']",
                                  "item_price": "USD 23.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Side Pockets Fashion Bodycon Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Random-Ripped-Details-High-Waisted-Skinny-Jeans-p-1380004.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/53/B8/08868b47-1d36-4019-a623-af7012025618.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/EE/F9/344102e8-aa5e-42ec-a0af-0bb3e83e69f1.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C2/B8/e91cc206-e744-4b1c-9df5-3aba2b91b1ed.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A9/A5/5b4b2705-2e11-41ba-8110-2faa3ed9b68a.jpg']",
                                  "item_price": "USD 23.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Random Ripped Details High Waisted Skinny Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlue-Random-Ripped-Details-Mid-Waist-Jeans-p-1379378.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A8/02/4d54e5fe-1534-4c4b-9db0-b397629a691c.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/4E/11/2c5f2e14-d0ee-416f-a3aa-f0bb056c7f31.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/87/DB/1f19bcc1-75fa-41a0-972d-66f0a3efc836.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/CC/C9/0b01559a-4e12-4912-accf-db3faa8888e8.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/42/A4/8ebb7108-66d6-4032-a7e3-a37684ef624b.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/61/E1/844b7c63-8086-48d7-b3de-58fa16d00136.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BE/A7/4ab46fa2-e382-4b4f-b0da-f8e0947639d0.jpg']",
                                  "item_price": "USD 18.95",
                                  "store_name": "Yoins",
                                  "item_title": "Blue Random Ripped Details Mid Waist Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlue-Classic-Five-Pockets-Asymmetrical-Hem-Casual-Denim-Jeans-p-1380009.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/52/B5/d540dbfd-9bcf-4064-8beb-54fc9b9f753e.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/4C/2D/c0075677-e5a4-4dbe-9c09-5893d1aacb93.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/13/39/124ec77d-fd66-425f-9865-9978bb8613a5.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/DD/BC/0e861160-c554-44ab-bb6a-379166bfd493.jpg']",
                                  "item_price": "USD 20.95",
                                  "store_name": "Yoins",
                                  "item_title": "Blue Classic Five Pockets Asymmetrical Hem Casual Denim Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FCasual-Blue-Random-Ripped-Details-Denim-Jeans-p-1383872.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/EF/88/c5cc38f7-acdb-4b28-9351-8e1307a344df.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/0A/CF/25a844e2-74af-414f-86e2-efe976933cad.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F6/0E/1e7dcd5e-c0ea-46b8-af6f-67d235ede979.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/FC/05/566db521-4ec4-4844-a32e-7b0fd7a5b8df.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C5/3F/3010376c-cde6-4a81-bdc5-5b5b72686089.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/30/6A/f4906f30-1206-4873-b92c-4d1e4457ac0b.jpeg']",
                                  "item_price": "USD 17.95",
                                  "store_name": "Yoins",
                                  "item_title": "Casual Blue Random Ripped Details Denim Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FLight-Blue-Side-Pockets-Fashion-Bodycon-Jeans-p-1380005.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/DF/BE/7745631d-5db4-4671-bb50-3324d7b6f75e.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/8C/E1/3fa9d291-0c90-4f0e-b89f-2127c7833f82.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/AC/6D/8860984d-7340-4fd9-82d0-8e9fe12b5c0f.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/5F/FC/8ecd8179-e89b-424e-aa08-d267f6a07a4d.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/41/79/e7141009-5f24-4c73-817d-25fb3825f52d.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/B1/67/a1012b70-5760-4a55-801e-b7ac52df8015.jpeg']",
                                  "item_price": "USD 23.95",
                                  "store_name": "Yoins",
                                  "item_title": "Light Blue Side Pockets Fashion Bodycon Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Ripped-Details-Skinny-Leg-Jeans-p-1237238.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/08/E5/c0a242c3-555c-492f-8913-67fe19369b14.png', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/07/63/644d1c25-4fb2-47d4-97c1-3c90b818b7ac.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/49/0D/fbe1fe0c-29f3-4db2-8f11-43469b6b2d7a.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BE/5C/0e612fbe-4691-4acc-838d-0312b6bf7578.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D5/E3/0bc09210-534e-42c7-9f75-ca8a8a384fff.jpeg']",
                                  "item_price": "USD 14.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Ripped Details Skinny Leg Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlue-Ripped-Details-Middle-waisted-Jeans-p-1223372.html%3Fstyle%3D1",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/69/6E/2ea4b411-d72a-472c-8074-afebf45f3919.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F3/F8/84b511a4-eac4-4ed9-98a9-bef901ace902.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/86/F0/fb1f7f18-cb11-4836-9a49-c866c6feac87.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/4D/4C/c2646958-48cd-4baa-97b8-b192be26f44a.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/79/B2/3204f50f-436b-4a11-923c-d7b06624875b.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/6F/FD/4e12af3b-631c-4b65-8dcc-cbaf6eaa1515.jpeg']",
                                  "item_price": "USD 21.95",
                                  "store_name": "Yoins",
                                  "item_title": "Blue Ripped Details Middle-waisted Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlue-High-rise-Ruffle-Design-Bodycon-Jeans-p-1205785.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BC/81/9d19d4aa-c765-43ec-81b0-0f7be347861f.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A0/C8/18a9e1f4-a338-4c05-a071-582bb61a5931.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/21/F8/7c9d828d-6001-403c-b01d-a52442299120.jpeg']",
                                  "item_price": "USD 19.95",
                                  "store_name": "Yoins",
                                  "item_title": "Blue High-rise Ruffle Design Bodycon Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FDark-Blue-Middle-waist-Skinny-Shredded-Ripped-Jeans-with-Four-Pockets-p-1191939.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/52/17/c031a811-f84d-47c7-aa13-17e5ef60ef0f.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/72/24/1040d54d-b669-4339-916f-f7c191a24983.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/15/E5/03a0b608-56e3-41e7-869f-d6d9a043a683.jpeg']",
                                  "item_price": "USD 19.95",
                                  "store_name": "Yoins",
                                  "item_title": "Dark Blue Middle-waist Skinny Shredded Ripped Jeans with Four Pockets"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FGrey-Side-Pockets-Fashion-Bodycon-Jeans-p-1381442.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/3A/EF/6983a72a-363c-4851-8a1a-d4114b7fa75e.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/51/79/9d9d8a63-2723-4b8f-aaf3-85ccefb976f7.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/87/82/336b4522-c87b-44bb-8815-3e55cfd390db.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/DE/99/638a4f9e-217d-4fd1-be1a-9d46c68159cf.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/8A/B8/57f963d0-abe7-4c60-a545-9626ded932bd.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/EC/68/e0d5448a-6f54-4ab2-8061-686996da6260.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/53/D1/dd854d7f-6cf8-4c13-b904-41dc607f29a8.jpeg']",
                                  "item_price": "USD 23.95",
                                  "store_name": "Yoins",
                                  "item_title": "Grey Side Pockets Fashion Bodycon Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlue-Floral-Embroided-Cut-Out-Fashion-Jeans-p-1378586.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/DA/AB/a38d7580-d3ed-4b1d-b70f-421bcddaec48.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/27/7E/3fdf11c2-42b2-4b61-a62d-e60ffdbe9a2d.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/FF/0E/85b6255c-47c8-4680-acf6-0cbe843793bc.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/E2/86/2ca43872-49ac-442f-8add-e679d184be98.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/6F/48/bbf30e0f-0e19-4e46-8cc2-e5dd4f0f3502.jpeg']",
                                  "item_price": "USD 19.95",
                                  "store_name": "Yoins",
                                  "item_title": "Blue Floral Embroided Cut Out Fashion Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlue-Floral-Embroided-Random-Ripped-Bodycon-Jeans-p-1378587.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/09/5D/35bbc6c1-92b9-4e95-a947-2ab21123ebeb.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/58/E6/a736d652-5e39-4d57-abe1-8289a2ccbfb8.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D5/D6/bc98c353-7808-46eb-b4e2-2f12da9f7f46.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/6D/0D/3a50b118-99a2-45a0-815e-084c54ea8d16.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/AD/1D/cad5dcbc-1103-49f0-8fc8-a7e419027bee.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/73/55/4b0c2438-e342-43a8-b56e-d4b24d05acd8.jpeg']",
                                  "item_price": "USD 19.95",
                                  "store_name": "Yoins",
                                  "item_title": "Blue Floral Embroided Random Ripped Bodycon Jeans"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/ke1179qg1bad6ac57c19c8804a75ef/?i=5&ulp=https%3A%2F%2Fwww.beautifulhalo.com%2Fcolor-block-blue-patch-stitch-detail-jeans-with-zipper-fly-p-221781.html",
                                  "item_image": "https://images.beautifulhalo.com/images/392x588/201504/Y/color-block-blue-patch-stitch-detail-jeans-with-zipper-fly_1427890471583.jpg",
                                  "item_price": "USD 14.31",
                                  "store_name": "Beautifulhalo",
                                  "item_title": "Color Block Blue Patch Stitch Detail Jeans with Zipper Fly"
                                }
                              ],
                              "category_name": "Jeans"
                            },
                            {
                              "category_image": "['https://img.peggybuy.com/img/catalog/product/1/1/4/114438.02/114438.02-1.jpg', 'https://img.peggybuy.com/img/catalog/product/1/1/4/114438.02/114438.02-2.jpg', 'https://img.peggybuy.com/img/catalog/product/1/1/4/114438.02/114438.02-3.jpg', 'https://img.peggybuy.com/img/catalog/product/1/1/4/114438.02/114438.02-4.jpg', 'https://img.peggybuy.com/img/catalog/product/1/1/4/114438.02/114438.02-5.jpg']",
                              "similar_items": [
                                
                                
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1341001.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DC/DD/10b152e8-0e27-4e93-a027-52a539d9f3ae.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/83/94/058349cc-6b4c-4685-9fd8-4ba1c95e138e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/45/E5/b96996e6-2621-4f35-ab9b-eae33e18c296.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/ED/26/e48e01ba-2707-45dd-a2a7-f6ccea036e5b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/00/D7/679f3041-da41-4cdf-b66f-be58218d1f7c.jpg']",
                                  "item_price": "USD 33.17",
                                  "store_name": "Newchic",
                                  "item_title": "Vintage Print Pattern Shoulder Bag Canvas Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1340823.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/94/C2/cc05d8d7-7832-44d9-a192-f6a1bda7e325.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/00/47/ffe40a73-6c8d-4362-909b-762a71e68643.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EA/00/c84e3d1a-997d-4079-b9c6-89197a87925f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EC/7E/86faf05c-bd9a-4b0f-97e9-2e78bc25d3e4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4F/99/dd792e7e-e760-4a8c-b62d-54df9fd0cbf3.jpg']",
                                  "item_price": "USD 8.31",
                                  "store_name": "Newchic",
                                  "item_title": "Women Canvas Waterproof Handbag Printing Shoulder Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1342329.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/64/AE/6ada1cf0-abd2-41c2-808b-8119d5be5e71.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F5/E7/fdb2f3be-5ed2-403c-a75b-df9ab3da7b18.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5A/32/af68acc8-64c6-43e6-a7a4-88677eed9bea.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B7/4F/b6c8cf52-1e18-4b6a-bde9-40dbec2d7f2d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1F/50/804878fe-2078-4e30-ab44-cccc45827ca4.jpg']",
                                  "item_price": "USD 64.48",
                                  "store_name": "Newchic",
                                  "item_title": "Women Genuine Leather Vintage Handbags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1341294.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/ED/38/e9833186-4d27-4cc5-8f3c-aa0bd56caca7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4B/3F/724157d8-740e-4795-b121-82179ce3b5e2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6C/8D/a3e6e999-c92c-4faa-8aff-87951f750f9d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6B/B6/65c025b6-b47c-4cfa-a1af-ecd137ced6c1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2A/0C/0a6a332f-52f9-425c-a5be-2d5644344e2f.jpg']",
                                  "item_price": "USD 23.49",
                                  "store_name": "Newchic",
                                  "item_title": "Women Soft Leather Small Square Bag Double Pockets Handbag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1343009.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/82/DE/a7ab2669-bad4-447d-8deb-65a4edb42780.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F4/F3/8c32184c-5139-46ff-a2ce-60d4f6faaedb.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/86/7F/9486f2cc-c87d-4cc6-bb45-d15ce2ac67d9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E6/3D/167a4c5e-9c7c-4a02-b439-97960cfcb403.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3B/F0/40bef6ab-d8db-4723-80fe-f7cd1508a1d3.jpg']",
                                  "item_price": "USD 31.97",
                                  "store_name": "Newchic",
                                  "item_title": "Women Multi-slot Soft Leather Handbags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1343006.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/66/44/4e8bbf05-b007-482b-b562-22f7d1b8bc61.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/95/B6/eb93a17b-66b4-45f0-b38c-d2f29222676c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/36/61/deb56a97-ddca-4243-9b24-defe9d992257.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DF/B0/f7f329fb-59ff-4ed4-8ea4-ad8d3b2cbf77.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B5/88/28d89318-8492-4a76-a656-b1b598ec76d3.jpg']",
                                  "item_price": "USD 38.95",
                                  "store_name": "Newchic",
                                  "item_title": "Vintage Soft Faux Leather High-end Handbags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1343008.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/33/33/7000a769-2673-4b59-a8c2-e8d59f5b0022.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F5/AC/de1cee70-cc57-4990-bdd7-9c58da32f5cf.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/75/6A/b592fee0-8906-47a3-9413-3b0d302982e0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D1/C1/bf39cbf4-5deb-43e2-921f-65d10c7e5e1c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C6/61/18846725-bacb-4f90-81d5-e78d5e27e46a.jpg']",
                                  "item_price": "USD 41.58",
                                  "store_name": "Newchic",
                                  "item_title": "Women Soft Leather Vintage Handbags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1363680.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3C/81/b881c7f0-f42a-4eb4-ab4f-eab0b0925ca3.jpeg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/39/98/30920feb-eafa-44f6-b7e8-7a653fbbaa42.jpeg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/04/B1/cd0e0bcc-c3e5-4da5-a105-0f54695ba900.jpeg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B4/0F/beaa1af3-e496-4271-bb10-6112242afb31.jpeg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/63/D9/d1c601b7-9e16-46b5-bfb6-17555bf4125d.jpg']",
                                  "item_price": "USD 27.37",
                                  "store_name": "Newchic",
                                  "item_title": "Women Faux Leather Boston Handbag Tote Bag Crossbody Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1361915.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/41/70/8a47a9e2-2d97-4cda-a219-1e0c277f3251.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6F/E6/d4574d3e-690a-40d6-98d9-b6cd06f49628.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/94/70/f6fc7c5c-3f71-499e-816b-5148d64f6147.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4A/44/b9a493d4-43ee-4400-835a-b9a0fa72b4ed.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0C/B9/4a5fff35-6caa-428b-a7c9-e580af6b16ae.jpg']",
                                  "item_price": "USD 28.2",
                                  "store_name": "Newchic",
                                  "item_title": "Women Faux Leather Simple Handbag Leisure Shoulder Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1362750.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/51/30/6ceb2280-68ec-4e0b-96ce-2dcab4f21134.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FE/2C/ebc64552-2588-4991-b3fb-08e5ada8b8e8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/63/BB/593e636e-5293-4556-b946-dfb55941f2e7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/33/1C/1b900cff-1350-4a51-87c4-ba1e12079d7b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/88/7E/6663431c-b57e-43e7-a734-8172fb63a7bc.jpg']",
                                  "item_price": "USD 79.22",
                                  "store_name": "Newchic",
                                  "item_title": "Genuine Leather Vintage Personalized Handbag Crossbody Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1362642.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8D/1F/864fa3c8-b63a-41bf-ad6b-7d19d821bc54.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/47/4C/3d2da2db-054f-4f54-81c5-fcdb0f4eac03.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/15/1C/8cd504e6-0e8d-453e-9d03-98e0bfd36876.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D6/2E/cca9ed3e-436b-4fb0-a34e-0131229cffaf.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C4/50/86bd75dd-af5d-4087-973f-f62e08356377.jpg']",
                                  "item_price": "USD 75.47",
                                  "store_name": "Newchic",
                                  "item_title": "Women Genuine Leather Brush Vintage Handbag Crossbody Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1360971.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/38/DB/d7443167-4a24-44a1-b847-312aa320649f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FC/6C/1f590c7c-a4bb-4bf5-ab05-f33b6f1c8592.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0E/FC/d3208952-e7ad-42e6-95b4-328838255d1c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9D/45/e8f34a9b-ae97-4950-b5f2-3911ad2c8355.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/35/93/aa4f2216-8f8c-4c25-9ce4-07e0392c06f6.jpg']",
                                  "item_price": "USD 41.03",
                                  "store_name": "Newchic",
                                  "item_title": "Women National PU Leather Large Capacity Tote Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1360547.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C7/BE/3c699eaf-1774-4702-83c2-086ee6f26f38.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0F/04/038e4302-bd1a-4808-8e4a-82b03f13ea3e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4F/8B/a2b0ffaf-f019-4d54-8480-79eca8902ad0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/51/17/151cbcc8-fda9-4eb4-a61e-bddbd41b4200.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/50/56/6f72f1c1-bac9-40e2-836c-1cc102203c52.jpg']",
                                  "item_price": "USD 41.58",
                                  "store_name": "Newchic",
                                  "item_title": "Women Bohemian Large Capacity Tote Bags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1362695.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5E/FF/76ab0ba6-3526-47f4-98b4-500104241c31.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/18/0B/286fb1ff-8ef4-4e44-9439-5b91af6127aa.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/49/F7/96923beb-1803-42f0-9fb7-abd4afc9b69d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/86/C7/34775371-15b4-490c-8050-648d886fbdbe.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/49/1F/23cc1640-499b-4fe2-8521-faab1d7658f1.jpg']",
                                  "item_price": "USD 74.66",
                                  "store_name": "Newchic",
                                  "item_title": "Women Genuine Leather Vintage Heart-shaped Handbag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1363749.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EB/5C/b2e14bd7-92c4-4165-8a80-bae87fd24d77.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D7/15/b6f2367c-19d5-491b-b9f5-2724c9e67836.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/19/3F/86921bd0-fbfb-4cb4-8953-01c6ab8d3e06.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E2/A7/6cb21436-8a00-40d1-ab05-d7fce3e0e55c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E5/D6/e131be46-381a-4e29-b55f-cd0dd98c359e.jpg']",
                                  "item_price": "USD 24.71",
                                  "store_name": "Newchic",
                                  "item_title": "Women Faux Leather Hollow Handbag Tote Bag Crossbody Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1362363.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/ED/A4/4dff13bd-3fc9-408f-8c01-4cf218e26bf2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CB/5F/8a066a0a-7e2d-48a8-853b-94e36884109b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AD/BD/1c0627de-1202-4f23-a42f-ed7d0176a1f4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/05/BF/245d1845-c271-4266-bd1c-7fb12a21a0f5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/41/13/eea3e896-4adb-435e-98d2-0bb0f2fc875f.jpg']",
                                  "item_price": "USD 132.9",
                                  "store_name": "Newchic",
                                  "item_title": "Women Genuine Leather Brush Vintage Tote Bag Handbag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1362594.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6F/77/66e1695b-d4b4-4a95-bacb-f9d7c04775f8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F8/E1/cde894a8-1b2f-48c4-82db-ddcb3b98fb5f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/76/F8/f64af28f-12da-4d84-bcd1-e0a8bb06eab6.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7A/16/722e9fcf-0038-4047-9913-1182de38e26f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5D/62/6db33392-9963-47eb-ab6e-0f80ef39543d.jpg']",
                                  "item_price": "USD 131.88",
                                  "store_name": "Newchic",
                                  "item_title": "Women Genuine Leather Large Capacity Tote Bag Crossbody Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1360957.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/45/DB/2e6868fa-c805-4180-abd2-6f0ec2d2e721.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/00/6D/e8432a6f-6f0a-432d-b8da-0de85e47e91c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/01/F7/1307fbd5-0d7c-42e0-8aaa-ab44ccf169e7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/92/2C/376a2f97-9aa8-490a-a5db-5a7bab276e3a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/87/D1/c7c56222-43ae-45ce-921f-1f7099a6a074.jpg']",
                                  "item_price": "USD 111.06",
                                  "store_name": "Newchic",
                                  "item_title": "Women Genuine Leather Solid Handbag Crossbody Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1361225.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/47/49/a3e060f2-6cac-4be2-9f1c-58df9f3d30cb.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A8/4A/b232ee08-17cd-4c68-81f8-eb1d5b0e2ce9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D9/F6/d3da351b-23fd-436c-a598-50da1f3496cd.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FF/A8/c6477f63-b72b-44eb-a663-6e8901a80f08.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6D/25/40265eda-3c3e-497b-8b00-ed3d8ccbce21.jpg']",
                                  "item_price": "USD 29.15",
                                  "store_name": "Newchic",
                                  "item_title": "Women Faux Leather Floral Pattern Handbag Crossbody Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1363634.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FF/E9/23adfc55-b995-44b1-a264-3cb0e534fedf.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DA/43/583649f4-3709-4dbe-87ec-f5f4f3ed8efa.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8C/B9/b7c66bdc-0baf-46df-b86d-daaf3ff42847.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/43/09/d95553b7-50bc-4685-bd94-698c3e8dd4f6.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/87/3D/1b87c797-c3ae-440e-b290-bd7190820629.jpg']",
                                  "item_price": "USD 31.19",
                                  "store_name": "Newchic",
                                  "item_title": "Women Faux Leather Tote Bag Handbag Shoulder Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1348285.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/36/49/a8fc49f7-62fa-4993-8b2f-ba81740d4ad0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/91/D4/4f1c0587-5ad4-49ab-b503-f98fd19ffaee.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C9/A8/2e057281-c9ba-4a95-8c5f-dc01c9210161.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8B/54/fc974fa1-bde5-4a55-8763-8b447831e89c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/77/30/9a64c643-e047-46df-9615-23584fdab91c.jpg']",
                                  "item_price": "USD 9.99",
                                  "store_name": "Newchic",
                                  "item_title": "Women Multi-carry Casual Canvas Handbag Shoulder Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1352266.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/52/03/3cb406cf-fb68-4f13-85d7-7cf47dffea7d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F6/54/c59ff5ea-6dee-4490-a199-4c0110392f4a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/86/13/6f571953-9d49-4c35-9391-143a36d73503.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F1/79/f8949aa0-3c6f-4040-bc1f-c7c195676a32.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C6/FE/5e515063-5527-4d91-9204-82ea6a862928.jpg']",
                                  "item_price": "USD 49.69",
                                  "store_name": "Newchic",
                                  "item_title": "Women Genuine Leather Bohemian Crossbody Bags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1354945.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/93/E1/0e0ac745-0209-4097-89fd-e1700d8f5eb4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/87/CE/75ddefd1-4bd9-4be0-bf63-22ee642302cb.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/75/29/3c77caea-f8b5-4809-bf4f-7897bffc1e6b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D2/63/15fb318a-5fe3-4212-9f6a-7353e1982a34.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A1/D7/c4866795-f894-4876-a85e-dc7bc6846f53.jpeg']",
                                  "item_price": "USD 60.78",
                                  "store_name": "Newchic",
                                  "item_title": "Women Vintage Hand-brush Color Handbag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1354694.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BA/38/e03390bb-2a30-46bc-8619-638ce1faf8e2.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/21/98/1110fe4b-f64a-4ad1-b5a2-84fbce4360b3.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/79/48/4f3f804d-1477-4d01-985d-a9e0618bc877.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E2/E3/930a43ab-422c-413a-a0f4-c5b77dede746.JPG', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C7/19/00e22484-dac2-4b69-aff7-a807e34aafa2.JPG']",
                                  "item_price": "USD 41.59",
                                  "store_name": "Newchic",
                                  "item_title": "Brenice Women Faux Leather Designer Handbag Tote Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1356036.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/51/C2/219deaad-ff91-468f-8b93-109c19029b52.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E9/65/4eb1f465-3efc-4106-b175-a174f77100c4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E3/8A/9e5ee810-1c56-4e81-9984-b8d92d96020e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/96/50/929474e3-2fe3-4b20-b8fa-029366bdee6c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/92/F1/442f68bc-2bc7-4fe0-b859-e5c63b2482e9.jpg']",
                                  "item_price": "USD 35.35",
                                  "store_name": "Newchic",
                                  "item_title": "Women Casual Canvas Boat Pattern Cotton Strap Tote Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1356037.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FC/5E/85bcc8fd-dfe4-411b-b2e9-e462e9360581.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5A/4D/5ebf976c-7137-4547-ac2a-b6eeb6a66e2a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/61/B2/8080f88a-1487-4081-900a-439e949e599d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0A/91/bef0063d-fe1d-4698-bf23-87fb7538e76d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/68/63/5de2e1e6-f4d3-4712-9be4-56238cb07f96.jpg']",
                                  "item_price": "USD 35.35",
                                  "store_name": "Newchic",
                                  "item_title": "Women Casual Canvas Butterfly Pattern Cotton Strap Tote Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1356034.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/45/73/55f3d9c5-6dac-4b2d-bc2e-d48f949fcc70.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9F/1A/77bcdc3d-75cf-44f1-ad5d-20e09b9383a8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/26/80/34bd0a78-22de-4e34-9c19-d7a08165cfa3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7B/89/7718c065-9a50-4c97-8bde-4bde9a87c99e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/45/90/b82a1a73-e5f4-4d0c-a676-d3f980beb141.jpg']",
                                  "item_price": "USD 35.35",
                                  "store_name": "Newchic",
                                  "item_title": "Women Casual Canvas Cat Pattern Cotton Strap Tote Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1356035.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/06/7B/4cd0dd95-c59c-4157-b27b-98e6972bc8c8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2E/DD/fa6db75b-244f-4ef2-8556-86ffb02c0d99.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/05/64/5ad82a97-326c-4f84-9a6f-83eca1e6390a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D7/D7/49b17aad-c64c-4488-b890-73a1052cf087.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/84/6F/a4139b0a-0ea6-444f-a898-58a4627c2fc7.jpg']",
                                  "item_price": "USD 35.35",
                                  "store_name": "Newchic",
                                  "item_title": "Women Casual Canvas Butterfly Spring Pattern Tote Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fangel-kiss-handbags-3609%2Fp-1356385.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D3/8F/eb8dcd8d-c932-4e74-9745-abcc2fa01596.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D3/C7/1e8ef1d0-702b-4c36-85fa-bb74b72ac515.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C6/BD/c91d5f77-cd30-4016-b41e-fb8457dddbad.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7A/AC/336febc0-84b5-4fad-8180-44bb437f8a2c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BF/1F/653435e4-824e-47e7-89ba-293727a82111.jpg']",
                                  "item_price": "USD 44.71",
                                  "store_name": "Newchic",
                                  "item_title": "Women Multi-Pockets Handbag Casual Soft Leather Shoulder Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1357012.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C5/3A/ed042ed3-ad18-430d-b7e8-cde3c6a9ca7f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4D/C5/843d8dc0-243a-455b-a718-b6e835271395.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BF/5A/255280f4-283a-49c2-aa31-c87be0e5354f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/88/87/d3fad336-6c26-4ec1-a3f1-8ddb05714525.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B6/36/9af00749-b7bc-47a5-ac99-9ed43392a7a1.jpg']",
                                  "item_price": "USD 31.03",
                                  "store_name": "Newchic",
                                  "item_title": "Women Faux Leather Pure Color Handbags Tote Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1357017.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6E/20/c4e3cb11-a4e2-46ab-9935-fdf69adf5ee5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/37/3F/e1fc525e-81b5-426c-b1df-d3cdbfa9d867.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9B/ED/d5661ce1-6a46-489d-ac8d-5e865792e48f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6C/9E/c6c07232-f9b6-454e-8982-ead2d3d45b04.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/58/37/70cfe5a8-f0cd-4e4b-a540-17093f229bc9.jpg']",
                                  "item_price": "USD 27.71",
                                  "store_name": "Newchic",
                                  "item_title": "Women Faux Leather Stitching Color Crossbody Bag Handbag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fkvky-handbags-3609%2Fp-1340766.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E1/33/2fbd5a17-14b2-4fda-890c-2ec6603c5535.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/70/7B/3cfe7e7b-2b64-42f0-9f58-817d424e9147.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/48/B9/8eaf9e4d-5530-4516-907c-164a30443000.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/23/5E/f0e58ca5-ded0-41f0-848f-aac1c397c312.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/11/23/e5376389-d0df-4237-932c-419a5a7d110d.jpg']",
                                  "item_price": "USD 24.95",
                                  "store_name": "Newchic",
                                  "item_title": "Women Casual Canvas Patchwork Handbag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1358844.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AF/63/55c16b8c-42db-48fa-a7bf-c737841e0c7d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E4/C5/ba1d8dcf-2e3c-4b02-90e4-d5e952c6c610.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1A/B8/f3447352-1610-4c4d-a871-455e3bebf85e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D8/A3/8ca6fba3-2944-4e06-9028-89d4d4d02cb4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7E/E2/f2b1cc9a-4bd5-4b50-8dc7-ef01e5efa539.jpg']",
                                  "item_price": "USD 30.33",
                                  "store_name": "Newchic",
                                  "item_title": "Women PU Leather Print Handbag Solid Leisure Crossbody Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1360550.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/77/48/7fff7ec1-4d64-494e-870d-527f97ca076f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CF/F7/1b6d35a7-a136-4e71-a2a9-c7ef96ff65b6.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4F/95/e98566ad-8cd6-4d4e-b108-ecbcbba44531.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2F/6E/f702ca9c-c96d-45d2-9a53-8b7d9e9e2c14.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A2/84/5b957874-0b35-4efe-a39a-82636b1b66b8.jpg']",
                                  "item_price": "USD 40.58",
                                  "store_name": "Newchic",
                                  "item_title": "Women PU Leather Large Capacity National Tote Bag Handbag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1360549.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/86/32/63469139-89af-4adf-bc02-c61a502b0044.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/99/82/8450c5fd-ea7f-48af-a506-899dc4dac450.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3D/66/aa804fc1-b67c-44a3-b93c-4c7dbbbfcb7b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A4/36/8121b438-e982-4e2d-9071-c2f6fa29dffc.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/25/33/131f9d86-d8e8-4fa9-9f4b-e36e17ddf4ea.jpg']",
                                  "item_price": "USD 40.8",
                                  "store_name": "Newchic",
                                  "item_title": "Women Bohemian PU Leather Handbag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1360954.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/05/5A/08b8c170-4cd0-4fb5-8cb3-9fa759f2c908.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B4/21/d3949f86-47fd-4130-98f6-173ad08c78e5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F8/83/90fce977-e4f9-4d74-8363-794041f2eb68.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EC/87/9e53d8b7-405c-4f02-882c-5eb3d45f84f1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/80/21/a3075661-1e8c-477d-81b6-77257add1557.jpg']",
                                  "item_price": "USD 82.72",
                                  "store_name": "Newchic",
                                  "item_title": "Women Vintage Handbag Genuine Leather Crossbody Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1360956.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9A/A9/b2a0e68e-07ca-4d8a-876d-e162fad8b664.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/59/61/b83e47d3-ed90-45d4-8b15-0e0c2dc0a5b3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/68/A0/20be6444-966a-4dd3-8e12-5332f4da75d7.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/15/73/00d6bb83-90fc-4c47-8cd7-edfc381881f9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8E/82/04996656-8151-4208-b9f7-ae126cc41479.jpg']",
                                  "item_price": "USD 79.6",
                                  "store_name": "Newchic",
                                  "item_title": "Women Vintage Genuine Leather Handbag Crossbody Bags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1360919.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A7/0D/dff00ed5-ee81-4395-bc70-95d25f3a17de.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F5/71/f6115f73-d1b8-428a-b367-2dc776d7d6ae.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/82/E8/af287a1b-da8a-4e88-80dd-dab42d524c06.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/68/59/86982bb4-b715-44b0-8a2d-d15143e02d3d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C2/F4/1fce023e-f15b-450b-a382-3146be3d4c0d.jpg']",
                                  "item_price": "USD 72.36",
                                  "store_name": "Newchic",
                                  "item_title": "Women Vintage Genuine Leather Handbag Crossbody Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1360915.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/12/EB/6f5f1d7b-e97f-4362-b99f-bc636f0f03cc.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1C/8D/634e7966-d414-4bce-aaa4-17e428df0647.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0B/99/8bd45f27-8073-40f5-81b0-93927c5c2c5f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/24/4A/571310ff-07e9-464f-b8da-926521fb27d9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/35/E0/e290c078-fc95-4ec1-b377-afc84125358e.jpg']",
                                  "item_price": "USD 112.66",
                                  "store_name": "Newchic",
                                  "item_title": "Women Genuine Leather Embossed Handbag Crossbody Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1360918.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4C/1A/3b72686b-d52d-454c-a704-a34d59a1ab64.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6C/84/88fb390e-c1f2-478b-b244-010f5e0eb6d5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/82/DE/5ff6a15b-0c8e-4e16-9158-f9fd94b87d6c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/04/58/a1cffb6b-352a-4c7d-b00c-f6b8b2474c32.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/83/63/cad4fcec-164e-48af-a827-7a80a2ee5927.jpg']",
                                  "item_price": "USD 37.18",
                                  "store_name": "Newchic",
                                  "item_title": "4 pcs Women PU Leather Multi-function Handbag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1362320.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E4/6B/13c46e59-ec01-41be-a67f-be2c88cb2498.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/79/B7/af0ab48a-6465-4a18-b7c7-039ec49199d4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/26/4B/50e05b47-d9af-4e74-9819-1e37926b8ba4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C6/59/866af232-f804-4dab-8d05-5f3fd72a2fc2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/45/8E/6d0affe2-bb14-4681-a1b7-520013a9e14c.jpg']",
                                  "item_price": "USD 75.47",
                                  "store_name": "Newchic",
                                  "item_title": "Women Genuine Leather Vintage Pillow Bag Designer Handbag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1362346.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A0/6F/3af8502c-3403-4384-acce-8f54668f2534.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8B/E4/b449eb6c-b0d8-42d2-9306-be60659203d2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3A/41/49447326-e148-4f68-88a7-52b4478e9c25.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0A/9D/5521e567-cb35-4588-9803-737d050b31d1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AC/3C/bc63795e-dd7e-4ef9-bccd-c54df8784fb1.jpg']",
                                  "item_price": "USD 71.34",
                                  "store_name": "Newchic",
                                  "item_title": "Women Genuine Leather Vintage Brush Handbag Shoulder Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1362466.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BA/30/83177707-ac40-4a12-a54a-388183ea1e4f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/09/03/0cd16a58-950d-474b-8344-bb4c049a21ae.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9E/29/baca6020-af06-407e-ae38-e3106a78df4c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/17/E4/a68e9269-5db2-411c-a030-734b0b2bda57.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0B/3E/1547087e-ac59-4cb6-b37a-d3d37ef442fe.jpg']",
                                  "item_price": "USD 122.7",
                                  "store_name": "Newchic",
                                  "item_title": "Women Genuine Leather Designer Handbag Tote Bag Shoulder Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1363671.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D4/67/e493736c-f0ed-4c3e-8b70-aece4c934129.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FB/B1/34a8d730-3c8b-4a98-82d0-6358f90546e3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2C/22/3b4cbc5e-a27e-4746-bd97-a3d6ccca7c81.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9A/AB/3edb9295-fac4-4dc5-a338-86c9882a5706.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/76/5D/56fe0630-f8d6-4c1e-9da7-eb3c923dae38.jpg']",
                                  "item_price": "USD 28.74",
                                  "store_name": "Newchic",
                                  "item_title": "Women Faux Leather Woven Pattern Handbag Crossbody Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1402343.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A3/0D/a9931f8d-96cc-4077-835b-2bb15fd9f507.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D7/9D/0a9e3fa8-912f-4412-9b8d-45bc78c6e7cd.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2F/01/38e73047-67ff-4f1d-b4f8-c26ef96b7e2e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/59/64/a99dede7-eda7-478c-a767-790c204d19bf.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E9/EA/bdab4b2a-5cfd-456b-92c3-724ad0672819.jpg']",
                                  "item_price": "USD 40.65",
                                  "store_name": "Newchic",
                                  "item_title": "Microfiber Leather Crocodile Pattern Handbag Crossbody Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1315253.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C6/89/cee2b66e-a08e-42b6-b393-62b4e9a1e9eb.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CC/D3/2391d2a9-782d-4b3d-8ab7-f8d76ec6420d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/07/67/da54cf7b-796c-43aa-a295-d212fc7af017.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/12/3D/ab23ad45-437d-4298-9d4b-7890bc0d246a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/18/88/c6b172b2-ff52-49bd-b174-5716d38a9420.jpg']",
                                  "item_price": "USD 45.26",
                                  "store_name": "Newchic",
                                  "item_title": "Women Retro PU Leather Handbag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1351631.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C7/A5/30226f14-1d0c-4ebf-94e1-d17d4a165122.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/87/8C/a9c4165e-ee7d-420a-b6ae-0a157e5952d4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/21/EF/050ec8ea-a58f-4b3e-a998-26e48eb1768b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/63/B5/32feb384-c324-4f0c-a41d-f6e688e691e9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D1/35/b4d640ac-7a04-47e6-aa8a-5b59a989d5a2.jpg']",
                                  "item_price": "USD 44.99",
                                  "store_name": "Newchic",
                                  "item_title": "Women Three-piece Retro Large Capacity Handbag Crossbody Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1363837.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/19/CF/163f2aa5-3128-432b-8743-c87227026d32.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/58/EC/6fbbb27c-6009-4e28-a5de-a6ecdb73c89f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C1/C9/fd295ab6-3003-4633-83df-e766e980375b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A4/CA/6920754f-98f8-4b65-ab95-1d5abaa79dfe.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4F/77/9ea523e7-3ae8-48cf-a924-5f5690df1b6d.jpg']",
                                  "item_price": "USD 28.43",
                                  "store_name": "Newchic",
                                  "item_title": "Women Vintage Lotus Pattern Handbag Crossbody Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1360477.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D3/26/8cf7bacf-2ed3-4fbb-95b4-9d54f876cff6.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AC/87/17537742-3a95-406c-a637-b27449826850.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/33/2B/b5978994-0c02-427f-8783-760bd4d8f399.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7A/BA/393a1dab-f7c4-4f25-a63d-f18fbb51ea7b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9D/E6/91a2f772-81a5-475c-a62d-9761351a3a80.jpg']",
                                  "item_price": "USD 37.43",
                                  "store_name": "Newchic",
                                  "item_title": "Women Faux Leather Large Capacity Tote Bag Designer Handbag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1360469.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F4/F6/09b809da-2e12-4063-93b2-7b5874d26fed.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C5/98/8ecd22ba-6af3-4b48-a5ec-5a25663b8893.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/65/D1/05a5f9b7-aebf-4412-9ad9-dc188b539a7d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/26/E6/cb1d53d3-e068-4051-8047-ae02e621afe0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9B/97/1e8b469f-3721-4ce1-a6a1-32a9b519d0e1.jpg']",
                                  "item_price": "USD 33.29",
                                  "store_name": "Newchic",
                                  "item_title": "Women Soft Leather Simple Tote Bag Handbag Shoulder Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1358846.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AD/15/357b6a49-2c1c-4459-891e-a033d2f188d2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3D/8B/c91cd695-501d-416f-8047-6b9115b51fe2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/80/97/bb514ca0-6dc4-43d9-ab44-82777fa462a5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CA/18/715442ef-27d0-4bc2-9e3b-59a05455d735.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/93/EF/068fced3-b760-464e-a0ab-aa43cce7b6d1.jpg']",
                                  "item_price": "USD 33.37",
                                  "store_name": "Newchic",
                                  "item_title": "Women PU Leather Solid Handbag Crossbody Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1345767.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3B/21/711540ce-bad1-4b88-b0b0-bc41587e8c3f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8F/2A/e51c5346-9061-4243-a9e6-28c4d3683c03.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4D/7D/719c9c52-713c-435d-ba26-ee4a17c08464.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/26/4A/7bf793a8-3bbb-486f-9355-b4c7551cf475.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/25/1D/1e168275-c30b-4d44-bb73-bc115ac5fbd5.jpg']",
                                  "item_price": "USD 24.3",
                                  "store_name": "Newchic",
                                  "item_title": "Women Canvas Designer Handbag Tote Bag Shoulder Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1345627.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E4/16/29974615-747a-4414-8af8-53339e8921d9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/26/40/0d059267-58cb-497f-bc00-b4e5397bb5c0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3D/EB/979aee76-2a54-4c0a-bfed-82cddaf94aa9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F2/97/5934cf70-3379-400b-a360-ffb3fb9711b4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C8/81/a30eaf74-ed19-4ab7-84b8-70d8727a5766.jpg']",
                                  "item_price": "USD 23.8",
                                  "store_name": "Newchic",
                                  "item_title": "Women Letter Print Canvas Tote Bag Simple Art Handbag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1345646.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3B/BD/fd9ae809-1a42-4456-8bc0-911291f3de0b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6C/69/9069c63b-8c98-4d9c-8640-ee8809b24bee.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7D/E5/988440aa-cdfd-44d0-9cf0-11dcb2100b92.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7A/A2/3c7850dd-23db-427c-afa2-a1f3cea4fad3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/FD/AF/a60246c3-debc-49f5-a101-aadd0bb2fe6f.jpg']",
                                  "item_price": "USD 45.33",
                                  "store_name": "Newchic",
                                  "item_title": "Transparent Crossbody Bag Shoulder Chain Tote Bag For Women"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1345808.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1E/6C/c33b5a36-976c-4a97-b049-4f757f4cb749.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5F/6A/35369b21-3ba5-44aa-b21b-b681dc7842ac.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7A/06/eb9f17fc-2296-433d-954d-aadf96e206ee.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F4/F9/5d40dec7-c655-4770-99e8-bfc75c7a20fa.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D7/C1/96989df0-8d21-4dfa-aa6d-aa4e8dc57cf4.jpg']",
                                  "item_price": "USD 49.32",
                                  "store_name": "Newchic",
                                  "item_title": "Women Floral Bohemian Genuine Leather Handbags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1345810.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/58/81/269b620f-d4f6-4a34-b9b6-648ba4b758ca.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B2/33/ebcdb138-11c6-46d1-89d0-65d3e2ba8ed3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A7/C2/f93eaaa8-2048-4aab-a804-173ac0e1bdd5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EE/A9/57bd3b53-b258-4628-afa4-8054b91fbbb8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4B/E0/04bea232-e6a6-482f-ba73-70a402657010.jpg']",
                                  "item_price": "USD 51.88",
                                  "store_name": "Newchic",
                                  "item_title": "Women Bohemian Genuine Leather Floral Handbags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1345811.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8D/11/2d83537f-d5aa-4bd8-8a95-fd214988694e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AA/2B/2b40ba4b-20a9-4672-82ba-09b755208cb8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3C/46/58f4d085-4541-423c-ac61-dcaafe1d2931.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DF/A7/425cb76e-f71c-4319-9a07-a7f0e44e2c99.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/67/EC/18aeca86-bea6-4074-b090-a39dc14fd9f2.jpg']",
                                  "item_price": "USD 51.77",
                                  "store_name": "Newchic",
                                  "item_title": "Women Oil Wax Genuine Leather Hobos Handbags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1345812.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/58/F7/7ce05f3f-83e4-40e5-b6b2-212e662368e4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4B/D8/475ba90d-a193-423a-877c-37b3d9ae3dc1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6A/7E/eb2bae43-93b4-4ccb-822e-c7cdd7f156c2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B6/D3/8e370fbc-a250-43f1-bec4-a047e7b05f21.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9D/6E/1786bc6f-7550-471b-9e19-8b2e6b44282b.jpg']",
                                  "item_price": "USD 54.69",
                                  "store_name": "Newchic",
                                  "item_title": "Women Vintage Patchwork Genuine Leather Tote Bags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1349379.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/76/23/8610e9b2-b345-4628-8043-04fd58560e4b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/69/44/69c02cd5-5c8d-4247-904b-84ee6b4024fb.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0C/D9/9179b224-2881-4ca1-a3cb-55379f83287b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/30/0A/633a1657-647d-4e0e-9195-e57dc1c7c1fc.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A2/A4/0d6ab32b-35be-4d0b-89cc-9faf70aa715b.jpg']",
                                  "item_price": "USD 39.47",
                                  "store_name": "Newchic",
                                  "item_title": "Women Vintage Handbags Large Capacity Crossbody Bags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1345806.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A7/AE/3349ea93-b98c-4153-8c81-bff10d0672a5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6D/39/1328309e-e2af-47d7-bf3e-57d118937d5f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/27/A1/e7a80e06-e16c-4d3b-ab89-8f45fa26af28.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8D/3A/7a178dab-8d29-473b-a956-c35d061d2d7d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/77/DF/b8c86fdf-e7c9-4353-9099-c25900c40a44.jpg']",
                                  "item_price": "USD 65.17",
                                  "store_name": "Newchic",
                                  "item_title": "Women Genuine Leather Patchwork Handbags Crossbody Bags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1349940.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2B/FA/99ebfd45-87bd-472d-8184-a9d3e416d3d3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EE/AD/541f8999-88ad-4669-a9fb-862c3ea09982.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BD/F1/0e518549-4d0d-474c-9540-0e4f89a8ef30.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5B/A0/7b3820bc-63f6-4b42-9195-c12ff8849565.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D7/27/9eb68fbb-9055-4f78-8d47-3f47954caacc.jpg']",
                                  "item_price": "USD 24.68",
                                  "store_name": "Newchic",
                                  "item_title": "Women Faux Leather Vintage Handbag Tassel Backpack"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1349969.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CF/C3/43260e43-0f7e-45c5-a444-576da98ff435.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D6/A4/2b852a86-af06-482f-96a0-6a3b54191403.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F2/A3/45e30959-c7f3-41b0-8d00-7aa51ce223f3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/52/B8/0743672e-30c4-4aca-89c8-98adff84f0c9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/96/D5/f610cab9-77aa-4ddc-a12c-bab30d86474b.jpg']",
                                  "item_price": "USD 53.85",
                                  "store_name": "Newchic",
                                  "item_title": "Women Large Capacity Handmade Boston Bohemian Handbags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1349970.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BD/8A/79a14a70-e41f-4da4-86cb-b04c30ce6b07.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/12/57/71849b06-7326-4600-8d16-23f39559f5fa.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8C/B7/cce9afa0-8ce6-457d-9988-06be926fd578.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/85/C3/fe6a713d-fd6f-43dc-bd7d-d9d62ab72698.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/18/A2/833f63e4-58b5-45dc-a2bb-9caac277c858.jpg']",
                                  "item_price": "USD 51.2",
                                  "store_name": "Newchic",
                                  "item_title": "Women Bohemian Large Capacity Genuine Leather Handbags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1350441.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/75/32/3418c885-3186-4317-adc3-b0b571be1ff6.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7B/22/05db0d4d-25fc-4511-9569-2d846fbab1a5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8A/7B/706f7219-fe91-4cdb-bdcc-fd3fca6787b4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D3/40/e286a273-3d45-46eb-b32f-7542690d65aa.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/50/64/3cddb850-e19c-4999-95d6-9b900656d018.jpg']",
                                  "item_price": "USD 38.75",
                                  "store_name": "Newchic",
                                  "item_title": "Women Oil Wax Leather Handbags Vintage Crossbody Bags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1350437.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A3/EA/c6e78983-6651-4a34-87a2-4584e943408a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/97/9A/53fb0606-1aad-4be9-8029-e1bff8190ad8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/41/18/af7252e9-73e2-4940-8291-73929e903a7d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D5/67/ea6cb2ad-3e60-42aa-bd60-61858bd1baca.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/62/A6/a2de77b9-cbf5-445b-b989-97e1dd0b7310.jpg']",
                                  "item_price": "USD 48.09",
                                  "store_name": "Newchic",
                                  "item_title": "Women Genuine Leather Handbags Bohemian Crossbody Bags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1352261.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D4/A2/df0adad6-76c1-4a8f-b7ce-e9d00566b502.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/27/63/f3904d6d-4d9d-4d13-be12-caf526fbc550.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2C/DB/eec5cf94-0780-49b7-9786-7f1960579995.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/09/EC/7648a4ea-5e2f-40ae-b9b6-47c8b1765201.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9E/65/139fdc24-7c5c-4387-a203-8059ef77fe14.jpg']",
                                  "item_price": "USD 65.17",
                                  "store_name": "Newchic",
                                  "item_title": "Women Genuine Leather Large Capacity Tote Bags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1352263.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4B/49/63c2d5d8-f6d6-40be-80bd-8888647f2c0f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/82/9A/67ffd9f5-73b6-41a5-9f15-9ed734d5a485.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E7/A9/11e15e60-eb4e-4077-944e-848ea8fc825c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/85/0F/d5dd66db-152d-4437-a848-35433188b7fc.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/04/EB/85485517-621f-4e2d-a455-4fe2f5055e26.jpg']",
                                  "item_price": "USD 34.05",
                                  "store_name": "Newchic",
                                  "item_title": "4 PCS Women Faux Leather Handbags Vintage Crossbody Bags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1352267.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DA/88/543273b9-c59f-438d-9c8b-de6554fb3092.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/81/B8/c53044ab-8769-491e-b0fa-466f6f922764.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F3/D6/ff9081ee-126a-4796-ac00-8c3d260892c0.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/89/73/ca425aeb-1c40-4fbf-aed6-c02a9f67f89a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/04/2A/82dda647-d4a3-468b-a81b-16d81d469003.jpg']",
                                  "item_price": "USD 42.86",
                                  "store_name": "Newchic",
                                  "item_title": "5 PCS Women Nylon Handbags Multi-function Crossbody Bags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1354260.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/11/97/f4d3eff5-6451-4ba1-8e3d-41dafdba920f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D3/C3/12f60e02-d598-4599-8299-a99877da2487.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/52/22/28210e28-99d6-404f-b704-7b15006add23.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EF/BB/a1bb5af6-6a0b-4ed7-94f6-f63a919b003a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/3B/EF/bf3c5d82-6a48-4828-bdbc-8f0e47636d96.jpg']",
                                  "item_price": "USD 38.47",
                                  "store_name": "Newchic",
                                  "item_title": "Soft Leather Woven Stitching Tote Bag Handbag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1354366.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/40/11/5c66c231-18c6-479a-9ebd-6011913b26cd.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0E/52/abf1b038-833f-4338-8b19-bfa60598a622.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C7/7D/2cb65050-904f-424a-a76a-9f3eef1d71a4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8E/30/5c3ee9cd-27f0-4147-8eb9-f088f549d218.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/75/86/cb952720-1a21-4f73-8720-a037ddf84fd0.jpg']",
                                  "item_price": "USD 31.1",
                                  "store_name": "Newchic",
                                  "item_title": "Women Casual Print Flower Canvas Bag Cotton Rope Handbag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1355818.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/58/53/4df111d2-b5bc-49b3-a9bc-b89cf7ae8ec2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AD/93/e80c0501-94f5-431b-accd-9236a3c6dee8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/BB/88/97231361-2a4c-499e-9334-9c85bfdb526f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/18/02/366b7027-a8fc-4515-857e-a487b64f46c5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AE/AA/bf2b4e46-5dc5-4872-ab7d-eb5753b314a9.jpg']",
                                  "item_price": "USD 30.87",
                                  "store_name": "Newchic",
                                  "item_title": "2 PCS Women Oil Wax PU Leather Tote Handbag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1354551.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0E/24/0dd6fbe7-7aeb-4fd4-b70f-c38403ad34ef.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/64/FD/71968487-9c0c-4a41-953e-2572ec3d2f7d.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2B/19/971316f3-a521-447f-ba2b-3c86509d2734.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/1A/65/d5ce6755-ff1e-447b-a7d2-341d7c8a1c00.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F2/95/6097e801-a310-4d96-97b0-609c35f34ff2.jpg']",
                                  "item_price": "USD 22.09",
                                  "store_name": "Newchic",
                                  "item_title": "Women Canvas Large Capacity Handbag Leisure Shoulder Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1355817.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EA/C4/7543baf2-dcd9-47dd-b635-7737b4c88329.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/25/C8/5224c2a6-5641-4928-acf7-5090c30b1f0a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F4/34/64d86cd0-4df9-432a-9833-156cb3db1a9e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/37/D4/c0e01e2b-47eb-4357-aef2-b4a71f39722e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/F7/8A/b8ced9be-3cea-4dac-95c8-849f6527a911.jpg']",
                                  "item_price": "USD 24.89",
                                  "store_name": "Newchic",
                                  "item_title": "Women PU Leather Large Capacity Handbag Leisure Solid Bags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1356006.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/9F/95/53a5fe3a-70e6-4984-a7e8-abfff3c04c27.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/29/2D/e0b5fb49-ab9f-470c-a846-21d367136a47.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/42/2D/14f67494-005a-41d5-b118-4d2231400a49.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0C/80/72aaf414-afae-4582-8bc7-b2a276562a0e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/35/59/10bb507d-19e7-4e5d-90dc-765d2778d103.jpg']",
                                  "item_price": "USD 19.99",
                                  "store_name": "Newchic",
                                  "item_title": "Women Faux Leather Tote Bag Tassel Leisure Shoulder Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1356529.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/ED/50/a30dc939-5c9e-4f39-b4c4-f91c0a99b3b9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AE/21/25a88cfd-b5fc-493f-9d29-b39f6d8a60e9.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D7/A2/920ed3ed-669b-4d7a-8b53-dc683856391a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/87/2B/4a9fa326-0bfb-40d1-bfdf-a055a6c336da.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EC/26/e7517eb4-3413-49e8-ab60-ca5e4f683516.jpg']",
                                  "item_price": "USD 27.49",
                                  "store_name": "Newchic",
                                  "item_title": "Women Leisure Canvas Tote Bag Outdoor Travel Shoulder Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1357222.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/6B/7E/cab87fa7-269a-450d-afad-378a60666aeb.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C1/94/034b1708-2cba-4360-a360-c05dfd570a67.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DE/CC/865d3153-fd03-403b-8c49-485a0719d39a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/01/65/fe648895-0256-4452-b62a-f8d874cc3cae.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/A2/F4/3927f8d3-c78b-4d41-8fe6-f873e31661a4.jpg']",
                                  "item_price": "USD 42.76",
                                  "store_name": "Newchic",
                                  "item_title": "Women Faux Leather Sequin Flower Pattern Patchwork Handbag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1354371.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B1/6A/a59d5657-43da-4033-b9ce-c028d1d8efa8.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C4/BA/35a1ff0b-906c-46c5-8c8c-c1783309da1e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CD/3C/1fdf141e-09b8-449d-b7d4-29fbc97ab93f.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/B2/16/b2ba2b3c-878b-4139-a168-e4fe902c81d5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D6/0A/ca9f98d7-43f6-4483-9716-bb413cdda4d9.jpg']",
                                  "item_price": "USD 49.73",
                                  "store_name": "Newchic",
                                  "item_title": "Women Denim Casual Handbag Large Capacity Shoulder Bags"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1355367.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/19/CA/b3fc901a-2805-4e2b-a375-2451f7672d3a.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/51/E4/383bc4a6-1522-45a4-9a73-ac659bfddbe5.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EE/88/8506a6d2-fe31-487e-9520-c2a741a37d76.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CF/90/f9eac0a8-010c-4372-990f-8af927ffea4e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/69/45/56551d6e-ec8e-4be4-9625-b279520cf95a.jpg']",
                                  "item_price": "USD 61.42",
                                  "store_name": "Newchic",
                                  "item_title": "Women Denim Casual Handbag Multi-slot Computer Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fprotector-plus-handbags-3609%2Fp-1340115.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/EA/EA/598d8d46-6a57-4660-b86f-e877b10229ee.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5C/EB/5b599bce-5e17-47bd-807d-83cf6f6e30db.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/E4/1F/68f687ac-d124-4311-b067-32a73006e75b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2B/95/8818f069-5da3-439a-8702-644f0fd0df6e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/10/85/1c72ce88-2c99-4054-a642-5c7bcced0c55.jpg']",
                                  "item_price": "USD 15.28",
                                  "store_name": "Newchic",
                                  "item_title": "Women First aid kit Multifunction Handbag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1358845.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/26/DB/33ad40be-8e2b-4241-a0fb-80c8699149d3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/40/2F/8d7c4aaf-965e-448e-a6de-7eade12b6daa.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/D9/AF/aad5a583-e1bc-42ea-83a3-8d920846cb0b.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/C6/08/9079e832-617c-4197-bb10-1f0da2e8fcb4.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/AB/AB/2e2610f2-dfa7-4335-b47d-b5d3a336170f.jpg']",
                                  "item_price": "USD 36.12",
                                  "store_name": "Newchic",
                                  "item_title": "4 PCS Women PU Leather Handbag Multi-function Crossbody Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1358239.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/0F/6E/e8720920-bbd9-4fb3-bbb7-9dba2bebd551.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/CD/50/b5cc0154-f897-4fc9-834d-c646b28a8efe.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/34/B9/936b4d12-40f2-4676-9880-da7aa3b57193.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/7B/1A/394e8b65-fa68-41a4-8b34-5f40b622da71.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DD/3A/55b3d54e-1927-4bcd-b435-95f9f783dab9.jpg']",
                                  "item_price": "USD 44.15",
                                  "store_name": "Newchic",
                                  "item_title": "Women Sequin Patent Leather Handbag Crossbody Bag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fhandbags-3609%2Fp-1368934.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/DB/76/216b22c4-cc96-487f-9e20-923916296fa2.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/ED/FC/bb454ab2-f905-4f55-95cd-b514266912ab.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/14/AA/40c1365c-f278-40f3-a217-3dd7b87615f6.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/27/79/cea2af8e-f861-456c-96e4-098fed9aa3fb.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/4B/05/8851241b-cdca-4365-af34-5238a0fd44d4.jpg']",
                                  "item_price": "USD 29.91",
                                  "store_name": "Newchic",
                                  "item_title": "Women Vintage Faux Leather Fur Ball Tote Bag Handbag"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/0i4jszvwipad6ac57c193442850f04/?i=5&ulp=https%3A%2F%2Fwww.newchic.com%2Fbrenice-handbags-3609%2Fp-1363341.html",
                                  "item_image": "['https://img.chiccdn.com/thumb/view/oaupload/newchic/images/5C/E8/1db031f7-5a28-4800-a867-d45152793ef3.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/8C/1D/8481feb7-e6ed-4100-9026-cb7b3e9b857e.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/30/0E/c3899c60-853e-414b-994a-8907a5a1151c.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/48/3D/8fd2ff8f-f6ab-4ddf-9fb4-574834ab18f1.jpg', 'https://img.chiccdn.com/thumb/view/oaupload/newchic/images/2C/8A/75d344fc-9f86-4cfd-a678-4c3b7f77af21.jpg']",
                                  "item_price": "USD 48.87",
                                  "store_name": "Newchic",
                                  "item_title": "DREAME Multi-slots Casual Multifunction Cosmetic Handbag"
                                }
                              ],
                              "category_name": "Handbags"
                            },
                            {
                              "category_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BB/D7/e05f7adf-82c4-4de0-b894-e3b14b1bf24a.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A2/0B/be4a4519-7c2c-4dc5-a9d3-1d5e2ecba43d.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/CF/F4/59aad82d-fa24-4fbb-81f1-00944b2d0da4.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/0A/29/0d1f5ce4-19fc-4929-aa60-247397f1992d.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/2A/09/e9f48858-ddb9-40fc-b18e-4bbd8031acdf.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/34/A8/d4145eed-17a2-4115-82bc-60c25a6923b6.jpeg']",
                              "similar_items": [
                                
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FWhite-Lace-Insert-V-neck-Camis--p-1227973.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/AA/77/7d7cdfae-504b-4b10-a1d3-dfe9038a4bc6.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D8/D3/6cf515b4-ca10-48fe-b484-7322869a0934.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D7/3A/17a99539-c171-4322-bed6-9206a361fe69.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/70/90/ca08ebfb-5c3e-406c-9346-e09fffd1afae.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/4C/E3/a0943c05-f907-44d7-9cd5-7a7edff688f4.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/45/0B/15da8226-50a3-4007-adfa-8d504fccf700.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C9/1C/52b3da8b-595b-4c8f-ad44-c815cfb87ec0.jpg']",
                                  "item_price": "USD 8.95",
                                  "store_name": "Yoins",
                                  "item_title": "White Lace Insert V-neck Camis"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Green-Classic-Crew-Neck-Camis-p-1211696.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/CB/CF/919f7c66-1fe8-4597-b8ae-12f82fdb5d84.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/B2/80/211f35c7-1bf5-4152-a88e-c01d365ec986.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/60/44/5e9ab2b7-6dbd-4fd0-8dee-2cf987598a19.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/0E/07/806f37e3-e07b-41b9-b2f0-1ad2f1f800b9.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/40/33/005a535a-bb2e-4dad-b3e7-f6cd23f48fc7.jpeg']",
                                  "item_price": "USD 8.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Green Classic Crew Neck Camis"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FRed-Criss-Cross-Cami-Top-p-1223301.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/5F/F3/a52b5ae7-3a8f-4267-935e-abc4a2065410.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/07/1B/25a041b9-44b1-4ea0-87c6-c5f5ef48a261.jpg']",
                                  "item_price": "USD 7.95",
                                  "store_name": "Yoins",
                                  "item_title": "Red Criss Cross Cami Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FArmy-Green-Classic-Crew-Neck-Camis-p-1211695.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A7/71/323f5182-f0f2-42b1-ad52-d7630a851d15.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/42/92/05c75f46-ac0f-4b6e-9bed-7a4605725891.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/CB/F4/ec38053b-f380-49ea-bbae-ff4679bae5a2.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/0C/50/fae63d04-1c13-43b5-94cd-d73c248bc72e.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/57/8B/726e0fa7-9048-4da0-b810-7c088b41aa89.jpeg']",
                                  "item_price": "USD 8.95",
                                  "store_name": "Yoins",
                                  "item_title": "Army Green Classic Crew Neck Camis"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FDark-Blue-Classic-Crew-Neck-Camis-p-1211693.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/52/7C/01e9f8d9-664e-496d-9bf5-f89aef56b2cd.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/56/28/b205124b-2ed3-4439-80b5-55c8dd1d38ff.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BC/33/a32c5423-c240-476f-8824-0b473fc0c1c3.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/E0/ED/aa69aee1-da99-40c5-bb81-c535e39d34e8.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F5/85/f228b853-971f-4d0a-bdaa-b31b2aaa5ee8.jpeg']",
                                  "item_price": "USD 8.95",
                                  "store_name": "Yoins",
                                  "item_title": "Dark Blue Classic Crew Neck Camis"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FNavy-Halter-Cut-Out-V-neck-Tank-Top-p-1216712.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/8F/3E/bd2bafef-6489-4104-9151-e11b6687770a.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/1B/96/8f4fbf15-5f3f-41cb-b331-74d975a00bb0.jpeg']",
                                  "item_price": "USD 6.95",
                                  "store_name": "Yoins",
                                  "item_title": "Navy Halter Halter Cut Out V-neck Tank Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Cross-Strap-Front-Plain-V-neck-Cami-p-1220804.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9D/6D/6f0f99b4-dc0b-400b-9dd5-a72a65a785a7.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/82/ED/5adb0cc8-b23d-4208-ad46-3003fc6a48dd.jpeg']",
                                  "item_price": "USD 5.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Cross Strap Front Plain V-neck Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FWhite-Cross-Strap-Front-Plain-V-neck-Cami-p-1220810.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/08/20/55d0b504-860f-438e-80a2-fc70b93bbe91.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F3/8B/2d4b1c3b-20db-4c42-95cc-386e7b2f6d51.jpeg']",
                                  "item_price": "USD 6.95",
                                  "store_name": "Yoins",
                                  "item_title": "White Cross Strap Front Plain V-neck Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FHigh-Neck-Random-Floral-Print-Cami-Top-in-Navy-p-1177237.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9D/11/8bbd3f00-0bc8-4ff4-b1ad-a44e5764c6ba.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/27/EF/d9fe9547-6420-4daa-88fb-24247aff19a9.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/23/F1/e9b98d2e-8155-40b0-a278-355ad61323f2.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/04/C7/03da25af-076a-4562-90db-d99bc11c5126.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/38/6D/fa07b7d6-c1c1-4782-b5b3-4ce068e0296a.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/5E/45/7eced61b-87a0-49e3-bc48-26dcd3897944.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/1B/F5/18d16174-8fa4-4bde-879a-9947c4062b00.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/57/BB/878175aa-31b5-4b29-846b-7dfd615a3602.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/6B/E7/a3d714d4-eb83-4c46-983a-d920941267e1.jpeg']",
                                  "item_price": "USD 8.95",
                                  "store_name": "Yoins",
                                  "item_title": "High Neck Random Floral Print Cami Top in Navy"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FDark-Blue-V-neck-Lace-Insert-Top-p-1177147.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/68/9C/e30ca2b6-f4a1-41d4-a22d-cf90d8ff0123.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/14/C0/3e73d736-c9c1-4a4a-a099-7c6a7ccbb6ba.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/43/D2/153009c2-29d4-4f01-86c1-79583b2560b4.jpg']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "Dark Blue V-neck Lace Insert Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FSexy-Black-Round-Neck-Backless-Tank-Top-p-1176684.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/24/17/1615ffc6-6377-42ee-adf0-804ce1fafcd2.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/66/69/55e205d0-7e5c-427b-b604-fad14793edb3.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/28/D5/668379ad-51c0-4d1f-8a40-02235adf86ec.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/EC/54/e47ce0f8-759f-4fad-8870-f63720fd1252.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/8C/1D/0e8c54a9-a5e0-49ca-b142-df78c2aa52ac.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/7A/6F/8d625b11-a5a5-423a-89e8-1da4b357dfb6.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/95/24/b4ec72dd-3ce6-4677-b02f-5921553b28f2.jpeg']",
                                  "item_price": "USD 8.95",
                                  "store_name": "Yoins",
                                  "item_title": "Sexy Black Round Neck Backless Tank Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FCasual-Random-Floral-Print-V-neck-Cami-Top-in-White-p-1177092.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/99/9A/e4a8e70a-a839-4822-834e-bac46afc5c80.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A1/11/4583fb67-9e08-4f8c-90f2-1b1e2bdd14bc.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/EE/27/767f2ba9-77e2-4fa6-9671-7e091b39a1ec.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/FB/C9/35c492ed-49ad-4be4-abee-5c874e112787.jpeg']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "Casual Random Floral Print V-neck Cami Top in White"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FGrey-V-neck-Cami-with-White-Geometrical-Pattern-p-1160461.html%3Fstyle%3D1",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/59/DD/5abd13c1-bf29-4932-9555-d0465cb7e42a.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/50/1A/85d0f831-1568-4a26-a704-cc1f060ca303.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/EE/7C/be819cc2-1d29-4705-873b-97d6ade76fd0.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/47/B6/5931d91e-615f-471f-8eaf-bcdc08833be9.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D8/D3/cb7dfa6f-aff3-4f3b-afc5-2c0d35948df8.jpeg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black V-neck Cami with White Geometrical Pattern"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FGrey-Sleeveless-Cross-Front-Top-p-1161521.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A3/45/c7a2742e-7bca-4bc9-b849-7498904a4bde.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/7C/2F/5dff9834-21e5-4f49-b45e-16ccaf47fcd2.jpg']",
                                  "item_price": "USD 6.95",
                                  "store_name": "Yoins",
                                  "item_title": "Grey Sleeveless Cross Front Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Cross-Front-Top-p-1161964.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/EB/9F/e6e264b9-48ef-4532-a8ea-5e5b02fcf239.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/2C/40/9ca8ba28-464f-4cfb-afbf-9449dfd4797f.jpg']",
                                  "item_price": "USD 6.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Cross Front Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlue-Random-Floral-Print-Round-Neck-Cami-p-1162986.html%3Fstyle%3D1",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/3F/00/52ec8cac-e0df-49f9-8d13-3faa3a519858.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A1/DA/f1889bb2-389e-4378-8a79-12b4714b41c8.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/DA/CD/d8956d98-ecbb-45d1-91d6-344d2690eeb3.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F3/64/81f937ff-484e-468a-98e6-14099793f86c.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C2/67/5d10d5de-1e2a-4296-835e-c6c58eb937de.jpeg']",
                                  "item_price": "USD 8.95",
                                  "store_name": "Yoins",
                                  "item_title": "Blue Random Floral Print Round Neck Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FHigh-Neck-Cami-Top-in-Grey-p-1165145.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/68/29/033198d2-3ef3-466f-8448-848cf9ac25af.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D7/F9/94a34e93-4ab0-44ec-8fa6-e2f85f7aae76.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/4B/8D/12ca1c04-5ea8-43d3-a860-cf8eeef1e3ea.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/68/88/5935e42e-c67f-40d0-9ec4-a5c31fe4c2f2.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/19/A6/216b0d26-b745-4d60-9473-a56c7a224b78.jpeg']",
                                  "item_price": "USD 5.95",
                                  "store_name": "Yoins",
                                  "item_title": "High Neck Cami Top in Grey"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FWhite-Cross-Front-Top-p-1161936.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/78/FE/c9fdc129-a0ab-41eb-a3f7-1f72f67e3d76.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/7D/FC/c5a029fc-ddd8-4cd8-975c-a08fe0155f95.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9B/06/892233a4-76f4-49f4-8df5-105d1627aa9d.jpg']",
                                  "item_price": "USD 6.95",
                                  "store_name": "Yoins",
                                  "item_title": "White Cross Front Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FV-neck-Random-Floral-Print-Cami-Top-in-White-p-1154150.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/00/30/3f52cdda-7883-46ca-b550-5a2ba19d19d7.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/6F/D8/e674749c-cd7f-4425-bdf8-412e4909d8fe.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C4/02/303fa635-3dd2-4b75-939c-91a64f286fe4.jpeg']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "V-neck Random Floral Print Cami Top in White"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FCactus-Print-Tank-Top-in-Black-p-1164028.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/5E/20/82b8e97b-98f8-4c6e-8fc9-8fd90c3c1b04.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/6E/A7/de327eb2-1687-4869-bed3-0bf117ea406c.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/97/A1/ddcf46e1-7392-4293-a478-08c1fdecbdae.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/75/69/39a1a12f-a2a4-4c7f-b035-7b0d1a9688de.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/19/02/d0652518-ba29-4fbb-8693-595222f3d818.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F5/02/f1d84323-9abc-4398-b293-a34832d18dfd.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/6A/7D/b55674b9-cc8f-4064-980c-d602c4a376a9.jpg']",
                                  "item_price": "USD 7.95",
                                  "store_name": "Yoins",
                                  "item_title": "Cactus Print Tank Top in Black"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FV-neck-Overlay-Dot-Drint-Cami-Top-in-White-p-1163359.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/53/D1/8ad557fa-ca02-4bb4-8067-cc154d6de1bd.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F3/6B/39e1073f-8b96-4d96-9e81-2d72966dd138.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/50/2C/6d723fcd-7f77-48b4-8f71-c561cd3366cf.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/EB/E6/3082821c-2c8c-4e2f-a4e9-f845c807eb2b.jpeg']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "V-neck Overlay Dot Drint Cami Top in White"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FWhite-V-neck-Random-Floral-Print-Cami-Top-p-1155941.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/88/E5/2534f83b-8c7c-41ec-b206-c4c124b0e319.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/99/94/932c7843-726e-469c-8bc1-8615097d5d85.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/83/6D/2dfba5a5-19a3-4544-bf00-bb9b93120e91.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A0/9A/4048256d-6e73-447b-ae8e-c33f18e1444b.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/6B/6E/3d184ad1-cbc1-4709-87cb-b72b1323c71d.jpeg']",
                                  "item_price": "USD 8.95",
                                  "store_name": "Yoins",
                                  "item_title": "White V-neck Random Floral Print Cami Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FRed-Scoop-Neck-Criss-cross-Design-Sports-Top-p-1167482.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/91/C7/3dca8901-ffe9-4f2b-a4ce-ce0377c84305.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/AC/28/014c7728-e5e9-4b02-9fa2-076d616645e1.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/99/14/3584606e-9c29-4153-ae88-e5e469768d1a.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C3/70/dac4bd04-405e-4ae3-84b8-a5967a5de473.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/76/A0/9ee9a553-c9f0-4d2a-a731-f0e54efcd75b.jpg']",
                                  "item_price": "USD 6.95",
                                  "store_name": "Yoins",
                                  "item_title": "Red Scoop Neck Criss-cross Design Sports Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FNavy-Random-Floral-Print-V-neck-Cami-with-Zipper-Design-p-1161483.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/57/06/f8354406-bf2c-4d1d-bfe5-3fa98029c283.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/FF/B2/62d4861e-26b4-434e-a3ad-d7eab782095c.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/8B/9F/b307aac0-93e3-492d-9f60-a164a3665ec9.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/6B/B0/ace749c7-ee6e-49c4-af8c-1fc42dbf764b.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/39/CF/578aefcf-3a92-4fec-9b72-c94cbb2927ad.jpg']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "Navy Random Floral Print V-neck Cami with Zipper Design"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FV-neck-Random-Geometrical-Print-Cami-Top-p-1158974.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A5/0F/338fcab9-904a-4933-8268-335d611ae48c.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/6D/68/f548fcb1-b0ad-4ba8-af20-1c2d05abab50.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/74/1B/2afd302b-7335-4a35-baee-5befd5e33dab.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/55/B8/680396dd-27b5-44c1-b7bd-89137a5cb652.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/98/D7/1bb42307-cb6d-4a49-93ae-c6ec846b2145.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/54/2C/a168fa95-5ebd-4d31-9e2f-cb9a842172b5.jpeg']",
                                  "item_price": "USD 10.95",
                                  "store_name": "Yoins",
                                  "item_title": "V-neck Random Geometrical Print Cami Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FWhite-Chiffon-Crochet-Hollow-Cami-Top-p-1157622.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/2F/61/7432e3cc-af3c-4abb-955a-c8779fc160bc.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/56/F0/685d2f27-d7d4-44c4-b0e5-a9abef424171.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/8B/05/6bf76bd1-62ab-4692-812a-2397d72318d2.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/EB/B1/a242d463-fd40-438b-abd0-c79c5fe8ebf6.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/7F/A7/ca738575-e694-46da-9f2a-9088977a2422.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/CF/4F/da197ad4-eee3-44af-95ea-f8b23f434482.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/61/A1/394cd3e4-89f6-46aa-ac22-d48569577df9.jpg']",
                                  "item_price": "USD 7.95",
                                  "store_name": "Yoins",
                                  "item_title": "White Chiffon Crochet Hollow Cami Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FNavy-Random-Floral-Print-Round-Neck-Cami-p-1137657.html%3Fstyle%3D1",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/24/A0/ff6848a5-94b7-4112-9917-0dc6659a04da.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/DF/99/81e41931-fafa-437b-8d4d-cc10a6b440c7.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/AF/DF/ae2bcf9c-a3ba-44b7-a2ec-605342988159.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9D/15/8de09b8a-0f51-4cd5-b39b-261091495869.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/3B/D1/44b3d97f-d23d-44e3-aff6-250882b28f92.jpeg']",
                                  "item_price": "USD 7.95",
                                  "store_name": "Yoins",
                                  "item_title": "Navy Random Floral Print Round Neck Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FV-neck-Irregular-Hem-Tank-Top-p-1151790.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/92/C1/d64fe1ed-cb14-4ca8-bcc3-bc476505d94c.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/4E/EF/007141bb-1013-4606-8862-bbf68993f3a4.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/1C/65/978f5201-d3a2-49f2-8776-3087fbc3ca49.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/25/74/536f4e7c-fb4d-45f9-a377-7dd4099d386c.jpeg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "V-neck Irregular Hem Tank Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FDark-Blue-Random-Floral-Print-V-neck-Cami-with-Zipper-Design-p-1137659.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A4/49/3fdad951-8cf0-4ec8-937a-2eee6f0a2737.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A0/D2/c0d37e17-4949-4489-981b-3f4b7c41fb65.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/3D/72/8ddc3d34-c8f3-4471-b00f-27608dd2fee6.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/32/53/ca5ebdd1-bf7c-4286-899b-f5e3daf45c25.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/19/7E/85663391-0d31-49c3-bf27-76e581010cad.jpg']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "Dark Blue Random Floral Print V-neck Cami with Zipper Design"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FLight-Blue-Random-Floral-Print-V-neck-Cami-with-Zipper-Design-p-1137660.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/67/E3/d418ed52-0574-4e3d-9c6f-bbd21d99f32b.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/5E/E9/a6f02ee4-195d-46c8-b73e-71d7499fa16d.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/E9/93/d9803e56-5d1c-4743-b9ce-f07942b65be1.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/54/9B/aba44fc7-a6b4-4288-b1ee-14b99fb26947.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BF/80/ba109145-10db-4fda-882e-ee62a7cfc5fd.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/E4/EB/b4ec5fff-c93b-4073-bf3c-3d328d67b0ab.jpeg']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "Light Blue Random Floral Print V-neck Cami with Zipper Design"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Design-Chest-Cut-Out-Camis-p-1144401.html%3Fstyle%3D1",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F3/DD/b365c4bd-f2da-4106-831f-ae2dcdd1a8bb.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/0C/51/59080485-8c0f-48d5-980a-052a9bf3868f.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/33/47/9c873ae2-7924-4bb3-bebe-b85b8452ba00.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A8/15/68f5f7f7-7faa-44d9-8725-546a496b8ee2.jpeg']",
                                  "item_price": "USD 5.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Design Chest Cut Out Camis"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FWhite-Sleeveless-Design-Chest-Cut-Out-Top-p-1144396.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/EC/74/4a42113e-76c7-4d05-881d-cb2e0e63dba3.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/EC/1B/8e88adb8-23d9-49c6-afab-5360f0817ae0.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/13/17/0a1a3549-b1bc-4e33-bc46-080a11291b6f.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/8B/64/0e0cac3a-cffb-41cf-835e-fd9a7d467292.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/35/95/dce95a7c-aea1-4617-9ccb-5be8b1253bcf.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/18/4F/c18f8e4e-b6cf-436b-8895-79888f0520c9.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/8C/44/9b47cbd7-bce0-48fd-83b2-cce306d2b955.jpeg']",
                                  "item_price": "USD 5.95",
                                  "store_name": "Yoins",
                                  "item_title": "White Sleeveless Design Chest Cut Out Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FRed-Sleeveless-Design-Chest-Cut-Out-Camis-p-1144397.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C1/96/748b8106-1f39-48db-9675-a0d236d5a43a.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/76/AC/c350f8c1-826c-4618-99f9-de87b616f1f8.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BB/27/47c9099b-cb0d-49ba-b007-47a166874032.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/8A/94/dd99eb59-4895-40c0-a549-8fb326837e68.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D3/EC/5df033dd-4343-4ea6-9e49-650521f8f7b2.jpeg']",
                                  "item_price": "USD 4.95",
                                  "store_name": "Yoins",
                                  "item_title": "Red Design Chest Cut Out Camis"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FArmy-Green-Chiffon-Double-Layer-Lace-Hem-Camis-p-1135173.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BB/A4/fe24589e-1fc7-457d-9e6d-ce47f27d162a.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9D/49/acdee0d9-06a5-483c-9a2e-1f3790dac71a.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/93/BF/1af0294a-5a9d-4f7b-a3a1-4f0fbe94bf82.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BD/CF/a2efe337-9f28-4de9-b701-bf0c2246eb39.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/3B/B0/8ad1056f-9b9f-4a45-addf-522b5427fce6.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/12/88/4994e13e-8bcf-4369-8616-29867e3efa1b.jpeg']",
                                  "item_price": "USD 8.95",
                                  "store_name": "Yoins",
                                  "item_title": "Army Green Chiffon Double Layer Lace Hem Camis"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FWhite-Sweet-Open-Front-Cross-Strappy-Design-Crop-Top-p-1127833.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/23/27/5480983f-3371-4098-98e5-11b9deda7a1d.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/94/25/0ea30131-04ff-4cf4-ace3-68862641f57b.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9C/D3/c7a21269-c99d-4b4b-848c-2549a6503ada.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C6/FD/07f9088d-128d-447b-ad69-c657ab8d190d.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BC/3D/0054966f-0072-4b0e-af6e-91f102d17ac8.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A9/6A/c17d6622-7bd8-4942-9765-a2589a497826.jpg']",
                                  "item_price": "USD 12.95",
                                  "store_name": "Yoins",
                                  "item_title": "White Sweet Open Front Cross Strappy Design Crop Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FCoffee-Sexy-Velvet-V-Neck-Camis-p-1109584.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C7/27/07ae563a-9311-4860-819e-a0050fa31230.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/69/A4/245b5f8b-4959-4f36-bd99-0b7fff5354f5.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/11/E6/6316251e-9601-498e-8734-86e0b2f0aebf.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/13/D6/d2d02359-da32-4c58-b51f-e1b5ffde87ce.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/6A/A0/51a29e57-7a61-4d6f-947a-8e74452f5ef6.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/42/7D/e299a569-521b-452e-b980-0263f97c4f4c.jpg']",
                                  "item_price": "USD 13.95",
                                  "store_name": "Yoins",
                                  "item_title": "Coffee Sexy Velvet V Neck Camis"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FWhite-Sexy-V-neck-Hollow-Out-Lace-Insert-Camis-p-1070417.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/00/1F/497101c1-39ad-4a54-9397-f3afbb5bd59d.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9E/F2/81e4ec72-bb9a-43aa-a709-24ae59771f98.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/89/9B/07e8e6c8-b3d8-41ae-b6ad-ebf961b7f09e.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/95/F5/c8c878da-94f5-41ca-a217-8226d89a3a29.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/31/AC/e644d5b0-d949-4ba5-a0de-70b45f0ef194.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9A/39/fbb4f31c-5468-4590-bc13-a27829b6096f.jpg']",
                                  "item_price": "USD 8.95",
                                  "store_name": "Yoins",
                                  "item_title": "White Sexy V-neck Hollow Out Lace Insert Camis"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FNavy-V-neck-Wrap-Front-Cami-Top-p-1056562.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/80/2E/a0eb0c64-3a5f-4b1e-8764-bbaa5780dd8c.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/56/63/b0e0a418-a71c-4a55-838c-d14cc9eb2a83.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9F/44/f52126a5-0338-445c-a536-fce183ff2b6a.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/E8/59/452d17b1-4811-4288-921c-517d91e6c4eb.jpg']",
                                  "item_price": "USD 8.95",
                                  "store_name": "Yoins",
                                  "item_title": "Navy V-neck Wrap Front Cami Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Halter-Neck-Cut-Out-Back-Tank-Top-with-Curved-Hem-p-1005853.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F1/A7/3fe60fe5-f6d3-4c0d-878d-c02340d4ec94.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/AC/12/31c0160f-5143-456b-b7a1-14615bee6d86.jpg']",
                                  "item_price": "USD 6.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Halter Neck Cut Out Back Tank Top with Curved Hem"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FWhite-Random-Floral-Print-V-neck-Cami-p-1291179.html%3Fstyle%3D1",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/95/42/aa4e8f7e-4cdd-450b-a296-87869235bc49.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/5F/0C/ece7db65-f258-4f2d-98f3-baac80c128c9.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/14/DA/01335d14-b25f-478b-8bec-79a33dd386f9.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/70/D6/a8c9d526-567c-44ad-8754-419d182052ee.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/03/76/a8ca278d-daa2-4558-a504-0d24d4c65b72.jpeg']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "White Random Floral Print V-neck Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Lace-Trim-Metallic-Cami-p-1394112.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/3A/83/93afe87b-74a1-4d80-b9ec-393f62d99680.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/FB/BC/24d7f3f3-3e10-437a-ac04-a790336436d0.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9F/1E/e80f5034-399f-4ba6-b794-65c7f8d6870b.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F3/B8/4e6b91db-1634-4955-927b-60d0e2359798.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/30/5C/5c0807a7-a2bd-43b5-adeb-96e6df75f4ef.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BE/D5/5710cc4b-2cb8-4a4d-abf6-2d6c5ab62a26.jpg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Lace Trim Metallic Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FZebra-Stripe-Cami-Top-in-Brown-p-1407909.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/5C/78/4d2c2c90-6647-4ca8-a67a-e227c4ce2fcd.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/72/FF/51509632-7c32-4c1e-a81c-b1408dca5e02.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/86/2A/9225ae92-cce8-40f8-bd9a-1b4ec69ae761.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C6/A6/b777928e-41a7-4a1f-8784-e731de0a2aef.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F0/B0/fa3bd2f8-fe06-4bb7-bf5c-5c1680e278d0.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D6/F4/41dbf57d-5fbe-40cb-9168-46ab551a8b17.jpg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Zebra Stripe Cami Top in Brown"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FFashion-White-Tassel-Hem-Plain-Scoop-Neck-Cami-p-1406241.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/5D/A8/2bb17eb1-9a11-4129-a7b7-ca1c51fae7a6.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/45/33/b4e75c71-31f2-4305-816a-d1233a5f068a.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/DB/24/592696b6-6d6c-4c28-8c41-19966d5f233f.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/54/E9/6b99bd55-c083-40d5-8bd6-2d9449ca9077.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/8F/7C/35cd09f4-f66d-420f-8cbb-79312a4c6112.JPG']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Fashion White Tassel Hem Plain Scoop Neck Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FRed-Halter-Buckle-Up-Crop-Cami-p-1406157.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/B6/F4/0b0ec6dc-04d6-4cb8-8a49-35a5234acb93.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/4D/2D/19e89fd4-af00-4f81-80f4-35b2e8557501.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/7E/E1/2e7a39c6-6baa-4f71-803f-00638d80508a.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/FF/49/1a34f073-1f6f-484c-ad49-a24d99a5d3fb.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/71/35/34963a9c-60b0-41ea-a50c-511ae501113e.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/0D/63/996d43c0-1c4f-461c-92f6-f5907d816e10.jpg']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "Red Halter Buckle Up Crop Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FGrass-Green-V-neck-Tie-up-Design-Flounced-Hem-Cami-p-1399703.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/39/A8/9a4ad84c-edab-46ec-ab0c-87051be90501.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/44/40/b872fc71-be67-4b35-8307-aa9f7b47ffe5.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/25/79/d3119a5f-b5a7-4383-ad4b-79fa87333a10.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F2/00/2203bf68-b078-442b-85cc-945dc660839f.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/5D/84/2eeba023-ec91-4c6a-8724-3a5801406928.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/EC/3D/06673fbb-5dbc-488d-a6d5-660aa2d70664.jpg']",
                                  "item_price": "USD 17.95",
                                  "store_name": "Yoins",
                                  "item_title": "Grass Green V-neck Tie-up Design Flounced Hem Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FOrange-V-neck-Tie-up-Design-Flounced-Hem-Cami-p-1399704.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/73/E2/9bc0ff07-c49c-4da9-9a31-248a221d9584.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F9/E5/04a82600-57e7-4ee8-b8bb-83e6fea4260b.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/82/96/d6e9c2da-97aa-420e-b6c4-278553b102af.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/45/45/c66b3c18-ecfa-43c8-a034-d1017b728842.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/22/E5/39c1e27d-37c9-4dbe-8e92-417cb3342538.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/29/07/861b8e71-4cf1-4b98-b901-f073e4b0660a.jpg']",
                                  "item_price": "USD 17.95",
                                  "store_name": "Yoins",
                                  "item_title": "Orange V-neck Tie-up Design Flounced Hem Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FWhite-Zipper-Design-Random-Floral-Leaf-Print-V-neck-Cami-p-1396394.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/6D/BA/ba238b00-5b4b-4b97-ac12-e4a10a374be4.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/96/4B/ff16b139-b214-4f38-a848-36bac2b04513.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/96/19/ab7ecc6f-b6bb-42b6-b316-a459dbd673c9.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/0C/6A/bbff5730-4cae-41cf-a7a9-73c96b46d1b1.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/3E/63/b8a41a09-79e1-4d78-b2e9-c30915e07bcd.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BC/88/1e9de2ec-f08a-4f4e-b21d-bb2a275f3b6e.jpg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "White Zipper Design Random Floral Leaf Print V-neck Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Glitter-Gold-Lurex-Ruffle-Tank-Top-p-1400245.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/68/51/85502c0f-6431-46ed-a481-949ac5f7166a.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/99/97/e55ddad7-d424-432d-9269-e41281d1ae5b.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BC/70/63a569ab-cbae-480e-abc6-73ef55d9491e.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/B1/1F/19645d95-f62f-4bbe-bb41-f9e351774aa8.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/31/5E/e3c884ee-56ef-41bf-880e-ace3523f26a7.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/E3/0A/b146e8d3-6905-47a6-ac04-53ab61e5cabc.jpg']",
                                  "item_price": "USD 15.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Glitter Gold Lurex Ruffle Tank Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Hollow-Design-Scoop-Neck-Camis-p-1303859.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/65/03/cb612038-b033-442d-8cd3-6c966792ffbb.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9D/2C/f8a0dfb1-ee88-47bd-8b66-ea408b5a8c96.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/B2/EF/7c6ba6c6-9f71-4ad3-bf25-6566ce253ed9.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/CA/CC/bb7bbe64-753f-44f1-9642-3b53b8301266.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/0A/F3/f1100458-4005-432c-afac-fda1347d5e89.jpg']",
                                  "item_price": "USD 7.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Hollow Design Scoop Neck Camis"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FYellow-Random-Floral-Print-V-neck-Cami-Top-p-1275334.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/5C/FC/a0766c02-7ad8-454f-a12d-8032315a965a.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/18/9B/fee0fcf6-9943-4f99-9dbf-6b553f0ee0f8.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/1D/19/60c79975-4d35-4362-88d1-8bab296c933b.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/13/5A/d57901c3-4f86-49ee-803e-5d5a68378ad1.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/0C/F9/46d1e442-c297-4836-85ff-1d1a5c314635.jpeg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Yellow Random Floral Print V-neck Cami Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FGrey-Lace-Insert-Stripe-Round-Neck-Cami-p-1288100.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/E3/76/34efc3ed-8e0d-4074-bd70-3e3111c21df3.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/E7/20/57a4a2e4-0946-4e2f-9b8f-1eb6821e0cde.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C3/70/5152e6c2-f60b-419e-90b8-ebb1a0c26e76.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BB/6F/85c3b5dd-1e20-4d9d-9aa6-eb4cf0cdbcfe.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/6C/F4/f9af8e7f-5dbc-47b0-a667-b5c6fcc45b61.jpg']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "Grey Lace Insert Stripe Round Neck Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FGreen-Lace-Insert-Halter-Cami-p-1271749.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/07/9B/3326196a-c2f7-44b5-80d2-19df05cabaaa.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/2E/8B/17bea504-7294-4666-a3a9-67e101374a8a.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/2D/C2/feaccaef-c4d4-4a73-8eeb-a68c44b32640.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/98/86/5eddd9d9-8fca-4dc8-81e5-9116f960eb6b.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/56/52/854eb2ba-250c-4951-8bc9-bc5dbdfa1320.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A3/97/4e7cd3b7-5de7-4414-8fb7-bb8966aa89a2.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/CC/C1/0f4279d8-781b-47a2-b9b2-40d34be8d574.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/76/33/0bd7bc17-0227-4607-9c0e-2266c8f9ca8e.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/7E/94/90cbc457-83fd-4c8d-a343-e893577a7139.jpeg']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "Green Lace Insert Halter Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FGreen-Tiered-Design-V-neck-Sleeveless-Tank-Top-p-1269070.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C8/28/90a7e799-c44e-4f0f-b166-0b817dddb6b1.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C6/7E/62aed856-fe03-4fdc-be6f-475167c9bec7.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/52/BF/4a478a40-dd3c-4470-99ad-e7da75e4dac2.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/E9/1F/b7bf1c9c-8381-4a6f-a497-a6b8eda5ef0d.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/E8/F9/259dbae9-f0fd-459e-b45c-0ff9e41d0862.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/87/8E/0a59b885-d8e5-498c-94df-2dc6d32670c4.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D2/DC/1691f7f0-9962-4d3a-8048-3349c8c2b25f.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/50/C9/67e8bb37-85b4-4697-867b-568689446d09.JPG']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "Green Tiered Design V-neck Sleeveless Tank Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FRed-Tiered-Design-V-neck-Sleeveless-Tank-Top-p-1269073.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/CE/EF/cbbd7e16-71e4-45a8-a0ac-d517e70c9317.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/B9/49/99f84c17-e603-4901-bbc9-e54fd719c04e.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9E/BB/ed934f09-e38d-4eef-ba47-317794be2ae3.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BF/55/040bc469-5948-48db-b0d7-8d6f271ee248.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/64/F6/b17e87d3-9125-4af8-afbf-44fc6d5ebb4c.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/E5/74/dfaa3f31-b937-4d47-b0c6-a7a0919096f1.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/5F/BF/871a43fe-c543-4adb-9743-aef10c2b808d.jpeg']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "Red Tiered Design V-neck Sleeveless Tank Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FWhite-Crew-Neck-Tassel-Design-Crop-Cami-p-1402136.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/67/33/2989de33-5930-4658-aa8e-e2ecd97f2584.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F8/5B/8d85f286-67df-443e-9876-41af441299ba.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/86/F0/9872411a-fb3c-4716-bece-7c8b704395ac.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/B3/20/7c452ac2-92d3-44cf-a9dc-1dc81b12a729.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/07/D0/7eede761-8fcf-4739-b63b-981377d8af51.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/4C/B8/9b7e96b0-c5aa-4aed-9345-fd8f9394628a.jpg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "White Crew Neck Tassel Design Crop Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Crossed-Front-Random-Floral-Print-V-neck-Cami-p-1359605.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/3E/CC/6394a0ef-ef9f-4aba-9260-771fe3f1f966.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/02/AF/7e2788af-0730-4339-b1ff-c1d906579949.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C9/18/36ad8182-5138-4ab2-9959-d84a6f856309.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/AF/19/748b1273-f634-40e8-9958-7e5dd12a768d.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9B/82/dfd6fedd-6df3-4d33-952c-87fabea6b437.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C3/76/eb1b16c0-67f0-4c2f-8e26-f989473ec683.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/FF/7C/8cbededf-08fd-4ed9-ae7a-6617031bf812.jpeg']",
                                  "item_price": "USD 15.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Crossed Front Random Floral Print V-neck Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FGrey-Zip-Design-Round-Neck-Metallic-Tank-Top-p-1392307.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C6/45/cb554677-2fdf-44d5-b1dd-f5c3c6294395.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/B0/C0/d39300cf-a911-48d7-ad4d-898d72b20eab.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F0/C3/3403221d-192d-4108-836d-94a1b89cd75d.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/45/1D/5e767107-5823-4ebe-8f2e-49f17bf13c8a.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/CD/C0/151aa42b-4566-444b-9cec-80b8c11394ba.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/80/B1/da8c9d89-3812-431e-9403-fec5ee451768.jpg']",
                                  "item_price": "USD 13.95",
                                  "store_name": "Yoins",
                                  "item_title": "Grey Zip Design Round Neck Metallic Tank Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-V-neck-Crochet-Lace-Trim-Pinstripe-Cami-Top-p-1382587.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/71/42/80b8ec88-038c-452a-a67a-e52a4cde958d.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/05/78/3ffbb0bf-7d41-45e3-96b3-36f5024a8e51.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/6F/29/c329bfb3-d701-45d0-a9fa-309eb96ef0b8.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/7E/6A/96fa6332-1e65-4b9f-a197-1bfc64d7fbd5.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/18/CD/9c1fe24b-03fd-4073-9036-1023c541b6df.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D3/5A/590c9380-1688-4e31-9292-6bb5d4ea9bd6.jpeg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black V-neck Crochet Lace Trim Pinstripe Cami Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FGrey-Spaghetti-Strap-Deep-V-neck-Wrap-Front-Camis-p-1381460.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/AC/66/9e8bac37-12a9-46c8-9dd0-58b0e42c49e2.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/98/C8/5705dcbf-0e8b-4b7e-b90b-d4b87652c2fd.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/24/26/406b205f-d660-4d56-bb9a-27073d3f905a.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D7/91/dae6300d-4978-40c9-b92c-4ace0883bc04.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/47/27/22bcebae-a5c9-4085-bc9b-7a729d206d61.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/70/9A/fc307861-a561-494a-9f3f-c02e448dfae6.jpeg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Grey Spaghetti Strap Deep V-neck Wrap Front Camis"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FRed-Mesh-Details-Crew-Neck-Tank-p-1400263.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/2B/A9/96015fd4-6119-4c42-9ba2-9e85b92210fc.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/B4/BA/77ff1b10-65b2-4986-9acb-11cb93a4c7a6.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C3/5B/72b026af-c128-43b2-bd84-f33a63d3b32e.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F9/06/b1a72ed6-bfcb-4aa7-9b22-f6b02df3ca66.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/45/FA/7cf0b690-2824-47e2-b9a8-e4dd72478105.JPG']",
                                  "item_price": "USD 7.95",
                                  "store_name": "Yoins",
                                  "item_title": "Red Mesh Details Crew Neck Tank"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FRed-Backless-Design-Irregular-Hem-Cami-p-1228724.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/95/BD/fc878647-21e6-45aa-8865-871bc8fc3f56.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/CC/2F/3e9e7241-d35b-4a19-ae93-6db0ec012dcd.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/12/8B/7beded16-0d35-44b6-a202-8f1d8999d403.jpeg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Red Backless Design Irregular Hem Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FGreen-Crossed-Front-Design-Lace-Hem-Elastic-Shoulder-Strap-Cami-p-1399730.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/5E/56/bd27619b-7f3e-440c-bf60-2bb96b87f65c.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/DD/34/57c5656b-19c8-4ac2-ac14-9850a27b5669.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/04/79/8a39f976-c041-483c-8f76-7e20004a03f3.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/E9/D0/05236758-6eff-4eff-98f1-a66232ec9198.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/38/96/198cb511-cb16-4aa2-b902-29b46b112af7.jpeg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Green Crossed Front Design Lace Hem Elastic Shoulder Strap Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Crossed-Front-Design-Lace-Hem-Elastic-Shoulder-Strap-Cami-p-1399733.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A5/3B/f7d68107-a133-4b3d-b958-e0289286d187.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/13/7A/f61ef358-f247-410f-8352-5ccc777f3539.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/50/4B/cf4567e8-e92e-40ce-b1ec-46b7a0b2bdf6.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/2D/D7/cb5f33a5-3ff0-4af6-9903-ed3449087de2.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F0/DE/858b81a9-5ec8-46ae-b96e-dc728bc2dd70.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F3/D1/144933c9-3084-4a5d-b241-db35f4eb9448.jpeg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Crossed Front Design Lace Hem Elastic Shoulder Strap Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FCameo-Turtleneck-Sleeveless-Knitted-Tank-Top-p-1396294.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/37/CB/c4063b58-fce5-4c90-9c48-35c38ddf7ad3.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/00/6A/2de73652-ea27-484f-b6ed-d1f817cd8f64.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/B7/1A/7e671a88-13ad-4296-93ec-9054cbe8be2b.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/18/64/4d6ed2ed-ab91-430d-ab52-19b5a3f34009.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/8C/29/ef4d56cb-4882-4f26-bf96-10194d125b41.JPG', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BA/75/5bcc205d-fc27-4d76-86dc-1d801f2dd036.JPG']",
                                  "item_price": "USD 7.95",
                                  "store_name": "Yoins",
                                  "item_title": "Cameo Turtleneck Sleeveless Knitted Tank Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FWhite-Lace-Insert-Random-Floral-Print-Halter-Backless-Top-p-1396310.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/7D/87/ba25557c-d252-4a0c-9955-1464f33d4ca5.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A7/0F/32f86757-9365-4f1d-9b2c-b1c295e0dfac.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/CC/B5/6d176735-2b80-43a6-a428-f743c9312d3a.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/15/74/978bf771-f873-4749-a3da-fba4c5e896f6.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/52/16/f024b5f3-0058-4267-8f50-c1bb4fcdc744.jpg']",
                                  "item_price": "USD 13.95",
                                  "store_name": "Yoins",
                                  "item_title": "White Lace Insert Random Floral Print Halter Backless Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Letter-Print-Crew-Neck-Fishnet-Cami-p-1396327.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/43/E8/54dfb757-c65c-48b9-b2c0-47fcb668c2e6.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/98/30/cc29934d-5d70-426b-8464-8e7322dc7585.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/46/E6/72c8b8fc-dd25-4fb4-b1ef-797f32429eb1.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/E4/65/7722309b-ebf8-494d-a86c-8389ae27cf75.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/82/94/6b0e972b-0822-4c60-ae1a-01dccdc63489.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/91/88/ea764f82-3caa-4fe2-aa13-01f93c9373f6.jpeg']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Letter Print Crew Neck Fishnet Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Spaghetti-Scoop-Neck-Bodycon-Camis-Top-p-1376767.html%3Fstyle%3D1",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/FD/3A/61f8309b-7c9b-4921-8af7-5b1ef73c081f.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/93/4F/110eec2c-79d6-4c06-a76e-0ec8ccb4fd05.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/CB/AE/8fce7470-fdf2-4496-9174-6b6daef0b475.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/50/2A/3421f6c4-5eac-43cc-a4b3-cf9050e1229f.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/41/CB/7bfaf08b-1656-4ee9-8442-8c5740ed8d92.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/0F/10/4417a691-30ac-40bb-bc80-4f5c4c5762a9.jpeg']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Spaghetti Scoop Neck Bodycon Camis Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FNavy-Slit-Design-at-Back-Random-Leaf-Print-Sleeveless-Tank-Top-p-1171481.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A0/7A/f900ff9b-97e0-4843-a38f-f0214a267777.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/18/CD/b1dc136a-160d-4ab7-b9a2-30e7b98414a2.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/08/F3/9c9899aa-c4f0-424a-a827-0d72e1592bc8.jpg']",
                                  "item_price": "USD 13.95",
                                  "store_name": "Yoins",
                                  "item_title": "Navy Slit Design at Back Random Leaf Print Sleeveless Tank Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FStripe-Cut-Out-V-neck-Cami-p-1397776.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/78/63/bb7b0379-e3e6-4ddc-8c8e-8e3372328c09.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C3/B6/1779428d-a80e-40fc-b69f-f0b3cfef8181.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A4/74/7a5ee7ae-6bd9-4c03-8590-dbe5ecea84e3.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/B8/DA/f2a5bc5d-ed0d-4436-aedd-9c9474466754.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/61/B7/1d7b4429-b119-4aec-bbc2-6c89db0af72e.jpeg']",
                                  "item_price": "USD 7.95",
                                  "store_name": "Yoins",
                                  "item_title": "Stripe Cut Out V-neck Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Cut-Out-V-neck-Cami-p-1397779.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C0/4E/5eecae45-b091-489c-ac25-c0e2c2f895f1.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/90/BA/9e1fa913-deca-464d-b399-97c2d458a268.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/7B/4D/45c37840-091e-468d-8e04-005fffb5b961.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/70/52/7b2408bd-6228-4f27-ad8a-cd54a26528cf.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/AB/BB/88d8ea04-7ca3-4604-8c55-5ba476e41b7c.jpeg']",
                                  "item_price": "USD 7.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Cut Out V-neck Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FRandom-Floral-Print-Bowknot-Smocking-Crop-Cami-p-1396892.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/FE/7E/303fa84d-8593-4c60-a213-a371b3818403.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/43/34/3b6bac86-0454-4b69-a5ee-a8f7520f3216.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/E5/3F/efc8294b-99e6-4f08-b1a7-a688f76b9b68.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/7B/69/967b2a32-4682-4bc8-b3c0-05880a8b8dab.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/E8/C5/abaa2706-5892-4fb5-8f96-0e599261caa3.jpeg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Random Floral Print Bowknot Smocking Crop Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FFloral-Print-Bowknot-Smocking-Crop-Cami-p-1396891.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/6E/F9/962a9720-5632-46ab-913c-907a386520a8.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/52/41/0acd2739-aa10-477e-8970-b0f5ea731474.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/07/94/9f2c3bb0-8cbb-480a-8f2f-6e20a9ceb4bc.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/6E/D6/6e07451a-bd29-40d4-ac32-760607618385.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/48/22/d262d9a4-53bf-4781-b47d-2f40866e486a.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/24/75/bfcc69bc-62ee-4997-b287-25acdec7bdf7.jpeg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Floral Print Bowknot Smocking Crop Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Totems-Print-Round-Neck-Tank-Top-p-1395722.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9D/9F/47beec41-8251-46d5-9a12-f164bcc7e1af.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/7A/36/fbde764a-e76c-4702-a8af-d58a43448bb2.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/1D/3A/d018ad72-988b-4d55-9578-c096866532f0.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/AC/4A/3ef4f1f7-331d-4b27-84c1-e156961e3d8f.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/73/DF/5dcc1cb4-dea8-42e7-80f2-bf7c2f441c4f.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/48/04/efb901b1-f085-468a-8eb4-0aa107f72d50.jpg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Totems Print Round Neck Tank Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FGrey-Totem-Print-Round-Neck-Tank-Top-p-1395728.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9E/DA/8c7c2cf2-b65f-46ff-a9ad-1d6e4a5499cd.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9A/10/83564d52-466f-4dd6-afd9-bb986b798e94.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/77/EC/75879060-06b0-4feb-9382-786d42e5d247.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/4F/5F/afdab232-092d-42c3-98b1-49c4bc957d1e.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D6/97/a7712f68-918e-41b1-acae-fc24fa1b7a51.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/EA/67/4deacf5c-7cef-4921-8957-de4ae97ba34f.jpg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Grey Totem Print Round Neck Tank Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FKhaki-Crossed-Front-Design-V-neck-Tank-Top-p-1394787.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/72/B0/1f4e2033-2399-4834-9681-0b18b39674f3.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/42/C0/9c9ac4df-1ba1-48d1-8469-11ecc69c6c45.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/97/0A/9c81e6da-d4ad-4160-955d-08f6e552e500.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/82/BE/dc13091f-fcf5-4ba2-ab37-049ed2f635e8.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/97/CC/fbcac10e-b8db-4d66-92c3-ffc0915a6f33.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/EF/33/8fa26479-d038-4695-9c56-389257067953.jpg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Khaki Crossed Front Design V-neck Tank Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FKhaki-Leopard-Halter-Backless-Cami-p-1394780.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BA/25/1d7ec4ba-c5ba-4d67-9655-90f4c801cd8d.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/52/78/012a4e46-d673-4212-b8bd-7f87d1a45296.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/E6/DD/9a3404d4-f240-4873-a952-83948452bd01.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A6/AC/d5a69db5-5374-4c9b-8360-2352cd81dd56.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/3B/93/b96748fb-986a-461b-b22d-cdee3c9b1b3c.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C2/B4/7fda0357-53ef-4572-a65e-db4d0acde206.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/40/63/d134dc76-cbf1-44fd-a78c-40533a800671.jpg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Khaki Leopard Halter Backless Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FGreen-Crossed-Front-Design-V-neck-Tank-Top-p-1394176.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F1/D1/c8110243-995d-42a1-8730-8be8e7a49d2e.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/0C/49/b95a87a6-0590-447c-b498-8747dde89cad.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/12/CB/86b22b24-7457-4fb5-84de-54c9117886d8.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/52/D6/05f8b0c7-1470-49b1-96e3-0e2c78de280c.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/25/CF/03740392-764d-43e8-b7f9-f6e1b511cc07.jpeg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Green Crossed Front Design V-neck Tank Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlue-Crossed-Front-Design-V-neck-Tank-Top-p-1394169.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/DA/44/114745fb-060f-4358-a45f-a1287798255c.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F7/85/42fb3dec-6f0c-474e-b191-61b53fc8d27c.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/02/0F/0f51a6da-6d1e-406e-b7d4-2fa293371a7c.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/01/DA/1e9ba032-e32d-41b8-b9d9-1fe06ed873fa.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/19/7B/9cddbc55-93b2-42f1-9dfc-8a195a4b907c.jpg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Blue Crossed Front Design V-neck Tank Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FGrey-Crossed-Front-Design-V-neck-Tank-Top-p-1393694.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/90/7F/1c289caf-2338-471f-a23b-a0b0558eba4d.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/EE/39/7d3084fd-b86f-423d-9990-3f0d6c3559e3.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/29/7C/7f85012a-29a3-4aee-aac3-ffc6c0f6609e.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/27/0B/1f2d7ae5-3a55-44fa-88c9-2e3d6501cd0d.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9A/B2/2796e6d9-e86d-4e93-b278-4fc6067b3506.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/72/9C/4805b97a-950d-40a8-baf6-b24dd7b90375.jpeg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Grey Crossed Front Design V-neck Tank Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FNavy-Totem-Print-Round-Neck-Tank-Top-p-1393079.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/27/B7/60e6075e-cfe0-4b12-bfb2-e3b2e83e3ec4.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/FA/5D/8ecabe24-c9e6-47d3-b0c5-2fe83426d88e.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/63/81/345bf2d9-30b1-4847-b59c-e1f846a4a2ba.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/54/04/50fceaa3-93d1-4547-8b44-4ba48b2afe9d.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/07/C8/149d51d6-0424-4e66-8ced-df0d0daba7f2.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/96/84/d8e5bb63-fdac-496d-878f-80577015d666.jpg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Navy Totem Print Round Neck Tank Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBurgundy-Totems-Print-Round-Neck-Tank-Top-p-1393080.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BF/F2/94d971a9-dc70-4703-9bbd-678bb8697f50.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F4/73/d4d9a982-5168-4672-9fc3-86bb3dd1c990.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/87/34/608e2a2b-a8a6-4d00-9931-298886f7199f.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9E/1D/be5e9451-4d98-4515-8fd0-1b54f5205b22.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/AC/B9/ee4f6995-f177-44c6-ac79-696295c68fc6.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/63/6A/acf5d7a8-f2fc-4b9f-8a06-21108386b0f7.jpg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Burgundy Totems Print Round Neck Tank Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Spaghetti-Ruched-Backless-Tie-up-Design-Crop-Cami-Top-p-1390326.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D6/4A/48a21363-d2ac-4bd7-aca3-e8b846d09d97.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D6/90/2243026c-8af3-44ec-92e6-501ec51f40c9.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/44/A0/07d4a1e8-49b1-4b8a-9fa1-2ebfe48bb79c.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F3/CB/2bc2ef5b-b3cf-4ecf-a6d3-6f8b4d3572b1.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/12/65/9ae3565c-a93d-4b91-8949-e1743c43c154.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C4/21/a42b104e-2883-4a86-a6c2-caee518a6cf0.jpeg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Spaghetti Ruched Backless Tie-up Design Crop Cami Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Lace-Details-Crew-Neck-Tank-Top-p-1392279.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/84/B1/b6f686f8-3802-4570-98de-5ca9e905ba17.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D3/17/7e2b2ba1-6167-423d-8b13-09fbd7890af5.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/90/70/8307cae1-86cc-4b46-9dc7-81c60a92a302.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/37/26/ba57bbe3-0acd-4c5f-a520-6f4b03540416.jpeg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Lace Details Crew Neck Tank Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FGrey-Lace-Details-Crew-Neck-Tank-Top-p-1392289.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/54/29/85a4af9b-33ee-4fd2-b533-23787d7c4197.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/52/F3/17e63584-1f1d-42f4-b46d-13c70682f1cc.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/14/28/d3c753ac-d8ea-4834-9503-90bb91107c03.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/34/88/77238d53-a1de-4a12-923d-0fc084110d7a.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D6/F9/8371c93c-22af-4144-bf0d-9891487c6b11.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/CF/9F/b8f14120-6d6d-4ae6-a262-9af8339d0ce9.jpeg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Grey Lace Details Crew Neck Tank Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FLeopard-Cut-Out-Perkins-Lace-Up-Front-Collar-Tank-Tops-p-1384640.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/15/1B/1ff5441a-1fb0-45e9-9c4d-eb83a1da6a10.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/42/F0/9ebe155e-8dfd-410f-8bc3-5c44e4861a9e.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/55/70/d0916c89-9f68-4a7c-8d5f-ca2388735bba.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/02/9A/c77c5245-2986-4a20-aa80-3e81274c6e4c.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C0/75/d5676c03-a4ed-4d59-bb01-62b0cf9a679a.jpg']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "Leopard Cut Out Perkins Lace Up Front Collar Tank Tops"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FCool-Black-Lace-Insert-Plain-Round-Neck-Sleeveless-Camis-p-1380838.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/83/D8/445d9b56-6e48-40dd-b1e6-06df1baebf47.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/EC/E8/cd7c8d4c-8fb9-405f-9e8b-1568adc26197.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/54/2A/0da37437-5ad3-438c-b7c5-c1977adeccdf.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/50/59/98f84d26-062d-4ca3-b26d-b47806927ce3.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/DE/CF/8e8b8a53-72d2-4933-8c98-6a882122f368.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/25/24/abdece7f-1c95-4d88-8905-6a0de4cbec78.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BE/E4/080898dd-8dc0-494a-9f60-fb159f65011d.jpg']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "Cool Black Lace Insert Plain Round Neck Sleeveless Camis"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Zipper-Front-Plain-V-neck-Sleeveless-Regular-Fit-Tank-Top-p-1380840.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F8/D3/323118cf-2529-498d-a370-0b410990c554.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9D/88/e4bc1dfa-eb86-49c0-9eff-6a7dd10218f5.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/FB/7C/0cb9d6c0-d547-41fb-bbf6-0f6280d0cfc4.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/20/B2/41531f38-7a5a-4838-a0f0-9c526748189c.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C3/C4/aa29e710-2e92-4787-be68-dc5b1ba28494.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/85/AF/0bed7fcb-08de-4c7a-9b41-39aac4830bb1.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/71/86/4ca8ba68-31a5-49e9-9aea-62bdc5846518.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/CE/C7/2172160a-e78d-40bb-aac2-8ed5f3cdfd2e.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/5A/40/8e8c3f67-86fc-4228-b6c4-3ba1beeaacf2.jpeg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Zipper Front Plain V-neck Sleeveless Regular Fit Tank Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Crew-Neck-Lace-Insert-Back-Hook-Cami-Top-p-1377519.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A4/25/86b90a66-489c-4fec-800c-7ae75a7c8cb6.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/07/4A/fa433f34-e466-45d3-abac-b55182dd7231.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9D/05/f888a3f0-5bd7-4184-a4bf-0427154fe4a9.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/FF/BD/386c0df7-f3de-4164-87a5-8d8cd9b941ea.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/18/DF/bf9458f3-2908-4e5d-9921-d831535787a9.jpg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Crew Neck Lace Insert Back Hook Cami Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBeige-Spaghetti-Scoop-Neck-Bodycon-Camis-Top-p-1376737.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/46/E1/82bab73c-1030-4db1-bbcd-fe2608498257.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/9F/02/78c3bafa-825d-417f-8ab9-0417b6db9478.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/0A/06/67581e3b-44e1-46e8-8b5d-a8e9ef659845.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/41/43/a756d449-b79c-4dab-a9d0-456f9dc71698.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/26/3B/7cfb31d1-a823-4a13-a1b8-38ca8d510cd9.jpeg']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "Beige Spaghetti Scoop Neck Bodycon Camis Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FPink-Spaghetti-Scoop-Neck-Camis-Top-p-1377547.html%3Fstyle%3D1",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/72/82/0df4dff4-cb66-4cf8-9220-f246d59b302a.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/4E/D2/e7587af9-0af1-49a4-a11f-f090e6b8c6aa.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BF/F1/90344f24-82e8-4463-a51b-0890b6d3d3de.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/51/A2/e7f266d7-566d-4465-9285-9936f9e4e86c.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/0D/87/e89b8b53-c022-4167-b095-71681092c7bc.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/77/45/f96943d1-99db-4570-9046-b5f1237f7c7c.jpeg']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "Pink Spaghetti Scoop Neck Camis Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FSexy-Black-One-Shoulder-Spaghetti-Cami-Top-p-1377457.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/AA/07/3839ab1d-318c-4842-b816-f54fb6199941.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/E8/51/7bfb1e3f-a4a4-4a9a-a9b8-eec2bfa52d3f.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/68/2D/6ea12c6f-5d3e-4df9-8bb0-ce3c24730d4a.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C9/C6/bdc300ca-871e-4d76-9ed4-f15db8f2ce1e.jpeg']",
                                  "item_price": "USD 7.95",
                                  "store_name": "Yoins",
                                  "item_title": "Sexy Black One Shoulder Spaghetti Cami Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Spaghetti-Eyelash-Trim-Lace-Insert-Camis-p-1376739.html%3Fstyle%3D1",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/78/FC/a8f786b6-8876-491d-86cf-f93729409a82.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/33/01/39da4c87-2a91-4673-91fc-544159ba0434.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D2/A2/8d4dca6f-5dc8-4dae-a7bb-eca8557a3f69.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/7A/56/482fbee0-486c-4fe3-bcda-10a498d188db.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/69/85/ea9cec6b-fe0d-4bfb-be8c-bfa23642c58c.jpeg']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Spaghetti Eyelash Trim Lace Insert Inser Camis"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Backless-Random-Floral-Print-Off-The-Shoulder-Sleeveless-Top-p-1372663.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/A3/B9/6c0a519f-4187-4e8b-9093-2eed96843a46.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/B4/1B/174547b9-26b0-4b7a-af10-cce4ac2a57fb.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/36/18/2f0792d5-1277-44de-9ec1-95c943f153a6.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/63/E1/336e4cdd-0c5a-43e6-8d31-3ec4debfd2dd.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/53/BF/c2577324-035b-47e5-b7d1-df75d6c62ba9.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/20/18/16f3e371-a98e-45ef-b127-82804ad50c90.jpeg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Backless Random Floral Print Off The Shoulder Sleeveless Top"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Lace-Trim-Adjustable-Shoulder-Strap-V-neck-Sleeveless-Camis-p-1363633.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/AA/8D/809ac9c2-6745-4435-a6d9-b2968d271baf.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/08/AC/155b18c4-c3fb-44c5-800d-ca67ffa45656.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/61/A8/2ec77d67-8fbb-4944-ba32-938439a8bd11.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/EB/32/3e170311-45af-4ccc-a9ab-e631a16677c9.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D1/09/9787cb01-6757-42ae-9e9c-69ac823a1bc0.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D9/14/e28aae16-86df-435b-8853-1b94a9a66197.jpg']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Lace Trim Adjustable Shoulder Strap V-neck Sleeveless Camis"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FWhite-Sequins-Embellished-V-neck-Sleeveless-Cami-p-1356090.html%3Fstyle%3D1",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/65/AC/6a3dec05-4fdd-473a-8dad-6b571ee9845b.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/8D/36/a54bbcc9-8b49-4a5f-9c27-d4553d9a7418.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F9/68/895988e3-3023-42dd-bf92-ce121bba2384.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D0/4B/d5e94933-2de4-4f86-a085-b6ec0066b0bb.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/54/B0/8f965121-ac1e-4dc1-a526-d8d0e05cd8ec.jpeg']",
                                  "item_price": "USD 13.95",
                                  "store_name": "Yoins",
                                  "item_title": "White Sequins Embellished V-neck Sleeveless Cami"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FRandom-Floral-Print-Back-Hook-Eye-Closure-Halter-Camis-p-1354177.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/2B/1E/7224ae39-b34f-4845-a6b6-62e5b9d25b56.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/24/E4/de163e31-a031-4a23-9512-065cd58f4500.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/ED/95/c4815275-8959-4895-83c4-80dcd4bb7fdf.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D4/64/79b680e7-fa23-4a78-8662-ef9aeab026f7.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/FD/E7/886c8282-e595-47ba-9c07-449c8b02baae.jpg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F5/70/80beb88b-5d4f-4f0d-bebe-e0375296d454.jpg']",
                                  "item_price": "USD 15.95",
                                  "store_name": "Yoins",
                                  "item_title": "Random Floral Print Back Hook Eye Closure Halter Camis"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Backless-Crossed-Back-Sexy-Camis-p-1350460.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/82/82/af15594e-a255-49c9-b185-28768af10f67.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F6/E6/108b7594-e201-42da-90f7-1b353d9775f1.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D3/FE/61faa7c2-1425-458e-9028-93648b5d9299.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D6/74/2ff4e45b-5e16-493c-aad5-e8345ed407c7.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/B1/BF/6015acc5-724e-4c1b-9a72-f029dac0e7e8.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/56/3C/09f41497-a5eb-4059-88df-83730d9a9389.jpeg']",
                                  "item_price": "USD 9.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Backless Crossed Back Sexy Camis"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FYellow-Random-Floral-Print-V-neck-Cami-Top-with-Zipper-Design-p-1277773.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/C4/E4/feb8c750-5cff-4a36-98a8-7685cb18b50c.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/51/BA/56c144f6-f636-4fa2-8b7f-7d24a260c1bd.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/11/55/5b28f0b5-abce-4a71-9292-2f3b45c1dfec.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/89/70/dcf21c17-8c14-4ea6-8c3c-437a2640bbc6.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/F2/46/80105d97-2659-4903-a5ef-d128a51c4db2.jpeg']",
                                  "item_price": "USD 11.95",
                                  "store_name": "Yoins",
                                  "item_title": "Yellow Random Floral Print V-neck Cami Top with Zipper Design"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FRed-Summer-Random-Floral-Print-Halter-Sleeveless-Camis-p-1290884.html",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/B5/48/f8797158-7ff7-4409-8da1-e4fdf0597361.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/43/04/94c48676-1cee-40dd-b994-ec56caabbd14.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/18/13/c1fbd19f-7665-4228-9fa7-6779ae7418d1.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/53/CA/342cdd51-d58c-4ec6-bc7c-d75de13bed51.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/D5/5C/41e0a893-2e18-4689-880e-73d382d63865.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/08/8B/f5f6f515-55b4-4253-b2a5-76e31680ec2e.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/63/8D/eb5faecd-c608-4951-8fbb-5b05c448ab6b.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/E6/B4/4582f70c-a5af-461c-b4aa-032df15bc40a.jpeg']",
                                  "item_price": "USD 7.95",
                                  "store_name": "Yoins",
                                  "item_title": "Red Summer Random Floral Print Halter Camis"
                                },
                                {
                                  "store_url": "https://ad.admitad.com/g/6udlqrq8zead6ac57c19fa046e475d/?i=5&ulp=https%3A%2F%2Fwww.yoins.com%2FBlack-Floral-Print-Round-Neck-Button-down-Tank-Top-p-1226300.html%3Fstyle%3D1",
                                  "item_image": "['https://images.chiccdn.com/thumb/source/oaupload/yoins/images/BA/13/1b2d01f4-c4db-42b7-9337-bf193aa6c7f9.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/14/8C/82527b01-a8c2-4a8b-ac0b-82a4e4e766b6.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/5D/7E/2407a0e2-51a4-4901-9b45-5e532fcc7e1d.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/71/AF/a78707e6-6da8-48da-80ec-37d3ad788f39.jpeg', 'https://images.chiccdn.com/thumb/source/oaupload/yoins/images/E7/FA/e05abe8e-14b6-47ae-9808-ddb732163752.jpeg']",
                                  "item_price": "USD 19.95",
                                  "store_name": "Yoins",
                                  "item_title": "Black Floral Print Round Neck Button-down Tank Top"
                                }
                              ],
                              "category_name": "Camis & Tank Tops"
                            }
                          ]
                        console.log("start")
                        var rnd_num = getRndInteger(0, 9);
                        
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
                        
                    
                    

                  }, 2000)

                  



                /* jQuery.ajax({
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
                }); */


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


