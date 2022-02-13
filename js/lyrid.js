class lyrid {
    constructor(gallery){
        this.gallery = document.getElementById(gallery);
        this.sliderOptions = this.gallery.querySelectorAll('.lyrid-slider-thumbnail-container');
        this.display = this.gallery.querySelector('.lyrid-display-active');

        this.info();
        this.init();
    }

    init(){
        const self = this;
        
        self.sliderOptions.forEach(s => {
            console.info(s)
            s.addEventListener('click', (e) =>{
                const src = s.querySelector('.lyrid-slider-thumbnail').src;
                self.display.src = src;
            });
        })
    }

    info = () => {
        console.info('Galery:', this.gallery);
        console.info('Slider:', this.gallery.querySelectorAll('.lyrid-slide'));
    }

    
}

const sampleA = new lyrid('sample-a');


