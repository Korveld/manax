const lenis=new Lenis({lerp:.1});function raf(a){lenis.raf(a),requestAnimationFrame(raf)}requestAnimationFrame(raf);var parallaxHandler=function(){var a=$(this).scrollTop(),n=$(".parallax-box__cloud"),r=$(".parallax-box__mountain1"),o=$(".parallax-box__mountain2"),l=0,s=0,t=1;if(a>200);(l=.15*(a-o.offset().top))>100&&(l=100),(s=-.08*(a-n.offset().top))<-100&&(s=-100),(t=1+1e-4*a)>1.4&&(t=1.4),r.css("transform","scale("+t+")"),o.css("transform","translateY("+l+"px)"),n.css("transform","translateY("+s+"px)")};$(window).on("scroll",function(){parallaxHandler()}),$(window).on("load",function(){parallaxHandler()});