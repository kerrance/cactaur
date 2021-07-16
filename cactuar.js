/**
 * Cactuar.js
 *
 * Version: 1.0.0
 *
 * Website: https://kerrance.github.io/cactuar/
 */
( function() {
  const questionTitle = document.getElementsByClassName( 'cactuar__title' );
  let questionPairInt;

  function expandQuestionResponse() {
    this.classList.toggle( 'cactuar__title--active' );
    let questionResponse = this.nextElementSibling;

    if ( questionResponse.style.maxHeight ){
      questionResponse.style.maxHeight = null;
    } else {
      questionResponse.style.maxHeight = questionResponse.scrollHeight + 'px';
    }
  }

  function eventListener() {
    for ( questionPairInt = 0; questionPairInt < questionTitle.length; questionPairInt++ ) {
      questionTitle[questionPairInt].addEventListener( 'click', expandQuestionResponse );
    }
  }

  function initCactaur() {
    eventListener();
  }

  initCactaur();
}() );
