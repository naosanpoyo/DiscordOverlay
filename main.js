let voicestates = {
	"display": "revert",
	"position": "static",
	"top": "initial",
	"left": "initial",
};
let voicestate = {
	"display": "revert",
	"padding-left": "7px",
	"padding-right": "6px",
	"width": "auto",
	"height": "50px",
};
let avatar = {
	"position": "static",
	"top": "initial",
	"left": "0px",
	"filter": "brightness(100%)",
	"border-radius": "50%",
};
let user = {
	"left": "0px",
	"top": "0px",
	"background": "transparent",
	"padding": "78px 0px 0px !important",
	"border-radius": "0px",
};
let name = {
	"min-width": "55px",
	"width": "auto",
	"height": "auto",
	"line-height": "19px !important",
	"white-space": "normal",
	"text-overflow": "clip",
	"text-align": "left",
	"background-color": "rgba(30,33,36,0.95) !important",
	"padding": "4px 6px 4px 6px !important",
	"overflow": "visible",
};
let speaking = {
	"filter": "brightness(100%)",
	"position": "revert",
	"animation-name": "none",
	"animation-duration": "1000ms",
	"animation-fill-mode": "forwards",
	"animation-iteration-count": "infinite",
}

let newvoicestates = {...voicestates};
let newvoicestate = {...voicestate};
let newavatar = {...avatar};
let newuser = {...user};
let newname = {...name};
let newspeaking = {...speaking};

let updateSpeakingCount = 0;

selectVertical1();
updateSpeaking();

function selectVertical1(){
	voicestates = {
		...voicestates,
		"display": "revert",
		"position": "static",
		"top": "initial",
		"left": "initial",
	};
	voicestate = {
		...voicestate,
		"display": "revert",
		"padding-right": "6px",
		"width": "auto",
		"height": "50px",
	};
	avatar = {
		...avatar,
		//"left": "0px",
		//"border-width": "3px !important",
		//"border-color": "transparent !important",
		//"filter": "brightness(100%)",
	};
	user = {
		...user,
		"left": "0px",
		"top": "0px",
		"background": "transparent",
		"padding": "18px 0px 0px !important",
		"border-radius": "0px",
	};
	name = {
		...name,
		"min-width": "55px",
		"width": "auto",
		"height": "auto",
		"line-height": "19px !important",
		"white-space": "normal",
		"text-overflow": "clip",
		"text-align": "left",
		"background-color": "rgba(30,33,36,0.95) !important",
		"padding": "4px 6px 4px 6px !important",
		"overflow": "visible",
	};
	showResult();
	showPreview();
}

function selectVertical2(){
	voicestates = {
		...voicestates,
		"display": "inline-block",
		"position": "relative",
		"top": "0px",
		"left": "0px",
	};
	voicestate = {
		...voicestate,
		"display": "revert",
		"padding-right": "6px",
		"width": "70px",
		"height": "90px",
	};
	avatar = {
		...avatar,
		//"left": "7px",
	};
	user = {
		...user,
		"left": "-5px",
		"top": "2px",
		"background": "rgba(30,33,36,0.95)",
		"padding": "6px 5px 0px !important",
		"border-radius": "4px",
	};
	name = {
		...name,
		"min-width": "55px",
		"width": "55px",
		"height": "17px",
		"line-height": "17px !important",
		"white-space": "nowrap",
		"text-overflow": "clip",
		"text-align": "center",
		//"background-color": "rgba(0,0,0,0) !important",
		"padding": "0 !important",
		"overflow": "hidden",
	};
	showResult();
	showPreview();
}

