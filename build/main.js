/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scss/index.scss":
/*!*************************!*\
  !*** ./scss/index.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/typed.js/lib/typed.js":
/*!********************************************!*\
  !*** ./node_modules/typed.js/lib/typed.js ***!
  \********************************************/
/***/ (function(module) {

/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.11
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_737__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_737__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_737__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_737__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_737__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_737__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __nested_webpack_require_2018__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _initializerJs = __nested_webpack_require_2018__(1);
	
	var _htmlParserJs = __nested_webpack_require_2018__(3);
	
	/**
	 * Welcome to Typed.js!
	 * @param {string} elementId HTML element ID _OR_ HTML element
	 * @param {object} options options object
	 * @returns {object} a new Typed object
	 */
	
	var Typed = (function () {
	  function Typed(elementId, options) {
	    _classCallCheck(this, Typed);
	
	    // Initialize it up
	    _initializerJs.initializer.load(this, options, elementId);
	    // All systems go!
	    this.begin();
	  }
	
	  /**
	   * Toggle start() and stop() of the Typed instance
	   * @public
	   */
	
	  _createClass(Typed, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.pause.status ? this.start() : this.stop();
	    }
	
	    /**
	     * Stop typing / backspacing and enable cursor blinking
	     * @public
	     */
	  }, {
	    key: 'stop',
	    value: function stop() {
	      if (this.typingComplete) return;
	      if (this.pause.status) return;
	      this.toggleBlinking(true);
	      this.pause.status = true;
	      this.options.onStop(this.arrayPos, this);
	    }
	
	    /**
	     * Start typing / backspacing after being stopped
	     * @public
	     */
	  }, {
	    key: 'start',
	    value: function start() {
	      if (this.typingComplete) return;
	      if (!this.pause.status) return;
	      this.pause.status = false;
	      if (this.pause.typewrite) {
	        this.typewrite(this.pause.curString, this.pause.curStrPos);
	      } else {
	        this.backspace(this.pause.curString, this.pause.curStrPos);
	      }
	      this.options.onStart(this.arrayPos, this);
	    }
	
	    /**
	     * Destroy this instance of Typed
	     * @public
	     */
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.reset(false);
	      this.options.onDestroy(this);
	    }
	
	    /**
	     * Reset Typed and optionally restarts
	     * @param {boolean} restart
	     * @public
	     */
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var restart = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      clearInterval(this.timeout);
	      this.replaceText('');
	      if (this.cursor && this.cursor.parentNode) {
	        this.cursor.parentNode.removeChild(this.cursor);
	        this.cursor = null;
	      }
	      this.strPos = 0;
	      this.arrayPos = 0;
	      this.curLoop = 0;
	      if (restart) {
	        this.insertCursor();
	        this.options.onReset(this);
	        this.begin();
	      }
	    }
	
	    /**
	     * Begins the typing animation
	     * @private
	     */
	  }, {
	    key: 'begin',
	    value: function begin() {
	      var _this = this;
	
	      this.options.onBegin(this);
	      this.typingComplete = false;
	      this.shuffleStringsIfNeeded(this);
	      this.insertCursor();
	      if (this.bindInputFocusEvents) this.bindFocusEvents();
	      this.timeout = setTimeout(function () {
	        // Check if there is some text in the element, if yes start by backspacing the default message
	        if (!_this.currentElContent || _this.currentElContent.length === 0) {
	          _this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos);
	        } else {
	          // Start typing
	          _this.backspace(_this.currentElContent, _this.currentElContent.length);
	        }
	      }, this.startDelay);
	    }
	
	    /**
	     * Called for each character typed
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'typewrite',
	    value: function typewrite(curString, curStrPos) {
	      var _this2 = this;
	
	      if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
	        this.el.classList.remove(this.fadeOutClass);
	        if (this.cursor) this.cursor.classList.remove(this.fadeOutClass);
	      }
	
	      var humanize = this.humanizer(this.typeSpeed);
	      var numChars = 1;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	
	      // contain typing function in a timeout humanize'd delay
	      this.timeout = setTimeout(function () {
	        // skip over any HTML chars
	        curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);
	
	        var pauseTime = 0;
	        var substr = curString.substr(curStrPos);
	        // check for an escape character before a pause value
	        // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
	        // single ^ are removed from string
	        if (substr.charAt(0) === '^') {
	          if (/^\^\d+/.test(substr)) {
	            var skip = 1; // skip at least 1
	            substr = /\d+/.exec(substr)[0];
	            skip += substr.length;
	            pauseTime = parseInt(substr);
	            _this2.temporaryPause = true;
	            _this2.options.onTypingPaused(_this2.arrayPos, _this2);
	            // strip out the escape character and pause value so they're not printed
	            curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
	            _this2.toggleBlinking(true);
	          }
	        }
	
	        // check for skip characters formatted as
	        // "this is a `string to print NOW` ..."
	        if (substr.charAt(0) === '`') {
	          while (curString.substr(curStrPos + numChars).charAt(0) !== '`') {
	            numChars++;
	            if (curStrPos + numChars > curString.length) break;
	          }
	          // strip out the escape characters and append all the string in between
	          var stringBeforeSkip = curString.substring(0, curStrPos);
	          var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
	          var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
	          curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
	          numChars--;
	        }
	
	        // timeout for any pause after a character
	        _this2.timeout = setTimeout(function () {
	          // Accounts for blinking while paused
	          _this2.toggleBlinking(false);
	
	          // We're done with this sentence!
	          if (curStrPos >= curString.length) {
	            _this2.doneTyping(curString, curStrPos);
	          } else {
	            _this2.keepTyping(curString, curStrPos, numChars);
	          }
	          // end of character pause
	          if (_this2.temporaryPause) {
	            _this2.temporaryPause = false;
	            _this2.options.onTypingResumed(_this2.arrayPos, _this2);
	          }
	        }, pauseTime);
	
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Continue to the next string & begin typing
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'keepTyping',
	    value: function keepTyping(curString, curStrPos, numChars) {
	      // call before functions if applicable
	      if (curStrPos === 0) {
	        this.toggleBlinking(false);
	        this.options.preStringTyped(this.arrayPos, this);
	      }
	      // start typing each new char into existing string
	      // curString: arg, this.el.html: original text inside element
	      curStrPos += numChars;
	      var nextString = curString.substr(0, curStrPos);
	      this.replaceText(nextString);
	      // loop the function
	      this.typewrite(curString, curStrPos);
	    }
	
	    /**
	     * We're done typing the current string
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'doneTyping',
	    value: function doneTyping(curString, curStrPos) {
	      var _this3 = this;
	
	      // fires callback function
	      this.options.onStringTyped(this.arrayPos, this);
	      this.toggleBlinking(true);
	      // is this the final string
	      if (this.arrayPos === this.strings.length - 1) {
	        // callback that occurs on the last typed string
	        this.complete();
	        // quit if we wont loop back
	        if (this.loop === false || this.curLoop === this.loopCount) {
	          return;
	        }
	      }
	      this.timeout = setTimeout(function () {
	        _this3.backspace(curString, curStrPos);
	      }, this.backDelay);
	    }
	
	    /**
	     * Backspaces 1 character at a time
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'backspace',
	    value: function backspace(curString, curStrPos) {
	      var _this4 = this;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	      if (this.fadeOut) return this.initFadeOut();
	
	      this.toggleBlinking(false);
	      var humanize = this.humanizer(this.backSpeed);
	
	      this.timeout = setTimeout(function () {
	        curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4);
	        // replace text with base text + typed characters
	        var curStringAtPosition = curString.substr(0, curStrPos);
	        _this4.replaceText(curStringAtPosition);
	
	        // if smartBack is enabled
	        if (_this4.smartBackspace) {
	          // the remaining part of the current string is equal of the same part of the new string
	          var nextString = _this4.strings[_this4.arrayPos + 1];
	          if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) {
	            _this4.stopNum = curStrPos;
	          } else {
	            _this4.stopNum = 0;
	          }
	        }
	
	        // if the number (id of character in current string) is
	        // less than the stop number, keep going
	        if (curStrPos > _this4.stopNum) {
	          // subtract characters one by one
	          curStrPos--;
	          // loop the function
	          _this4.backspace(curString, curStrPos);
	        } else if (curStrPos <= _this4.stopNum) {
	          // if the stop number has been reached, increase
	          // array position to next string
	          _this4.arrayPos++;
	          // When looping, begin at the beginning after backspace complete
	          if (_this4.arrayPos === _this4.strings.length) {
	            _this4.arrayPos = 0;
	            _this4.options.onLastStringBackspaced();
	            _this4.shuffleStringsIfNeeded();
	            _this4.begin();
	          } else {
	            _this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos);
	          }
	        }
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Full animation is complete
	     * @private
	     */
	  }, {
	    key: 'complete',
	    value: function complete() {
	      this.options.onComplete(this);
	      if (this.loop) {
	        this.curLoop++;
	      } else {
	        this.typingComplete = true;
	      }
	    }
	
	    /**
	     * Has the typing been stopped
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @param {boolean} isTyping
	     * @private
	     */
	  }, {
	    key: 'setPauseStatus',
	    value: function setPauseStatus(curString, curStrPos, isTyping) {
	      this.pause.typewrite = isTyping;
	      this.pause.curString = curString;
	      this.pause.curStrPos = curStrPos;
	    }
	
	    /**
	     * Toggle the blinking cursor
	     * @param {boolean} isBlinking
	     * @private
	     */
	  }, {
	    key: 'toggleBlinking',
	    value: function toggleBlinking(isBlinking) {
	      if (!this.cursor) return;
	      // if in paused state, don't toggle blinking a 2nd time
	      if (this.pause.status) return;
	      if (this.cursorBlinking === isBlinking) return;
	      this.cursorBlinking = isBlinking;
	      if (isBlinking) {
	        this.cursor.classList.add('typed-cursor--blink');
	      } else {
	        this.cursor.classList.remove('typed-cursor--blink');
	      }
	    }
	
	    /**
	     * Speed in MS to type
	     * @param {number} speed
	     * @private
	     */
	  }, {
	    key: 'humanizer',
	    value: function humanizer(speed) {
	      return Math.round(Math.random() * speed / 2) + speed;
	    }
	
	    /**
	     * Shuffle the sequence of the strings array
	     * @private
	     */
	  }, {
	    key: 'shuffleStringsIfNeeded',
	    value: function shuffleStringsIfNeeded() {
	      if (!this.shuffle) return;
	      this.sequence = this.sequence.sort(function () {
	        return Math.random() - 0.5;
	      });
	    }
	
	    /**
	     * Adds a CSS class to fade out current string
	     * @private
	     */
	  }, {
	    key: 'initFadeOut',
	    value: function initFadeOut() {
	      var _this5 = this;
	
	      this.el.className += ' ' + this.fadeOutClass;
	      if (this.cursor) this.cursor.className += ' ' + this.fadeOutClass;
	      return setTimeout(function () {
	        _this5.arrayPos++;
	        _this5.replaceText('');
	
	        // Resets current string if end of loop reached
	        if (_this5.strings.length > _this5.arrayPos) {
	          _this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0);
	        } else {
	          _this5.typewrite(_this5.strings[0], 0);
	          _this5.arrayPos = 0;
	        }
	      }, this.fadeOutDelay);
	    }
	
	    /**
	     * Replaces current text in the HTML element
	     * depending on element type
	     * @param {string} str
	     * @private
	     */
	  }, {
	    key: 'replaceText',
	    value: function replaceText(str) {
	      if (this.attr) {
	        this.el.setAttribute(this.attr, str);
	      } else {
	        if (this.isInput) {
	          this.el.value = str;
	        } else if (this.contentType === 'html') {
	          this.el.innerHTML = str;
	        } else {
	          this.el.textContent = str;
	        }
	      }
	    }
	
	    /**
	     * If using input elements, bind focus in order to
	     * start and stop the animation
	     * @private
	     */
	  }, {
	    key: 'bindFocusEvents',
	    value: function bindFocusEvents() {
	      var _this6 = this;
	
	      if (!this.isInput) return;
	      this.el.addEventListener('focus', function (e) {
	        _this6.stop();
	      });
	      this.el.addEventListener('blur', function (e) {
	        if (_this6.el.value && _this6.el.value.length !== 0) {
	          return;
	        }
	        _this6.start();
	      });
	    }
	
	    /**
	     * On init, insert the cursor element
	     * @private
	     */
	  }, {
	    key: 'insertCursor',
	    value: function insertCursor() {
	      if (!this.showCursor) return;
	      if (this.cursor) return;
	      this.cursor = document.createElement('span');
	      this.cursor.className = 'typed-cursor';
	      this.cursor.innerHTML = this.cursorChar;
	      this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
	    }
	  }]);
	
	  return Typed;
	})();
	
	exports['default'] = Typed;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __nested_webpack_require_18173__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _defaultsJs = __nested_webpack_require_18173__(2);
	
	var _defaultsJs2 = _interopRequireDefault(_defaultsJs);
	
	/**
	 * Initialize the Typed object
	 */
	
	var Initializer = (function () {
	  function Initializer() {
	    _classCallCheck(this, Initializer);
	  }
	
	  _createClass(Initializer, [{
	    key: 'load',
	
	    /**
	     * Load up defaults & options on the Typed instance
	     * @param {Typed} self instance of Typed
	     * @param {object} options options object
	     * @param {string} elementId HTML element ID _OR_ instance of HTML element
	     * @private
	     */
	
	    value: function load(self, options, elementId) {
	      // chosen element to manipulate text
	      if (typeof elementId === 'string') {
	        self.el = document.querySelector(elementId);
	      } else {
	        self.el = elementId;
	      }
	
	      self.options = _extends({}, _defaultsJs2['default'], options);
	
	      // attribute to type into
	      self.isInput = self.el.tagName.toLowerCase() === 'input';
	      self.attr = self.options.attr;
	      self.bindInputFocusEvents = self.options.bindInputFocusEvents;
	
	      // show cursor
	      self.showCursor = self.isInput ? false : self.options.showCursor;
	
	      // custom cursor
	      self.cursorChar = self.options.cursorChar;
	
	      // Is the cursor blinking
	      self.cursorBlinking = true;
	
	      // text content of element
	      self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent;
	
	      // html or plain text
	      self.contentType = self.options.contentType;
	
	      // typing speed
	      self.typeSpeed = self.options.typeSpeed;
	
	      // add a delay before typing starts
	      self.startDelay = self.options.startDelay;
	
	      // backspacing speed
	      self.backSpeed = self.options.backSpeed;
	
	      // only backspace what doesn't match the previous string
	      self.smartBackspace = self.options.smartBackspace;
	
	      // amount of time to wait before backspacing
	      self.backDelay = self.options.backDelay;
	
	      // Fade out instead of backspace
	      self.fadeOut = self.options.fadeOut;
	      self.fadeOutClass = self.options.fadeOutClass;
	      self.fadeOutDelay = self.options.fadeOutDelay;
	
	      // variable to check whether typing is currently paused
	      self.isPaused = false;
	
	      // input strings of text
	      self.strings = self.options.strings.map(function (s) {
	        return s.trim();
	      });
	
	      // div containing strings
	      if (typeof self.options.stringsElement === 'string') {
	        self.stringsElement = document.querySelector(self.options.stringsElement);
	      } else {
	        self.stringsElement = self.options.stringsElement;
	      }
	
	      if (self.stringsElement) {
	        self.strings = [];
	        self.stringsElement.style.display = 'none';
	        var strings = Array.prototype.slice.apply(self.stringsElement.children);
	        var stringsLength = strings.length;
	
	        if (stringsLength) {
	          for (var i = 0; i < stringsLength; i += 1) {
	            var stringEl = strings[i];
	            self.strings.push(stringEl.innerHTML.trim());
	          }
	        }
	      }
	
	      // character number position of current string
	      self.strPos = 0;
	
	      // current array position
	      self.arrayPos = 0;
	
	      // index of string to stop backspacing on
	      self.stopNum = 0;
	
	      // Looping logic
	      self.loop = self.options.loop;
	      self.loopCount = self.options.loopCount;
	      self.curLoop = 0;
	
	      // shuffle the strings
	      self.shuffle = self.options.shuffle;
	      // the order of strings
	      self.sequence = [];
	
	      self.pause = {
	        status: false,
	        typewrite: true,
	        curString: '',
	        curStrPos: 0
	      };
	
	      // When the typing is complete (when not looped)
	      self.typingComplete = false;
	
	      // Set the order in which the strings are typed
	      for (var i in self.strings) {
	        self.sequence[i] = i;
	      }
	
	      // If there is some text in the element
	      self.currentElContent = this.getCurrentElContent(self);
	
	      self.autoInsertCss = self.options.autoInsertCss;
	
	      this.appendAnimationCss(self);
	    }
	  }, {
	    key: 'getCurrentElContent',
	    value: function getCurrentElContent(self) {
	      var elContent = '';
	      if (self.attr) {
	        elContent = self.el.getAttribute(self.attr);
	      } else if (self.isInput) {
	        elContent = self.el.value;
	      } else if (self.contentType === 'html') {
	        elContent = self.el.innerHTML;
	      } else {
	        elContent = self.el.textContent;
	      }
	      return elContent;
	    }
	  }, {
	    key: 'appendAnimationCss',
	    value: function appendAnimationCss(self) {
	      var cssDataName = 'data-typed-js-css';
	      if (!self.autoInsertCss) {
	        return;
	      }
	      if (!self.showCursor && !self.fadeOut) {
	        return;
	      }
	      if (document.querySelector('[' + cssDataName + ']')) {
	        return;
	      }
	
	      var css = document.createElement('style');
	      css.type = 'text/css';
	      css.setAttribute(cssDataName, true);
	
	      var innerCss = '';
	      if (self.showCursor) {
	        innerCss += '\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ';
	      }
	      if (self.fadeOut) {
	        innerCss += '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ';
	      }
	      if (css.length === 0) {
	        return;
	      }
	      css.innerHTML = innerCss;
	      document.body.appendChild(css);
	    }
	  }]);
	
	  return Initializer;
	})();
	
	exports['default'] = Initializer;
	var initializer = new Initializer();
	exports.initializer = initializer;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/**
	 * Defaults & options
	 * @returns {object} Typed defaults & options
	 * @public
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var defaults = {
	  /**
	   * @property {array} strings strings to be typed
	   * @property {string} stringsElement ID of element containing string children
	   */
	  strings: ['These are the default values...', 'You know what you should do?', 'Use your own!', 'Have a great day!'],
	  stringsElement: null,
	
	  /**
	   * @property {number} typeSpeed type speed in milliseconds
	   */
	  typeSpeed: 0,
	
	  /**
	   * @property {number} startDelay time before typing starts in milliseconds
	   */
	  startDelay: 0,
	
	  /**
	   * @property {number} backSpeed backspacing speed in milliseconds
	   */
	  backSpeed: 0,
	
	  /**
	   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
	   */
	  smartBackspace: true,
	
	  /**
	   * @property {boolean} shuffle shuffle the strings
	   */
	  shuffle: false,
	
	  /**
	   * @property {number} backDelay time before backspacing in milliseconds
	   */
	  backDelay: 700,
	
	  /**
	   * @property {boolean} fadeOut Fade out instead of backspace
	   * @property {string} fadeOutClass css class for fade animation
	   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
	   */
	  fadeOut: false,
	  fadeOutClass: 'typed-fade-out',
	  fadeOutDelay: 500,
	
	  /**
	   * @property {boolean} loop loop strings
	   * @property {number} loopCount amount of loops
	   */
	  loop: false,
	  loopCount: Infinity,
	
	  /**
	   * @property {boolean} showCursor show cursor
	   * @property {string} cursorChar character for cursor
	   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
	   */
	  showCursor: true,
	  cursorChar: '|',
	  autoInsertCss: true,
	
	  /**
	   * @property {string} attr attribute for typing
	   * Ex: input placeholder, value, or just HTML text
	   */
	  attr: null,
	
	  /**
	   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
	   */
	  bindInputFocusEvents: false,
	
	  /**
	   * @property {string} contentType 'html' or 'null' for plaintext
	   */
	  contentType: 'html',
	
	  /**
	   * Before it begins typing
	   * @param {Typed} self
	   */
	  onBegin: function onBegin(self) {},
	
	  /**
	   * All typing is complete
	   * @param {Typed} self
	   */
	  onComplete: function onComplete(self) {},
	
	  /**
	   * Before each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  preStringTyped: function preStringTyped(arrayPos, self) {},
	
	  /**
	   * After each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStringTyped: function onStringTyped(arrayPos, self) {},
	
	  /**
	   * During looping, after last string is typed
	   * @param {Typed} self
	   */
	  onLastStringBackspaced: function onLastStringBackspaced(self) {},
	
	  /**
	   * Typing has been stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingPaused: function onTypingPaused(arrayPos, self) {},
	
	  /**
	   * Typing has been started after being stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingResumed: function onTypingResumed(arrayPos, self) {},
	
	  /**
	   * After reset
	   * @param {Typed} self
	   */
	  onReset: function onReset(self) {},
	
	  /**
	   * After stop
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStop: function onStop(arrayPos, self) {},
	
	  /**
	   * After start
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStart: function onStart(arrayPos, self) {},
	
	  /**
	   * After destroy
	   * @param {Typed} self
	   */
	  onDestroy: function onDestroy(self) {}
	};
	
	exports['default'] = defaults;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/**
	 * TODO: These methods can probably be combined somehow
	 * Parse HTML tags & HTML Characters
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var HTMLParser = (function () {
	  function HTMLParser() {
	    _classCallCheck(this, HTMLParser);
	  }
	
	  _createClass(HTMLParser, [{
	    key: 'typeHtmlChars',
	
	    /**
	     * Type HTML tags & HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	
	    value: function typeHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '<' || curChar === '&') {
	        var endTag = '';
	        if (curChar === '<') {
	          endTag = '>';
	        } else {
	          endTag = ';';
	        }
	        while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
	          curStrPos++;
	          if (curStrPos + 1 > curString.length) {
	            break;
	          }
	        }
	        curStrPos++;
	      }
	      return curStrPos;
	    }
	
	    /**
	     * Backspace HTML tags and HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	  }, {
	    key: 'backSpaceHtmlChars',
	    value: function backSpaceHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '>' || curChar === ';') {
	        var endTag = '';
	        if (curChar === '>') {
	          endTag = '<';
	        } else {
	          endTag = '&';
	        }
	        while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
	          curStrPos--;
	          if (curStrPos < 0) {
	            break;
	          }
	        }
	        curStrPos--;
	      }
	      return curStrPos;
	    }
	  }]);
	
	  return HTMLParser;
	})();
	
	exports['default'] = HTMLParser;
	var htmlParser = new HTMLParser();
	exports.htmlParser = htmlParser;

/***/ })
/******/ ])
});
;

