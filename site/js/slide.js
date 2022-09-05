class Slide {
    constructor(id){
        this.slide = document.querySelector('[data-slide= slide]');
        this.active = 0;
        
        this.init();
    }
    activeSlide(index){
        this.active = index;
       
        this.item.forEach((item) => item.classList.remove('active'));
        this.item[index].classList.add('active');
        this.thumbItem.forEach((item) => item.classList.remove('active'));
        this.thumbItem[index].classList.add('active');
      

    }

prev() {
    if(this.active > 0) {
        this.activeSlide(this.active - 1);
    }else{
        this.activeSlide(this.item.length -1);
    }
    
}

next() {
    if(this.active < this.item.length - 1){
    this.activeSlide(this.active + 1);
    } else{
        this.activeSlide(0);
    }
}

addNavigation(){
    const nextBtn = this.slide.querySelector('.slide-next');
    const prevtBtn = this.slide.querySelector('.slide-prev');
    nextBtn.addEventListener('click', this.next);
    prevtBtn.addEventListener('click', this.prev);
}   


addThumbItem(){
    this.item.forEach(() => (this.thumb.innerHTML += '<span></span>'));
    this.thumbItem = Array.from(this.thumb.children);
}

init(){
    this.next = this.next.bind(this);
    this.prev  = this.prev.bind(this);
    this.item = this.slide.querySelectorAll('.slide-item > *');
    this.thumb = this.slide.querySelector('.slide-thumb');
    this.addNavigation();
    this.addThumbItem();
    this.activeSlide(0);
}



}
new Slide('slide');

