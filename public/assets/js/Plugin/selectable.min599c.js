/*!
 * Remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/selectable",["exports","jquery","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("jquery"),require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.jQuery,global.Plugin),global.PluginSelectable=mod.exports}}(this,function(exports,_jquery,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _jquery2=babelHelpers.interopRequireDefault(_jquery),_Plugin3=babelHelpers.interopRequireDefault(_Plugin2),Selectable=function(_Plugin){function Selectable(){return babelHelpers.classCallCheck(this,Selectable),babelHelpers.possibleConstructorReturn(this,(Selectable.__proto__||Object.getPrototypeOf(Selectable)).apply(this,arguments))}return babelHelpers.inherits(Selectable,_Plugin),babelHelpers.createClass(Selectable,[{key:"getName",value:function(){return"selectable"}},{key:"render",value:function(){_jquery2.default.fn.asSelectable&&this.$el.asSelectable(this.options)}}],[{key:"getDefaults",value:function(){return{allSelector:".selectable-all",itemSelector:".selectable-item",rowSelector:"tr",rowSelectable:!1,rowActiveClass:"active",onChange:null}}}]),Selectable}(_Plugin3.default);_Plugin3.default.register("selectable",Selectable),exports.default=Selectable});