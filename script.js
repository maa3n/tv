let mbc1 = "http://www.elahmad.com/tv/m3u8/elahmad.php?http://176.58.79.17:8080/hls/mbc1.m3u8?token=G73neDkcgWiijH2qK085oA&e=1600345007&channel=mbc1";
let mbc1Logo = "https://freemuse.org/wp-content/uploads/2017/06/mbc-logo.jpg";
// **************
let mbc2 = "https://shls-mbc2-prod-dub.shahid.net/out/v1/b4befe19798745fe986f5a9bfba62126/index.m3u8";
let mbc2logo = "https://upload.wikimedia.org/wikipedia/commons/5/50/MBC2_Logo.png";
// *******************
// **************
let mbc4 = "https://shls-mbc4-prod-dub.shahid.net/out/v1/c08681f81775496ab4afa2bac7ae7638/index.m3u8";
let mbc4Logo = "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/MBC_4_logo.png/150px-MBC_4_logo.png";
// *******************
let mbcDrama ="https://shls-mbcdramaksa-prod-dub.shahid.net/out/v1/ce0f0762d89e4394a856c5fd13e43645/index.m3u8";
let mbcDramaLogo = "https://upload.wikimedia.org/wikipedia/commons/5/51/Drama_MBC.png";
// ***************************************
let mbcAction = "https://shls-mbcaction-prod-dub.shahid.net/out/v1/68dd761538e5460096c42422199d050b/index.m3u8";
let mbcActionLogo ="https://seeklogo.com/images/M/mbc-action-logo-96264CBFCB-seeklogo.com.png";
// ***************************************
let news11 = "https://shls-alarabiya-prod-dub.shahid.net/out/v1/f5f319206ed740f9a831f2097c2ead23/index.m3u8?filter=144_720&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0b2tlbiIsImlzcyI6IlNIQUhJRCIsImV4cCI6MTYwMDI5ODI3MCwiaWF0IjoxNjAwMjYyMjcwLCJqdGkiOiIxIiwidXJsIjoiaHR0cHM6Ly9zaGxzLWFsYXJhYml5YS1wcm9kLWR1Yi5zaGFoaWQubmV0L291dC92MS9mNWYzMTkyMDZlZDc0MGY5YTgzMWYyMDk3YzJlYWQyMy9pbmRleC5tM3U4P2ZpbHRlcj0xNDRfNzIwIn0.F4y9Y4zxwahyIuSP4EyJTScm9DJOhgQfR55cHPsrWck";
let news11Logo ="https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/c3/03/55/c303552a-e33e-f2f5-a5ba-f8a8f3ef58a1/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1024x1024bb.jpg";
// ********************
let news22 ="https://live-hls-web-aja.getaj.net/AJA/index.m3u8";
let news22Logo = "https://dwglogo.com/wp-content/uploads/2016/08/Aljazeera_logo_01.png";
// ***********************
let sama ="http://stream.sama-tv.net:8080/hls/samatv.m3u8?720";
let samaLogo ="https://live-tv-channels.org/pt-data/uploads/logo/sy-sama-tv.jpg";
// ***********************
let syriaDrama ="http://www.elahmad.com/tv/m3u8/tv3_anywhere.m3u8?id=syria_drama";
let syriaDramaLogo ="https://www.klma.org/wp-content/uploads/2019/07/drama_logo-1200x1200.png";
// ***********************
let syria ="http://www.elahmad.com/tv/m3u8/tv3_anywhere.m3u8?id=syriatv";
let syriaLogo ="https://image.mysatgo.com/resize-width/400//content/b/qm/29/Thumbnail.png?v=636771893711906388";


    var currentTab = 1;
        $("#contetn1").show();

        $(document).on('click', 'nav.multiTabs>a',
            function () {
                var TabId = $(this).attr('data-trigger');
                $('div#' + TabId + ' ').show();

                console.log("Current Tab: " + TabId);
                currentTab = parseInt(TabId.replace("content", ""));

                $('.tabcontent:not(#' + TabId + ')').hide()

            });

        function next() {
            if (currentTab < 10) {
                $(".tabcontent").hide();
                currentTab++;
                $("#content" + (currentTab)).show();
            }
        }

        function prev() {
            if (currentTab > 1) {
                $(".tabcontent").hide();
                currentTab--;
                $("#content" + (currentTab)).show();
            }
        }

// **************************************************
// alarabya
type =
    "text/javascript" >
    jwplayer("my-video").setup({
        file: news11,
        image: news11Logo,
        width: "100%",
        height: "350",
    });
// **************************************************
        // ********************************MBC1*********************/
    type =
    "text/javascript" >
                        jwplayer("my-video2").setup({
        file: mbc1,
                            image: mbc1Logo,
                            width: "100%",
                            height: "350",
                        });
    //*********************************************************** */

    //*********************************************************** */
// Aljazerh

type =
    "text/javascript" >
    jwplayer("my-video1").setup({
        file: news22,
        image:news22Logo,
        width: "100%",
        height: "350",
    });
    //*********************************************************** */
    //*********************************************************** */
// mbc2

type =
    "text/javascript" >
    jwplayer("my-video3").setup({
        file: mbc2,
        image: mbc2logo,
        width: "100%",
        height: "350",
    });
    //*********************************************************** */
    //*********************************************************** */
// mbcDrama

type =
    "text/javascript" >
    jwplayer("my-video4").setup({
        file: mbcDrama,
        image: mbcDramaLogo,
        width: "100%",
        height: "350",
    });
    //*********************************************************** */
    //*********************************************************** */
// mbcAction

type =
    "text/javascript" >
    jwplayer("my-video5").setup({
        file: mbcAction,
        image: mbcActionLogo,
        width: "100%",
        height: "350",
    });
    //*********************************************************** */
    //*********************************************************** */
// Sama

type =
    "text/javascript" >
    jwplayer("my-video9").setup({
        file: sama,
        image: samaLogo,
        width: "100%",
        height: "350",
    });
    //*********************************************************** */
    //*********************************************************** */
// SyriaDrama

type =
    "text/javascript" >
    jwplayer("my-video7").setup({
        file: syriaDrama,
        image: syriaDramaLogo,
        width: "100%",
        height: "350",
    });
    //*********************************************************** */
    //*********************************************************** */
// Syria

type =
    "text/javascript" >
    jwplayer("my-video8").setup({
        file: syria,
        image: syriaLogo,
        width: "100%",
        height: "350",
    });
    //*********************************************************** */
    //*********************************************************** */
// MBC4

type =
    "text/javascript" >
    jwplayer("my-video6").setup({
        file: mbc4,
        image: mbc4Logo,
        width: "100%",
        height: "350",
    });
    //*********************************************************** */