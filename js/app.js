document.addEventListener("DOMContentLoaded", function () {

    var mainLi = document.querySelectorAll('nav > ul > li');


    for (var i = 0; i < mainLi.length; i++) {


        mainLi[i].addEventListener('mouseover', function () {


            var ul = this.querySelector('ul');

            if (ul) {

                ul.style.display = 'block';
            }
        });

        mainLi[i].addEventListener('mouseout', function () {

            var ul = this.querySelector('ul');

            if (ul) {

                ul.style.display = 'none';
            }

        });

    }

    var pictures = document.querySelectorAll('.background');
    console.log(pictures);
    for (var i = 0; i < pictures.length; i++) {

        pictures[i].addEventListener('mouseover', function (){

            this.style.display = 'none';
        })

        pictures[i].addEventListener('mouseout', function (){

            this.style.display = 'block';
        })
    }

    var nextButton = document.querySelector('.arrow-right a');
    console.log(nextButton);
    var prevButton = document.querySelector('.arrow-left a');
    console.log(prevButton);
    var list = document.querySelectorAll('.slider>ul>li');
    var counter = 0;

    nextButton.addEventListener('click', function () {
        list[counter].classList.remove('visible');
        counter++;
        if (counter >= list.length) {
            counter = 0
        }
        list[counter].classList.add('visible');
    });

    prevButton.addEventListener('click', function () {
        list[counter].classList.remove('visible');
        counter--;
        if (counter < 0) {
            counter = list.length - 1
        }
        list[counter].classList.add('visible');
    })
});
