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
    <li> В авиации добился больших высот, став инженером инженерно-авиационной службы авиационной эскадрильи (на Ил-76, Ан-26), но это потолок развития авиационного инженера.</li>
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
    their power units.</li>
    <li>Previous job: Engineer of the aviation engineering department
    of the aviation squadron (IL-76, An-26).</li>
    <li>Courses: SkillUp(Ukraine) - Basic Web and SQL for software
    testing (2020) and «The Rolling Scopes school» (EPAM Systems)
    (2021).</li>
    <li>English: A2 - Pre-intermediate.</li></ul>`,
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
/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */




const skillsContainer = document.querySelector('.skills_wrapper');
const portfolioButtonContainer = document.querySelector('.portfolio_button_container');
const portfolioContainer = document.querySelector('.portfolio_wrapper');
const skillsDelay = 200;
const aosDuration = 500;
const portfolioDelay = 500;
const photos = Array.from(document.querySelectorAll('.about_me_image_item'));
const preloader = document.querySelector('.preloader_wrapper');
const circle = document.querySelector('.circle');

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
      side = 'up';
    } else {
      side = 'down';
    }
    portfolioContainer.insertAdjacentHTML('beforeend', `<div class="portfolio_item" data-aos="flip-${side}" 
    data-aos-anchor-placement="bottom-center" data-aos-duration="1000" data-aos-anchor=".portfolio_header" data-aos-delay="${index * portfolioDelay}"
    data-aos-anchor-placement="center-bottom " ${_content_js__WEBPACK_IMPORTED_MODULE_2__.portfolio[index].attr}>
    <h3>${element.name}</h3>
    <div class="portfolio_item_body">
      <div class="portfolio_item_image" style="background-image: url('${element.icon}')" data-type='image' data-place='portfolio'></div>
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