/***/ }),

/***/ "./scripts/content.js":
/*!****************************!*\
  !*** ./scripts/content.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "portfolio": () => /* binding */ portfolio,
/* harmony export */   "skills": () => /* binding */ skills,
/* harmony export */   "technologies": () => /* binding */ technologies,
/* harmony export */   "pageContent": () => /* binding */ pageContent
/* harmony export */ });
// eslint-disable-next-line import/prefer-default-export
const portfolio = [
  {
    name: 'fancy-weather',
    icon: 'assets/icons/fancy-weather_icon-min.png',
    description: {
      // eslint-disable-next-line quote-props
      'en': `<p>The Fancy-weather was created during the course of The Rolling Scopes school (EPAM Systems).
            It is a weather-focast application. By default, the app displays weather, 3-days forecast, current time, 
            and current geographical coordinates in the place where user is located.
            But app can display information about each city. 
            Еhe app has an integrated map that shows the current place or the required place.</p>
            <p>The project uses such technologies as: <b>HTML5</b>, <b>CSS3</b>, <b>SASS</b>, <b>JavaScript</b>, <b>Webpack</b>.</p>`,
      // eslint-disable-next-line quote-props
      'ru': `<p>Проект был создан во время прохождения курса The Rolling Scopes school (EPAM Systems). 
            Web-приложение показывает текущую погоду и прогноз погоды на три следующих дня в текущем месте или любом другом искомом месте. 
            В приложение интегрирована карта, указывающая текущее положение либо положение искомого города. Возможен выбор английского или русского языка, 
            температуры в градусах цельсия или фаренгейта.</p>
            <p>В проекте применены: <b>HTML5</b>, <b>CSS3</b>, <b>SASS</b>, <b>JavaScript</b>, <b>Webpack</b>.</p>`,
    },
    linkGit: 'https://github.com/AndreiMilashevich/rsschool-cv/tree/fancy-weather',
    linkDemo: 'https://andreimilashevich.github.io/rsschool-cv/fancy-weather/build/index.html',
    attr: 'data-html="true" data-css="true" data-js="true" data-sass="true" data-webpack="true"',
  },
  {
    name: 'Simple-singolo',
    icon: 'assets/icons/singolo_icon-min.png',
    description: {
      // eslint-disable-next-line quote-props
      'en': `<p>The Simple-Singolo was created during the course of The Rolling Scopes school (EPAM Systems).
          <p>The layout is laid out in three states: mobile, tablet and desktop.</p>
          </p><p>The project uses such technologies as: <b>HTML5</b>, <b>CSS3</b>, <b>SASS</b>, <b>JavaScript</b>.</p>`,
      // eslint-disable-next-line quote-props
      'ru': `<p>Приложение Simple-singolo было создано во время прохождения курса The Rolling Scopes school (EPAM Systems).</p>
          <p>Приложение сверстано по адаптивному макету.</p>
          <p>В проекте применены: <b>HTML5</b>, <b>CSS3</b>, <b>SASS</b>, <b>JavaScript</b>.</p>`,
    },
    linkGit: 'https://github.com/AndreiMilashevich/simple-singolo',
    linkDemo: 'https://andreimilashevich.github.io/simple-singolo/simple-singolo/index',
    attr: 'data-html="true" data-css="true" data-js="true" data-sass="true" data-webpack="false"',
  },
  {
    name: 'Raindrops',
    icon: 'assets/icons/raindrops-min.png',
    description: {
      // eslint-disable-next-line quote-props
      'en': `<p>The Rainrops Game was created during the course of The Rolling Scopes school (EPAM Systems).
      </p><p>Math examples are written in raindrops that falls at a certain speed. 
      You must  enter the answer from keybord or numpad on right side of screen before the drop falls. 
      After the end of the game, the game statistics are displayed.</p>
      <p>The project uses such technologies as: <b>HTML5</b>, <b>CSS3</b>, <b>SASS</b>, <b>JavaScript</b>, <b>Webpack</b>.</p>`,
      // eslint-disable-next-line quote-props
      'ru': `<p>Игра Rainrops была создано во время прохождения курса The Rolling Scopes school (EPAM Systems).</p>
      <p>Математические примеры написаны внутри капель дождя, падающих с определенной скоростью. 
      Нужно ввести пример с клавиатуры или числовой панели на экране до того как капли упадут. 
      После завершения игры на экран выводится игровая статистика.</p>
      <p>В проекте применены: <b>HTML5</b>, <b>CSS3</b>, <b>SASS</b>, <b>JavaScript</b>, <b>Webpack</b>.</p>`,
    },
    linkGit: 'https://github.com/AndreiMilashevich/raindrops',
    linkDemo: 'https://andreimilashevich.github.io/raindrops/raindrops/build/index',
    attr: 'data-html="true" data-css="true" data-js="true" data-sass="true" data-webpack="true"',
  },
  {
    name: 'Calculator',
    icon: 'assets/icons/Calculator-min.png',
    description: {
      // eslint-disable-next-line quote-props
      'en': `<p>The Rainrops app was created during the course of The UpSkillsLab (EPAM Systems). The app is a simple calculator.</p> 
      <p>The project uses such technologies as: <b>HTML5</b>, <b>CSS3</b>, <b>SASS</b>, <b>JavaScript</b>.</p>`,
      // eslint-disable-next-line quote-props
      'ru': `<p>Приложение калькулятор было создано во время прохождения курса UpSkillsLab (EPAM Systems). 
      Приложение представляет собой простой калькулятор.</p>
      <p>В проекте применены: <b>HTML5</b>, <b>CSS3</b>, <b>JavaScript</b>.</p>`,
    },
    linkGit: 'https://github.com/AndreiMilashevich/calculator',
    linkDemo: 'https://andreimilashevich.github.io/Calculator/',
    attr: 'data-html="true" data-css="true" data-js="true" data-sass="false" data-webpack="false"',
  },
];

const skills = [
  { description: 'HTML5', icon: 'assets/icons/html5_icon.png' },
  { description: 'CSS3', icon: 'assets/icons/css3_icon.png' },
  { description: 'JavaScript', icon: 'assets/icons/js_icon.png' },
  { description: 'SASS', icon: 'assets/icons/sass_icon.png' },
  { description: 'Git', icon: 'assets/icons/git_icon.png' },
  { description: 'GitHub', icon: 'assets/icons/github_icon.png' },
  { description: 'Webpack', icon: 'assets/icons/webpack_icon.png' },
];

const technologies = [
  { name: 'All' },
  { name: 'HTML5' },
  { name: 'CSS3' },
  { name: 'SASS' },
  { name: 'JS' },
  { name: 'Webpack' },
];

const pageContent = {
  // eslint-disable-next-line quote-props
  'ru': {
    home: 'Домой',
    skills: 'Навыки',
    portfolio: 'Портфолио',
    about: 'Обо мне',
    contacts: 'Контакты',
    strings: ['Привет!',
      'Я Андрей!',
      'и я Web разработчик!',
    ],
    learn: '<p>Узнать больше</p>',
    skillsHeader: 'Технические навыки',
    name: '<p>Имя</p>',
    namePlaceholder: 'Введите ваше имя',
    emailPlaceholder: 'Введите ваш email',
    textarea: 'Ваше сообщение',
    textareaPlaceholder: 'Введите ваше сообщение',
    submit: 'Отправить сообщение',
    demo: 'Демонстрация',
    aboutDescription: `<b>Пара слов обо мне:</b><br/>
    <ul>
    <li> Окончил авиационный факультет Военной академии Республики Беларусь.</li>
    <li> Специальность: Техническая эксплуатация пилотируемых летательных аппаратов и их силовых установок.</li>
    <li> В авиации добился больших высот, став инженером инженерно-авиационной службы авиационной эскадрильи (на ил-76, Ан-26), но это потолок развития авиационного инженера.</li>
    <li> Решил открыть для себя новые горизонты и прошел курсы: SkillUp(Ukraine) - Basic Web and SQL for software
    testing (2020) и «The Rolling Scopes school» (EPAM Systems)
    (2021).</li>
    <li> English: A2 - Pre-intermediate.</li></ul>`,
  },
  // eslint-disable-next-line quote-props
  'en': {
    home: 'Home',
    skills: 'Skills',
    portfolio: 'Portfilio',
    about: 'About me',
    contacts: 'Contacts',
    strings: ['Hello!',
      "I'm Andrei!",
      "I'm a Web Developer!",
    ],
    learn: '<p>Learn more about what I do</p>',
    skillsHeader: 'Skills',
    name: '<p>Name</p>',
    namePlaceholder: 'Enter your name',
    emailPlaceholder: 'Enter your email',
    textarea: 'Your message',
    textareaPlaceholder: 'Enter your message',
    submit: 'Send message',
    demo: 'Demo',
    aboutDescription: `<b>A couple of words about me:</b><br/>
    <ul>
    <li>Education: Military Academy of the Republic of Belarus
    (2011). Aviation faculty.</li>
    <li>Specialty: Technical exploitation of manned aircrafts and
    their power units</li>
    <li>Previous job: Engineer of the aviation engineering department
    of the aviation squadron (IL-76, An-26)</li>
    <li>Courses: SkillUp(Ukraine) - Basic Web and SQL for software
    testing (2020) and «The Rolling Scopes school» (EPAM Systems)
    (2021).</li>
    <li>English: A2 - Pre-intermediate</li></ul>`,
  },
};


/***/ }),

/***/ "./scripts/script.js":
/*!***************************!*\
  !*** ./scripts/script.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/index.scss */ "./scss/index.scss");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.js */ "./scripts/content.js");
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */




const skillsContainer = document.querySelector('.skills_wrapper');
const portfolioButtonContainer = document.querySelector('.portfolio_button_container');
const portfolioContainer = document.querySelector('.portfolio_wrapper');
const skillsDelay = 200;
const aosDuration = 500;
const photos = Array.from(document.querySelectorAll('.about_me_image_item'));

const skillsButton = document.querySelector('.button_skills');
const homeButton = document.querySelector('.button_home');
const portfolioButton = document.querySelector('.button_portfolio');
const aboutMeButton = document.querySelector('.button_about_me');
const contactButton = document.querySelector('.button_contacts');
const learnMoreButton = document.querySelector('.learn_more');
const submit = document.querySelector('.submit');
const langButtonEn = document.querySelector('.en');
const langButtonRu = document.querySelector('.ru');

const skillSection = document.querySelector('.skills');
const portfolioSection = document.querySelector('.portfolio');
const aboutMeSection = document.querySelector('.about_me');
const contactSection = document.querySelector('.contact_section');
const header = document.querySelector('header');

// const hello = document.querySelector('.hello_span');
const skillsHeader = document.querySelector('.skills_header');
const portfolioHeader = document.querySelector('.portfolio_header');
const aboutMeHeader = document.querySelector('.about_me_header');
const contactsHeader = document.querySelector('.contact_header');
const inputName = document.querySelector('#name');
const labelName = document.querySelector('.name');
const inputMail = document.querySelector('#email');
const inputMessage = document.querySelector('#message');
const labelMessage = document.querySelector('.message');
const aboutMeDescription = document.querySelector('.about_me_description');

let language = 'en';

const options = {
  strings: _content_js__WEBPACK_IMPORTED_MODULE_2__.pageContent[`${language}`].strings,
  typeSpeed: 60,
  backDelay: 1200,
  backSpeed: 43,
  loop: true,
  fadeOut: false,
};

let typed = new (typed_js__WEBPACK_IMPORTED_MODULE_1___default())('.typed', options);

function setSkills(data) {
  data.forEach((element, index) => {
    const divContainer = document.createElement('div');
    const div = document.createElement('div');
    const p = document.createElement('p');
    divContainer.className = 'skills_item';
    divContainer.setAttribute('data-aos', 'flip-left');
    divContainer.setAttribute('data-aos-delay', index * skillsDelay);
    divContainer.setAttribute('data-aos-duration', aosDuration * 2);
    div.className = 'skills_image';
    p.className = 'skills_description';
    div.style.backgroundImage = `url(${element.icon})`;
    p.textContent = element.description;
    divContainer.appendChild(div);
    divContainer.appendChild(p);
    skillsContainer.appendChild(divContainer);
  });
}

function setPortfolioButton(data) {
  data.forEach((element, index) => {
    const div = document.createElement('div');
    div.className = 'portfolio_button_item';
    div.textContent = element.name;
    div.setAttribute('data-aos', 'fade-down');
    div.setAttribute('data-aos-delay', (index * skillsDelay) / 2);
    div.setAttribute('data-aos-duration', aosDuration);
    div.setAttribute('data-button', element.name.toLowerCase());
    portfolioButtonContainer.appendChild(div);
  });
}

function setPortfolioItem(data) {
  data.forEach((element, index) => {
    let side;
    if (index % 2 === 0) {
      side = 'left';
    } else {
      side = 'right';
    }
    portfolioContainer.insertAdjacentHTML('beforeend', `<div class="portfolio_item" data-aos="flip-${side}" data-aos-anchor-placement="bottom-center" data-aos-duration="1000" data-aos-anchor=".portfolio_header" data-aos-anchor-placement="center-bottom " ${_content_js__WEBPACK_IMPORTED_MODULE_2__.portfolio[index].attr}>
    <h3>${element.name}</h3>
    <div class="portfolio_item_body">
      <div class="portfolio_item_image" style="background-image: url('${element.icon}')"></div>
      <div class="portfolio_item_description"><p>${element.description[`${language}`]}</p></div>  
    </div>
    <div class="portfolio_item_button_container button" >
      <a href="${element.linkDemo}" target="_blank">
        <div class="portfolio_button_item">${_content_js__WEBPACK_IMPORTED_MODULE_2__.pageContent[`${language}`].demo}</div>
      </a>
      <a href="${element.linkGit}" target="_blank">
        <div class="portfolio_button_item">GitHub</div>
      </a>
    </div>
  </div>`);
  });
}

function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this; const
      // eslint-disable-next-line prefer-rest-params
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function scroll(block, deltaHeight = header.offsetHeight) {
  window.scrollTo({ left: 0, top: block.offsetTop - deltaHeight + 1, behavior: 'smooth' });
}

document.body.addEventListener('click', (event) => {
  if (event.target.dataset.type === 'image') {
    event.target.classList.toggle('about_me_image_item_large');
  } else {
    photos.forEach((el) => el.classList.remove('about_me_image_item_large'));
  }
});

const setButtonsActive = () => {
  const scrollDistance = window.pageYOffset;
  portfolioButton.classList.remove('active');
  homeButton.classList.remove('active');
  if (scrollDistance >= skillSection.offsetTop - header.offsetHeight && scrollDistance + header.offsetHeight < portfolioSection.offsetTop) {
    skillsButton.classList.add('active');
  } else {
    skillsButton.classList.remove('active');
  }
  if (scrollDistance >= portfolioSection.offsetTop - header.offsetHeight && scrollDistance <= portfolioSection.offsetTop + portfolioSection.offsetHeight) {
    portfolioButton.classList.add('active');
  }
  if (scrollDistance >= aboutMeSection.offsetTop - header.offsetHeight && scrollDistance <= aboutMeSection.offsetTop + aboutMeSection.offsetHeight) {
    aboutMeButton.classList.add('active');
  } else {
    aboutMeButton.classList.remove('active');
  }
  if (scrollDistance >= contactSection.offsetTop - header.offsetHeight && scrollDistance <= contactSection.offsetTop + contactSection.offsetHeight) {
    contactButton.classList.add('active');
  } else {
    contactButton.classList.remove('active');
  }
  if (scrollDistance < skillSection.offsetTop - header.offsetHeight) {
    homeButton.classList.add('active');
  }
};

