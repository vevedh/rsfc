const Config = {
// Website title
webTitle: 'Resuable single component',

// Header Data 
htmlHead:()=>{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <meta http-equiv="X-UA-Compatible" content="ie=edge">
         <title>${Config.webTitle}</title>
    `
},

// header End
headerEnd: `
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>`,

// ending Data 
htmlEnd:`
<script src="assets/js/main.js"></script>
</body>
</html>
`,

// global CSS
globalCSS: `
/* ========================
Global CSS
=========================*/
body{
    margin:0;
    font-size:16px;
    color:#728496;
    font-family: 'Roboto', sans-serif;
    font-weight:300;
    overflow-x:hidden;
    box-sizing:border-box;
    background:#f6f7f9;
}
section{
    padding:40px 0 40px;
}
section[id^="menu-"]{
    padding:0;
  }
.section-title{
    color:#262e41;
    margin:40px 0 40px;
  }

  @media (max-width:576px;){
      .section-title{
          margin:20px 4px 20px;
      }
      section{
          padding:20px 4px 20px;
      }
  }
`,
// Overwrite CSS
overwriteCSS: '',

// Global CSS
globalJS: `
// ==========================
// Global JS
// ==========================
function scrollIt(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",u=arguments.length>3?arguments[3]:void 0,o={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},i=window.pageYOffset,r="now"in window.performance?performance.now():(new Date).getTime(),c=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),a=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,f="number"==typeof e?e:e.offsetTop,d=Math.round(c-f<a?c-a:f);if("requestAnimationFrame"in window==!1)return window.scroll(0,d),void(u&&u());!function e(){var c="now"in window.performance?performance.now():(new Date).getTime(),a=Math.min(1,(c-r)/n),f=o[t](a);window.scroll(0,Math.ceil(f*(d-i)+i)),window.pageYOffset!==d?requestAnimationFrame(e):u&&u()}()};
var allAnchors = document.querySelectorAll('a[href^="#"]');
if(allAnchors){
allAnchors.forEach(link=>{
    link.addEventListener('click', (e) => {
        e.preventDefault();
        let goTo = document.querySelector('section#'+link.hash.substring(1));

    // scrollit ( goto, time, effect, callback )
    scrollIt(goTo, 600, 'easeInOutCubic');
    });
})
}
`
}