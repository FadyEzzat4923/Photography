$(() => {
    $(".down").on('click', () => {
        window.scrollTo(0, $(".hello").offset().top);
    })

    let helloImg0 = $(".imgg").eq(0);
    let helloImg1 = $(".imgg").eq(1);
    let helloImg2 = $(".imgg").eq(2);
    let helloImg3 = $(".imgg").eq(3);
    let helloImg4 = $(".imgg").eq(4);
    let helloImg5 = $(".imgg").eq(5);
    let helloImg6 = $(".imgg").eq(6);
    let helloImg7 = $(".imgg").eq(7);
    let widthLine = $(".line-width")
    let helloText0 = $(".textt").eq(0);
    let helloText1 = $(".textt").eq(1);
    let helloText2 = $(".textt").eq(2);
    let helloText3 = $(".textt").eq(3);
    window.onscroll = () => {
        if (window.scrollY >= helloImg0.offset().top - $(window).height() + 1 / 2 * helloImg0.height()) {
            helloImg0.addClass('scale_class');
        } if (window.scrollY >= helloImg1.offset().top - $(window).height() + 1 / 2 * helloImg1.height()) {
            helloImg1.addClass('scale_class');
        } if (window.scrollY >= helloImg2.offset().top - $(window).height() + 1 / 15 * helloImg2.height()) {
            helloImg2.addClass('scale_class');
        } if (window.scrollY >= helloImg3.offset().top - $(window).height() + 1 / 2 * helloImg3.height()) {
            helloImg3.addClass('scale_class');
        } if (window.scrollY >= helloImg4.offset().top - $(window).height() + 1 / 2 * helloImg4.height()) {
            helloImg4.addClass('scale_class');
        } if (window.scrollY >= helloImg5.offset().top - $(window).height() + 1 / 2 * helloImg5.height()) {
            helloImg5.addClass('scale_class');
        } if (window.scrollY >= helloImg6.offset().top - $(window).height() + 1 / 2 * helloImg6.height()) {
            helloImg6.addClass('scale_class');
        } if (window.scrollY >= helloImg7.offset().top - $(window).height() + 1 / 2 * helloImg7.height()) {
            helloImg7.addClass('scale_class');
        }
        if (window.scrollY >= widthLine.offset().top - $(window).height() + 2 * widthLine.height()) {
            widthLine.removeClass('line-width');
        }
        if (window.scrollY >= helloText0.offset().top - $(window).height() + 1 / 2 * helloText0.height()) {
            helloText0.addClass('apper_class');
        } if (window.scrollY >= helloText1.offset().top - $(window).height() + helloText1.height()) {
            helloText1.addClass('apper_class');
        } if (window.scrollY >= helloText2.offset().top - $(window).height() + helloText2.height()) {
            helloText2.addClass('apper_class');
        } if (window.scrollY >= helloText3.offset().top - $(window).height() + helloText3.height()) {
            helloText3.addClass('apper_class');
        }
    }

}
)
// /////////////////////////////////////////////////////////