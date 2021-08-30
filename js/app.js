AOS.init();
      let animate = document.getElementsByClassName("animate");
      let content2 = document.getElementsByClassName("content2");
      document.onmousemove = function(){
        let x = event.clientX * 20 / window.innerWidth + "%";
        let y = event.clientY * 20 / window.innerHeight + "%";
        for(let i=0;i<2;i++){
          animate[i].style.left = x;
          animate[i].style.top = y;
          animate[i].style.transform = "translate(-"+x+",-"+y+")";
          content2[i].style.left = x;
          content2[i].style.top = y;
          content2[i].style.transform = "translate(-"+x+",-"+y+")";
        }
      }
      $(".nav-item .nav-link").on("click", function(){
         $(".nav-item").find(".active").removeClass("active");
         $(this).addClass("active");
      });
      $('.page-scroll').on('click', function (e) {
        let tujuan = $(this).attr('href');
        let elemenTujuan = $(tujuan);
        $('html , body').animate({
          scrollTop: elemenTujuan.offset().top - 80
        }, 1250, 'easeInOutExpo');
        e.preventDefault();
      });