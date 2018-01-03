webpackJsonp([1],{

/***/ "+7n6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MetronomeSVG_vue__ = __webpack_require__("qTSk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MetronomeSVG_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MetronomeSVG_vue__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_391c7750_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MetronomeSVG_vue__ = __webpack_require__("dHfe");
function injectStyle (ssrContext) {
  __webpack_require__("dF6M")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-391c7750"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MetronomeSVG_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_391c7750_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MetronomeSVG_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "7nnt":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "7zjD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8BZD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "BJXM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "DWzC":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "E0Qv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JDCO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ad3d77c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("zOHI");
function injectStyle (ssrContext) {
  __webpack_require__("BJXM")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ad3d77c_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./src/App.vue
var App = __webpack_require__("M93x");

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/SiteHeader.vue
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SiteHeader = ({
  computed: {
    metronomeOn: function metronomeOn() {
      return this.$store.state.metronomeOn;
    },
    beatsPerMeasure: function beatsPerMeasure() {
      return this.$store.state.beatsPerMeasure;
    }
  },
  methods: {
    beatClass: function beatClass(beatNumber) {
      var currentBeat = this.$store.state.currentBeat;
      return currentBeat === beatNumber - 1 ? 'current-beat beat' : 'beat';
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-281ddede","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/SiteHeader.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header-container"},[(!_vm.metronomeOn)?_c('h1',{staticClass:"header"},[_vm._v("NSTS Metronome")]):_vm._e(),_vm._v(" "),(_vm.metronomeOn)?_c('div',{staticClass:"beat-counter"},_vm._l((_vm.beatsPerMeasure),function(number){return _c('div',{class:_vm.beatClass(number)})})):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_SiteHeader = (esExports);
// CONCATENATED MODULE: ./src/components/SiteHeader.vue
function injectStyle (ssrContext) {
  __webpack_require__("7nnt")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-281ddede"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  SiteHeader,
  components_SiteHeader,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_SiteHeader = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-slider-component/dist/index.js
var dist = __webpack_require__("GDE4");
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Slider.vue
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Slider = ({
  components: {
    VueSlider: dist_default.a
  },
  props: {
    cssClass: String,
    min: Number,
    max: Number,
    value: {
      type: Number,
      required: true
    },
    onValueChange: {
      type: Function,
      required: true
    }
  },
  computed: {
    combinedCssClass: function combinedCssClass() {
      return 'metronome-slider ' + this.cssClass;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9787eb80","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Slider.vue
var Slider_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.combinedCssClass},[_c('vue-slider',{attrs:{"tooltip":"false","value":_vm.value,"min":_vm.min,"max":_vm.max},on:{"input":_vm.onValueChange}})],1)}
var Slider_staticRenderFns = []
var Slider_esExports = { render: Slider_render, staticRenderFns: Slider_staticRenderFns }
/* harmony default export */ var components_Slider = (Slider_esExports);
// CONCATENATED MODULE: ./src/components/Slider.vue
function Slider_injectStyle (ssrContext) {
  __webpack_require__("8BZD")
}
var Slider_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Slider___vue_template_functional__ = false
/* styles */
var Slider___vue_styles__ = Slider_injectStyle
/* scopeId */
var Slider___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Slider___vue_module_identifier__ = null
var Slider_Component = Slider_normalizeComponent(
  Slider,
  components_Slider,
  Slider___vue_template_functional__,
  Slider___vue_styles__,
  Slider___vue_scopeId__,
  Slider___vue_module_identifier__
)

/* harmony default export */ var src_components_Slider = (Slider_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Display.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Display = ({
  components: {
    Slider: src_components_Slider
  },
  computed: {
    displayHeaderText: function displayHeaderText() {
      return this.$store.state.bpm + ' BPM';
    },
    bpm: function bpm() {
      return this.$store.state.bpm;
    }
  },
  methods: {
    decrementBPM: function decrementBPM() {
      this.$store.commit({
        type: 'changeBPM',
        bpm: this.$store.state.bpm - 1
      });
    },
    incrementBPM: function incrementBPM() {
      this.$store.commit({
        type: 'changeBPM',
        bpm: this.$store.state.bpm + 1
      });
    },
    changeBPM: function changeBPM(event) {
      this.$store.commit({
        type: 'changeBPM',
        bpm: event
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ff036794","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Display.vue
var Display_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"display"},[_c('h2',{staticClass:"title"},[_vm._v("Beats Per Minute")]),_vm._v(" "),_c('div',{staticClass:"button-container"},[_c('p',{staticClass:"button decrement-button",on:{"click":_vm.decrementBPM}},[_vm._v("\n        -\n      ")]),_vm._v(" "),_c('p',{staticClass:"bpm"},[_vm._v(_vm._s(_vm.bpm))]),_vm._v(" "),_c('p',{staticClass:"button increment-button",on:{"click":_vm.incrementBPM}},[_vm._v("\n        +\n      ")])]),_vm._v(" "),_c('slider',{attrs:{"cssClass":"blue-slider","on-value-change":_vm.changeBPM,"value":_vm.bpm,"min":10,"max":300}})],1)}
var Display_staticRenderFns = []
var Display_esExports = { render: Display_render, staticRenderFns: Display_staticRenderFns }
/* harmony default export */ var components_Display = (Display_esExports);
// CONCATENATED MODULE: ./src/components/Display.vue
function Display_injectStyle (ssrContext) {
  __webpack_require__("DWzC")
}
var Display_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Display___vue_template_functional__ = false
/* styles */
var Display___vue_styles__ = Display_injectStyle
/* scopeId */
var Display___vue_scopeId__ = "data-v-ff036794"
/* moduleIdentifier (server only) */
var Display___vue_module_identifier__ = null
var Display_Component = Display_normalizeComponent(
  Display,
  components_Display,
  Display___vue_template_functional__,
  Display___vue_styles__,
  Display___vue_scopeId__,
  Display___vue_module_identifier__
)

/* harmony default export */ var src_components_Display = (Display_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/TimeSignatures.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var TimeSignatures = ({
  components: {
    Slider: src_components_Slider
  },
  props: {
    timeSignatures: {
      type: Array,
      required: true
    }
  },
  computed: {
    beatsPerMeasure: function beatsPerMeasure() {
      return this.$store.state.beatsPerMeasure;
    }
  },
  methods: {
    incrementBeatsPerMeasure: function incrementBeatsPerMeasure() {
      this.$store.commit({
        type: 'changeBeatsPerMeasure',
        beatsPerMeasure: this.$store.state.beatsPerMeasure + 1
      });
    },
    decrementBeatsPerMeasure: function decrementBeatsPerMeasure() {
      this.$store.commit({
        type: 'changeBeatsPerMeasure',
        beatsPerMeasure: this.$store.state.beatsPerMeasure - 1
      });
    },
    changeBeatsPerMeasure: function changeBeatsPerMeasure(event) {
      this.$store.commit({
        type: 'changeBeatsPerMeasure',
        beatsPerMeasure: event
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-874f2024","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/TimeSignatures.vue
var TimeSignatures_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"time-signatures-container"},[_c('h2',{staticClass:"title"},[_vm._v("Beats Per Measure")]),_vm._v(" "),_c('div',{staticClass:"button-container"},[_c('p',{staticClass:"button decrement-button",on:{"click":_vm.decrementBeatsPerMeasure}},[_vm._v("\n      -\n    ")]),_vm._v(" "),_c('p',{staticClass:"beats-per-measure"},[_vm._v(_vm._s(_vm.beatsPerMeasure))]),_vm._v(" "),_c('p',{staticClass:"button increment-button",on:{"click":_vm.incrementBeatsPerMeasure}},[_vm._v("\n      +\n    ")])]),_vm._v(" "),_c('slider',{attrs:{"cssClass":"yellow-slider beats-per-measure-slider","on-value-change":_vm.changeBeatsPerMeasure,"value":_vm.beatsPerMeasure,"min":1,"max":32}}),_vm._v(" "),(false)?_c('div',{staticClass:"time-signatures"},_vm._l((_vm.timeSignatures),function(timeSignature){return _c('div',{staticClass:"time-signature"},[_c('p',{staticClass:"numberator"},[_vm._v(_vm._s(timeSignature.numerator))]),_vm._v(" "),_c('p',{staticClass:"denominator"},[_vm._v(_vm._s(timeSignature.denominator))])])})):_vm._e()],1)}
var TimeSignatures_staticRenderFns = []
var TimeSignatures_esExports = { render: TimeSignatures_render, staticRenderFns: TimeSignatures_staticRenderFns }
/* harmony default export */ var components_TimeSignatures = (TimeSignatures_esExports);
// CONCATENATED MODULE: ./src/components/TimeSignatures.vue
function TimeSignatures_injectStyle (ssrContext) {
  __webpack_require__("t9zP")
  __webpack_require__("s/Bg")
}
var TimeSignatures_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var TimeSignatures___vue_template_functional__ = false
/* styles */
var TimeSignatures___vue_styles__ = TimeSignatures_injectStyle
/* scopeId */
var TimeSignatures___vue_scopeId__ = "data-v-874f2024"
/* moduleIdentifier (server only) */
var TimeSignatures___vue_module_identifier__ = null
var TimeSignatures_Component = TimeSignatures_normalizeComponent(
  TimeSignatures,
  components_TimeSignatures,
  TimeSignatures___vue_template_functional__,
  TimeSignatures___vue_styles__,
  TimeSignatures___vue_scopeId__,
  TimeSignatures___vue_module_identifier__
)

/* harmony default export */ var src_components_TimeSignatures = (TimeSignatures_Component.exports);

// EXTERNAL MODULE: ./src/components/MetronomeSVG.vue
var MetronomeSVG = __webpack_require__("+7n6");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2bcd2381","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/GearSVG.vue
var GearSVG_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"gear-svg",attrs:{"width":"67px","height":"68px","viewBox":"0 0 67 68","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('desc',[_vm._v("Created with Sketch.")]),_vm._v(" "),_c('defs'),_vm._v(" "),_c('g',{attrs:{"id":"Page-1","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"new-gear","fill":"#000000"}},[_c('polygon',{attrs:{"id":"Path-4","points":"30.182373 0.582275391 36.0249023 0.582275391 39.9975586 11.1105957 26.5500488 11.1105957"}}),_vm._v(" "),_c('polygon',{attrs:{"id":"Path-4-Copy","transform":"translate(61.264160, 33.723755) rotate(90.000000) translate(-61.264160, -33.723755) ","points":"58.1727295 28.4595947 64.0152588 28.4595947 67.987915 38.987915 54.5404053 38.987915"}}),_vm._v(" "),_c('polygon',{attrs:{"id":"Path-4-Copy-2","transform":"translate(5.264160, 33.723755) rotate(-90.000000) translate(-5.264160, -33.723755) ","points":"2.17272949 28.4595947 8.01525879 28.4595947 11.987915 38.987915 -1.45959473 38.987915"}}),_vm._v(" "),_c('polygon',{attrs:{"id":"Path-4-Copy-4","transform":"translate(52.476736, 14.476736) rotate(45.000000) translate(-52.476736, -14.476736) ","points":"49.3853054 9.21257586 55.2278346 9.21257586 59.2004909 19.7408962 45.7529811 19.7408962"}}),_vm._v(" "),_c('polygon',{attrs:{"id":"Path-4-Copy-5","transform":"translate(13.523264, 14.476736) rotate(-45.000000) translate(-13.523264, -14.476736) ","points":"10.4318333 9.21257586 16.2743626 9.21257586 20.2470189 19.7408962 6.7995091 19.7408962"}}),_vm._v(" "),_c('polygon',{attrs:{"id":"Path-4-Copy-6","transform":"translate(52.476736, 53.476736) rotate(135.000000) translate(-52.476736, -53.476736) ","points":"49.3853054 48.2125759 55.2278346 48.2125759 59.2004909 58.7408962 45.7529811 58.7408962"}}),_vm._v(" "),_c('polygon',{attrs:{"id":"Path-4-Copy-7","transform":"translate(13.523264, 53.476736) rotate(-135.000000) translate(-13.523264, -53.476736) ","points":"10.4318333 48.2125759 16.2743626 48.2125759 20.2470189 58.7408962 6.7995091 58.7408962"}}),_vm._v(" "),_c('polygon',{attrs:{"id":"Path-4-Copy-3","transform":"translate(32.723755, 62.264160) rotate(180.000000) translate(-32.723755, -62.264160) ","points":"29.6323242 57 35.4748535 57 39.4475098 67.5283203 26 67.5283203"}}),_vm._v(" "),_c('path',{attrs:{"d":"M33,60 C18.6405965,60 7,48.3594035 7,34 C7,19.6405965 18.6405965,8 33,8 C47.3594035,8 59,19.6405965 59,34 C59,48.3594035 47.3594035,60 33,60 Z M33,51 C42.3888407,51 50,43.3888407 50,34 C50,24.6111593 42.3888407,17 33,17 C23.6111593,17 16,24.6111593 16,34 C16,43.3888407 23.6111593,51 33,51 Z","id":"Combined-Shape"}})])])])}
var GearSVG_staticRenderFns = []
var GearSVG_esExports = { render: GearSVG_render, staticRenderFns: GearSVG_staticRenderFns }
/* harmony default export */ var GearSVG = (GearSVG_esExports);
// CONCATENATED MODULE: ./src/components/GearSVG.vue
function GearSVG_injectStyle (ssrContext) {
  __webpack_require__("JDCO")
}
var GearSVG_normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var GearSVG___vue_template_functional__ = false
/* styles */
var GearSVG___vue_styles__ = GearSVG_injectStyle
/* scopeId */
var GearSVG___vue_scopeId__ = "data-v-2bcd2381"
/* moduleIdentifier (server only) */
var GearSVG___vue_module_identifier__ = null
var GearSVG_Component = GearSVG_normalizeComponent(
  __vue_script__,
  GearSVG,
  GearSVG___vue_template_functional__,
  GearSVG___vue_styles__,
  GearSVG___vue_scopeId__,
  GearSVG___vue_module_identifier__
)

/* harmony default export */ var components_GearSVG = (GearSVG_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/VolumeControls.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var VolumeControls = ({
  components: {
    Slider: src_components_Slider
  },
  props: {},
  computed: {
    volume: function volume() {
      return this.$store.state.volume;
    }
  },
  methods: {
    changeVolume: function changeVolume(event) {
      this.$store.commit({
        type: 'changeVolume',
        volume: event
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7cfe52dd","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/VolumeControls.vue
var VolumeControls_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"volume-controls"},[_c('h2',{staticClass:"title"},[_vm._v("\n    Volume "),_c('span',{staticClass:"volume-value"},[_vm._v(_vm._s(_vm.volume))])]),_vm._v(" "),_c('slider',{attrs:{"cssClass":"blue-slider volume-slider","on-value-change":_vm.changeVolume,"value":_vm.volume,"min":0,"max":10}})],1)}
var VolumeControls_staticRenderFns = []
var VolumeControls_esExports = { render: VolumeControls_render, staticRenderFns: VolumeControls_staticRenderFns }
/* harmony default export */ var components_VolumeControls = (VolumeControls_esExports);
// CONCATENATED MODULE: ./src/components/VolumeControls.vue
function VolumeControls_injectStyle (ssrContext) {
  __webpack_require__("7zjD")
  __webpack_require__("TLZa")
}
var VolumeControls_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var VolumeControls___vue_template_functional__ = false
/* styles */
var VolumeControls___vue_styles__ = VolumeControls_injectStyle
/* scopeId */
var VolumeControls___vue_scopeId__ = "data-v-7cfe52dd"
/* moduleIdentifier (server only) */
var VolumeControls___vue_module_identifier__ = null
var VolumeControls_Component = VolumeControls_normalizeComponent(
  VolumeControls,
  components_VolumeControls,
  VolumeControls___vue_template_functional__,
  VolumeControls___vue_styles__,
  VolumeControls___vue_scopeId__,
  VolumeControls___vue_module_identifier__
)

/* harmony default export */ var src_components_VolumeControls = (VolumeControls_Component.exports);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5dafb02e","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/About.vue
var About_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var About_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h2',{staticClass:"title"},[_vm._v("About")]),_vm._v(" "),_c('p',{staticClass:"body"},[_vm._v("\n    Created by Gerard Burns, check out the \n    "),_c('a',{attrs:{"href":"https://github.com/Ghrehh/nsts-metronome"}},[_vm._v("GitHub")]),_vm._v("\n     repo if you're interested in how it works.\n  ")])])}]
var About_esExports = { render: About_render, staticRenderFns: About_staticRenderFns }
/* harmony default export */ var About = (About_esExports);
// CONCATENATED MODULE: ./src/components/About.vue
function About_injectStyle (ssrContext) {
  __webpack_require__("XJDc")
}
var About_normalizeComponent = __webpack_require__("VU/8")
/* script */
var About___vue_script__ = null
/* template */

/* template functional */
var About___vue_template_functional__ = false
/* styles */
var About___vue_styles__ = About_injectStyle
/* scopeId */
var About___vue_scopeId__ = "data-v-5dafb02e"
/* moduleIdentifier (server only) */
var About___vue_module_identifier__ = null
var About_Component = About_normalizeComponent(
  About___vue_script__,
  About,
  About___vue_template_functional__,
  About___vue_styles__,
  About___vue_scopeId__,
  About___vue_module_identifier__
)

/* harmony default export */ var components_About = (About_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/OptionsMenu.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var OptionsMenu = ({
  components: {
    VolumeControls: src_components_VolumeControls,
    About: components_About,
    'gear-svg': components_GearSVG
  },
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  computed: {},
  methods: {
    toggleOptionsOpen: function toggleOptionsOpen() {
      this.$store.commit({
        type: 'toggleOptionsOpen'
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5a691b94","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/OptionsMenu.vue
var OptionsMenu_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"drop"}},[(_vm.visible)?_c('div',{staticClass:"options-menu"},[_c('div',{staticClass:"options-menu-inner"},[_c('h1',{staticClass:"options-title"},[_vm._v("Options")]),_vm._v(" "),_c('div',{staticClass:"options"},[_c('volume-controls'),_vm._v(" "),_c('about')],1),_vm._v(" "),_c('div',{staticClass:"button close-options-menu-button",on:{"click":_vm.toggleOptionsOpen}},[_c('gear-svg'),_vm._v(" "),_c('p',[_vm._v("CLOSE")])],1)])]):_vm._e()])}
var OptionsMenu_staticRenderFns = []
var OptionsMenu_esExports = { render: OptionsMenu_render, staticRenderFns: OptionsMenu_staticRenderFns }
/* harmony default export */ var components_OptionsMenu = (OptionsMenu_esExports);
// CONCATENATED MODULE: ./src/components/OptionsMenu.vue
function OptionsMenu_injectStyle (ssrContext) {
  __webpack_require__("E0Qv")
}
var OptionsMenu_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var OptionsMenu___vue_template_functional__ = false
/* styles */
var OptionsMenu___vue_styles__ = OptionsMenu_injectStyle
/* scopeId */
var OptionsMenu___vue_scopeId__ = "data-v-5a691b94"
/* moduleIdentifier (server only) */
var OptionsMenu___vue_module_identifier__ = null
var OptionsMenu_Component = OptionsMenu_normalizeComponent(
  OptionsMenu,
  components_OptionsMenu,
  OptionsMenu___vue_template_functional__,
  OptionsMenu___vue_styles__,
  OptionsMenu___vue_scopeId__,
  OptionsMenu___vue_module_identifier__
)

/* harmony default export */ var src_components_OptionsMenu = (OptionsMenu_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Metronome.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var components_Metronome = ({
  components: {
    SiteHeader: src_components_SiteHeader,
    Display: src_components_Display,
    TimeSignatures: src_components_TimeSignatures,
    OptionsMenu: src_components_OptionsMenu,
    'metronome-svg': MetronomeSVG["default"],
    'gear-svg': components_GearSVG
  },
  computed: {
    metronomeOn: function metronomeOn() {
      return this.$store.state.metronomeOn;
    },
    optionsOpen: function optionsOpen() {
      return this.$store.state.optionsOpen;
    },
    toggleButtonText: function toggleButtonText() {
      return this.$store.state.metronomeOn ? 'STOP' : 'START';
    },
    toggleButtonCSS: function toggleButtonCSS() {
      var modifier = this.$store.state.metronomeOn ? 'stop' : 'start';
      return 'button toggle-metronome-button ' + modifier;
    },
    optionsButtonCSS: function optionsButtonCSS() {
      var modifier = this.$store.state.optionsOpen ? 'active' : '';
      return 'button options-button ' + modifier;
    }
  },
  methods: {
    toggleMetronomeOn: function toggleMetronomeOn() {
      this.$store.commit({
        type: 'toggleMetronome'
      });
    },
    toggleOptionsOpen: function toggleOptionsOpen() {
      this.$store.commit({
        type: 'toggleOptionsOpen'
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3a857318","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Metronome.vue
var Metronome_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('options-menu',{attrs:{"visible":_vm.optionsOpen}}),_vm._v(" "),_c('div',{staticClass:"main-page"},[_c('site-header'),_vm._v(" "),_c('display'),_vm._v(" "),_c('time-signatures',{attrs:{"time-signatures":[]}}),_vm._v(" "),_c('div',{staticClass:"buttons-container"},[_c('div',{class:_vm.toggleButtonCSS,on:{"click":_vm.toggleMetronomeOn}},[_c('metronome-svg'),_vm._v(" "),_c('p',{staticClass:"text"},[_vm._v(_vm._s(_vm.toggleButtonText))])],1),_vm._v(" "),_c('div',{class:_vm.optionsButtonCSS,on:{"click":_vm.toggleOptionsOpen}},[_c('gear-svg')],1)])],1)],1)}
var Metronome_staticRenderFns = []
var Metronome_esExports = { render: Metronome_render, staticRenderFns: Metronome_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_components_Metronome = (Metronome_esExports);
// CONCATENATED MODULE: ./src/components/Metronome.vue
function Metronome_injectStyle (ssrContext) {
  __webpack_require__("tGRc")
}
var Metronome_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Metronome___vue_template_functional__ = false
/* styles */
var Metronome___vue_styles__ = Metronome_injectStyle
/* scopeId */
var Metronome___vue_scopeId__ = "data-v-3a857318"
/* moduleIdentifier (server only) */
var Metronome___vue_module_identifier__ = null
var Metronome_Component = Metronome_normalizeComponent(
  components_Metronome,
  selectortype_template_index_0_src_components_Metronome,
  Metronome___vue_template_functional__,
  Metronome___vue_styles__,
  Metronome___vue_scopeId__,
  Metronome___vue_module_identifier__
)

/* harmony default export */ var src_components_Metronome = (Metronome_Component.exports);

// CONCATENATED MODULE: ./src/router/index.js




vue_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

var routes = [{ path: '/', component: src_components_Metronome }];

/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  mode: 'history',
  routes: routes
}));
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("Zrlr");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__("wxAW");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/howler/dist/howler.js
var howler = __webpack_require__("k9Ku");
var howler_default = /*#__PURE__*/__webpack_require__.n(howler);

// CONCATENATED MODULE: ./src/lib/metronome/SoundPlayer.js




var getFile = function getFile(accent) {
  return accent ? '/static/sounds/accent-hit.mp3' : '/static/sounds/hit.mp3';
};

var SoundPlayer_Player = function () {
  function Player(accentPlayer, player) {
    classCallCheck_default()(this, Player);

    this.accentPlayer = accentPlayer;
    this.player = player;
  }

  createClass_default()(Player, [{
    key: 'playAccent',
    value: function playAccent() {
      this.accentPlayer.play();
    }
  }, {
    key: 'play',
    value: function play() {
      this.player.play();
    }
  }, {
    key: 'changeVolume',
    value: function changeVolume(volume) {
      var parsedVolume = volume / 10;
      this.accentPlayer.volume(parsedVolume);
      this.player.volume(parsedVolume);
    }
  }]);

  return Player;
}();

/* harmony default export */ var SoundPlayer = (function () {
  var volume = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

  var parsedVolume = volume / 10;

  return new SoundPlayer_Player(new howler["Howl"]({ src: [getFile(true)], volume: parsedVolume }), new howler["Howl"]({ src: [getFile()], volume: parsedVolume }));
});
// CONCATENATED MODULE: ./src/store/state.js


/* harmony default export */ var store_state = ({
  bpm: 120,
  metronomeOn: false,
  optionsOpen: false,
  beatsPerMeasure: 4,
  currentBeat: 0,
  volume: 10,
  soundPlayer: SoundPlayer()
});
// CONCATENATED MODULE: ./src/lib/metronome/index.js


var metronome_Metronome = function () {
  function Metronome(store) {
    classCallCheck_default()(this, Metronome);

    this.soundPlayer = store.state.soundPlayer;
    this.state = store.state;
    this.store = store;

    this.on = false;
  }

  createClass_default()(Metronome, [{
    key: 'start',
    value: function start() {
      this.on = true;
      this._play();
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.on = false;
    }
  }, {
    key: '_playSound',
    value: function _playSound() {
      this.state.currentBeat === 0 ? this.soundPlayer.playAccent() : this.soundPlayer.play();
    }
  }, {
    key: '_getNewBeat',
    value: function _getNewBeat() {
      if (this.state.currentBeat >= this.state.beatsPerMeasure - 1) {
        return 0;
      }

      return this.state.currentBeat + 1;
    }
  }, {
    key: '_changeBeat',
    value: function _changeBeat() {
      if (!this.on) return;

      this.store.commit({
        type: 'changeCurrentBeat',
        currentBeat: this._getNewBeat()
      });
    }
  }, {
    key: '_waitTime',
    value: function _waitTime() {
      var minute = 60000;

      return minute / this.state.bpm;
    }
  }, {
    key: '_play',
    value: function _play() {
      var _this = this;

      if (this.on) this._playSound();

      if (this.on) {
        setTimeout(function () {
          _this._changeBeat();
          _this._play();
        }, this._waitTime());
      }
    }
  }]);

  return Metronome;
}();

var newMetronome = function newMetronome(store) {
  return new metronome_Metronome(store);
};
// CONCATENATED MODULE: ./src/store/mutations.js


/* harmony default export */ var mutations = ({
  changeBPM: function changeBPM(state, payload) {
    state.bpm = payload.bpm;
  },
  changeBeatsPerMeasure: function changeBeatsPerMeasure(state, payload) {
    state.beatsPerMeasure = payload.beatsPerMeasure;
  },
  changeCurrentBeat: function changeCurrentBeat(state, payload) {
    state.currentBeat = payload.currentBeat;
  },
  toggleOptionsOpen: function toggleOptionsOpen(state) {
    state.optionsOpen = !state.optionsOpen;
  },
  changeVolume: function changeVolume(state, payload) {
    state.volume = payload.volume;
    state.soundPlayer.changeVolume(state.volume);
  },
  toggleMetronome: function toggleMetronome(state) {
    state.metronomeOn = !state.metronomeOn;

    if (state.metronomeOn) {
      state.metronome = newMetronome(this);
      state.metronome.start();
    } else {
      state.metronome.stop();
      state.currentBeat = 0;
    }
  }
});
// CONCATENATED MODULE: ./src/store/index.js






vue_esm["a" /* default */].use(vuex_esm["a" /* default */]);

/* harmony default export */ var src_store = (new vuex_esm["a" /* default */].Store({ state: store_state, mutations: mutations }));
// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





vue_esm["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new vue_esm["a" /* default */]({
  el: '#app',
  store: src_store,
  router: router,
  template: '<App/>',
  components: { App: App["default"] }
});

/***/ }),

/***/ "TLZa":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "XJDc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dF6M":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dHfe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"metronome-svg-container",attrs:{"width":"33px","height":"44px","viewBox":"0 0 33 44","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{staticClass:"metronome-svg",attrs:{"stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"On","transform":"translate(-1094.000000, -283.000000)"}},[_c('g',{attrs:{"id":"start-button","transform":"translate(692.000000, 283.000000)"}},[_c('g',{attrs:{"id":"metronome-copy-4","transform":"translate(402.000000, 0.000000)"}},[_c('path',{attrs:{"d":"M0,43.5228444 L10.8584764,0 L21.8141881,0 L32.4638476,43.5228444 L0,43.5228444 Z M5.38819048,32.1336889 L27.0756571,32.1336889 L19.9611543,2.03377778 L12.6421934,2.03377778 L5.38819048,32.1336889 Z","id":"Combined-Shape","fill":"#000000"}}),_vm._v(" "),_c('polygon',{attrs:{"id":"inner-copy","points":"12.6746724 32.1336889 19.9611543 32.1336889 19.9611543 2.03377778 12.6421934 2.03377778"}}),_vm._v(" "),_c('g',{staticClass:"stick",attrs:{"id":"stick","transform":"translate(12.952381, 4.259259)","fill":"#000000"}},[_c('g',{staticClass:"stick-inner",attrs:{"fill":"#000000"}},[_c('rect',{attrs:{"id":"Rectangle-7","x":"2.26925714","y":"0.350637037","width":"1.61645714","height":"32.4048593"}}),_vm._v(" "),_c('polygon',{attrs:{"id":"Path-2","points":"0.91609256 7.67223704 5.2327619 7.67223704 4.41721278 10.7956559 1.73754167 10.7956559"}})])]),_vm._v(" "),_c('path',{attrs:{"d":"M2.90912451,31.8625185 L29.6106678,31.8625185 L32.4638476,43.5228444 L0,43.5228444 L2.90912451,31.8625185 Z","id":"cover","fill":"#000000"}})])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "qTSk":
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "s/Bg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "t9zP":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "tGRc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "xJD8":
/***/ (function(module, exports) {

//
//
//
//

/***/ }),

/***/ "zOHI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('router-view')}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.44d940f3916d2b4159ec.js.map