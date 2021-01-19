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
/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */



const skillsContainer = document.querySelector('.skills_wrapper');
const portfolioButtonContainer = document.querySelector('.portfolio_button_container');
const portfolioContainer = document.querySelector('.portfolio_wrapper');
const skillsDelay = 200;
const aosDuration = 500;
const photos = Array.from(document.querySelectorAll('.about_me_image_item'));
const projects = Array.from(document.querySelectorAll('.portfolio_item'));

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

const portfolio = [
  {
    name: 'fancy-weather',
    icon: '../assets/icons/fancy-weather_icon-min.png',
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
    icon: '../assets/icons/singolo_icon-min.png',
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
    icon: '../assets/icons/raindrops-min.png',
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
];

const skills = [
  { description: 'HTML5', icon: '../assets/icons/html5_icon.png' },
  { description: 'CSS3', icon: '../assets/icons/css3_icon.png' },
  { description: 'JavaScript', icon: '../assets/icons/js_icon.png' },
  { description: 'SASS', icon: '../assets/icons/sass_icon.png' },
  { description: 'Git', icon: '../assets/icons/git_icon.png' },
  { description: 'GitHub', icon: '../assets/icons/github_icon.png' },
  { description: 'Webpack', icon: '../assets/icons/webpack_icon.png' },
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

let language = 'en';

const options = {
  strings: pageContent[`${language}`].strings,
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
    portfolioButtonContainer.appendChild(div);
  });
}

setSkills(skills);
setPortfolioButton(technologies);

