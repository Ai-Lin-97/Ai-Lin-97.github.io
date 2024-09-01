var audio = document.getElementById('music1');
$("#btn").bind("touchstart", function bf() {
if(audio !== null) {
//检测播放是否已暂停.audio.paused 在播放器播放时返回false.
//alert(audio.paused);
if(audio.paused) {
audio.play(); //audio.play();// 这个就是播放
$("#btn").addClass("active")
} else {
audio.pause(); // 这个就是暂停
$("#btn").removeClass("active")
}
}
})

作者：墨语
链接：https://www.zhihu.com/question/472325267/answer/1999266585
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。