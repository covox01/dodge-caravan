

//Sequence One Elements
   const adContainer = document.querySelector(".ad-container");
   const frameOneIntroImage = document.querySelector(".intro-image");
   const frameOneTextGroup = document.querySelector(".f1-text");
   const frameOneTopShadow = document.querySelector(".f1-top-shadow");
   const frameOneBottomShadow = document.querySelector(".f1-bottom-shadow");
   const frameOneTextOne = document.querySelector(".f1-text-1");
   const frameOneTextTwo = document.querySelector(".f1-text-2");

//Sequence Two Elements
   const mainImage = document.querySelector(".main-image");
   const frameTwoShadow = document.querySelector(".f2-shadow");
   const frameTwoText = document.querySelector(".f2-text");
   const frameThreeText = document.querySelector(".f3-text");
   const frameFourText = document.querySelector(".f4-text");
   const frameFourTextOne = document.querySelector(".f4-text-1");
   const frameFourTextTwo = document.querySelector(".f4-text-2");
   const frameFourButton = document.querySelector(".f4-button-container");
   const frameFourButtonShine = document.querySelector(".shine");

//Sequence one begins and triggers initial animations
   const startSequenceOne = () => {
      let sequenceOne = new TimelineLite();
      sequenceOne
      .from(frameOneTextGroup, 1.5, {
         top: -50, 
         ease: Back.easeInOut
      })

      .from(frameOneTopShadow, .3, {
         top: -50,
      }, "-=1.1")

      .to(frameOneTextGroup, .3, {
         opacity: 0,
      }, "+=.8")

      .to([frameOneIntroImage, frameOneTopShadow, frameOneBottomShadow], .3, {
         opacity: 0,
         onComplete: startSequenceTwo
      }, "-=.3");
   }

//Sequence two begins Right after the last animation of sequence one
   const startSequenceTwo = () => {
      let sequenceTwo = new TimelineLite();
      sequenceTwo
      .to(frameTwoText, .8, {
         rotationX: 0,
         delay: 0.5,
      })

      .to(frameTwoText, 1, {
         opacity: 0,
         left: -250,
         ease: Back.easeInOut
      }, "+=.7")

      .to(mainImage, 1, {
         x: -400,
         y: -250,
         ease: Power3.easeInOut
      }, "-=.7")

      .to(frameThreeText, .8, {
         rotationX: 0,
         ease: Power3.easeOut
      }, "-=.20")

      .to(mainImage, 1, {
         scale: .52,
         x: -255,
         y: -230,
         ease: Power2.easeInOut,
         delay: 1
      })

      .to(frameThreeText, .3, {
         opacity: 0
      }, "-=1")

      .to(frameFourText, 1.25, {
         opacity: 1,
         scale: 1,
         ease:  Power3.easeInOut
      }, "-=.85")

      .to(frameFourButton, 1.25, {
         bottom: 10,
         ease: Back.easeInOut
      }, "-=.75")

      .to(frameFourButtonShine, .8, {
         left: 120,
         ease: Power3.easeInOut,
         onComplete: hoverShine
      })
   }

//Hovering over the ad container will prompt a shine on the button
   const hoverShine = () => {
      let shine = new TimelineLite();
      frameFourButtonShine.style.left = "-80px";
      adContainer.addEventListener("mouseenter", function(){
         shine
         .to(frameFourButtonShine, .8, {
            left: 120,
            ease: Power3.easeInOut
         })
      })
      adContainer.addEventListener("mouseleave", function(){
         frameFourButtonShine.style.left = "-80px";
      })
      frameFourButton.addEventListener("mouseenter", function(){
         frameFourButtonShine.style.left = "-80px";
         shine
         .to(frameFourButtonShine, 0.8, {
            left: 120,
            ease: Power3.easeInOut,
         });
      })
      frameFourButton.addEventListener("mouseleave", function(){
         frameFourButtonShine.style.left = "-80px"
      })
   }

const init = () => {
   startSequenceOne();
}

init();