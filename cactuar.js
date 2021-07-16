/**
 * Cactuar.js
 *
 * Version: 1.0.0
 *
 * Website: https://kerrance.github.io/cactuar/
 */
( function() {
  const contexts = document.getElementsByClassName( 'cactuar__context' );
  const responsePairs = document.getElementsByClassName( 'cactuar__pair' );
  const questionTitle = document.getElementsByClassName( 'cactuar__title' );
  let matchedPairs
  let contextsInt;
  let selectedContextInt;
  let matchedPairsInt;
  let questionPairInt;

  function expandQuestionResponse() {
    this.classList.toggle( 'cactuar__title--active' );
    let questionResponse = this.nextElementSibling;

    if ( questionResponse.style.maxHeight ) {
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

  function filterSelectedContext() {
    let selectedContext = document.getElementsByClassName( 'cactuar__context--active' );
    let selectedContextTarget = selectedContext[0].getAttribute('data-target');
    if ( selectedContextTarget === 'cactuar__pair--all' ) selectedContextTarget = '';

    for ( selectedContextInt = 0; selectedContextInt < responsePairs.length; selectedContextInt++ ) {
      matchedPairs = responsePairs[selectedContextInt];

      for ( matchedPairsInt = 0; matchedPairsInt < matchedPairs.classList.length; matchedPairsInt++ ) {
        if ( matchedPairs.classList[matchedPairsInt].match( selectedContextTarget ) ) {
          matchedPairs.style.display = 'block';
        } else {
          matchedPairs.style.display = 'none';
        }
      }
    }
  }

  function eventListener() {
    for ( questionPairInt = 0; questionPairInt < questionTitle.length; questionPairInt++ ) {
      questionTitle[questionPairInt].addEventListener( 'click', expandQuestionResponse );
    }

    for ( contextsInt = 0; contextsInt < contexts.length; contextsInt++ ) {
      contexts[contextsInt].addEventListener( 'click', selectActiveContext );
      contexts[contextsInt].addEventListener( 'click', filterSelectedContext );
    }
  }

  function initCactaur() {
    eventListener();
  }

  initCactaur();
}() );
