/**
 * Cactuar.js
 *
 * Version: 1.0.0
 *
 * Website: https://kerrance.github.io/cactuar/
 */
( function() {
  const contexts = document.getElementsByClassName( 'cactuar__context' );
  const questionTitle = document.getElementsByClassName( 'cactuar__title' );
  let contextsInt;
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

  function selectActiveContext() {
    let currentContext = document.getElementsByClassName( 'cactuar__context--active' );
    currentContext[0].className = currentContext[0].className.replace( 'cactuar__context--active', '' );
    this.className += " cactuar__context--active";
  }

  function eventListener() {
    for ( questionPairInt = 0; questionPairInt < questionTitle.length; questionPairInt++ ) {
      questionTitle[questionPairInt].addEventListener( 'click', expandQuestionResponse );
    }

    for ( contextsInt = 0; contextsInt < contexts.length; contextsInt++ ) {
      contexts[contextsInt].addEventListener( 'click', selectActiveContext );
    }
  }

  function initCactaur() {
    eventListener();
  }

  initCactaur();
}() );