function selectHorizontal1(){
	voicestates = {
		...voicestates,
		"display": "inline-block",
		"position": "relative",
		"top": "0px",
		"left": "0px",
	};
	voicestate = {
		...voicestate,
		"display": "inline-block",
		"padding-right": "6px",
		"width": "auto",
		"height": "50px",
	};
	avatar = {
		...avatar,
		//"left": "7px",
	};
	user = {
		...user,
		"left": "2px",
		"top": "0px",
		"background": "transparent",
		"padding": "12px 0px 0px !important",
		"border-radius": "0px",
	};
	name = {
		...name,
		"min-width": "55px",
		"width": "auto",
		"height": "auto",
		"line-height": "19px !important",
		"white-space": "nowrap",
		"text-overflow": "clip",
		"text-align": "center",
		//"background-color": "rgba(0,0,0,0) !important",
		"padding": "6px 6px 6px 6px !important",
		"overflow": "hidden",
	};
	showResult();
	showPreview();
}

function selectHorizontal2(){
	voicestates = {
		...voicestates,
		"display": "inline-block",
		"position": "relative",
		"top": "0px",
		"left": "0px",
	};
	voicestate = {
		...voicestate,
		"display": "inline-block",
		"padding-right": "6px",
		"width": "70px",
		"height": "90px",
	};
	avatar = {
		...avatar,
		//"left": "7px",
	};
	user = {
		...user,
		"left": "-5px",
		"top": "2px",
		"background": "rgba(30,33,36,0.95)",
		"padding": "6px 5px 0px !important",
		"border-radius": "4px",
	};
	name = {
		...name,
		"min-width": "55px",
		"width": "55px",
		"height": "17px",
		"line-height": "17px !important",
		"white-space": "nowrap",
		"text-overflow": "clip",
		"text-align": "center",
		//"background-color": "rgba(0,0,0,0) !important",
		"padding": "0 !important",
		"overflow": "hidden",
	};
	showResult();
	showPreview();
}

function changeAvatarSquare(reset=false){
	if($("#checkAvatarSquare").prop("checked") || reset){
		avatar = {
			...avatar,
			"border-radius": "0% !important",
		};
		showResult();
		showPreview();
	}else{
		avatar = {
			...avatar,
			"border-radius": "50%",
		};
		showResult();
		showPreview();
	}
}

function changeAvatarBright(reset=false){
	if($("#checkAvatarBright").prop("checked") || reset){
		avatar = {
			...avatar,
			"filter": "brightness(60%)",
		};
		showResult();
		showPreview();
	}else{
		avatar = {
			...avatar,
			"filter": "brightness(100%)",
		};
		showResult();
		showPreview();
	}
}

function changeAvatarMove(reset=false){
	if($("#checkAvatarMove").prop("checked") || reset){
		speaking = {
			...speaking,
			"position": "relative",
			"animation-name": "speak-now",
		};
		showResult();
		showPreview();
	}else{
		speaking = {
			...speaking,
			"position": "revert",
			"animation-name": "none",
		};
		showResult();
		showPreview();
	}
}

function showResult(){
	str = `body {
	background-color: rgba(0, 0, 0, 0);
	margin: 0px;
	padding: 0px;
	overflow: hidden;
}
.voice-states * {
	display: ${voicestates["display"]};
	position: ${voicestates["position"]};
	top: ${voicestates["top"]};
	left: ${voicestates["left"]};
}
.voice-state {
	display: ${voicestate["display"]};
	padding-left: ${voicestate["padding-left"]};
	padding-right: ${voicestate["padding-right"]};
	width: ${voicestate["width"]};
	height: ${voicestate["height"]};
} 
.avatar {
	position: ${avatar["position"]};
	top: ${avatar["top"]};
	left: ${avatar["left"]};
	filter: ${avatar["filter"]};
	border-radius: ${avatar["border-radius"]};
}
.user {
	left: ${user["left"]};
	top: ${user["top"]};
	background: ${user["background"]};
	padding: ${user["padding"]};
	border-radius: ${user["border-radius"]};
}
.name {
	min-width: ${name["min-width"]};
	width: ${name["width"]};
	height: ${name["height"]};
	line-height: ${name["line-height"]};
	white-space: ${name["white-space"]};
	text-overflow: ${name["text-overflow"]};
	text-align: ${name["text-align"]};
	background-color: ${name["background-color"]};
	padding: ${name["padding"]};
	overflow: ${name["overflow"]};
}
.speaking {
	filter: ${speaking["filter"]};
	position: ${speaking["position"]};
	animation-name: ${speaking["animation-name"]};
	animation-duration: ${speaking["animation-duration"]};
	animation-fill-mode: ${speaking["animation-fill-mode"]};
	animation-iteration-count: ${speaking["animation-iteration-count"]};
}
@keyframes speak-now {
	0% { bottom:0px; }
	5% { bottom:10px; }
	10% { bottom:0px; }
	15% { bottom:10px; }
	20% { bottom:0px; }
	25% { bottom:10px; }
	30% { bottom:0px; }
	35% { bottom:10px; }
	40% { bottom:0px; }
	45% { bottom:10px; }
	50% { bottom:0px; }
	55% { bottom:10px; }
	60% { bottom:0px; }
	65% { bottom:10px; }
	70% { bottom:0px; }
	75% { bottom:10px; }
	80% { bottom:0px; }
	85% { bottom:10px; }
	90% { bottom:0px; }
	95% { bottom:10px; }
	100% { bottom:0px; }
}`;
	$("#result").html(`<pre>${str}</pre>`);
}