function getLanguage() {
  if (localStorage.getItem('language') === null) {
    localStorage.setItem('language', 'en');
  } else {
    language = localStorage.getItem('language');
  }
}

function portfolioSort(a, data, array) {
  if (data === a) {
    for (let i = 0; i < array.length; i++) {
      array[i].classList.add('hidden');
      if (array[i].dataset[a] === 'true') {
        array[i].classList.remove('hidden');
      }
    }
  }
}

function setPageContent() {
  typed.destroy();
  homeButton.textContent = _content_js__WEBPACK_IMPORTED_MODULE_2__.pageContent[`${language}`].home;
  skillsButton.textContent = _content_js__WEBPACK_IMPORTED_MODULE_2__.pageContent[`${language}`].skills;
  portfolioButton.textContent = _content_js__WEBPACK_IMPORTED_MODULE_2__.pageContent[`${language}`].portfolio;
  contactButton.textContent = _content_js__WEBPACK_IMPORTED_MODULE_2__.pageContent[`${language}`].contacts;
  aboutMeButton.textContent = _content_js__WEBPACK_IMPORTED_MODULE_2__.pageContent[`${language}`].about;
  // hello.textContent = pageContent[`${language}`].strings[0];
  learnMoreButton.innerHTML = _content_js__WEBPACK_IMPORTED_MODULE_2__.pageContent[`${language}`].learn;
  skillsHeader.textContent = _content_js__WEBPACK_IMPORTED_MODULE_2__.pageContent[`${language}`].skillsHeader;
  portfolioHeader.textContent = _content_js__WEBPACK_IMPORTED_MODULE_2__.pageContent[`${language}`].portfolio;
  aboutMeHeader.textContent = _content_js__WEBPACK_IMPORTED_MODULE_2__.pageContent[`${language}`].about;
  contactsHeader.textContent = _content_js__WEBPACK_IMPORTED_MODULE_2__.pageContent[`${language}`].contacts;
  inputName.placeholder = _content_js__WEBPACK_IMPORTED_MODULE_2__.pageContent[`${language}`].namePlaceholder;
  labelName.innerHTML = _content_js__WEBPACK_IMPORTED_MODULE_2__.pageContent[`${language}`].name;
  inputMail.placeholder = _content_js__WEBPACK_IMPORTED_MODULE_2__.pageContent[`${language}`].emailPlaceholder;
  inputMessage.placeholder = _content_js__WEBPACK_IMPORTED_MODULE_2__.pageContent[`${language}`].textareaPlaceholder;
  labelMessage.textContent = _content_js__WEBPACK_IMPORTED_MODULE_2__.pageContent[`${language}`].textarea;
  submit.value = _content_js__WEBPACK_IMPORTED_MODULE_2__.pageContent[`${language}`].textareaPlaceholder;
  options.strings = _content_js__WEBPACK_IMPORTED_MODULE_2__.pageContent[`${language}`].strings;
  aboutMeDescription.innerHTML = _content_js__WEBPACK_IMPORTED_MODULE_2__.pageContent[`${language}`].aboutDescription;
  typed = new (typed_js__WEBPACK_IMPORTED_MODULE_1___default())('.typed', options);
  if (language === 'en') {
    langButtonEn.classList.add('lang_active');
    langButtonRu.classList.remove('lang_active');
  } else {
    langButtonRu.classList.add('lang_active');
    langButtonEn.classList.remove('lang_active');
  }
}

getLanguage();
setPageContent();
setPortfolioItem(_content_js__WEBPACK_IMPORTED_MODULE_2__.portfolio);
setSkills(_content_js__WEBPACK_IMPORTED_MODULE_2__.skills);
setPortfolioButton(_content_js__WEBPACK_IMPORTED_MODULE_2__.technologies);

skillsButton.addEventListener('click', () => scroll(skillSection));
learnMoreButton.addEventListener('click', () => scroll(skillSection));
homeButton.addEventListener('click', () => scroll(0, 0));
portfolioButton.addEventListener('click', () => scroll(portfolioSection));
aboutMeButton.addEventListener('click', () => scroll(aboutMeSection));
contactButton.addEventListener('click', () => scroll(contactSection));

langButtonEn.addEventListener('click', () => {
  portfolioContainer.innerHTML = '';
  language = langButtonEn.dataset.lang;
  localStorage.setItem('language', 'en');
  setPageContent();
  setPortfolioItem(_content_js__WEBPACK_IMPORTED_MODULE_2__.portfolio);
});

langButtonRu.addEventListener('click', () => {
  portfolioContainer.innerHTML = '';
  language = langButtonRu.dataset.lang;
  localStorage.setItem('language', 'ru');
  setPageContent();
  setPortfolioItem(_content_js__WEBPACK_IMPORTED_MODULE_2__.portfolio);
});

