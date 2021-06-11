
(function ($) {
    if (!$('#header').length) {
        return
    }
    let { id, type } = $('#header')[0].dataset
    let ids = id.split("-")
    let list = [{
        name: 'HOME',
        href: './Homepage.html'
    },
    {
        name: 'SHOP',
        href: './shop.html',
    },
    {
        name: 'Rosman',
        href: './Homepage.html',
        type: 'logo'
    },
    {
        name: 'BLOG',
        href: ''
    },
    {
        name: 'CONTACT US',
        href: '',
    },
    ]
    let logo = list[2]

    const fun = (data) => {
        if (!data) {
            return ''
        }
        let headerItem = data.map(item => `<li><a href="${item.href}">${item.name}</a></li>`)
        return `<ul class="sub-menu text-left">${headerItem.join('')}</ul>`
    }
    let header = list.map((item, index) => {
        if (item.type == "logo") {
            return `<li class='logo'> <a href="${item.href}">${item.name}</a> </li>`
        } else {
            return `<li ${ids[0] == index ? "class='active'" : ''}> <a href="${item.href}">${item.name}</a> ${fun(item.data)} </li>`
        }
    })

    const fun1 = (data, fatherIndex) => {
        if (!data) {
            return ''
        }
        let asideItem = data.map((item, index) => `<li ${(ids[0] == fatherIndex && ids[1] == index) ? "class='mm-active'" : ''}><a href="${item.href}">${item.name}</a></li>`)
        return `<ul class="sub-menu">${asideItem.join('')}</ul>`
    }
    let aside = list.map((item, index) => {
        if (item.type == "logo") {
            return ''
        } else {
            return `<li ${!item.data ? (ids[0] == index ? "class='mm-active'" : "") : "class='has-dropdown'"}> <a href="${item.href}">${item.name}</a> ${fun1(item.data, index)} </li>`
        }
    })
    //  d-xl-none d-lg-inline-block
    if (type == 1) {
        $('#header').replaceWith(`
            <header class="header-transparent">
                <div id="sticky-header" class="main-menu-area menu-padding ">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-auto offset-xl-1">
                                <div class="header-02-right d-lg-flex align-items-center justify-content-between">
                                    <div class="hamburger-menu">
                                        <a><i class="bi bi-list"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <i class="bi bi-search"></i>
                            </div>
                            <div class="col d-block d-xl-none">
                                <div class="main-menu text-center"> <nav id="mobile-menu"> <ul> <li class='logo m-0'> <a href="${logo.href}"> ${logo.name} </a> </li> </ul> </nav> </div>
                            </div>
                            <div class="col d-none d-xl-block">
                                <div class="main-menu text-center"> <nav id="mobile-menu"> <ul> ${header.join('')} </ul> </nav> </div>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <i class="bi bi-person" ></i>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <i class="bi bi-heart"></i>
                            </div>
                            <div class="col-auto d-lg-none">
                                <i class="bi bi-search"></i>
                            </div>
                            <div class="col-auto">
                            <a href="./Cart.html">
                            <i class="bi bi-handbag"></i>
                        </a>
                                <span class="handbag badge badge-light">4</span>
                            </div>
                            <div class="col-xl-1"></div>
                        </div>
                    </div>
                </div>
            </header>
            <aside class="slide-bar">
                <div class="close-mobile-menu">
                    <a href="javascript:void(0);"><i class="fas fa-times"></i></a>
                </div>
                <nav class="side-mobile-menu">
                    <ul id="mobile-menu-active">
                        ${aside.join('')}
                    </ul>
                </nav>
            </aside>
            <div class="body-overlay"></div>
        `)
    } else if (type == 2) {
        $('#header').replaceWith(`
            <header class="header-transparent">
                <div id="sticky-header" class="main-menu-area menu-padding ">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-auto offset-xl-1 d-none d-lg-block">
                                <div class="header-02-right d-lg-flex align-items-center justify-content-between">
                                    <div class="hamburger-menu">
                                        <a><i class="bi bi-list"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <i class="bi bi-search"></i>
                            </div>
                            <div class="col-auto offset-xl-1 d-lg-none">
                                <i class="bi bi-arrow-left"></i>
                            </div>
                            <div class="col d-block d-xl-none">
                                <div class="main-menu text-center"> <nav id="mobile-menu"> <ul> <li class='logo m-0'> <a href="${logo.href}"> ${logo.name} </a> </li> </ul> </nav> </div>
                            </div>
                            <div class="col d-none d-xl-block">
                                <div class="main-menu text-center"> <nav id="mobile-menu"> <ul> ${header.join('')} </ul> </nav> </div>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <i class="bi bi-person" ></i>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <i class="bi bi-heart"></i>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                            <a href="./Cart.html">
                            <i class="bi bi-handbag"></i>
                        </a>
                                <span class="handbag badge badge-light">4</span>
                            </div>
                            <div class="col-auto d-lg-none">
                                <i class="bi bi-sliders"></i>
                            </div>
                            <div class="col-xl-1"></div>
                        </div>
                    </div>
                </div>
            </header>
            <aside class="slide-bar">
                <div class="close-mobile-menu">
                    <a href="javascript:void(0);"><i class="fas fa-times"></i></a>
                </div>
                <nav class="side-mobile-menu">
                    <ul id="mobile-menu-active">
                        ${aside.join('')}
                    </ul>
                </nav>
            </aside>
            <div class="body-overlay"></div>
        `)
    } else if (type == 3) {
        $('#header').replaceWith(`
            <header class="header-transparent">
                <div id="sticky-header" class="main-menu-area menu-padding ">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-auto offset-xl-1 d-none d-lg-block">
                                <div class="header-02-right d-lg-flex align-items-center justify-content-between">
                                    <div class="hamburger-menu">
                                        <a><i class="bi bi-list"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <i class="bi bi-search"></i>
                            </div>
                            <div class="col-auto offset-xl-1 d-lg-none">
                                <i class="bi bi-arrow-left"></i>
                            </div>
                            <div class="col d-block d-xl-none">
                                <div class="main-menu text-center"> <nav id="mobile-menu"> <ul> <li class='logo m-0'> <a href="${logo.href}"> ${logo.name} </a> </li> </ul> </nav> </div>
                            </div>
                            <div class="col d-none d-xl-block">
                                <div class="main-menu text-center"> <nav id="mobile-menu"> <ul> ${header.join('')} </ul> </nav> </div>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <i class="bi bi-person" ></i>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <i class="bi bi-heart"></i>
                            </div>
                            <div class="col-auto">
                            <a href="./Cart.html">
                            <i class="bi bi-handbag"></i>
                        </a>
                                <span class="handbag badge badge-light">4</span>
                            </div> 
                            <div class="col-xl-1"></div>
                        </div>
                    </div>
                </div>
            </header>
            <aside class="slide-bar">
                <div class="close-mobile-menu">
                    <a href="javascript:void(0);"><i class="fas fa-times"></i></a>
                </div>
                <nav class="side-mobile-menu">
                    <ul id="mobile-menu-active">
                        ${aside.join('')}
                    </ul>
                </nav>
            </aside>
            <div class="body-overlay"></div>
        `)
    } else if (type == 4) {
        $('#header').replaceWith(`
            <header class="header-transparent">
                <div id="sticky-header" class="main-menu-area menu-padding ">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-auto offset-xl-1 d-none d-lg-block">
                                <div class="header-02-right d-lg-flex align-items-center justify-content-between">
                                    <div class="hamburger-menu">
                                        <a><i class="bi bi-list"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <i class="bi bi-search"></i>
                            </div>
                            <div class="col-auto offset-xl-1 d-lg-none">
                                <i class="bi bi-x-lg"></i>
                            </div>
                            <div class="col d-block d-xl-none">
                                <div class="main-menu text-center"> <nav id="mobile-menu"> <ul> <li class='logo m-0'> <a href="${logo.href}"> ${logo.name} </a> </li> </ul> </nav> </div>
                            </div>
                            <div class="col d-none d-xl-block">
                                <div class="main-menu text-center"> <nav id="mobile-menu"> <ul> ${header.join('')} </ul> </nav> </div>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <i class="bi bi-person" ></i>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <i class="bi bi-heart"></i>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <a href="./Cart.html">
                                    <i class="bi bi-handbag"></i>
                                </a>
                                
                                <span class="handbag badge badge-light">4</span>
                            </div>
                            <div class="col-auto d-lg-none" style="font-size: 17px;">
                                Edit
                            </div>
                            <div class="col-xl-1"></div>
                        </div>
                    </div>
                </div>
            </header>
            <aside class="slide-bar">
                <div class="close-mobile-menu">
                    <a href="javascript:void(0);"><i class="fas fa-times"></i></a>
                </div>
                <nav class="side-mobile-menu">
                    <ul id="mobile-menu-active">
                        ${aside.join('')}
                    </ul>
                </nav>
            </aside>
            <div class="body-overlay"></div>
        `)
    }

})(jQuery);
(function ($) {
    "use strict";

    // // meanmenu
    // $('#mobile-menu').meanmenu({
    // 	meanMenuContainer: '.mobile-menu',
    // 	meanScreenWidth: "992"
    // });
    /*------------------------------------
          Mobile Menu
      --------------------------------------*/

    $("#mobile-menu-active").metisMenu();

    $("#mobile-menu-active .has-dropdown > a").on("click", function (e) {
        e.preventDefault();
    });

    $(".hamburger-menu > a").on("click", function (e) {
        e.preventDefault();
        $(".slide-bar").toggleClass("show");
        $("body").addClass("on-side");
        $(".body-overlay").addClass("active");
        $(this).addClass("active");
    });

    $(".close-mobile-menu > a").on("click", function (e) {
        e.preventDefault();
        $(".slide-bar").removeClass("show");
        $("body").removeClass("on-side");
        $(".body-overlay").removeClass("active");
        $(".hamburger-menu > a").removeClass("active");
    });

    $(".body-overlay").on("click", function () {
        $(this).removeClass("active");
        $(".slide-bar").removeClass("show");
        $("body").removeClass("on-side");
        $(".hamburger-menu > a").removeClass("active");
    });

    //info-bar
    $(".info-bar").on("click", function () {
        $(".extra-info").addClass("info-open");
    });

    $(".close-icon").on("click", function () {
        $(".extra-info").removeClass("info-open");
    });

    // sticky
    var wind = $(window);
    var sticky = $("#sticky-header");
    wind.on("scroll", function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass("sticky");
        } else {
            sticky.addClass("sticky");
        }
    });

    // active
    $(".history-wrapper,.about-me-wrapper,.footer-social-icon").on(
        "mouseenter",
        function () {
            $(this)
                .addClass("active")
                .parent()
                .siblings()
                .find(".history-wrapper,.about-me-wrapper,.footer-social-icon")
                .removeClass("active");
        }
    );

    //for menu active class
    $(".portfolio-menu button").on("click", function (event) {
        $(this).siblings(".active").removeClass("active");
        $(this).addClass("active");
        event.preventDefault();
    });

    // data - background
    $("[data-background]").each(function () {
        $(this).css(
            "background-image",
            "url(" + $(this).attr("data-background") + ")"
        );
    });

    // scrollToTop
    $.scrollUp({
        scrollName: "scrollUp", // Element ID
        topDistance: "300", // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: "fade", // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="bi bi-chevron-bar-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

})(jQuery);
(function ($) {
    $('main').after(`
        <footer class="footer-area d-none d-lg-block">
            <div class="container-fluid">
                <div class="content-1 row" style="padding-bottom: 106px;">
                    <div class="col-xl-6 col-lg-6 col-md-8 col-12">
                        <div class="footer-widget mb-30">
                            <div class="text-60" style="padding-bottom: 20px;">Rosman Computer</div>
                            <div class="text-18 color-909090" style="width: 226px;">
                                Shop 17 Thirroul Plaza
                                282 Lawrence Hargrave Drive
                                Thirroul, NSW 2515
                                Australia
                                Call us at Ph: (02) 4267 4299
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-3 col-4">
                        <div class="footer-widget widget-center">
                            <h4 class="footer-widget-title">MY ACCOUNT</h4>
                            <ul class="footer-list footer-02-list">
                                <li><a >Wishlist</a></li>
                                <li><a >Shopping Cart</a></li>
                                <li><a >Checkout</a></li>
                                <li><a >Account</a></li>
                                <li><a >Return Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="footer-widget widget-center">
                            <h4 class="footer-widget-title">NEWSLETTER</h4>
                            <div class="mb-3" style="color: #707070;width: 248px;">
                                Get our latest news and updates
                                intantly.
                            </div>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Email Address..." aria-label="Email Address..." aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                    <button type="button" class="c-btn btn-dark text-16 text-white">
                                        SUBSCRIBE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-15 text-center" style="border-top: 1px solid #1d303f">
                    <div class="row content-1" style="padding-bottom: 51px;">
                        <div class="col-xl-12" style="font-size: 13px;display: flex;justify-content: space-between;align-items: center;">
                            <div class="text-18 color-909090">Copyright © 2018 Rosman Computer  | All rights reserved.</div>
                            <div class="row">
                                <div class="col-auto"><i class="bi bi-facebook text-30"></i></div>
                                <div class="col-auto"><i class="bi bi-facebook text-30"></i></div>
                                <div class="col-auto"><i class="bi bi-facebook text-30"></i></div>
                                <div class="col-auto"><i class="bi bi-facebook text-30"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- footer-area-end -->
    `)
})(jQuery)