function showPreview(){
	$("#preview").html(`<div id="app-mount">
	<div style="font-family:Whitney, sans-serif;background-color:transparent;" class=" " data-react-id=".0">
		<div class="voice-container" data-react-id=".0.0">
			<ul class="voice-states" data-react-id=".0.0.0">
				<li class="voice-state" data-react-id=".0.0.0">
					<img class="avatar" id="avatar1" src="./sampleImg.jpg" width="50px">
					<div class="user">
						<span class="name" style="color:#ffffff;fontsize:14px;background-color:rgba(30, 33, 36, 0.95);">名前</span>
					</div>
				</li>
				<li class="voice-state" data-react-id=".0.0.0">
					<img class="avatar" id="avatar2" src="./sampleImg.jpg" width="50px">
					<div class="user">
						<span class="name" style="color:#ffffff;fontsize:14px;background-color:rgba(30, 33, 36, 0.95);">長～～い名前</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>`);
	newvoicestates = {...voicestates};
	newvoicestate = {...voicestate};
	newavatar = {...avatar};
	newuser = {...user};
	newname = {...name};
	newspaeking = {...speaking};
	newobjs = [newvoicestates,newvoicestate,newavatar,newuser,newname,newspaeking];
	newobjs.forEach(function (v,i){
		for(let key in v){
			v[key] = v[key].replace("!important","");
		}
	});
	$(".voice-states *").css(newvoicestates);
	$(".voice-state").css(newvoicestate);
	$(".avatar").css(newavatar);
	$(".user").css(newuser);
	$(".name").css(newname);
	$(".speaking").css(newspeaking);
}

function updateSpeaking() {
	$("#test").html(`${updateSpeakingCount}`);
	$("#test").html(``);
	switch(updateSpeakingCount%4){
		case(0):
			$("#avatar1").addClass("speaking");
			break;
		case(1):
			$("#avatar2").addClass("speaking");
			break;
		case(2):
			$("#avatar1").removeClass("speaking");
			break;
		case(3):
			$("#avatar2").removeClass("speaking");
			break;
	}
	updateSpeakingCount++;
	newvoicestates = {...voicestates};
	newvoicestate = {...voicestate};
	newavatar = {...avatar};
	newuser = {...user};
	newname = {...name};
	newspeaking = {...speaking};
	newobjs = [newvoicestates,newvoicestate,newavatar,newuser,newname,newspeaking];
	newobjs.forEach(function (v,i){
		for(let key in v){
			v[key] = v[key].replace("!important","");
		}
	});
	$(".voice-states *").css(newvoicestates);
	$(".voice-state").css(newvoicestate);
	$(".avatar").css(newavatar);
	$(".user").css(newuser);
	$(".name").css(newname);
	$(".speaking").css(newspeaking);
	setTimeout(updateSpeaking,2000);
}