window.addEventListener('scroll', debounce(setButtonsActive, 400));
portfolioButtonContainer.addEventListener('click', (event) => {
  const projects = Array.from(document.querySelectorAll('.portfolio_item'));
  const data = event.target.dataset.button;
  if (data === undefined) {
    return;
  }
  const portfolioButtons = Array.from(document.querySelectorAll('.portfolio_button_item'));
  portfolioButtons.forEach((item) => {
    item.classList.remove('portfolio_active');
  });
  event.target.classList.add('portfolio_active');
  if (data === 'all') {
    projects.forEach((element) => {
      element.classList.remove('hidden');
    });
  } else {
    projects.forEach((element) => {
      element.classList.remove('hidden');
    });
  }
  portfolioSort('html', data, projects);
  portfolioSort('css', data, projects);
  portfolioSort('sass', data, projects);
  portfolioSort('js', data, projects);
  portfolioSort('webpack', data, projects);
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./scripts/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3R5cGVkLmpzL2xpYi90eXBlZC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zY3JpcHRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc2NyaXB0cy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBeUQ7QUFDN0Q7QUFDQSxNQUFNLEVBS3NCO0FBQzVCLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsOEJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsOEJBQW1CO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw4QkFBbUI7QUFDN0I7QUFDQTtBQUNBLFVBQVUsOEJBQW1CO0FBQzdCO0FBQ0E7QUFDQSxVQUFVLDhCQUFtQjtBQUM3QjtBQUNBO0FBQ0EsaUJBQWlCLDhCQUFtQjtBQUNwQyxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLCtCQUFtQjs7QUFFcEQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUYsa0NBQWtDLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFLEVBQUUseURBQXlELHFFQUFxRSw2REFBNkQsb0JBQW9CLEdBQUcsRUFBRTs7QUFFbmpCLGtEQUFrRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXhKLHNCQUFzQiwrQkFBbUI7O0FBRXpDLHFCQUFxQiwrQkFBbUI7O0FBRXhDO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLGNBQWMsT0FBTztBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Is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QyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyohXG4gKiBcbiAqICAgdHlwZWQuanMgLSBBIEphdmFTY3JpcHQgVHlwaW5nIEFuaW1hdGlvbiBMaWJyYXJ5XG4gKiAgIEF1dGhvcjogTWF0dCBCb2xkdCA8bWVAbWF0dGJvbGR0LmNvbT5cbiAqICAgVmVyc2lvbjogdjIuMC4xMVxuICogICBVcmw6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0Ym9sZHQvdHlwZWQuanNcbiAqICAgTGljZW5zZShzKTogTUlUXG4gKiBcbiAqL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVHlwZWRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVHlwZWRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cdFxuXHR2YXIgX2luaXRpYWxpemVySnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHRcblx0dmFyIF9odG1sUGFyc2VySnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXHRcblx0LyoqXG5cdCAqIFdlbGNvbWUgdG8gVHlwZWQuanMhXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50SWQgSFRNTCBlbGVtZW50IElEIF9PUl8gSFRNTCBlbGVtZW50XG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIG9wdGlvbnMgb2JqZWN0XG5cdCAqIEByZXR1cm5zIHtvYmplY3R9IGEgbmV3IFR5cGVkIG9iamVjdFxuXHQgKi9cblx0XG5cdHZhciBUeXBlZCA9IChmdW5jdGlvbiAoKSB7XG5cdCAgZnVuY3Rpb24gVHlwZWQoZWxlbWVudElkLCBvcHRpb25zKSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHlwZWQpO1xuXHRcblx0ICAgIC8vIEluaXRpYWxpemUgaXQgdXBcblx0ICAgIF9pbml0aWFsaXplckpzLmluaXRpYWxpemVyLmxvYWQodGhpcywgb3B0aW9ucywgZWxlbWVudElkKTtcblx0ICAgIC8vIEFsbCBzeXN0ZW1zIGdvIVxuXHQgICAgdGhpcy5iZWdpbigpO1xuXHQgIH1cblx0XG5cdCAgLyoqXG5cdCAgICogVG9nZ2xlIHN0YXJ0KCkgYW5kIHN0b3AoKSBvZiB0aGUgVHlwZWQgaW5zdGFuY2Vcblx0ICAgKiBAcHVibGljXG5cdCAgICovXG5cdFxuXHQgIF9jcmVhdGVDbGFzcyhUeXBlZCwgW3tcblx0ICAgIGtleTogJ3RvZ2dsZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlKCkge1xuXHQgICAgICB0aGlzLnBhdXNlLnN0YXR1cyA/IHRoaXMuc3RhcnQoKSA6IHRoaXMuc3RvcCgpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogU3RvcCB0eXBpbmcgLyBiYWNrc3BhY2luZyBhbmQgZW5hYmxlIGN1cnNvciBibGlua2luZ1xuXHQgICAgICogQHB1YmxpY1xuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnc3RvcCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcblx0ICAgICAgaWYgKHRoaXMudHlwaW5nQ29tcGxldGUpIHJldHVybjtcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzKSByZXR1cm47XG5cdCAgICAgIHRoaXMudG9nZ2xlQmxpbmtpbmcodHJ1ZSk7XG5cdCAgICAgIHRoaXMucGF1c2Uuc3RhdHVzID0gdHJ1ZTtcblx0ICAgICAgdGhpcy5vcHRpb25zLm9uU3RvcCh0aGlzLmFycmF5UG9zLCB0aGlzKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFN0YXJ0IHR5cGluZyAvIGJhY2tzcGFjaW5nIGFmdGVyIGJlaW5nIHN0b3BwZWRcblx0ICAgICAqIEBwdWJsaWNcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3N0YXJ0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcblx0ICAgICAgaWYgKHRoaXMudHlwaW5nQ29tcGxldGUpIHJldHVybjtcblx0ICAgICAgaWYgKCF0aGlzLnBhdXNlLnN0YXR1cykgcmV0dXJuO1xuXHQgICAgICB0aGlzLnBhdXNlLnN0YXR1cyA9IGZhbHNlO1xuXHQgICAgICBpZiAodGhpcy5wYXVzZS50eXBld3JpdGUpIHtcblx0ICAgICAgICB0aGlzLnR5cGV3cml0ZSh0aGlzLnBhdXNlLmN1clN0cmluZywgdGhpcy5wYXVzZS5jdXJTdHJQb3MpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMuYmFja3NwYWNlKHRoaXMucGF1c2UuY3VyU3RyaW5nLCB0aGlzLnBhdXNlLmN1clN0clBvcyk7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5vcHRpb25zLm9uU3RhcnQodGhpcy5hcnJheVBvcywgdGhpcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBEZXN0cm95IHRoaXMgaW5zdGFuY2Ugb2YgVHlwZWRcblx0ICAgICAqIEBwdWJsaWNcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2Rlc3Ryb3knLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdCAgICAgIHRoaXMucmVzZXQoZmFsc2UpO1xuXHQgICAgICB0aGlzLm9wdGlvbnMub25EZXN0cm95KHRoaXMpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogUmVzZXQgVHlwZWQgYW5kIG9wdGlvbmFsbHkgcmVzdGFydHNcblx0ICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVzdGFydFxuXHQgICAgICogQHB1YmxpY1xuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAncmVzZXQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuXHQgICAgICB2YXIgcmVzdGFydCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMF07XG5cdFxuXHQgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZW91dCk7XG5cdCAgICAgIHRoaXMucmVwbGFjZVRleHQoJycpO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3IgJiYgdGhpcy5jdXJzb3IucGFyZW50Tm9kZSkge1xuXHQgICAgICAgIHRoaXMuY3Vyc29yLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jdXJzb3IpO1xuXHQgICAgICAgIHRoaXMuY3Vyc29yID0gbnVsbDtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLnN0clBvcyA9IDA7XG5cdCAgICAgIHRoaXMuYXJyYXlQb3MgPSAwO1xuXHQgICAgICB0aGlzLmN1ckxvb3AgPSAwO1xuXHQgICAgICBpZiAocmVzdGFydCkge1xuXHQgICAgICAgIHRoaXMuaW5zZXJ0Q3Vyc29yKCk7XG5cdCAgICAgICAgdGhpcy5vcHRpb25zLm9uUmVzZXQodGhpcyk7XG5cdCAgICAgICAgdGhpcy5iZWdpbigpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBCZWdpbnMgdGhlIHR5cGluZyBhbmltYXRpb25cblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdiZWdpbicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYmVnaW4oKSB7XG5cdCAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdFxuXHQgICAgICB0aGlzLm9wdGlvbnMub25CZWdpbih0aGlzKTtcblx0ICAgICAgdGhpcy50eXBpbmdDb21wbGV0ZSA9IGZhbHNlO1xuXHQgICAgICB0aGlzLnNodWZmbGVTdHJpbmdzSWZOZWVkZWQodGhpcyk7XG5cdCAgICAgIHRoaXMuaW5zZXJ0Q3Vyc29yKCk7XG5cdCAgICAgIGlmICh0aGlzLmJpbmRJbnB1dEZvY3VzRXZlbnRzKSB0aGlzLmJpbmRGb2N1c0V2ZW50cygpO1xuXHQgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBzb21lIHRleHQgaW4gdGhlIGVsZW1lbnQsIGlmIHllcyBzdGFydCBieSBiYWNrc3BhY2luZyB0aGUgZGVmYXVsdCBtZXNzYWdlXG5cdCAgICAgICAgaWYgKCFfdGhpcy5jdXJyZW50RWxDb250ZW50IHx8IF90aGlzLmN1cnJlbnRFbENvbnRlbnQubGVuZ3RoID09PSAwKSB7XG5cdCAgICAgICAgICBfdGhpcy50eXBld3JpdGUoX3RoaXMuc3RyaW5nc1tfdGhpcy5zZXF1ZW5jZVtfdGhpcy5hcnJheVBvc11dLCBfdGhpcy5zdHJQb3MpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAvLyBTdGFydCB0eXBpbmdcblx0ICAgICAgICAgIF90aGlzLmJhY2tzcGFjZShfdGhpcy5jdXJyZW50RWxDb250ZW50LCBfdGhpcy5jdXJyZW50RWxDb250ZW50Lmxlbmd0aCk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9LCB0aGlzLnN0YXJ0RGVsYXkpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQ2FsbGVkIGZvciBlYWNoIGNoYXJhY3RlciB0eXBlZFxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3R5cGV3cml0ZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdHlwZXdyaXRlKGN1clN0cmluZywgY3VyU3RyUG9zKSB7XG5cdCAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXHRcblx0ICAgICAgaWYgKHRoaXMuZmFkZU91dCAmJiB0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmZhZGVPdXRDbGFzcykpIHtcblx0ICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5mYWRlT3V0Q2xhc3MpO1xuXHQgICAgICAgIGlmICh0aGlzLmN1cnNvcikgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmZhZGVPdXRDbGFzcyk7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHZhciBodW1hbml6ZSA9IHRoaXMuaHVtYW5pemVyKHRoaXMudHlwZVNwZWVkKTtcblx0ICAgICAgdmFyIG51bUNoYXJzID0gMTtcblx0XG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnN0YXR1cyA9PT0gdHJ1ZSkge1xuXHQgICAgICAgIHRoaXMuc2V0UGF1c2VTdGF0dXMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIHRydWUpO1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgLy8gY29udGFpbiB0eXBpbmcgZnVuY3Rpb24gaW4gYSB0aW1lb3V0IGh1bWFuaXplJ2QgZGVsYXlcblx0ICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgLy8gc2tpcCBvdmVyIGFueSBIVE1MIGNoYXJzXG5cdCAgICAgICAgY3VyU3RyUG9zID0gX2h0bWxQYXJzZXJKcy5odG1sUGFyc2VyLnR5cGVIdG1sQ2hhcnMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIF90aGlzMik7XG5cdFxuXHQgICAgICAgIHZhciBwYXVzZVRpbWUgPSAwO1xuXHQgICAgICAgIHZhciBzdWJzdHIgPSBjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcyk7XG5cdCAgICAgICAgLy8gY2hlY2sgZm9yIGFuIGVzY2FwZSBjaGFyYWN0ZXIgYmVmb3JlIGEgcGF1c2UgdmFsdWVcblx0ICAgICAgICAvLyBmb3JtYXQ6IFxcXlxcZCsgLi4gZWc6IF4xMDAwIC4uIHNob3VsZCBiZSBhYmxlIHRvIHByaW50IHRoZSBeIHRvbyB1c2luZyBeXlxuXHQgICAgICAgIC8vIHNpbmdsZSBeIGFyZSByZW1vdmVkIGZyb20gc3RyaW5nXG5cdCAgICAgICAgaWYgKHN1YnN0ci5jaGFyQXQoMCkgPT09ICdeJykge1xuXHQgICAgICAgICAgaWYgKC9eXFxeXFxkKy8udGVzdChzdWJzdHIpKSB7XG5cdCAgICAgICAgICAgIHZhciBza2lwID0gMTsgLy8gc2tpcCBhdCBsZWFzdCAxXG5cdCAgICAgICAgICAgIHN1YnN0ciA9IC9cXGQrLy5leGVjKHN1YnN0cilbMF07XG5cdCAgICAgICAgICAgIHNraXAgKz0gc3Vic3RyLmxlbmd0aDtcblx0ICAgICAgICAgICAgcGF1c2VUaW1lID0gcGFyc2VJbnQoc3Vic3RyKTtcblx0ICAgICAgICAgICAgX3RoaXMyLnRlbXBvcmFyeVBhdXNlID0gdHJ1ZTtcblx0ICAgICAgICAgICAgX3RoaXMyLm9wdGlvbnMub25UeXBpbmdQYXVzZWQoX3RoaXMyLmFycmF5UG9zLCBfdGhpczIpO1xuXHQgICAgICAgICAgICAvLyBzdHJpcCBvdXQgdGhlIGVzY2FwZSBjaGFyYWN0ZXIgYW5kIHBhdXNlIHZhbHVlIHNvIHRoZXkncmUgbm90IHByaW50ZWRcblx0ICAgICAgICAgICAgY3VyU3RyaW5nID0gY3VyU3RyaW5nLnN1YnN0cmluZygwLCBjdXJTdHJQb3MpICsgY3VyU3RyaW5nLnN1YnN0cmluZyhjdXJTdHJQb3MgKyBza2lwKTtcblx0ICAgICAgICAgICAgX3RoaXMyLnRvZ2dsZUJsaW5raW5nKHRydWUpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgLy8gY2hlY2sgZm9yIHNraXAgY2hhcmFjdGVycyBmb3JtYXR0ZWQgYXNcblx0ICAgICAgICAvLyBcInRoaXMgaXMgYSBgc3RyaW5nIHRvIHByaW50IE5PV2AgLi4uXCJcblx0ICAgICAgICBpZiAoc3Vic3RyLmNoYXJBdCgwKSA9PT0gJ2AnKSB7XG5cdCAgICAgICAgICB3aGlsZSAoY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MgKyBudW1DaGFycykuY2hhckF0KDApICE9PSAnYCcpIHtcblx0ICAgICAgICAgICAgbnVtQ2hhcnMrKztcblx0ICAgICAgICAgICAgaWYgKGN1clN0clBvcyArIG51bUNoYXJzID4gY3VyU3RyaW5nLmxlbmd0aCkgYnJlYWs7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICAvLyBzdHJpcCBvdXQgdGhlIGVzY2FwZSBjaGFyYWN0ZXJzIGFuZCBhcHBlbmQgYWxsIHRoZSBzdHJpbmcgaW4gYmV0d2VlblxuXHQgICAgICAgICAgdmFyIHN0cmluZ0JlZm9yZVNraXAgPSBjdXJTdHJpbmcuc3Vic3RyaW5nKDAsIGN1clN0clBvcyk7XG5cdCAgICAgICAgICB2YXIgc3RyaW5nU2tpcHBlZCA9IGN1clN0cmluZy5zdWJzdHJpbmcoc3RyaW5nQmVmb3JlU2tpcC5sZW5ndGggKyAxLCBjdXJTdHJQb3MgKyBudW1DaGFycyk7XG5cdCAgICAgICAgICB2YXIgc3RyaW5nQWZ0ZXJTa2lwID0gY3VyU3RyaW5nLnN1YnN0cmluZyhjdXJTdHJQb3MgKyBudW1DaGFycyArIDEpO1xuXHQgICAgICAgICAgY3VyU3RyaW5nID0gc3RyaW5nQmVmb3JlU2tpcCArIHN0cmluZ1NraXBwZWQgKyBzdHJpbmdBZnRlclNraXA7XG5cdCAgICAgICAgICBudW1DaGFycy0tO1xuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgLy8gdGltZW91dCBmb3IgYW55IHBhdXNlIGFmdGVyIGEgY2hhcmFjdGVyXG5cdCAgICAgICAgX3RoaXMyLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgIC8vIEFjY291bnRzIGZvciBibGlua2luZyB3aGlsZSBwYXVzZWRcblx0ICAgICAgICAgIF90aGlzMi50b2dnbGVCbGlua2luZyhmYWxzZSk7XG5cdFxuXHQgICAgICAgICAgLy8gV2UncmUgZG9uZSB3aXRoIHRoaXMgc2VudGVuY2UhXG5cdCAgICAgICAgICBpZiAoY3VyU3RyUG9zID49IGN1clN0cmluZy5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgX3RoaXMyLmRvbmVUeXBpbmcoY3VyU3RyaW5nLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgX3RoaXMyLmtlZXBUeXBpbmcoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIG51bUNoYXJzKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIC8vIGVuZCBvZiBjaGFyYWN0ZXIgcGF1c2Vcblx0ICAgICAgICAgIGlmIChfdGhpczIudGVtcG9yYXJ5UGF1c2UpIHtcblx0ICAgICAgICAgICAgX3RoaXMyLnRlbXBvcmFyeVBhdXNlID0gZmFsc2U7XG5cdCAgICAgICAgICAgIF90aGlzMi5vcHRpb25zLm9uVHlwaW5nUmVzdW1lZChfdGhpczIuYXJyYXlQb3MsIF90aGlzMik7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfSwgcGF1c2VUaW1lKTtcblx0XG5cdCAgICAgICAgLy8gaHVtYW5pemVkIHZhbHVlIGZvciB0eXBpbmdcblx0ICAgICAgfSwgaHVtYW5pemUpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQ29udGludWUgdG8gdGhlIG5leHQgc3RyaW5nICYgYmVnaW4gdHlwaW5nXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAna2VlcFR5cGluZycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24ga2VlcFR5cGluZyhjdXJTdHJpbmcsIGN1clN0clBvcywgbnVtQ2hhcnMpIHtcblx0ICAgICAgLy8gY2FsbCBiZWZvcmUgZnVuY3Rpb25zIGlmIGFwcGxpY2FibGVcblx0ICAgICAgaWYgKGN1clN0clBvcyA9PT0gMCkge1xuXHQgICAgICAgIHRoaXMudG9nZ2xlQmxpbmtpbmcoZmFsc2UpO1xuXHQgICAgICAgIHRoaXMub3B0aW9ucy5wcmVTdHJpbmdUeXBlZCh0aGlzLmFycmF5UG9zLCB0aGlzKTtcblx0ICAgICAgfVxuXHQgICAgICAvLyBzdGFydCB0eXBpbmcgZWFjaCBuZXcgY2hhciBpbnRvIGV4aXN0aW5nIHN0cmluZ1xuXHQgICAgICAvLyBjdXJTdHJpbmc6IGFyZywgdGhpcy5lbC5odG1sOiBvcmlnaW5hbCB0ZXh0IGluc2lkZSBlbGVtZW50XG5cdCAgICAgIGN1clN0clBvcyArPSBudW1DaGFycztcblx0ICAgICAgdmFyIG5leHRTdHJpbmcgPSBjdXJTdHJpbmcuc3Vic3RyKDAsIGN1clN0clBvcyk7XG5cdCAgICAgIHRoaXMucmVwbGFjZVRleHQobmV4dFN0cmluZyk7XG5cdCAgICAgIC8vIGxvb3AgdGhlIGZ1bmN0aW9uXG5cdCAgICAgIHRoaXMudHlwZXdyaXRlKGN1clN0cmluZywgY3VyU3RyUG9zKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFdlJ3JlIGRvbmUgdHlwaW5nIHRoZSBjdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2RvbmVUeXBpbmcnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGRvbmVUeXBpbmcoY3VyU3RyaW5nLCBjdXJTdHJQb3MpIHtcblx0ICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cdFxuXHQgICAgICAvLyBmaXJlcyBjYWxsYmFjayBmdW5jdGlvblxuXHQgICAgICB0aGlzLm9wdGlvbnMub25TdHJpbmdUeXBlZCh0aGlzLmFycmF5UG9zLCB0aGlzKTtcblx0ICAgICAgdGhpcy50b2dnbGVCbGlua2luZyh0cnVlKTtcblx0ICAgICAgLy8gaXMgdGhpcyB0aGUgZmluYWwgc3RyaW5nXG5cdCAgICAgIGlmICh0aGlzLmFycmF5UG9zID09PSB0aGlzLnN0cmluZ3MubGVuZ3RoIC0gMSkge1xuXHQgICAgICAgIC8vIGNhbGxiYWNrIHRoYXQgb2NjdXJzIG9uIHRoZSBsYXN0IHR5cGVkIHN0cmluZ1xuXHQgICAgICAgIHRoaXMuY29tcGxldGUoKTtcblx0ICAgICAgICAvLyBxdWl0IGlmIHdlIHdvbnQgbG9vcCBiYWNrXG5cdCAgICAgICAgaWYgKHRoaXMubG9vcCA9PT0gZmFsc2UgfHwgdGhpcy5jdXJMb29wID09PSB0aGlzLmxvb3BDb3VudCkge1xuXHQgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBfdGhpczMuYmFja3NwYWNlKGN1clN0cmluZywgY3VyU3RyUG9zKTtcblx0ICAgICAgfSwgdGhpcy5iYWNrRGVsYXkpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQmFja3NwYWNlcyAxIGNoYXJhY3RlciBhdCBhIHRpbWVcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdiYWNrc3BhY2UnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJhY2tzcGFjZShjdXJTdHJpbmcsIGN1clN0clBvcykge1xuXHQgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblx0XG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnN0YXR1cyA9PT0gdHJ1ZSkge1xuXHQgICAgICAgIHRoaXMuc2V0UGF1c2VTdGF0dXMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIHRydWUpO1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGhpcy5mYWRlT3V0KSByZXR1cm4gdGhpcy5pbml0RmFkZU91dCgpO1xuXHRcblx0ICAgICAgdGhpcy50b2dnbGVCbGlua2luZyhmYWxzZSk7XG5cdCAgICAgIHZhciBodW1hbml6ZSA9IHRoaXMuaHVtYW5pemVyKHRoaXMuYmFja1NwZWVkKTtcblx0XG5cdCAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGN1clN0clBvcyA9IF9odG1sUGFyc2VySnMuaHRtbFBhcnNlci5iYWNrU3BhY2VIdG1sQ2hhcnMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIF90aGlzNCk7XG5cdCAgICAgICAgLy8gcmVwbGFjZSB0ZXh0IHdpdGggYmFzZSB0ZXh0ICsgdHlwZWQgY2hhcmFjdGVyc1xuXHQgICAgICAgIHZhciBjdXJTdHJpbmdBdFBvc2l0aW9uID0gY3VyU3RyaW5nLnN1YnN0cigwLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgIF90aGlzNC5yZXBsYWNlVGV4dChjdXJTdHJpbmdBdFBvc2l0aW9uKTtcblx0XG5cdCAgICAgICAgLy8gaWYgc21hcnRCYWNrIGlzIGVuYWJsZWRcblx0ICAgICAgICBpZiAoX3RoaXM0LnNtYXJ0QmFja3NwYWNlKSB7XG5cdCAgICAgICAgICAvLyB0aGUgcmVtYWluaW5nIHBhcnQgb2YgdGhlIGN1cnJlbnQgc3RyaW5nIGlzIGVxdWFsIG9mIHRoZSBzYW1lIHBhcnQgb2YgdGhlIG5ldyBzdHJpbmdcblx0ICAgICAgICAgIHZhciBuZXh0U3RyaW5nID0gX3RoaXM0LnN0cmluZ3NbX3RoaXM0LmFycmF5UG9zICsgMV07XG5cdCAgICAgICAgICBpZiAobmV4dFN0cmluZyAmJiBjdXJTdHJpbmdBdFBvc2l0aW9uID09PSBuZXh0U3RyaW5nLnN1YnN0cigwLCBjdXJTdHJQb3MpKSB7XG5cdCAgICAgICAgICAgIF90aGlzNC5zdG9wTnVtID0gY3VyU3RyUG9zO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgX3RoaXM0LnN0b3BOdW0gPSAwO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgLy8gaWYgdGhlIG51bWJlciAoaWQgb2YgY2hhcmFjdGVyIGluIGN1cnJlbnQgc3RyaW5nKSBpc1xuXHQgICAgICAgIC8vIGxlc3MgdGhhbiB0aGUgc3RvcCBudW1iZXIsIGtlZXAgZ29pbmdcblx0ICAgICAgICBpZiAoY3VyU3RyUG9zID4gX3RoaXM0LnN0b3BOdW0pIHtcblx0ICAgICAgICAgIC8vIHN1YnRyYWN0IGNoYXJhY3RlcnMgb25lIGJ5IG9uZVxuXHQgICAgICAgICAgY3VyU3RyUG9zLS07XG5cdCAgICAgICAgICAvLyBsb29wIHRoZSBmdW5jdGlvblxuXHQgICAgICAgICAgX3RoaXM0LmJhY2tzcGFjZShjdXJTdHJpbmcsIGN1clN0clBvcyk7XG5cdCAgICAgICAgfSBlbHNlIGlmIChjdXJTdHJQb3MgPD0gX3RoaXM0LnN0b3BOdW0pIHtcblx0ICAgICAgICAgIC8vIGlmIHRoZSBzdG9wIG51bWJlciBoYXMgYmVlbiByZWFjaGVkLCBpbmNyZWFzZVxuXHQgICAgICAgICAgLy8gYXJyYXkgcG9zaXRpb24gdG8gbmV4dCBzdHJpbmdcblx0ICAgICAgICAgIF90aGlzNC5hcnJheVBvcysrO1xuXHQgICAgICAgICAgLy8gV2hlbiBsb29waW5nLCBiZWdpbiBhdCB0aGUgYmVnaW5uaW5nIGFmdGVyIGJhY2tzcGFjZSBjb21wbGV0ZVxuXHQgICAgICAgICAgaWYgKF90aGlzNC5hcnJheVBvcyA9PT0gX3RoaXM0LnN0cmluZ3MubGVuZ3RoKSB7XG5cdCAgICAgICAgICAgIF90aGlzNC5hcnJheVBvcyA9IDA7XG5cdCAgICAgICAgICAgIF90aGlzNC5vcHRpb25zLm9uTGFzdFN0cmluZ0JhY2tzcGFjZWQoKTtcblx0ICAgICAgICAgICAgX3RoaXM0LnNodWZmbGVTdHJpbmdzSWZOZWVkZWQoKTtcblx0ICAgICAgICAgICAgX3RoaXM0LmJlZ2luKCk7XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBfdGhpczQudHlwZXdyaXRlKF90aGlzNC5zdHJpbmdzW190aGlzNC5zZXF1ZW5jZVtfdGhpczQuYXJyYXlQb3NdXSwgY3VyU3RyUG9zKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgLy8gaHVtYW5pemVkIHZhbHVlIGZvciB0eXBpbmdcblx0ICAgICAgfSwgaHVtYW5pemUpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogRnVsbCBhbmltYXRpb24gaXMgY29tcGxldGVcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdjb21wbGV0ZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vbkNvbXBsZXRlKHRoaXMpO1xuXHQgICAgICBpZiAodGhpcy5sb29wKSB7XG5cdCAgICAgICAgdGhpcy5jdXJMb29wKys7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy50eXBpbmdDb21wbGV0ZSA9IHRydWU7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEhhcyB0aGUgdHlwaW5nIGJlZW4gc3RvcHBlZFxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtib29sZWFufSBpc1R5cGluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3NldFBhdXNlU3RhdHVzJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQYXVzZVN0YXR1cyhjdXJTdHJpbmcsIGN1clN0clBvcywgaXNUeXBpbmcpIHtcblx0ICAgICAgdGhpcy5wYXVzZS50eXBld3JpdGUgPSBpc1R5cGluZztcblx0ICAgICAgdGhpcy5wYXVzZS5jdXJTdHJpbmcgPSBjdXJTdHJpbmc7XG5cdCAgICAgIHRoaXMucGF1c2UuY3VyU3RyUG9zID0gY3VyU3RyUG9zO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogVG9nZ2xlIHRoZSBibGlua2luZyBjdXJzb3Jcblx0ICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNCbGlua2luZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3RvZ2dsZUJsaW5raW5nJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGVCbGlua2luZyhpc0JsaW5raW5nKSB7XG5cdCAgICAgIGlmICghdGhpcy5jdXJzb3IpIHJldHVybjtcblx0ICAgICAgLy8gaWYgaW4gcGF1c2VkIHN0YXRlLCBkb24ndCB0b2dnbGUgYmxpbmtpbmcgYSAybmQgdGltZVxuXHQgICAgICBpZiAodGhpcy5wYXVzZS5zdGF0dXMpIHJldHVybjtcblx0ICAgICAgaWYgKHRoaXMuY3Vyc29yQmxpbmtpbmcgPT09IGlzQmxpbmtpbmcpIHJldHVybjtcblx0ICAgICAgdGhpcy5jdXJzb3JCbGlua2luZyA9IGlzQmxpbmtpbmc7XG5cdCAgICAgIGlmIChpc0JsaW5raW5nKSB7XG5cdCAgICAgICAgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZCgndHlwZWQtY3Vyc29yLS1ibGluaycpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5yZW1vdmUoJ3R5cGVkLWN1cnNvci0tYmxpbmsnKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogU3BlZWQgaW4gTVMgdG8gdHlwZVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IHNwZWVkXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnaHVtYW5pemVyJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBodW1hbml6ZXIoc3BlZWQpIHtcblx0ICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHNwZWVkIC8gMikgKyBzcGVlZDtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFNodWZmbGUgdGhlIHNlcXVlbmNlIG9mIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCgpIHtcblx0ICAgICAgaWYgKCF0aGlzLnNodWZmbGUpIHJldHVybjtcblx0ICAgICAgdGhpcy5zZXF1ZW5jZSA9IHRoaXMuc2VxdWVuY2Uuc29ydChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgLSAwLjU7XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQWRkcyBhIENTUyBjbGFzcyB0byBmYWRlIG91dCBjdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2luaXRGYWRlT3V0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0RmFkZU91dCgpIHtcblx0ICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cdFxuXHQgICAgICB0aGlzLmVsLmNsYXNzTmFtZSArPSAnICcgKyB0aGlzLmZhZGVPdXRDbGFzcztcblx0ICAgICAgaWYgKHRoaXMuY3Vyc29yKSB0aGlzLmN1cnNvci5jbGFzc05hbWUgKz0gJyAnICsgdGhpcy5mYWRlT3V0Q2xhc3M7XG5cdCAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBfdGhpczUuYXJyYXlQb3MrKztcblx0ICAgICAgICBfdGhpczUucmVwbGFjZVRleHQoJycpO1xuXHRcblx0ICAgICAgICAvLyBSZXNldHMgY3VycmVudCBzdHJpbmcgaWYgZW5kIG9mIGxvb3AgcmVhY2hlZFxuXHQgICAgICAgIGlmIChfdGhpczUuc3RyaW5ncy5sZW5ndGggPiBfdGhpczUuYXJyYXlQb3MpIHtcblx0ICAgICAgICAgIF90aGlzNS50eXBld3JpdGUoX3RoaXM1LnN0cmluZ3NbX3RoaXM1LnNlcXVlbmNlW190aGlzNS5hcnJheVBvc11dLCAwKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgX3RoaXM1LnR5cGV3cml0ZShfdGhpczUuc3RyaW5nc1swXSwgMCk7XG5cdCAgICAgICAgICBfdGhpczUuYXJyYXlQb3MgPSAwO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSwgdGhpcy5mYWRlT3V0RGVsYXkpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogUmVwbGFjZXMgY3VycmVudCB0ZXh0IGluIHRoZSBIVE1MIGVsZW1lbnRcblx0ICAgICAqIGRlcGVuZGluZyBvbiBlbGVtZW50IHR5cGVcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdyZXBsYWNlVGV4dCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVwbGFjZVRleHQoc3RyKSB7XG5cdCAgICAgIGlmICh0aGlzLmF0dHIpIHtcblx0ICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSh0aGlzLmF0dHIsIHN0cik7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgaWYgKHRoaXMuaXNJbnB1dCkge1xuXHQgICAgICAgICAgdGhpcy5lbC52YWx1ZSA9IHN0cjtcblx0ICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29udGVudFR5cGUgPT09ICdodG1sJykge1xuXHQgICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBzdHI7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHRoaXMuZWwudGV4dENvbnRlbnQgPSBzdHI7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBJZiB1c2luZyBpbnB1dCBlbGVtZW50cywgYmluZCBmb2N1cyBpbiBvcmRlciB0b1xuXHQgICAgICogc3RhcnQgYW5kIHN0b3AgdGhlIGFuaW1hdGlvblxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2JpbmRGb2N1c0V2ZW50cycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYmluZEZvY3VzRXZlbnRzKCkge1xuXHQgICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblx0XG5cdCAgICAgIGlmICghdGhpcy5pc0lucHV0KSByZXR1cm47XG5cdCAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbiAoZSkge1xuXHQgICAgICAgIF90aGlzNi5zdG9wKCk7XG5cdCAgICAgIH0pO1xuXHQgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbiAoZSkge1xuXHQgICAgICAgIGlmIChfdGhpczYuZWwudmFsdWUgJiYgX3RoaXM2LmVsLnZhbHVlLmxlbmd0aCAhPT0gMCkge1xuXHQgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBfdGhpczYuc3RhcnQoKTtcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBPbiBpbml0LCBpbnNlcnQgdGhlIGN1cnNvciBlbGVtZW50XG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnaW5zZXJ0Q3Vyc29yJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBpbnNlcnRDdXJzb3IoKSB7XG5cdCAgICAgIGlmICghdGhpcy5zaG93Q3Vyc29yKSByZXR1cm47XG5cdCAgICAgIGlmICh0aGlzLmN1cnNvcikgcmV0dXJuO1xuXHQgICAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0ICAgICAgdGhpcy5jdXJzb3IuY2xhc3NOYW1lID0gJ3R5cGVkLWN1cnNvcic7XG5cdCAgICAgIHRoaXMuY3Vyc29yLmlubmVySFRNTCA9IHRoaXMuY3Vyc29yQ2hhcjtcblx0ICAgICAgdGhpcy5lbC5wYXJlbnROb2RlICYmIHRoaXMuZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5jdXJzb3IsIHRoaXMuZWwubmV4dFNpYmxpbmcpO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0XG5cdCAgcmV0dXJuIFR5cGVkO1xuXHR9KSgpO1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gVHlwZWQ7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXHRcblx0dmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXHRcblx0dmFyIF9kZWZhdWx0c0pzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0XG5cdHZhciBfZGVmYXVsdHNKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZhdWx0c0pzKTtcblx0XG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIHRoZSBUeXBlZCBvYmplY3Rcblx0ICovXG5cdFxuXHR2YXIgSW5pdGlhbGl6ZXIgPSAoZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIEluaXRpYWxpemVyKCkge1xuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluaXRpYWxpemVyKTtcblx0ICB9XG5cdFxuXHQgIF9jcmVhdGVDbGFzcyhJbml0aWFsaXplciwgW3tcblx0ICAgIGtleTogJ2xvYWQnLFxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogTG9hZCB1cCBkZWZhdWx0cyAmIG9wdGlvbnMgb24gdGhlIFR5cGVkIGluc3RhbmNlXG5cdCAgICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmIGluc3RhbmNlIG9mIFR5cGVkXG5cdCAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBvcHRpb25zIG9iamVjdFxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRJZCBIVE1MIGVsZW1lbnQgSUQgX09SXyBpbnN0YW5jZSBvZiBIVE1MIGVsZW1lbnRcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0XG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZChzZWxmLCBvcHRpb25zLCBlbGVtZW50SWQpIHtcblx0ICAgICAgLy8gY2hvc2VuIGVsZW1lbnQgdG8gbWFuaXB1bGF0ZSB0ZXh0XG5cdCAgICAgIGlmICh0eXBlb2YgZWxlbWVudElkID09PSAnc3RyaW5nJykge1xuXHQgICAgICAgIHNlbGYuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnRJZCk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgc2VsZi5lbCA9IGVsZW1lbnRJZDtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgc2VsZi5vcHRpb25zID0gX2V4dGVuZHMoe30sIF9kZWZhdWx0c0pzMlsnZGVmYXVsdCddLCBvcHRpb25zKTtcblx0XG5cdCAgICAgIC8vIGF0dHJpYnV0ZSB0byB0eXBlIGludG9cblx0ICAgICAgc2VsZi5pc0lucHV0ID0gc2VsZi5lbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCc7XG5cdCAgICAgIHNlbGYuYXR0ciA9IHNlbGYub3B0aW9ucy5hdHRyO1xuXHQgICAgICBzZWxmLmJpbmRJbnB1dEZvY3VzRXZlbnRzID0gc2VsZi5vcHRpb25zLmJpbmRJbnB1dEZvY3VzRXZlbnRzO1xuXHRcblx0ICAgICAgLy8gc2hvdyBjdXJzb3Jcblx0ICAgICAgc2VsZi5zaG93Q3Vyc29yID0gc2VsZi5pc0lucHV0ID8gZmFsc2UgOiBzZWxmLm9wdGlvbnMuc2hvd0N1cnNvcjtcblx0XG5cdCAgICAgIC8vIGN1c3RvbSBjdXJzb3Jcblx0ICAgICAgc2VsZi5jdXJzb3JDaGFyID0gc2VsZi5vcHRpb25zLmN1cnNvckNoYXI7XG5cdFxuXHQgICAgICAvLyBJcyB0aGUgY3Vyc29yIGJsaW5raW5nXG5cdCAgICAgIHNlbGYuY3Vyc29yQmxpbmtpbmcgPSB0cnVlO1xuXHRcblx0ICAgICAgLy8gdGV4dCBjb250ZW50IG9mIGVsZW1lbnRcblx0ICAgICAgc2VsZi5lbENvbnRlbnQgPSBzZWxmLmF0dHIgPyBzZWxmLmVsLmdldEF0dHJpYnV0ZShzZWxmLmF0dHIpIDogc2VsZi5lbC50ZXh0Q29udGVudDtcblx0XG5cdCAgICAgIC8vIGh0bWwgb3IgcGxhaW4gdGV4dFxuXHQgICAgICBzZWxmLmNvbnRlbnRUeXBlID0gc2VsZi5vcHRpb25zLmNvbnRlbnRUeXBlO1xuXHRcblx0ICAgICAgLy8gdHlwaW5nIHNwZWVkXG5cdCAgICAgIHNlbGYudHlwZVNwZWVkID0gc2VsZi5vcHRpb25zLnR5cGVTcGVlZDtcblx0XG5cdCAgICAgIC8vIGFkZCBhIGRlbGF5IGJlZm9yZSB0eXBpbmcgc3RhcnRzXG5cdCAgICAgIHNlbGYuc3RhcnREZWxheSA9IHNlbGYub3B0aW9ucy5zdGFydERlbGF5O1xuXHRcblx0ICAgICAgLy8gYmFja3NwYWNpbmcgc3BlZWRcblx0ICAgICAgc2VsZi5iYWNrU3BlZWQgPSBzZWxmLm9wdGlvbnMuYmFja1NwZWVkO1xuXHRcblx0ICAgICAgLy8gb25seSBiYWNrc3BhY2Ugd2hhdCBkb2Vzbid0IG1hdGNoIHRoZSBwcmV2aW91cyBzdHJpbmdcblx0ICAgICAgc2VsZi5zbWFydEJhY2tzcGFjZSA9IHNlbGYub3B0aW9ucy5zbWFydEJhY2tzcGFjZTtcblx0XG5cdCAgICAgIC8vIGFtb3VudCBvZiB0aW1lIHRvIHdhaXQgYmVmb3JlIGJhY2tzcGFjaW5nXG5cdCAgICAgIHNlbGYuYmFja0RlbGF5ID0gc2VsZi5vcHRpb25zLmJhY2tEZWxheTtcblx0XG5cdCAgICAgIC8vIEZhZGUgb3V0IGluc3RlYWQgb2YgYmFja3NwYWNlXG5cdCAgICAgIHNlbGYuZmFkZU91dCA9IHNlbGYub3B0aW9ucy5mYWRlT3V0O1xuXHQgICAgICBzZWxmLmZhZGVPdXRDbGFzcyA9IHNlbGYub3B0aW9ucy5mYWRlT3V0Q2xhc3M7XG5cdCAgICAgIHNlbGYuZmFkZU91dERlbGF5ID0gc2VsZi5vcHRpb25zLmZhZGVPdXREZWxheTtcblx0XG5cdCAgICAgIC8vIHZhcmlhYmxlIHRvIGNoZWNrIHdoZXRoZXIgdHlwaW5nIGlzIGN1cnJlbnRseSBwYXVzZWRcblx0ICAgICAgc2VsZi5pc1BhdXNlZCA9IGZhbHNlO1xuXHRcblx0ICAgICAgLy8gaW5wdXQgc3RyaW5ncyBvZiB0ZXh0XG5cdCAgICAgIHNlbGYuc3RyaW5ncyA9IHNlbGYub3B0aW9ucy5zdHJpbmdzLm1hcChmdW5jdGlvbiAocykge1xuXHQgICAgICAgIHJldHVybiBzLnRyaW0oKTtcblx0ICAgICAgfSk7XG5cdFxuXHQgICAgICAvLyBkaXYgY29udGFpbmluZyBzdHJpbmdzXG5cdCAgICAgIGlmICh0eXBlb2Ygc2VsZi5vcHRpb25zLnN0cmluZ3NFbGVtZW50ID09PSAnc3RyaW5nJykge1xuXHQgICAgICAgIHNlbGYuc3RyaW5nc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGYub3B0aW9ucy5zdHJpbmdzRWxlbWVudCk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgc2VsZi5zdHJpbmdzRWxlbWVudCA9IHNlbGYub3B0aW9ucy5zdHJpbmdzRWxlbWVudDtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgaWYgKHNlbGYuc3RyaW5nc0VsZW1lbnQpIHtcblx0ICAgICAgICBzZWxmLnN0cmluZ3MgPSBbXTtcblx0ICAgICAgICBzZWxmLnN0cmluZ3NFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdCAgICAgICAgdmFyIHN0cmluZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoc2VsZi5zdHJpbmdzRWxlbWVudC5jaGlsZHJlbik7XG5cdCAgICAgICAgdmFyIHN0cmluZ3NMZW5ndGggPSBzdHJpbmdzLmxlbmd0aDtcblx0XG5cdCAgICAgICAgaWYgKHN0cmluZ3NMZW5ndGgpIHtcblx0ICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nc0xlbmd0aDsgaSArPSAxKSB7XG5cdCAgICAgICAgICAgIHZhciBzdHJpbmdFbCA9IHN0cmluZ3NbaV07XG5cdCAgICAgICAgICAgIHNlbGYuc3RyaW5ncy5wdXNoKHN0cmluZ0VsLmlubmVySFRNTC50cmltKCkpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHRcblx0ICAgICAgLy8gY2hhcmFjdGVyIG51bWJlciBwb3NpdGlvbiBvZiBjdXJyZW50IHN0cmluZ1xuXHQgICAgICBzZWxmLnN0clBvcyA9IDA7XG5cdFxuXHQgICAgICAvLyBjdXJyZW50IGFycmF5IHBvc2l0aW9uXG5cdCAgICAgIHNlbGYuYXJyYXlQb3MgPSAwO1xuXHRcblx0ICAgICAgLy8gaW5kZXggb2Ygc3RyaW5nIHRvIHN0b3AgYmFja3NwYWNpbmcgb25cblx0ICAgICAgc2VsZi5zdG9wTnVtID0gMDtcblx0XG5cdCAgICAgIC8vIExvb3BpbmcgbG9naWNcblx0ICAgICAgc2VsZi5sb29wID0gc2VsZi5vcHRpb25zLmxvb3A7XG5cdCAgICAgIHNlbGYubG9vcENvdW50ID0gc2VsZi5vcHRpb25zLmxvb3BDb3VudDtcblx0ICAgICAgc2VsZi5jdXJMb29wID0gMDtcblx0XG5cdCAgICAgIC8vIHNodWZmbGUgdGhlIHN0cmluZ3Ncblx0ICAgICAgc2VsZi5zaHVmZmxlID0gc2VsZi5vcHRpb25zLnNodWZmbGU7XG5cdCAgICAgIC8vIHRoZSBvcmRlciBvZiBzdHJpbmdzXG5cdCAgICAgIHNlbGYuc2VxdWVuY2UgPSBbXTtcblx0XG5cdCAgICAgIHNlbGYucGF1c2UgPSB7XG5cdCAgICAgICAgc3RhdHVzOiBmYWxzZSxcblx0ICAgICAgICB0eXBld3JpdGU6IHRydWUsXG5cdCAgICAgICAgY3VyU3RyaW5nOiAnJyxcblx0ICAgICAgICBjdXJTdHJQb3M6IDBcblx0ICAgICAgfTtcblx0XG5cdCAgICAgIC8vIFdoZW4gdGhlIHR5cGluZyBpcyBjb21wbGV0ZSAod2hlbiBub3QgbG9vcGVkKVxuXHQgICAgICBzZWxmLnR5cGluZ0NvbXBsZXRlID0gZmFsc2U7XG5cdFxuXHQgICAgICAvLyBTZXQgdGhlIG9yZGVyIGluIHdoaWNoIHRoZSBzdHJpbmdzIGFyZSB0eXBlZFxuXHQgICAgICBmb3IgKHZhciBpIGluIHNlbGYuc3RyaW5ncykge1xuXHQgICAgICAgIHNlbGYuc2VxdWVuY2VbaV0gPSBpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICAvLyBJZiB0aGVyZSBpcyBzb21lIHRleHQgaW4gdGhlIGVsZW1lbnRcblx0ICAgICAgc2VsZi5jdXJyZW50RWxDb250ZW50ID0gdGhpcy5nZXRDdXJyZW50RWxDb250ZW50KHNlbGYpO1xuXHRcblx0ICAgICAgc2VsZi5hdXRvSW5zZXJ0Q3NzID0gc2VsZi5vcHRpb25zLmF1dG9JbnNlcnRDc3M7XG5cdFxuXHQgICAgICB0aGlzLmFwcGVuZEFuaW1hdGlvbkNzcyhzZWxmKTtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdnZXRDdXJyZW50RWxDb250ZW50Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50RWxDb250ZW50KHNlbGYpIHtcblx0ICAgICAgdmFyIGVsQ29udGVudCA9ICcnO1xuXHQgICAgICBpZiAoc2VsZi5hdHRyKSB7XG5cdCAgICAgICAgZWxDb250ZW50ID0gc2VsZi5lbC5nZXRBdHRyaWJ1dGUoc2VsZi5hdHRyKTtcblx0ICAgICAgfSBlbHNlIGlmIChzZWxmLmlzSW5wdXQpIHtcblx0ICAgICAgICBlbENvbnRlbnQgPSBzZWxmLmVsLnZhbHVlO1xuXHQgICAgICB9IGVsc2UgaWYgKHNlbGYuY29udGVudFR5cGUgPT09ICdodG1sJykge1xuXHQgICAgICAgIGVsQ29udGVudCA9IHNlbGYuZWwuaW5uZXJIVE1MO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGVsQ29udGVudCA9IHNlbGYuZWwudGV4dENvbnRlbnQ7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIGVsQ29udGVudDtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdhcHBlbmRBbmltYXRpb25Dc3MnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZEFuaW1hdGlvbkNzcyhzZWxmKSB7XG5cdCAgICAgIHZhciBjc3NEYXRhTmFtZSA9ICdkYXRhLXR5cGVkLWpzLWNzcyc7XG5cdCAgICAgIGlmICghc2VsZi5hdXRvSW5zZXJ0Q3NzKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICghc2VsZi5zaG93Q3Vyc29yICYmICFzZWxmLmZhZGVPdXQpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1snICsgY3NzRGF0YU5hbWUgKyAnXScpKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICB2YXIgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0ICAgICAgY3NzLnR5cGUgPSAndGV4dC9jc3MnO1xuXHQgICAgICBjc3Muc2V0QXR0cmlidXRlKGNzc0RhdGFOYW1lLCB0cnVlKTtcblx0XG5cdCAgICAgIHZhciBpbm5lckNzcyA9ICcnO1xuXHQgICAgICBpZiAoc2VsZi5zaG93Q3Vyc29yKSB7XG5cdCAgICAgICAgaW5uZXJDc3MgKz0gJ1xcbiAgICAgICAgLnR5cGVkLWN1cnNvcntcXG4gICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIH1cXG4gICAgICAgIC50eXBlZC1jdXJzb3IudHlwZWQtY3Vyc29yLS1ibGlua3tcXG4gICAgICAgICAgYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICB9XFxuICAgICAgICBAa2V5ZnJhbWVzIHR5cGVkanNCbGlua3tcXG4gICAgICAgICAgNTAlIHsgb3BhY2l0eTogMC4wOyB9XFxuICAgICAgICB9XFxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgdHlwZWRqc0JsaW5re1xcbiAgICAgICAgICAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgICAgICAgNTAlIHsgb3BhY2l0eTogMC4wOyB9XFxuICAgICAgICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxuICAgICAgICB9XFxuICAgICAgJztcblx0ICAgICAgfVxuXHQgICAgICBpZiAoc2VsZi5mYWRlT3V0KSB7XG5cdCAgICAgICAgaW5uZXJDc3MgKz0gJ1xcbiAgICAgICAgLnR5cGVkLWZhZGUtb3V0e1xcbiAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4yNXM7XFxuICAgICAgICB9XFxuICAgICAgICAudHlwZWQtY3Vyc29yLnR5cGVkLWN1cnNvci0tYmxpbmsudHlwZWQtZmFkZS1vdXR7XFxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAwO1xcbiAgICAgICAgICBhbmltYXRpb246IDA7XFxuICAgICAgICB9XFxuICAgICAgJztcblx0ICAgICAgfVxuXHQgICAgICBpZiAoY3NzLmxlbmd0aCA9PT0gMCkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBjc3MuaW5uZXJIVE1MID0gaW5uZXJDc3M7XG5cdCAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3NzKTtcblx0ICAgIH1cblx0ICB9XSk7XG5cdFxuXHQgIHJldHVybiBJbml0aWFsaXplcjtcblx0fSkoKTtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEluaXRpYWxpemVyO1xuXHR2YXIgaW5pdGlhbGl6ZXIgPSBuZXcgSW5pdGlhbGl6ZXIoKTtcblx0ZXhwb3J0cy5pbml0aWFsaXplciA9IGluaXRpYWxpemVyO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogRGVmYXVsdHMgJiBvcHRpb25zXG5cdCAqIEByZXR1cm5zIHtvYmplY3R9IFR5cGVkIGRlZmF1bHRzICYgb3B0aW9uc1xuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHR2YXIgZGVmYXVsdHMgPSB7XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHthcnJheX0gc3RyaW5ncyBzdHJpbmdzIHRvIGJlIHR5cGVkXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IHN0cmluZ3NFbGVtZW50IElEIG9mIGVsZW1lbnQgY29udGFpbmluZyBzdHJpbmcgY2hpbGRyZW5cblx0ICAgKi9cblx0ICBzdHJpbmdzOiBbJ1RoZXNlIGFyZSB0aGUgZGVmYXVsdCB2YWx1ZXMuLi4nLCAnWW91IGtub3cgd2hhdCB5b3Ugc2hvdWxkIGRvPycsICdVc2UgeW91ciBvd24hJywgJ0hhdmUgYSBncmVhdCBkYXkhJ10sXG5cdCAgc3RyaW5nc0VsZW1lbnQ6IG51bGwsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0eXBlU3BlZWQgdHlwZSBzcGVlZCBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICB0eXBlU3BlZWQ6IDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGFydERlbGF5IHRpbWUgYmVmb3JlIHR5cGluZyBzdGFydHMgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgc3RhcnREZWxheTogMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IGJhY2tTcGVlZCBiYWNrc3BhY2luZyBzcGVlZCBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICBiYWNrU3BlZWQ6IDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc21hcnRCYWNrc3BhY2Ugb25seSBiYWNrc3BhY2Ugd2hhdCBkb2Vzbid0IG1hdGNoIHRoZSBwcmV2aW91cyBzdHJpbmdcblx0ICAgKi9cblx0ICBzbWFydEJhY2tzcGFjZTogdHJ1ZSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBzaHVmZmxlIHNodWZmbGUgdGhlIHN0cmluZ3Ncblx0ICAgKi9cblx0ICBzaHVmZmxlOiBmYWxzZSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IGJhY2tEZWxheSB0aW1lIGJlZm9yZSBiYWNrc3BhY2luZyBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICBiYWNrRGVsYXk6IDcwMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBmYWRlT3V0IEZhZGUgb3V0IGluc3RlYWQgb2YgYmFja3NwYWNlXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IGZhZGVPdXRDbGFzcyBjc3MgY2xhc3MgZm9yIGZhZGUgYW5pbWF0aW9uXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBmYWRlT3V0RGVsYXkgRmFkZSBvdXQgZGVsYXkgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgZmFkZU91dDogZmFsc2UsXG5cdCAgZmFkZU91dENsYXNzOiAndHlwZWQtZmFkZS1vdXQnLFxuXHQgIGZhZGVPdXREZWxheTogNTAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGxvb3AgbG9vcCBzdHJpbmdzXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IGxvb3BDb3VudCBhbW91bnQgb2YgbG9vcHNcblx0ICAgKi9cblx0ICBsb29wOiBmYWxzZSxcblx0ICBsb29wQ291bnQ6IEluZmluaXR5LFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHNob3dDdXJzb3Igc2hvdyBjdXJzb3Jcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gY3Vyc29yQ2hhciBjaGFyYWN0ZXIgZm9yIGN1cnNvclxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYXV0b0luc2VydENzcyBpbnNlcnQgQ1NTIGZvciBjdXJzb3IgYW5kIGZhZGVPdXQgaW50byBIVE1MIDxoZWFkPlxuXHQgICAqL1xuXHQgIHNob3dDdXJzb3I6IHRydWUsXG5cdCAgY3Vyc29yQ2hhcjogJ3wnLFxuXHQgIGF1dG9JbnNlcnRDc3M6IHRydWUsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhdHRyIGF0dHJpYnV0ZSBmb3IgdHlwaW5nXG5cdCAgICogRXg6IGlucHV0IHBsYWNlaG9sZGVyLCB2YWx1ZSwgb3IganVzdCBIVE1MIHRleHRcblx0ICAgKi9cblx0ICBhdHRyOiBudWxsLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGJpbmRJbnB1dEZvY3VzRXZlbnRzIGJpbmQgdG8gZm9jdXMgYW5kIGJsdXIgaWYgZWwgaXMgdGV4dCBpbnB1dFxuXHQgICAqL1xuXHQgIGJpbmRJbnB1dEZvY3VzRXZlbnRzOiBmYWxzZSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IGNvbnRlbnRUeXBlICdodG1sJyBvciAnbnVsbCcgZm9yIHBsYWludGV4dFxuXHQgICAqL1xuXHQgIGNvbnRlbnRUeXBlOiAnaHRtbCcsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEJlZm9yZSBpdCBiZWdpbnMgdHlwaW5nXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uQmVnaW46IGZ1bmN0aW9uIG9uQmVnaW4oc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFsbCB0eXBpbmcgaXMgY29tcGxldGVcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25Db21wbGV0ZTogZnVuY3Rpb24gb25Db21wbGV0ZShzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQmVmb3JlIGVhY2ggc3RyaW5nIGlzIHR5cGVkXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIHByZVN0cmluZ1R5cGVkOiBmdW5jdGlvbiBwcmVTdHJpbmdUeXBlZChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIGVhY2ggc3RyaW5nIGlzIHR5cGVkXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uU3RyaW5nVHlwZWQ6IGZ1bmN0aW9uIG9uU3RyaW5nVHlwZWQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBEdXJpbmcgbG9vcGluZywgYWZ0ZXIgbGFzdCBzdHJpbmcgaXMgdHlwZWRcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25MYXN0U3RyaW5nQmFja3NwYWNlZDogZnVuY3Rpb24gb25MYXN0U3RyaW5nQmFja3NwYWNlZChzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogVHlwaW5nIGhhcyBiZWVuIHN0b3BwZWRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25UeXBpbmdQYXVzZWQ6IGZ1bmN0aW9uIG9uVHlwaW5nUGF1c2VkKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogVHlwaW5nIGhhcyBiZWVuIHN0YXJ0ZWQgYWZ0ZXIgYmVpbmcgc3RvcHBlZFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblR5cGluZ1Jlc3VtZWQ6IGZ1bmN0aW9uIG9uVHlwaW5nUmVzdW1lZChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIHJlc2V0XG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uUmVzZXQ6IGZ1bmN0aW9uIG9uUmVzZXQoc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIHN0b3Bcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25TdG9wOiBmdW5jdGlvbiBvblN0b3AoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciBzdGFydFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblN0YXJ0OiBmdW5jdGlvbiBvblN0YXJ0KGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgZGVzdHJveVxuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvbkRlc3Ryb3k6IGZ1bmN0aW9uIG9uRGVzdHJveShzZWxmKSB7fVxuXHR9O1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZGVmYXVsdHM7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogVE9ETzogVGhlc2UgbWV0aG9kcyBjYW4gcHJvYmFibHkgYmUgY29tYmluZWQgc29tZWhvd1xuXHQgKiBQYXJzZSBIVE1MIHRhZ3MgJiBIVE1MIENoYXJhY3RlcnNcblx0ICovXG5cdFxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cdFxuXHR2YXIgSFRNTFBhcnNlciA9IChmdW5jdGlvbiAoKSB7XG5cdCAgZnVuY3Rpb24gSFRNTFBhcnNlcigpIHtcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MUGFyc2VyKTtcblx0ICB9XG5cdFxuXHQgIF9jcmVhdGVDbGFzcyhIVE1MUGFyc2VyLCBbe1xuXHQgICAga2V5OiAndHlwZUh0bWxDaGFycycsXG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBUeXBlIEhUTUwgdGFncyAmIEhUTUwgQ2hhcmFjdGVyc1xuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyBDdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyBQb3NpdGlvbiBpbiBjdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtUeXBlZH0gc2VsZiBpbnN0YW5jZSBvZiBUeXBlZFxuXHQgICAgICogQHJldHVybnMge251bWJlcn0gYSBuZXcgc3RyaW5nIHBvc2l0aW9uXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHR5cGVIdG1sQ2hhcnMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIHNlbGYpIHtcblx0ICAgICAgaWYgKHNlbGYuY29udGVudFR5cGUgIT09ICdodG1sJykgcmV0dXJuIGN1clN0clBvcztcblx0ICAgICAgdmFyIGN1ckNoYXIgPSBjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcykuY2hhckF0KDApO1xuXHQgICAgICBpZiAoY3VyQ2hhciA9PT0gJzwnIHx8IGN1ckNoYXIgPT09ICcmJykge1xuXHQgICAgICAgIHZhciBlbmRUYWcgPSAnJztcblx0ICAgICAgICBpZiAoY3VyQ2hhciA9PT0gJzwnKSB7XG5cdCAgICAgICAgICBlbmRUYWcgPSAnPic7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIGVuZFRhZyA9ICc7Jztcblx0ICAgICAgICB9XG5cdCAgICAgICAgd2hpbGUgKGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zICsgMSkuY2hhckF0KDApICE9PSBlbmRUYWcpIHtcblx0ICAgICAgICAgIGN1clN0clBvcysrO1xuXHQgICAgICAgICAgaWYgKGN1clN0clBvcyArIDEgPiBjdXJTdHJpbmcubGVuZ3RoKSB7XG5cdCAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBjdXJTdHJQb3MrKztcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQmFja3NwYWNlIEhUTUwgdGFncyBhbmQgSFRNTCBDaGFyYWN0ZXJzXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIEN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIFBvc2l0aW9uIGluIGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmIGluc3RhbmNlIG9mIFR5cGVkXG5cdCAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBhIG5ldyBzdHJpbmcgcG9zaXRpb25cblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdiYWNrU3BhY2VIdG1sQ2hhcnMnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJhY2tTcGFjZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgc2VsZikge1xuXHQgICAgICBpZiAoc2VsZi5jb250ZW50VHlwZSAhPT0gJ2h0bWwnKSByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgICB2YXIgY3VyQ2hhciA9IGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zKS5jaGFyQXQoMCk7XG5cdCAgICAgIGlmIChjdXJDaGFyID09PSAnPicgfHwgY3VyQ2hhciA9PT0gJzsnKSB7XG5cdCAgICAgICAgdmFyIGVuZFRhZyA9ICcnO1xuXHQgICAgICAgIGlmIChjdXJDaGFyID09PSAnPicpIHtcblx0ICAgICAgICAgIGVuZFRhZyA9ICc8Jztcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgZW5kVGFnID0gJyYnO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB3aGlsZSAoY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MgLSAxKS5jaGFyQXQoMCkgIT09IGVuZFRhZykge1xuXHQgICAgICAgICAgY3VyU3RyUG9zLS07XG5cdCAgICAgICAgICBpZiAoY3VyU3RyUG9zIDwgMCkge1xuXHQgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgY3VyU3RyUG9zLS07XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIGN1clN0clBvcztcblx0ICAgIH1cblx0ICB9XSk7XG5cdFxuXHQgIHJldHVybiBIVE1MUGFyc2VyO1xuXHR9KSgpO1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gSFRNTFBhcnNlcjtcblx0dmFyIGh0bWxQYXJzZXIgPSBuZXcgSFRNTFBhcnNlcigpO1xuXHRleHBvcnRzLmh0bWxQYXJzZXIgPSBodG1sUGFyc2VyO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSlcbn0pO1xuOyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY29uc3QgcG9ydGZvbGlvID0gW1xuICB7XG4gICAgbmFtZTogJ2ZhbmN5LXdlYXRoZXInLFxuICAgIGljb246ICdhc3NldHMvaWNvbnMvZmFuY3ktd2VhdGhlcl9pY29uLW1pbi5wbmcnLFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcXVvdGUtcHJvcHNcbiAgICAgICdlbic6IGA8cD5UaGUgRmFuY3ktd2VhdGhlciB3YXMgY3JlYXRlZCBkdXJpbmcgdGhlIGNvdXJzZSBvZiBUaGUgUm9sbGluZyBTY29wZXMgc2Nob29sIChFUEFNIFN5c3RlbXMpLlxuICAgICAgICAgICAgSXQgaXMgYSB3ZWF0aGVyLWZvY2FzdCBhcHBsaWNhdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGFwcCBkaXNwbGF5cyB3ZWF0aGVyLCAzLWRheXMgZm9yZWNhc3QsIGN1cnJlbnQgdGltZSwgXG4gICAgICAgICAgICBhbmQgY3VycmVudCBnZW9ncmFwaGljYWwgY29vcmRpbmF0ZXMgaW4gdGhlIHBsYWNlIHdoZXJlIHVzZXIgaXMgbG9jYXRlZC5cbiAgICAgICAgICAgIEJ1dCBhcHAgY2FuIGRpc3BsYXkgaW5mb3JtYXRpb24gYWJvdXQgZWFjaCBjaXR5LiBcbiAgICAgICAgICAgINCVaGUgYXBwIGhhcyBhbiBpbnRlZ3JhdGVkIG1hcCB0aGF0IHNob3dzIHRoZSBjdXJyZW50IHBsYWNlIG9yIHRoZSByZXF1aXJlZCBwbGFjZS48L3A+XG4gICAgICAgICAgICA8cD5UaGUgcHJvamVjdCB1c2VzIHN1Y2ggdGVjaG5vbG9naWVzIGFzOiA8Yj5IVE1MNTwvYj4sIDxiPkNTUzM8L2I+LCA8Yj5TQVNTPC9iPiwgPGI+SmF2YVNjcmlwdDwvYj4sIDxiPldlYnBhY2s8L2I+LjwvcD5gLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHF1b3RlLXByb3BzXG4gICAgICAncnUnOiBgPHA+0J/RgNC+0LXQutGCINCx0YvQuyDRgdC+0LfQtNCw0L0g0LLQviDQstGA0LXQvNGPINC/0YDQvtGF0L7QttC00LXQvdC40Y8g0LrRg9GA0YHQsCBUaGUgUm9sbGluZyBTY29wZXMgc2Nob29sIChFUEFNIFN5c3RlbXMpLiBcbiAgICAgICAgICAgIFdlYi3Qv9GA0LjQu9C+0LbQtdC90LjQtSDQv9C+0LrQsNC30YvQstCw0LXRgiDRgtC10LrRg9GJ0YPRjiDQv9C+0LPQvtC00YMg0Lgg0L/RgNC+0LPQvdC+0Lcg0L/QvtCz0L7QtNGLINC90LAg0YLRgNC4INGB0LvQtdC00YPRjtGJ0LjRhSDQtNC90Y8g0LIg0YLQtdC60YPRidC10Lwg0LzQtdGB0YLQtSDQuNC70Lgg0LvRjtCx0L7QvCDQtNGA0YPQs9C+0Lwg0LjRgdC60L7QvNC+0Lwg0LzQtdGB0YLQtS4gXG4gICAgICAgICAgICDQkiDQv9GA0LjQu9C+0LbQtdC90LjQtSDQuNC90YLQtdCz0YDQuNGA0L7QstCw0L3QsCDQutCw0YDRgtCwLCDRg9C60LDQt9GL0LLQsNGO0YnQsNGPINGC0LXQutGD0YnQtdC1INC/0L7Qu9C+0LbQtdC90LjQtSDQu9C40LHQviDQv9C+0LvQvtC20LXQvdC40LUg0LjRgdC60L7QvNC+0LPQviDQs9C+0YDQvtC00LAuINCS0L7Qt9C80L7QttC10L0g0LLRi9Cx0L7RgCDQsNC90LPQu9C40LnRgdC60L7Qs9C+INC40LvQuCDRgNGD0YHRgdC60L7Qs9C+INGP0LfRi9C60LAsIFxuICAgICAgICAgICAg0YLQtdC80L/QtdGA0LDRgtGD0YDRiyDQsiDQs9GA0LDQtNGD0YHQsNGFINGG0LXQu9GM0YHQuNGPINC40LvQuCDRhNCw0YDQtdC90LPQtdC50YLQsC48L3A+XG4gICAgICAgICAgICA8cD7QkiDQv9GA0L7QtdC60YLQtSDQv9GA0LjQvNC10L3QtdC90Ys6IDxiPkhUTUw1PC9iPiwgPGI+Q1NTMzwvYj4sIDxiPlNBU1M8L2I+LCA8Yj5KYXZhU2NyaXB0PC9iPiwgPGI+V2VicGFjazwvYj4uPC9wPmAsXG4gICAgfSxcbiAgICBsaW5rR2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL0FuZHJlaU1pbGFzaGV2aWNoL3Jzc2Nob29sLWN2L3RyZWUvZmFuY3ktd2VhdGhlcicsXG4gICAgbGlua0RlbW86ICdodHRwczovL2FuZHJlaW1pbGFzaGV2aWNoLmdpdGh1Yi5pby9yc3NjaG9vbC1jdi9mYW5jeS13ZWF0aGVyL2J1aWxkL2luZGV4Lmh0bWwnLFxuICAgIGF0dHI6ICdkYXRhLWh0bWw9XCJ0cnVlXCIgZGF0YS1jc3M9XCJ0cnVlXCIgZGF0YS1qcz1cInRydWVcIiBkYXRhLXNhc3M9XCJ0cnVlXCIgZGF0YS13ZWJwYWNrPVwidHJ1ZVwiJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdTaW1wbGUtc2luZ29sbycsXG4gICAgaWNvbjogJ2Fzc2V0cy9pY29ucy9zaW5nb2xvX2ljb24tbWluLnBuZycsXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBxdW90ZS1wcm9wc1xuICAgICAgJ2VuJzogYDxwPlRoZSBTaW1wbGUtU2luZ29sbyB3YXMgY3JlYXRlZCBkdXJpbmcgdGhlIGNvdXJzZSBvZiBUaGUgUm9sbGluZyBTY29wZXMgc2Nob29sIChFUEFNIFN5c3RlbXMpLlxuICAgICAgICAgIDxwPlRoZSBsYXlvdXQgaXMgbGFpZCBvdXQgaW4gdGhyZWUgc3RhdGVzOiBtb2JpbGUsIHRhYmxldCBhbmQgZGVza3RvcC48L3A+XG4gICAgICAgICAgPC9wPjxwPlRoZSBwcm9qZWN0IHVzZXMgc3VjaCB0ZWNobm9sb2dpZXMgYXM6IDxiPkhUTUw1PC9iPiwgPGI+Q1NTMzwvYj4sIDxiPlNBU1M8L2I+LCA8Yj5KYXZhU2NyaXB0PC9iPi48L3A+YCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBxdW90ZS1wcm9wc1xuICAgICAgJ3J1JzogYDxwPtCf0YDQuNC70L7QttC10L3QuNC1IFNpbXBsZS1zaW5nb2xvINCx0YvQu9C+INGB0L7Qt9C00LDQvdC+INCy0L4g0LLRgNC10LzRjyDQv9GA0L7RhdC+0LbQtNC10L3QuNGPINC60YPRgNGB0LAgVGhlIFJvbGxpbmcgU2NvcGVzIHNjaG9vbCAoRVBBTSBTeXN0ZW1zKS48L3A+XG4gICAgICAgICAgPHA+0J/RgNC40LvQvtC20LXQvdC40LUg0YHQstC10YDRgdGC0LDQvdC+INC/0L4g0LDQtNCw0L/RgtC40LLQvdC+0LzRgyDQvNCw0LrQtdGC0YMuPC9wPlxuICAgICAgICAgIDxwPtCSINC/0YDQvtC10LrRgtC1INC/0YDQuNC80LXQvdC10L3RizogPGI+SFRNTDU8L2I+LCA8Yj5DU1MzPC9iPiwgPGI+U0FTUzwvYj4sIDxiPkphdmFTY3JpcHQ8L2I+LjwvcD5gLFxuICAgIH0sXG4gICAgbGlua0dpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BbmRyZWlNaWxhc2hldmljaC9zaW1wbGUtc2luZ29sbycsXG4gICAgbGlua0RlbW86ICdodHRwczovL2FuZHJlaW1pbGFzaGV2aWNoLmdpdGh1Yi5pby9zaW1wbGUtc2luZ29sby9zaW1wbGUtc2luZ29sby9pbmRleCcsXG4gICAgYXR0cjogJ2RhdGEtaHRtbD1cInRydWVcIiBkYXRhLWNzcz1cInRydWVcIiBkYXRhLWpzPVwidHJ1ZVwiIGRhdGEtc2Fzcz1cInRydWVcIiBkYXRhLXdlYnBhY2s9XCJmYWxzZVwiJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdSYWluZHJvcHMnLFxuICAgIGljb246ICdhc3NldHMvaWNvbnMvcmFpbmRyb3BzLW1pbi5wbmcnLFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcXVvdGUtcHJvcHNcbiAgICAgICdlbic6IGA8cD5UaGUgUmFpbnJvcHMgR2FtZSB3YXMgY3JlYXRlZCBkdXJpbmcgdGhlIGNvdXJzZSBvZiBUaGUgUm9sbGluZyBTY29wZXMgc2Nob29sIChFUEFNIFN5c3RlbXMpLlxuICAgICAgPC9wPjxwPk1hdGggZXhhbXBsZXMgYXJlIHdyaXR0ZW4gaW4gcmFpbmRyb3BzIHRoYXQgZmFsbHMgYXQgYSBjZXJ0YWluIHNwZWVkLiBcbiAgICAgIFlvdSBtdXN0ICBlbnRlciB0aGUgYW5zd2VyIGZyb20ga2V5Ym9yZCBvciBudW1wYWQgb24gcmlnaHQgc2lkZSBvZiBzY3JlZW4gYmVmb3JlIHRoZSBkcm9wIGZhbGxzLiBcbiAgICAgIEFmdGVyIHRoZSBlbmQgb2YgdGhlIGdhbWUsIHRoZSBnYW1lIHN0YXRpc3RpY3MgYXJlIGRpc3BsYXllZC48L3A+XG4gICAgICA8cD5UaGUgcHJvamVjdCB1c2VzIHN1Y2ggdGVjaG5vbG9naWVzIGFzOiA8Yj5IVE1MNTwvYj4sIDxiPkNTUzM8L2I+LCA8Yj5TQVNTPC9iPiwgPGI+SmF2YVNjcmlwdDwvYj4sIDxiPldlYnBhY2s8L2I+LjwvcD5gLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHF1b3RlLXByb3BzXG4gICAgICAncnUnOiBgPHA+0JjQs9GA0LAgUmFpbnJvcHMg0LHRi9C70LAg0YHQvtC30LTQsNC90L4g0LLQviDQstGA0LXQvNGPINC/0YDQvtGF0L7QttC00LXQvdC40Y8g0LrRg9GA0YHQsCBUaGUgUm9sbGluZyBTY29wZXMgc2Nob29sIChFUEFNIFN5c3RlbXMpLjwvcD5cbiAgICAgIDxwPtCc0LDRgtC10LzQsNGC0LjRh9C10YHQutC40LUg0L/RgNC40LzQtdGA0Ysg0L3QsNC/0LjRgdCw0L3RiyDQstC90YPRgtGA0Lgg0LrQsNC/0LXQu9GMINC00L7QttC00Y8sINC/0LDQtNCw0Y7RidC40YUg0YEg0L7Qv9GA0LXQtNC10LvQtdC90L3QvtC5INGB0LrQvtGA0L7RgdGC0YzRji4gXG4gICAgICDQndGD0LbQvdC+INCy0LLQtdGB0YLQuCDQv9GA0LjQvNC10YAg0YEg0LrQu9Cw0LLQuNCw0YLRg9GA0Ysg0LjQu9C4INGH0LjRgdC70L7QstC+0Lkg0L/QsNC90LXQu9C4INC90LAg0Y3QutGA0LDQvdC1INC00L4g0YLQvtCz0L4g0LrQsNC6INC60LDQv9C70Lgg0YPQv9Cw0LTRg9GCLiBcbiAgICAgINCf0L7RgdC70LUg0LfQsNCy0LXRgNGI0LXQvdC40Y8g0LjQs9GA0Ysg0L3QsCDRjdC60YDQsNC9INCy0YvQstC+0LTQuNGC0YHRjyDQuNCz0YDQvtCy0LDRjyDRgdGC0LDRgtC40YHRgtC40LrQsC48L3A+XG4gICAgICA8cD7QkiDQv9GA0L7QtdC60YLQtSDQv9GA0LjQvNC10L3QtdC90Ys6IDxiPkhUTUw1PC9iPiwgPGI+Q1NTMzwvYj4sIDxiPlNBU1M8L2I+LCA8Yj5KYXZhU2NyaXB0PC9iPiwgPGI+V2VicGFjazwvYj4uPC9wPmAsXG4gICAgfSxcbiAgICBsaW5rR2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL0FuZHJlaU1pbGFzaGV2aWNoL3JhaW5kcm9wcycsXG4gICAgbGlua0RlbW86ICdodHRwczovL2FuZHJlaW1pbGFzaGV2aWNoLmdpdGh1Yi5pby9yYWluZHJvcHMvcmFpbmRyb3BzL2J1aWxkL2luZGV4JyxcbiAgICBhdHRyOiAnZGF0YS1odG1sPVwidHJ1ZVwiIGRhdGEtY3NzPVwidHJ1ZVwiIGRhdGEtanM9XCJ0cnVlXCIgZGF0YS1zYXNzPVwidHJ1ZVwiIGRhdGEtd2VicGFjaz1cInRydWVcIicsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQ2FsY3VsYXRvcicsXG4gICAgaWNvbjogJ2Fzc2V0cy9pY29ucy9DYWxjdWxhdG9yLW1pbi5wbmcnLFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcXVvdGUtcHJvcHNcbiAgICAgICdlbic6IGA8cD5UaGUgUmFpbnJvcHMgYXBwIHdhcyBjcmVhdGVkIGR1cmluZyB0aGUgY291cnNlIG9mIFRoZSBVcFNraWxsc0xhYiAoRVBBTSBTeXN0ZW1zKS4gVGhlIGFwcCBpcyBhIHNpbXBsZSBjYWxjdWxhdG9yLjwvcD4gXG4gICAgICA8cD5UaGUgcHJvamVjdCB1c2VzIHN1Y2ggdGVjaG5vbG9naWVzIGFzOiA8Yj5IVE1MNTwvYj4sIDxiPkNTUzM8L2I+LCA8Yj5TQVNTPC9iPiwgPGI+SmF2YVNjcmlwdDwvYj4uPC9wPmAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcXVvdGUtcHJvcHNcbiAgICAgICdydSc6IGA8cD7Qn9GA0LjQu9C+0LbQtdC90LjQtSDQutCw0LvRjNC60YPQu9GP0YLQvtGAINCx0YvQu9C+INGB0L7Qt9C00LDQvdC+INCy0L4g0LLRgNC10LzRjyDQv9GA0L7RhdC+0LbQtNC10L3QuNGPINC60YPRgNGB0LAgVXBTa2lsbHNMYWIgKEVQQU0gU3lzdGVtcykuIFxuICAgICAg0J/RgNC40LvQvtC20LXQvdC40LUg0L/RgNC10LTRgdGC0LDQstC70Y/QtdGCINGB0L7QsdC+0Lkg0L/RgNC+0YHRgtC+0Lkg0LrQsNC70YzQutGD0LvRj9GC0L7RgC48L3A+XG4gICAgICA8cD7QkiDQv9GA0L7QtdC60YLQtSDQv9GA0LjQvNC10L3QtdC90Ys6IDxiPkhUTUw1PC9iPiwgPGI+Q1NTMzwvYj4sIDxiPkphdmFTY3JpcHQ8L2I+LjwvcD5gLFxuICAgIH0sXG4gICAgbGlua0dpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BbmRyZWlNaWxhc2hldmljaC9jYWxjdWxhdG9yJyxcbiAgICBsaW5rRGVtbzogJ2h0dHBzOi8vYW5kcmVpbWlsYXNoZXZpY2guZ2l0aHViLmlvL0NhbGN1bGF0b3IvJyxcbiAgICBhdHRyOiAnZGF0YS1odG1sPVwidHJ1ZVwiIGRhdGEtY3NzPVwidHJ1ZVwiIGRhdGEtanM9XCJ0cnVlXCIgZGF0YS1zYXNzPVwiZmFsc2VcIiBkYXRhLXdlYnBhY2s9XCJmYWxzZVwiJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBza2lsbHMgPSBbXG4gIHsgZGVzY3JpcHRpb246ICdIVE1MNScsIGljb246ICdhc3NldHMvaWNvbnMvaHRtbDVfaWNvbi5wbmcnIH0sXG4gIHsgZGVzY3JpcHRpb246ICdDU1MzJywgaWNvbjogJ2Fzc2V0cy9pY29ucy9jc3MzX2ljb24ucG5nJyB9LFxuICB7IGRlc2NyaXB0aW9uOiAnSmF2YVNjcmlwdCcsIGljb246ICdhc3NldHMvaWNvbnMvanNfaWNvbi5wbmcnIH0sXG4gIHsgZGVzY3JpcHRpb246ICdTQVNTJywgaWNvbjogJ2Fzc2V0cy9pY29ucy9zYXNzX2ljb24ucG5nJyB9LFxuICB7IGRlc2NyaXB0aW9uOiAnR2l0JywgaWNvbjogJ2Fzc2V0cy9pY29ucy9naXRfaWNvbi5wbmcnIH0sXG4gIHsgZGVzY3JpcHRpb246ICdHaXRIdWInLCBpY29uOiAnYXNzZXRzL2ljb25zL2dpdGh1Yl9pY29uLnBuZycgfSxcbiAgeyBkZXNjcmlwdGlvbjogJ1dlYnBhY2snLCBpY29uOiAnYXNzZXRzL2ljb25zL3dlYnBhY2tfaWNvbi5wbmcnIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgdGVjaG5vbG9naWVzID0gW1xuICB7IG5hbWU6ICdBbGwnIH0sXG4gIHsgbmFtZTogJ0hUTUw1JyB9LFxuICB7IG5hbWU6ICdDU1MzJyB9LFxuICB7IG5hbWU6ICdTQVNTJyB9LFxuICB7IG5hbWU6ICdKUycgfSxcbiAgeyBuYW1lOiAnV2VicGFjaycgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBwYWdlQ29udGVudCA9IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHF1b3RlLXByb3BzXG4gICdydSc6IHtcbiAgICBob21lOiAn0JTQvtC80L7QuScsXG4gICAgc2tpbGxzOiAn0J3QsNCy0YvQutC4JyxcbiAgICBwb3J0Zm9saW86ICfQn9C+0YDRgtGE0L7Qu9C40L4nLFxuICAgIGFib3V0OiAn0J7QsdC+INC80L3QtScsXG4gICAgY29udGFjdHM6ICfQmtC+0L3RgtCw0LrRgtGLJyxcbiAgICBzdHJpbmdzOiBbJ9Cf0YDQuNCy0LXRgiEnLFxuICAgICAgJ9CvINCQ0L3QtNGA0LXQuSEnLFxuICAgICAgJ9C4INGPIFdlYiDRgNCw0LfRgNCw0LHQvtGC0YfQuNC6IScsXG4gICAgXSxcbiAgICBsZWFybjogJzxwPtCj0LfQvdCw0YLRjCDQsdC+0LvRjNGI0LU8L3A+JyxcbiAgICBza2lsbHNIZWFkZXI6ICfQotC10YXQvdC40YfQtdGB0LrQuNC1INC90LDQstGL0LrQuCcsXG4gICAgbmFtZTogJzxwPtCY0LzRjzwvcD4nLFxuICAgIG5hbWVQbGFjZWhvbGRlcjogJ9CS0LLQtdC00LjRgtC1INCy0LDRiNC1INC40LzRjycsXG4gICAgZW1haWxQbGFjZWhvbGRlcjogJ9CS0LLQtdC00LjRgtC1INCy0LDRiCBlbWFpbCcsXG4gICAgdGV4dGFyZWE6ICfQktCw0YjQtSDRgdC+0L7QsdGJ0LXQvdC40LUnLFxuICAgIHRleHRhcmVhUGxhY2Vob2xkZXI6ICfQktCy0LXQtNC40YLQtSDQstCw0YjQtSDRgdC+0L7QsdGJ0LXQvdC40LUnLFxuICAgIHN1Ym1pdDogJ9Ce0YLQv9GA0LDQstC40YLRjCDRgdC+0L7QsdGJ0LXQvdC40LUnLFxuICAgIGRlbW86ICfQlNC10LzQvtC90YHRgtGA0LDRhtC40Y8nLFxuICAgIGFib3V0RGVzY3JpcHRpb246IGA8Yj7Qn9Cw0YDQsCDRgdC70L7QsiDQvtCx0L4g0LzQvdC1OjwvYj48YnIvPlxuICAgIDx1bD5cbiAgICA8bGk+INCe0LrQvtC90YfQuNC7INCw0LLQuNCw0YbQuNC+0L3QvdGL0Lkg0YTQsNC60YPQu9GM0YLQtdGCINCS0L7QtdC90L3QvtC5INCw0LrQsNC00LXQvNC40Lgg0KDQtdGB0L/Rg9Cx0LvQuNC60Lgg0JHQtdC70LDRgNGD0YHRjC48L2xpPlxuICAgIDxsaT4g0KHQv9C10YbQuNCw0LvRjNC90L7RgdGC0Yw6INCi0LXRhdC90LjRh9C10YHQutCw0Y8g0Y3QutGB0L/Qu9GD0LDRgtCw0YbQuNGPINC/0LjQu9C+0YLQuNGA0YPQtdC80YvRhSDQu9C10YLQsNGC0LXQu9GM0L3Ri9GFINCw0L/Qv9Cw0YDQsNGC0L7QsiDQuCDQuNGFINGB0LjQu9C+0LLRi9GFINGD0YHRgtCw0L3QvtCy0L7Qui48L2xpPlxuICAgIDxsaT4g0JIg0LDQstC40LDRhtC40Lgg0LTQvtCx0LjQu9GB0Y8g0LHQvtC70YzRiNC40YUg0LLRi9GB0L7Rgiwg0YHRgtCw0LIg0LjQvdC20LXQvdC10YDQvtC8INC40L3QttC10L3QtdGA0L3Qvi3QsNCy0LjQsNGG0LjQvtC90L3QvtC5INGB0LvRg9C20LHRiyDQsNCy0LjQsNGG0LjQvtC90L3QvtC5INGN0YHQutCw0LTRgNC40LvRjNC4ICjQvdCwINC40LstNzYsINCQ0L0tMjYpLCDQvdC+INGN0YLQviDQv9C+0YLQvtC70L7QuiDRgNCw0LfQstC40YLQuNGPINCw0LLQuNCw0YbQuNC+0L3QvdC+0LPQviDQuNC90LbQtdC90LXRgNCwLjwvbGk+XG4gICAgPGxpPiDQoNC10YjQuNC7INC+0YLQutGA0YvRgtGMINC00LvRjyDRgdC10LHRjyDQvdC+0LLRi9C1INCz0L7RgNC40LfQvtC90YLRiyDQuCDQv9GA0L7RiNC10Lsg0LrRg9GA0YHRizogU2tpbGxVcChVa3JhaW5lKSAtIEJhc2ljIFdlYiBhbmQgU1FMIGZvciBzb2Z0d2FyZVxuICAgIHRlc3RpbmcgKDIwMjApINC4IMKrVGhlIFJvbGxpbmcgU2NvcGVzIHNjaG9vbMK7IChFUEFNIFN5c3RlbXMpXG4gICAgKDIwMjEpLjwvbGk+XG4gICAgPGxpPiBFbmdsaXNoOiBBMiAtIFByZS1pbnRlcm1lZGlhdGUuPC9saT48L3VsPmAsXG4gIH0sXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBxdW90ZS1wcm9wc1xuICAnZW4nOiB7XG4gICAgaG9tZTogJ0hvbWUnLFxuICAgIHNraWxsczogJ1NraWxscycsXG4gICAgcG9ydGZvbGlvOiAnUG9ydGZpbGlvJyxcbiAgICBhYm91dDogJ0Fib3V0IG1lJyxcbiAgICBjb250YWN0czogJ0NvbnRhY3RzJyxcbiAgICBzdHJpbmdzOiBbJ0hlbGxvIScsXG4gICAgICBcIkknbSBBbmRyZWkhXCIsXG4gICAgICBcIkknbSBhIFdlYiBEZXZlbG9wZXIhXCIsXG4gICAgXSxcbiAgICBsZWFybjogJzxwPkxlYXJuIG1vcmUgYWJvdXQgd2hhdCBJIGRvPC9wPicsXG4gICAgc2tpbGxzSGVhZGVyOiAnU2tpbGxzJyxcbiAgICBuYW1lOiAnPHA+TmFtZTwvcD4nLFxuICAgIG5hbWVQbGFjZWhvbGRlcjogJ0VudGVyIHlvdXIgbmFtZScsXG4gICAgZW1haWxQbGFjZWhvbGRlcjogJ0VudGVyIHlvdXIgZW1haWwnLFxuICAgIHRleHRhcmVhOiAnWW91ciBtZXNzYWdlJyxcbiAgICB0ZXh0YXJlYVBsYWNlaG9sZGVyOiAnRW50ZXIgeW91ciBtZXNzYWdlJyxcbiAgICBzdWJtaXQ6ICdTZW5kIG1lc3NhZ2UnLFxuICAgIGRlbW86ICdEZW1vJyxcbiAgICBhYm91dERlc2NyaXB0aW9uOiBgPGI+QSBjb3VwbGUgb2Ygd29yZHMgYWJvdXQgbWU6PC9iPjxici8+XG4gICAgPHVsPlxuICAgIDxsaT5FZHVjYXRpb246IE1pbGl0YXJ5IEFjYWRlbXkgb2YgdGhlIFJlcHVibGljIG9mIEJlbGFydXNcbiAgICAoMjAxMSkuIEF2aWF0aW9uIGZhY3VsdHkuPC9saT5cbiAgICA8bGk+U3BlY2lhbHR5OiBUZWNobmljYWwgZXhwbG9pdGF0aW9uIG9mIG1hbm5lZCBhaXJjcmFmdHMgYW5kXG4gICAgdGhlaXIgcG93ZXIgdW5pdHM8L2xpPlxuICAgIDxsaT5QcmV2aW91cyBqb2I6IEVuZ2luZWVyIG9mIHRoZSBhdmlhdGlvbiBlbmdpbmVlcmluZyBkZXBhcnRtZW50XG4gICAgb2YgdGhlIGF2aWF0aW9uIHNxdWFkcm9uIChJTC03NiwgQW4tMjYpPC9saT5cbiAgICA8bGk+Q291cnNlczogU2tpbGxVcChVa3JhaW5lKSAtIEJhc2ljIFdlYiBhbmQgU1FMIGZvciBzb2Z0d2FyZVxuICAgIHRlc3RpbmcgKDIwMjApIGFuZCDCq1RoZSBSb2xsaW5nIFNjb3BlcyBzY2hvb2zCuyAoRVBBTSBTeXN0ZW1zKVxuICAgICgyMDIxKS48L2xpPlxuICAgIDxsaT5FbmdsaXNoOiBBMiAtIFByZS1pbnRlcm1lZGlhdGU8L2xpPjwvdWw+YCxcbiAgfSxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWRlc3RydWN0dXJpbmcgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbmltcG9ydCAnLi4vc2Nzcy9pbmRleC5zY3NzJztcbmltcG9ydCBUeXBlZCBmcm9tICd0eXBlZC5qcyc7XG5pbXBvcnQge1xuICBwb3J0Zm9saW8sIHNraWxscywgdGVjaG5vbG9naWVzLCBwYWdlQ29udGVudCxcbn0gZnJvbSAnLi9jb250ZW50LmpzJztcblxuY29uc3Qgc2tpbGxzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraWxsc193cmFwcGVyJyk7XG5jb25zdCBwb3J0Zm9saW9CdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvX2J1dHRvbl9jb250YWluZXInKTtcbmNvbnN0IHBvcnRmb2xpb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW9fd3JhcHBlcicpO1xuY29uc3Qgc2tpbGxzRGVsYXkgPSAyMDA7XG5jb25zdCBhb3NEdXJhdGlvbiA9IDUwMDtcbmNvbnN0IHBob3RvcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFib3V0X21lX2ltYWdlX2l0ZW0nKSk7XG5cbmNvbnN0IHNraWxsc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fc2tpbGxzJyk7XG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9ob21lJyk7XG5jb25zdCBwb3J0Zm9saW9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX3BvcnRmb2xpbycpO1xuY29uc3QgYWJvdXRNZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fYWJvdXRfbWUnKTtcbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX2NvbnRhY3RzJyk7XG5jb25zdCBsZWFybk1vcmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVhcm5fbW9yZScpO1xuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpO1xuY29uc3QgbGFuZ0J1dHRvbkVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuJyk7XG5jb25zdCBsYW5nQnV0dG9uUnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucnUnKTtcblxuY29uc3Qgc2tpbGxTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraWxscycpO1xuY29uc3QgcG9ydGZvbGlvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8nKTtcbmNvbnN0IGFib3V0TWVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0X21lJyk7XG5jb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0X3NlY3Rpb24nKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuXG4vLyBjb25zdCBoZWxsbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWxsb19zcGFuJyk7XG5jb25zdCBza2lsbHNIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbGxzX2hlYWRlcicpO1xuY29uc3QgcG9ydGZvbGlvSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpb19oZWFkZXInKTtcbmNvbnN0IGFib3V0TWVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRfbWVfaGVhZGVyJyk7XG5jb25zdCBjb250YWN0c0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0X2hlYWRlcicpO1xuY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbmNvbnN0IGxhYmVsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJyk7XG5jb25zdCBpbnB1dE1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKTtcbmNvbnN0IGlucHV0TWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlJyk7XG5jb25zdCBsYWJlbE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xuY29uc3QgYWJvdXRNZURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0X21lX2Rlc2NyaXB0aW9uJyk7XG5cbmxldCBsYW5ndWFnZSA9ICdlbic7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHN0cmluZ3M6IHBhZ2VDb250ZW50W2Ake2xhbmd1YWdlfWBdLnN0cmluZ3MsXG4gIHR5cGVTcGVlZDogNjAsXG4gIGJhY2tEZWxheTogMTIwMCxcbiAgYmFja1NwZWVkOiA0MyxcbiAgbG9vcDogdHJ1ZSxcbiAgZmFkZU91dDogZmFsc2UsXG59O1xuXG5sZXQgdHlwZWQgPSBuZXcgVHlwZWQoJy50eXBlZCcsIG9wdGlvbnMpO1xuXG5mdW5jdGlvbiBzZXRTa2lsbHMoZGF0YSkge1xuICBkYXRhLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkaXZDb250YWluZXIuY2xhc3NOYW1lID0gJ3NraWxsc19pdGVtJztcbiAgICBkaXZDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWFvcycsICdmbGlwLWxlZnQnKTtcbiAgICBkaXZDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWFvcy1kZWxheScsIGluZGV4ICogc2tpbGxzRGVsYXkpO1xuICAgIGRpdkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW9zLWR1cmF0aW9uJywgYW9zRHVyYXRpb24gKiAyKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gJ3NraWxsc19pbWFnZSc7XG4gICAgcC5jbGFzc05hbWUgPSAnc2tpbGxzX2Rlc2NyaXB0aW9uJztcbiAgICBkaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2VsZW1lbnQuaWNvbn0pYDtcbiAgICBwLnRleHRDb250ZW50ID0gZWxlbWVudC5kZXNjcmlwdGlvbjtcbiAgICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQocCk7XG4gICAgc2tpbGxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkNvbnRhaW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRQb3J0Zm9saW9CdXR0b24oZGF0YSkge1xuICBkYXRhLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9ICdwb3J0Zm9saW9fYnV0dG9uX2l0ZW0nO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLWFvcycsICdmYWRlLWRvd24nKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLWFvcy1kZWxheScsIChpbmRleCAqIHNraWxsc0RlbGF5KSAvIDIpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW9zLWR1cmF0aW9uJywgYW9zRHVyYXRpb24pO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnV0dG9uJywgZWxlbWVudC5uYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgIHBvcnRmb2xpb0J1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0UG9ydGZvbGlvSXRlbShkYXRhKSB7XG4gIGRhdGEuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBsZXQgc2lkZTtcbiAgICBpZiAoaW5kZXggJSAyID09PSAwKSB7XG4gICAgICBzaWRlID0gJ2xlZnQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaWRlID0gJ3JpZ2h0JztcbiAgICB9XG4gICAgcG9ydGZvbGlvQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxkaXYgY2xhc3M9XCJwb3J0Zm9saW9faXRlbVwiIGRhdGEtYW9zPVwiZmxpcC0ke3NpZGV9XCIgZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudD1cImJvdHRvbS1jZW50ZXJcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBkYXRhLWFvcy1hbmNob3I9XCIucG9ydGZvbGlvX2hlYWRlclwiIGRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnQ9XCJjZW50ZXItYm90dG9tIFwiICR7cG9ydGZvbGlvW2luZGV4XS5hdHRyfT5cbiAgICA8aDM+JHtlbGVtZW50Lm5hbWV9PC9oMz5cbiAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvX2l0ZW1fYm9keVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpb19pdGVtX2ltYWdlXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7ZWxlbWVudC5pY29ufScpXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvX2l0ZW1fZGVzY3JpcHRpb25cIj48cD4ke2VsZW1lbnQuZGVzY3JpcHRpb25bYCR7bGFuZ3VhZ2V9YF19PC9wPjwvZGl2PiAgXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpb19pdGVtX2J1dHRvbl9jb250YWluZXIgYnV0dG9uXCIgPlxuICAgICAgPGEgaHJlZj1cIiR7ZWxlbWVudC5saW5rRGVtb31cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpb19idXR0b25faXRlbVwiPiR7cGFnZUNvbnRlbnRbYCR7bGFuZ3VhZ2V9YF0uZGVtb308L2Rpdj5cbiAgICAgIDwvYT5cbiAgICAgIDxhIGhyZWY9XCIke2VsZW1lbnQubGlua0dpdH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpb19idXR0b25faXRlbVwiPkdpdEh1YjwvZGl2PlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5gKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICBsZXQgdGltZW91dDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpczsgY29uc3RcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgY29uc3QgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzY3JvbGwoYmxvY2ssIGRlbHRhSGVpZ2h0ID0gaGVhZGVyLm9mZnNldEhlaWdodCkge1xuICB3aW5kb3cuc2Nyb2xsVG8oeyBsZWZ0OiAwLCB0b3A6IGJsb2NrLm9mZnNldFRvcCAtIGRlbHRhSGVpZ2h0ICsgMSwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xufVxuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuZGF0YXNldC50eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2Fib3V0X21lX2ltYWdlX2l0ZW1fbGFyZ2UnKTtcbiAgfSBlbHNlIHtcbiAgICBwaG90b3MuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Fib3V0X21lX2ltYWdlX2l0ZW1fbGFyZ2UnKSk7XG4gIH1cbn0pO1xuXG5jb25zdCBzZXRCdXR0b25zQWN0aXZlID0gKCkgPT4ge1xuICBjb25zdCBzY3JvbGxEaXN0YW5jZSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgcG9ydGZvbGlvQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBpZiAoc2Nyb2xsRGlzdGFuY2UgPj0gc2tpbGxTZWN0aW9uLm9mZnNldFRvcCAtIGhlYWRlci5vZmZzZXRIZWlnaHQgJiYgc2Nyb2xsRGlzdGFuY2UgKyBoZWFkZXIub2Zmc2V0SGVpZ2h0IDwgcG9ydGZvbGlvU2VjdGlvbi5vZmZzZXRUb3ApIHtcbiAgICBza2lsbHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH0gZWxzZSB7XG4gICAgc2tpbGxzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9XG4gIGlmIChzY3JvbGxEaXN0YW5jZSA+PSBwb3J0Zm9saW9TZWN0aW9uLm9mZnNldFRvcCAtIGhlYWRlci5vZmZzZXRIZWlnaHQgJiYgc2Nyb2xsRGlzdGFuY2UgPD0gcG9ydGZvbGlvU2VjdGlvbi5vZmZzZXRUb3AgKyBwb3J0Zm9saW9TZWN0aW9uLm9mZnNldEhlaWdodCkge1xuICAgIHBvcnRmb2xpb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfVxuICBpZiAoc2Nyb2xsRGlzdGFuY2UgPj0gYWJvdXRNZVNlY3Rpb24ub2Zmc2V0VG9wIC0gaGVhZGVyLm9mZnNldEhlaWdodCAmJiBzY3JvbGxEaXN0YW5jZSA8PSBhYm91dE1lU2VjdGlvbi5vZmZzZXRUb3AgKyBhYm91dE1lU2VjdGlvbi5vZmZzZXRIZWlnaHQpIHtcbiAgICBhYm91dE1lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9IGVsc2Uge1xuICAgIGFib3V0TWVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH1cbiAgaWYgKHNjcm9sbERpc3RhbmNlID49IGNvbnRhY3RTZWN0aW9uLm9mZnNldFRvcCAtIGhlYWRlci5vZmZzZXRIZWlnaHQgJiYgc2Nyb2xsRGlzdGFuY2UgPD0gY29udGFjdFNlY3Rpb24ub2Zmc2V0VG9wICsgY29udGFjdFNlY3Rpb24ub2Zmc2V0SGVpZ2h0KSB7XG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfSBlbHNlIHtcbiAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9XG4gIGlmIChzY3JvbGxEaXN0YW5jZSA8IHNraWxsU2VjdGlvbi5vZmZzZXRUb3AgLSBoZWFkZXIub2Zmc2V0SGVpZ2h0KSB7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0TGFuZ3VhZ2UoKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ3VhZ2UnKSA9PT0gbnVsbCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5ndWFnZScsICdlbicpO1xuICB9IGVsc2Uge1xuICAgIGxhbmd1YWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmd1YWdlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9ydGZvbGlvU29ydChhLCBkYXRhLCBhcnJheSkge1xuICBpZiAoZGF0YSA9PT0gYSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycmF5W2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgaWYgKGFycmF5W2ldLmRhdGFzZXRbYV0gPT09ICd0cnVlJykge1xuICAgICAgICBhcnJheVtpXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0UGFnZUNvbnRlbnQoKSB7XG4gIHR5cGVkLmRlc3Ryb3koKTtcbiAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IHBhZ2VDb250ZW50W2Ake2xhbmd1YWdlfWBdLmhvbWU7XG4gIHNraWxsc0J1dHRvbi50ZXh0Q29udGVudCA9IHBhZ2VDb250ZW50W2Ake2xhbmd1YWdlfWBdLnNraWxscztcbiAgcG9ydGZvbGlvQnV0dG9uLnRleHRDb250ZW50ID0gcGFnZUNvbnRlbnRbYCR7bGFuZ3VhZ2V9YF0ucG9ydGZvbGlvO1xuICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gcGFnZUNvbnRlbnRbYCR7bGFuZ3VhZ2V9YF0uY29udGFjdHM7XG4gIGFib3V0TWVCdXR0b24udGV4dENvbnRlbnQgPSBwYWdlQ29udGVudFtgJHtsYW5ndWFnZX1gXS5hYm91dDtcbiAgLy8gaGVsbG8udGV4dENvbnRlbnQgPSBwYWdlQ29udGVudFtgJHtsYW5ndWFnZX1gXS5zdHJpbmdzWzBdO1xuICBsZWFybk1vcmVCdXR0b24uaW5uZXJIVE1MID0gcGFnZUNvbnRlbnRbYCR7bGFuZ3VhZ2V9YF0ubGVhcm47XG4gIHNraWxsc0hlYWRlci50ZXh0Q29udGVudCA9IHBhZ2VDb250ZW50W2Ake2xhbmd1YWdlfWBdLnNraWxsc0hlYWRlcjtcbiAgcG9ydGZvbGlvSGVhZGVyLnRleHRDb250ZW50ID0gcGFnZUNvbnRlbnRbYCR7bGFuZ3VhZ2V9YF0ucG9ydGZvbGlvO1xuICBhYm91dE1lSGVhZGVyLnRleHRDb250ZW50ID0gcGFnZUNvbnRlbnRbYCR7bGFuZ3VhZ2V9YF0uYWJvdXQ7XG4gIGNvbnRhY3RzSGVhZGVyLnRleHRDb250ZW50ID0gcGFnZUNvbnRlbnRbYCR7bGFuZ3VhZ2V9YF0uY29udGFjdHM7XG4gIGlucHV0TmFtZS5wbGFjZWhvbGRlciA9IHBhZ2VDb250ZW50W2Ake2xhbmd1YWdlfWBdLm5hbWVQbGFjZWhvbGRlcjtcbiAgbGFiZWxOYW1lLmlubmVySFRNTCA9IHBhZ2VDb250ZW50W2Ake2xhbmd1YWdlfWBdLm5hbWU7XG4gIGlucHV0TWFpbC5wbGFjZWhvbGRlciA9IHBhZ2VDb250ZW50W2Ake2xhbmd1YWdlfWBdLmVtYWlsUGxhY2Vob2xkZXI7XG4gIGlucHV0TWVzc2FnZS5wbGFjZWhvbGRlciA9IHBhZ2VDb250ZW50W2Ake2xhbmd1YWdlfWBdLnRleHRhcmVhUGxhY2Vob2xkZXI7XG4gIGxhYmVsTWVzc2FnZS50ZXh0Q29udGVudCA9IHBhZ2VDb250ZW50W2Ake2xhbmd1YWdlfWBdLnRleHRhcmVhO1xuICBzdWJtaXQudmFsdWUgPSBwYWdlQ29udGVudFtgJHtsYW5ndWFnZX1gXS50ZXh0YXJlYVBsYWNlaG9sZGVyO1xuICBvcHRpb25zLnN0cmluZ3MgPSBwYWdlQ29udGVudFtgJHtsYW5ndWFnZX1gXS5zdHJpbmdzO1xuICBhYm91dE1lRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gcGFnZUNvbnRlbnRbYCR7bGFuZ3VhZ2V9YF0uYWJvdXREZXNjcmlwdGlvbjtcbiAgdHlwZWQgPSBuZXcgVHlwZWQoJy50eXBlZCcsIG9wdGlvbnMpO1xuICBpZiAobGFuZ3VhZ2UgPT09ICdlbicpIHtcbiAgICBsYW5nQnV0dG9uRW4uY2xhc3NMaXN0LmFkZCgnbGFuZ19hY3RpdmUnKTtcbiAgICBsYW5nQnV0dG9uUnUuY2xhc3NMaXN0LnJlbW92ZSgnbGFuZ19hY3RpdmUnKTtcbiAgfSBlbHNlIHtcbiAgICBsYW5nQnV0dG9uUnUuY2xhc3NMaXN0LmFkZCgnbGFuZ19hY3RpdmUnKTtcbiAgICBsYW5nQnV0dG9uRW4uY2xhc3NMaXN0LnJlbW92ZSgnbGFuZ19hY3RpdmUnKTtcbiAgfVxufVxuXG5nZXRMYW5ndWFnZSgpO1xuc2V0UGFnZUNvbnRlbnQoKTtcbnNldFBvcnRmb2xpb0l0ZW0ocG9ydGZvbGlvKTtcbnNldFNraWxscyhza2lsbHMpO1xuc2V0UG9ydGZvbGlvQnV0dG9uKHRlY2hub2xvZ2llcyk7XG5cbnNraWxsc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNjcm9sbChza2lsbFNlY3Rpb24pKTtcbmxlYXJuTW9yZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNjcm9sbChza2lsbFNlY3Rpb24pKTtcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzY3JvbGwoMCwgMCkpO1xucG9ydGZvbGlvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2Nyb2xsKHBvcnRmb2xpb1NlY3Rpb24pKTtcbmFib3V0TWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzY3JvbGwoYWJvdXRNZVNlY3Rpb24pKTtcbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzY3JvbGwoY29udGFjdFNlY3Rpb24pKTtcblxubGFuZ0J1dHRvbkVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwb3J0Zm9saW9Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGxhbmd1YWdlID0gbGFuZ0J1dHRvbkVuLmRhdGFzZXQubGFuZztcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmd1YWdlJywgJ2VuJyk7XG4gIHNldFBhZ2VDb250ZW50KCk7XG4gIHNldFBvcnRmb2xpb0l0ZW0ocG9ydGZvbGlvKTtcbn0pO1xuXG5sYW5nQnV0dG9uUnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHBvcnRmb2xpb0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgbGFuZ3VhZ2UgPSBsYW5nQnV0dG9uUnUuZGF0YXNldC5sYW5nO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZ3VhZ2UnLCAncnUnKTtcbiAgc2V0UGFnZUNvbnRlbnQoKTtcbiAgc2V0UG9ydGZvbGlvSXRlbShwb3J0Zm9saW8pO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZShzZXRCdXR0b25zQWN0aXZlLCA0MDApKTtcbnBvcnRmb2xpb0J1dHRvbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcnRmb2xpb19pdGVtJykpO1xuICBjb25zdCBkYXRhID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuYnV0dG9uO1xuICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHBvcnRmb2xpb0J1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3J0Zm9saW9fYnV0dG9uX2l0ZW0nKSk7XG4gIHBvcnRmb2xpb0J1dHRvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvX2FjdGl2ZScpO1xuICB9KTtcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpb19hY3RpdmUnKTtcbiAgaWYgKGRhdGEgPT09ICdhbGwnKSB7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH0pO1xuICB9XG4gIHBvcnRmb2xpb1NvcnQoJ2h0bWwnLCBkYXRhLCBwcm9qZWN0cyk7XG4gIHBvcnRmb2xpb1NvcnQoJ2NzcycsIGRhdGEsIHByb2plY3RzKTtcbiAgcG9ydGZvbGlvU29ydCgnc2FzcycsIGRhdGEsIHByb2plY3RzKTtcbiAgcG9ydGZvbGlvU29ydCgnanMnLCBkYXRhLCBwcm9qZWN0cyk7XG4gIHBvcnRmb2xpb1NvcnQoJ3dlYnBhY2snLCBkYXRhLCBwcm9qZWN0cyk7XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NjcmlwdHMvc2NyaXB0LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==