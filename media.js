export class VIDEO {
  constructor(src) {
    this.video = document.createElement("video");
    this.video.src = src;
  }
  play = () => this.video.play();
  pause = () => this.video.pause();
  reset = () => (this.video.currentTime = 0);
  mp4 = () => this.video;
}

export class AUDIO {
  constructor(src) {
    this.audio = new Audio(src);
  }
  play = () => this.audio.play();
  pause = () => this.audio.pause();
  reset = () => (this.video.currentTime = 0);
  mp3 = () => this.audio;
}
