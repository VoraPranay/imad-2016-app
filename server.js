var express = require('express');
var express = require('express');
 var morgan = require('morgan');
 var path = require('path');
 
 var app = express();
 app.use(morgan('combined'));
 
 
 var articles = {
     'article-one': {
       title: 'Article One | Tanmai Gopal',
       heading: 'Article One',
       date: 'Sep 5, 2016',
       content: `
           <p>
               This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. 
           </p>
           <p>
               This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. 
           </p>
           <p>
               This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. 
           </p>`
     },
     'article-two': {
       title: 'Article Two | Tanmai Gopal',
       heading: 'Article Two',
       date: 'Sep 10, 2016',
       content: `
           <title>Pranay Cake Shop</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">

<script type="text/javascript" src="http://beeker.io/lab/exit-intent-popup/bioep.min.js"></script>
<script src ="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    
    <script type="text/javascript">
      bioEp.init({
        html: '<div id="bio_ep_content">' +
        '<img src="http://beeker.io/images/posts/2/tag.png" alt="Claim your discount!" />' +
        '<span>HOLD ON!</span>' +
        '<span>Click the button below to get a special discount</span>' +
        '<span>This offer will NOT show again!</span>' +
        '<a href="fireworks.html" class="bio_btn">CLAIM YOUR DISCOUNT</a>' +
        '</div>',
        css: '#bio_ep {width: 400px; height: 300px; color: #333; background-color: #fafafa; text-align: center;}' +
        '#bio_ep_content {padding: 24px 0 0 0; font-family: "Titillium Web";}' +
        '#bio_ep_content span:nth-child(2) {display: block; color: #f21b1b; font-size: 32px; font-weight: 600;}' +
        '#bio_ep_content span:nth-child(3) {display: block; font-size: 16px;}' +
        '#bio_ep_content span:nth-child(4) {display: block; margin: -5px 0 0 0; font-size: 16px; font-weight: 600;}' +
        '.bio_btn {display: inline-block; margin: 18px 0 0 0; padding: 7px; color: #fff; font-size: 14px; font-weight: 600; background-color: #70bb39; border: 1px solid #47ad0b; cursor: pointer; -webkit-appearance: none; -moz-appearance: none; border-radius: 0; text-decoration: none;}',
        fonts: ['//fonts.googleapis.com/css?family=Titillium+Web:300,400,600'],
        cookieExp: 0
    });
    </script>
<style>
 div.img {
    margin: 5px;
    border: 1px solid #ccc;
    float: left;
    width: 180px;
}

div.img:hover {
    border: 1px solid #777;
}

div.img img {
    width: 100%;
    height: auto;
}

div.desc {
    padding: 15px;
    text-align: center;
}
.border {   border-width: 5px;   border-color: rgba(255, 0, 0, 0.8);   border-style: solid; } 
.bod { background-color:rgba(255, 0, 0, 0.2);}
.button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.footer {
    background-color: #000000;
    color: #ffffff;
    text-align: center;
    font-size: 12px;
    padding: 15px;
}
#counter{
    background-color: #000000;
    color: blue;
    text-align: center;
    font-size: 12px;
    padding: 15px;
}
.mySlides {display:none;}

</style>
<body>

<nav class="w3-sidenav w3-light-grey" style="width:50%">
  <div class="w3-container w3-red">
    <table>
	<tr>
	<td><h1><p style="font-size:70px">The Cake Shop</p></h1></td> <td>      </td>
	<td><a class="w3-padding w3-pink w3-right" href="https://www.google.com"> <button onclick="myFunction()"><i class="fa fa-power-off" style="font-size:20px;color:Black" ></i>
  </button></a></td>
	</tr>
	</table>
  </div>
  
<p>
  
  <div class="w3-content w3-display-container">
  <img class="mySlides" src="https://media.giphy.com/media/k754IRFqfiMi4/giphy.gif" style="width:100%">
  <img class="mySlides" src="https://media.giphy.com/media/udA2Fe86iC1wc/giphy.gif" style="width:100%">
  
  <img class="mySlides" src=" http://www.yogiscakes.co.uk/img/chocolate-slice.png" style="width:100%">
  <img class="mySlides" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTP3pTFpSyU5uuteKsAB84TRjWSt4jtsh_glinRSJIUA0h1mK5b" style="width:100%">
  <img class="mySlides" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTX8I3yI_V3GrDE_r-usSwxgNUpUfg6vzIiI26t54_wnFWloqVRiw" style="width:100%">
  <img class="mySlides" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQvnON3I1t-42MOrIDmjpJkwHlz-Jgbh6Bgpv2NFRcVg2o8VWwWeQ" style="width:100%">
  <img class="mySlides" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr3YM8WHx90aOSsktpzYsnkT0vAv5N_IDRzA_LRs6NXsyKAaEOw" style="width:100%">
  
  <div class="w3-content" style="width:100%">
  <div class="mySlides w3-container w3-green" >
    <h2><b> World's #1 Cake Shop</b></h2>
    <h1><i>Visit Shop For More</i></h1>
  </div>

  <a class="w3-btn-floating w3-display-left" onclick="plusDivs(-1)">&#10094;</a>
  <a class="w3-btn-floating w3-display-right" onclick="plusDivs(1)">&#10095;</a>
</div>

		
	<script>
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
</script>

		
		
		
		
		
		
		
  <a class="w3-red w3-padding" href="#">Home<span class="w3-tag w3-red w3-round w3-right"><span class="glyphicon glyphicon-chevron-right"></span > </span></a>
  <a class="w3-padding w3-red" href="profile.html">Profile <span class="w3-tag w3-red w3-round w3-right"><span class="glyphicon glyphicon-chevron-right"></span></span></a>
  <a class="w3-padding w3-red" href="blogs.html">Blogs<span class="w3-tag w3-red w3-round w3-right"><span class="glyphicon glyphicon-chevron-right"></span > </span></a>
  
  
<script>
function myFunction() {
    var result = confirm("Do you really want to leave this page?");
if (result == true) {
    alert("Thanks for visiting");
}
else {
    alert("Thanks for staying with us");
}
}
</script>
</nav>

<div class="bod">
<div style="margin-left:50%">

<div class="w3-container" >

  <h1>Chilling Me Softly ! 
    <a href="order.html" class="btn btn-info btn-lg"> 
	<span class="glyphicon glyphicon-shopping-cart"></span> Shopping Cart
        </a></h1>


<div class="img">
  <a target="_blank" href="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTOK2cYW0xhsuparca1ici8UKcxFvceLlGchblWfv7oCXNyNb2wZQ">
    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTOK2cYW0xhsuparca1ici8UKcxFvceLlGchblWfv7oCXNyNb2wZQ" alt="Fjords" width="300" height="200" class="border">
  </a>
  <div class="desc">
  <button class="button" style="vertical-align:middle"><span>Chocolate Beehive Rs690.99</span></button>
</div>
</div>

<div class="img">
  <a target="_blank" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyD71H-9OcSpR4UleCcyby-BWM3NVPomwrygN9FX0Y0ayVw6yT">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyD71H-9OcSpR4UleCcyby-BWM3NVPomwrygN9FX0Y0ayVw6yT" alt="Forest" width="300" height="300" class="border">
  </a>
  <div class="desc">
<button class="button" style="vertical-align:middle"><span>Mug Cake </span></button>
</div>
</div>

<div class="img">
  <a target="_blank" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTooBul4fbGklq_1Cuio-8V2sYpJd06GnIY9GscDedFXTngJkip">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTooBul4fbGklq_1Cuio-8V2sYpJd06GnIY9GscDedFXTngJkip" alt="Northern Lights" width="300" height="200" class="border">
  </a>
  <div class="desc" ></div>
<button class="button" style="vertical-align:middle"><span>  NEWDipped Cheesecake Trio
Rs 1009.99 </span></button>
</div>
</div>
<br>
<div class="img">
  <a target="_blank" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_m4uDwLGQ1CNBux1daTu-Pu-ZK4SteY6MNrw3xs4fjALoAnYsDg">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_m4uDwLGQ1CNBux1daTu-Pu-ZK4SteY6MNrw3xs4fjALoAnYsDg" alt="Mountains" width="300" height="200" class="border">
  </a>
  <div class="desc">
  <button class="button" style="vertical-align:middle"><span>#00Heart </span></button>
</div>
</div>
<br>

<div class="img">
  <a target="_blank" href="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTs-2PKT8MV8Q6ScqW754NVN_WcI1uBAj2jekL5A5ASoUY9DuvsDg">
    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTs-2PKT8MV8Q6ScqW754NVN_WcI1uBAj2jekL5A5ASoUY9DuvsDg" alt="Mountains" width="300" height="200" class="border">
  </a>
  <div class="desc">
  <button class="button" style="vertical-align:middle"><span>children spl</span></button>
</div>
</div>
<br>

<div class="img">
  <a target="_blank" href="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDAzehITnmREu5Uy_eE6LVX820AbZVlgkColo5R_JciPdzQHiC5g">
    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDAzehITnmREu5Uy_eE6LVX820AbZVlgkColo5R_JciPdzQHiC5g" alt="Mountains" width="300" height="200" class="border">
  </a>
  <div class="desc">
  <button class="button" style="vertical-align:middle"><span>delicious 01</span></button>
</div>
</div>
<br>

<div class="img">
  <a target="_blank" href="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT__D5bfB_IF7DtbxNcnjnM-57A9YxLDYTvvAOOlTwDQMvscawcjw">
    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT__D5bfB_IF7DtbxNcnjnM-57A9YxLDYTvvAOOlTwDQMvscawcjw" alt="Mountains" width="300" height="200" class="border">
  </a>
  <div class="desc">
  <button class="button" style="vertical-align:middle"><span>#000000001</span></button>
</div>
</div>
<br>

<div class="img">
  <a target="_blank" href="https://s-media-cache-ak0.pinimg.com/736x/31/67/b0/3167b05691bc1e9ebd42a230de195fc9.jpg">
    <img src="https://s-media-cache-ak0.pinimg.com/736x/31/67/b0/3167b05691bc1e9ebd42a230de195fc9.jpg" alt="Mountains" width="300" height="200" class="border">
  </a>
  <div class="desc">
  <button class="button" style="vertical-align:middle"><span>#00 Rainbow</span></button>
</div>
</div>
<br>

<div class="img">
  <a target="_blank" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFb9heZfIUU6wRb7eVZKJII2OJUI-vyfl1SxfcDY2n7-TTvm_m">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFb9heZfIUU6wRb7eVZKJII2OJUI-vyfl1SxfcDY2n7-TTvm_m" alt="Mountains" width="300" height="200" class="border">
  </a>
  <div class="desc">
  <button class="button" style="vertical-align:middle"><span>#000002</span></button>
</div>
</div>
<br>



</div>
</div>
  
  <div style="margin-left:50%">
 <div class="footer">
                   <button id="counter">  <span class="glyphicon glyphicon-thumbs-up"></span> Like </button>  <span id="counter">0</span> times.
                 <br/>
                 <hr/>
                 </div>
				 
			<script>	
			
  
				 // Counter code
 var button = document.getElementById('counter');
 button.onclick = function () {
 
     // Create a request object
     var request = new XMLHttpRequest();
     
     // Capture the response and store it in a variable
     request.onreadystatechange = function () {
       if (request.readyState === XMLHttpRequest.DONE) {
           // Take some action
           if (request.status === 200) {
               var counter = request.responseText;
               var span = document.getElementById('counter');
               span.innerHTML = counter.toString();          
           }
       }  
       // Not done yet
     };
     
    
}
</script>
				 
				 

<div class="footer">
<h4> Contact us on</h4>
 <button id="counter">  <span class="glyphicon glyphicon-thumbs-up"></span> Like </button>  <span id="count">0</span> times.
                 <br/>
<p> <a href="https://www.google.com/gmail/"><span class="glyphicon glyphicon-envelope"></span>
        </a>
		 <a href="#">
          <span class="glyphicon glyphicon-phone"></span>
        </a>
	<a href="#">	<i class="fa fa-facebook-official" style="font-size:24px"></i></a>
      </p>

</div>  
</div>

</body>
     },
     'article-three': {
       title: 'Article Three | Tanmai Gopal',
       heading: 'Article Three',
       date: 'Sep 15, 2016',
       content: `
           <p>
               This is the content for my third article.
           </p>`
     }
 };
 
 
 
 
 
 function createTemplate (data) {
     var title = data.title;
     var date = data.date;
     var heading = data.heading;
     var content = data.content;
     
     var htmlTemplate = `
     <html>
       <head>
           <title>
               ${title}
           </title>
           <meta name="viewport" content="width=device-width, initial-scale=1" />
           <link href="/ui/style.css" rel="stylesheet" />
       </head> 
       <body>
           <div class="container">
               <div>
                   <a href="/">Home</a>
               </div>
               <hr/>
               <h3>
                   ${heading}
               </h3>
               <div>
                   ${date}
               </div>
               <div>
                 ${content}
               </div>
           </div>
       </body>
     </html>
     `;
     return htmlTemplate;
 }
 
 app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'index.html'));
 });
  app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'PROFILE.html'));
 });
 
 
 var counter = 0;
 app.get('/counter', function (req, res) {
    counter = counter + 1;
     res.send(counter.toString());
  });
  

  app.get('/:articleName', function (req, res) {
    // articleName == article-one
    // articles[articleName] == {} content object for article one
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
 });
 
 app.get('/ui/style.css', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'style.css'));
 });
 
 app.get('/ui/main.js', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'main.js'));
 });
 
 app.get('/ui/madi.png', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
  });
  

  var port = 8080; // Use 8080 for local development because you might already have apache running on 80
  app.listen(8080, function () {
    console.log(`IMAD course app listening on port ${port}!`);
 });