function setPortfolioItem(data) {
  data.forEach((element, index) => {
    let side;
    if (index % 2 === 0) {
      side = 'left';
    } else {
      side = 'right';
    }
    portfolioContainer.insertAdjacentHTML('beforeend', `<div class="portfolio_item" data-aos="flip-${side}" data-aos-duration="1000" data-aos-anchor-placement="center-bottom ${portfolio.attr}">
    <h3>${element.name}</h3>
    <div class="portfolio_item_body">
      <div class="portfolio_item_image" style="background-image: url('${element.icon}')"></div>
      <div class="portfolio_item_description"><p>${element.description[`${language}`]}</p></div>  
    </div>
    <div class="portfolio_item_button_container button" >
      <a href="${element.linkDemo}" target="_blank">
        <div class="portfolio_button_item">Demo</div>
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

function setPageContent() {
  typed.destroy();
  homeButton.textContent = pageContent[`${language}`].home;
  skillsButton.textContent = pageContent[`${language}`].skills;
  portfolioButton.textContent = pageContent[`${language}`].portfolio;
  contactButton.textContent = pageContent[`${language}`].contacts;
  aboutMeButton.textContent = pageContent[`${language}`].about;
  // hello.textContent = pageContent[`${language}`].strings[0];
  learnMoreButton.innerHTML = pageContent[`${language}`].learn;
  skillsHeader.textContent = pageContent[`${language}`].skillsHeader;
  portfolioHeader.textContent = pageContent[`${language}`].portfolio;
  aboutMeHeader.textContent = pageContent[`${language}`].about;
  contactsHeader.textContent = pageContent[`${language}`].contacts;
  inputName.placeholder = pageContent[`${language}`].namePlaceholder;
  labelName.innerHTML = pageContent[`${language}`].name;
  inputMail.placeholder = pageContent[`${language}`].emailPlaceholder;
  inputMessage.textContent = pageContent[`${language}`].textarea;
  labelMessage.textContent = pageContent[`${language}`].textareaPlaceholder;
  submit.value = pageContent[`${language}`].textareaPlaceholder;
  options.strings = pageContent[`${language}`].strings;
  aboutMeDescription.innerHTML = pageContent[`${language}`].aboutDescription;
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
setPortfolioItem(portfolio);

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
  setPortfolioItem(portfolio);
});

langButtonRu.addEventListener('click', () => {
  portfolioContainer.innerHTML = '';
  language = langButtonRu.dataset.lang;
  localStorage.setItem('language', 'ru');
  setPageContent();
  setPortfolioItem(portfolio);
});

window.addEventListener('scroll', debounce(setButtonsActive, 400));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3R5cGVkLmpzL2xpYi90eXBlZC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zY3JpcHRzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUF5RDtBQUM3RDtBQUNBLE1BQU0sRUFLc0I7QUFDNUIsQ0FBQztBQUNELG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4QkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSw4QkFBbUI7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDhCQUFtQjtBQUM3QjtBQUNBO0FBQ0EsVUFBVSw4QkFBbUI7QUFDN0I7QUFDQTtBQUNBLFVB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OztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7VUMvWEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qIVxuICogXG4gKiAgIHR5cGVkLmpzIC0gQSBKYXZhU2NyaXB0IFR5cGluZyBBbmltYXRpb24gTGlicmFyeVxuICogICBBdXRob3I6IE1hdHQgQm9sZHQgPG1lQG1hdHRib2xkdC5jb20+XG4gKiAgIFZlcnNpb246IHYyLjAuMTFcbiAqICAgVXJsOiBodHRwczovL2dpdGh1Yi5jb20vbWF0dGJvbGR0L3R5cGVkLmpzXG4gKiAgIExpY2Vuc2Uocyk6IE1JVFxuICogXG4gKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlR5cGVkXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlR5cGVkXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXHRcblx0dmFyIF9pbml0aWFsaXplckpzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0XG5cdHZhciBfaHRtbFBhcnNlckpzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0XG5cdC8qKlxuXHQgKiBXZWxjb21lIHRvIFR5cGVkLmpzIVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudElkIEhUTUwgZWxlbWVudCBJRCBfT1JfIEhUTUwgZWxlbWVudFxuXHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBvcHRpb25zIG9iamVjdFxuXHQgKiBAcmV0dXJucyB7b2JqZWN0fSBhIG5ldyBUeXBlZCBvYmplY3Rcblx0ICovXG5cdFxuXHR2YXIgVHlwZWQgPSAoZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIFR5cGVkKGVsZW1lbnRJZCwgb3B0aW9ucykge1xuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR5cGVkKTtcblx0XG5cdCAgICAvLyBJbml0aWFsaXplIGl0IHVwXG5cdCAgICBfaW5pdGlhbGl6ZXJKcy5pbml0aWFsaXplci5sb2FkKHRoaXMsIG9wdGlvbnMsIGVsZW1lbnRJZCk7XG5cdCAgICAvLyBBbGwgc3lzdGVtcyBnbyFcblx0ICAgIHRoaXMuYmVnaW4oKTtcblx0ICB9XG5cdFxuXHQgIC8qKlxuXHQgICAqIFRvZ2dsZSBzdGFydCgpIGFuZCBzdG9wKCkgb2YgdGhlIFR5cGVkIGluc3RhbmNlXG5cdCAgICogQHB1YmxpY1xuXHQgICAqL1xuXHRcblx0ICBfY3JlYXRlQ2xhc3MoVHlwZWQsIFt7XG5cdCAgICBrZXk6ICd0b2dnbGUnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcblx0ICAgICAgdGhpcy5wYXVzZS5zdGF0dXMgPyB0aGlzLnN0YXJ0KCkgOiB0aGlzLnN0b3AoKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFN0b3AgdHlwaW5nIC8gYmFja3NwYWNpbmcgYW5kIGVuYWJsZSBjdXJzb3IgYmxpbmtpbmdcblx0ICAgICAqIEBwdWJsaWNcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3N0b3AnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG5cdCAgICAgIGlmICh0aGlzLnR5cGluZ0NvbXBsZXRlKSByZXR1cm47XG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnN0YXR1cykgcmV0dXJuO1xuXHQgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKHRydWUpO1xuXHQgICAgICB0aGlzLnBhdXNlLnN0YXR1cyA9IHRydWU7XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vblN0b3AodGhpcy5hcnJheVBvcywgdGhpcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBTdGFydCB0eXBpbmcgLyBiYWNrc3BhY2luZyBhZnRlciBiZWluZyBzdG9wcGVkXG5cdCAgICAgKiBAcHVibGljXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzdGFydCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG5cdCAgICAgIGlmICh0aGlzLnR5cGluZ0NvbXBsZXRlKSByZXR1cm47XG5cdCAgICAgIGlmICghdGhpcy5wYXVzZS5zdGF0dXMpIHJldHVybjtcblx0ICAgICAgdGhpcy5wYXVzZS5zdGF0dXMgPSBmYWxzZTtcblx0ICAgICAgaWYgKHRoaXMucGF1c2UudHlwZXdyaXRlKSB7XG5cdCAgICAgICAgdGhpcy50eXBld3JpdGUodGhpcy5wYXVzZS5jdXJTdHJpbmcsIHRoaXMucGF1c2UuY3VyU3RyUG9zKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLmJhY2tzcGFjZSh0aGlzLnBhdXNlLmN1clN0cmluZywgdGhpcy5wYXVzZS5jdXJTdHJQb3MpO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vblN0YXJ0KHRoaXMuYXJyYXlQb3MsIHRoaXMpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogRGVzdHJveSB0aGlzIGluc3RhbmNlIG9mIFR5cGVkXG5cdCAgICAgKiBAcHVibGljXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdkZXN0cm95Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuXHQgICAgICB0aGlzLnJlc2V0KGZhbHNlKTtcblx0ICAgICAgdGhpcy5vcHRpb25zLm9uRGVzdHJveSh0aGlzKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFJlc2V0IFR5cGVkIGFuZCBvcHRpb25hbGx5IHJlc3RhcnRzXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlc3RhcnRcblx0ICAgICAqIEBwdWJsaWNcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3Jlc2V0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcblx0ICAgICAgdmFyIHJlc3RhcnQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB0cnVlIDogYXJndW1lbnRzWzBdO1xuXHRcblx0ICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVvdXQpO1xuXHQgICAgICB0aGlzLnJlcGxhY2VUZXh0KCcnKTtcblx0ICAgICAgaWYgKHRoaXMuY3Vyc29yICYmIHRoaXMuY3Vyc29yLnBhcmVudE5vZGUpIHtcblx0ICAgICAgICB0aGlzLmN1cnNvci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY3Vyc29yKTtcblx0ICAgICAgICB0aGlzLmN1cnNvciA9IG51bGw7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5zdHJQb3MgPSAwO1xuXHQgICAgICB0aGlzLmFycmF5UG9zID0gMDtcblx0ICAgICAgdGhpcy5jdXJMb29wID0gMDtcblx0ICAgICAgaWYgKHJlc3RhcnQpIHtcblx0ICAgICAgICB0aGlzLmluc2VydEN1cnNvcigpO1xuXHQgICAgICAgIHRoaXMub3B0aW9ucy5vblJlc2V0KHRoaXMpO1xuXHQgICAgICAgIHRoaXMuYmVnaW4oKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQmVnaW5zIHRoZSB0eXBpbmcgYW5pbWF0aW9uXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnYmVnaW4nLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJlZ2luKCkge1xuXHQgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHRcblx0ICAgICAgdGhpcy5vcHRpb25zLm9uQmVnaW4odGhpcyk7XG5cdCAgICAgIHRoaXMudHlwaW5nQ29tcGxldGUgPSBmYWxzZTtcblx0ICAgICAgdGhpcy5zaHVmZmxlU3RyaW5nc0lmTmVlZGVkKHRoaXMpO1xuXHQgICAgICB0aGlzLmluc2VydEN1cnNvcigpO1xuXHQgICAgICBpZiAodGhpcy5iaW5kSW5wdXRGb2N1c0V2ZW50cykgdGhpcy5iaW5kRm9jdXNFdmVudHMoKTtcblx0ICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgc29tZSB0ZXh0IGluIHRoZSBlbGVtZW50LCBpZiB5ZXMgc3RhcnQgYnkgYmFja3NwYWNpbmcgdGhlIGRlZmF1bHQgbWVzc2FnZVxuXHQgICAgICAgIGlmICghX3RoaXMuY3VycmVudEVsQ29udGVudCB8fCBfdGhpcy5jdXJyZW50RWxDb250ZW50Lmxlbmd0aCA9PT0gMCkge1xuXHQgICAgICAgICAgX3RoaXMudHlwZXdyaXRlKF90aGlzLnN0cmluZ3NbX3RoaXMuc2VxdWVuY2VbX3RoaXMuYXJyYXlQb3NdXSwgX3RoaXMuc3RyUG9zKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgLy8gU3RhcnQgdHlwaW5nXG5cdCAgICAgICAgICBfdGhpcy5iYWNrc3BhY2UoX3RoaXMuY3VycmVudEVsQ29udGVudCwgX3RoaXMuY3VycmVudEVsQ29udGVudC5sZW5ndGgpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSwgdGhpcy5zdGFydERlbGF5KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIENhbGxlZCBmb3IgZWFjaCBjaGFyYWN0ZXIgdHlwZWRcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICd0eXBld3JpdGUnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHR5cGV3cml0ZShjdXJTdHJpbmcsIGN1clN0clBvcykge1xuXHQgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblx0XG5cdCAgICAgIGlmICh0aGlzLmZhZGVPdXQgJiYgdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5mYWRlT3V0Q2xhc3MpKSB7XG5cdCAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZmFkZU91dENsYXNzKTtcblx0ICAgICAgICBpZiAodGhpcy5jdXJzb3IpIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5mYWRlT3V0Q2xhc3MpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICB2YXIgaHVtYW5pemUgPSB0aGlzLmh1bWFuaXplcih0aGlzLnR5cGVTcGVlZCk7XG5cdCAgICAgIHZhciBudW1DaGFycyA9IDE7XG5cdFxuXHQgICAgICBpZiAodGhpcy5wYXVzZS5zdGF0dXMgPT09IHRydWUpIHtcblx0ICAgICAgICB0aGlzLnNldFBhdXNlU3RhdHVzKGN1clN0cmluZywgY3VyU3RyUG9zLCB0cnVlKTtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIC8vIGNvbnRhaW4gdHlwaW5nIGZ1bmN0aW9uIGluIGEgdGltZW91dCBodW1hbml6ZSdkIGRlbGF5XG5cdCAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIC8vIHNraXAgb3ZlciBhbnkgSFRNTCBjaGFyc1xuXHQgICAgICAgIGN1clN0clBvcyA9IF9odG1sUGFyc2VySnMuaHRtbFBhcnNlci50eXBlSHRtbENoYXJzKGN1clN0cmluZywgY3VyU3RyUG9zLCBfdGhpczIpO1xuXHRcblx0ICAgICAgICB2YXIgcGF1c2VUaW1lID0gMDtcblx0ICAgICAgICB2YXIgc3Vic3RyID0gY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MpO1xuXHQgICAgICAgIC8vIGNoZWNrIGZvciBhbiBlc2NhcGUgY2hhcmFjdGVyIGJlZm9yZSBhIHBhdXNlIHZhbHVlXG5cdCAgICAgICAgLy8gZm9ybWF0OiBcXF5cXGQrIC4uIGVnOiBeMTAwMCAuLiBzaG91bGQgYmUgYWJsZSB0byBwcmludCB0aGUgXiB0b28gdXNpbmcgXl5cblx0ICAgICAgICAvLyBzaW5nbGUgXiBhcmUgcmVtb3ZlZCBmcm9tIHN0cmluZ1xuXHQgICAgICAgIGlmIChzdWJzdHIuY2hhckF0KDApID09PSAnXicpIHtcblx0ICAgICAgICAgIGlmICgvXlxcXlxcZCsvLnRlc3Qoc3Vic3RyKSkge1xuXHQgICAgICAgICAgICB2YXIgc2tpcCA9IDE7IC8vIHNraXAgYXQgbGVhc3QgMVxuXHQgICAgICAgICAgICBzdWJzdHIgPSAvXFxkKy8uZXhlYyhzdWJzdHIpWzBdO1xuXHQgICAgICAgICAgICBza2lwICs9IHN1YnN0ci5sZW5ndGg7XG5cdCAgICAgICAgICAgIHBhdXNlVGltZSA9IHBhcnNlSW50KHN1YnN0cik7XG5cdCAgICAgICAgICAgIF90aGlzMi50ZW1wb3JhcnlQYXVzZSA9IHRydWU7XG5cdCAgICAgICAgICAgIF90aGlzMi5vcHRpb25zLm9uVHlwaW5nUGF1c2VkKF90aGlzMi5hcnJheVBvcywgX3RoaXMyKTtcblx0ICAgICAgICAgICAgLy8gc3RyaXAgb3V0IHRoZSBlc2NhcGUgY2hhcmFjdGVyIGFuZCBwYXVzZSB2YWx1ZSBzbyB0aGV5J3JlIG5vdCBwcmludGVkXG5cdCAgICAgICAgICAgIGN1clN0cmluZyA9IGN1clN0cmluZy5zdWJzdHJpbmcoMCwgY3VyU3RyUG9zKSArIGN1clN0cmluZy5zdWJzdHJpbmcoY3VyU3RyUG9zICsgc2tpcCk7XG5cdCAgICAgICAgICAgIF90aGlzMi50b2dnbGVCbGlua2luZyh0cnVlKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIC8vIGNoZWNrIGZvciBza2lwIGNoYXJhY3RlcnMgZm9ybWF0dGVkIGFzXG5cdCAgICAgICAgLy8gXCJ0aGlzIGlzIGEgYHN0cmluZyB0byBwcmludCBOT1dgIC4uLlwiXG5cdCAgICAgICAgaWYgKHN1YnN0ci5jaGFyQXQoMCkgPT09ICdgJykge1xuXHQgICAgICAgICAgd2hpbGUgKGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zICsgbnVtQ2hhcnMpLmNoYXJBdCgwKSAhPT0gJ2AnKSB7XG5cdCAgICAgICAgICAgIG51bUNoYXJzKys7XG5cdCAgICAgICAgICAgIGlmIChjdXJTdHJQb3MgKyBudW1DaGFycyA+IGN1clN0cmluZy5sZW5ndGgpIGJyZWFrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgLy8gc3RyaXAgb3V0IHRoZSBlc2NhcGUgY2hhcmFjdGVycyBhbmQgYXBwZW5kIGFsbCB0aGUgc3RyaW5nIGluIGJldHdlZW5cblx0ICAgICAgICAgIHZhciBzdHJpbmdCZWZvcmVTa2lwID0gY3VyU3RyaW5nLnN1YnN0cmluZygwLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgICAgdmFyIHN0cmluZ1NraXBwZWQgPSBjdXJTdHJpbmcuc3Vic3RyaW5nKHN0cmluZ0JlZm9yZVNraXAubGVuZ3RoICsgMSwgY3VyU3RyUG9zICsgbnVtQ2hhcnMpO1xuXHQgICAgICAgICAgdmFyIHN0cmluZ0FmdGVyU2tpcCA9IGN1clN0cmluZy5zdWJzdHJpbmcoY3VyU3RyUG9zICsgbnVtQ2hhcnMgKyAxKTtcblx0ICAgICAgICAgIGN1clN0cmluZyA9IHN0cmluZ0JlZm9yZVNraXAgKyBzdHJpbmdTa2lwcGVkICsgc3RyaW5nQWZ0ZXJTa2lwO1xuXHQgICAgICAgICAgbnVtQ2hhcnMtLTtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIC8vIHRpbWVvdXQgZm9yIGFueSBwYXVzZSBhZnRlciBhIGNoYXJhY3RlclxuXHQgICAgICAgIF90aGlzMi50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAvLyBBY2NvdW50cyBmb3IgYmxpbmtpbmcgd2hpbGUgcGF1c2VkXG5cdCAgICAgICAgICBfdGhpczIudG9nZ2xlQmxpbmtpbmcoZmFsc2UpO1xuXHRcblx0ICAgICAgICAgIC8vIFdlJ3JlIGRvbmUgd2l0aCB0aGlzIHNlbnRlbmNlIVxuXHQgICAgICAgICAgaWYgKGN1clN0clBvcyA+PSBjdXJTdHJpbmcubGVuZ3RoKSB7XG5cdCAgICAgICAgICAgIF90aGlzMi5kb25lVHlwaW5nKGN1clN0cmluZywgY3VyU3RyUG9zKTtcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIF90aGlzMi5rZWVwVHlwaW5nKGN1clN0cmluZywgY3VyU3RyUG9zLCBudW1DaGFycyk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICAvLyBlbmQgb2YgY2hhcmFjdGVyIHBhdXNlXG5cdCAgICAgICAgICBpZiAoX3RoaXMyLnRlbXBvcmFyeVBhdXNlKSB7XG5cdCAgICAgICAgICAgIF90aGlzMi50ZW1wb3JhcnlQYXVzZSA9IGZhbHNlO1xuXHQgICAgICAgICAgICBfdGhpczIub3B0aW9ucy5vblR5cGluZ1Jlc3VtZWQoX3RoaXMyLmFycmF5UG9zLCBfdGhpczIpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH0sIHBhdXNlVGltZSk7XG5cdFxuXHQgICAgICAgIC8vIGh1bWFuaXplZCB2YWx1ZSBmb3IgdHlwaW5nXG5cdCAgICAgIH0sIGh1bWFuaXplKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIENvbnRpbnVlIHRvIHRoZSBuZXh0IHN0cmluZyAmIGJlZ2luIHR5cGluZ1xuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2tlZXBUeXBpbmcnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGtlZXBUeXBpbmcoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIG51bUNoYXJzKSB7XG5cdCAgICAgIC8vIGNhbGwgYmVmb3JlIGZ1bmN0aW9ucyBpZiBhcHBsaWNhYmxlXG5cdCAgICAgIGlmIChjdXJTdHJQb3MgPT09IDApIHtcblx0ICAgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKGZhbHNlKTtcblx0ICAgICAgICB0aGlzLm9wdGlvbnMucHJlU3RyaW5nVHlwZWQodGhpcy5hcnJheVBvcywgdGhpcyk7XG5cdCAgICAgIH1cblx0ICAgICAgLy8gc3RhcnQgdHlwaW5nIGVhY2ggbmV3IGNoYXIgaW50byBleGlzdGluZyBzdHJpbmdcblx0ICAgICAgLy8gY3VyU3RyaW5nOiBhcmcsIHRoaXMuZWwuaHRtbDogb3JpZ2luYWwgdGV4dCBpbnNpZGUgZWxlbWVudFxuXHQgICAgICBjdXJTdHJQb3MgKz0gbnVtQ2hhcnM7XG5cdCAgICAgIHZhciBuZXh0U3RyaW5nID0gY3VyU3RyaW5nLnN1YnN0cigwLCBjdXJTdHJQb3MpO1xuXHQgICAgICB0aGlzLnJlcGxhY2VUZXh0KG5leHRTdHJpbmcpO1xuXHQgICAgICAvLyBsb29wIHRoZSBmdW5jdGlvblxuXHQgICAgICB0aGlzLnR5cGV3cml0ZShjdXJTdHJpbmcsIGN1clN0clBvcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBXZSdyZSBkb25lIHR5cGluZyB0aGUgY3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdkb25lVHlwaW5nJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBkb25lVHlwaW5nKGN1clN0cmluZywgY3VyU3RyUG9zKSB7XG5cdCAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXHRcblx0ICAgICAgLy8gZmlyZXMgY2FsbGJhY2sgZnVuY3Rpb25cblx0ICAgICAgdGhpcy5vcHRpb25zLm9uU3RyaW5nVHlwZWQodGhpcy5hcnJheVBvcywgdGhpcyk7XG5cdCAgICAgIHRoaXMudG9nZ2xlQmxpbmtpbmcodHJ1ZSk7XG5cdCAgICAgIC8vIGlzIHRoaXMgdGhlIGZpbmFsIHN0cmluZ1xuXHQgICAgICBpZiAodGhpcy5hcnJheVBvcyA9PT0gdGhpcy5zdHJpbmdzLmxlbmd0aCAtIDEpIHtcblx0ICAgICAgICAvLyBjYWxsYmFjayB0aGF0IG9jY3VycyBvbiB0aGUgbGFzdCB0eXBlZCBzdHJpbmdcblx0ICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG5cdCAgICAgICAgLy8gcXVpdCBpZiB3ZSB3b250IGxvb3AgYmFja1xuXHQgICAgICAgIGlmICh0aGlzLmxvb3AgPT09IGZhbHNlIHx8IHRoaXMuY3VyTG9vcCA9PT0gdGhpcy5sb29wQ291bnQpIHtcblx0ICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgX3RoaXMzLmJhY2tzcGFjZShjdXJTdHJpbmcsIGN1clN0clBvcyk7XG5cdCAgICAgIH0sIHRoaXMuYmFja0RlbGF5KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEJhY2tzcGFjZXMgMSBjaGFyYWN0ZXIgYXQgYSB0aW1lXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnYmFja3NwYWNlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBiYWNrc3BhY2UoY3VyU3RyaW5nLCBjdXJTdHJQb3MpIHtcblx0ICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cdFxuXHQgICAgICBpZiAodGhpcy5wYXVzZS5zdGF0dXMgPT09IHRydWUpIHtcblx0ICAgICAgICB0aGlzLnNldFBhdXNlU3RhdHVzKGN1clN0cmluZywgY3VyU3RyUG9zLCB0cnVlKTtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRoaXMuZmFkZU91dCkgcmV0dXJuIHRoaXMuaW5pdEZhZGVPdXQoKTtcblx0XG5cdCAgICAgIHRoaXMudG9nZ2xlQmxpbmtpbmcoZmFsc2UpO1xuXHQgICAgICB2YXIgaHVtYW5pemUgPSB0aGlzLmh1bWFuaXplcih0aGlzLmJhY2tTcGVlZCk7XG5cdFxuXHQgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBjdXJTdHJQb3MgPSBfaHRtbFBhcnNlckpzLmh0bWxQYXJzZXIuYmFja1NwYWNlSHRtbENoYXJzKGN1clN0cmluZywgY3VyU3RyUG9zLCBfdGhpczQpO1xuXHQgICAgICAgIC8vIHJlcGxhY2UgdGV4dCB3aXRoIGJhc2UgdGV4dCArIHR5cGVkIGNoYXJhY3RlcnNcblx0ICAgICAgICB2YXIgY3VyU3RyaW5nQXRQb3NpdGlvbiA9IGN1clN0cmluZy5zdWJzdHIoMCwgY3VyU3RyUG9zKTtcblx0ICAgICAgICBfdGhpczQucmVwbGFjZVRleHQoY3VyU3RyaW5nQXRQb3NpdGlvbik7XG5cdFxuXHQgICAgICAgIC8vIGlmIHNtYXJ0QmFjayBpcyBlbmFibGVkXG5cdCAgICAgICAgaWYgKF90aGlzNC5zbWFydEJhY2tzcGFjZSkge1xuXHQgICAgICAgICAgLy8gdGhlIHJlbWFpbmluZyBwYXJ0IG9mIHRoZSBjdXJyZW50IHN0cmluZyBpcyBlcXVhbCBvZiB0aGUgc2FtZSBwYXJ0IG9mIHRoZSBuZXcgc3RyaW5nXG5cdCAgICAgICAgICB2YXIgbmV4dFN0cmluZyA9IF90aGlzNC5zdHJpbmdzW190aGlzNC5hcnJheVBvcyArIDFdO1xuXHQgICAgICAgICAgaWYgKG5leHRTdHJpbmcgJiYgY3VyU3RyaW5nQXRQb3NpdGlvbiA9PT0gbmV4dFN0cmluZy5zdWJzdHIoMCwgY3VyU3RyUG9zKSkge1xuXHQgICAgICAgICAgICBfdGhpczQuc3RvcE51bSA9IGN1clN0clBvcztcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIF90aGlzNC5zdG9wTnVtID0gMDtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIC8vIGlmIHRoZSBudW1iZXIgKGlkIG9mIGNoYXJhY3RlciBpbiBjdXJyZW50IHN0cmluZykgaXNcblx0ICAgICAgICAvLyBsZXNzIHRoYW4gdGhlIHN0b3AgbnVtYmVyLCBrZWVwIGdvaW5nXG5cdCAgICAgICAgaWYgKGN1clN0clBvcyA+IF90aGlzNC5zdG9wTnVtKSB7XG5cdCAgICAgICAgICAvLyBzdWJ0cmFjdCBjaGFyYWN0ZXJzIG9uZSBieSBvbmVcblx0ICAgICAgICAgIGN1clN0clBvcy0tO1xuXHQgICAgICAgICAgLy8gbG9vcCB0aGUgZnVuY3Rpb25cblx0ICAgICAgICAgIF90aGlzNC5iYWNrc3BhY2UoY3VyU3RyaW5nLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoY3VyU3RyUG9zIDw9IF90aGlzNC5zdG9wTnVtKSB7XG5cdCAgICAgICAgICAvLyBpZiB0aGUgc3RvcCBudW1iZXIgaGFzIGJlZW4gcmVhY2hlZCwgaW5jcmVhc2Vcblx0ICAgICAgICAgIC8vIGFycmF5IHBvc2l0aW9uIHRvIG5leHQgc3RyaW5nXG5cdCAgICAgICAgICBfdGhpczQuYXJyYXlQb3MrKztcblx0ICAgICAgICAgIC8vIFdoZW4gbG9vcGluZywgYmVnaW4gYXQgdGhlIGJlZ2lubmluZyBhZnRlciBiYWNrc3BhY2UgY29tcGxldGVcblx0ICAgICAgICAgIGlmIChfdGhpczQuYXJyYXlQb3MgPT09IF90aGlzNC5zdHJpbmdzLmxlbmd0aCkge1xuXHQgICAgICAgICAgICBfdGhpczQuYXJyYXlQb3MgPSAwO1xuXHQgICAgICAgICAgICBfdGhpczQub3B0aW9ucy5vbkxhc3RTdHJpbmdCYWNrc3BhY2VkKCk7XG5cdCAgICAgICAgICAgIF90aGlzNC5zaHVmZmxlU3RyaW5nc0lmTmVlZGVkKCk7XG5cdCAgICAgICAgICAgIF90aGlzNC5iZWdpbigpO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgX3RoaXM0LnR5cGV3cml0ZShfdGhpczQuc3RyaW5nc1tfdGhpczQuc2VxdWVuY2VbX3RoaXM0LmFycmF5UG9zXV0sIGN1clN0clBvcyk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIC8vIGh1bWFuaXplZCB2YWx1ZSBmb3IgdHlwaW5nXG5cdCAgICAgIH0sIGh1bWFuaXplKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEZ1bGwgYW5pbWF0aW9uIGlzIGNvbXBsZXRlXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnY29tcGxldGUnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuXHQgICAgICB0aGlzLm9wdGlvbnMub25Db21wbGV0ZSh0aGlzKTtcblx0ICAgICAgaWYgKHRoaXMubG9vcCkge1xuXHQgICAgICAgIHRoaXMuY3VyTG9vcCsrO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMudHlwaW5nQ29tcGxldGUgPSB0cnVlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBIYXMgdGhlIHR5cGluZyBiZWVuIHN0b3BwZWRcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNUeXBpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzZXRQYXVzZVN0YXR1cycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UGF1c2VTdGF0dXMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIGlzVHlwaW5nKSB7XG5cdCAgICAgIHRoaXMucGF1c2UudHlwZXdyaXRlID0gaXNUeXBpbmc7XG5cdCAgICAgIHRoaXMucGF1c2UuY3VyU3RyaW5nID0gY3VyU3RyaW5nO1xuXHQgICAgICB0aGlzLnBhdXNlLmN1clN0clBvcyA9IGN1clN0clBvcztcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFRvZ2dsZSB0aGUgYmxpbmtpbmcgY3Vyc29yXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQmxpbmtpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICd0b2dnbGVCbGlua2luZycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlQmxpbmtpbmcoaXNCbGlua2luZykge1xuXHQgICAgICBpZiAoIXRoaXMuY3Vyc29yKSByZXR1cm47XG5cdCAgICAgIC8vIGlmIGluIHBhdXNlZCBzdGF0ZSwgZG9uJ3QgdG9nZ2xlIGJsaW5raW5nIGEgMm5kIHRpbWVcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzKSByZXR1cm47XG5cdCAgICAgIGlmICh0aGlzLmN1cnNvckJsaW5raW5nID09PSBpc0JsaW5raW5nKSByZXR1cm47XG5cdCAgICAgIHRoaXMuY3Vyc29yQmxpbmtpbmcgPSBpc0JsaW5raW5nO1xuXHQgICAgICBpZiAoaXNCbGlua2luZykge1xuXHQgICAgICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3R5cGVkLWN1cnNvci0tYmxpbmsnKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QucmVtb3ZlKCd0eXBlZC1jdXJzb3ItLWJsaW5rJyk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFNwZWVkIGluIE1TIHRvIHR5cGVcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzcGVlZFxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2h1bWFuaXplcicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gaHVtYW5pemVyKHNwZWVkKSB7XG5cdCAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBzcGVlZCAvIDIpICsgc3BlZWQ7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBTaHVmZmxlIHRoZSBzZXF1ZW5jZSBvZiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3NodWZmbGVTdHJpbmdzSWZOZWVkZWQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHNodWZmbGVTdHJpbmdzSWZOZWVkZWQoKSB7XG5cdCAgICAgIGlmICghdGhpcy5zaHVmZmxlKSByZXR1cm47XG5cdCAgICAgIHRoaXMuc2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlLnNvcnQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIC0gMC41O1xuXHQgICAgICB9KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEFkZHMgYSBDU1MgY2xhc3MgdG8gZmFkZSBvdXQgY3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdpbml0RmFkZU91dCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdEZhZGVPdXQoKSB7XG5cdCAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXHRcblx0ICAgICAgdGhpcy5lbC5jbGFzc05hbWUgKz0gJyAnICsgdGhpcy5mYWRlT3V0Q2xhc3M7XG5cdCAgICAgIGlmICh0aGlzLmN1cnNvcikgdGhpcy5jdXJzb3IuY2xhc3NOYW1lICs9ICcgJyArIHRoaXMuZmFkZU91dENsYXNzO1xuXHQgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgX3RoaXM1LmFycmF5UG9zKys7XG5cdCAgICAgICAgX3RoaXM1LnJlcGxhY2VUZXh0KCcnKTtcblx0XG5cdCAgICAgICAgLy8gUmVzZXRzIGN1cnJlbnQgc3RyaW5nIGlmIGVuZCBvZiBsb29wIHJlYWNoZWRcblx0ICAgICAgICBpZiAoX3RoaXM1LnN0cmluZ3MubGVuZ3RoID4gX3RoaXM1LmFycmF5UG9zKSB7XG5cdCAgICAgICAgICBfdGhpczUudHlwZXdyaXRlKF90aGlzNS5zdHJpbmdzW190aGlzNS5zZXF1ZW5jZVtfdGhpczUuYXJyYXlQb3NdXSwgMCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIF90aGlzNS50eXBld3JpdGUoX3RoaXM1LnN0cmluZ3NbMF0sIDApO1xuXHQgICAgICAgICAgX3RoaXM1LmFycmF5UG9zID0gMDtcblx0ICAgICAgICB9XG5cdCAgICAgIH0sIHRoaXMuZmFkZU91dERlbGF5KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFJlcGxhY2VzIGN1cnJlbnQgdGV4dCBpbiB0aGUgSFRNTCBlbGVtZW50XG5cdCAgICAgKiBkZXBlbmRpbmcgb24gZWxlbWVudCB0eXBlXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAncmVwbGFjZVRleHQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KHN0cikge1xuXHQgICAgICBpZiAodGhpcy5hdHRyKSB7XG5cdCAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUodGhpcy5hdHRyLCBzdHIpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGlmICh0aGlzLmlzSW5wdXQpIHtcblx0ICAgICAgICAgIHRoaXMuZWwudmFsdWUgPSBzdHI7XG5cdCAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnRlbnRUeXBlID09PSAnaHRtbCcpIHtcblx0ICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gc3RyO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICB0aGlzLmVsLnRleHRDb250ZW50ID0gc3RyO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogSWYgdXNpbmcgaW5wdXQgZWxlbWVudHMsIGJpbmQgZm9jdXMgaW4gb3JkZXIgdG9cblx0ICAgICAqIHN0YXJ0IGFuZCBzdG9wIHRoZSBhbmltYXRpb25cblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdiaW5kRm9jdXNFdmVudHMnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRGb2N1c0V2ZW50cygpIHtcblx0ICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cdFxuXHQgICAgICBpZiAoIXRoaXMuaXNJbnB1dCkgcmV0dXJuO1xuXHQgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gKGUpIHtcblx0ICAgICAgICBfdGhpczYuc3RvcCgpO1xuXHQgICAgICB9KTtcblx0ICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKGUpIHtcblx0ICAgICAgICBpZiAoX3RoaXM2LmVsLnZhbHVlICYmIF90aGlzNi5lbC52YWx1ZS5sZW5ndGggIT09IDApIHtcblx0ICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdCAgICAgICAgX3RoaXM2LnN0YXJ0KCk7XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogT24gaW5pdCwgaW5zZXJ0IHRoZSBjdXJzb3IgZWxlbWVudFxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2luc2VydEN1cnNvcicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gaW5zZXJ0Q3Vyc29yKCkge1xuXHQgICAgICBpZiAoIXRoaXMuc2hvd0N1cnNvcikgcmV0dXJuO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3IpIHJldHVybjtcblx0ICAgICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdCAgICAgIHRoaXMuY3Vyc29yLmNsYXNzTmFtZSA9ICd0eXBlZC1jdXJzb3InO1xuXHQgICAgICB0aGlzLmN1cnNvci5pbm5lckhUTUwgPSB0aGlzLmN1cnNvckNoYXI7XG5cdCAgICAgIHRoaXMuZWwucGFyZW50Tm9kZSAmJiB0aGlzLmVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuY3Vyc29yLCB0aGlzLmVsLm5leHRTaWJsaW5nKTtcblx0ICAgIH1cblx0ICB9XSk7XG5cdFxuXHQgIHJldHVybiBUeXBlZDtcblx0fSkoKTtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFR5cGVkO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblx0XG5cdHZhciBfZGVmYXVsdHNKcyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdFxuXHR2YXIgX2RlZmF1bHRzSnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdHNKcyk7XG5cdFxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSB0aGUgVHlwZWQgb2JqZWN0XG5cdCAqL1xuXHRcblx0dmFyIEluaXRpYWxpemVyID0gKGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBJbml0aWFsaXplcigpIHtcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbml0aWFsaXplcik7XG5cdCAgfVxuXHRcblx0ICBfY3JlYXRlQ2xhc3MoSW5pdGlhbGl6ZXIsIFt7XG5cdCAgICBrZXk6ICdsb2FkJyxcblx0XG5cdCAgICAvKipcblx0ICAgICAqIExvYWQgdXAgZGVmYXVsdHMgJiBvcHRpb25zIG9uIHRoZSBUeXBlZCBpbnN0YW5jZVxuXHQgICAgICogQHBhcmFtIHtUeXBlZH0gc2VsZiBpbnN0YW5jZSBvZiBUeXBlZFxuXHQgICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgb3B0aW9ucyBvYmplY3Rcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50SWQgSFRNTCBlbGVtZW50IElEIF9PUl8gaW5zdGFuY2Ugb2YgSFRNTCBlbGVtZW50XG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQoc2VsZiwgb3B0aW9ucywgZWxlbWVudElkKSB7XG5cdCAgICAgIC8vIGNob3NlbiBlbGVtZW50IHRvIG1hbmlwdWxhdGUgdGV4dFxuXHQgICAgICBpZiAodHlwZW9mIGVsZW1lbnRJZCA9PT0gJ3N0cmluZycpIHtcblx0ICAgICAgICBzZWxmLmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50SWQpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHNlbGYuZWwgPSBlbGVtZW50SWQ7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHNlbGYub3B0aW9ucyA9IF9leHRlbmRzKHt9LCBfZGVmYXVsdHNKczJbJ2RlZmF1bHQnXSwgb3B0aW9ucyk7XG5cdFxuXHQgICAgICAvLyBhdHRyaWJ1dGUgdG8gdHlwZSBpbnRvXG5cdCAgICAgIHNlbGYuaXNJbnB1dCA9IHNlbGYuZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnO1xuXHQgICAgICBzZWxmLmF0dHIgPSBzZWxmLm9wdGlvbnMuYXR0cjtcblx0ICAgICAgc2VsZi5iaW5kSW5wdXRGb2N1c0V2ZW50cyA9IHNlbGYub3B0aW9ucy5iaW5kSW5wdXRGb2N1c0V2ZW50cztcblx0XG5cdCAgICAgIC8vIHNob3cgY3Vyc29yXG5cdCAgICAgIHNlbGYuc2hvd0N1cnNvciA9IHNlbGYuaXNJbnB1dCA/IGZhbHNlIDogc2VsZi5vcHRpb25zLnNob3dDdXJzb3I7XG5cdFxuXHQgICAgICAvLyBjdXN0b20gY3Vyc29yXG5cdCAgICAgIHNlbGYuY3Vyc29yQ2hhciA9IHNlbGYub3B0aW9ucy5jdXJzb3JDaGFyO1xuXHRcblx0ICAgICAgLy8gSXMgdGhlIGN1cnNvciBibGlua2luZ1xuXHQgICAgICBzZWxmLmN1cnNvckJsaW5raW5nID0gdHJ1ZTtcblx0XG5cdCAgICAgIC8vIHRleHQgY29udGVudCBvZiBlbGVtZW50XG5cdCAgICAgIHNlbGYuZWxDb250ZW50ID0gc2VsZi5hdHRyID8gc2VsZi5lbC5nZXRBdHRyaWJ1dGUoc2VsZi5hdHRyKSA6IHNlbGYuZWwudGV4dENvbnRlbnQ7XG5cdFxuXHQgICAgICAvLyBodG1sIG9yIHBsYWluIHRleHRcblx0ICAgICAgc2VsZi5jb250ZW50VHlwZSA9IHNlbGYub3B0aW9ucy5jb250ZW50VHlwZTtcblx0XG5cdCAgICAgIC8vIHR5cGluZyBzcGVlZFxuXHQgICAgICBzZWxmLnR5cGVTcGVlZCA9IHNlbGYub3B0aW9ucy50eXBlU3BlZWQ7XG5cdFxuXHQgICAgICAvLyBhZGQgYSBkZWxheSBiZWZvcmUgdHlwaW5nIHN0YXJ0c1xuXHQgICAgICBzZWxmLnN0YXJ0RGVsYXkgPSBzZWxmLm9wdGlvbnMuc3RhcnREZWxheTtcblx0XG5cdCAgICAgIC8vIGJhY2tzcGFjaW5nIHNwZWVkXG5cdCAgICAgIHNlbGYuYmFja1NwZWVkID0gc2VsZi5vcHRpb25zLmJhY2tTcGVlZDtcblx0XG5cdCAgICAgIC8vIG9ubHkgYmFja3NwYWNlIHdoYXQgZG9lc24ndCBtYXRjaCB0aGUgcHJldmlvdXMgc3RyaW5nXG5cdCAgICAgIHNlbGYuc21hcnRCYWNrc3BhY2UgPSBzZWxmLm9wdGlvbnMuc21hcnRCYWNrc3BhY2U7XG5cdFxuXHQgICAgICAvLyBhbW91bnQgb2YgdGltZSB0byB3YWl0IGJlZm9yZSBiYWNrc3BhY2luZ1xuXHQgICAgICBzZWxmLmJhY2tEZWxheSA9IHNlbGYub3B0aW9ucy5iYWNrRGVsYXk7XG5cdFxuXHQgICAgICAvLyBGYWRlIG91dCBpbnN0ZWFkIG9mIGJhY2tzcGFjZVxuXHQgICAgICBzZWxmLmZhZGVPdXQgPSBzZWxmLm9wdGlvbnMuZmFkZU91dDtcblx0ICAgICAgc2VsZi5mYWRlT3V0Q2xhc3MgPSBzZWxmLm9wdGlvbnMuZmFkZU91dENsYXNzO1xuXHQgICAgICBzZWxmLmZhZGVPdXREZWxheSA9IHNlbGYub3B0aW9ucy5mYWRlT3V0RGVsYXk7XG5cdFxuXHQgICAgICAvLyB2YXJpYWJsZSB0byBjaGVjayB3aGV0aGVyIHR5cGluZyBpcyBjdXJyZW50bHkgcGF1c2VkXG5cdCAgICAgIHNlbGYuaXNQYXVzZWQgPSBmYWxzZTtcblx0XG5cdCAgICAgIC8vIGlucHV0IHN0cmluZ3Mgb2YgdGV4dFxuXHQgICAgICBzZWxmLnN0cmluZ3MgPSBzZWxmLm9wdGlvbnMuc3RyaW5ncy5tYXAoZnVuY3Rpb24gKHMpIHtcblx0ICAgICAgICByZXR1cm4gcy50cmltKCk7XG5cdCAgICAgIH0pO1xuXHRcblx0ICAgICAgLy8gZGl2IGNvbnRhaW5pbmcgc3RyaW5nc1xuXHQgICAgICBpZiAodHlwZW9mIHNlbGYub3B0aW9ucy5zdHJpbmdzRWxlbWVudCA9PT0gJ3N0cmluZycpIHtcblx0ICAgICAgICBzZWxmLnN0cmluZ3NFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxmLm9wdGlvbnMuc3RyaW5nc0VsZW1lbnQpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHNlbGYuc3RyaW5nc0VsZW1lbnQgPSBzZWxmLm9wdGlvbnMuc3RyaW5nc0VsZW1lbnQ7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGlmIChzZWxmLnN0cmluZ3NFbGVtZW50KSB7XG5cdCAgICAgICAgc2VsZi5zdHJpbmdzID0gW107XG5cdCAgICAgICAgc2VsZi5zdHJpbmdzRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHQgICAgICAgIHZhciBzdHJpbmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KHNlbGYuc3RyaW5nc0VsZW1lbnQuY2hpbGRyZW4pO1xuXHQgICAgICAgIHZhciBzdHJpbmdzTGVuZ3RoID0gc3RyaW5ncy5sZW5ndGg7XG5cdFxuXHQgICAgICAgIGlmIChzdHJpbmdzTGVuZ3RoKSB7XG5cdCAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cmluZ3NMZW5ndGg7IGkgKz0gMSkge1xuXHQgICAgICAgICAgICB2YXIgc3RyaW5nRWwgPSBzdHJpbmdzW2ldO1xuXHQgICAgICAgICAgICBzZWxmLnN0cmluZ3MucHVzaChzdHJpbmdFbC5pbm5lckhUTUwudHJpbSgpKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIC8vIGNoYXJhY3RlciBudW1iZXIgcG9zaXRpb24gb2YgY3VycmVudCBzdHJpbmdcblx0ICAgICAgc2VsZi5zdHJQb3MgPSAwO1xuXHRcblx0ICAgICAgLy8gY3VycmVudCBhcnJheSBwb3NpdGlvblxuXHQgICAgICBzZWxmLmFycmF5UG9zID0gMDtcblx0XG5cdCAgICAgIC8vIGluZGV4IG9mIHN0cmluZyB0byBzdG9wIGJhY2tzcGFjaW5nIG9uXG5cdCAgICAgIHNlbGYuc3RvcE51bSA9IDA7XG5cdFxuXHQgICAgICAvLyBMb29waW5nIGxvZ2ljXG5cdCAgICAgIHNlbGYubG9vcCA9IHNlbGYub3B0aW9ucy5sb29wO1xuXHQgICAgICBzZWxmLmxvb3BDb3VudCA9IHNlbGYub3B0aW9ucy5sb29wQ291bnQ7XG5cdCAgICAgIHNlbGYuY3VyTG9vcCA9IDA7XG5cdFxuXHQgICAgICAvLyBzaHVmZmxlIHRoZSBzdHJpbmdzXG5cdCAgICAgIHNlbGYuc2h1ZmZsZSA9IHNlbGYub3B0aW9ucy5zaHVmZmxlO1xuXHQgICAgICAvLyB0aGUgb3JkZXIgb2Ygc3RyaW5nc1xuXHQgICAgICBzZWxmLnNlcXVlbmNlID0gW107XG5cdFxuXHQgICAgICBzZWxmLnBhdXNlID0ge1xuXHQgICAgICAgIHN0YXR1czogZmFsc2UsXG5cdCAgICAgICAgdHlwZXdyaXRlOiB0cnVlLFxuXHQgICAgICAgIGN1clN0cmluZzogJycsXG5cdCAgICAgICAgY3VyU3RyUG9zOiAwXG5cdCAgICAgIH07XG5cdFxuXHQgICAgICAvLyBXaGVuIHRoZSB0eXBpbmcgaXMgY29tcGxldGUgKHdoZW4gbm90IGxvb3BlZClcblx0ICAgICAgc2VsZi50eXBpbmdDb21wbGV0ZSA9IGZhbHNlO1xuXHRcblx0ICAgICAgLy8gU2V0IHRoZSBvcmRlciBpbiB3aGljaCB0aGUgc3RyaW5ncyBhcmUgdHlwZWRcblx0ICAgICAgZm9yICh2YXIgaSBpbiBzZWxmLnN0cmluZ3MpIHtcblx0ICAgICAgICBzZWxmLnNlcXVlbmNlW2ldID0gaTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgLy8gSWYgdGhlcmUgaXMgc29tZSB0ZXh0IGluIHRoZSBlbGVtZW50XG5cdCAgICAgIHNlbGYuY3VycmVudEVsQ29udGVudCA9IHRoaXMuZ2V0Q3VycmVudEVsQ29udGVudChzZWxmKTtcblx0XG5cdCAgICAgIHNlbGYuYXV0b0luc2VydENzcyA9IHNlbGYub3B0aW9ucy5hdXRvSW5zZXJ0Q3NzO1xuXHRcblx0ICAgICAgdGhpcy5hcHBlbmRBbmltYXRpb25Dc3Moc2VsZik7XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnZ2V0Q3VycmVudEVsQ29udGVudCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q3VycmVudEVsQ29udGVudChzZWxmKSB7XG5cdCAgICAgIHZhciBlbENvbnRlbnQgPSAnJztcblx0ICAgICAgaWYgKHNlbGYuYXR0cikge1xuXHQgICAgICAgIGVsQ29udGVudCA9IHNlbGYuZWwuZ2V0QXR0cmlidXRlKHNlbGYuYXR0cik7XG5cdCAgICAgIH0gZWxzZSBpZiAoc2VsZi5pc0lucHV0KSB7XG5cdCAgICAgICAgZWxDb250ZW50ID0gc2VsZi5lbC52YWx1ZTtcblx0ICAgICAgfSBlbHNlIGlmIChzZWxmLmNvbnRlbnRUeXBlID09PSAnaHRtbCcpIHtcblx0ICAgICAgICBlbENvbnRlbnQgPSBzZWxmLmVsLmlubmVySFRNTDtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBlbENvbnRlbnQgPSBzZWxmLmVsLnRleHRDb250ZW50O1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBlbENvbnRlbnQ7XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnYXBwZW5kQW5pbWF0aW9uQ3NzJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRBbmltYXRpb25Dc3Moc2VsZikge1xuXHQgICAgICB2YXIgY3NzRGF0YU5hbWUgPSAnZGF0YS10eXBlZC1qcy1jc3MnO1xuXHQgICAgICBpZiAoIXNlbGYuYXV0b0luc2VydENzcykge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAoIXNlbGYuc2hvd0N1cnNvciAmJiAhc2VsZi5mYWRlT3V0KSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbJyArIGNzc0RhdGFOYW1lICsgJ10nKSkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgdmFyIGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdCAgICAgIGNzcy50eXBlID0gJ3RleHQvY3NzJztcblx0ICAgICAgY3NzLnNldEF0dHJpYnV0ZShjc3NEYXRhTmFtZSwgdHJ1ZSk7XG5cdFxuXHQgICAgICB2YXIgaW5uZXJDc3MgPSAnJztcblx0ICAgICAgaWYgKHNlbGYuc2hvd0N1cnNvcikge1xuXHQgICAgICAgIGlubmVyQ3NzICs9ICdcXG4gICAgICAgIC50eXBlZC1jdXJzb3J7XFxuICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuICAgICAgICAudHlwZWQtY3Vyc29yLnR5cGVkLWN1cnNvci0tYmxpbmt7XFxuICAgICAgICAgIGFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgfVxcbiAgICAgICAgQGtleWZyYW1lcyB0eXBlZGpzQmxpbmt7XFxuICAgICAgICAgIDUwJSB7IG9wYWNpdHk6IDAuMDsgfVxcbiAgICAgICAgfVxcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHR5cGVkanNCbGlua3tcXG4gICAgICAgICAgMCUgeyBvcGFjaXR5OiAxOyB9XFxuICAgICAgICAgIDUwJSB7IG9wYWNpdHk6IDAuMDsgfVxcbiAgICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgfVxcbiAgICAgICc7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHNlbGYuZmFkZU91dCkge1xuXHQgICAgICAgIGlubmVyQ3NzICs9ICdcXG4gICAgICAgIC50eXBlZC1mYWRlLW91dHtcXG4gICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMjVzO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnR5cGVkLWN1cnNvci50eXBlZC1jdXJzb3ItLWJsaW5rLnR5cGVkLWZhZGUtb3V0e1xcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogMDtcXG4gICAgICAgICAgYW5pbWF0aW9uOiAwO1xcbiAgICAgICAgfVxcbiAgICAgICc7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKGNzcy5sZW5ndGggPT09IDApIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgY3NzLmlubmVySFRNTCA9IGlubmVyQ3NzO1xuXHQgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNzcyk7XG5cdCAgICB9XG5cdCAgfV0pO1xuXHRcblx0ICByZXR1cm4gSW5pdGlhbGl6ZXI7XG5cdH0pKCk7XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBJbml0aWFsaXplcjtcblx0dmFyIGluaXRpYWxpemVyID0gbmV3IEluaXRpYWxpemVyKCk7XG5cdGV4cG9ydHMuaW5pdGlhbGl6ZXIgPSBpbml0aWFsaXplcjtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyoqXG5cdCAqIERlZmF1bHRzICYgb3B0aW9uc1xuXHQgKiBAcmV0dXJucyB7b2JqZWN0fSBUeXBlZCBkZWZhdWx0cyAmIG9wdGlvbnNcblx0ICogQHB1YmxpY1xuXHQgKi9cblx0XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0dmFyIGRlZmF1bHRzID0ge1xuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7YXJyYXl9IHN0cmluZ3Mgc3RyaW5ncyB0byBiZSB0eXBlZFxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzdHJpbmdzRWxlbWVudCBJRCBvZiBlbGVtZW50IGNvbnRhaW5pbmcgc3RyaW5nIGNoaWxkcmVuXG5cdCAgICovXG5cdCAgc3RyaW5nczogWydUaGVzZSBhcmUgdGhlIGRlZmF1bHQgdmFsdWVzLi4uJywgJ1lvdSBrbm93IHdoYXQgeW91IHNob3VsZCBkbz8nLCAnVXNlIHlvdXIgb3duIScsICdIYXZlIGEgZ3JlYXQgZGF5ISddLFxuXHQgIHN0cmluZ3NFbGVtZW50OiBudWxsLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gdHlwZVNwZWVkIHR5cGUgc3BlZWQgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgdHlwZVNwZWVkOiAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnREZWxheSB0aW1lIGJlZm9yZSB0eXBpbmcgc3RhcnRzIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIHN0YXJ0RGVsYXk6IDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBiYWNrU3BlZWQgYmFja3NwYWNpbmcgc3BlZWQgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgYmFja1NwZWVkOiAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHNtYXJ0QmFja3NwYWNlIG9ubHkgYmFja3NwYWNlIHdoYXQgZG9lc24ndCBtYXRjaCB0aGUgcHJldmlvdXMgc3RyaW5nXG5cdCAgICovXG5cdCAgc21hcnRCYWNrc3BhY2U6IHRydWUsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc2h1ZmZsZSBzaHVmZmxlIHRoZSBzdHJpbmdzXG5cdCAgICovXG5cdCAgc2h1ZmZsZTogZmFsc2UsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBiYWNrRGVsYXkgdGltZSBiZWZvcmUgYmFja3NwYWNpbmcgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgYmFja0RlbGF5OiA3MDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZmFkZU91dCBGYWRlIG91dCBpbnN0ZWFkIG9mIGJhY2tzcGFjZVxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBmYWRlT3V0Q2xhc3MgY3NzIGNsYXNzIGZvciBmYWRlIGFuaW1hdGlvblxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZmFkZU91dERlbGF5IEZhZGUgb3V0IGRlbGF5IGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIGZhZGVPdXQ6IGZhbHNlLFxuXHQgIGZhZGVPdXRDbGFzczogJ3R5cGVkLWZhZGUtb3V0Jyxcblx0ICBmYWRlT3V0RGVsYXk6IDUwMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBsb29wIGxvb3Agc3RyaW5nc1xuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsb29wQ291bnQgYW1vdW50IG9mIGxvb3BzXG5cdCAgICovXG5cdCAgbG9vcDogZmFsc2UsXG5cdCAgbG9vcENvdW50OiBJbmZpbml0eSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBzaG93Q3Vyc29yIHNob3cgY3Vyc29yXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IGN1cnNvckNoYXIgY2hhcmFjdGVyIGZvciBjdXJzb3Jcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGF1dG9JbnNlcnRDc3MgaW5zZXJ0IENTUyBmb3IgY3Vyc29yIGFuZCBmYWRlT3V0IGludG8gSFRNTCA8aGVhZD5cblx0ICAgKi9cblx0ICBzaG93Q3Vyc29yOiB0cnVlLFxuXHQgIGN1cnNvckNoYXI6ICd8Jyxcblx0ICBhdXRvSW5zZXJ0Q3NzOiB0cnVlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gYXR0ciBhdHRyaWJ1dGUgZm9yIHR5cGluZ1xuXHQgICAqIEV4OiBpbnB1dCBwbGFjZWhvbGRlciwgdmFsdWUsIG9yIGp1c3QgSFRNTCB0ZXh0XG5cdCAgICovXG5cdCAgYXR0cjogbnVsbCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBiaW5kSW5wdXRGb2N1c0V2ZW50cyBiaW5kIHRvIGZvY3VzIGFuZCBibHVyIGlmIGVsIGlzIHRleHQgaW5wdXRcblx0ICAgKi9cblx0ICBiaW5kSW5wdXRGb2N1c0V2ZW50czogZmFsc2UsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjb250ZW50VHlwZSAnaHRtbCcgb3IgJ251bGwnIGZvciBwbGFpbnRleHRcblx0ICAgKi9cblx0ICBjb250ZW50VHlwZTogJ2h0bWwnLFxuXHRcblx0ICAvKipcblx0ICAgKiBCZWZvcmUgaXQgYmVnaW5zIHR5cGluZ1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvbkJlZ2luOiBmdW5jdGlvbiBvbkJlZ2luKHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBbGwgdHlwaW5nIGlzIGNvbXBsZXRlXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uQ29tcGxldGU6IGZ1bmN0aW9uIG9uQ29tcGxldGUoc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEJlZm9yZSBlYWNoIHN0cmluZyBpcyB0eXBlZFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBwcmVTdHJpbmdUeXBlZDogZnVuY3Rpb24gcHJlU3RyaW5nVHlwZWQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciBlYWNoIHN0cmluZyBpcyB0eXBlZFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblN0cmluZ1R5cGVkOiBmdW5jdGlvbiBvblN0cmluZ1R5cGVkKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogRHVyaW5nIGxvb3BpbmcsIGFmdGVyIGxhc3Qgc3RyaW5nIGlzIHR5cGVkXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uTGFzdFN0cmluZ0JhY2tzcGFjZWQ6IGZ1bmN0aW9uIG9uTGFzdFN0cmluZ0JhY2tzcGFjZWQoc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFR5cGluZyBoYXMgYmVlbiBzdG9wcGVkXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uVHlwaW5nUGF1c2VkOiBmdW5jdGlvbiBvblR5cGluZ1BhdXNlZChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFR5cGluZyBoYXMgYmVlbiBzdGFydGVkIGFmdGVyIGJlaW5nIHN0b3BwZWRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25UeXBpbmdSZXN1bWVkOiBmdW5jdGlvbiBvblR5cGluZ1Jlc3VtZWQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciByZXNldFxuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblJlc2V0OiBmdW5jdGlvbiBvblJlc2V0KHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciBzdG9wXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uU3RvcDogZnVuY3Rpb24gb25TdG9wKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgc3RhcnRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25TdGFydDogZnVuY3Rpb24gb25TdGFydChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIGRlc3Ryb3lcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25EZXN0cm95OiBmdW5jdGlvbiBvbkRlc3Ryb3koc2VsZikge31cblx0fTtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGRlZmF1bHRzO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyoqXG5cdCAqIFRPRE86IFRoZXNlIG1ldGhvZHMgY2FuIHByb2JhYmx5IGJlIGNvbWJpbmVkIHNvbWVob3dcblx0ICogUGFyc2UgSFRNTCB0YWdzICYgSFRNTCBDaGFyYWN0ZXJzXG5cdCAqL1xuXHRcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXHRcblx0dmFyIEhUTUxQYXJzZXIgPSAoZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIEhUTUxQYXJzZXIoKSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTFBhcnNlcik7XG5cdCAgfVxuXHRcblx0ICBfY3JlYXRlQ2xhc3MoSFRNTFBhcnNlciwgW3tcblx0ICAgIGtleTogJ3R5cGVIdG1sQ2hhcnMnLFxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogVHlwZSBIVE1MIHRhZ3MgJiBIVE1MIENoYXJhY3RlcnNcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgQ3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgUG9zaXRpb24gaW4gY3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGYgaW5zdGFuY2Ugb2YgVHlwZWRcblx0ICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IGEgbmV3IHN0cmluZyBwb3NpdGlvblxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHRcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB0eXBlSHRtbENoYXJzKGN1clN0cmluZywgY3VyU3RyUG9zLCBzZWxmKSB7XG5cdCAgICAgIGlmIChzZWxmLmNvbnRlbnRUeXBlICE9PSAnaHRtbCcpIHJldHVybiBjdXJTdHJQb3M7XG5cdCAgICAgIHZhciBjdXJDaGFyID0gY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MpLmNoYXJBdCgwKTtcblx0ICAgICAgaWYgKGN1ckNoYXIgPT09ICc8JyB8fCBjdXJDaGFyID09PSAnJicpIHtcblx0ICAgICAgICB2YXIgZW5kVGFnID0gJyc7XG5cdCAgICAgICAgaWYgKGN1ckNoYXIgPT09ICc8Jykge1xuXHQgICAgICAgICAgZW5kVGFnID0gJz4nO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBlbmRUYWcgPSAnOyc7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHdoaWxlIChjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcyArIDEpLmNoYXJBdCgwKSAhPT0gZW5kVGFnKSB7XG5cdCAgICAgICAgICBjdXJTdHJQb3MrKztcblx0ICAgICAgICAgIGlmIChjdXJTdHJQb3MgKyAxID4gY3VyU3RyaW5nLmxlbmd0aCkge1xuXHQgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgY3VyU3RyUG9zKys7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIGN1clN0clBvcztcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEJhY2tzcGFjZSBIVE1MIHRhZ3MgYW5kIEhUTUwgQ2hhcmFjdGVyc1xuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyBDdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyBQb3NpdGlvbiBpbiBjdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtUeXBlZH0gc2VsZiBpbnN0YW5jZSBvZiBUeXBlZFxuXHQgICAgICogQHJldHVybnMge251bWJlcn0gYSBuZXcgc3RyaW5nIHBvc2l0aW9uXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnYmFja1NwYWNlSHRtbENoYXJzJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBiYWNrU3BhY2VIdG1sQ2hhcnMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIHNlbGYpIHtcblx0ICAgICAgaWYgKHNlbGYuY29udGVudFR5cGUgIT09ICdodG1sJykgcmV0dXJuIGN1clN0clBvcztcblx0ICAgICAgdmFyIGN1ckNoYXIgPSBjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcykuY2hhckF0KDApO1xuXHQgICAgICBpZiAoY3VyQ2hhciA9PT0gJz4nIHx8IGN1ckNoYXIgPT09ICc7Jykge1xuXHQgICAgICAgIHZhciBlbmRUYWcgPSAnJztcblx0ICAgICAgICBpZiAoY3VyQ2hhciA9PT0gJz4nKSB7XG5cdCAgICAgICAgICBlbmRUYWcgPSAnPCc7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIGVuZFRhZyA9ICcmJztcblx0ICAgICAgICB9XG5cdCAgICAgICAgd2hpbGUgKGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zIC0gMSkuY2hhckF0KDApICE9PSBlbmRUYWcpIHtcblx0ICAgICAgICAgIGN1clN0clBvcy0tO1xuXHQgICAgICAgICAgaWYgKGN1clN0clBvcyA8IDApIHtcblx0ICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGN1clN0clBvcy0tO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBjdXJTdHJQb3M7XG5cdCAgICB9XG5cdCAgfV0pO1xuXHRcblx0ICByZXR1cm4gSFRNTFBhcnNlcjtcblx0fSkoKTtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEhUTUxQYXJzZXI7XG5cdHZhciBodG1sUGFyc2VyID0gbmV3IEhUTUxQYXJzZXIoKTtcblx0ZXhwb3J0cy5odG1sUGFyc2VyID0gaHRtbFBhcnNlcjtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pXG59KTtcbjsiLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItZGVzdHJ1Y3R1cmluZyAqL1xuLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcyAqL1xuaW1wb3J0ICcuLi9zY3NzL2luZGV4LnNjc3MnO1xuaW1wb3J0IFR5cGVkIGZyb20gJ3R5cGVkLmpzJztcblxuY29uc3Qgc2tpbGxzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraWxsc193cmFwcGVyJyk7XG5jb25zdCBwb3J0Zm9saW9CdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvX2J1dHRvbl9jb250YWluZXInKTtcbmNvbnN0IHBvcnRmb2xpb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW9fd3JhcHBlcicpO1xuY29uc3Qgc2tpbGxzRGVsYXkgPSAyMDA7XG5jb25zdCBhb3NEdXJhdGlvbiA9IDUwMDtcbmNvbnN0IHBob3RvcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFib3V0X21lX2ltYWdlX2l0ZW0nKSk7XG5jb25zdCBwcm9qZWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcnRmb2xpb19pdGVtJykpO1xuXG5jb25zdCBza2lsbHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX3NraWxscycpO1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25faG9tZScpO1xuY29uc3QgcG9ydGZvbGlvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9wb3J0Zm9saW8nKTtcbmNvbnN0IGFib3V0TWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX2Fib3V0X21lJyk7XG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9jb250YWN0cycpO1xuY29uc3QgbGVhcm5Nb3JlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlYXJuX21vcmUnKTtcbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcbmNvbnN0IGxhbmdCdXR0b25FbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbicpO1xuY29uc3QgbGFuZ0J1dHRvblJ1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJ1Jyk7XG5cbmNvbnN0IHNraWxsU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2lsbHMnKTtcbmNvbnN0IHBvcnRmb2xpb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvJyk7XG5jb25zdCBhYm91dE1lU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9tZScpO1xuY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdF9zZWN0aW9uJyk7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcblxuLy8gY29uc3QgaGVsbG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVsbG9fc3BhbicpO1xuY29uc3Qgc2tpbGxzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraWxsc19oZWFkZXInKTtcbmNvbnN0IHBvcnRmb2xpb0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW9faGVhZGVyJyk7XG5jb25zdCBhYm91dE1lSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0X21lX2hlYWRlcicpO1xuY29uc3QgY29udGFjdHNIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdF9oZWFkZXInKTtcbmNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG5jb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xuY29uc3QgaW5wdXRNYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsJyk7XG5jb25zdCBpbnB1dE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZScpO1xuY29uc3QgbGFiZWxNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKTtcbmNvbnN0IGFib3V0TWVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9tZV9kZXNjcmlwdGlvbicpO1xuXG5jb25zdCBwb3J0Zm9saW8gPSBbXG4gIHtcbiAgICBuYW1lOiAnZmFuY3ktd2VhdGhlcicsXG4gICAgaWNvbjogJy4uL2Fzc2V0cy9pY29ucy9mYW5jeS13ZWF0aGVyX2ljb24tbWluLnBuZycsXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBxdW90ZS1wcm9wc1xuICAgICAgJ2VuJzogYDxwPlRoZSBGYW5jeS13ZWF0aGVyIHdhcyBjcmVhdGVkIGR1cmluZyB0aGUgY291cnNlIG9mIFRoZSBSb2xsaW5nIFNjb3BlcyBzY2hvb2wgKEVQQU0gU3lzdGVtcykuXG4gICAgICAgICAgICBJdCBpcyBhIHdlYXRoZXItZm9jYXN0IGFwcGxpY2F0aW9uLiBCeSBkZWZhdWx0LCB0aGUgYXBwIGRpc3BsYXlzIHdlYXRoZXIsIDMtZGF5cyBmb3JlY2FzdCwgY3VycmVudCB0aW1lLCBcbiAgICAgICAgICAgIGFuZCBjdXJyZW50IGdlb2dyYXBoaWNhbCBjb29yZGluYXRlcyBpbiB0aGUgcGxhY2Ugd2hlcmUgdXNlciBpcyBsb2NhdGVkLlxuICAgICAgICAgICAgQnV0IGFwcCBjYW4gZGlzcGxheSBpbmZvcm1hdGlvbiBhYm91dCBlYWNoIGNpdHkuIFxuICAgICAgICAgICAg0JVoZSBhcHAgaGFzIGFuIGludGVncmF0ZWQgbWFwIHRoYXQgc2hvd3MgdGhlIGN1cnJlbnQgcGxhY2Ugb3IgdGhlIHJlcXVpcmVkIHBsYWNlLjwvcD5cbiAgICAgICAgICAgIDxwPlRoZSBwcm9qZWN0IHVzZXMgc3VjaCB0ZWNobm9sb2dpZXMgYXM6IDxiPkhUTUw1PC9iPiwgPGI+Q1NTMzwvYj4sIDxiPlNBU1M8L2I+LCA8Yj5KYXZhU2NyaXB0PC9iPiwgPGI+V2VicGFjazwvYj4uPC9wPmAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcXVvdGUtcHJvcHNcbiAgICAgICdydSc6IGA8cD7Qn9GA0L7QtdC60YIg0LHRi9C7INGB0L7Qt9C00LDQvSDQstC+INCy0YDQtdC80Y8g0L/RgNC+0YXQvtC20LTQtdC90LjRjyDQutGD0YDRgdCwIFRoZSBSb2xsaW5nIFNjb3BlcyBzY2hvb2wgKEVQQU0gU3lzdGVtcykuIFxuICAgICAgICAgICAgV2ViLdC/0YDQuNC70L7QttC10L3QuNC1INC/0L7QutCw0LfRi9Cy0LDQtdGCINGC0LXQutGD0YnRg9GOINC/0L7Qs9C+0LTRgyDQuCDQv9GA0L7Qs9C90L7QtyDQv9C+0LPQvtC00Ysg0L3QsCDRgtGA0Lgg0YHQu9C10LTRg9GO0YnQuNGFINC00L3RjyDQsiDRgtC10LrRg9GJ0LXQvCDQvNC10YHRgtC1INC40LvQuCDQu9GO0LHQvtC8INC00YDRg9Cz0L7QvCDQuNGB0LrQvtC80L7QvCDQvNC10YHRgtC1LiBcbiAgICAgICAgICAgINCSINC/0YDQuNC70L7QttC10L3QuNC1INC40L3RgtC10LPRgNC40YDQvtCy0LDQvdCwINC60LDRgNGC0LAsINGD0LrQsNC30YvQstCw0Y7RidCw0Y8g0YLQtdC60YPRidC10LUg0L/QvtC70L7QttC10L3QuNC1INC70LjQsdC+INC/0L7Qu9C+0LbQtdC90LjQtSDQuNGB0LrQvtC80L7Qs9C+INCz0L7RgNC+0LTQsC4g0JLQvtC30LzQvtC20LXQvSDQstGL0LHQvtGAINCw0L3Qs9C70LjQudGB0LrQvtCz0L4g0LjQu9C4INGA0YPRgdGB0LrQvtCz0L4g0Y/Qt9GL0LrQsCwgXG4gICAgICAgICAgICDRgtC10LzQv9C10YDQsNGC0YPRgNGLINCyINCz0YDQsNC00YPRgdCw0YUg0YbQtdC70YzRgdC40Y8g0LjQu9C4INGE0LDRgNC10L3Qs9C10LnRgtCwLjwvcD5cbiAgICAgICAgICAgIDxwPtCSINC/0YDQvtC10LrRgtC1INC/0YDQuNC80LXQvdC10L3RizogPGI+SFRNTDU8L2I+LCA8Yj5DU1MzPC9iPiwgPGI+U0FTUzwvYj4sIDxiPkphdmFTY3JpcHQ8L2I+LCA8Yj5XZWJwYWNrPC9iPi48L3A+YCxcbiAgICB9LFxuICAgIGxpbmtHaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vQW5kcmVpTWlsYXNoZXZpY2gvcnNzY2hvb2wtY3YvdHJlZS9mYW5jeS13ZWF0aGVyJyxcbiAgICBsaW5rRGVtbzogJ2h0dHBzOi8vYW5kcmVpbWlsYXNoZXZpY2guZ2l0aHViLmlvL3Jzc2Nob29sLWN2L2ZhbmN5LXdlYXRoZXIvYnVpbGQvaW5kZXguaHRtbCcsXG4gICAgYXR0cjogJ2RhdGEtaHRtbD1cInRydWVcIiBkYXRhLWNzcz1cInRydWVcIiBkYXRhLWpzPVwidHJ1ZVwiIGRhdGEtc2Fzcz1cInRydWVcIiBkYXRhLXdlYnBhY2s9XCJ0cnVlXCInLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1NpbXBsZS1zaW5nb2xvJyxcbiAgICBpY29uOiAnLi4vYXNzZXRzL2ljb25zL3NpbmdvbG9faWNvbi1taW4ucG5nJyxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHF1b3RlLXByb3BzXG4gICAgICAnZW4nOiBgPHA+VGhlIFNpbXBsZS1TaW5nb2xvIHdhcyBjcmVhdGVkIGR1cmluZyB0aGUgY291cnNlIG9mIFRoZSBSb2xsaW5nIFNjb3BlcyBzY2hvb2wgKEVQQU0gU3lzdGVtcykuXG4gICAgICAgICAgPHA+VGhlIGxheW91dCBpcyBsYWlkIG91dCBpbiB0aHJlZSBzdGF0ZXM6IG1vYmlsZSwgdGFibGV0IGFuZCBkZXNrdG9wLjwvcD5cbiAgICAgICAgICA8L3A+PHA+VGhlIHByb2plY3QgdXNlcyBzdWNoIHRlY2hub2xvZ2llcyBhczogPGI+SFRNTDU8L2I+LCA8Yj5DU1MzPC9iPiwgPGI+U0FTUzwvYj4sIDxiPkphdmFTY3JpcHQ8L2I+LjwvcD5gLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHF1b3RlLXByb3BzXG4gICAgICAncnUnOiBgPHA+0J/RgNC40LvQvtC20LXQvdC40LUgU2ltcGxlLXNpbmdvbG8g0LHRi9C70L4g0YHQvtC30LTQsNC90L4g0LLQviDQstGA0LXQvNGPINC/0YDQvtGF0L7QttC00LXQvdC40Y8g0LrRg9GA0YHQsCBUaGUgUm9sbGluZyBTY29wZXMgc2Nob29sIChFUEFNIFN5c3RlbXMpLjwvcD5cbiAgICAgICAgICA8cD7Qn9GA0LjQu9C+0LbQtdC90LjQtSDRgdCy0LXRgNGB0YLQsNC90L4g0L/QviDQsNC00LDQv9GC0LjQstC90L7QvNGDINC80LDQutC10YLRgy48L3A+XG4gICAgICAgICAgPHA+0JIg0L/RgNC+0LXQutGC0LUg0L/RgNC40LzQtdC90LXQvdGLOiA8Yj5IVE1MNTwvYj4sIDxiPkNTUzM8L2I+LCA8Yj5TQVNTPC9iPiwgPGI+SmF2YVNjcmlwdDwvYj4uPC9wPmAsXG4gICAgfSxcbiAgICBsaW5rR2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL0FuZHJlaU1pbGFzaGV2aWNoL3NpbXBsZS1zaW5nb2xvJyxcbiAgICBsaW5rRGVtbzogJ2h0dHBzOi8vYW5kcmVpbWlsYXNoZXZpY2guZ2l0aHViLmlvL3NpbXBsZS1zaW5nb2xvL3NpbXBsZS1zaW5nb2xvL2luZGV4JyxcbiAgICBhdHRyOiAnZGF0YS1odG1sPVwidHJ1ZVwiIGRhdGEtY3NzPVwidHJ1ZVwiIGRhdGEtanM9XCJ0cnVlXCIgZGF0YS1zYXNzPVwidHJ1ZVwiIGRhdGEtd2VicGFjaz1cImZhbHNlXCInLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1JhaW5kcm9wcycsXG4gICAgaWNvbjogJy4uL2Fzc2V0cy9pY29ucy9yYWluZHJvcHMtbWluLnBuZycsXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBxdW90ZS1wcm9wc1xuICAgICAgJ2VuJzogYDxwPlRoZSBSYWlucm9wcyBHYW1lIHdhcyBjcmVhdGVkIGR1cmluZyB0aGUgY291cnNlIG9mIFRoZSBSb2xsaW5nIFNjb3BlcyBzY2hvb2wgKEVQQU0gU3lzdGVtcykuXG4gICAgICA8L3A+PHA+TWF0aCBleGFtcGxlcyBhcmUgd3JpdHRlbiBpbiByYWluZHJvcHMgdGhhdCBmYWxscyBhdCBhIGNlcnRhaW4gc3BlZWQuIFxuICAgICAgWW91IG11c3QgIGVudGVyIHRoZSBhbnN3ZXIgZnJvbSBrZXlib3JkIG9yIG51bXBhZCBvbiByaWdodCBzaWRlIG9mIHNjcmVlbiBiZWZvcmUgdGhlIGRyb3AgZmFsbHMuIFxuICAgICAgQWZ0ZXIgdGhlIGVuZCBvZiB0aGUgZ2FtZSwgdGhlIGdhbWUgc3RhdGlzdGljcyBhcmUgZGlzcGxheWVkLjwvcD5cbiAgICAgIDxwPlRoZSBwcm9qZWN0IHVzZXMgc3VjaCB0ZWNobm9sb2dpZXMgYXM6IDxiPkhUTUw1PC9iPiwgPGI+Q1NTMzwvYj4sIDxiPlNBU1M8L2I+LCA8Yj5KYXZhU2NyaXB0PC9iPiwgPGI+V2VicGFjazwvYj4uPC9wPmAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcXVvdGUtcHJvcHNcbiAgICAgICdydSc6IGA8cD7QmNCz0YDQsCBSYWlucm9wcyDQsdGL0LvQsCDRgdC+0LfQtNCw0L3QviDQstC+INCy0YDQtdC80Y8g0L/RgNC+0YXQvtC20LTQtdC90LjRjyDQutGD0YDRgdCwIFRoZSBSb2xsaW5nIFNjb3BlcyBzY2hvb2wgKEVQQU0gU3lzdGVtcykuPC9wPlxuICAgICAgPHA+0JzQsNGC0LXQvNCw0YLQuNGH0LXRgdC60LjQtSDQv9GA0LjQvNC10YDRiyDQvdCw0L/QuNGB0LDQvdGLINCy0L3Rg9GC0YDQuCDQutCw0L/QtdC70Ywg0LTQvtC20LTRjywg0L/QsNC00LDRjtGJ0LjRhSDRgSDQvtC/0YDQtdC00LXQu9C10L3QvdC+0Lkg0YHQutC+0YDQvtGB0YLRjNGOLiBcbiAgICAgINCd0YPQttC90L4g0LLQstC10YHRgtC4INC/0YDQuNC80LXRgCDRgSDQutC70LDQstC40LDRgtGD0YDRiyDQuNC70Lgg0YfQuNGB0LvQvtCy0L7QuSDQv9Cw0L3QtdC70Lgg0L3QsCDRjdC60YDQsNC90LUg0LTQviDRgtC+0LPQviDQutCw0Log0LrQsNC/0LvQuCDRg9C/0LDQtNGD0YIuIFxuICAgICAg0J/QvtGB0LvQtSDQt9Cw0LLQtdGA0YjQtdC90LjRjyDQuNCz0YDRiyDQvdCwINGN0LrRgNCw0L0g0LLRi9Cy0L7QtNC40YLRgdGPINC40LPRgNC+0LLQsNGPINGB0YLQsNGC0LjRgdGC0LjQutCwLjwvcD5cbiAgICAgIDxwPtCSINC/0YDQvtC10LrRgtC1INC/0YDQuNC80LXQvdC10L3RizogPGI+SFRNTDU8L2I+LCA8Yj5DU1MzPC9iPiwgPGI+U0FTUzwvYj4sIDxiPkphdmFTY3JpcHQ8L2I+LCA8Yj5XZWJwYWNrPC9iPi48L3A+YCxcbiAgICB9LFxuICAgIGxpbmtHaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vQW5kcmVpTWlsYXNoZXZpY2gvcmFpbmRyb3BzJyxcbiAgICBsaW5rRGVtbzogJ2h0dHBzOi8vYW5kcmVpbWlsYXNoZXZpY2guZ2l0aHViLmlvL3JhaW5kcm9wcy9yYWluZHJvcHMvYnVpbGQvaW5kZXgnLFxuICAgIGF0dHI6ICdkYXRhLWh0bWw9XCJ0cnVlXCIgZGF0YS1jc3M9XCJ0cnVlXCIgZGF0YS1qcz1cInRydWVcIiBkYXRhLXNhc3M9XCJ0cnVlXCIgZGF0YS13ZWJwYWNrPVwidHJ1ZVwiJyxcbiAgfSxcbl07XG5cbmNvbnN0IHNraWxscyA9IFtcbiAgeyBkZXNjcmlwdGlvbjogJ0hUTUw1JywgaWNvbjogJy4uL2Fzc2V0cy9pY29ucy9odG1sNV9pY29uLnBuZycgfSxcbiAgeyBkZXNjcmlwdGlvbjogJ0NTUzMnLCBpY29uOiAnLi4vYXNzZXRzL2ljb25zL2NzczNfaWNvbi5wbmcnIH0sXG4gIHsgZGVzY3JpcHRpb246ICdKYXZhU2NyaXB0JywgaWNvbjogJy4uL2Fzc2V0cy9pY29ucy9qc19pY29uLnBuZycgfSxcbiAgeyBkZXNjcmlwdGlvbjogJ1NBU1MnLCBpY29uOiAnLi4vYXNzZXRzL2ljb25zL3Nhc3NfaWNvbi5wbmcnIH0sXG4gIHsgZGVzY3JpcHRpb246ICdHaXQnLCBpY29uOiAnLi4vYXNzZXRzL2ljb25zL2dpdF9pY29uLnBuZycgfSxcbiAgeyBkZXNjcmlwdGlvbjogJ0dpdEh1YicsIGljb246ICcuLi9hc3NldHMvaWNvbnMvZ2l0aHViX2ljb24ucG5nJyB9LFxuICB7IGRlc2NyaXB0aW9uOiAnV2VicGFjaycsIGljb246ICcuLi9hc3NldHMvaWNvbnMvd2VicGFja19pY29uLnBuZycgfSxcbl07XG5cbmNvbnN0IHRlY2hub2xvZ2llcyA9IFtcbiAgeyBuYW1lOiAnQWxsJyB9LFxuICB7IG5hbWU6ICdIVE1MNScgfSxcbiAgeyBuYW1lOiAnQ1NTMycgfSxcbiAgeyBuYW1lOiAnU0FTUycgfSxcbiAgeyBuYW1lOiAnSlMnIH0sXG4gIHsgbmFtZTogJ1dlYnBhY2snIH0sXG5dO1xuXG5jb25zdCBwYWdlQ29udGVudCA9IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHF1b3RlLXByb3BzXG4gICdydSc6IHtcbiAgICBob21lOiAn0JTQvtC80L7QuScsXG4gICAgc2tpbGxzOiAn0J3QsNCy0YvQutC4JyxcbiAgICBwb3J0Zm9saW86ICfQn9C+0YDRgtGE0L7Qu9C40L4nLFxuICAgIGFib3V0OiAn0J7QsdC+INC80L3QtScsXG4gICAgY29udGFjdHM6ICfQmtC+0L3RgtCw0LrRgtGLJyxcbiAgICBzdHJpbmdzOiBbJ9Cf0YDQuNCy0LXRgiEnLFxuICAgICAgJ9CvINCQ0L3QtNGA0LXQuSEnLFxuICAgICAgJ9C4INGPIFdlYiDRgNCw0LfRgNCw0LHQvtGC0YfQuNC6IScsXG4gICAgXSxcbiAgICBsZWFybjogJzxwPtCj0LfQvdCw0YLRjCDQsdC+0LvRjNGI0LU8L3A+JyxcbiAgICBza2lsbHNIZWFkZXI6ICfQotC10YXQvdC40YfQtdGB0LrQuNC1INC90LDQstGL0LrQuCcsXG4gICAgbmFtZTogJzxwPtCY0LzRjzwvcD4nLFxuICAgIG5hbWVQbGFjZWhvbGRlcjogJ9CS0LLQtdC00LjRgtC1INCy0LDRiNC1INC40LzRjycsXG4gICAgZW1haWxQbGFjZWhvbGRlcjogJ9CS0LLQtdC00LjRgtC1INCy0LDRiCBlbWFpbCcsXG4gICAgdGV4dGFyZWE6ICfQktCw0YjQtSDRgdC+0L7QsdGJ0LXQvdC40LUnLFxuICAgIHRleHRhcmVhUGxhY2Vob2xkZXI6ICfQktCy0LXQtNC40YLQtSDQstCw0YjQtSDRgdC+0L7QsdGJ0LXQvdC40LUnLFxuICAgIHN1Ym1pdDogJ9Ce0YLQv9GA0LDQstC40YLRjCDRgdC+0L7QsdGJ0LXQvdC40LUnLFxuICAgIGFib3V0RGVzY3JpcHRpb246IGA8Yj7Qn9Cw0YDQsCDRgdC70L7QsiDQvtCx0L4g0LzQvdC1OjwvYj48YnIvPlxuICAgIDx1bD5cbiAgICA8bGk+INCe0LrQvtC90YfQuNC7INCw0LLQuNCw0YbQuNC+0L3QvdGL0Lkg0YTQsNC60YPQu9GM0YLQtdGCINCS0L7QtdC90L3QvtC5INCw0LrQsNC00LXQvNC40Lgg0KDQtdGB0L/Rg9Cx0LvQuNC60Lgg0JHQtdC70LDRgNGD0YHRjC48L2xpPlxuICAgIDxsaT4g0KHQv9C10YbQuNCw0LvRjNC90L7RgdGC0Yw6INCi0LXRhdC90LjRh9C10YHQutCw0Y8g0Y3QutGB0L/Qu9GD0LDRgtCw0YbQuNGPINC/0LjQu9C+0YLQuNGA0YPQtdC80YvRhSDQu9C10YLQsNGC0LXQu9GM0L3Ri9GFINCw0L/Qv9Cw0YDQsNGC0L7QsiDQuCDQuNGFINGB0LjQu9C+0LLRi9GFINGD0YHRgtCw0L3QvtCy0L7Qui48L2xpPlxuICAgIDxsaT4g0JIg0LDQstC40LDRhtC40Lgg0LTQvtCx0LjQu9GB0Y8g0LHQvtC70YzRiNC40YUg0LLRi9GB0L7Rgiwg0YHRgtCw0LIg0LjQvdC20LXQvdC10YDQvtC8INC40L3QttC10L3QtdGA0L3Qvi3QsNCy0LjQsNGG0LjQvtC90L3QvtC5INGB0LvRg9C20LHRiyDQsNCy0LjQsNGG0LjQvtC90L3QvtC5INGN0YHQutCw0LTRgNC40LvRjNC4ICjQvdCwINC40LstNzYsINCQ0L0tMjYpLCDQvdC+INGN0YLQviDQv9C+0YLQvtC70L7QuiDRgNCw0LfQstC40YLQuNGPINCw0LLQuNCw0YbQuNC+0L3QvdC+0LPQviDQuNC90LbQtdC90LXRgNCwLjwvbGk+XG4gICAgPGxpPiDQoNC10YjQuNC7INC+0YLQutGA0YvRgtGMINC00LvRjyDRgdC10LHRjyDQvdC+0LLRi9C1INCz0L7RgNC40LfQvtC90YLRiyDQuCDQv9GA0L7RiNC10Lsg0LrRg9GA0YHRizogU2tpbGxVcChVa3JhaW5lKSAtIEJhc2ljIFdlYiBhbmQgU1FMIGZvciBzb2Z0d2FyZVxuICAgIHRlc3RpbmcgKDIwMjApINC4IMKrVGhlIFJvbGxpbmcgU2NvcGVzIHNjaG9vbMK7IChFUEFNIFN5c3RlbXMpXG4gICAgKDIwMjEpLjwvbGk+XG4gICAgPGxpPiBFbmdsaXNoOiBBMiAtIFByZS1pbnRlcm1lZGlhdGUuPC9saT48L3VsPmAsXG4gIH0sXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBxdW90ZS1wcm9wc1xuICAnZW4nOiB7XG4gICAgaG9tZTogJ0hvbWUnLFxuICAgIHNraWxsczogJ1NraWxscycsXG4gICAgcG9ydGZvbGlvOiAnUG9ydGZpbGlvJyxcbiAgICBhYm91dDogJ0Fib3V0IG1lJyxcbiAgICBjb250YWN0czogJ0NvbnRhY3RzJyxcbiAgICBzdHJpbmdzOiBbJ0hlbGxvIScsXG4gICAgICBcIkknbSBBbmRyZWkhXCIsXG4gICAgICBcIkknbSBhIFdlYiBEZXZlbG9wZXIhXCIsXG4gICAgXSxcbiAgICBsZWFybjogJzxwPkxlYXJuIG1vcmUgYWJvdXQgd2hhdCBJIGRvPC9wPicsXG4gICAgc2tpbGxzSGVhZGVyOiAnU2tpbGxzJyxcbiAgICBuYW1lOiAnPHA+TmFtZTwvcD4nLFxuICAgIG5hbWVQbGFjZWhvbGRlcjogJ0VudGVyIHlvdXIgbmFtZScsXG4gICAgZW1haWxQbGFjZWhvbGRlcjogJ0VudGVyIHlvdXIgZW1haWwnLFxuICAgIHRleHRhcmVhOiAnWW91ciBtZXNzYWdlJyxcbiAgICB0ZXh0YXJlYVBsYWNlaG9sZGVyOiAnRW50ZXIgeW91ciBtZXNzYWdlJyxcbiAgICBzdWJtaXQ6ICdTZW5kIG1lc3NhZ2UnLFxuICAgIGFib3V0RGVzY3JpcHRpb246IGA8Yj5BIGNvdXBsZSBvZiB3b3JkcyBhYm91dCBtZTo8L2I+PGJyLz5cbiAgICA8dWw+XG4gICAgPGxpPkVkdWNhdGlvbjogTWlsaXRhcnkgQWNhZGVteSBvZiB0aGUgUmVwdWJsaWMgb2YgQmVsYXJ1c1xuICAgICgyMDExKS4gQXZpYXRpb24gZmFjdWx0eS48L2xpPlxuICAgIDxsaT5TcGVjaWFsdHk6IFRlY2huaWNhbCBleHBsb2l0YXRpb24gb2YgbWFubmVkIGFpcmNyYWZ0cyBhbmRcbiAgICB0aGVpciBwb3dlciB1bml0czwvbGk+XG4gICAgPGxpPlByZXZpb3VzIGpvYjogRW5naW5lZXIgb2YgdGhlIGF2aWF0aW9uIGVuZ2luZWVyaW5nIGRlcGFydG1lbnRcbiAgICBvZiB0aGUgYXZpYXRpb24gc3F1YWRyb24gKElMLTc2LCBBbi0yNik8L2xpPlxuICAgIDxsaT5Db3Vyc2VzOiBTa2lsbFVwKFVrcmFpbmUpIC0gQmFzaWMgV2ViIGFuZCBTUUwgZm9yIHNvZnR3YXJlXG4gICAgdGVzdGluZyAoMjAyMCkgYW5kIMKrVGhlIFJvbGxpbmcgU2NvcGVzIHNjaG9vbMK7IChFUEFNIFN5c3RlbXMpXG4gICAgKDIwMjEpLjwvbGk+XG4gICAgPGxpPkVuZ2xpc2g6IEEyIC0gUHJlLWludGVybWVkaWF0ZTwvbGk+PC91bD5gLFxuICB9LFxufTtcblxubGV0IGxhbmd1YWdlID0gJ2VuJztcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgc3RyaW5nczogcGFnZUNvbnRlbnRbYCR7bGFuZ3VhZ2V9YF0uc3RyaW5ncyxcbiAgdHlwZVNwZWVkOiA2MCxcbiAgYmFja0RlbGF5OiAxMjAwLFxuICBiYWNrU3BlZWQ6IDQzLFxuICBsb29wOiB0cnVlLFxuICBmYWRlT3V0OiBmYWxzZSxcbn07XG5cbmxldCB0eXBlZCA9IG5ldyBUeXBlZCgnLnR5cGVkJywgb3B0aW9ucyk7XG5cbmZ1bmN0aW9uIHNldFNraWxscyhkYXRhKSB7XG4gIGRhdGEuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRpdkNvbnRhaW5lci5jbGFzc05hbWUgPSAnc2tpbGxzX2l0ZW0nO1xuICAgIGRpdkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW9zJywgJ2ZsaXAtbGVmdCcpO1xuICAgIGRpdkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW9zLWRlbGF5JywgaW5kZXggKiBza2lsbHNEZWxheSk7XG4gICAgZGl2Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1hb3MtZHVyYXRpb24nLCBhb3NEdXJhdGlvbiAqIDIpO1xuICAgIGRpdi5jbGFzc05hbWUgPSAnc2tpbGxzX2ltYWdlJztcbiAgICBwLmNsYXNzTmFtZSA9ICdza2lsbHNfZGVzY3JpcHRpb24nO1xuICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZWxlbWVudC5pY29ufSlgO1xuICAgIHAudGV4dENvbnRlbnQgPSBlbGVtZW50LmRlc2NyaXB0aW9uO1xuICAgIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChwKTtcbiAgICBza2lsbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2Q29udGFpbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFBvcnRmb2xpb0J1dHRvbihkYXRhKSB7XG4gIGRhdGEuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gJ3BvcnRmb2xpb19idXR0b25faXRlbSc7XG4gICAgZGl2LnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW9zJywgJ2ZhZGUtZG93bicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW9zLWRlbGF5JywgKGluZGV4ICogc2tpbGxzRGVsYXkpIC8gMik7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1hb3MtZHVyYXRpb24nLCBhb3NEdXJhdGlvbik7XG4gICAgcG9ydGZvbGlvQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gIH0pO1xufVxuXG5zZXRTa2lsbHMoc2tpbGxzKTtcbnNldFBvcnRmb2xpb0J1dHRvbih0ZWNobm9sb2dpZXMpO1xuXG5mdW5jdGlvbiBzZXRQb3J0Zm9saW9JdGVtKGRhdGEpIHtcbiAgZGF0YS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGxldCBzaWRlO1xuICAgIGlmIChpbmRleCAlIDIgPT09IDApIHtcbiAgICAgIHNpZGUgPSAnbGVmdCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpZGUgPSAncmlnaHQnO1xuICAgIH1cbiAgICBwb3J0Zm9saW9Db250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGRpdiBjbGFzcz1cInBvcnRmb2xpb19pdGVtXCIgZGF0YS1hb3M9XCJmbGlwLSR7c2lkZX1cIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBkYXRhLWFvcy1hbmNob3ItcGxhY2VtZW50PVwiY2VudGVyLWJvdHRvbSAke3BvcnRmb2xpby5hdHRyfVwiPlxuICAgIDxoMz4ke2VsZW1lbnQubmFtZX08L2gzPlxuICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW9faXRlbV9ib2R5XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvX2l0ZW1faW1hZ2VcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHtlbGVtZW50Lmljb259JylcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW9faXRlbV9kZXNjcmlwdGlvblwiPjxwPiR7ZWxlbWVudC5kZXNjcmlwdGlvbltgJHtsYW5ndWFnZX1gXX08L3A+PC9kaXY+ICBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvX2l0ZW1fYnV0dG9uX2NvbnRhaW5lciBidXR0b25cIiA+XG4gICAgICA8YSBocmVmPVwiJHtlbGVtZW50LmxpbmtEZW1vfVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvX2J1dHRvbl9pdGVtXCI+RGVtbzwvZGl2PlxuICAgICAgPC9hPlxuICAgICAgPGEgaHJlZj1cIiR7ZWxlbWVudC5saW5rR2l0fVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvX2J1dHRvbl9pdGVtXCI+R2l0SHViPC9kaXY+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gIDwvZGl2PmApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyBjb25zdFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfTtcbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNjcm9sbChibG9jaywgZGVsdGFIZWlnaHQgPSBoZWFkZXIub2Zmc2V0SGVpZ2h0KSB7XG4gIHdpbmRvdy5zY3JvbGxUbyh7IGxlZnQ6IDAsIHRvcDogYmxvY2sub2Zmc2V0VG9wIC0gZGVsdGFIZWlnaHQgKyAxLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG59XG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LnR5cGUgPT09ICdpbWFnZScpIHtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWJvdXRfbWVfaW1hZ2VfaXRlbV9sYXJnZScpO1xuICB9IGVsc2Uge1xuICAgIHBob3Rvcy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWJvdXRfbWVfaW1hZ2VfaXRlbV9sYXJnZScpKTtcbiAgfVxufSk7XG5cbmNvbnN0IHNldEJ1dHRvbnNBY3RpdmUgPSAoKSA9PiB7XG4gIGNvbnN0IHNjcm9sbERpc3RhbmNlID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICBwb3J0Zm9saW9CdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGlmIChzY3JvbGxEaXN0YW5jZSA+PSBza2lsbFNlY3Rpb24ub2Zmc2V0VG9wIC0gaGVhZGVyLm9mZnNldEhlaWdodCAmJiBzY3JvbGxEaXN0YW5jZSArIGhlYWRlci5vZmZzZXRIZWlnaHQgPCBwb3J0Zm9saW9TZWN0aW9uLm9mZnNldFRvcCkge1xuICAgIHNraWxsc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfSBlbHNlIHtcbiAgICBza2lsbHNCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH1cbiAgaWYgKHNjcm9sbERpc3RhbmNlID49IHBvcnRmb2xpb1NlY3Rpb24ub2Zmc2V0VG9wIC0gaGVhZGVyLm9mZnNldEhlaWdodCAmJiBzY3JvbGxEaXN0YW5jZSA8PSBwb3J0Zm9saW9TZWN0aW9uLm9mZnNldFRvcCArIHBvcnRmb2xpb1NlY3Rpb24ub2Zmc2V0SGVpZ2h0KSB7XG4gICAgcG9ydGZvbGlvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9XG4gIGlmIChzY3JvbGxEaXN0YW5jZSA+PSBhYm91dE1lU2VjdGlvbi5vZmZzZXRUb3AgLSBoZWFkZXIub2Zmc2V0SGVpZ2h0ICYmIHNjcm9sbERpc3RhbmNlIDw9IGFib3V0TWVTZWN0aW9uLm9mZnNldFRvcCArIGFib3V0TWVTZWN0aW9uLm9mZnNldEhlaWdodCkge1xuICAgIGFib3V0TWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH0gZWxzZSB7XG4gICAgYWJvdXRNZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfVxuICBpZiAoc2Nyb2xsRGlzdGFuY2UgPj0gY29udGFjdFNlY3Rpb24ub2Zmc2V0VG9wIC0gaGVhZGVyLm9mZnNldEhlaWdodCAmJiBzY3JvbGxEaXN0YW5jZSA8PSBjb250YWN0U2VjdGlvbi5vZmZzZXRUb3AgKyBjb250YWN0U2VjdGlvbi5vZmZzZXRIZWlnaHQpIHtcbiAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9IGVsc2Uge1xuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH1cbiAgaWYgKHNjcm9sbERpc3RhbmNlIDwgc2tpbGxTZWN0aW9uLm9mZnNldFRvcCAtIGhlYWRlci5vZmZzZXRIZWlnaHQpIHtcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXRMYW5ndWFnZSgpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5ndWFnZScpID09PSBudWxsKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmd1YWdlJywgJ2VuJyk7XG4gIH0gZWxzZSB7XG4gICAgbGFuZ3VhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ3VhZ2UnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRQYWdlQ29udGVudCgpIHtcbiAgdHlwZWQuZGVzdHJveSgpO1xuICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gcGFnZUNvbnRlbnRbYCR7bGFuZ3VhZ2V9YF0uaG9tZTtcbiAgc2tpbGxzQnV0dG9uLnRleHRDb250ZW50ID0gcGFnZUNvbnRlbnRbYCR7bGFuZ3VhZ2V9YF0uc2tpbGxzO1xuICBwb3J0Zm9saW9CdXR0b24udGV4dENvbnRlbnQgPSBwYWdlQ29udGVudFtgJHtsYW5ndWFnZX1gXS5wb3J0Zm9saW87XG4gIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSBwYWdlQ29udGVudFtgJHtsYW5ndWFnZX1gXS5jb250YWN0cztcbiAgYWJvdXRNZUJ1dHRvbi50ZXh0Q29udGVudCA9IHBhZ2VDb250ZW50W2Ake2xhbmd1YWdlfWBdLmFib3V0O1xuICAvLyBoZWxsby50ZXh0Q29udGVudCA9IHBhZ2VDb250ZW50W2Ake2xhbmd1YWdlfWBdLnN0cmluZ3NbMF07XG4gIGxlYXJuTW9yZUJ1dHRvbi5pbm5lckhUTUwgPSBwYWdlQ29udGVudFtgJHtsYW5ndWFnZX1gXS5sZWFybjtcbiAgc2tpbGxzSGVhZGVyLnRleHRDb250ZW50ID0gcGFnZUNvbnRlbnRbYCR7bGFuZ3VhZ2V9YF0uc2tpbGxzSGVhZGVyO1xuICBwb3J0Zm9saW9IZWFkZXIudGV4dENvbnRlbnQgPSBwYWdlQ29udGVudFtgJHtsYW5ndWFnZX1gXS5wb3J0Zm9saW87XG4gIGFib3V0TWVIZWFkZXIudGV4dENvbnRlbnQgPSBwYWdlQ29udGVudFtgJHtsYW5ndWFnZX1gXS5hYm91dDtcbiAgY29udGFjdHNIZWFkZXIudGV4dENvbnRlbnQgPSBwYWdlQ29udGVudFtgJHtsYW5ndWFnZX1gXS5jb250YWN0cztcbiAgaW5wdXROYW1lLnBsYWNlaG9sZGVyID0gcGFnZUNvbnRlbnRbYCR7bGFuZ3VhZ2V9YF0ubmFtZVBsYWNlaG9sZGVyO1xuICBsYWJlbE5hbWUuaW5uZXJIVE1MID0gcGFnZUNvbnRlbnRbYCR7bGFuZ3VhZ2V9YF0ubmFtZTtcbiAgaW5wdXRNYWlsLnBsYWNlaG9sZGVyID0gcGFnZUNvbnRlbnRbYCR7bGFuZ3VhZ2V9YF0uZW1haWxQbGFjZWhvbGRlcjtcbiAgaW5wdXRNZXNzYWdlLnRleHRDb250ZW50ID0gcGFnZUNvbnRlbnRbYCR7bGFuZ3VhZ2V9YF0udGV4dGFyZWE7XG4gIGxhYmVsTWVzc2FnZS50ZXh0Q29udGVudCA9IHBhZ2VDb250ZW50W2Ake2xhbmd1YWdlfWBdLnRleHRhcmVhUGxhY2Vob2xkZXI7XG4gIHN1Ym1pdC52YWx1ZSA9IHBhZ2VDb250ZW50W2Ake2xhbmd1YWdlfWBdLnRleHRhcmVhUGxhY2Vob2xkZXI7XG4gIG9wdGlvbnMuc3RyaW5ncyA9IHBhZ2VDb250ZW50W2Ake2xhbmd1YWdlfWBdLnN0cmluZ3M7XG4gIGFib3V0TWVEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBwYWdlQ29udGVudFtgJHtsYW5ndWFnZX1gXS5hYm91dERlc2NyaXB0aW9uO1xuICB0eXBlZCA9IG5ldyBUeXBlZCgnLnR5cGVkJywgb3B0aW9ucyk7XG4gIGlmIChsYW5ndWFnZSA9PT0gJ2VuJykge1xuICAgIGxhbmdCdXR0b25Fbi5jbGFzc0xpc3QuYWRkKCdsYW5nX2FjdGl2ZScpO1xuICAgIGxhbmdCdXR0b25SdS5jbGFzc0xpc3QucmVtb3ZlKCdsYW5nX2FjdGl2ZScpO1xuICB9IGVsc2Uge1xuICAgIGxhbmdCdXR0b25SdS5jbGFzc0xpc3QuYWRkKCdsYW5nX2FjdGl2ZScpO1xuICAgIGxhbmdCdXR0b25Fbi5jbGFzc0xpc3QucmVtb3ZlKCdsYW5nX2FjdGl2ZScpO1xuICB9XG59XG5cbmdldExhbmd1YWdlKCk7XG5zZXRQYWdlQ29udGVudCgpO1xuc2V0UG9ydGZvbGlvSXRlbShwb3J0Zm9saW8pO1xuXG5za2lsbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzY3JvbGwoc2tpbGxTZWN0aW9uKSk7XG5sZWFybk1vcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzY3JvbGwoc2tpbGxTZWN0aW9uKSk7XG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2Nyb2xsKDAsIDApKTtcbnBvcnRmb2xpb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNjcm9sbChwb3J0Zm9saW9TZWN0aW9uKSk7XG5hYm91dE1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2Nyb2xsKGFib3V0TWVTZWN0aW9uKSk7XG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2Nyb2xsKGNvbnRhY3RTZWN0aW9uKSk7XG5cbmxhbmdCdXR0b25Fbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcG9ydGZvbGlvQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBsYW5ndWFnZSA9IGxhbmdCdXR0b25Fbi5kYXRhc2V0Lmxhbmc7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5ndWFnZScsICdlbicpO1xuICBzZXRQYWdlQ29udGVudCgpO1xuICBzZXRQb3J0Zm9saW9JdGVtKHBvcnRmb2xpbyk7XG59KTtcblxubGFuZ0J1dHRvblJ1LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwb3J0Zm9saW9Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGxhbmd1YWdlID0gbGFuZ0J1dHRvblJ1LmRhdGFzZXQubGFuZztcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmd1YWdlJywgJ3J1Jyk7XG4gIHNldFBhZ2VDb250ZW50KCk7XG4gIHNldFBvcnRmb2xpb0l0ZW0ocG9ydGZvbGlvKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2Uoc2V0QnV0dG9uc0FjdGl2ZSwgNDAwKSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zY3JpcHRzL3NjcmlwdC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=