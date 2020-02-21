export class Chrono {

    offset: number = 0;
    counter: number = 0;
    minutes: number = 0;
    seconds: number = 0;

    timerRef;

    constructor(offset: number = 0) {
      this.offset = offset;
      this.minutes = Math.floor(this.offset/60);
      this.seconds = this.offset%60;
    }
    
    start() {
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
        this.minutes = Math.floor((Math.floor(this.counter/1000)+this.offset)/60);
        this.seconds = (Math.round(this.counter/1000)+this.offset)%60;
      }, 1000);
    }

    stop(){
      clearInterval(this.timerRef);
    }

    clear(){
      this.counter = undefined;
      this.offset = 0;
      this.minutes = 0;
      this.seconds = 0;
      clearInterval(this.timerRef);
    }

}