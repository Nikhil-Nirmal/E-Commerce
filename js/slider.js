$(document).ready(function()
        {
        $('#containerSlider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            });
        });

        function openNav1()
        {
            document.getElementById("mySidenav1").style.width = "250px";
        }
                    
        function closeNav1()
        {
            document.getElementById("mySidenav1").style.width = "0";
        }