const setButtonsActive = () => {
  const images = Array.from(document.querySelectorAll('.portfolio_item_image'));
  photos.forEach((el) => el.classList.remove('about_me_image_item_large'));
  images.forEach((el) => el.classList.remove('portfolio_item_image_active'));
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

document.body.addEventListener('click', (event) => {
  const images = Array.from(document.querySelectorAll('.portfolio_item_image'));
  if (event.target.dataset.type === 'image' && event.target.dataset.place === 'about') {
    event.target.classList.toggle('about_me_image_item_large');
  } else if (event.target.dataset.type === 'image' && event.target.dataset.place === 'portfolio') {
    event.target.classList.toggle('portfolio_item_image_active');
  } else {
    photos.forEach((el) => el.classList.remove('about_me_image_item_large'));
    images.forEach((el) => el.classList.remove('portfolio_item_image_active'));
  }
});

window.addEventListener('load', () => {
  circle.classList.remove('loader');
  preloader.classList.toggle('preloader_hidden');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3R5cGVkLmpzL2xpYi90eXBlZC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zY3JpcHRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc2NyaXB0cy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBeUQ7QUFDN0Q7QUFDQSxNQUFNLEVBS3NCO0FBQzVCLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsOEJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsOEJBQW1CO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw4QkFBbUI7QUFD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Q3ZCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Is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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKiFcbiAqIFxuICogICB0eXBlZC5qcyAtIEEgSmF2YVNjcmlwdCBUeXBpbmcgQW5pbWF0aW9uIExpYnJhcnlcbiAqICAgQXV0aG9yOiBNYXR0IEJvbGR0IDxtZUBtYXR0Ym9sZHQuY29tPlxuICogICBWZXJzaW9uOiB2Mi4wLjExXG4gKiAgIFVybDogaHR0cHM6Ly9naXRodWIuY29tL21hdHRib2xkdC90eXBlZC5qc1xuICogICBMaWNlbnNlKHMpOiBNSVRcbiAqIFxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJUeXBlZFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUeXBlZFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblx0XG5cdHZhciBfaW5pdGlhbGl6ZXJKcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdFxuXHR2YXIgX2h0bWxQYXJzZXJKcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdFxuXHQvKipcblx0ICogV2VsY29tZSB0byBUeXBlZC5qcyFcblx0ICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRJZCBIVE1MIGVsZW1lbnQgSUQgX09SXyBIVE1MIGVsZW1lbnRcblx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgb3B0aW9ucyBvYmplY3Rcblx0ICogQHJldHVybnMge29iamVjdH0gYSBuZXcgVHlwZWQgb2JqZWN0XG5cdCAqL1xuXHRcblx0dmFyIFR5cGVkID0gKGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBUeXBlZChlbGVtZW50SWQsIG9wdGlvbnMpIHtcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUeXBlZCk7XG5cdFxuXHQgICAgLy8gSW5pdGlhbGl6ZSBpdCB1cFxuXHQgICAgX2luaXRpYWxpemVySnMuaW5pdGlhbGl6ZXIubG9hZCh0aGlzLCBvcHRpb25zLCBlbGVtZW50SWQpO1xuXHQgICAgLy8gQWxsIHN5c3RlbXMgZ28hXG5cdCAgICB0aGlzLmJlZ2luKCk7XG5cdCAgfVxuXHRcblx0ICAvKipcblx0ICAgKiBUb2dnbGUgc3RhcnQoKSBhbmQgc3RvcCgpIG9mIHRoZSBUeXBlZCBpbnN0YW5jZVxuXHQgICAqIEBwdWJsaWNcblx0ICAgKi9cblx0XG5cdCAgX2NyZWF0ZUNsYXNzKFR5cGVkLCBbe1xuXHQgICAga2V5OiAndG9nZ2xlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGUoKSB7XG5cdCAgICAgIHRoaXMucGF1c2Uuc3RhdHVzID8gdGhpcy5zdGFydCgpIDogdGhpcy5zdG9wKCk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBTdG9wIHR5cGluZyAvIGJhY2tzcGFjaW5nIGFuZCBlbmFibGUgY3Vyc29yIGJsaW5raW5nXG5cdCAgICAgKiBAcHVibGljXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzdG9wJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuXHQgICAgICBpZiAodGhpcy50eXBpbmdDb21wbGV0ZSkgcmV0dXJuO1xuXHQgICAgICBpZiAodGhpcy5wYXVzZS5zdGF0dXMpIHJldHVybjtcblx0ICAgICAgdGhpcy50b2dnbGVCbGlua2luZyh0cnVlKTtcblx0ICAgICAgdGhpcy5wYXVzZS5zdGF0dXMgPSB0cnVlO1xuXHQgICAgICB0aGlzLm9wdGlvbnMub25TdG9wKHRoaXMuYXJyYXlQb3MsIHRoaXMpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogU3RhcnQgdHlwaW5nIC8gYmFja3NwYWNpbmcgYWZ0ZXIgYmVpbmcgc3RvcHBlZFxuXHQgICAgICogQHB1YmxpY1xuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnc3RhcnQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuXHQgICAgICBpZiAodGhpcy50eXBpbmdDb21wbGV0ZSkgcmV0dXJuO1xuXHQgICAgICBpZiAoIXRoaXMucGF1c2Uuc3RhdHVzKSByZXR1cm47XG5cdCAgICAgIHRoaXMucGF1c2Uuc3RhdHVzID0gZmFsc2U7XG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnR5cGV3cml0ZSkge1xuXHQgICAgICAgIHRoaXMudHlwZXdyaXRlKHRoaXMucGF1c2UuY3VyU3RyaW5nLCB0aGlzLnBhdXNlLmN1clN0clBvcyk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy5iYWNrc3BhY2UodGhpcy5wYXVzZS5jdXJTdHJpbmcsIHRoaXMucGF1c2UuY3VyU3RyUG9zKTtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLm9wdGlvbnMub25TdGFydCh0aGlzLmFycmF5UG9zLCB0aGlzKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIERlc3Ryb3kgdGhpcyBpbnN0YW5jZSBvZiBUeXBlZFxuXHQgICAgICogQHB1YmxpY1xuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnZGVzdHJveScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0ICAgICAgdGhpcy5yZXNldChmYWxzZSk7XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vbkRlc3Ryb3kodGhpcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBSZXNldCBUeXBlZCBhbmQgb3B0aW9uYWxseSByZXN0YXJ0c1xuXHQgICAgICogQHBhcmFtIHtib29sZWFufSByZXN0YXJ0XG5cdCAgICAgKiBAcHVibGljXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdyZXNldCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG5cdCAgICAgIHZhciByZXN0YXJ0ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFyZ3VtZW50c1swXTtcblx0XG5cdCAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lb3V0KTtcblx0ICAgICAgdGhpcy5yZXBsYWNlVGV4dCgnJyk7XG5cdCAgICAgIGlmICh0aGlzLmN1cnNvciAmJiB0aGlzLmN1cnNvci5wYXJlbnROb2RlKSB7XG5cdCAgICAgICAgdGhpcy5jdXJzb3IucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmN1cnNvcik7XG5cdCAgICAgICAgdGhpcy5jdXJzb3IgPSBudWxsO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMuc3RyUG9zID0gMDtcblx0ICAgICAgdGhpcy5hcnJheVBvcyA9IDA7XG5cdCAgICAgIHRoaXMuY3VyTG9vcCA9IDA7XG5cdCAgICAgIGlmIChyZXN0YXJ0KSB7XG5cdCAgICAgICAgdGhpcy5pbnNlcnRDdXJzb3IoKTtcblx0ICAgICAgICB0aGlzLm9wdGlvbnMub25SZXNldCh0aGlzKTtcblx0ICAgICAgICB0aGlzLmJlZ2luKCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEJlZ2lucyB0aGUgdHlwaW5nIGFuaW1hdGlvblxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2JlZ2luJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBiZWdpbigpIHtcblx0ICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vbkJlZ2luKHRoaXMpO1xuXHQgICAgICB0aGlzLnR5cGluZ0NvbXBsZXRlID0gZmFsc2U7XG5cdCAgICAgIHRoaXMuc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCh0aGlzKTtcblx0ICAgICAgdGhpcy5pbnNlcnRDdXJzb3IoKTtcblx0ICAgICAgaWYgKHRoaXMuYmluZElucHV0Rm9jdXNFdmVudHMpIHRoaXMuYmluZEZvY3VzRXZlbnRzKCk7XG5cdCAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIHNvbWUgdGV4dCBpbiB0aGUgZWxlbWVudCwgaWYgeWVzIHN0YXJ0IGJ5IGJhY2tzcGFjaW5nIHRoZSBkZWZhdWx0IG1lc3NhZ2Vcblx0ICAgICAgICBpZiAoIV90aGlzLmN1cnJlbnRFbENvbnRlbnQgfHwgX3RoaXMuY3VycmVudEVsQ29udGVudC5sZW5ndGggPT09IDApIHtcblx0ICAgICAgICAgIF90aGlzLnR5cGV3cml0ZShfdGhpcy5zdHJpbmdzW190aGlzLnNlcXVlbmNlW190aGlzLmFycmF5UG9zXV0sIF90aGlzLnN0clBvcyk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIC8vIFN0YXJ0IHR5cGluZ1xuXHQgICAgICAgICAgX3RoaXMuYmFja3NwYWNlKF90aGlzLmN1cnJlbnRFbENvbnRlbnQsIF90aGlzLmN1cnJlbnRFbENvbnRlbnQubGVuZ3RoKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0sIHRoaXMuc3RhcnREZWxheSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBDYWxsZWQgZm9yIGVhY2ggY2hhcmFjdGVyIHR5cGVkXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAndHlwZXdyaXRlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB0eXBld3JpdGUoY3VyU3RyaW5nLCBjdXJTdHJQb3MpIHtcblx0ICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cdFxuXHQgICAgICBpZiAodGhpcy5mYWRlT3V0ICYmIHRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuZmFkZU91dENsYXNzKSkge1xuXHQgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmZhZGVPdXRDbGFzcyk7XG5cdCAgICAgICAgaWYgKHRoaXMuY3Vyc29yKSB0aGlzLmN1cnNvci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZmFkZU91dENsYXNzKTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgdmFyIGh1bWFuaXplID0gdGhpcy5odW1hbml6ZXIodGhpcy50eXBlU3BlZWQpO1xuXHQgICAgICB2YXIgbnVtQ2hhcnMgPSAxO1xuXHRcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzID09PSB0cnVlKSB7XG5cdCAgICAgICAgdGhpcy5zZXRQYXVzZVN0YXR1cyhjdXJTdHJpbmcsIGN1clN0clBvcywgdHJ1ZSk7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICAvLyBjb250YWluIHR5cGluZyBmdW5jdGlvbiBpbiBhIHRpbWVvdXQgaHVtYW5pemUnZCBkZWxheVxuXHQgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAvLyBza2lwIG92ZXIgYW55IEhUTUwgY2hhcnNcblx0ICAgICAgICBjdXJTdHJQb3MgPSBfaHRtbFBhcnNlckpzLmh0bWxQYXJzZXIudHlwZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgX3RoaXMyKTtcblx0XG5cdCAgICAgICAgdmFyIHBhdXNlVGltZSA9IDA7XG5cdCAgICAgICAgdmFyIHN1YnN0ciA9IGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zKTtcblx0ICAgICAgICAvLyBjaGVjayBmb3IgYW4gZXNjYXBlIGNoYXJhY3RlciBiZWZvcmUgYSBwYXVzZSB2YWx1ZVxuXHQgICAgICAgIC8vIGZvcm1hdDogXFxeXFxkKyAuLiBlZzogXjEwMDAgLi4gc2hvdWxkIGJlIGFibGUgdG8gcHJpbnQgdGhlIF4gdG9vIHVzaW5nIF5eXG5cdCAgICAgICAgLy8gc2luZ2xlIF4gYXJlIHJlbW92ZWQgZnJvbSBzdHJpbmdcblx0ICAgICAgICBpZiAoc3Vic3RyLmNoYXJBdCgwKSA9PT0gJ14nKSB7XG5cdCAgICAgICAgICBpZiAoL15cXF5cXGQrLy50ZXN0KHN1YnN0cikpIHtcblx0ICAgICAgICAgICAgdmFyIHNraXAgPSAxOyAvLyBza2lwIGF0IGxlYXN0IDFcblx0ICAgICAgICAgICAgc3Vic3RyID0gL1xcZCsvLmV4ZWMoc3Vic3RyKVswXTtcblx0ICAgICAgICAgICAgc2tpcCArPSBzdWJzdHIubGVuZ3RoO1xuXHQgICAgICAgICAgICBwYXVzZVRpbWUgPSBwYXJzZUludChzdWJzdHIpO1xuXHQgICAgICAgICAgICBfdGhpczIudGVtcG9yYXJ5UGF1c2UgPSB0cnVlO1xuXHQgICAgICAgICAgICBfdGhpczIub3B0aW9ucy5vblR5cGluZ1BhdXNlZChfdGhpczIuYXJyYXlQb3MsIF90aGlzMik7XG5cdCAgICAgICAgICAgIC8vIHN0cmlwIG91dCB0aGUgZXNjYXBlIGNoYXJhY3RlciBhbmQgcGF1c2UgdmFsdWUgc28gdGhleSdyZSBub3QgcHJpbnRlZFxuXHQgICAgICAgICAgICBjdXJTdHJpbmcgPSBjdXJTdHJpbmcuc3Vic3RyaW5nKDAsIGN1clN0clBvcykgKyBjdXJTdHJpbmcuc3Vic3RyaW5nKGN1clN0clBvcyArIHNraXApO1xuXHQgICAgICAgICAgICBfdGhpczIudG9nZ2xlQmxpbmtpbmcodHJ1ZSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICAvLyBjaGVjayBmb3Igc2tpcCBjaGFyYWN0ZXJzIGZvcm1hdHRlZCBhc1xuXHQgICAgICAgIC8vIFwidGhpcyBpcyBhIGBzdHJpbmcgdG8gcHJpbnQgTk9XYCAuLi5cIlxuXHQgICAgICAgIGlmIChzdWJzdHIuY2hhckF0KDApID09PSAnYCcpIHtcblx0ICAgICAgICAgIHdoaWxlIChjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcyArIG51bUNoYXJzKS5jaGFyQXQoMCkgIT09ICdgJykge1xuXHQgICAgICAgICAgICBudW1DaGFycysrO1xuXHQgICAgICAgICAgICBpZiAoY3VyU3RyUG9zICsgbnVtQ2hhcnMgPiBjdXJTdHJpbmcubGVuZ3RoKSBicmVhaztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIC8vIHN0cmlwIG91dCB0aGUgZXNjYXBlIGNoYXJhY3RlcnMgYW5kIGFwcGVuZCBhbGwgdGhlIHN0cmluZyBpbiBiZXR3ZWVuXG5cdCAgICAgICAgICB2YXIgc3RyaW5nQmVmb3JlU2tpcCA9IGN1clN0cmluZy5zdWJzdHJpbmcoMCwgY3VyU3RyUG9zKTtcblx0ICAgICAgICAgIHZhciBzdHJpbmdTa2lwcGVkID0gY3VyU3RyaW5nLnN1YnN0cmluZyhzdHJpbmdCZWZvcmVTa2lwLmxlbmd0aCArIDEsIGN1clN0clBvcyArIG51bUNoYXJzKTtcblx0ICAgICAgICAgIHZhciBzdHJpbmdBZnRlclNraXAgPSBjdXJTdHJpbmcuc3Vic3RyaW5nKGN1clN0clBvcyArIG51bUNoYXJzICsgMSk7XG5cdCAgICAgICAgICBjdXJTdHJpbmcgPSBzdHJpbmdCZWZvcmVTa2lwICsgc3RyaW5nU2tpcHBlZCArIHN0cmluZ0FmdGVyU2tpcDtcblx0ICAgICAgICAgIG51bUNoYXJzLS07XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICAvLyB0aW1lb3V0IGZvciBhbnkgcGF1c2UgYWZ0ZXIgYSBjaGFyYWN0ZXJcblx0ICAgICAgICBfdGhpczIudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgLy8gQWNjb3VudHMgZm9yIGJsaW5raW5nIHdoaWxlIHBhdXNlZFxuXHQgICAgICAgICAgX3RoaXMyLnRvZ2dsZUJsaW5raW5nKGZhbHNlKTtcblx0XG5cdCAgICAgICAgICAvLyBXZSdyZSBkb25lIHdpdGggdGhpcyBzZW50ZW5jZSFcblx0ICAgICAgICAgIGlmIChjdXJTdHJQb3MgPj0gY3VyU3RyaW5nLmxlbmd0aCkge1xuXHQgICAgICAgICAgICBfdGhpczIuZG9uZVR5cGluZyhjdXJTdHJpbmcsIGN1clN0clBvcyk7XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBfdGhpczIua2VlcFR5cGluZyhjdXJTdHJpbmcsIGN1clN0clBvcywgbnVtQ2hhcnMpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgLy8gZW5kIG9mIGNoYXJhY3RlciBwYXVzZVxuXHQgICAgICAgICAgaWYgKF90aGlzMi50ZW1wb3JhcnlQYXVzZSkge1xuXHQgICAgICAgICAgICBfdGhpczIudGVtcG9yYXJ5UGF1c2UgPSBmYWxzZTtcblx0ICAgICAgICAgICAgX3RoaXMyLm9wdGlvbnMub25UeXBpbmdSZXN1bWVkKF90aGlzMi5hcnJheVBvcywgX3RoaXMyKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9LCBwYXVzZVRpbWUpO1xuXHRcblx0ICAgICAgICAvLyBodW1hbml6ZWQgdmFsdWUgZm9yIHR5cGluZ1xuXHQgICAgICB9LCBodW1hbml6ZSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBDb250aW51ZSB0byB0aGUgbmV4dCBzdHJpbmcgJiBiZWdpbiB0eXBpbmdcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdrZWVwVHlwaW5nJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBrZWVwVHlwaW5nKGN1clN0cmluZywgY3VyU3RyUG9zLCBudW1DaGFycykge1xuXHQgICAgICAvLyBjYWxsIGJlZm9yZSBmdW5jdGlvbnMgaWYgYXBwbGljYWJsZVxuXHQgICAgICBpZiAoY3VyU3RyUG9zID09PSAwKSB7XG5cdCAgICAgICAgdGhpcy50b2dnbGVCbGlua2luZyhmYWxzZSk7XG5cdCAgICAgICAgdGhpcy5vcHRpb25zLnByZVN0cmluZ1R5cGVkKHRoaXMuYXJyYXlQb3MsIHRoaXMpO1xuXHQgICAgICB9XG5cdCAgICAgIC8vIHN0YXJ0IHR5cGluZyBlYWNoIG5ldyBjaGFyIGludG8gZXhpc3Rpbmcgc3RyaW5nXG5cdCAgICAgIC8vIGN1clN0cmluZzogYXJnLCB0aGlzLmVsLmh0bWw6IG9yaWdpbmFsIHRleHQgaW5zaWRlIGVsZW1lbnRcblx0ICAgICAgY3VyU3RyUG9zICs9IG51bUNoYXJzO1xuXHQgICAgICB2YXIgbmV4dFN0cmluZyA9IGN1clN0cmluZy5zdWJzdHIoMCwgY3VyU3RyUG9zKTtcblx0ICAgICAgdGhpcy5yZXBsYWNlVGV4dChuZXh0U3RyaW5nKTtcblx0ICAgICAgLy8gbG9vcCB0aGUgZnVuY3Rpb25cblx0ICAgICAgdGhpcy50eXBld3JpdGUoY3VyU3RyaW5nLCBjdXJTdHJQb3MpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogV2UncmUgZG9uZSB0eXBpbmcgdGhlIGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnZG9uZVR5cGluZycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZG9uZVR5cGluZyhjdXJTdHJpbmcsIGN1clN0clBvcykge1xuXHQgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblx0XG5cdCAgICAgIC8vIGZpcmVzIGNhbGxiYWNrIGZ1bmN0aW9uXG5cdCAgICAgIHRoaXMub3B0aW9ucy5vblN0cmluZ1R5cGVkKHRoaXMuYXJyYXlQb3MsIHRoaXMpO1xuXHQgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKHRydWUpO1xuXHQgICAgICAvLyBpcyB0aGlzIHRoZSBmaW5hbCBzdHJpbmdcblx0ICAgICAgaWYgKHRoaXMuYXJyYXlQb3MgPT09IHRoaXMuc3RyaW5ncy5sZW5ndGggLSAxKSB7XG5cdCAgICAgICAgLy8gY2FsbGJhY2sgdGhhdCBvY2N1cnMgb24gdGhlIGxhc3QgdHlwZWQgc3RyaW5nXG5cdCAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuXHQgICAgICAgIC8vIHF1aXQgaWYgd2Ugd29udCBsb29wIGJhY2tcblx0ICAgICAgICBpZiAodGhpcy5sb29wID09PSBmYWxzZSB8fCB0aGlzLmN1ckxvb3AgPT09IHRoaXMubG9vcENvdW50KSB7XG5cdCAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIF90aGlzMy5iYWNrc3BhY2UoY3VyU3RyaW5nLCBjdXJTdHJQb3MpO1xuXHQgICAgICB9LCB0aGlzLmJhY2tEZWxheSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBCYWNrc3BhY2VzIDEgY2hhcmFjdGVyIGF0IGEgdGltZVxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2JhY2tzcGFjZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYmFja3NwYWNlKGN1clN0cmluZywgY3VyU3RyUG9zKSB7XG5cdCAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXHRcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzID09PSB0cnVlKSB7XG5cdCAgICAgICAgdGhpcy5zZXRQYXVzZVN0YXR1cyhjdXJTdHJpbmcsIGN1clN0clBvcywgdHJ1ZSk7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0aGlzLmZhZGVPdXQpIHJldHVybiB0aGlzLmluaXRGYWRlT3V0KCk7XG5cdFxuXHQgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKGZhbHNlKTtcblx0ICAgICAgdmFyIGh1bWFuaXplID0gdGhpcy5odW1hbml6ZXIodGhpcy5iYWNrU3BlZWQpO1xuXHRcblx0ICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgY3VyU3RyUG9zID0gX2h0bWxQYXJzZXJKcy5odG1sUGFyc2VyLmJhY2tTcGFjZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgX3RoaXM0KTtcblx0ICAgICAgICAvLyByZXBsYWNlIHRleHQgd2l0aCBiYXNlIHRleHQgKyB0eXBlZCBjaGFyYWN0ZXJzXG5cdCAgICAgICAgdmFyIGN1clN0cmluZ0F0UG9zaXRpb24gPSBjdXJTdHJpbmcuc3Vic3RyKDAsIGN1clN0clBvcyk7XG5cdCAgICAgICAgX3RoaXM0LnJlcGxhY2VUZXh0KGN1clN0cmluZ0F0UG9zaXRpb24pO1xuXHRcblx0ICAgICAgICAvLyBpZiBzbWFydEJhY2sgaXMgZW5hYmxlZFxuXHQgICAgICAgIGlmIChfdGhpczQuc21hcnRCYWNrc3BhY2UpIHtcblx0ICAgICAgICAgIC8vIHRoZSByZW1haW5pbmcgcGFydCBvZiB0aGUgY3VycmVudCBzdHJpbmcgaXMgZXF1YWwgb2YgdGhlIHNhbWUgcGFydCBvZiB0aGUgbmV3IHN0cmluZ1xuXHQgICAgICAgICAgdmFyIG5leHRTdHJpbmcgPSBfdGhpczQuc3RyaW5nc1tfdGhpczQuYXJyYXlQb3MgKyAxXTtcblx0ICAgICAgICAgIGlmIChuZXh0U3RyaW5nICYmIGN1clN0cmluZ0F0UG9zaXRpb24gPT09IG5leHRTdHJpbmcuc3Vic3RyKDAsIGN1clN0clBvcykpIHtcblx0ICAgICAgICAgICAgX3RoaXM0LnN0b3BOdW0gPSBjdXJTdHJQb3M7XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBfdGhpczQuc3RvcE51bSA9IDA7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICAvLyBpZiB0aGUgbnVtYmVyIChpZCBvZiBjaGFyYWN0ZXIgaW4gY3VycmVudCBzdHJpbmcpIGlzXG5cdCAgICAgICAgLy8gbGVzcyB0aGFuIHRoZSBzdG9wIG51bWJlciwga2VlcCBnb2luZ1xuXHQgICAgICAgIGlmIChjdXJTdHJQb3MgPiBfdGhpczQuc3RvcE51bSkge1xuXHQgICAgICAgICAgLy8gc3VidHJhY3QgY2hhcmFjdGVycyBvbmUgYnkgb25lXG5cdCAgICAgICAgICBjdXJTdHJQb3MtLTtcblx0ICAgICAgICAgIC8vIGxvb3AgdGhlIGZ1bmN0aW9uXG5cdCAgICAgICAgICBfdGhpczQuYmFja3NwYWNlKGN1clN0cmluZywgY3VyU3RyUG9zKTtcblx0ICAgICAgICB9IGVsc2UgaWYgKGN1clN0clBvcyA8PSBfdGhpczQuc3RvcE51bSkge1xuXHQgICAgICAgICAgLy8gaWYgdGhlIHN0b3AgbnVtYmVyIGhhcyBiZWVuIHJlYWNoZWQsIGluY3JlYXNlXG5cdCAgICAgICAgICAvLyBhcnJheSBwb3NpdGlvbiB0byBuZXh0IHN0cmluZ1xuXHQgICAgICAgICAgX3RoaXM0LmFycmF5UG9zKys7XG5cdCAgICAgICAgICAvLyBXaGVuIGxvb3BpbmcsIGJlZ2luIGF0IHRoZSBiZWdpbm5pbmcgYWZ0ZXIgYmFja3NwYWNlIGNvbXBsZXRlXG5cdCAgICAgICAgICBpZiAoX3RoaXM0LmFycmF5UG9zID09PSBfdGhpczQuc3RyaW5ncy5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgX3RoaXM0LmFycmF5UG9zID0gMDtcblx0ICAgICAgICAgICAgX3RoaXM0Lm9wdGlvbnMub25MYXN0U3RyaW5nQmFja3NwYWNlZCgpO1xuXHQgICAgICAgICAgICBfdGhpczQuc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCgpO1xuXHQgICAgICAgICAgICBfdGhpczQuYmVnaW4oKTtcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIF90aGlzNC50eXBld3JpdGUoX3RoaXM0LnN0cmluZ3NbX3RoaXM0LnNlcXVlbmNlW190aGlzNC5hcnJheVBvc11dLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICAvLyBodW1hbml6ZWQgdmFsdWUgZm9yIHR5cGluZ1xuXHQgICAgICB9LCBodW1hbml6ZSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBGdWxsIGFuaW1hdGlvbiBpcyBjb21wbGV0ZVxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2NvbXBsZXRlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcblx0ICAgICAgdGhpcy5vcHRpb25zLm9uQ29tcGxldGUodGhpcyk7XG5cdCAgICAgIGlmICh0aGlzLmxvb3ApIHtcblx0ICAgICAgICB0aGlzLmN1ckxvb3ArKztcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLnR5cGluZ0NvbXBsZXRlID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogSGFzIHRoZSB0eXBpbmcgYmVlbiBzdG9wcGVkXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVHlwaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnc2V0UGF1c2VTdGF0dXMnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBhdXNlU3RhdHVzKGN1clN0cmluZywgY3VyU3RyUG9zLCBpc1R5cGluZykge1xuXHQgICAgICB0aGlzLnBhdXNlLnR5cGV3cml0ZSA9IGlzVHlwaW5nO1xuXHQgICAgICB0aGlzLnBhdXNlLmN1clN0cmluZyA9IGN1clN0cmluZztcblx0ICAgICAgdGhpcy5wYXVzZS5jdXJTdHJQb3MgPSBjdXJTdHJQb3M7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBUb2dnbGUgdGhlIGJsaW5raW5nIGN1cnNvclxuXHQgICAgICogQHBhcmFtIHtib29sZWFufSBpc0JsaW5raW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAndG9nZ2xlQmxpbmtpbmcnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZUJsaW5raW5nKGlzQmxpbmtpbmcpIHtcblx0ICAgICAgaWYgKCF0aGlzLmN1cnNvcikgcmV0dXJuO1xuXHQgICAgICAvLyBpZiBpbiBwYXVzZWQgc3RhdGUsIGRvbid0IHRvZ2dsZSBibGlua2luZyBhIDJuZCB0aW1lXG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnN0YXR1cykgcmV0dXJuO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3JCbGlua2luZyA9PT0gaXNCbGlua2luZykgcmV0dXJuO1xuXHQgICAgICB0aGlzLmN1cnNvckJsaW5raW5nID0gaXNCbGlua2luZztcblx0ICAgICAgaWYgKGlzQmxpbmtpbmcpIHtcblx0ICAgICAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKCd0eXBlZC1jdXJzb3ItLWJsaW5rJyk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LnJlbW92ZSgndHlwZWQtY3Vyc29yLS1ibGluaycpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBTcGVlZCBpbiBNUyB0byB0eXBlXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gc3BlZWRcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdodW1hbml6ZXInLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGh1bWFuaXplcihzcGVlZCkge1xuXHQgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogc3BlZWQgLyAyKSArIHNwZWVkO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogU2h1ZmZsZSB0aGUgc2VxdWVuY2Ugb2YgdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzaHVmZmxlU3RyaW5nc0lmTmVlZGVkJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzaHVmZmxlU3RyaW5nc0lmTmVlZGVkKCkge1xuXHQgICAgICBpZiAoIXRoaXMuc2h1ZmZsZSkgcmV0dXJuO1xuXHQgICAgICB0aGlzLnNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZS5zb3J0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAtIDAuNTtcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBBZGRzIGEgQ1NTIGNsYXNzIHRvIGZhZGUgb3V0IGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnaW5pdEZhZGVPdXQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRGYWRlT3V0KCkge1xuXHQgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblx0XG5cdCAgICAgIHRoaXMuZWwuY2xhc3NOYW1lICs9ICcgJyArIHRoaXMuZmFkZU91dENsYXNzO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3IpIHRoaXMuY3Vyc29yLmNsYXNzTmFtZSArPSAnICcgKyB0aGlzLmZhZGVPdXRDbGFzcztcblx0ICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIF90aGlzNS5hcnJheVBvcysrO1xuXHQgICAgICAgIF90aGlzNS5yZXBsYWNlVGV4dCgnJyk7XG5cdFxuXHQgICAgICAgIC8vIFJlc2V0cyBjdXJyZW50IHN0cmluZyBpZiBlbmQgb2YgbG9vcCByZWFjaGVkXG5cdCAgICAgICAgaWYgKF90aGlzNS5zdHJpbmdzLmxlbmd0aCA+IF90aGlzNS5hcnJheVBvcykge1xuXHQgICAgICAgICAgX3RoaXM1LnR5cGV3cml0ZShfdGhpczUuc3RyaW5nc1tfdGhpczUuc2VxdWVuY2VbX3RoaXM1LmFycmF5UG9zXV0sIDApO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBfdGhpczUudHlwZXdyaXRlKF90aGlzNS5zdHJpbmdzWzBdLCAwKTtcblx0ICAgICAgICAgIF90aGlzNS5hcnJheVBvcyA9IDA7XG5cdCAgICAgICAgfVxuXHQgICAgICB9LCB0aGlzLmZhZGVPdXREZWxheSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBSZXBsYWNlcyBjdXJyZW50IHRleHQgaW4gdGhlIEhUTUwgZWxlbWVudFxuXHQgICAgICogZGVwZW5kaW5nIG9uIGVsZW1lbnQgdHlwZVxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3JlcGxhY2VUZXh0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiByZXBsYWNlVGV4dChzdHIpIHtcblx0ICAgICAgaWYgKHRoaXMuYXR0cikge1xuXHQgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKHRoaXMuYXR0ciwgc3RyKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBpZiAodGhpcy5pc0lucHV0KSB7XG5cdCAgICAgICAgICB0aGlzLmVsLnZhbHVlID0gc3RyO1xuXHQgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb250ZW50VHlwZSA9PT0gJ2h0bWwnKSB7XG5cdCAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHN0cjtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgdGhpcy5lbC50ZXh0Q29udGVudCA9IHN0cjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIElmIHVzaW5nIGlucHV0IGVsZW1lbnRzLCBiaW5kIGZvY3VzIGluIG9yZGVyIHRvXG5cdCAgICAgKiBzdGFydCBhbmQgc3RvcCB0aGUgYW5pbWF0aW9uXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnYmluZEZvY3VzRXZlbnRzJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kRm9jdXNFdmVudHMoKSB7XG5cdCAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXHRcblx0ICAgICAgaWYgKCF0aGlzLmlzSW5wdXQpIHJldHVybjtcblx0ICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgICAgX3RoaXM2LnN0b3AoKTtcblx0ICAgICAgfSk7XG5cdCAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgICAgaWYgKF90aGlzNi5lbC52YWx1ZSAmJiBfdGhpczYuZWwudmFsdWUubGVuZ3RoICE9PSAwKSB7XG5cdCAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICAgIF90aGlzNi5zdGFydCgpO1xuXHQgICAgICB9KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIE9uIGluaXQsIGluc2VydCB0aGUgY3Vyc29yIGVsZW1lbnRcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdpbnNlcnRDdXJzb3InLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydEN1cnNvcigpIHtcblx0ICAgICAgaWYgKCF0aGlzLnNob3dDdXJzb3IpIHJldHVybjtcblx0ICAgICAgaWYgKHRoaXMuY3Vyc29yKSByZXR1cm47XG5cdCAgICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHQgICAgICB0aGlzLmN1cnNvci5jbGFzc05hbWUgPSAndHlwZWQtY3Vyc29yJztcblx0ICAgICAgdGhpcy5jdXJzb3IuaW5uZXJIVE1MID0gdGhpcy5jdXJzb3JDaGFyO1xuXHQgICAgICB0aGlzLmVsLnBhcmVudE5vZGUgJiYgdGhpcy5lbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmN1cnNvciwgdGhpcy5lbC5uZXh0U2libGluZyk7XG5cdCAgICB9XG5cdCAgfV0pO1xuXHRcblx0ICByZXR1cm4gVHlwZWQ7XG5cdH0pKCk7XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBUeXBlZDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cdFxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cdFxuXHR2YXIgX2RlZmF1bHRzSnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHRcblx0dmFyIF9kZWZhdWx0c0pzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmF1bHRzSnMpO1xuXHRcblx0LyoqXG5cdCAqIEluaXRpYWxpemUgdGhlIFR5cGVkIG9iamVjdFxuXHQgKi9cblx0XG5cdHZhciBJbml0aWFsaXplciA9IChmdW5jdGlvbiAoKSB7XG5cdCAgZnVuY3Rpb24gSW5pdGlhbGl6ZXIoKSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5pdGlhbGl6ZXIpO1xuXHQgIH1cblx0XG5cdCAgX2NyZWF0ZUNsYXNzKEluaXRpYWxpemVyLCBbe1xuXHQgICAga2V5OiAnbG9hZCcsXG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBMb2FkIHVwIGRlZmF1bHRzICYgb3B0aW9ucyBvbiB0aGUgVHlwZWQgaW5zdGFuY2Vcblx0ICAgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGYgaW5zdGFuY2Ugb2YgVHlwZWRcblx0ICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIG9wdGlvbnMgb2JqZWN0XG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudElkIEhUTUwgZWxlbWVudCBJRCBfT1JfIGluc3RhbmNlIG9mIEhUTUwgZWxlbWVudFxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHRcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKHNlbGYsIG9wdGlvbnMsIGVsZW1lbnRJZCkge1xuXHQgICAgICAvLyBjaG9zZW4gZWxlbWVudCB0byBtYW5pcHVsYXRlIHRleHRcblx0ICAgICAgaWYgKHR5cGVvZiBlbGVtZW50SWQgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgc2VsZi5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudElkKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBzZWxmLmVsID0gZWxlbWVudElkO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBzZWxmLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgX2RlZmF1bHRzSnMyWydkZWZhdWx0J10sIG9wdGlvbnMpO1xuXHRcblx0ICAgICAgLy8gYXR0cmlidXRlIHRvIHR5cGUgaW50b1xuXHQgICAgICBzZWxmLmlzSW5wdXQgPSBzZWxmLmVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jztcblx0ICAgICAgc2VsZi5hdHRyID0gc2VsZi5vcHRpb25zLmF0dHI7XG5cdCAgICAgIHNlbGYuYmluZElucHV0Rm9jdXNFdmVudHMgPSBzZWxmLm9wdGlvbnMuYmluZElucHV0Rm9jdXNFdmVudHM7XG5cdFxuXHQgICAgICAvLyBzaG93IGN1cnNvclxuXHQgICAgICBzZWxmLnNob3dDdXJzb3IgPSBzZWxmLmlzSW5wdXQgPyBmYWxzZSA6IHNlbGYub3B0aW9ucy5zaG93Q3Vyc29yO1xuXHRcblx0ICAgICAgLy8gY3VzdG9tIGN1cnNvclxuXHQgICAgICBzZWxmLmN1cnNvckNoYXIgPSBzZWxmLm9wdGlvbnMuY3Vyc29yQ2hhcjtcblx0XG5cdCAgICAgIC8vIElzIHRoZSBjdXJzb3IgYmxpbmtpbmdcblx0ICAgICAgc2VsZi5jdXJzb3JCbGlua2luZyA9IHRydWU7XG5cdFxuXHQgICAgICAvLyB0ZXh0IGNvbnRlbnQgb2YgZWxlbWVudFxuXHQgICAgICBzZWxmLmVsQ29udGVudCA9IHNlbGYuYXR0ciA/IHNlbGYuZWwuZ2V0QXR0cmlidXRlKHNlbGYuYXR0cikgOiBzZWxmLmVsLnRleHRDb250ZW50O1xuXHRcblx0ICAgICAgLy8gaHRtbCBvciBwbGFpbiB0ZXh0XG5cdCAgICAgIHNlbGYuY29udGVudFR5cGUgPSBzZWxmLm9wdGlvbnMuY29udGVudFR5cGU7XG5cdFxuXHQgICAgICAvLyB0eXBpbmcgc3BlZWRcblx0ICAgICAgc2VsZi50eXBlU3BlZWQgPSBzZWxmLm9wdGlvbnMudHlwZVNwZWVkO1xuXHRcblx0ICAgICAgLy8gYWRkIGEgZGVsYXkgYmVmb3JlIHR5cGluZyBzdGFydHNcblx0ICAgICAgc2VsZi5zdGFydERlbGF5ID0gc2VsZi5vcHRpb25zLnN0YXJ0RGVsYXk7XG5cdFxuXHQgICAgICAvLyBiYWNrc3BhY2luZyBzcGVlZFxuXHQgICAgICBzZWxmLmJhY2tTcGVlZCA9IHNlbGYub3B0aW9ucy5iYWNrU3BlZWQ7XG5cdFxuXHQgICAgICAvLyBvbmx5IGJhY2tzcGFjZSB3aGF0IGRvZXNuJ3QgbWF0Y2ggdGhlIHByZXZpb3VzIHN0cmluZ1xuXHQgICAgICBzZWxmLnNtYXJ0QmFja3NwYWNlID0gc2VsZi5vcHRpb25zLnNtYXJ0QmFja3NwYWNlO1xuXHRcblx0ICAgICAgLy8gYW1vdW50IG9mIHRpbWUgdG8gd2FpdCBiZWZvcmUgYmFja3NwYWNpbmdcblx0ICAgICAgc2VsZi5iYWNrRGVsYXkgPSBzZWxmLm9wdGlvbnMuYmFja0RlbGF5O1xuXHRcblx0ICAgICAgLy8gRmFkZSBvdXQgaW5zdGVhZCBvZiBiYWNrc3BhY2Vcblx0ICAgICAgc2VsZi5mYWRlT3V0ID0gc2VsZi5vcHRpb25zLmZhZGVPdXQ7XG5cdCAgICAgIHNlbGYuZmFkZU91dENsYXNzID0gc2VsZi5vcHRpb25zLmZhZGVPdXRDbGFzcztcblx0ICAgICAgc2VsZi5mYWRlT3V0RGVsYXkgPSBzZWxmLm9wdGlvbnMuZmFkZU91dERlbGF5O1xuXHRcblx0ICAgICAgLy8gdmFyaWFibGUgdG8gY2hlY2sgd2hldGhlciB0eXBpbmcgaXMgY3VycmVudGx5IHBhdXNlZFxuXHQgICAgICBzZWxmLmlzUGF1c2VkID0gZmFsc2U7XG5cdFxuXHQgICAgICAvLyBpbnB1dCBzdHJpbmdzIG9mIHRleHRcblx0ICAgICAgc2VsZi5zdHJpbmdzID0gc2VsZi5vcHRpb25zLnN0cmluZ3MubWFwKGZ1bmN0aW9uIChzKSB7XG5cdCAgICAgICAgcmV0dXJuIHMudHJpbSgpO1xuXHQgICAgICB9KTtcblx0XG5cdCAgICAgIC8vIGRpdiBjb250YWluaW5nIHN0cmluZ3Ncblx0ICAgICAgaWYgKHR5cGVvZiBzZWxmLm9wdGlvbnMuc3RyaW5nc0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgc2VsZi5zdHJpbmdzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZi5vcHRpb25zLnN0cmluZ3NFbGVtZW50KTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBzZWxmLnN0cmluZ3NFbGVtZW50ID0gc2VsZi5vcHRpb25zLnN0cmluZ3NFbGVtZW50O1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAoc2VsZi5zdHJpbmdzRWxlbWVudCkge1xuXHQgICAgICAgIHNlbGYuc3RyaW5ncyA9IFtdO1xuXHQgICAgICAgIHNlbGYuc3RyaW5nc0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0ICAgICAgICB2YXIgc3RyaW5ncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShzZWxmLnN0cmluZ3NFbGVtZW50LmNoaWxkcmVuKTtcblx0ICAgICAgICB2YXIgc3RyaW5nc0xlbmd0aCA9IHN0cmluZ3MubGVuZ3RoO1xuXHRcblx0ICAgICAgICBpZiAoc3RyaW5nc0xlbmd0aCkge1xuXHQgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmdzTGVuZ3RoOyBpICs9IDEpIHtcblx0ICAgICAgICAgICAgdmFyIHN0cmluZ0VsID0gc3RyaW5nc1tpXTtcblx0ICAgICAgICAgICAgc2VsZi5zdHJpbmdzLnB1c2goc3RyaW5nRWwuaW5uZXJIVE1MLnRyaW0oKSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdFxuXHQgICAgICAvLyBjaGFyYWN0ZXIgbnVtYmVyIHBvc2l0aW9uIG9mIGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgIHNlbGYuc3RyUG9zID0gMDtcblx0XG5cdCAgICAgIC8vIGN1cnJlbnQgYXJyYXkgcG9zaXRpb25cblx0ICAgICAgc2VsZi5hcnJheVBvcyA9IDA7XG5cdFxuXHQgICAgICAvLyBpbmRleCBvZiBzdHJpbmcgdG8gc3RvcCBiYWNrc3BhY2luZyBvblxuXHQgICAgICBzZWxmLnN0b3BOdW0gPSAwO1xuXHRcblx0ICAgICAgLy8gTG9vcGluZyBsb2dpY1xuXHQgICAgICBzZWxmLmxvb3AgPSBzZWxmLm9wdGlvbnMubG9vcDtcblx0ICAgICAgc2VsZi5sb29wQ291bnQgPSBzZWxmLm9wdGlvbnMubG9vcENvdW50O1xuXHQgICAgICBzZWxmLmN1ckxvb3AgPSAwO1xuXHRcblx0ICAgICAgLy8gc2h1ZmZsZSB0aGUgc3RyaW5nc1xuXHQgICAgICBzZWxmLnNodWZmbGUgPSBzZWxmLm9wdGlvbnMuc2h1ZmZsZTtcblx0ICAgICAgLy8gdGhlIG9yZGVyIG9mIHN0cmluZ3Ncblx0ICAgICAgc2VsZi5zZXF1ZW5jZSA9IFtdO1xuXHRcblx0ICAgICAgc2VsZi5wYXVzZSA9IHtcblx0ICAgICAgICBzdGF0dXM6IGZhbHNlLFxuXHQgICAgICAgIHR5cGV3cml0ZTogdHJ1ZSxcblx0ICAgICAgICBjdXJTdHJpbmc6ICcnLFxuXHQgICAgICAgIGN1clN0clBvczogMFxuXHQgICAgICB9O1xuXHRcblx0ICAgICAgLy8gV2hlbiB0aGUgdHlwaW5nIGlzIGNvbXBsZXRlICh3aGVuIG5vdCBsb29wZWQpXG5cdCAgICAgIHNlbGYudHlwaW5nQ29tcGxldGUgPSBmYWxzZTtcblx0XG5cdCAgICAgIC8vIFNldCB0aGUgb3JkZXIgaW4gd2hpY2ggdGhlIHN0cmluZ3MgYXJlIHR5cGVkXG5cdCAgICAgIGZvciAodmFyIGkgaW4gc2VsZi5zdHJpbmdzKSB7XG5cdCAgICAgICAgc2VsZi5zZXF1ZW5jZVtpXSA9IGk7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIC8vIElmIHRoZXJlIGlzIHNvbWUgdGV4dCBpbiB0aGUgZWxlbWVudFxuXHQgICAgICBzZWxmLmN1cnJlbnRFbENvbnRlbnQgPSB0aGlzLmdldEN1cnJlbnRFbENvbnRlbnQoc2VsZik7XG5cdFxuXHQgICAgICBzZWxmLmF1dG9JbnNlcnRDc3MgPSBzZWxmLm9wdGlvbnMuYXV0b0luc2VydENzcztcblx0XG5cdCAgICAgIHRoaXMuYXBwZW5kQW5pbWF0aW9uQ3NzKHNlbGYpO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ2dldEN1cnJlbnRFbENvbnRlbnQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRFbENvbnRlbnQoc2VsZikge1xuXHQgICAgICB2YXIgZWxDb250ZW50ID0gJyc7XG5cdCAgICAgIGlmIChzZWxmLmF0dHIpIHtcblx0ICAgICAgICBlbENvbnRlbnQgPSBzZWxmLmVsLmdldEF0dHJpYnV0ZShzZWxmLmF0dHIpO1xuXHQgICAgICB9IGVsc2UgaWYgKHNlbGYuaXNJbnB1dCkge1xuXHQgICAgICAgIGVsQ29udGVudCA9IHNlbGYuZWwudmFsdWU7XG5cdCAgICAgIH0gZWxzZSBpZiAoc2VsZi5jb250ZW50VHlwZSA9PT0gJ2h0bWwnKSB7XG5cdCAgICAgICAgZWxDb250ZW50ID0gc2VsZi5lbC5pbm5lckhUTUw7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgZWxDb250ZW50ID0gc2VsZi5lbC50ZXh0Q29udGVudDtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gZWxDb250ZW50O1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ2FwcGVuZEFuaW1hdGlvbkNzcycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kQW5pbWF0aW9uQ3NzKHNlbGYpIHtcblx0ICAgICAgdmFyIGNzc0RhdGFOYW1lID0gJ2RhdGEtdHlwZWQtanMtY3NzJztcblx0ICAgICAgaWYgKCFzZWxmLmF1dG9JbnNlcnRDc3MpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKCFzZWxmLnNob3dDdXJzb3IgJiYgIXNlbGYuZmFkZU91dCkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignWycgKyBjc3NEYXRhTmFtZSArICddJykpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHZhciBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHQgICAgICBjc3MudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cdCAgICAgIGNzcy5zZXRBdHRyaWJ1dGUoY3NzRGF0YU5hbWUsIHRydWUpO1xuXHRcblx0ICAgICAgdmFyIGlubmVyQ3NzID0gJyc7XG5cdCAgICAgIGlmIChzZWxmLnNob3dDdXJzb3IpIHtcblx0ICAgICAgICBpbm5lckNzcyArPSAnXFxuICAgICAgICAudHlwZWQtY3Vyc29ye1xcbiAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnR5cGVkLWN1cnNvci50eXBlZC1jdXJzb3ItLWJsaW5re1xcbiAgICAgICAgICBhbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIEBrZXlmcmFtZXMgdHlwZWRqc0JsaW5re1xcbiAgICAgICAgICA1MCUgeyBvcGFjaXR5OiAwLjA7IH1cXG4gICAgICAgIH1cXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyB0eXBlZGpzQmxpbmt7XFxuICAgICAgICAgIDAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgICA1MCUgeyBvcGFjaXR5OiAwLjA7IH1cXG4gICAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgICAgIH1cXG4gICAgICAnO1xuXHQgICAgICB9XG5cdCAgICAgIGlmIChzZWxmLmZhZGVPdXQpIHtcblx0ICAgICAgICBpbm5lckNzcyArPSAnXFxuICAgICAgICAudHlwZWQtZmFkZS1vdXR7XFxuICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cztcXG4gICAgICAgIH1cXG4gICAgICAgIC50eXBlZC1jdXJzb3IudHlwZWQtY3Vyc29yLS1ibGluay50eXBlZC1mYWRlLW91dHtcXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IDA7XFxuICAgICAgICAgIGFuaW1hdGlvbjogMDtcXG4gICAgICAgIH1cXG4gICAgICAnO1xuXHQgICAgICB9XG5cdCAgICAgIGlmIChjc3MubGVuZ3RoID09PSAwKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGNzcy5pbm5lckhUTUwgPSBpbm5lckNzcztcblx0ICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjc3MpO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0XG5cdCAgcmV0dXJuIEluaXRpYWxpemVyO1xuXHR9KSgpO1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gSW5pdGlhbGl6ZXI7XG5cdHZhciBpbml0aWFsaXplciA9IG5ldyBJbml0aWFsaXplcigpO1xuXHRleHBvcnRzLmluaXRpYWxpemVyID0gaW5pdGlhbGl6ZXI7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0cyAmIG9wdGlvbnNcblx0ICogQHJldHVybnMge29iamVjdH0gVHlwZWQgZGVmYXVsdHMgJiBvcHRpb25zXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdFxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdHZhciBkZWZhdWx0cyA9IHtcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2FycmF5fSBzdHJpbmdzIHN0cmluZ3MgdG8gYmUgdHlwZWRcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gc3RyaW5nc0VsZW1lbnQgSUQgb2YgZWxlbWVudCBjb250YWluaW5nIHN0cmluZyBjaGlsZHJlblxuXHQgICAqL1xuXHQgIHN0cmluZ3M6IFsnVGhlc2UgYXJlIHRoZSBkZWZhdWx0IHZhbHVlcy4uLicsICdZb3Uga25vdyB3aGF0IHlvdSBzaG91bGQgZG8/JywgJ1VzZSB5b3VyIG93biEnLCAnSGF2ZSBhIGdyZWF0IGRheSEnXSxcblx0ICBzdHJpbmdzRWxlbWVudDogbnVsbCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IHR5cGVTcGVlZCB0eXBlIHNwZWVkIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIHR5cGVTcGVlZDogMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0RGVsYXkgdGltZSBiZWZvcmUgdHlwaW5nIHN0YXJ0cyBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICBzdGFydERlbGF5OiAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gYmFja1NwZWVkIGJhY2tzcGFjaW5nIHNwZWVkIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIGJhY2tTcGVlZDogMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBzbWFydEJhY2tzcGFjZSBvbmx5IGJhY2tzcGFjZSB3aGF0IGRvZXNuJ3QgbWF0Y2ggdGhlIHByZXZpb3VzIHN0cmluZ1xuXHQgICAqL1xuXHQgIHNtYXJ0QmFja3NwYWNlOiB0cnVlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHNodWZmbGUgc2h1ZmZsZSB0aGUgc3RyaW5nc1xuXHQgICAqL1xuXHQgIHNodWZmbGU6IGZhbHNlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gYmFja0RlbGF5IHRpbWUgYmVmb3JlIGJhY2tzcGFjaW5nIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIGJhY2tEZWxheTogNzAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGZhZGVPdXQgRmFkZSBvdXQgaW5zdGVhZCBvZiBiYWNrc3BhY2Vcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gZmFkZU91dENsYXNzIGNzcyBjbGFzcyBmb3IgZmFkZSBhbmltYXRpb25cblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGZhZGVPdXREZWxheSBGYWRlIG91dCBkZWxheSBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICBmYWRlT3V0OiBmYWxzZSxcblx0ICBmYWRlT3V0Q2xhc3M6ICd0eXBlZC1mYWRlLW91dCcsXG5cdCAgZmFkZU91dERlbGF5OiA1MDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbG9vcCBsb29wIHN0cmluZ3Ncblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gbG9vcENvdW50IGFtb3VudCBvZiBsb29wc1xuXHQgICAqL1xuXHQgIGxvb3A6IGZhbHNlLFxuXHQgIGxvb3BDb3VudDogSW5maW5pdHksXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc2hvd0N1cnNvciBzaG93IGN1cnNvclxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjdXJzb3JDaGFyIGNoYXJhY3RlciBmb3IgY3Vyc29yXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBhdXRvSW5zZXJ0Q3NzIGluc2VydCBDU1MgZm9yIGN1cnNvciBhbmQgZmFkZU91dCBpbnRvIEhUTUwgPGhlYWQ+XG5cdCAgICovXG5cdCAgc2hvd0N1cnNvcjogdHJ1ZSxcblx0ICBjdXJzb3JDaGFyOiAnfCcsXG5cdCAgYXV0b0luc2VydENzczogdHJ1ZSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IGF0dHIgYXR0cmlidXRlIGZvciB0eXBpbmdcblx0ICAgKiBFeDogaW5wdXQgcGxhY2Vob2xkZXIsIHZhbHVlLCBvciBqdXN0IEhUTUwgdGV4dFxuXHQgICAqL1xuXHQgIGF0dHI6IG51bGwsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYmluZElucHV0Rm9jdXNFdmVudHMgYmluZCB0byBmb2N1cyBhbmQgYmx1ciBpZiBlbCBpcyB0ZXh0IGlucHV0XG5cdCAgICovXG5cdCAgYmluZElucHV0Rm9jdXNFdmVudHM6IGZhbHNlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gY29udGVudFR5cGUgJ2h0bWwnIG9yICdudWxsJyBmb3IgcGxhaW50ZXh0XG5cdCAgICovXG5cdCAgY29udGVudFR5cGU6ICdodG1sJyxcblx0XG5cdCAgLyoqXG5cdCAgICogQmVmb3JlIGl0IGJlZ2lucyB0eXBpbmdcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25CZWdpbjogZnVuY3Rpb24gb25CZWdpbihzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWxsIHR5cGluZyBpcyBjb21wbGV0ZVxuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvbkNvbXBsZXRlOiBmdW5jdGlvbiBvbkNvbXBsZXRlKHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBCZWZvcmUgZWFjaCBzdHJpbmcgaXMgdHlwZWRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgcHJlU3RyaW5nVHlwZWQ6IGZ1bmN0aW9uIHByZVN0cmluZ1R5cGVkKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgZWFjaCBzdHJpbmcgaXMgdHlwZWRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25TdHJpbmdUeXBlZDogZnVuY3Rpb24gb25TdHJpbmdUeXBlZChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIER1cmluZyBsb29waW5nLCBhZnRlciBsYXN0IHN0cmluZyBpcyB0eXBlZFxuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvbkxhc3RTdHJpbmdCYWNrc3BhY2VkOiBmdW5jdGlvbiBvbkxhc3RTdHJpbmdCYWNrc3BhY2VkKHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBUeXBpbmcgaGFzIGJlZW4gc3RvcHBlZFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblR5cGluZ1BhdXNlZDogZnVuY3Rpb24gb25UeXBpbmdQYXVzZWQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBUeXBpbmcgaGFzIGJlZW4gc3RhcnRlZCBhZnRlciBiZWluZyBzdG9wcGVkXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uVHlwaW5nUmVzdW1lZDogZnVuY3Rpb24gb25UeXBpbmdSZXN1bWVkKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgcmVzZXRcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25SZXNldDogZnVuY3Rpb24gb25SZXNldChzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgc3RvcFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblN0b3A6IGZ1bmN0aW9uIG9uU3RvcChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIHN0YXJ0XG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uU3RhcnQ6IGZ1bmN0aW9uIG9uU3RhcnQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciBkZXN0cm95XG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uRGVzdHJveTogZnVuY3Rpb24gb25EZXN0cm95KHNlbGYpIHt9XG5cdH07XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBkZWZhdWx0cztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBUT0RPOiBUaGVzZSBtZXRob2RzIGNhbiBwcm9iYWJseSBiZSBjb21iaW5lZCBzb21laG93XG5cdCAqIFBhcnNlIEhUTUwgdGFncyAmIEhUTUwgQ2hhcmFjdGVyc1xuXHQgKi9cblx0XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblx0XG5cdHZhciBIVE1MUGFyc2VyID0gKGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBIVE1MUGFyc2VyKCkge1xuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxQYXJzZXIpO1xuXHQgIH1cblx0XG5cdCAgX2NyZWF0ZUNsYXNzKEhUTUxQYXJzZXIsIFt7XG5cdCAgICBrZXk6ICd0eXBlSHRtbENoYXJzJyxcblx0XG5cdCAgICAvKipcblx0ICAgICAqIFR5cGUgSFRNTCB0YWdzICYgSFRNTCBDaGFyYWN0ZXJzXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIEN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIFBvc2l0aW9uIGluIGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmIGluc3RhbmNlIG9mIFR5cGVkXG5cdCAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBhIG5ldyBzdHJpbmcgcG9zaXRpb25cblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0XG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdHlwZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgc2VsZikge1xuXHQgICAgICBpZiAoc2VsZi5jb250ZW50VHlwZSAhPT0gJ2h0bWwnKSByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgICB2YXIgY3VyQ2hhciA9IGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zKS5jaGFyQXQoMCk7XG5cdCAgICAgIGlmIChjdXJDaGFyID09PSAnPCcgfHwgY3VyQ2hhciA9PT0gJyYnKSB7XG5cdCAgICAgICAgdmFyIGVuZFRhZyA9ICcnO1xuXHQgICAgICAgIGlmIChjdXJDaGFyID09PSAnPCcpIHtcblx0ICAgICAgICAgIGVuZFRhZyA9ICc+Jztcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgZW5kVGFnID0gJzsnO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB3aGlsZSAoY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MgKyAxKS5jaGFyQXQoMCkgIT09IGVuZFRhZykge1xuXHQgICAgICAgICAgY3VyU3RyUG9zKys7XG5cdCAgICAgICAgICBpZiAoY3VyU3RyUG9zICsgMSA+IGN1clN0cmluZy5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGN1clN0clBvcysrO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBjdXJTdHJQb3M7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBCYWNrc3BhY2UgSFRNTCB0YWdzIGFuZCBIVE1MIENoYXJhY3RlcnNcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgQ3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgUG9zaXRpb24gaW4gY3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGYgaW5zdGFuY2Ugb2YgVHlwZWRcblx0ICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IGEgbmV3IHN0cmluZyBwb3NpdGlvblxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2JhY2tTcGFjZUh0bWxDaGFycycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYmFja1NwYWNlSHRtbENoYXJzKGN1clN0cmluZywgY3VyU3RyUG9zLCBzZWxmKSB7XG5cdCAgICAgIGlmIChzZWxmLmNvbnRlbnRUeXBlICE9PSAnaHRtbCcpIHJldHVybiBjdXJTdHJQb3M7XG5cdCAgICAgIHZhciBjdXJDaGFyID0gY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MpLmNoYXJBdCgwKTtcblx0ICAgICAgaWYgKGN1ckNoYXIgPT09ICc+JyB8fCBjdXJDaGFyID09PSAnOycpIHtcblx0ICAgICAgICB2YXIgZW5kVGFnID0gJyc7XG5cdCAgICAgICAgaWYgKGN1ckNoYXIgPT09ICc+Jykge1xuXHQgICAgICAgICAgZW5kVGFnID0gJzwnO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBlbmRUYWcgPSAnJic7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHdoaWxlIChjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcyAtIDEpLmNoYXJBdCgwKSAhPT0gZW5kVGFnKSB7XG5cdCAgICAgICAgICBjdXJTdHJQb3MtLTtcblx0ICAgICAgICAgIGlmIChjdXJTdHJQb3MgPCAwKSB7XG5cdCAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBjdXJTdHJQb3MtLTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0XG5cdCAgcmV0dXJuIEhUTUxQYXJzZXI7XG5cdH0pKCk7XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBIVE1MUGFyc2VyO1xuXHR2YXIgaHRtbFBhcnNlciA9IG5ldyBIVE1MUGFyc2VyKCk7XG5cdGV4cG9ydHMuaHRtbFBhcnNlciA9IGh0bWxQYXJzZXI7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKVxufSk7XG47IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBjb25zdCBwb3J0Zm9saW8gPSBbXG4gIHtcbiAgICBuYW1lOiAnZmFuY3ktd2VhdGhlcicsXG4gICAgaWNvbjogJ2Fzc2V0cy9pY29ucy9mYW5jeS13ZWF0aGVyX2ljb24tbWluLnBuZycsXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBxdW90ZS1wcm9wc1xuICAgICAgJ2VuJzogYDxwPlRoZSBGYW5jeS13ZWF0aGVyIHdhcyBjcmVhdGVkIGR1cmluZyB0aGUgY291cnNlIG9mIFRoZSBSb2xsaW5nIFNjb3BlcyBzY2hvb2wgKEVQQU0gU3lzdGVtcykuXG4gICAgICAgICAgICBJdCBpcyBhIHdlYXRoZXItZm9jYXN0IGFwcGxpY2F0aW9uLiBCeSBkZWZhdWx0LCB0aGUgYXBwIGRpc3BsYXlzIHdlYXRoZXIsIDMtZGF5cyBmb3JlY2FzdCwgY3VycmVudCB0aW1lLCBcbiAgICAgICAgICAgIGFuZCBjdXJyZW50IGdlb2dyYXBoaWNhbCBjb29yZGluYXRlcyBpbiB0aGUgcGxhY2Ugd2hlcmUgdXNlciBpcyBsb2NhdGVkLlxuICAgICAgICAgICAgQnV0IGFwcCBjYW4gZGlzcGxheSBpbmZvcm1hdGlvbiBhYm91dCBlYWNoIGNpdHkuIFxuICAgICAgICAgICAg0JVoZSBhcHAgaGFzIGFuIGludGVncmF0ZWQgbWFwIHRoYXQgc2hvd3MgdGhlIGN1cnJlbnQgcGxhY2Ugb3IgdGhlIHJlcXVpcmVkIHBsYWNlLjwvcD5cbiAgICAgICAgICAgIDxwPlRoZSBwcm9qZWN0IHVzZXMgc3VjaCB0ZWNobm9sb2dpZXMgYXM6IDxiPkhUTUw1PC9iPiwgPGI+Q1NTMzwvYj4sIDxiPlNBU1M8L2I+LCA8Yj5KYXZhU2NyaXB0PC9iPiwgPGI+V2VicGFjazwvYj4uPC9wPmAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcXVvdGUtcHJvcHNcbiAgICAgICdydSc6IGA8cD7Qn9GA0L7QtdC60YIg0LHRi9C7INGB0L7Qt9C00LDQvSDQstC+INCy0YDQtdC80Y8g0L/RgNC+0YXQvtC20LTQtdC90LjRjyDQutGD0YDRgdCwIFRoZSBSb2xsaW5nIFNjb3BlcyBzY2hvb2wgKEVQQU0gU3lzdGVtcykuIFxuICAgICAgICAgICAgV2ViLdC/0YDQuNC70L7QttC10L3QuNC1INC/0L7QutCw0LfRi9Cy0LDQtdGCINGC0LXQutGD0YnRg9GOINC/0L7Qs9C+0LTRgyDQuCDQv9GA0L7Qs9C90L7QtyDQv9C+0LPQvtC00Ysg0L3QsCDRgtGA0Lgg0YHQu9C10LTRg9GO0YnQuNGFINC00L3RjyDQsiDRgtC10LrRg9GJ0LXQvCDQvNC10YHRgtC1INC40LvQuCDQu9GO0LHQvtC8INC00YDRg9Cz0L7QvCDQuNGB0LrQvtC80L7QvCDQvNC10YHRgtC1LiBcbiAgICAgICAgICAgINCSINC/0YDQuNC70L7QttC10L3QuNC1INC40L3RgtC10LPRgNC40YDQvtCy0LDQvdCwINC60LDRgNGC0LAsINGD0LrQsNC30YvQstCw0Y7RidCw0Y8g0YLQtdC60YPRidC10LUg0L/QvtC70L7QttC10L3QuNC1INC70LjQsdC+INC/0L7Qu9C+0LbQtdC90LjQtSDQuNGB0LrQvtC80L7Qs9C+INCz0L7RgNC+0LTQsC4g0JLQvtC30LzQvtC20LXQvSDQstGL0LHQvtGAINCw0L3Qs9C70LjQudGB0LrQvtCz0L4g0LjQu9C4INGA0YPRgdGB0LrQvtCz0L4g0Y/Qt9GL0LrQsCwgXG4gICAgICAgICAgICDRgtC10LzQv9C10YDQsNGC0YPRgNGLINCyINCz0YDQsNC00YPRgdCw0YUg0YbQtdC70YzRgdC40Y8g0LjQu9C4INGE0LDRgNC10L3Qs9C10LnRgtCwLjwvcD5cbiAgICAgICAgICAgIDxwPtCSINC/0YDQvtC10LrRgtC1INC/0YDQuNC80LXQvdC10L3RizogPGI+SFRNTDU8L2I+LCA8Yj5DU1MzPC9iPiwgPGI+U0FTUzwvYj4sIDxiPkphdmFTY3JpcHQ8L2I+LCA8Yj5XZWJwYWNrPC9iPi48L3A+YCxcbiAgICB9LFxuICAgIGxpbmtHaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vQW5kcmVpTWlsYXNoZXZpY2gvcnNzY2hvb2wtY3YvdHJlZS9mYW5jeS13ZWF0aGVyJyxcbiAgICBsaW5rRGVtbzogJ2h0dHBzOi8vYW5kcmVpbWlsYXNoZXZpY2guZ2l0aHViLmlvL3Jzc2Nob29sLWN2L2ZhbmN5LXdlYXRoZXIvYnVpbGQvaW5kZXguaHRtbCcsXG4gICAgYXR0cjogJ2RhdGEtaHRtbD1cInRydWVcIiBkYXRhLWNzcz1cInRydWVcIiBkYXRhLWpzPVwidHJ1ZVwiIGRhdGEtc2Fzcz1cInRydWVcIiBkYXRhLXdlYnBhY2s9XCJ0cnVlXCInLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1NpbXBsZS1zaW5nb2xvJyxcbiAgICBpY29uOiAnYXNzZXRzL2ljb25zL3NpbmdvbG9faWNvbi1taW4ucG5nJyxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHF1b3RlLXByb3BzXG4gICAgICAnZW4nOiBgPHA+VGhlIFNpbXBsZS1TaW5nb2xvIHdhcyBjcmVhdGVkIGR1cmluZyB0aGUgY291cnNlIG9mIFRoZSBSb2xsaW5nIFNjb3BlcyBzY2hvb2wgKEVQQU0gU3lzdGVtcykuXG4gICAgICAgICAgPHA+VGhlIGxheW91dCBpcyBsYWlkIG91dCBpbiB0aHJlZSBzdGF0ZXM6IG1vYmlsZSwgdGFibGV0IGFuZCBkZXNrdG9wLjwvcD5cbiAgICAgICAgICA8L3A+PHA+VGhlIHByb2plY3QgdXNlcyBzdWNoIHRlY2hub2xvZ2llcyBhczogPGI+SFRNTDU8L2I+LCA8Yj5DU1MzPC9iPiwgPGI+U0FTUzwvYj4sIDxiPkphdmFTY3JpcHQ8L2I+LjwvcD5gLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHF1b3RlLXByb3BzXG4gICAgICAncnUnOiBgPHA+0J/RgNC40LvQvtC20LXQvdC40LUgU2ltcGxlLXNpbmdvbG8g0LHRi9C70L4g0YHQvtC30LTQsNC90L4g0LLQviDQstGA0LXQvNGPINC/0YDQvtGF0L7QttC00LXQvdC40Y8g0LrRg9GA0YHQsCBUaGUgUm9sbGluZyBTY29wZXMgc2Nob29sIChFUEFNIFN5c3RlbXMpLjwvcD5cbiAgICAgICAgICA8cD7Qn9GA0LjQu9C+0LbQtdC90LjQtSDRgdCy0LXRgNGB0YLQsNC90L4g0L/QviDQsNC00LDQv9GC0LjQstC90L7QvNGDINC80LDQutC10YLRgy48L3A+XG4gICAgICAgICAgPHA+0JIg0L/RgNC+0LXQutGC0LUg0L/RgNC40LzQtdC90LXQvdGLOiA8Yj5IVE1MNTwvYj4sIDxiPkNTUzM8L2I+LCA8Yj5TQVNTPC9iPiwgPGI+SmF2YVNjcmlwdDwvYj4uPC9wPmAsXG4gICAgfSxcbiAgICBsaW5rR2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL0FuZHJlaU1pbGFzaGV2aWNoL3NpbXBsZS1zaW5nb2xvJyxcbiAgICBsaW5rRGVtbzogJ2h0dHBzOi8vYW5kcmVpbWlsYXNoZXZpY2guZ2l0aHViLmlvL3NpbXBsZS1zaW5nb2xvL3NpbXBsZS1zaW5nb2xvL2luZGV4JyxcbiAgICBhdHRyOiAnZGF0YS1odG1sPVwidHJ1ZVwiIGRhdGEtY3NzPVwidHJ1ZVwiIGRhdGEtanM9XCJ0cnVlXCIgZGF0YS1zYXNzPVwidHJ1ZVwiIGRhdGEtd2VicGFjaz1cImZhbHNlXCInLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1JhaW5kcm9wcycsXG4gICAgaWNvbjogJ2Fzc2V0cy9pY29ucy9yYWluZHJvcHMtbWluLnBuZycsXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBxdW90ZS1wcm9wc1xuICAgICAgJ2VuJzogYDxwPlRoZSBSYWlucm9wcyBHYW1lIHdhcyBjcmVhdGVkIGR1cmluZyB0aGUgY291cnNlIG9mIFRoZSBSb2xsaW5nIFNjb3BlcyBzY2hvb2wgKEVQQU0gU3lzdGVtcykuXG4gICAgICA8L3A+PHA+TWF0aCBleGFtcGxlcyBhcmUgd3JpdHRlbiBpbiByYWluZHJvcHMgdGhhdCBmYWxscyBhdCBhIGNlcnRhaW4gc3BlZWQuIFxuICAgICAgWW91IG11c3QgIGVudGVyIHRoZSBhbnN3ZXIgZnJvbSBrZXlib3JkIG9yIG51bXBhZCBvbiByaWdodCBzaWRlIG9mIHNjcmVlbiBiZWZvcmUgdGhlIGRyb3AgZmFsbHMuIFxuICAgICAgQWZ0ZXIgdGhlIGVuZCBvZiB0aGUgZ2FtZSwgdGhlIGdhbWUgc3RhdGlzdGljcyBhcmUgZGlzcGxheWVkLjwvcD5cbiAgICAgIDxwPlRoZSBwcm9qZWN0IHVzZXMgc3VjaCB0ZWNobm9sb2dpZXMgYXM6IDxiPkhUTUw1PC9iPiwgPGI+Q1NTMzwvYj4sIDxiPlNBU1M8L2I+LCA8Yj5KYXZhU2NyaXB0PC9iPiwgPGI+V2VicGFjazwvYj4uPC9wPmAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcXVvdGUtcHJvcHNcbiAgICAgICdydSc6IGA8cD7QmNCz0YDQsCBSYWlucm9wcyDQsdGL0LvQsCDRgdC+0LfQtNCw0L3QviDQstC+INCy0YDQtdC80Y8g0L/RgNC+0YXQvtC20LTQtdC90LjRjyDQutGD0YDRgdCwIFRoZSBSb2xsaW5nIFNjb3BlcyBzY2hvb2wgKEVQQU0gU3lzdGVtcykuPC9wPlxuICAgICAgPHA+0JzQsNGC0LXQvNCw0YLQuNGH0LXRgdC60LjQtSDQv9GA0LjQvNC10YDRiyDQvdCw0L/QuNGB0LDQvdGLINCy0L3Rg9GC0YDQuCDQutCw0L/QtdC70Ywg0LTQvtC20LTRjywg0L/QsNC00LDRjtGJ0LjRhSDRgSDQvtC/0YDQtdC00LXQu9C10L3QvdC+0Lkg0YHQutC+0YDQvtGB0YLRjNGOLiBcbiAgICAgINCd0YPQttC90L4g0LLQstC10YHRgtC4INC/0YDQuNC80LXRgCDRgSDQutC70LDQstC40LDRgtGD0YDRiyDQuNC70Lgg0YfQuNGB0LvQvtCy0L7QuSDQv9Cw0L3QtdC70Lgg0L3QsCDRjdC60YDQsNC90LUg0LTQviDRgtC+0LPQviDQutCw0Log0LrQsNC/0LvQuCDRg9C/0LDQtNGD0YIuIFxuICAgICAg0J/QvtGB0LvQtSDQt9Cw0LLQtdGA0YjQtdC90LjRjyDQuNCz0YDRiyDQvdCwINGN0LrRgNCw0L0g0LLRi9Cy0L7QtNC40YLRgdGPINC40LPRgNC+0LLQsNGPINGB0YLQsNGC0LjRgdGC0LjQutCwLjwvcD5cbiAgICAgIDxwPtCSINC/0YDQvtC10LrRgtC1INC/0YDQuNC80LXQvdC10L3RizogPGI+SFRNTDU8L2I+LCA8Yj5DU1MzPC9iPiwgPGI+U0FTUzwvYj4sIDxiPkphdmFTY3JpcHQ8L2I+LCA8Yj5XZWJwYWNrPC9iPi48L3A+YCxcbiAgICB9LFxuICAgIGxpbmtHaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vQW5kcmVpTWlsYXNoZXZpY2gvcmFpbmRyb3BzJyxcbiAgICBsaW5rRGVtbzogJ2h0dHBzOi8vYW5kcmVpbWlsYXNoZXZpY2guZ2l0aHViLmlvL3JhaW5kcm9wcy9yYWluZHJvcHMvYnVpbGQvaW5kZXgnLFxuICAgIGF0dHI6ICdkYXRhLWh0bWw9XCJ0cnVlXCIgZGF0YS1jc3M9XCJ0cnVlXCIgZGF0YS1qcz1cInRydWVcIiBkYXRhLXNhc3M9XCJ0cnVlXCIgZGF0YS13ZWJwYWNrPVwidHJ1ZVwiJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdDYWxjdWxhdG9yJyxcbiAgICBpY29uOiAnYXNzZXRzL2ljb25zL0NhbGN1bGF0b3ItbWluLnBuZycsXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBxdW90ZS1wcm9wc1xuICAgICAgJ2VuJzogYDxwPlRoZSBSYWlucm9wcyBhcHAgd2FzIGNyZWF0ZWQgZHVyaW5nIHRoZSBjb3Vyc2Ugb2YgVGhlIFVwU2tpbGxzTGFiIChFUEFNIFN5c3RlbXMpLiBUaGUgYXBwIGlzIGEgc2ltcGxlIGNhbGN1bGF0b3IuPC9wPiBcbiAgICAgIDxwPlRoZSBwcm9qZWN0IHVzZXMgc3VjaCB0ZWNobm9sb2dpZXMgYXM6IDxiPkhUTUw1PC9iPiwgPGI+Q1NTMzwvYj4sIDxiPlNBU1M8L2I+LCA8Yj5KYXZhU2NyaXB0PC9iPi48L3A+YCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBxdW90ZS1wcm9wc1xuICAgICAgJ3J1JzogYDxwPtCf0YDQuNC70L7QttC10L3QuNC1INC60LDQu9GM0LrRg9C70Y/RgtC+0YAg0LHRi9C70L4g0YHQvtC30LTQsNC90L4g0LLQviDQstGA0LXQvNGPINC/0YDQvtGF0L7QttC00LXQvdC40Y8g0LrRg9GA0YHQsCBVcFNraWxsc0xhYiAoRVBBTSBTeXN0ZW1zKS4gXG4gICAgICDQn9GA0LjQu9C+0LbQtdC90LjQtSDQv9GA0LXQtNGB0YLQsNCy0LvRj9C10YIg0YHQvtCx0L7QuSDQv9GA0L7RgdGC0L7QuSDQutCw0LvRjNC60YPQu9GP0YLQvtGALjwvcD5cbiAgICAgIDxwPtCSINC/0YDQvtC10LrRgtC1INC/0YDQuNC80LXQvdC10L3RizogPGI+SFRNTDU8L2I+LCA8Yj5DU1MzPC9iPiwgPGI+SmF2YVNjcmlwdDwvYj4uPC9wPmAsXG4gICAgfSxcbiAgICBsaW5rR2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL0FuZHJlaU1pbGFzaGV2aWNoL2NhbGN1bGF0b3InLFxuICAgIGxpbmtEZW1vOiAnaHR0cHM6Ly9hbmRyZWltaWxhc2hldmljaC5naXRodWIuaW8vQ2FsY3VsYXRvci8nLFxuICAgIGF0dHI6ICdkYXRhLWh0bWw9XCJ0cnVlXCIgZGF0YS1jc3M9XCJ0cnVlXCIgZGF0YS1qcz1cInRydWVcIiBkYXRhLXNhc3M9XCJmYWxzZVwiIGRhdGEtd2VicGFjaz1cImZhbHNlXCInLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNraWxscyA9IFtcbiAgeyBkZXNjcmlwdGlvbjogJ0hUTUw1JywgaWNvbjogJ2Fzc2V0cy9pY29ucy9odG1sNV9pY29uLnBuZycgfSxcbiAgeyBkZXNjcmlwdGlvbjogJ0NTUzMnLCBpY29uOiAnYXNzZXRzL2ljb25zL2NzczNfaWNvbi5wbmcnIH0sXG4gIHsgZGVzY3JpcHRpb246ICdKYXZhU2NyaXB0JywgaWNvbjogJ2Fzc2V0cy9pY29ucy9qc19pY29uLnBuZycgfSxcbiAgeyBkZXNjcmlwdGlvbjogJ1NBU1MnLCBpY29uOiAnYXNzZXRzL2ljb25zL3Nhc3NfaWNvbi5wbmcnIH0sXG4gIHsgZGVzY3JpcHRpb246ICdHaXQnLCBpY29uOiAnYXNzZXRzL2ljb25zL2dpdF9pY29uLnBuZycgfSxcbiAgeyBkZXNjcmlwdGlvbjogJ0dpdEh1YicsIGljb246ICdhc3NldHMvaWNvbnMvZ2l0aHViX2ljb24ucG5nJyB9LFxuICB7IGRlc2NyaXB0aW9uOiAnV2VicGFjaycsIGljb246ICdhc3NldHMvaWNvbnMvd2VicGFja19pY29uLnBuZycgfSxcbl07XG5cbmV4cG9ydCBjb25zdCB0ZWNobm9sb2dpZXMgPSBbXG4gIHsgbmFtZTogJ0FsbCcgfSxcbiAgeyBuYW1lOiAnSFRNTDUnIH0sXG4gIHsgbmFtZTogJ0NTUzMnIH0sXG4gIHsgbmFtZTogJ1NBU1MnIH0sXG4gIHsgbmFtZTogJ0pTJyB9LFxuICB7IG5hbWU6ICdXZWJwYWNrJyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHBhZ2VDb250ZW50ID0ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcXVvdGUtcHJvcHNcbiAgJ3J1Jzoge1xuICAgIGhvbWU6ICfQlNC+0LzQvtC5JyxcbiAgICBza2lsbHM6ICfQndCw0LLRi9C60LgnLFxuICAgIHBvcnRmb2xpbzogJ9Cf0L7RgNGC0YTQvtC70LjQvicsXG4gICAgYWJvdXQ6ICfQntCx0L4g0LzQvdC1JyxcbiAgICBjb250YWN0czogJ9Ca0L7QvdGC0LDQutGC0YsnLFxuICAgIHN0cmluZ3M6IFsn0J/RgNC40LLQtdGCIScsXG4gICAgICAn0K8g0JDQvdC00YDQtdC5IScsXG4gICAgICAn0Lgg0Y8gV2ViINGA0LDQt9GA0LDQsdC+0YLRh9C40LohJyxcbiAgICBdLFxuICAgIGxlYXJuOiAnPHA+0KPQt9C90LDRgtGMINCx0L7Qu9GM0YjQtTwvcD4nLFxuICAgIHNraWxsc0hlYWRlcjogJ9Ci0LXRhdC90LjRh9C10YHQutC40LUg0L3QsNCy0YvQutC4JyxcbiAgICBuYW1lOiAnPHA+0JjQvNGPPC9wPicsXG4gICAgbmFtZVBsYWNlaG9sZGVyOiAn0JLQstC10LTQuNGC0LUg0LLQsNGI0LUg0LjQvNGPJyxcbiAgICBlbWFpbFBsYWNlaG9sZGVyOiAn0JLQstC10LTQuNGC0LUg0LLQsNGIIGVtYWlsJyxcbiAgICB0ZXh0YXJlYTogJ9CS0LDRiNC1INGB0L7QvtCx0YnQtdC90LjQtScsXG4gICAgdGV4dGFyZWFQbGFjZWhvbGRlcjogJ9CS0LLQtdC00LjRgtC1INCy0LDRiNC1INGB0L7QvtCx0YnQtdC90LjQtScsXG4gICAgc3VibWl0OiAn0J7RgtC/0YDQsNCy0LjRgtGMINGB0L7QvtCx0YnQtdC90LjQtScsXG4gICAgZGVtbzogJ9CU0LXQvNC+0L3RgdGC0YDQsNGG0LjRjycsXG4gICAgYWJvdXREZXNjcmlwdGlvbjogYDxiPtCf0LDRgNCwINGB0LvQvtCyINC+0LHQviDQvNC90LU6PC9iPjxici8+XG4gICAgPHVsPlxuICAgIDxsaT4g0J7QutC+0L3Rh9C40Lsg0LDQstC40LDRhtC40L7QvdC90YvQuSDRhNCw0LrRg9C70YzRgtC10YIg0JLQvtC10L3QvdC+0Lkg0LDQutCw0LTQtdC80LjQuCDQoNC10YHQv9GD0LHQu9C40LrQuCDQkdC10LvQsNGA0YPRgdGMLjwvbGk+XG4gICAgPGxpPiDQodC/0LXRhtC40LDQu9GM0L3QvtGB0YLRjDog0KLQtdGF0L3QuNGH0LXRgdC60LDRjyDRjdC60YHQv9C70YPQsNGC0LDRhtC40Y8g0L/QuNC70L7RgtC40YDRg9C10LzRi9GFINC70LXRgtCw0YLQtdC70YzQvdGL0YUg0LDQv9C/0LDRgNCw0YLQvtCyINC4INC40YUg0YHQuNC70L7QstGL0YUg0YPRgdGC0LDQvdC+0LLQvtC6LjwvbGk+XG4gICAgPGxpPiDQkiDQsNCy0LjQsNGG0LjQuCDQtNC+0LHQuNC70YHRjyDQsdC+0LvRjNGI0LjRhSDQstGL0YHQvtGCLCDRgdGC0LDQsiDQuNC90LbQtdC90LXRgNC+0Lwg0LjQvdC20LXQvdC10YDQvdC+LdCw0LLQuNCw0YbQuNC+0L3QvdC+0Lkg0YHQu9GD0LbQsdGLINCw0LLQuNCw0YbQuNC+0L3QvdC+0Lkg0Y3RgdC60LDQtNGA0LjQu9GM0LggKNC90LAg0JjQuy03Niwg0JDQvS0yNiksINC90L4g0Y3RgtC+INC/0L7RgtC+0LvQvtC6INGA0LDQt9Cy0LjRgtC40Y8g0LDQstC40LDRhtC40L7QvdC90L7Qs9C+INC40L3QttC10L3QtdGA0LAuPC9saT5cbiAgICA8bGk+INCg0LXRiNC40Lsg0L7RgtC60YDRi9GC0Ywg0LTQu9GPINGB0LXQsdGPINC90L7QstGL0LUg0LPQvtGA0LjQt9C+0L3RgtGLINC4INC/0YDQvtGI0LXQuyDQutGD0YDRgdGLOiBTa2lsbFVwKFVrcmFpbmUpIC0gQmFzaWMgV2ViIGFuZCBTUUwgZm9yIHNvZnR3YXJlXG4gICAgdGVzdGluZyAoMjAyMCkg0LggwqtUaGUgUm9sbGluZyBTY29wZXMgc2Nob29swrsgKEVQQU0gU3lzdGVtcylcbiAgICAoMjAyMSkuPC9saT5cbiAgICA8bGk+IEVuZ2xpc2g6IEEyIC0gUHJlLWludGVybWVkaWF0ZS48L2xpPjwvdWw+YCxcbiAgfSxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHF1b3RlLXByb3BzXG4gICdlbic6IHtcbiAgICBob21lOiAnSG9tZScsXG4gICAgc2tpbGxzOiAnU2tpbGxzJyxcbiAgICBwb3J0Zm9saW86ICdQb3J0ZmlsaW8nLFxuICAgIGFib3V0OiAnQWJvdXQgbWUnLFxuICAgIGNvbnRhY3RzOiAnQ29udGFjdHMnLFxuICAgIHN0cmluZ3M6IFsnSGVsbG8hJyxcbiAgICAgIFwiSSdtIEFuZHJlaSFcIixcbiAgICAgIFwiSSdtIGEgV2ViIERldmVsb3BlciFcIixcbiAgICBdLFxuICAgIGxlYXJuOiAnPHA+TGVhcm4gbW9yZSBhYm91dCB3aGF0IEkgZG88L3A+JyxcbiAgICBza2lsbHNIZWFkZXI6ICdTa2lsbHMnLFxuICAgIG5hbWU6ICc8cD5OYW1lPC9wPicsXG4gICAgbmFtZVBsYWNlaG9sZGVyOiAnRW50ZXIgeW91ciBuYW1lJyxcbiAgICBlbWFpbFBsYWNlaG9sZGVyOiAnRW50ZXIgeW91ciBlbWFpbCcsXG4gICAgdGV4dGFyZWE6ICdZb3VyIG1lc3NhZ2UnLFxuICAgIHRleHRhcmVhUGxhY2Vob2xkZXI6ICdFbnRlciB5b3VyIG1lc3NhZ2UnLFxuICAgIHN1Ym1pdDogJ1NlbmQgbWVzc2FnZScsXG4gICAgZGVtbzogJ0RlbW8nLFxuICAgIGFib3V0RGVzY3JpcHRpb246IGA8Yj5BIGNvdXBsZSBvZiB3b3JkcyBhYm91dCBtZTo8L2I+PGJyLz5cbiAgICA8dWw+XG4gICAgPGxpPkVkdWNhdGlvbjogTWlsaXRhcnkgQWNhZGVteSBvZiB0aGUgUmVwdWJsaWMgb2YgQmVsYXJ1c1xuICAgICgyMDExKS4gQXZpYXRpb24gZmFjdWx0eS48L2xpPlxuICAgIDxsaT5TcGVjaWFsdHk6IFRlY2huaWNhbCBleHBsb2l0YXRpb24gb2YgbWFubmVkIGFpcmNyYWZ0cyBhbmRcbiAgICB0aGVpciBwb3dlciB1bml0cy48L2xpPlxuICAgIDxsaT5QcmV2aW91cyBqb2I6IEVuZ2luZWVyIG9mIHRoZSBhdmlhdGlvbiBlbmdpbmVlcmluZyBkZXBhcnRtZW50XG4gICAgb2YgdGhlIGF2aWF0aW9uIHNxdWFkcm9uIChJTC03NiwgQW4tMjYpLjwvbGk+XG4gICAgPGxpPkNvdXJzZXM6IFNraWxsVXAoVWtyYWluZSkgLSBCYXNpYyBXZWIgYW5kIFNRTCBmb3Igc29mdHdhcmVcbiAgICB0ZXN0aW5nICgyMDIwKSBhbmQgwqtUaGUgUm9sbGluZyBTY29wZXMgc2Nob29swrsgKEVQQU0gU3lzdGVtcylcbiAgICAoMjAyMSkuPC9saT5cbiAgICA8bGk+RW5nbGlzaDogQTIgLSBQcmUtaW50ZXJtZWRpYXRlLjwvbGk+PC91bD5gLFxuICB9LFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWRlc3RydWN0dXJpbmcgKi9cbi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMgKi9cbmltcG9ydCAnLi4vc2Nzcy9pbmRleC5zY3NzJztcbmltcG9ydCBUeXBlZCBmcm9tICd0eXBlZC5qcyc7XG5pbXBvcnQge1xuICBwb3J0Zm9saW8sIHNraWxscywgdGVjaG5vbG9naWVzLCBwYWdlQ29udGVudCxcbn0gZnJvbSAnLi9jb250ZW50LmpzJztcblxuY29uc3Qgc2tpbGxzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraWxsc193cmFwcGVyJyk7XG5jb25zdCBwb3J0Zm9saW9CdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvX2J1dHRvbl9jb250YWluZXInKTtcbmNvbnN0IHBvcnRmb2xpb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW9fd3JhcHBlcicpO1xuY29uc3Qgc2tpbGxzRGVsYXkgPSAyMDA7XG5jb25zdCBhb3NEdXJhdGlvbiA9IDUwMDtcbmNvbnN0IHBvcnRmb2xpb0RlbGF5ID0gNTAwO1xuY29uc3QgcGhvdG9zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJvdXRfbWVfaW1hZ2VfaXRlbScpKTtcbmNvbnN0IHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXJfd3JhcHBlcicpO1xuY29uc3QgY2lyY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpcmNsZScpO1xuXG5jb25zdCBza2lsbHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX3NraWxscycpO1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25faG9tZScpO1xuY29uc3QgcG9ydGZvbGlvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9wb3J0Zm9saW8nKTtcbmNvbnN0IGFib3V0TWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX2Fib3V0X21lJyk7XG5jb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9jb250YWN0cycpO1xuY29uc3QgbGVhcm5Nb3JlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlYXJuX21vcmUnKTtcbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcbmNvbnN0IGxhbmdCdXR0b25FbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbicpO1xuY29uc3QgbGFuZ0J1dHRvblJ1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJ1Jyk7XG5cbmNvbnN0IHNraWxsU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2lsbHMnKTtcbmNvbnN0IHBvcnRmb2xpb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvJyk7XG5jb25zdCBhYm91dE1lU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9tZScpO1xuY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdF9zZWN0aW9uJyk7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcblxuLy8gY29uc3QgaGVsbG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVsbG9fc3BhbicpO1xuY29uc3Qgc2tpbGxzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraWxsc19oZWFkZXInKTtcbmNvbnN0IHBvcnRmb2xpb0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW9faGVhZGVyJyk7XG5jb25zdCBhYm91dE1lSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0X21lX2hlYWRlcicpO1xuY29uc3QgY29udGFjdHNIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdF9oZWFkZXInKTtcbmNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG5jb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xuY29uc3QgaW5wdXRNYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsJyk7XG5jb25zdCBpbnB1dE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZScpO1xuY29uc3QgbGFiZWxNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKTtcbmNvbnN0IGFib3V0TWVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9tZV9kZXNjcmlwdGlvbicpO1xuXG5sZXQgbGFuZ3VhZ2UgPSAnZW4nO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBzdHJpbmdzOiBwYWdlQ29udGVudFtgJHtsYW5ndWFnZX1gXS5zdHJpbmdzLFxuICB0eXBlU3BlZWQ6IDYwLFxuICBiYWNrRGVsYXk6IDEyMDAsXG4gIGJhY2tTcGVlZDogNDMsXG4gIGxvb3A6IHRydWUsXG4gIGZhZGVPdXQ6IGZhbHNlLFxufTtcblxubGV0IHR5cGVkID0gbmV3IFR5cGVkKCcudHlwZWQnLCBvcHRpb25zKTtcblxuZnVuY3Rpb24gc2V0U2tpbGxzKGRhdGEpIHtcbiAgZGF0YS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGl2Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdza2lsbHNfaXRlbSc7XG4gICAgZGl2Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1hb3MnLCAnZmxpcC1sZWZ0Jyk7XG4gICAgZGl2Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1hb3MtZGVsYXknLCBpbmRleCAqIHNraWxsc0RlbGF5KTtcbiAgICBkaXZDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWFvcy1kdXJhdGlvbicsIGFvc0R1cmF0aW9uICogMik7XG4gICAgZGl2LmNsYXNzTmFtZSA9ICdza2lsbHNfaW1hZ2UnO1xuICAgIHAuY2xhc3NOYW1lID0gJ3NraWxsc19kZXNjcmlwdGlvbic7XG4gICAgZGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtlbGVtZW50Lmljb259KWA7XG4gICAgcC50ZXh0Q29udGVudCA9IGVsZW1lbnQuZGVzY3JpcHRpb247XG4gICAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKHApO1xuICAgIHNraWxsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZDb250YWluZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0UG9ydGZvbGlvQnV0dG9uKGRhdGEpIHtcbiAgZGF0YS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSAncG9ydGZvbGlvX2J1dHRvbl9pdGVtJztcbiAgICBkaXYudGV4dENvbnRlbnQgPSBlbGVtZW50Lm5hbWU7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1hb3MnLCAnZmFkZS1kb3duJyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1hb3MtZGVsYXknLCAoaW5kZXggKiBza2lsbHNEZWxheSkgLyAyKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLWFvcy1kdXJhdGlvbicsIGFvc0R1cmF0aW9uKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLWJ1dHRvbicsIGVsZW1lbnQubmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICBwb3J0Zm9saW9CdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFBvcnRmb2xpb0l0ZW0oZGF0YSkge1xuICBkYXRhLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgbGV0IHNpZGU7XG4gICAgaWYgKGluZGV4ICUgMiA9PT0gMCkge1xuICAgICAgc2lkZSA9ICd1cCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpZGUgPSAnZG93bic7XG4gICAgfVxuICAgIHBvcnRmb2xpb0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvX2l0ZW1cIiBkYXRhLWFvcz1cImZsaXAtJHtzaWRlfVwiIFxuICAgIGRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnQ9XCJib3R0b20tY2VudGVyXCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgZGF0YS1hb3MtYW5jaG9yPVwiLnBvcnRmb2xpb19oZWFkZXJcIiBkYXRhLWFvcy1kZWxheT1cIiR7aW5kZXggKiBwb3J0Zm9saW9EZWxheX1cIlxuICAgIGRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnQ9XCJjZW50ZXItYm90dG9tIFwiICR7cG9ydGZvbGlvW2luZGV4XS5hdHRyfT5cbiAgICA8aDM+JHtlbGVtZW50Lm5hbWV9PC9oMz5cbiAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvX2l0ZW1fYm9keVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpb19pdGVtX2ltYWdlXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7ZWxlbWVudC5pY29ufScpXCIgZGF0YS10eXBlPSdpbWFnZScgZGF0YS1wbGFjZT0ncG9ydGZvbGlvJz48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW9faXRlbV9kZXNjcmlwdGlvblwiPjxwPiR7ZWxlbWVudC5kZXNjcmlwdGlvbltgJHtsYW5ndWFnZX1gXX08L3A+PC9kaXY+ICBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvX2l0ZW1fYnV0dG9uX2NvbnRhaW5lciBidXR0b25cIiA+XG4gICAgICA8YSBocmVmPVwiJHtlbGVtZW50LmxpbmtEZW1vfVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvX2J1dHRvbl9pdGVtXCI+JHtwYWdlQ29udGVudFtgJHtsYW5ndWFnZX1gXS5kZW1vfTwvZGl2PlxuICAgICAgPC9hPlxuICAgICAgPGEgaHJlZj1cIiR7ZWxlbWVudC5saW5rR2l0fVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvX2J1dHRvbl9pdGVtXCI+R2l0SHViPC9kaXY+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gIDwvZGl2PmApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyBjb25zdFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfTtcbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNjcm9sbChibG9jaywgZGVsdGFIZWlnaHQgPSBoZWFkZXIub2Zmc2V0SGVpZ2h0KSB7XG4gIHdpbmRvdy5zY3JvbGxUbyh7IGxlZnQ6IDAsIHRvcDogYmxvY2sub2Zmc2V0VG9wIC0gZGVsdGFIZWlnaHQgKyAxLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG59XG5cbmNvbnN0IHNldEJ1dHRvbnNBY3RpdmUgPSAoKSA9PiB7XG4gIGNvbnN0IGltYWdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcnRmb2xpb19pdGVtX2ltYWdlJykpO1xuICBwaG90b3MuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Fib3V0X21lX2ltYWdlX2l0ZW1fbGFyZ2UnKSk7XG4gIGltYWdlcy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvX2l0ZW1faW1hZ2VfYWN0aXZlJykpO1xuICBjb25zdCBzY3JvbGxEaXN0YW5jZSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgcG9ydGZvbGlvQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBpZiAoc2Nyb2xsRGlzdGFuY2UgPj0gc2tpbGxTZWN0aW9uLm9mZnNldFRvcCAtIGhlYWRlci5vZmZzZXRIZWlnaHQgJiYgc2Nyb2xsRGlzdGFuY2UgKyBoZWFkZXIub2Zmc2V0SGVpZ2h0IDwgcG9ydGZvbGlvU2VjdGlvbi5vZmZzZXRUb3ApIHtcbiAgICBza2lsbHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH0gZWxzZSB7XG4gICAgc2tpbGxzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9XG4gIGlmIChzY3JvbGxEaXN0YW5jZSA+PSBwb3J0Zm9saW9TZWN0aW9uLm9mZnNldFRvcCAtIGhlYWRlci5vZmZzZXRIZWlnaHQgJiYgc2Nyb2xsRGlzdGFuY2UgPD0gcG9ydGZvbGlvU2VjdGlvbi5vZmZzZXRUb3AgKyBwb3J0Zm9saW9TZWN0aW9uLm9mZnNldEhlaWdodCkge1xuICAgIHBvcnRmb2xpb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfVxuICBpZiAoc2Nyb2xsRGlzdGFuY2UgPj0gYWJvdXRNZVNlY3Rpb24ub2Zmc2V0VG9wIC0gaGVhZGVyLm9mZnNldEhlaWdodCAmJiBzY3JvbGxEaXN0YW5jZSA8PSBhYm91dE1lU2VjdGlvbi5vZmZzZXRUb3AgKyBhYm91dE1lU2VjdGlvbi5vZmZzZXRIZWlnaHQpIHtcbiAgICBhYm91dE1lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9IGVsc2Uge1xuICAgIGFib3V0TWVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH1cbiAgaWYgKHNjcm9sbERpc3RhbmNlID49IGNvbnRhY3RTZWN0aW9uLm9mZnNldFRvcCAtIGhlYWRlci5vZmZzZXRIZWlnaHQgJiYgc2Nyb2xsRGlzdGFuY2UgPD0gY29udGFjdFNlY3Rpb24ub2Zmc2V0VG9wICsgY29udGFjdFNlY3Rpb24ub2Zmc2V0SGVpZ2h0KSB7XG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfSBlbHNlIHtcbiAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9XG4gIGlmIChzY3JvbGxEaXN0YW5jZSA8IHNraWxsU2VjdGlvbi5vZmZzZXRUb3AgLSBoZWFkZXIub2Zmc2V0SGVpZ2h0KSB7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0TGFuZ3VhZ2UoKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ3VhZ2UnKSA9PT0gbnVsbCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5ndWFnZScsICdlbicpO1xuICB9IGVsc2Uge1xuICAgIGxhbmd1YWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmd1YWdlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9ydGZvbGlvU29ydChhLCBkYXRhLCBhcnJheSkge1xuICBpZiAoZGF0YSA9PT0gYSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycmF5W2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgaWYgKGFycmF5W2ldLmRhdGFzZXRbYV0gPT09ICd0cnVlJykge1xuICAgICAgICBhcnJheVtpXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0UGFnZUNvbnRlbnQoKSB7XG4gIHR5cGVkLmRlc3Ryb3koKTtcbiAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IHBhZ2VDb250ZW50W2Ake2xhbmd1YWdlfWBdLmhvbWU7XG4gIHNraWxsc0J1dHRvbi50ZXh0Q29udGVudCA9IHBhZ2VDb250ZW50W2Ake2xhbmd1YWdlfWBdLnNraWxscztcbiAgcG9ydGZvbGlvQnV0dG9uLnRleHRDb250ZW50ID0gcGFnZUNvbnRlbnRbYCR7bGFuZ3VhZ2V9YF0ucG9ydGZvbGlvO1xuICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gcGFnZUNvbnRlbnRbYCR7bGFuZ3VhZ2V9YF0uY29udGFjdHM7XG4gIGFib3V0TWVCdXR0b24udGV4dENvbnRlbnQgPSBwYWdlQ29udGVudFtgJHtsYW5ndWFnZX1gXS5hYm91dDtcbiAgbGVhcm5Nb3JlQnV0dG9uLmlubmVySFRNTCA9IHBhZ2VDb250ZW50W2Ake2xhbmd1YWdlfWBdLmxlYXJuO1xuICBza2lsbHNIZWFkZXIudGV4dENvbnRlbnQgPSBwYWdlQ29udGVudFtgJHtsYW5ndWFnZX1gXS5za2lsbHNIZWFkZXI7XG4gIHBvcnRmb2xpb0hlYWRlci50ZXh0Q29udGVudCA9IHBhZ2VDb250ZW50W2Ake2xhbmd1YWdlfWBdLnBvcnRmb2xpbztcbiAgYWJvdXRNZUhlYWRlci50ZXh0Q29udGVudCA9IHBhZ2VDb250ZW50W2Ake2xhbmd1YWdlfWBdLmFib3V0O1xuICBjb250YWN0c0hlYWRlci50ZXh0Q29udGVudCA9IHBhZ2VDb250ZW50W2Ake2xhbmd1YWdlfWBdLmNvbnRhY3RzO1xuICBpbnB1dE5hbWUucGxhY2Vob2xkZXIgPSBwYWdlQ29udGVudFtgJHtsYW5ndWFnZX1gXS5uYW1lUGxhY2Vob2xkZXI7XG4gIGxhYmVsTmFtZS5pbm5lckhUTUwgPSBwYWdlQ29udGVudFtgJHtsYW5ndWFnZX1gXS5uYW1lO1xuICBpbnB1dE1haWwucGxhY2Vob2xkZXIgPSBwYWdlQ29udGVudFtgJHtsYW5ndWFnZX1gXS5lbWFpbFBsYWNlaG9sZGVyO1xuICBpbnB1dE1lc3NhZ2UucGxhY2Vob2xkZXIgPSBwYWdlQ29udGVudFtgJHtsYW5ndWFnZX1gXS50ZXh0YXJlYVBsYWNlaG9sZGVyO1xuICBsYWJlbE1lc3NhZ2UudGV4dENvbnRlbnQgPSBwYWdlQ29udGVudFtgJHtsYW5ndWFnZX1gXS50ZXh0YXJlYTtcbiAgc3VibWl0LnZhbHVlID0gcGFnZUNvbnRlbnRbYCR7bGFuZ3VhZ2V9YF0udGV4dGFyZWFQbGFjZWhvbGRlcjtcbiAgb3B0aW9ucy5zdHJpbmdzID0gcGFnZUNvbnRlbnRbYCR7bGFuZ3VhZ2V9YF0uc3RyaW5ncztcbiAgYWJvdXRNZURlc2NyaXB0aW9uLmlubmVySFRNTCA9IHBhZ2VDb250ZW50W2Ake2xhbmd1YWdlfWBdLmFib3V0RGVzY3JpcHRpb247XG4gIHR5cGVkID0gbmV3IFR5cGVkKCcudHlwZWQnLCBvcHRpb25zKTtcbiAgaWYgKGxhbmd1YWdlID09PSAnZW4nKSB7XG4gICAgbGFuZ0J1dHRvbkVuLmNsYXNzTGlzdC5hZGQoJ2xhbmdfYWN0aXZlJyk7XG4gICAgbGFuZ0J1dHRvblJ1LmNsYXNzTGlzdC5yZW1vdmUoJ2xhbmdfYWN0aXZlJyk7XG4gIH0gZWxzZSB7XG4gICAgbGFuZ0J1dHRvblJ1LmNsYXNzTGlzdC5hZGQoJ2xhbmdfYWN0aXZlJyk7XG4gICAgbGFuZ0J1dHRvbkVuLmNsYXNzTGlzdC5yZW1vdmUoJ2xhbmdfYWN0aXZlJyk7XG4gIH1cbn1cblxuZ2V0TGFuZ3VhZ2UoKTtcbnNldFBhZ2VDb250ZW50KCk7XG5zZXRQb3J0Zm9saW9JdGVtKHBvcnRmb2xpbyk7XG5zZXRTa2lsbHMoc2tpbGxzKTtcbnNldFBvcnRmb2xpb0J1dHRvbih0ZWNobm9sb2dpZXMpO1xuXG5za2lsbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzY3JvbGwoc2tpbGxTZWN0aW9uKSk7XG5sZWFybk1vcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzY3JvbGwoc2tpbGxTZWN0aW9uKSk7XG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2Nyb2xsKDAsIDApKTtcbnBvcnRmb2xpb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNjcm9sbChwb3J0Zm9saW9TZWN0aW9uKSk7XG5hYm91dE1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2Nyb2xsKGFib3V0TWVTZWN0aW9uKSk7XG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2Nyb2xsKGNvbnRhY3RTZWN0aW9uKSk7XG5cbmxhbmdCdXR0b25Fbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcG9ydGZvbGlvQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBsYW5ndWFnZSA9IGxhbmdCdXR0b25Fbi5kYXRhc2V0Lmxhbmc7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5ndWFnZScsICdlbicpO1xuICBzZXRQYWdlQ29udGVudCgpO1xuICBzZXRQb3J0Zm9saW9JdGVtKHBvcnRmb2xpbyk7XG59KTtcblxubGFuZ0J1dHRvblJ1LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwb3J0Zm9saW9Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGxhbmd1YWdlID0gbGFuZ0J1dHRvblJ1LmRhdGFzZXQubGFuZztcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhbmd1YWdlJywgJ3J1Jyk7XG4gIHNldFBhZ2VDb250ZW50KCk7XG4gIHNldFBvcnRmb2xpb0l0ZW0ocG9ydGZvbGlvKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2Uoc2V0QnV0dG9uc0FjdGl2ZSwgNDAwKSk7XG5cbnBvcnRmb2xpb0J1dHRvbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcnRmb2xpb19pdGVtJykpO1xuICBjb25zdCBkYXRhID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuYnV0dG9uO1xuICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHBvcnRmb2xpb0J1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3J0Zm9saW9fYnV0dG9uX2l0ZW0nKSk7XG4gIHBvcnRmb2xpb0J1dHRvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvX2FjdGl2ZScpO1xuICB9KTtcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpb19hY3RpdmUnKTtcbiAgaWYgKGRhdGEgPT09ICdhbGwnKSB7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH0pO1xuICB9XG4gIHBvcnRmb2xpb1NvcnQoJ2h0bWwnLCBkYXRhLCBwcm9qZWN0cyk7XG4gIHBvcnRmb2xpb1NvcnQoJ2NzcycsIGRhdGEsIHByb2plY3RzKTtcbiAgcG9ydGZvbGlvU29ydCgnc2FzcycsIGRhdGEsIHByb2plY3RzKTtcbiAgcG9ydGZvbGlvU29ydCgnanMnLCBkYXRhLCBwcm9qZWN0cyk7XG4gIHBvcnRmb2xpb1NvcnQoJ3dlYnBhY2snLCBkYXRhLCBwcm9qZWN0cyk7XG59KTtcblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBjb25zdCBpbWFnZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3J0Zm9saW9faXRlbV9pbWFnZScpKTtcbiAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LnR5cGUgPT09ICdpbWFnZScgJiYgZXZlbnQudGFyZ2V0LmRhdGFzZXQucGxhY2UgPT09ICdhYm91dCcpIHtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWJvdXRfbWVfaW1hZ2VfaXRlbV9sYXJnZScpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LnR5cGUgPT09ICdpbWFnZScgJiYgZXZlbnQudGFyZ2V0LmRhdGFzZXQucGxhY2UgPT09ICdwb3J0Zm9saW8nKSB7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3BvcnRmb2xpb19pdGVtX2ltYWdlX2FjdGl2ZScpO1xuICB9IGVsc2Uge1xuICAgIHBob3Rvcy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWJvdXRfbWVfaW1hZ2VfaXRlbV9sYXJnZScpKTtcbiAgICBpbWFnZXMuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcnRmb2xpb19pdGVtX2ltYWdlX2FjdGl2ZScpKTtcbiAgfVxufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBjaXJjbGUuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVyJyk7XG4gIHByZWxvYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdwcmVsb2FkZXJfaGlkZGVuJyk7XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NjcmlwdHMvc2NyaXB0LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==